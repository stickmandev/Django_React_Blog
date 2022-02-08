from django.urls import path, include
from .views import BlogViewSet, BlogCommentsViewSet, BlogTagsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('blog', BlogViewSet, basename='blog') 
router.register('blogcomments', BlogCommentsViewSet, basename='blogcomments') 
router.register('blogtag',BlogTagsViewSet, basename='blogtag') 

urlpatterns = [
    path('', include(router.urls)), 
]