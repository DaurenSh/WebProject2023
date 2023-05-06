from django.db import models

# Create your models here.

class Service(models.Model):
    title = models.CharField(max_length=100)
    price = models.IntegerField()
    description= models.TextField()
    time = models.TimeField()

class SpeakingClub(models.Model):
    language = models.CharField(max_length=50)
    date = models.DateField()
    time = models.TimeField()

class MovieNight(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateField()
    time = models.TimeField()
    language = models.CharField(max_length=100)
    description= models.TextField()