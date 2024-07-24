# Étape 1: Construction
FROM node:18-alpine AS build

WORKDIR /admin-app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2: Exécution
FROM nginx:alpine

COPY --from=build /admin-app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
