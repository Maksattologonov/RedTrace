# Generated by Django 3.1.5 on 2021-02-09 07:16

from django.db import migrations, models
import mainapp.models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0007_auto_20210209_1140'),
    ]

    operations = [
        migrations.CreateModel(
            name='Instruments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Введите название инструмента', max_length=255, verbose_name='Имя')),
                ('image', models.ImageField(default='media/promotion.jpg', help_text='Загрузка картины', upload_to=mainapp.models.upload_to)),
            ],
            options={
                'verbose_name': 'Инструмент',
                'verbose_name_plural': 'Инструменты',
            },
        ),
        migrations.AlterModelOptions(
            name='portfolio',
            options={'verbose_name': 'Портфолио', 'verbose_name_plural': 'Портфолии'},
        ),
    ]