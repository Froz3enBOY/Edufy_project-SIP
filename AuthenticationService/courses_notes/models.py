from django.db import models
from userAuth.models import MyUser


class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    def __str__(self):
        return self.title


class Videos(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    def __str__(self):
        return self.title

class Playlist(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    all_videos = models.ManyToManyField(Videos, related_name='playlists', blank=True)
    def __str__(self):
        return self.title


class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    def __str__(self):
        return self.title
    


class Dashboard(models.Model):
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE, to_field='email')
    courses = models.ManyToManyField(Course, related_name='dashboards')
    playlists = models.ManyToManyField(Playlist, related_name='dashboards')
    notes = models.ManyToManyField(Note, related_name='dashboards')
    videos = models.ManyToManyField(Videos, related_name='dashboards')
    def __str__(self):
        return self.user.email