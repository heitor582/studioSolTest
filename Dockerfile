FROM node:latest
ENV PORT=8080
WORKDIR /home/backend
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 8080
CMD npm start
