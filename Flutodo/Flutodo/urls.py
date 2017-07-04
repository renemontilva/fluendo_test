"""Flutodo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from users.views import SignUp
from todo.views import ItemCreate, ItemList, ItemDelete

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('django.contrib.auth.urls')),
    url(r'^signup/', SignUp.as_view(), name='signup'),
    url(r'^todo/new', ItemCreate.as_view(), name='newItem'),
    url(r'^todo/list', ItemList.as_view(), name='listItem'),
    url(r'^todo/del/(?P<pk>[0-9-]+)', ItemDelete.as_view(), name='delItem'),


]
