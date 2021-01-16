from django.urls import path
from .views import registrationListView, registrationDetailView

urlpatterns = [
    path('', registrationListView.as_view()),
    path('<pk>', registrationDetailView.as_view()),
]