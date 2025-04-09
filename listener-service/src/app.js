const express = require('express');
const mongoose = require('mongoose');
const { subscribe } = require('./services/subscriber');

const app = express();

require('./config/db');
subscribe();

module.exports = app;