import { useState } from "react";
import API from "../api";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const createPost = async () => {

        try {

            const token = localStorage.getItem("token");

            await API.post(
                "/posts",
                {
                    title,
                    content
                },
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            alert("Post Created Successfully!");

            setTitle("");
            setContent("");

        } catch (error) {

            console.log(error);
            alert("Failed to create post");

        }

    };

    return (
        <div style={{ padding: "20px" }}>

            <h1>Create Blog</h1>

            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    width: "300px",
                    padding: "10px",
                    marginBottom: "15px"
                }}
            />

            <br />

            <textarea
                placeholder="Enter Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="8"
                cols="50"
            />

            <br /><br />

            <button onClick={createPost}>
                Create Post
            </button>

        </div>
    );
}

export default CreatePost;