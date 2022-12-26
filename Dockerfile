FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app

RUN npm install --silent

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "node", "server.js" ]
