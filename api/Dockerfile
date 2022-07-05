FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "dev"]