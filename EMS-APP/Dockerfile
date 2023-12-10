ARG VERSION=14

FROM node:${VERSION} AS WEB-BUILD

WORKDIR /opt/server 

COPY package* /opt/server/ 

COPY src /opt/server/

RUN npm install 

RUN npm run build


FROM nginx

RUN rm -rf /usr/share/nginx/html/index.html

COPY --from=WEB-BUILD /opt/server/build/index.html /usr/share/nginx/build/html/









