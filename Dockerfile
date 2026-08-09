FROM nginx:alpine

# Copy built static assets
COPY dist /usr/share/nginx/html

# Copy custom nginx configuration for React Router fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 for Cloud Run
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
