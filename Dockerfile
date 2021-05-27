FROM mhart/alpine-node:12.18.3

RUN mkdir /app
ADD ./ /app
WORKDIR /app
RUN npm install -g ts-node typescript nodemon
RUN yarn install

EXPOSE 3000
