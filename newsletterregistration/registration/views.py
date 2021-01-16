from django.shortcuts import render
from rest_framework import generics
from .models import Registration
from .serializers import RegistrationSerializer

class registrationListView(generics.ListCreateAPIView):
	queryset = Registration.objects.all()
	serializer_class = RegistrationSerializer


class registrationDetailView(generics.RetrieveAPIView):
	queryset = Registration.objects.all()
	serializer_class = RegistrationSerializer