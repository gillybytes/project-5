# Pull official base image
FROM node:13.12.0-alpine

# Set working directory
WORKDIR /app

# Add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json .././
COPY package-lock.json .././
RUN npm install

# Add app
COPY . ./

# Start app
EXPOSE 8000
CMD ["npm", "start", "-p", "80"]