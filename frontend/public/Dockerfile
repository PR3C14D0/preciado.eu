FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /etc/cert