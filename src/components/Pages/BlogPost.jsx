function BlogPost({index, post, limit}) {




  return (
    <div className="container">
      <h1 className="my-8 text-5xl">{post.fields.title}</h1>
      {post.fields.content.content.map((content, index) => {
        if(content.nodeType === 'paragraph') {
          return <p className="mb-6" key={index}>{content.content[0].value}</p>


        }
      })}

    </div>
  )
}



export default BlogPost;
