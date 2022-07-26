FROM node:16.16.0

RUN mkdir -p /home/app
WORKDIR /home/app
COPY package.json .
RUN ["npm", "install"]
COPY . .

EXPOSE 3000

CMD ["npm", "start"]