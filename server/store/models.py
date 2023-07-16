from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True, blank=False)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, editable=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"


class Product(models.Model):
    category = models.ForeignKey(Category, related_name="products", on_delete=models.CASCADE)

    name = models.CharField(max_length=255, unique=True, blank=False)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, editable=False)

    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to="products/", blank=True, null=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="products/", blank=True, null=True)

    def __str__(self):
        return f"{self.product.name} Image"


class SliderImage(models.Model):
    image = models.ImageField(upload_to="slider/", blank=True, null=True)

    def __str__(self):
        return self.image
    

class AboutUsDescription(models.Model):
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.description

    def save(self, *args, **kwargs):
        if AboutUsDescription.objects.exists():
            existing_record = AboutUsDescription.objects.first()
            existing_record.description = self.description
            existing_record.save()
        else:
            super(AboutUsDescription, self).save(*args, **kwargs)
    
class AboutUsTeammate(models.Model):
    name = models.CharField(max_length=255, unique=True, blank=False)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to="aboutus/", blank=True, null=True)

    def __str__(self):
        return self.name