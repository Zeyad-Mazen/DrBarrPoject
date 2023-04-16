from django.shortcuts import render
from django.http import HttpResponse
from .models import Reel

# Create your views here.
def Reelview(request, *args, **kwargs):
    reel_list = Reel.objects.all() 
    context = {
    	'video': reel_list
    }
    print(reel_list)
    return render(request, 'reel.html', context)