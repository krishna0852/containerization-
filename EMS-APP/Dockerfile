ARG VERSION=14

FROM node:${VERSION} AS WEB-BUILD

WORKDIR /opt/server 

COPY . /opt/server/ 

RUN npm install 

RUN npm run build


FROM nginx

RUN rm -rf /usr/share/nginx/html/*.html

COPY --from=WEB-BUILD /opt/server/build/index.html /usr/share/nginx/html/









