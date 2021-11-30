const express = require("express"); 
const router = express.Router(); 
const { isAuth } = require("../../middlewares/auth.middleware"); 
const fileMiddleware = require("../../middlewares/file.middleware");

const { 
    createMusic,
    getAllMusic,
    getMusicById,
    deleteMusic
} = require("../controllers/book.controller"); 

router.post("/create", [fileMiddleware.upload.single("music"), fileMiddleware.uploadToCloudinary], createMusic); 
router.get("/", getAllMusic); 
router.delete("/delete/:musicId", [isAuth], deleteMusic);
router.get("/:musicId", [isAuth], getMusicById); 


module.exports = router; 