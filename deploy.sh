#!/bin/bash

# Colors for echo statements
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment process...${NC}"

# Clean up previous builds
echo "Cleaning up previous builds..."
rm -rf .next
rm -rf out

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Build successful!${NC}"
else
    echo -e "${RED}Build failed! Check the errors above${NC}"
    exit 1
fi

# Deploy to Firebase
echo "Deploying to Firebase..."
firebase deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Firebase deployment successful!${NC}"
else
    echo -e "${RED}Firebase deployment failed! Check the errors above${NC}"
    exit 1
fi

# Git operations
echo "Pushing changes to Git..."
git add .
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push

# Check if git push was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Successfully pushed to Git!${NC}"
    echo -e "${GREEN}Deployment completed successfully!${NC}"
else
    echo -e "${RED}Git push failed! Check the errors above${NC}"
    exit 1
fi
