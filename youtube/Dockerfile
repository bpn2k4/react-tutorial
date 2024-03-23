FROM node:21-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM bitnami/nginx:1.25

WORKDIR /app
COPY --from=build /app/dist /app
COPY nginx.conf /opt/bitnami/nginx/conf/server_blocks/

USER 1001
EXPOSE 8080 8443