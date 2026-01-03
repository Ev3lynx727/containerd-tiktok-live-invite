# Frontend Dockerfile - Multi-stage build with httpd
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM httpd:alpine

COPY --from=build /app/build/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]