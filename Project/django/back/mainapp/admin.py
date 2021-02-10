from django.contrib import admin

from .models import Service, Contact, Portfolio, Instruments, Call


class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'text', 'image', 'pub_date')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title', 'text', 'pub_date')


admin.site.register(Service, ServiceAdmin)


class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number', 'number_second', 'email')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')


admin.site.register(Contact, ContactAdmin)


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'text', 'image', 'url')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')


admin.site.register(Portfolio, PortfolioAdmin)


class InstrumentsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'image')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')


admin.site.register(Instruments, InstrumentsAdmin)


class CallAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'last_name', 'number', 'email', 'date', 'only_massage')
    list_display_links = ('id', 'name', 'last_name', 'number', 'email', 'date', 'only_massage')
    search_fields = ('id', 'name', 'last_name', 'number', 'email', 'date', 'only_massage')


admin.site.register(Call, CallAdmin)
