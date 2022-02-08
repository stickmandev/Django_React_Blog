# Generated by Django 3.2.9 on 2022-01-24 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0012_alter_blog_content'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogcomments',
            name='author',
        ),
        migrations.AddField(
            model_name='blogcomments',
            name='ip',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='blogcomments',
            name='name',
            field=models.CharField(default='Annonymous', max_length=255),
        ),
    ]
