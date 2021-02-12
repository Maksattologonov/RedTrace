from django.db import models
from django.utils.translation import gettext_lazy as _


def upload_to(instance, filename):
    return f'media/{filename}'.format(filename=filename)


class Service(models.Model):
    title = models.CharField(max_length=255, verbose_name='Заголовок')
    text = models.CharField(max_length=566, verbose_name='Описание')
    image = models.ImageField(_('Image'), upload_to=upload_to, default="media/default.jpg", blank=True)
    pub_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата')

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'

    def __str__(self):
        return self.text


class Contact(models.Model):
    name = models.CharField(max_length=255, verbose_name='Имя', help_text='Введите свои данные')
    number = models.CharField(max_length=255, verbose_name='Номер телефона')
    number_second = models.CharField(max_length=255, verbose_name='Второй номер', blank=True)
    email = models.EmailField(max_length=255, help_text='введите свою почту')

    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'

    def __str__(self):
        return self.name


class Portfolio(models.Model):
    name = models.CharField(max_length=255, verbose_name='Имя', help_text='Введите название проекта')
    text = models.CharField(max_length=255, verbose_name='Текст', help_text='Введите описание')
    image = models.ImageField(upload_to=upload_to, default='media/promotion.jpg', help_text='Загрузка картины')
    url = models.URLField(max_length=200)

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return self.name


class Instruments(models.Model):
    name = models.CharField(max_length=255, verbose_name='Имя', help_text='Введите название инструмента')
    image = models.ImageField(upload_to=upload_to, default='media/promotion.jpg', help_text='Загрузка картины')

    class Meta:
        verbose_name = 'Инструмент'
        verbose_name_plural = 'Инструменты'

    def __str__(self):
        return self.name


class Call(models.Model):
    name = models.CharField(max_length=255, verbose_name='Имя', blank=False)
    last_name = models.CharField(max_length=255, verbose_name='Фамилия', blank=False)
    number = models.CharField(max_length=255, verbose_name='Номер телефона', blank=False)
    email = models.CharField(max_length=255, verbose_name="Почта", blank=True)
    date = models.CharField(max_length=255, verbose_name='Когда удобно позвонить', blank=True)
    only_massage = models.CharField(max_length=50,verbose_name='Только позвонить', blank=True)

    class Meta:
        verbose_name = 'Заказ звонка'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return self.name
