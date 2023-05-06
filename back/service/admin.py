from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Service)
admin.site.register(models.SpeakingClub)
admin.site.register(models.MovieNight)