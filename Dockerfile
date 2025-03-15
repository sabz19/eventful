# Use the latest LTS version of Node.js
FROM node:18-alpine AS builder
 
# Set the working directory inside the container
WORKDIR /app

# Copy the rest of your application files
COPY . ./
 
# Install dependencies
RUN npm install
 
# Build the app for production
RUN webpack server --mode development

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["npm", "run", "start"]