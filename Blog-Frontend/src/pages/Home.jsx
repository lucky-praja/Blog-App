import { useEffect, useState } from "react";
import API from "../api";

function Home() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        API.get("/posts")
        .then((res)=>{
            setPosts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });

    },[]);


    return (
        <div className="container">

            <h1>All Blogs</h1>

            <div className="cards">

            {
                posts.map((post)=>(
                    <div className="card" key={post._id}>

                        <h2>{post.title}</h2>

                        <p>
                            {post.content}
                        </p>

                    </div>
                ))
            }

            </div>

        </div>
    );
}

export default Home;