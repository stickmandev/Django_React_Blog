from rest_framework.viewsets import ModelViewSet
from .serializer import UserSerializer,User


# Create your views here.

class UserView(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer