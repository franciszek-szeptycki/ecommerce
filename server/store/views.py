from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *


##################
#   categories   #
##################

@api_view(['GET'])
def category_list(_):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def category_elements(_, slug):
    categories = Category.objects.get(slug=slug)
    products = Product.objects.filter(category=categories)
    serializer = ProductListSerializer(products, many=True)
    return Response(serializer.data)


################
#   products   #
################

@api_view(['GET'])
def product_list(_):
    products = Product.objects.all()
    serializer = ProductListSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_details(_, slug):
    products = Product.objects.get(slug=slug)
    images = ProductImage.objects.filter(product=products)
    
    prod_serializer = ProductDetalisSerializer(products, many=False)
    img_serializer = ProductImageSerializer(images, many=True)

    data = prod_serializer.data
    data['images'] = img_serializer.data

    return Response(data)


############
#  slider  #
############

@api_view(['GET'])
def slider_images(_):
    images = SliderImage.objects.all()
    serializer = SliderImageSerializer(images, many=True)
    return Response(serializer.data)


##############
#  about us  #
##############

@api_view(['GET'])
def about_us(_):
    description = AboutUsDescription.objects.first()
    serializer = AboutUsDescriptionSerializer(description, many=False)
    teammates = AboutUsTeammate.objects.all()
    teammates_serializer = AboutUsTeammateSerializer(teammates, many=True)
    data = serializer.data
    data['teammates'] = teammates_serializer.data
    return Response(data)