# Generated by Django 3.1.5 on 2021-02-12 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0012_auto_20210212_2232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='call',
            name='date',
            field=models.CharField(blank=True, max_length=255, verbose_name='Когда удобно позвонить'),
        ),
        migrations.AlterField(
            model_name='call',
            name='email',
            field=models.CharField(blank=True, max_length=255, verbose_name='Почта'),
        ),
        migrations.AlterField(
            model_name='call',
            name='only_massage',
            field=models.CharField(blank=True, max_length=50, verbose_name='Только позвонить'),
        ),
    ]