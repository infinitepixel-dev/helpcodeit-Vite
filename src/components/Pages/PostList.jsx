import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ posts }) {

    //Match each post with its images if available
    // const postImages = posts.includes?.Asset || [];
    // posts.items.forEach((post) => {
    //     const imageId = post.fields.picture?.sys.id;
    //     post.fields.picture = postImages.find((img) => img.sys.id === imageId);
    // }
    // );

// FIXME: This function is not working as expected needs 'previewtext' to be defined


   console.log("Content: ", content);
    return (
        <div className="max-w-4xl py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold text-center">Blog Posts</h1>
            <div className="grid gap-6">
                {posts && posts.items.length > 0 ? (
                    posts.items.map((post) => {
                        // const imageUrl = post.fields.picture?.fields.file.url;
                        return (
                            <div
                                key={post.sys.id}
                                className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md md:flex-row"
                            >

                                <div className="flex flex-col justify-between p-6">
                                    <div>
                                        <h2 className="mb-2 text-2xl font-bold text-gray-900">
                                            {post.fields.title}
                                        </h2>
                                        <p className="mb-4 text-gray-700">
                                            {getPreviewText(post.fields.content)}
                                        </p>
                                    </div>
                                    <Link
                                        to={`/post/${post.sys.id}`}
                                        className="self-start mt-4 text-blue-500 hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500">No posts available.</p>
                )}
            </div>
        </div>
    );
}

export default BlogList;