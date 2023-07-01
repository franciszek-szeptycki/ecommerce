from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User


class AuthenticationTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_registration(self):
        data = {
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test@example.com'
        }

        response = self.client.post('/auth/register/', data, format='json')
        self.assertEqual(response.status_code, 201)

        self.assertEqual(User.objects.count(), 1)
        user = User.objects.first()
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')
        self.assertTrue(user.check_password('testpassword'))

    def test_login(self):
        User.objects.create_user(username='testuser', password='testpassword')

        data = {
            'username': 'testuser',
            'password': 'testpassword'
        }

        response = self.client.post('/auth/login/', data, format='json')
        self.assertEqual(response.status_code, 200)

        self.assertIn('token', response.data)
        self.assertEqual(response.data['message'], 'Successfully logged in.')



