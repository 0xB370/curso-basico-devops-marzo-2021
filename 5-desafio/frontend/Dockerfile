# Pull Image LTS Version Alpine
FROM node:14.17.4-alpine

# Setting up Working Directory
WORKDIR /app

# Dependencies Instalation
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# Copy Everything to Docker Environment
COPY . ./

# Run App
CMD ["npm", "start"]