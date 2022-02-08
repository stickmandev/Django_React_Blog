from django.contrib import admin
from .models import BlogTags, Blog, BlogComments

# Register your models here.

admin.site.register(
    (BlogTags, Blog, BlogComments)
)