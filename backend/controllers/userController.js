const asyncHandler = require("express-async-handler");

// @desc Get user
// @route GET /api/users
// @access Private
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get user" });
});

// @desc Create new user
// @route POST /api/users
// @access Private
const createUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Create new user" });
});

// @desc Update user by ID
// @route put /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update user by ID" });
});

// @desc Delete user by ID
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Delete user by ID" });
});

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
