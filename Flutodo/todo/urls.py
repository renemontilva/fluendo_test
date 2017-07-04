from django.conf.urls import url
from todo.views import (ItemCreate, ItemList, ItemDelete,
                        ItemUpdate)


urlpatterns = [
    url(r'^new/', ItemCreate.as_view(), name='newItem'),
    url(r'^list/', ItemList.as_view(), name='listItem'),
    url(r'^del/(?P<pk>[0-9-]+)', ItemDelete.as_view(), name='delItem'),
    url(r'^up/(?P<pk>[0-9-]+)', ItemUpdate.as_view(), name='upItem'),
    ]
