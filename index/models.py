from operator import mod
from django.db import models
from django.contrib.auth.models import User
from tinymce.models import HTMLField
from django.utils.text import slugify

# Create your models here.

class BlogTags(models.Model):
    title = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at', )
        verbose_name = 'Blog Tag'
        verbose_name_plural = 'Blog Tags'

    def __str__(self):
        return self.title


class Blog(models.Model):  
    title= models.CharField(max_length=255)
    slug = models.SlugField(default="", editable=False, max_length=255)
    image = models.ImageField(blank=True, upload_to = "gallery/blog_post_photo/%Y/%m/%d")
    content = HTMLField()   
    tags = models.ManyToManyField(BlogTags, related_name="blog_tags")
    author = models.ForeignKey(User, related_name='blog_author', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at', )
        verbose_name = 'blog'
        verbose_name_plural = 'blogs'

    def __str__(self):
        return f'{self.title} by {self.author}'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title, allow_unicode=True)
        super().save(*args, **kwargs)
        
class BlogComments(models.Model):
    blog = models.ForeignKey(Blog, related_name='blog_comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default='Annonymous')
    ip = models.CharField(max_length=255, blank=True, null=True)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at',) 
        verbose_name = 'Blog Comment'
        verbose_name_plural = 'Blog Comments'

    def __str__(self):
        return f'{self.blog.title} by {self.name}'