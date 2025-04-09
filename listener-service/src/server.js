const app = require('./app');
require('dotenv').config();

app.listen(() => {
    console.log('Listener service running');
});