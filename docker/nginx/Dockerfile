FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./app.conf /etc/nginx/conf.d/app.conf
COPY ./nginx-selfsigned.crt /etc/nginx/certs/nginx-selfsigned.crt
COPY ./nginx-selfsigned.key /etc/nginx/certs/nginx-selfsigned.key