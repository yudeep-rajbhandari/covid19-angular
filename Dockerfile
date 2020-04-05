FROM node:10
FROM johnpapa/angular-cli

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install


# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

EXPOSE 3000
RUN ng build --prod --output-path=/usr/src/app/dist/covid19-angular
CMD [ "node", "server.js" ]
