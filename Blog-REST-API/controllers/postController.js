const Post = require("../models/Post");


// Create Post
exports.createPost = async (req, res) => {
    try {

        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.user.id
        });

        res.status(201).json(post);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get All Posts
exports.getPosts = async (req, res) => {
    try {

        const posts = await Post.find()
            .populate("author", "name email");

        res.json(posts);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get Single Post
exports.getPostById = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)
            .populate("author", "name email");

        res.json(post);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Update Post (Only Owner)
exports.updatePost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }


        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You can update only your own post"
            });
        }


        post.title = req.body.title;
        post.content = req.body.content;

        await post.save();

        res.json(post);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



// Delete Post (Only Owner)
exports.deletePost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);


        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }


        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You can delete only your own post"
            });
        }


        await post.deleteOne();


        res.json({
            message: "Post deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};