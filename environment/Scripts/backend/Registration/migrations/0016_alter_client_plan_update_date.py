# Generated by Django 4.1.7 on 2023-04-23 19:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0015_alter_client_plan_update_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='plan_update_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 4, 23, 21, 29, 27, 510884)),
        ),
    ]
