FROM node

WORKDIR /usr/src/app

COPY . .

RUN chmod +x ./install.sh
RUN ./install.sh

CMD cd proxy && node index.js