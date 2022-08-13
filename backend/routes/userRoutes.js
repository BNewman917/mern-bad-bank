const express = require("express");
const router = express.Router();
const {
    loginUser,
    getMe,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/login").post(loginUser);
router.route("/me").get(protect, getMe);
router.route("/").post(createUser);
router.route("/:id").put(protect, updateUser);
router.route("/:id").delete(protect, deleteUser);

module.exports = router;
