from rest_framework import viewsets, permissions

from .models import Service
from .serializers import ServiceSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ServiceSerializer
