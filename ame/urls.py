from django.contrib import admin
from django.urls import path
from ame import views

urlpatterns = [
    path('', views.index, name='index'),
]