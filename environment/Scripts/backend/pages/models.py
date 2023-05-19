from django.db import models

# Create your models here.

class PaymentData(models.Model):
    vCash_Num = models.CharField(max_length= 11, help_text='Enter 11 numbers "EX: 01XXXXXXXXX"')
    bankAccount_Num = models.CharField(max_length= 19, help_text='Enter 16 numbers "EX: XXXX-XXXX-XXXX-XXXX"')

class ClientsMessages(models.Model):
    Client_Name = models.TextField()
    Client_Message = models.TextField()
