from django.shortcuts import render
from .models import invitado
# Create your views here.

def home(request):
    invitados = invitado.all()
    return render(request,"main.html",{'invitados':invitados})