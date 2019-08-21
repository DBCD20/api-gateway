FROM node:10.15.3

WORKDIR /usr/src/api-gateway

COPY ./ ./

RUN npm install

CMD ["bin", "bash"]