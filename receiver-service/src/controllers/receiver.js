const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');
const { publish } = require('../services/publisher');
const { validateUserData } = require('../utils/validation');

exports.handleData = async(req, res) => {
    try {
        const { error } = validateUserData(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const newUser = {
            id: uuidv4(),
            ...req.body,
            inserted_at: new Date().toISOString()
        };

        await User.create(newUser);
        await publish('user_created', JSON.stringify(newUser));

        return res.status(201).json(newUser);
    } catch (error) {
        console.error('Error processing data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};