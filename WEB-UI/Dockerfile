FROM nginx 

RUN rm -rf /usr/share/nginx/html/index.html 

COPY static /usr/share/nginx/html/

RUN rm -rf /etc/nginx/nginx.conf

RUN rm -rf /etc/nginx/conf.d /default.conf 

COPY default.conf /etc/nginx/nginx.conf

#COPY default.conf  /etc/nginx/conf.d/

