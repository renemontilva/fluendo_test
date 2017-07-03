from django import forms
from .models import Item


class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ('name', 'isComplete')
        labels = {'name': 'ToDo Title'}
        widgets = {
                   'name': forms.TextInput(attrs={
                       'class': 'form-control',
                       'placeholder': 'Type your activity',
                       'required': True,
                       'size': '30'
                       })
                   }
