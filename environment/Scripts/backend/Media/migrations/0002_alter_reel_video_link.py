# Generated by Django 4.1.7 on 2023-03-10 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Media', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reel',
            name='video_link',
            field=models.CharField(max_length=250),
        ),
    ]
