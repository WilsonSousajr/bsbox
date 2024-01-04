let updateButtons = document.querySelectorAll(".update-cart")

function updateUserOrder(productId, action){
    console.log('User is logged in, sending data...')

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
        console.log(`Data: ${data}`)
        location.reload()
    })
}

function createEventListener(item){
    item.addEventListener('click', function(){
        let productId = this.dataset.product
        let action = this.dataset.action

        console.log(`productId: ${productId}, action: ${action}`)
        console.log(`USER: ${user}`)

        if(user === 'AnonymousUser'){
            console.log("User is not logged in.")
        }
        else{
            updateUserOrder(productId, action)
        }
    })
}


updateButtons.forEach(createEventListener)