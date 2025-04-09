const redis = require('redis');

const client = redis.createClient({
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_PORT || 6379
});

const connectToRedis = () => {
    client.on('connect', () => console.log('Connected to Redis'));
    client.on('error', (err) => console.error('Redis error:', err));
};

const publish = (channel, message) => {
    return new Promise((resolve, reject) => {
        client.publish(channel, message, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

module.exports = { publish, connectToRedis };