# Use an official Node.js runtime as the base image
FROM node:16.0.0

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

#copi dist folder content to root
RUN cp -r dist/* .

#copy public folder to root
RUN cp -r src/public .

# Intall npm packages
RUN npm install --only=production

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "npm","run", "start" ]
