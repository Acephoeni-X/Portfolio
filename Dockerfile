FROM node:16-alpine
WORKDIR /app
RUN apk add g++ make py3-pip
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build
CMD [ "npm", "start" ]
