from django.contrib import admin
from .models import PaymentData
# Register your models here.
class PaymentAdmin(admin.ModelAdmin):
	list_display =('vCash_Num', 'bankAccount_Num' )
	search_fields= ['vCash_Num', 'bankAccount_Num' ]
admin.site.register(PaymentData, PaymentAdmin)