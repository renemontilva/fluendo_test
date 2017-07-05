#Fluendo test
FROM debian
MAINTAINER Rene Montilva <renemontilva@gmail.com>
RUN apt-get update && apt-get -y install sqlite3 python3 python3-pip 
ADD Flutodo /app/
WORKDIR /app
RUN pip3 install -U --timeout 1000 -r requirements.txt
RUN python3 manage.py migrate
EXPOSE 8000
CMD python3 manage.py runserver 0.0.0.0:8000
