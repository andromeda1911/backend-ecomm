const express = require("express");
const {
  uploadImages, getHomeImages, saveHomeImages, updateHomeImages,
} = require("../controller/homePageCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, homeImgResize } = require("../middlewares/uploadImage");
const router = express.Router();

router.get("/", getHomeImages);
router.post("/", authMiddleware,isAdmin, saveHomeImages);
router.put("/:id",authMiddleware,isAdmin, updateHomeImages);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  homeImgResize,
  uploadImages
);

module.exports = router;
