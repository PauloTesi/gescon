FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN cd /app && ls

RUN npm install && npm update

RUN npm install -g npm@9.2.0

RUN npm run build

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
