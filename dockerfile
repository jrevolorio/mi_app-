FROM node:16-alpine3.14

RUN apk update && apk add build-base bash git util-linux
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python

RUN mkdir /CSD
WORKDIR /CSD

#RUN npm install --save-dev jest
#RUN npm install parcel-bundler --save-dev

EXPOSE 1234