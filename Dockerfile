FROM node:alpine
WORKDIR /app/test
COPY ./test/package.json /app
RUN npm install
COPY ./ ./
CMD node test/index.js