from django.shortcuts import render


def index(request, *args, **kargs):
	render(request, 'frontend/index.html')