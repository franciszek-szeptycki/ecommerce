from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserRegistrationSerializer


@api_view(['POST'])
def registration(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.get(user=user).key
        data = {'message': 'User created successfully.', 'token': token}
        return Response(data, status=201)
    else:
        data = serializer.errors
        return Response(data, status=401)


@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"message":"Successfully logged in.","token": token.key}, status=200)
    else:
        return Response({"error": "Wrong Credentials"}, status=400)
