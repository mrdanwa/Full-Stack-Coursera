# PostgreSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'test2',
        'USER': 'postgres',
        'PASSWORD': 'Hola',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

INSTALLED_APPS = (
    'crud',
)

SECRET_KEY = 'SECRET KEY for this Django Project'
