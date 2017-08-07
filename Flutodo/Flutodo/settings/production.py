from .base import *


DEBUG = True
ALLOWED_HOSTS = []

DATABASES = {
            'default': {
               'ENGINE': 'django.db.backends.postgresql_psycopg2',
               'NAME': 'fluendo',
               'USER': 'fluendo',
               'PASSWORD': 'fluendo',
               'HOST': 'localhost',
               'PORT': '5432',
            }
}


STATIC_URL = '/static/'

STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), "static_cdn")


EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

LOGIN_REDIRECT_URL = '/todo/list'

STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(os.path.dirname(BASE_DIR), 'static')]

#STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), "static_cdn")


