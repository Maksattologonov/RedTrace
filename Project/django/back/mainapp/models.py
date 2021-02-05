from django.db import models


class Service(models.Model):
    text = models.CharField(max_length=255, verbose_name='Название проекта', blank=True)
    image = models.ImageField('./react/src/media', blank=False)
    pub_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата')

    class Meta:
        verbose_name = 'Проекты'
        verbose_name_plural = 'Проект'

    def __str__(self):
        return self.text
