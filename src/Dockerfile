FROM node:14
WORKDIR /task7.2d/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]

