from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Course)
admin.site.register(Playlist)
admin.site.register(Note)
admin.site.register(Dashboard)
admin.site.register(Videos)