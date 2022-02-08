from cgitb import lookup
from .models import BlogComments, Blog, BlogTags
from .serializer import BlogSerializer, BlogCommentSerializer, BlogTagSerializer
from .models import BlogComments, Blog, BlogTags
from rest_framework.viewsets import ModelViewSet
# Create your views here.


class BlogViewSet(ModelViewSet):
    lookup_field = 'slug'
    serializer_class =  BlogSerializer
    queryset = Blog.objects.all()

class BlogCommentsViewSet(ModelViewSet):
    serializer_class =  BlogCommentSerializer
    queryset = BlogComments.objects.all()

    def get_queryset(self):
        query = self.request.query_params.dict()
        return self.queryset.filter(**query)

class BlogTagsViewSet(ModelViewSet):
    serializer_class =  BlogTagSerializer
    queryset = BlogTags.objects.all()