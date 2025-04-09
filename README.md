# PubSub Microservice System

## System Overview
This project demonstrates a PubSub architecture with:
- Receiver Service: Accepts user data and publishes events
- Listener Service: Subscribes to events and processes data


A Dockerized implementation of a Publisher-Subscriber architecture using Node.js, MongoDB, and Redis.

Features
--------
- Receiver Service: Accepts user data via API and publishes to Redis
- Listener Service: Subscribes to Redis channel and processes data
- Data Validation: Ensures all required fields are properly formatted
- Scalable: Designed to run in multiple containers

Technologies Used
-----------------
- Node.js
- Express
- MongoDB
- Redis
- Docker

Prerequisites
-------------
- Docker (Install from https://docs.docker.com/get-docker/)
- Docker Compose
- (Optional) Node.js v16+ for local development

Getting Started
---------------

1. Clone the repository:
   git clone https://github.com/shubhamabad/backend-pubsub-system.git
   cd backend-pubsub-system

2. Set up environment variables
   Create a config.env file in the root directory with these contents:

   # MongoDB Configuration
   MONGO_ROOT_USER=root
   MONGO_ROOT_PASSWORD=example
   MONGO_HOST=mongodb
   MONGO_PORT=27017

   # Redis Configuration
   REDIS_HOST=redis
   REDIS_PORT=6379

   # Receiver Service
   RECEIVER_PORT=3000

   # Database Names
   MONGO_RECEIVER_DB=receiver_db
   MONGO_LISTENER_DB=listener_db

3. Build and start the services:
   docker-compose up --build

API Documentation
-----------------

POST /receiver
--------------
Submit user data to the system.

URL: http://localhost:3000/receiver

Headers:
- Content-Type: application/json

Request Body:
{
  "user": "Shubham",
  "class": "JavaScript",
  "age": 28,
  "email": "shubhamabad111@gmail.com"
}

Successful Response (201):
{
  "id": "b74bd9c2-8590-4149-9628-3f738099831a",
  "user": "Shubham",
  "class": "JavaScript",
  "age": 28,
  "email": "shubhamabad111@gmail.com",
  "inserted_at": "2024-03-25T12:00:00.000Z"
}
