import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { format } from 'date-fns';


function BlogsPage() {
    const location = useLocation();
    console.log("Location: ", location.state);
        const { posts } = location.state || {};

    console.log("Posts Blog Page: ", posts);

    if (!posts || posts.length === 0) {
        return <p>No posts available.</p>;
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
        <div>
          <h1>Blog Posts</h1>
          <ul>
            {posts.map((post) => {

let publishedDate = format(new Date(post.sys.updatedAt), 'MMMM dd, yyyy');

              return (
              <li key={post.sys.id}>
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
              </li>
            )})}
          </ul>
        </div>
      );
    };

export default BlogsPage