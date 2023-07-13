from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'slug', 'price', 'image']

class ProductDetalisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields = '__all__'