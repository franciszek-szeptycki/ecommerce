from django.urls import path
from .views import *

urlpatterns = [
    path("categories/", category_list, name="category-list"),
    path("categories/<slug:slug>/", category_elements, name="category-elements"),
    path("products/", product_list, name="product-list"),
    path("products/<slug:slug>/", product_details, name="product-detail"),
    path("slider/", slider_images, name="slider-images"),
]