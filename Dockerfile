# What image do you want to start building on?
FROM node:10-slim

RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Make a folder in your image where your app's source code can live
RUN mkdir -p /ArdvarkInternal/Pretrip

# Tell your container where your app's source code will live
WORKDIR /ArdvarkInternal/Pretrip

# What source code do you what to copy, and where to put it?
COPY . /ArdvarkInternal/Pretrip

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD [ "npm", "start"]