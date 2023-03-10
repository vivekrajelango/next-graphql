FROM --platform=linux/amd64 node:lts-alpine as build-stage

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ ./

RUN npm install

EXPOSE 5000
CMD ["npm", "start"]