# Étape 1: Construction
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2: Exécution
FROM node:18-alpine

WORKDIR /backend

COPY --from=build /app/dist ./dist
COPY package*.json ./
COPY .env ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/main"]
