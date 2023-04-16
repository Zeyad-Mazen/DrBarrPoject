# Generated by Django 4.1.7 on 2023-03-12 20:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0008_alter_dayscountdown_plan_update_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='latest_plan_sent',
        ),
        migrations.AddField(
            model_name='client',
            name='plan_update_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 3, 12, 22, 18, 18, 935405)),
        ),
        migrations.DeleteModel(
            name='DaysCountdown',
        ),
    ]
