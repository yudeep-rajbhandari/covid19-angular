FROM node:10
FROM johnpapa/angular-cli

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN ng build --prod --output-path=/usr/src/app/dist/covid19-angular

# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .




#COPY --from=build  /usr/src/app/dist/covid19-angular

EXPOSE 3000
CMD [ "node", "server.js" ]
