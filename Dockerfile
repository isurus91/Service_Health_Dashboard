# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app` to $PATH
ENV PATH /usr/src/app:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

RUN mkdir /usr/src/app/src
RUN mkdir /usr/src/app/public 
RUN mkdir /usr/src/app/service-health-dashboard 
#COPY src /usr/src/app/src
#COPY public /usr/src/app/public
#COPY public/index.html /usr/src/app/public/index.html

COPY src/ /usr/src/app/src/
COPY public/ /usr/src/app/public/
COPY service-health-dashboard/ /usr/src/app/service-health-dashboard/

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
