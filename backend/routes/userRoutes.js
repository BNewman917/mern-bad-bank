const express = require("express");
const router = express.Router();
const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

router.route("/").get(getUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
