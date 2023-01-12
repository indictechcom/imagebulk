FROM python:latest

ENV CELERY_BROKER_URL redis://redis:6379/0
ENV CELERY_RESULT_BACKEND redis://redis:6379/0
ENV C_FORCE_ROOT true

ENV HOST 0.0.0.0
ENV PORT 5000
ENV DEBUG true

COPY . /app

# set working directory to /app/
WORKDIR /app/

RUN pip install -U setuptools pip
RUN pip install -r requirements.txt

EXPOSE 5000

RUN pip install redis
RUN pip install gunicorn

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "3", "app:app"]