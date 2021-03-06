# Generated by Django 3.1.5 on 2021-02-06 06:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_auto_20210205_2320'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Введите свои данные', max_length=255, verbose_name='Имя')),
                ('number', models.CharField(max_length=255, verbose_name='Номер телефона')),
                ('number_second', models.CharField(blank=True, max_length=255, verbose_name='Второй номер')),
                ('email', models.EmailField(help_text='введите свою почту', max_length=255)),
            ],
            options={
                'verbose_name': 'Контакты',
                'verbose_name_plural': 'Контакт',
            },
        ),
        migrations.AlterField(
            model_name='service',
            name='image',
            field=models.ImageField(blank=True, upload_to='', verbose_name='./react/src/media'),
        ),
        migrations.AlterField(
            model_name='service',
            name='pub_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Дата'),
        ),
        migrations.AlterField(
            model_name='service',
            name='text',
            field=models.CharField(max_length=255, verbose_name='Название проекта'),
        ),
    ]
