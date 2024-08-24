

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS  } from '@contentful/rich-text-types';

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
        renderMark: {
            [MARKS.BOLD]: text => <strong className="font-bold">{text}</strong>,
            [MARKS.ITALIC]: text => <em className="italic">{text}</em>,
            [MARKS.UNDERLINE]: text => <u className="underline">{text}</u>,
            [MARKS.CODE]: text => <code className="p-1 font-mono rounded">{text}</code>,
            [MARKS.SUBSCRIPT]: text => <sub>{text}</sub>,
            [MARKS.SUPERSCRIPT]: text => <sup>{text}</sup>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-4">{children}</p>,
            [BLOCKS.HEADING_1]: (node, children) => <h1 className="my-6 text-4xl font-bold">{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className="my-5 text-3xl font-bold">{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className="my-4 text-2xl font-bold">{children}</h3>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="my-3 text-xl font-bold">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="my-2 text-lg font-bold">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="my-1 text-base font-bold">{children}</h6>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { url, title, description, contentType } = node.data.target.fields.file;
                if (contentType.includes('image')) {
                    return <img src={url} alt={description || title} className="h-auto max-w-full my-4 rounded-lg" />;
                } else if (contentType.includes('video')) {
                    return <video src={url} controls className="max-w-full my-4 rounded-lg">{title}</video>;
                } else if (contentType.includes('audio')) {
                    return <audio src={url} controls className="w-full my-4">{title}</audio>;
                }
                return <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{title}</a>;
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                // You might want to implement custom rendering for embedded entries
                return <div className="p-4 my-4 border border-gray-300 rounded">Embedded Entry: {node.data.target.sys.id}</div>;
            },
            [BLOCKS.UL_LIST]: (node, children) => <ul className="pl-6 my-4 list-disc">{children}</ul>,
            [BLOCKS.OL_LIST]: (node, children) => <ol className="pl-6 my-4 list-decimal">{children}</ol>,
            [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-2">{children}</li>,
            [INLINES.HYPERLINK]: (node, children) => {
                return <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{children}</a>;
            },
            [INLINES.ENTRY_HYPERLINK]: (node, children) => {
                // You might want to implement custom rendering for entry hyperlinks
                return <span className="text-green-500 cursor-pointer hover:underline">{children}</span>;
            },
            [INLINES.ASSET_HYPERLINK]: (node, children) => {
                return <a href={node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">{children}</a>;
            },
            [BLOCKS.QUOTE]: (node, children) => <blockquote className="pl-4 my-4 italic border-l-4 border-gray-300">{children}</blockquote>,
            [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
            [BLOCKS.TABLE]: (node, children) => (
                <div className="my-4 overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <tbody>{children}</tbody>
                    </table>
                </div>
            ),
            [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
            [BLOCKS.TABLE_CELL]: (node, children) => {
                const isHeader = node.content.length === 1 && node.content[0].nodeType === 'paragraph' && node.content[0].content.length === 1 && node.content[0].content[0].nodeType === 'text' && node.content[0].content[0].marks.some(mark => mark.type === 'bold');
                return isHeader ? (
                    <th className="px-4 py-2 font-bold text-left bg-gray-100 border border-gray-300">{children}</th>
                ) : (
                    <td className="px-4 py-2 border border-gray-300">{children}</td>
                );
            },
        },
    };

    return (
        <div key={post.sys.id} className="container mb-24 blog-post">
            <h1 className="my-8 text-5xl">{post.fields.title}</h1>
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
               Written By: {post.fields.Author} on {format(new Date(post.sys.createdAt), 'MMMM dd, yyyy')}
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