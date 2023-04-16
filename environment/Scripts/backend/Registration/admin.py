from django.contrib import admin
from .models import Client

# Register your models here.

class ClientAdmin(admin.ModelAdmin):
	list_display = ('full_name', 'duration', 'phone_number', 'start_date', 'expiration_date','New_Plan_In' ,'notes')
	search_fields = ['full_name', 'phone_number']
admin.site.register(Client, ClientAdmin)

