const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync");
const { validateReview } = require("../utils/validation");

const Review = require("../models/review.js")
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

// ================= CREATE REVIEW =================
router.post(
    "/", isLoggedIn,
    validateReview,
    wrapAsync(reviewController.create)
);

// ================= DELETE REVIEW =================
router.delete(
    "/:reviewId", isLoggedIn, isReviewAuthor,
    wrapAsync(reviewController.delete)
);

module.exports = router;