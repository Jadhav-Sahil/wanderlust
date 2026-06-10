const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const streamifier = require("streamifier");
const ExpressError = require("./utils/ExpressError.js");
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload function
const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "wanderlust_DEV",
                allowed_formats: ["png", "jpg", "jpeg"],
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};

module.exports = {
    cloudinary,
    upload,
    uploadToCloudinary,
};