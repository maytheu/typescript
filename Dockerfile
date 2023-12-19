# # STEP-1 BUILD
# # Defining node image and giving alias as node-helper
# # It's better to define version otherwise me might face issue in future build

# FROM node:16-alpine3.16 as node-helper

# #Accepting build-arg to create environment specific build
# #it is useful when we have multiple environment (e.g: dev, tst, staging, prod)
# #default value is development
# ARG build_env=development

# #Creating virtual directory inside docker image
# WORKDIR /app

# RUN npm cache clean --force

# #Copying file from local machine to virtual docker image directory
# COPY . .

# #installing deps for project
# RUN npm install

# #creating angular build
# RUN ./node_modules/@angular/cli/bin/ng build --configuration=$build_env

# #STEP-2 RUN
# #Defining nginx img
# FROM nginx:1.20 as ngx

# #copying compiled code from dist to nginx folder for serving
# COPY --from=node-helper /app/dist/angular-docker-blog /usr/share/nginx/html

# #copying nginx config from local to image
# COPY /nginx.conf /etc/nginx/conf.d/default.conf

# #exposing internal port
# EXPOSE 80


# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:17.0.1-bullseye-slim as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]
