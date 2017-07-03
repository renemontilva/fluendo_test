from django.core.urlresolvers import reverse_lazy
from django.views import generic
from .forms import ItemForm
from .models import Item


class ItemCreate(generic.CreateView):
    model = Item
    template_name = 'todo/item_create.html'
    form_class = ItemForm
    success_url = reverse_lazy('todo:item_list')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ItemCreate, self).form_valid(form)
