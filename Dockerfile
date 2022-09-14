FROM node:18-bullseye

WORKDIR /app

COPY . /app

EXPOSE  3000

ENTRYPOINT ["./entryponit.sh"]
