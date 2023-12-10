ARG VERSION=14

FROM node:${VERSION} AS WEB-BUILD

WORKDIR /opt/server 

COPY package* /opt/server/ 

COPY src /opt/server/

RUN npm install 


FROM nginx

RUN rm -rf /usr/share/ning/html/index.html

COPY --from=WEB-BUILD /opt/server/static/index.html /usr/share/nginx/html/









