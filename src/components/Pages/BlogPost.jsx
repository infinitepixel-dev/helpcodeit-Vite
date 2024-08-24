

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

function BlogPost() {
    const location = useLocation();
    const post = location.state?.post;
    const postId = location.state?.post.sys.id;
    const pictureId = post.fields.picture?.sys.id;
    const [imageUrl, setImageUrl] = useState(null);

    const VITE_BLOG_API_KEY = import.meta.env.VITE_BLOG_API_KEY;
    const VITE_BLOG_SPACE_ID = import.meta.env.VITE_BLOG_SPACE_ID;
    const BLOG_URL = `https://cdn.contentful.com/spaces/${VITE_BLOG_SPACE_ID}/environments/master/entries?access_token=${VITE_BLOG_API_KEY}&sys.id=${postId}`;


    // Fetch post and cache the image
    const fetchPostById = async () => {
        try {
            // Use a unique cache key based on postId and pictureId
            const uniqueCacheKey = `${BLOG_URL}_${pictureId}`
            const cache = await caches.open('blog-post-cache')
            const cachedResponse = await cache.match(uniqueCacheKey)

            // If found in cache, use the cached data
            if (cachedResponse) {
                const cachedData = await cachedResponse.json()
                // console.log("cached data:", cachedData);
                const cachedImageUrl =
                    cachedData.includes.Asset[0].fields.file.url
                setImageUrl(cachedImageUrl)
            } else {
                // If not in cache, fetch the post and clone the response
                const assetResponse = await fetch(BLOG_URL)
                const assetResponseClone = assetResponse.clone() // Clone before consuming the response body
                const assetData = await assetResponse.json()
                // console.log("image asset data:", assetData);

                const newImageUrl = assetData.includes.Asset[0].fields.file.url

                // Cache the cloned response with a unique cache key
                cache.put(uniqueCacheKey, assetResponseClone)
                setImageUrl(newImageUrl)
            }
        } catch (error) {
            console.error('Error fetching post or asset:', error)
        }
    }

    useEffect(() => {
        fetchPostById()
    }, [postId, pictureId])
    if (!post) {
        return <p>Loading...</p>;
    }

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p className="content">{children}</p>,
            [BLOCKS.HEADING_1]: (node, children) => <h1 className="my-4 text-4xl">{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className="my-3 text-3xl">{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className="my-2 text-2xl">{children}</h3>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="my-2 text-xl">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="my-1 text-lg">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="my-1 text-base">{children}</h6>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { url, title } = node.data.target.fields.file;
                return <img src={url} alt={title} className="float-right w-1/3 m-2 rounded-lg md:w-1/4" />;
            },
            [INLINES.HYPERLINK]: (node, children) => {
                return <a href={node.data.uri} className="text-blue-500 hover:underline">{children}</a>;
            },
        },
    };

    return (
        <div key={post.sys.id} className="container mb-24 blog-post">
            <h1 className="my-8 text-5xl">{post.fields.title}</h1>
            <p className="mb-3 text-sm font-bold text-gray-500">
                {format(new Date(post.sys.updatedAt), 'MMMM dd, yyyy')}
            </p>
            {imageUrl && (
                <img src={imageUrl} alt="blog post" className="float-right w-1/3 m-2 rounded-lg" />
            )}
            <div>
                {documentToReactComponents(post.fields.content, options)}
            </div>
        </div>
    );
}

export default BlogPost;