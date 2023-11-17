ARG VERSION=14
FROM node:${VERSION}

ENV INSTANA_AUTO_PROFILE true

COPY package.json /opt/server/

WORKDIR /opt/server 

RUN npm install 

COPY server.js /opt/server/

CMD ["node" "server.js"]

