from rest_framework import serializers
from django.contrib.auth.models import User
from todo.models import Item


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email',)


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('name', 'isComplete', 'user')
