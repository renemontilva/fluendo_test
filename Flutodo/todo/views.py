from django.core.urlresolvers import reverse_lazy
from django.views import generic
from .forms import ItemForm
from .models import Item


class ItemCreate(generic.CreateView):
    model = Item
    template_name = 'todo/item_create.html'
    form_class = ItemForm
    success_url = reverse_lazy('listItem')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ItemCreate, self).form_valid(form)


class ItemList(generic.ListView):
    queryset = Item.objects.all()
    template_name = 'todo/item_list.html'
    paginate_by = 10


class ItemDelete(generic.DeleteView):
    model = Item
    template_name = 'todo/item_delete.html'
    success_url = reverse_lazy('listItem')


class ItemUpdate(generic.UpdateView):
    model = Item
    template_name = 'todo/item_update.html'
    form_class = ItemForm
    success_url = reverse_lazy('listItem')
