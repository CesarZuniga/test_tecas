#Primera Etapa
FROM node:10-alpine as build-step

LABEL title = "Front APP" \
      description = "Web server showing app" \
      author = "@cesarzuniga" 
	

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine
	
COPY --from=build-step /app/dist /usr/share/nginx/html