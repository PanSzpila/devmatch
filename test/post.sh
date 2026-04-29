#!/bin/bash
curl -X POST http://localhost:3000/profiles \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Kobayashi",
    "description": "Some random dude mistakenly considered as a code ninja"
  }'