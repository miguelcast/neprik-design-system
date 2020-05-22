FROM node:10.20.1
WORKDIR /app
COPY . .
RUN npm install && npm run build
ENTRYPOINT npm run storybook
