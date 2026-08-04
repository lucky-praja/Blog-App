import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

function EditPost() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {

        API.get("/posts")
        .then((res) => {

            const post = res.data.find(
                (item) => item._id === id
            );

            setTitle(post.title);
            setContent(post.content);

        });

    }, [id]);


    const updatePost = async () => {

        const token = localStorage.getItem("token");

        await API.put(
            `/posts/${id}`,
            {
                title,
                content
            },
            {
                headers:{
                    Authorization: token
                }
            }
        );

        alert("Post Updated");

        navigate("/");

    };


    return (
        <div className="form">

            <h1>Edit Post</h1>

            <input
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <textarea
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />

            <button onClick={updatePost}>
                Update
            </button>

        </div>
    );
}

export default EditPost;