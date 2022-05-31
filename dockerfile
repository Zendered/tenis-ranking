FROM bitnami/node:latest
RUN npm i -g @nestjs/cli
WORKDIR /app
CMD ["tail", "-f", "/dev/null"]