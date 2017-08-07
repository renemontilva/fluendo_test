from django.conf.urls import url
from todo.views import (ItemCreate, ItemList, ItemDelete,
                        ItemUpdate, ItemDetail, UserItem,
                        ObservationItem, ProjectCreate,
                        ProjectList, ProjectDelete,
                        ProjectUpdate,
                        )


urlpatterns = [
    url(r'^new_item/(?P<pk>[0-9]+)', ItemCreate.as_view(), name='newItem'),
    url(r'^list_item/(?P<pk>[0-9]+)', ItemList.as_view(), name='listItem'),
    url(r'^del_item/(?P<pk>[0-9-]+)', ItemDelete.as_view(), name='delItem'),
    url(r'^up/(?P<pk>[0-9-]+)', ItemUpdate.as_view(), name='upItem'),
    url(r'^detail/(?P<pk>[0-9]+)', ItemDetail.as_view(), name='detailItem'),
    url(r'^users/(?P<pk>[0-9]+)', UserItem.as_view(), name='userItem'),
    url(r'^ob/(?P<pk>[0-9]+)', ObservationItem.as_view(), name='obItem'),
    url(r'^project/', ProjectCreate.as_view(), name='newProject'),
    url(r'^list_project/', ProjectList.as_view(), name='listProject'),
    url(r'^del_project/(?P<pk>[0-9]+)',
        ProjectDelete.as_view(), name='delProject'),
    url(r'^up_project/(?P<pk>[0-9]+)',
        ProjectUpdate.as_view(), name='upProject'),
    ]
