FROM nginx:1.23.3
COPY ./dist /usr/share/nginx/html

# Pipeline:
# - pull in Node
# - clone repo
# - npm install
# - npm build
# - Dockerfile - creates image
# - outputs a Docker image

# Kubernetes - K8s - "Katies"
# - Run X number of replicas
# - Take X amount of memory / CPU
# - Always try to keep X instances running
# - Make the application available on route /foo/bar/myapplication - ingress

# path: /my-opportunities
# dev.app.arnoldclark.com/my-opportunities
# stg.app.arnoldclark.com/my-opportunities
# app.arnoldclark.com/my-opportunities