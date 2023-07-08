import os
import django

# Ustawienia środowiska Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "app.settings")
django.setup()

from django.contrib.auth.models import User

def create_admin():
    username = 'admin'
    password = 'admin123'
    email = 'admin@example.com'

    if User.objects.filter(username=username).exists():
        print('Konto administratora już istnieje.')
        return

    # Tworzenie konta administratora
    admin = User.objects.create_superuser(username=username, email=email, password=password)
    print('Konto administratora zostało utworzone.')


if __name__ == '__main__':
    create_admin()
