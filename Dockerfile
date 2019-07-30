FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install -g yarn && yarn install
EXPOSE 8080
CMD [ "yarn", "start"]