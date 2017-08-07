from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _


class Project(models.Model):
    name = models.CharField(max_length=150, help_text=_('Name'))
    description = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=200)
    isComplete = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Observations(models.Model):
    detail = models.CharField(max_length=200)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    authors = models.ManyToManyField(Author)

    def __str__(self):
        return "%s - %s" % (self.detail, self.item)
