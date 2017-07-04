from rest_framework import viewsets
from .serializers import UserSerializer, ItemSerializer
from django.contrib.auth.models import User
from todo.models import Item


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
