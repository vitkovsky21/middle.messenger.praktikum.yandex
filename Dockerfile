FROM node:latest
WORKDIR /doc/ker
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD node index.js