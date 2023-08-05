from django.db import models



# Create your models here.
class Invitado(models.Model):
    email = models.EmailField(primary_key = True, max_length = 64)
    nombre_completo = models.CharField(max_length=200, blank=True)
    
    acompanantes = models.IntegerField(default=0)
    tipo_comida = models.CharField(max_length=11, choices=[('vegano', 'Vegano'), ('vegetariano', 'Vegetariano'), ('celiaco', 'Celíaco')], blank=True)

class Tema(models.Model):
    texto = models.TextField()
    invitado = models.ForeignKey(Invitado, on_delete=models.CASCADE)