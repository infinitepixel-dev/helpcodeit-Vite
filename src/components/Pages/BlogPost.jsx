import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';

function BlogPost() {
  const location = useLocation();
  const post = location.state?.post;
  const postId = location.state?.post.sys.id;
  const pictureId = post.fields.picture?.sys.id;  // Ensure you have the pictureId
  const [imageUrl, setImageUrl] = useState(null);

  const VITE_BLOG_API_KEY = import.meta.env.VITE_BLOG_API_KEY;
  const VITE_BLOG_SPACE_ID = import.meta.env.VITE_BLOG_SPACE_ID;
  const BLOG_URL = `https://cdn.contentful.com/spaces/${VITE_BLOG_SPACE_ID}/environments/master/entries?access_token=${VITE_BLOG_API_KEY}&sys.id=${postId}`;

  // Fetch post and cache the image
  const fetchPostById = async () => {
    try {
      // Use a unique cache key based on postId and pictureId
      const uniqueCacheKey = `${BLOG_URL}_${pictureId}`;
      const cache = await caches.open('blog-post-cache');
      const cachedResponse = await cache.match(uniqueCacheKey);

      // If found in cache, use the cached data
      if (cachedResponse) {
        const cachedData = await cachedResponse.json();
        // console.log("cached data:", cachedData);
        const cachedImageUrl = cachedData.includes.Asset[0].fields.file.url;
        setImageUrl(cachedImageUrl);
      } else {
        // If not in cache, fetch the post and clone the response
        const assetResponse = await fetch(BLOG_URL);
        const assetResponseClone = assetResponse.clone();  // Clone before consuming the response body
        const assetData = await assetResponse.json();
        // console.log("image asset data:", assetData);

        const newImageUrl = assetData.includes.Asset[0].fields.file.url;

        // Cache the cloned response with a unique cache key
        cache.put(uniqueCacheKey, assetResponseClone);
        setImageUrl(newImageUrl);
      }
    } catch (error) {
      console.error('Error fetching post or asset:', error);
    }
  };

  useEffect(() => {
    fetchPostById();
  }, [postId, pictureId]);

  if (!post) {
    return <p>Loading...</p>;
  }

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
        if (content.nodeType.startsWith('heading-')) {
          const HeadingTag = `h${content.nodeType.charAt(content.nodeType.length - 1)}`;
          return (
            <HeadingTag
              key={index}
              className={`py-5 text-${parseInt(
                content.nodeType.charAt(content.nodeType.length - 1)
              ) + 1}xl`}
            >
              {content.content[0].value}
            </HeadingTag>
          );
        }

        return null;
    }
  };

  return (
    <div key={post.sys.id} className="container mb-24 blog-post">
      <h1 className="my-8 text-5xl">{post.fields.title}</h1>
      <p className="mb-3 text-sm font-bold text-gray-500">{
      format(post.sys.updatedAt, 'MMMM dd, yyyy')
      }</p>
      {imageUrl && (
        <img src={imageUrl} alt="blog post" className="float-right w-1/3 m-2 rounded-lg" />
      )}
      <div>{post.fields.content.content.map(renderContent)}</div>
    </div>
  );
}

export default BlogPost;
