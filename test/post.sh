#!/bin/bash
curl -X POST http://127.0.0.1:3000/profiles \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "description": "Fullstack Developer specialized in NestJS"
  }'