const Size = require("../models/sizeModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createSize = asyncHandler(async (req, res) => {
  try {
    const newColor = await Size.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});
const updateSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedColor = await Size.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedColor = await Size.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});
const getSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaColor = await Size.findById(id);
    res.json(getaColor);
  } catch (error) {
    throw new Error(error);
  }
});
const getallSize = asyncHandler(async (req, res) => {
  try {
    const getallColor = await Size.find();
    res.json(getallColor);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
    createSize,
    updateSize,
    deleteSize,
    getSize,
    getallSize,
};
