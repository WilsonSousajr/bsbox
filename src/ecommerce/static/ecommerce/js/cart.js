let updateButtons = document.querySelectorAll(".update-cart")

function updateCartUI() {
    $.ajax({
        type: "GET",
        url: "/cart/",
        success: function (data) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, "text/html");
            let cartTotal = $(doc).find("#cart-total").html();
            $("#cart-total").html(cartTotal)
        }
    });
}


function addCookieItem(productId, action){
    if(action == 'add'){
        if(cart[productId] == undefined){
            cart[productId] = {'quantity': 1}
        }
        else{
            cart[productId]['quantity'] += 1
        }
    }

    if(action == 'remove'){
        cart[productId]['quantity'] -= 1

        if(cart[productId]['quantity'] <= 0){
            delete cart[productId]
        }
    }

    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    updateCartUI()

}
function updateUserOrder(productId, action){
    let url = "/update_item/"

    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateCartUI()
    })
}

function createEventListener(item){
    item.addEventListener('click', function(){
        let productId = this.dataset.product
        let action = this.dataset.action
        if(user === 'AnonymousUser'){
            addCookieItem(productId, action)
        }
        else{
            updateUserOrder(productId, action)
        }
    })
}
updateButtons.forEach(createEventListener)
