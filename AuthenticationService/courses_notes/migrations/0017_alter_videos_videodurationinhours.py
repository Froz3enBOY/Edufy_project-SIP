# Generated by Django 4.1.10 on 2023-07-23 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses_notes", "0016_alter_videos_videodurationinhours"),
    ]

    operations = [
        migrations.AlterField(
            model_name="videos",
            name="videoDurationInHours",
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
