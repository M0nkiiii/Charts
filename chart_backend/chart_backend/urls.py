from django.http import HttpResponseRedirect
from django.urls import path, include

def redirect_to_api(request):
    return HttpResponseRedirect('/api/')

urlpatterns = [
    path('', redirect_to_api),  # Redirect root to /api/
    path('api/', include('charts.urls')),
]
