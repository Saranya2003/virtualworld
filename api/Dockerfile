FROM osgeo/gdal:ubuntu-small-latest
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code

RUN echo "tzdata tzdata/Areas select America" > /tmp/preseed.txt ; \
    echo "tzdata tzdata/Zones/America select Toronto" >> /tmp/preseed.txt; \
    debconf-set-selections /tmp/preseed.txt && \
    apt-get update && \
    apt-get install -y tzdata

RUN apt-get update && apt-get install -y python3-pip && apt-get install -y swi-prolog

#RUN pip install --upgrade pip
#COPY requirements.txt /code/
ADD ./requirements.txt .
RUN pip install numpy
RUN pip install psycopg2-binary
RUN pip install -U -r requirements.txt
RUN pip install -U 'Twisted[tls,http2]'

COPY . /code/
