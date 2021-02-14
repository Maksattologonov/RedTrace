import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

SECRET_KEY = 'g(#89%z)i1*tl#ioij(=!9y1&x#6ru!hj&j43#06058&yk9#7)'

DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1']

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'react/build/static')
]