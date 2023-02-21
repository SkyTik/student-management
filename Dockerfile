# Build Phase
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run Phase
FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/build/ /app
COPY package*.json ./
RUN npm install --omit=dev
EXPOSE 8093
CMD [ "node", "server.js" ]
