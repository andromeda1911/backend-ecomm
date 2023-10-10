const express = require("express");
const {
    createTag,
    updateTag,
    deleteTag,
    getProductTag,
    getAllTags,
} = require("../controller/productTagCtrl.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createTag);
router.put("/:id", authMiddleware, isAdmin, updateTag);
router.delete("/:id", authMiddleware, isAdmin, deleteTag);
router.get("/:id", getProductTag);
router.get("/", getAllTags);

module.exports = router;
