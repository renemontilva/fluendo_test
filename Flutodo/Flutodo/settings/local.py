from .base import *

DEBUG = True
ALLOWED_HOSTS = []

DATABASES = { 
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'fluendo',
    }
}

#DATABASES = {
#            'default': {
#               'ENGINE': 'django.db.backends.postgresql_psycopg2',
#               'NAME': 'fluendo',
#               'USER': 'fluendo',
#               'PASSWORD': 'fluendo',
#               'HOST': 'localhost',
#               'PORT': '5432',
#            }
#}


EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

DEBUG_TOOLBAR_PATCH_SETTINGS = False
INTERNAL_IPS = ('127.0.0.1', 'localhost')

STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(os.path.dirname(BASE_DIR), 'static')]

#STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), "static_cdn")

INSTALLED_APPS += ['debug_toolbar']
MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware']
