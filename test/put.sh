#!/bin/bash
curl -X PUT http://localhost:3000/profiles/7988a7ba-6f4d-4ab0-abde-fcee311b2486 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Changed Profile",
    "description": "Backend Developer updated profile"
  }'
