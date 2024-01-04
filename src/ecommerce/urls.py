from django.contrib import admin
from django.urls import path
from . import views

app_name = "ecommerce"

urlpatterns = [
    path("", views.index, name="index"),
    path("cart/", views.cart, name="cart"),
    path("checkout/", views.checkout, name="checkout"),
    path('update_item/', views.updateItem, name="update_item"),
]
