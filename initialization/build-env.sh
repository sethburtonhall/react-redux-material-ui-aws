#!/bin/sh
# TODO: review the whole .env Endpoints setup
# Create the env.js file dynamically based on the DEPLOYMENT environmental variable
if [ "$DEPLOYMENT" = "local" ]; then
  echo "
    window.env = {
      \"API_HOST\": \"http://$API_HOST:$API_PORT\",
      \"CLIENT_HOST\": \"http://$CLIENT_HOST:$CLIENT_PORT\",
      \"TEST_API_HOST\": \"$TEST_API_HOST\",
      \"SESSION_HUB_VIDEO\": \"$SESSION_HUB_VIDEO\",
      \"DEPLOYMENT\": \"$DEPLOYMENT\",
      \"DOMAIN\": \"$DOMAIN\",
    };
    " >build/env.js
elif [ "$DEPLOYMENT" = "dev" ]; then
  echo "
    window.env = {
      \"API_HOST\": \"https://$API_HOST\",
      \"CLIENT_HOST\": \"https://$CLIENT_HOST\",
      \"TEST_API_HOST\": \"$TEST_API_HOST\",
      \"SESSION_HUB_VIDEO\": \"$SESSION_HUB_VIDEO\",
      \"DEPLOYMENT\": \"$DEPLOYMENT\",
      \"DOMAIN\": \"$DOMAIN\",
    };
    " >build/env.js
elif [ "$DEPLOYMENT" = "prd" ]; then
  echo "
    window.env = {
      \"API_HOST\": \"https://$API_HOST\",
      \"CLIENT_HOST\": \"https://$CLIENT_HOST\",
      \"TEST_API_HOST\": \"$TEST_API_HOST\",
      \"SESSION_HUB_VIDEO\": \"$SESSION_HUB_VIDEO\",
      \"DEPLOYMENT\": \"$DEPLOYMENT\",
      \"DOMAIN\": \"$DOMAIN\",
    };
    " >build/env.js
fi
