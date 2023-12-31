# Generated by Django 4.2.2 on 2023-07-08 15:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("store", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("slug", models.SlugField(max_length=255)),
                ("description", models.TextField(blank=True, null=True)),
                ("price", models.DecimalField(decimal_places=2, max_digits=6)),
                (
                    "image",
                    models.ImageField(blank=True, null=True, upload_to="uploads/"),
                ),
                (
                    "category",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="products",
                        to="store.category",
                    ),
                ),
            ],
        ),
    ]
