from django.urls import path
from rest_framework import routers

from .api import ServiceViewSet

router = routers.DefaultRouter()
router.register('api/service', ServiceViewSet, 'service')

urlpatterns = router.urls
