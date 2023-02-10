FROM node:latest as angular
WORKDIR /app
COPY package*.json /app
RUN npm install --silent
COPY . /app
RUN npm run build

RUN cd backend
RUN npm start



# FROM nginx:alpine
# VOLUME /var/cache/nginx
# COPY --from=angular app/dist/gescon /usr/share/nginx/html
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
