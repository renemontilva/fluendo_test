from django.shortcuts import redirect


class MyMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        response = self.get_response(request)

        if request.user.is_authenticated():
            if request.user.is_superuser:
                return redirect('http://www.facebook.com')
            else:
                return response
