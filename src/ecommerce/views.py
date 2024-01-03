from django.shortcuts import render, HttpResponse
from .models import *

def index(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, "src/index.html", context)

def cart(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_cart_total': 0, 'get_cart_items': 0}
    context = {'items':items, "order":order}
    return render(request, "src/cart.html", context)

def checkout(request):
    context = {}
    return render(request, "src/checkout.html", context)
