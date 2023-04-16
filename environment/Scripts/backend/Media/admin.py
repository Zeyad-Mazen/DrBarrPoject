from django.contrib import admin
from .models import Reel
# Register your models here.
class ReelAdmin(admin.ModelAdmin):
	list_display =('number', 'Video_name' )
	search_fields= ['number', 'Video_name' ]
admin.site.register(Reel, ReelAdmin)