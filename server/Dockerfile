# ----------------------------
# Step 1: Build Stage
# ----------------------------
    FROM node:22-alpine AS build
    WORKDIR /app
    
    # Install deps
    COPY package*.json ./
    COPY tsconfig.json ./
    RUN npm install
    
    # Copy source and build
    COPY src ./src
    RUN npm run build
    
    # ----------------------------
    # Step 2: Production Image
    # ----------------------------
    FROM node:22-alpine
    WORKDIR /app
    
    # Copy production-only files
    COPY package*.json ./
    RUN npm install --only=production
    
    # Copy build result from previous stage
    COPY --from=build /app/dist ./dist
    
    # Start the app
    CMD ["node", "dist/server.js"]
    