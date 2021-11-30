const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary");

require("dotenv").config();

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    destinantion: (req, file, cb) => {
        cb(null, path.join('_dirname', "../../public/uploads"));
    },
});

const VALID_FILE_TYPES = [
    //!  L I B R O S
    "application/epub+zip",
    "application/pdf",
    "application/x-mobipocket-ebook",
    //!  I M A G E N E S
    "image/jpg",
    "image/jpeg",
    "image/png"
    
];

const fileFilter = (req, file, cb) => {
    if (!VALID_FILE_TYPES.includes(file.mimetype)) {
        cb(new Error("Invalid file type"));
    } else {
        cb(null, true);
    }
};

const uploadToCloudinary = async (req, res, next) => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_KEY,
        api_secret: process.env.CLOUD_SECRET,
    });

    if (req.file) {
        try {
            const filePath = req.file.path;
            const image = await cloudinary.uploader.upload(filePath);
            await fs.unlinkSync(filePath);
            req.file.url = image.secure_url;
            console.log(req.file);
            return next();
        } catch (error) {
            return next(error);
        }
    } else {
        return next();
    }
};

const upload = multer({
    storage,
    fileFilter,
});

module.exports = {
    upload: upload,
    uploadToCloudinary,
};