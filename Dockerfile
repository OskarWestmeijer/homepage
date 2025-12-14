# build-stage
FROM node:24.12.0-alpine3.23 as build-stage

WORKDIR /usr/local/app
COPY ./ ./
RUN npm install
RUN npm run build

# production-stage
FROM 1.29.4-alpine3.23-slim as production-stage

COPY --from=build-stage /usr/local/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]