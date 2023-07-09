# Generated by Django 4.2.2 on 2023-07-08 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("store", "0010_remove_category_slug_remove_product_slug"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
            name="slug",
            field=models.SlugField(
                blank=True, editable=False, max_length=255, null=True, unique=True
            ),
        ),
        migrations.AddField(
            model_name="product",
            name="slug",
            field=models.SlugField(
                blank=True, editable=False, max_length=255, null=True, unique=True
            ),
        ),
    ]
