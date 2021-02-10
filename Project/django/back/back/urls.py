from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from mainapp.views import index

from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('', include('mainapp.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)