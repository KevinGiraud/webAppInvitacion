from django.db import models

# Create your models here.
class invitado(models.Model):
    Dni = models.CharField(primary_key = True, max_length = 8)
    nombre =  models.CharField(max_length = 10)
    apellido = models.CharField(max_length = 10)