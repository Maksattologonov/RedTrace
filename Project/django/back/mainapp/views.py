import permission as permission
from django.shortcuts import render
from rest_framework import permissions, status, viewsets
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ContactSerializer, ServiceSerializer, PortfolioSerializer, InstrumentsSerializer, \
    CallSerializer
from .models import Contact, Service, Portfolio, Instruments, Call


def index(request):
    return render(request, 'index.html', {})


class ContactView(APIView):
    def get(self, request, format=None):
        photo = Contact.objects.all()
        serializer = ContactSerializer(photo, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class ServiceView(APIView):
    def get(self, request, format=None):
        photo = Service.objects.all()
        serializer = ServiceSerializer(photo, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class PortfolioView(APIView):
    def get(self, request, format=None):
        name = Portfolio.objects.all()
        serializer = PortfolioSerializer(name, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class InstrumentView(APIView):

    def get(self, request, format=None):
        name = Instruments.objects.all()
        serializer = InstrumentsSerializer(name, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class CallViewSet(CreateAPIView):
    serializer_class = CallSerializer
