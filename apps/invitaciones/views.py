from django.shortcuts import render, redirect
from .models import Invitado
from .models import Tema
# Create your views here.

def home(request):
    invitados = Invitado.objects.all()
    tema = Tema.objects.all()
    return render(request,"main.html",{'invitados':invitados})
    return render(request,"main.html",{'tema':tema})
def addInvitados(request):
    email = request.POST['floatingInputValueEmail']
    fullName = request.POST['floatingInputValuefullName']
    selfplus = request.POST['floatingInputValueNumber']
    foodtype = request.POST['floatingInputValueFood']
    song = request.POST['floatingTextareaSong']

    invitado = Invitado.objects.create(email = email, nombre_completo = fullName, acompanantes = selfplus, tipo_comida = foodtype) 
    tema = Tema.objects.create(texto = song, invitado = invitado)
    return redirect('/')