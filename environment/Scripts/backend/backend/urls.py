"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from pages.views import registration_view, home_view, reel_view,contactUs_view

urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('', home_view, name= 'Home'),
    path('index.html', home_view, name= 'Home'),
    path('registration.html', registration_view, name= 'Registartion'),
    path('reels.html', reel_view, name= 'Reel'),
    path('contactUs.html', contactUs_view, name= 'contactUs'),
]
