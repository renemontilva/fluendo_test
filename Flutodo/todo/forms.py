from django import forms
from .models import Item, Project


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ('name', 'description',)
        labels = {'name': 'Name',
                  'description': 'Description',
                  }
        widgets = {
                    'name': forms.TextInput(attrs={
                        'class': 'form-control',
                        'required': True,
                        'size': '30',
                        }),
                    'description': forms.Textarea(attrs={
                        'class': 'form-control',
                        'required': True,
                        'cols': 80,
                        'rows': 20,
                        }),
                  }


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


class ObservationForm(forms.Form):
    detail = forms.CharField(label='Detail', widget=forms.Textarea)

    def clean_detail(self):
        detail = self.cleaned_data['detail']
        if detail == detail.upper():
            self.add_error('detail', 'Can not be UpperCase')
        else:
            return self.cleaned_data['detail']
