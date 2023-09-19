FROM node:latest
WORKDIR /var/app/
COPY package*.json /var/app/
RUN npm ci
EXPOSE 5000
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./.gitignore ./.gitignore

RUN ["npx", "tsc"]
RUN ["rm", "-rf", "/var/app/src"]

CMD ["node","/var/app/build/index.js"]