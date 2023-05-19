from django.contrib import admin
from .models import *
# Register your models here.
class PaymentAdmin(admin.ModelAdmin):
	list_display =('vCash_Num', 'bankAccount_Num' )
	search_fields= ['vCash_Num', 'bankAccount_Num' ]
admin.site.register(PaymentData, PaymentAdmin)

class MessagesAdmin(admin.ModelAdmin):
	list_display =('Client_Name', 'Client_Message' )
	search_fields= ['Client_Name', 'Client_Message' ]
admin.site.register(ClientsMessages, MessagesAdmin)
