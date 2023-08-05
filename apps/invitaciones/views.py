from django.shortcuts import render
from .models import Invitado
from .models import Tema
# Create your views here.

def home(request):
    invitados = Invitado.objects.all()
    tema = Tema.objects.all()
    return render(request,"main.html",{'invitados':invitados})
    return render(request,"main.html",{'tema':tema})