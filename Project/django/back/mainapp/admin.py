from django.contrib import admin

from .models import Service


class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'image', 'pub_date')
    list_display_links = ('id', 'text')
    search_fields = ('id', 'text', 'pub_date')


admin.site.register(Service, ServiceAdmin)
