#!/bin/bash

python manage.py makemigrations
python manage.py migrate

# python manage.py collectstatic --noinput

python create_admin.py

gunicorn --bind 0.0.0.0:8000 app.wsgi:application
# python manage.py runserver
