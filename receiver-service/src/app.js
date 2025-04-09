const express = require('express');
const mongoose = require('mongoose');
const receiverRoutes = require('./routes/receiver');
const { connectToRedis } = require('./services/publisher');

const app = express();

app.use(express.json());

app.use('/', receiverRoutes);

require('./config/db');
connectToRedis();

module.exports = app;