FROM node:23-alpine3.20
WORKDIR /app
COPY . .

RUN yarn install && yarn build

EXPOSE 3000
CMD ["yarn", "start"]