from django.db import models

# Create your models here.
class Reel(models.Model):
	number= models.CharField(max_length= 150)
	video_link= models.URLField()
	Video_name= models.CharField(max_length=100)

 