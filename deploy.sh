#!/bin/bash
# Deployment script for React app "myapp" to GCP VM with Nginx

# Variables
VM_NAME="nginx-webapp"
ZONE="us-central1-a"
PROJECT_NAME="jpsl-ai-connect"
LOCAL_BUILD_PATH="dist/*"
REMOTE_TMP_PATH="/tmp/react-app"
REMOTE_WEB_ROOT="/var/www/html"

echo "🚀 Building React app ($PROJECT_NAME)..."
npm install --legacy-peer-deps
npm run build

echo "📤 Copying files to VM ($VM_NAME)..."
gcloud compute scp --recurse $LOCAL_BUILD_PATH \
  $VM_NAME:$REMOTE_TMP_PATH \
  --zone=$ZONE

echo "📥 Deploying files on VM..."
gcloud compute ssh $VM_NAME --zone=$ZONE --command="\
  sudo rm -rf $REMOTE_WEB_ROOT/* && \
  sudo mv $REMOTE_TMP_PATH/* $REMOTE_WEB_ROOT/ && \
  sudo systemctl restart nginx && \
  echo '✅ Deployment complete. App is live on http://$(curl -s ifconfig.me)' \
"
