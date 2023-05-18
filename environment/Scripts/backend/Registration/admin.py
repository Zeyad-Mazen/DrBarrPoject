from django.contrib import admin
from .models import Client
from django.http import HttpResponse
import csv

# Register your models here.

class ClientAdmin(admin.ModelAdmin):
	list_display = ('full_name', 'phone_number', 'start_date', 'expiration_date','New_Plan_In','paid' ,'notes')
	search_fields = ['full_name', 'phone_number']
	actions =['export', 'paid']
	def export(self,request,queryset):
		response = HttpResponse(content_type='text/csv')

		writer = csv.writer(response)
		writer.writerow(['Full Name', 'Weight', 'Waist Circumference', 'Expirarion Date'])

		for member in Client.objects.all().values_list('full_name', 'weight', 'waist_circumference', 'expiration_date'):
			writer.writerow(member)

		response['Content-Disposition'] = 'attachment; filename="members.csv"'

		return response

	def paid(self,request,queryset):
		queryset.update(paid =True)
	
admin.site.register(Client, ClientAdmin)




