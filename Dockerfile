# Stage 1: Build the React app
FROM node:20 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Copy build output from React
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run expects PORT env var
ENV PORT 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
