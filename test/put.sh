#!/bin/bash
curl -X PUT http://127.0.0.1:3000/profiles/123 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "description": "Backend Developer updated profile",
  }'
