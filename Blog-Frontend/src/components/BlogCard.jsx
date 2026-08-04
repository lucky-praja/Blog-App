function BlogCard({post}){

return(

<div className="card">

<h2>{post.title}</h2>

<p>{post.content}</p>

{
post.author &&
<p>
By {post.author.name}
</p>
}

</div>

)

}

export default BlogCard;