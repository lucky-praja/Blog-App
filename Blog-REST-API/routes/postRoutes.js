const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} = require("../controllers/postController");


// Create post (Login required)
router.post("/", auth, createPost);


// Get all posts (Public)
router.get("/", getPosts);


// Get single post (Public)
router.get("/:id", getPostById);


// Update post (Login required)
router.put("/:id", auth, updatePost);


// Delete post (Login required)
router.delete("/:id", auth, deletePost);


module.exports = router;