const Home = require("../models/homePageModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const cloudinaryUploadImg = require("../utils/cloudinary");
const fs = require("fs");

const getHomeImages = asyncHandler(async (req, res) => {
    try {
      const getHomePageImages = await Home.find();
      res.json(getHomePageImages);
    } catch (error) {
      throw new Error(error);
    }
  });

  const saveHomeImages = asyncHandler(async (req, res) => {
    try {
      const newHome = await Home.create(req.body);
      res.json(newHome);
    } catch (error) {
      throw new Error(error);
    }
  });

  const updateHomeImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log('updatehomeimagesbody', req.body, req.params)
  validateMongoDbId(id);
  try {
    const updateHome = await Home.findByIdAndUpdate(id, req.body.data, {
      new: true,
    });
    res.json(updateHome);
  } catch (error) {
    throw new Error(error);
  }
  });

const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      console.log(newpath);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const homePage = await Home.create(
      urls.map((file) => {
        return file;
      })
    );
    res.json(homePage);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  uploadImages,
  getHomeImages,
  saveHomeImages,
  updateHomeImages
};
