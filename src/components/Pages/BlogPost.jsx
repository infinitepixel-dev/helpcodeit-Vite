import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost({ key, post, limit, imageUrl }) {
  console.log("Post data: ", post);
  console.log("Image URL: ", imageUrl);



  const renderContent = (content, index) => {
    switch (content.nodeType) {
      case 'paragraph':
        return <p key={index} className="content">{content.content[0].value}</p>;
      case 'embedded-asset-block':
        return (
          <img
            key={index}
            src={content.data.target.fields.file.url}
            alt={content.data.target.fields.title}
            className="float-right w-1/3 m-2 rounded-lg"
          />
        );
      default:
        if (content.nodeType.startsWith("heading-")) {
          const HeadingTag = `h${content.nodeType.charAt(content.nodeType.length - 1)}`;
          return (
            <HeadingTag key={index} className={`py-5 text-${parseInt(content.nodeType.charAt(content.nodeType.length - 1)) + 1}xl`}>
              {content.content[0].value}
            </HeadingTag>
          );
        }
        return null;
    }
  };


  return (
    <div key={key} className="container mb-24 blog-post">
      <h1 className="my-8 text-5xl">{post.fields.title}</h1>
      <p className="text-gray-500 text-bold">{post.fields.date}</p>
      {imageUrl && (
        <img src={imageUrl} alt="blog post" className="float-right w-1/3 m-2 rounded-lg" />
      )}
      <div>
        {post.fields.content.content.map(renderContent)}
      </div>
    </div>
  );
}

export default BlogPost;