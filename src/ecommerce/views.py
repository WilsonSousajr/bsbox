from django.shortcuts import render, HttpResponse

def index(request):
    context = {}
    return render(request, "src/index.html", context)

def cart(request):
    context = {}
    return render(request, "src/cart.html", context)

def checkout(request):
    context = {}
    return render(request, "src/checkout.html", context)
