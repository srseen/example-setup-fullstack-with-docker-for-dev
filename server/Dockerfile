
# Step 1: Build Stage
FROM node:22-alpine AS build
WORKDIR /app
    
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY src ./src
RUN npm run build
    
# Step 2: Production Image
FROM node:22-alpine
WORKDIR /app
    
COPY package*.json ./
RUN npm install --only=production
    
COPY --from=build /app/dist ./dist
    
CMD ["node", "dist/server.js"]
    