# Étape 1: Construction
FROM node:14-alpine AS build

WORKDIR /admin-app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


