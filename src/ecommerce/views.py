from django.shortcuts import render, HttpResponse
from .models import *

def index(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, "src/index.html", context)

def cart(request):
    context = {}
    return render(request, "src/cart.html", context)

def checkout(request):
    context = {}
    return render(request, "src/checkout.html", context)
