# build-stage environment
FROM node:lts-alpine3.16 as build-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# production-stage environment
FROM nginx:1.25.1-alpine3.17-slim
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]