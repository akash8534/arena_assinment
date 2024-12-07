FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps # Install all required dependencies

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
