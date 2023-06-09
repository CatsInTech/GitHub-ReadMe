FROM node:18
LABEL maintainer="Rohan Rustagi"
WORKDIR /app
COPY package.json ./
COPY package*.json ./
RUN npm install --no-optional
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
