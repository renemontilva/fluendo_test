# local.py
from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'fluendo',
        'USER': 'fluendo',
        'PASSWORD': 'fluendo',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}


STATIC_URL = '/static/'
