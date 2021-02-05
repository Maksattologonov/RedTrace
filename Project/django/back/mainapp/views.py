from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView


def index(request):
    return render(request, 'index.html', {})


class TestApiView(APIView):

    def get(self, request):
        data = [{'id': '1', 'name': "Maks"},
                {'id': '2', 'name': 'Amankul'}]
        return Response(request, data)
