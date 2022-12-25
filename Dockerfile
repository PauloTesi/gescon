FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN cd /app && npm ci && npm i @angular/cli && npm i json-server

RUN npm start

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]