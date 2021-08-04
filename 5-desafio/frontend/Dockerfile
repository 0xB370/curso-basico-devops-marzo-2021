# Pull Image LTS Version Alpine
FROM node:14.17.4-alpine

# Setting up Working Directory
WORKDIR /app

# Copy Everything to Docker Environment
COPY . .

# Dependencies Instalation
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

EXPOSE 3000

# Run App
CMD ["npm", "start"]