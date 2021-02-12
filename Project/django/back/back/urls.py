from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from mainapp.views import index

from . import settings

urlpatterns = [
    path('', include('mainapp.urls')),
    path('admin/', admin.site.urls),
    path('', index),
    path('about-us/', index),
    path('about-us/services', index),
    path('about-us/instruments', index),
    path('about-us/portfolio', index),
    path('about-us/contacts', index),
    path('about-us/callback', index),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
