const Joi = require('joi');

const userSchema = Joi.object({
    user: Joi.string().required(),
    class: Joi.string().required(),
    age: Joi.number().integer().min(1).required(),
    email: Joi.string().email().required()
});

const validateUserData = (data) => {
    return userSchema.validate(data);
};

module.exports = { validateUserData };