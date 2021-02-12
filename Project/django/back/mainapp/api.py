from rest_framework import viewsets, permissions, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Service, Contact, Call
from .serializers import ServiceSerializer, ContactSerializer, CallSerializer


class ServiceViewSet(APIView):
    queryset = Service.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ServiceSerializer


