FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./


RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma generate

EXPOSE 3001