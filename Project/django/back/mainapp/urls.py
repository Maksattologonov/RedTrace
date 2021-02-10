
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .api import CallViewSet
from .views import ContactView, ServiceView, PortfolioView, InstrumentView

urlpatterns = format_suffix_patterns([
    path('api/service', ServiceView.as_view(), name='service'),
    path('api/contact', ContactView.as_view(), name='contact'),
    path('api/call', CallViewSet ),
    path('api/portfolio', PortfolioView.as_view(), name='portfolio'),
    path('api/instruments', InstrumentView.as_view(), name='instruments'),
])


