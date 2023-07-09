FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

WORKDIR /usr/share/nginx/html

COPY . .
RUN cd vite-project && npm install && npm run build
RUN rm -rf vite-project
