FROM node:16
LABEL maintainer="Rohan Rustagi"
WORKDIR /app
COPY package-lock.json ./
COPY package.json ./
RUN npm install -g react-scripts
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]