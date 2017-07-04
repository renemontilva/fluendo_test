from django.views import generic
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.core.urlresolvers import reverse_lazy


class SignUp(generic.CreateView):
    model = User
    template_name = 'users/signup.html'
    success_url = reverse_lazy('login')
    form_class = UserCreationForm


class User(generic.RedirectView):
    url = '/account/login'
