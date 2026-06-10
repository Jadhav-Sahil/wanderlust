const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().trim().required(),

        description: Joi.string().trim().required(),

        price: Joi.number().positive().required(),

        location: Joi.string().trim().required(),

        country: Joi.string().trim().required(),

        category: Joi.string()
            .valid(
                "trending",
                "room",
                "iconic_city",
                "mountain",
                "castle",
                "amazing_pool",
                "camping",
                "farm",
                "arctic"
            )
            .required(),

        image: Joi.object({
            url: Joi.string().uri().allow("", null),
            filename: Joi.string().allow("", null)
        }).optional(),
    }).required(),
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),

        comment: Joi.string().required(),
    }).required(),
});

module.exports = {
    listingSchema,
    reviewSchema,
};