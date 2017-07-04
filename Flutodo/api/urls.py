from django.conf.urls import url, include
from rest_framework import routers
from .views import UserViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register(r'accounts', UserViewSet)
router.register(r'todo', ItemViewSet)

urlpatterns = [
                url(r'', include(router.urls)),
              ]
