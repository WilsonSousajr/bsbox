"""
WSGI config for src project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from dj_static import Cling
from django.core.wsgi import get_wsgi_application
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "src.settings")
application = Cling(get_wsgi_application())
app = application