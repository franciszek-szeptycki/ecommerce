from django.contrib import admin
from .models import *


admin.site.register((Product, Category, ProductImage, SliderImage, AboutUsDescription, AboutUsTeammate))
