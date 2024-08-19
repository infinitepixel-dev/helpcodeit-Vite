import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';



function BlogList({posts}) {
console.log("PostList: ", posts);

    //Match each post with its images if available
    // const postImages = posts.includes?.Asset || [];
    // posts.items.forEach((post) => {
    //     const imageId = post.fields.picture?.sys.id;
    //     post.fields.picture = postImages.find((img) => img.sys.id === imageId);
    // }
    // );

// FIXME: This function is not working as expected needs 'previewtext' to be defined
    const getPreviewText = (posts) => {
        const previewText = posts.content[0].content[0].value;
        // previewText += posts.content[0].content[1].value;
        // truncate preview text to 100 characters
        if (previewText.length > 200) {
            return previewText.slice(0, 200) + '...';
        }
        return previewText;
    };

// console.log('Posts: ', posts);
    return (
        <div className="container py-8 mx-auto">
            <div className="grid bg-gray-300 border border-gray-800 rounded-lg dark:bg-gray-600 ">
                {posts && posts.length > 0 ? (
                    posts.map((post) => {

                        let publishedDate = format(new Date(post.sys.updatedAt), 'MMMM dd, yyyy');
                        // const imageUrl = post.fields.picture?.fields.file.url;
                        // console.log('Post: ', post);
                        return (
                            <div
                                key={post.sys.id}
                                className="flex flex-col overflow-hidden rounded-lg md:flex-row"
                            >

                                <div className="flex flex-col justify-between p-6">
                                    <div>
                                        <h2 className="mb-2 text-xl font-bold text-balance ">
                                            {post.fields.title}
                                        </h2>
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
                                        className="self-start mt-4 font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Read This Post
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