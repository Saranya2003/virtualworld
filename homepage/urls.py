from django import urls
from django.urls import path
from homepage.views import home_view
from django.contrib import admin
from . import views

urlpatterns = [
    path('',home_view, name='home'),
    path('admin/',admin.site.urls)
]