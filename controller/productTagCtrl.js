const ProductTag = require("../models/productTagModel.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createTag = asyncHandler(async (req, res) => {
  try {
    const newTag = await ProductTag.create(req.body);
    res.json(newTag);
  } catch (error) {
    throw new Error(error);
  }
});
const updateTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateProductTag = await ProductTag.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateProductTag);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedTag = await ProductTag.findByIdAndDelete(id);
    res.json(deletedTag);
  } catch (error) {
    throw new Error(error);
  }
});
const getProductTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getATag = await ProductTag.findById(id);
    res.json(getATag);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllTags = asyncHandler(async (req, res) => {
  try {
    const getallTags = await ProductTag.find();
    res.json(getallTags);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createTag,
  updateTag,
  deleteTag,
  getProductTag,
  getAllTags,
};
