const redis = require('redis');
const User = require('../models/User');

const client = redis.createClient({
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_PORT || 6379
});

const subscribe = () => {
    client.on('connect', () => console.log('Listener connected to Redis'));
    client.on('error', (err) => console.error('Redis error:', err));

    client.subscribe('user_created');
    console.log('Subscribed to user_created channel');

    client.on('message', async(channel, message) => {
        if (channel === 'user_created') {
            try {
                const userData = JSON.parse(message);
                const record = {
                    ...userData,
                    modified_at: new Date().toISOString()
                };

                await User.create(record);
                console.log(`Record ${record.id} copied to secondary collection`);
            } catch (error) {
                console.error('Error processing message:', error);
            }
        }
    });
};

module.exports = { subscribe };