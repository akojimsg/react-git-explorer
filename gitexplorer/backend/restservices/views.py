from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests


@api_view(['GET', 'POST'])
def helloworld(request):
    return Response({'message': 'hello world - Luuna MX',})

@api_view(['GET', 'POST'])
def fetchrepos(request):
    repos = {}
    if 'username' in request.GET:
    	username = request.GET['username']
    	url = 'https://api.github.com/users/%s/repos' % username
    	response = requests.get(url)
    	repos = response.json()
    	return Response({'data': repos})
    else:
    	return Response({'message' : 'please specify a username'})    	

@api_view(['GET', 'POST'])
def fetchuserprofile(request):
    profile = {}
    if 'username' in request.GET:
    	username = request.GET['username']
    	url = 'https://api.github.com/users/%s' % username
    	response = requests.get(url)
    	profile = response.json()
    	return Response({'data': profile})
    else:
    	return Response({'message' : 'please specify a username'})