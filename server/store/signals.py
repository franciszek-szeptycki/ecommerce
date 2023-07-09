from django.db.models.signals import pre_save, pre_delete
from django.dispatch import receiver
from django.utils.text import slugify
from django.core.files.storage import default_storage
from .models import *


@receiver(pre_save, sender=Product)
@receiver(pre_save, sender=Category)
def create_or_update_slug(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.name)


@receiver(pre_delete, sender=ProductImage)
@receiver(pre_delete, sender=Product)
def delete_image(sender, instance, **kwargs):
    if instance.image:
        default_storage.delete(instance.image.path)