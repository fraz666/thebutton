FROM node:22-alpine3.18 AS build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest

WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist .