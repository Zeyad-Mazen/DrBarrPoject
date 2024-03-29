# Generated by Django 4.1.7 on 2023-05-17 19:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0004_alter_client_plan_update_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='paid',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='client',
            name='plan_update_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 5, 17, 22, 31, 42, 277072)),
        ),
    ]
