FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Install additional packages
RUN apt-get update && apt-get install -y sqlite3

# Set working directory
WORKDIR /workspace

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Expose port
EXPOSE 3060