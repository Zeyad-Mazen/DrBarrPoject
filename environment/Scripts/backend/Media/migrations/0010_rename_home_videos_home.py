# Generated by Django 4.1.7 on 2023-03-10 17:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Media', '0009_rename_reel_home_videos'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Home_Videos',
            new_name='Home',
        ),
    ]
