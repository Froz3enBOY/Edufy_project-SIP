from rest_framework import serializers
from .models import *

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user','about','description','location','skills','image','mobile_number','name']

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['user','post_image','post','post_id']

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ['user','post']

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['user','post','comment']


