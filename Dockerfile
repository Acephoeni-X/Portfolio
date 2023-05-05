FROM node:19-alpine3.16
WORKDIR /app
RUN apk add g++ make py3-pip
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build
CMD [ "npm", "start" ]
