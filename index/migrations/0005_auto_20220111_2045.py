# Generated by Django 3.2.9 on 2022-01-11 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0004_auto_20220111_2040'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogcomments',
            name='comment',
        ),
        migrations.AlterField(
            model_name='blogcomments',
            name='author',
            field=models.TextField(),
        ),
    ]
