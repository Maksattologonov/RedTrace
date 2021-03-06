# Generated by Django 3.1.5 on 2021-02-09 05:40

from django.db import migrations, models
import mainapp.models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0006_auto_20210208_1244'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Введите название проекта', max_length=255, verbose_name='Имя')),
                ('text', models.CharField(help_text='Введите описание', max_length=255, verbose_name='Текст')),
                ('image', models.ImageField(default='media/promotion.jpg', help_text='Загрузка картины', upload_to=mainapp.models.upload_to)),
                ('url', models.URLField()),
            ],
        ),
        migrations.AlterModelOptions(
            name='service',
            options={'verbose_name': 'Услуга', 'verbose_name_plural': 'Услуги'},
        ),
    ]
