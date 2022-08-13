const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Authenticate user
// @route POST /api/users/login
// @access Private
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    // Check for user email
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            balance: user.balance,
            admin: user.admin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user credentials");
    }
});

//@desc Get logged in user
//@route GET /api/users/
//@access Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

// @desc Create new user
// @route POST /api/users
// @access Public
const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    //Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("That email is already in use");
    }

    // Hash password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            balance: user.balance,
            admin: user.admin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user credentials");
    }
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    if (req.user.id !== user.id) {
        res.status(401);
        throw new Error("You are not authorized to delete this user");
    }
    await user.remove();
    res.status(200).json({ id: req.params.id });
});

// @desc Update user by ID
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { id, email, balance } = req.body;

    if (!req.body) {
        res.status(400);
        throw new Error("Please enter a value");
    }

    // Get user by ID
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    // Update user
    await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    const updatedUser = await User.findById(req.params.id);

    res.status(201).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        balance: updatedUser.balance,
        admin: updatedUser.admin,
        token: generateToken(user._id),
    });
});

// Generate JWT
const generateToken = (id, admin) => {
    return jwt.sign({ id, admin }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

module.exports = {
    loginUser,
    getMe,
    createUser,
    updateUser,
    deleteUser,
};
