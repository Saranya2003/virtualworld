from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
# Create your views here.
def home_view(request):
    return render(request, 'test.html')