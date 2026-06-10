const ExpressError = require("../utils/ExpressError.js");
// ================= MIDDLEWARE - VALIDATION ================= //
// Middleware to validate listing data before processing

const { listingSchema, reviewSchema } = require("../schema.js");
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, msg);
    }
    next();
};

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, msg);
    }
    next();
};

module.exports = {
    validateListing,
    validateReview
};