import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';



function BlogList({posts, limit=3}) {
    posts.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt));
console.log("Posts: ", posts);

if(posts && posts.length > limit) {
    posts = posts.slice(0, limit);
}


    const getPreviewText = (posts) => {
        const previewText = posts.content[0].content[0].value;
        // previewText += posts.content[0].content[1].value;
        // truncate preview text to 100 characters
        if (previewText.length > 200) {
            return previewText.slice(0, 200) + '...';
        }
        return previewText;
    };


    return (
        <div className="container py-8 mx-auto">
                {posts.length === 1 ? <h1 className='mb-3 text-4xl text-center text-white '>Recent Blog Posts</h1> : null}
            <div className="grid border border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-600 ">
                {posts && posts.length > 0 ? (
                    posts.map((post) => {

                        let publishedDate = format(new Date(post.sys.createdAt), 'MMMM dd, yyyy');
                        // const imageUrl = post.fields.picture?.fields.file.url;
                        // console.log('Post: ', post);
                        return (
                            <div
                                key={post.sys.id}
                                className="grid "
                            >
                                <div className="flex flex-col justify-between px-6 pt-3">
                                    <div>
                                        <h2 className="text-xl font-bold text-balance">
                                            {post.fields.title}
                                        </h2>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                            By: {post.fields.Author}
                                        </p>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            {publishedDate}
                                        </p>

                                        <p className="mb-1 ">
                                            {getPreviewText(post.fields.content)}
                                        </p>
                                    </div>
                                    <Link
                                        to={`/post/${post.sys.id}`}
                                        state={{ post }}  // Pass the entire post data through the Link state
                                        className="self-start font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Read This Post
                                    </Link>
                               {posts.length > 1 ?  <hr className="w-full my-3 border-gray-800 border-b-1 dark:border-gray-800" />: <br />}
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