FROM node:current-alpine3.16

WORKDIR /app

COPY . ./

RUN apk update
RUN apk upgrade
RUN npm install

CMD ["npm", "start"]