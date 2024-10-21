// controllers/userController.js
const User = require('../models/User');
const Joi = require('joi');

// Validation schema
const userValidationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().min(10).required(),
});

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { error } = userValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get user details
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
