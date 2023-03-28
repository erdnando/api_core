FROM node:16
ENV NODE_ENV=development
WORKDIR /app
COPY ./package.json ./yarn.lock ./
ENV PATH /node_modules/.bin:$PATH
RUN  yarn install
WORKDIR /app
COPY . .
RUN yarn build
EXPOSE 1337
USER 1000
CMD ["yarn", "start"]