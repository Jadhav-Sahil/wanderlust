const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/user.js");
router.get("/signup", userController.signup_get);

router.post(
    "/signup",
    wrapAsync(userController.signup_post)
);

router.get("/login", userController.login_get);

router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.login_post
);


router.get("/logout", userController.logout);
module.exports = router;