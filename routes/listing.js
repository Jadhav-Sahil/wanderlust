const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, isOwner } = require("../middleware");
const wrapAsync = require("../utils/wrapAsync");
const { validateListing } = require("../utils/validation");
const Listing = require("../models/listing.js");
const listingController = require("../controllers/listings");

// Import upload from CloudConfig
const { upload } = require("../CloudConfig");

// ================= GET ALL LISTINGS =================
router.get("/", wrapAsync(listingController.index));

// ================= NEW FORM =================
router.get("/new", isLoggedIn, listingController.new);

// ================= CREATE LISTING =================
router.post(
    "/",
    isLoggedIn,
    upload.single("image"),
    validateListing,
    wrapAsync(listingController.create)
);

// ================= SEARCH LISTING =================
router.get("/search", async (req, res, next) => {
    try {
        const searchText = req.query.search;

        if (!searchText || searchText.trim() === "") {
            req.flash("error", "Please enter something to search");
            return res.redirect("/listings");
        }

        const results = await Listing.find({
            $or: [
                { title: { $regex: searchText, $options: "i" } },
                { location: { $regex: searchText, $options: "i" } },
                { country: { $regex: searchText, $options: "i" } }
            ]
        });

        res.render("listings/search", {
            results,
            searchText
        });

    } catch (err) {
        next(err);
    }
});
// ================= SHOW LISTING =================
router.get("/:id", wrapAsync(listingController.show));

// ================= EDIT FORM =================
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.edit)
);

// ================= UPDATE LISTING =================
router.put(
    "/:id",
    isLoggedIn,
    upload.single("image"),
    isOwner,
    validateListing,
    wrapAsync(listingController.update)
);

// ================= DELETE LISTING =================
router.delete(
    "/:id",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.delete)
);

module.exports = router;