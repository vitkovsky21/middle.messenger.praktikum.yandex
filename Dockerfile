FROM alpine:latest

RUN apk add --no-cache --update bash nodejs npm

ADD ./ /doc/ker/
WORKDIR /doc/ker

RUN npm install && npm run build

RUN adduser -D testPerson
USER testPerson

EXPOSE 3000
CMD npm run start