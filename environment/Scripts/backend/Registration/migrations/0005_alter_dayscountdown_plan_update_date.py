# Generated by Django 4.1.7 on 2023-03-12 20:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0004_alter_dayscountdown_plan_update_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dayscountdown',
            name='plan_update_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 3, 12, 22, 1, 33, 472070)),
        ),
    ]
