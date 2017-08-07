from django.contrib import admin
from .models import Item, Observations
# Register your models here.

'''
# class ItemAdmin(admin.ModelAdmin):
    # list_display = ('id', 'name', 'isComplete',
    #                'created_at', 'updated_at',
    #                'user_id',)

    # list_filter = ('name', 'user_id')
    # search_fields = ('name',)
'''
admin.site.register(Item)
admin.site.register(Observations)
