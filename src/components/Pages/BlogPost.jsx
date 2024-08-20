import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import { Youtube } from 'lucide-react';


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
            className="float-right w-1/3 m-2 rounded-lg md:w-1/4"
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
      <div className='flex pt-8 pb-24 justify-evenly'>
      <div>
                                  <a
                                                      href="https://www.youtube.com/@HelpCodeIt"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-flex items-center px-6 py-3 font-bold text-white transition-all duration-300 transform bg-red-600 rounded-full hover:bg-red-700 hover:shadow-lg hover:-translate-y-1"
                                  >
                                                      <Youtube size={24} className="mr-3" />
                                                      Visit our YouTube Channel
                                  </a>
                              </div>
                              <div>
                                  <a
                                                      href="https://discord.gg/sDtKwcuK3J"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-flex items-center w-full px-6 py-3 font-bold text-white transition-all duration-300 transform bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1"
                                  >
                                                      <svg className="w-6 h-6 mr-3 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                                      </svg>
                                                      Join our Discord Server
                                  </a>
                              </div>
                              <div>
      <a
        href="https://x.com/HelpCodeIt"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center w-full px-6 py-3 font-bold text-white transition-all duration-300 transform bg-black rounded-full hover:bg-blue-400 hover:shadow-lg hover:-translate-y-1"

      >
        <svg
          className="w-6 h-6 mr-3 transition-all duration-300 fill-current"
          role="img"
          viewBox= "0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >

            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />

        </svg>
        "Follow us @HelpCodeIt"
      </a>
    </div>
                        </div>
      </div>

  );
}


export default BlogPost;
