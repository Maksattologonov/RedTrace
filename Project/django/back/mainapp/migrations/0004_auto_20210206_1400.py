# Generated by Django 3.1.5 on 2021-02-06 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_auto_20210206_1229'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'Контакт', 'verbose_name_plural': 'Контакты'},
        ),
        migrations.AlterModelOptions(
            name='service',
            options={'verbose_name': 'Проект', 'verbose_name_plural': 'Проекты'},
        ),
        migrations.AddField(
            model_name='service',
            name='title',
            field=models.CharField(default=21312321312, max_length=255, verbose_name='Заголовок'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='service',
            name='text',
            field=models.CharField(max_length=566, verbose_name='Описание'),
        ),
    ]