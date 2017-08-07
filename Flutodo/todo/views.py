from django.core.urlresolvers import reverse_lazy
from django.shortcuts import render, redirect
from django.views.generic import (CreateView, ListView,
                                  UpdateView, DeleteView,
                                  View, FormView,
                                  )
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.detail import SingleObjectMixin
from django.views.generic.edit import FormMixin

from .forms import ItemForm, ObservationForm, ProjectForm
from .models import Item, Project


class ProjectList(ListView):
    template_name = 'todo/project_list.html'
    paginate_by = 3

    def get_queryset(self):
        return Project.objects.filter(
                user_id=self.request.user
                ).order_by('id').all()


class ProjectCreate(CreateView):
    model = Project
    template_name = 'todo/project_create.html'
    form_class = ProjectForm
    success_url = reverse_lazy('todo:listProject')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ProjectCreate, self).form_valid(form)


class ProjectDelete(DeleteView):
    model = Project
    template_name = 'todo/project_delete.html'
    success_url = reverse_lazy('todo:listProject')


class ProjectUpdate(UpdateView):
    model = Project
    form_class = ProjectForm
    template_name = 'todo/project_update.html'
    success_url = reverse_lazy('todo:listProject')

    def get_object(self):
        object = super(ProjectUpdate, self).get_object()
        print(" ######## %s ######" % object.name)
        return object

    def get(self, *args, **kwargs):
        object = self.get_object()
        print("---- %s -----" % object.description)
        return super(ProjectUpdate, self).get(*args, **kwargs)


class ItemCreate(SingleObjectMixin, FormView):
    model = Item
    template_name = 'todo/item_create.html'
    form_class = ItemForm

    def get(self, request, *args, **kwargs):
        self.object = self.get_object(queryset=Project.objects.all())
        return super(ItemCreate, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(ItemCreate, self).get_context_data(**kwargs)
        context['form'] = self.get_form(self.form_class)
        print(context)
        return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object(queryset=Project.objects.all())
        print("*********###**** %s ******** " % self.object)
        return super(ItemCreate, self).post(request, *args, **kwargs)

    def form_valid(self, form):
        form.instance.project_id = self.object.id
        form.save()
        return super(ItemCreate, self).form_valid(form)

    def get_success_url(self):
        return reverse_lazy('todo:listItem', kwargs={'pk': self.object.id})


class ItemList(LoginRequiredMixin, SingleObjectMixin, ListView):
    login_url = '/'
    template_name = 'todo/item_list.html'
    paginate_by = 10

    def get(self, request, *args, **kwargs):
        self.object = self.get_object(queryset=Project.objects.all())
        return super(ItemList, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(ItemList, self).get_context_data(**kwargs)
        context['project'] = self.object
        return context

    def get_queryset(self):
        return Item.objects.filter(project_id=self.object.id)


class ItemDelete(DeleteView):
    model = Item
    template_name = 'todo/item_delete.html'
    success_url = reverse_lazy('todo:listItem')


class ItemUpdate(UpdateView):
    model = Item
    template_name = 'todo/item_update.html'
    form_class = ItemForm
    success_url = reverse_lazy('todo:listItem')

    def get_object(self, *args, **kwargs):
        object = super(ItemUpdate, self).get_object()
        print(object)
        return object

    def get(self, request, *args, **kwargs):
        self.id_user = self.get_object().pk
        print('Este es %s' % self.id_user)
        return super(ItemUpdate, self).get(self, request, *args, **kwargs)


class ItemDetail(SingleObjectMixin, View):
    model = Item

    def get(self, request, *args, **kwargs):
        object = self.get_object().name
        print(object)
        return render(request, 'todo/item_detail.html')


class UserItem(SingleObjectMixin, ListView):

    template_name = 'todo/item_detail.html'

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        return super(UserItem, self).get(self, request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(UserItem, self).get_context_data(**kwargs)
        context['user'] = self.object
        print(context['user'])
        return context

    def get_queryset(self):
        return Item.objects.all()


class ObservationItem(SingleObjectMixin, FormMixin, ListView):

    template_name = 'todo/observation_create.html'
    form_class = ObservationForm
    success_url = '/todo/list'

    def get(self, request, *args, **kwargs):
        self.object = self.get_object(queryset=Item.objects.all())
        print(self.object)
        return super(ObservationItem, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(ObservationItem, self).get_context_data(**kwargs)
        context['item'] = self.object
        context['form'] = self.get_form(self.form_class)
        return context

    def get_queryset(self):
        return self.object.observations_set.all()

    def post(self, request, *args, **kwargs):
        self.object = self.get_object(queryset=Item.objects.all())
        self.form = self.get_form(self.form_class)
        if self.form.is_valid():
            return self.form_valid(self.form)
        else:
            return self.form_invalid(self.form)

    def form_valid(self, form):
        print(form.cleaned_data['detail'])
        detail = form.cleaned_data['detail']
        self.object.observations_set.create(detail=detail)
        return redirect('todo:obItem', pk=self.object.pk)

    def form_invalid(self, form):
        return super(ObservationItem, self).form_invalid(form)
