import { format } from 'date-fns'
import {Link} from 'react-router-dom'

function BlogPostLists({ posts }) {
    console.log('posts: ', posts)
    let shortenedPosts = posts.slice(0, 3)

    return (
        <div className="m-4 w-fit ">
            <h2 className="barlow-semi-condensed-regular ms-5 text-pretty text-xl">
                Our Latest Blog Posts
            </h2>
            <hr className="border-1 border-gray-300 w-2/3" />
            {shortenedPosts && shortenedPosts.map((post) => {
             let publishedDate = format(new Date(post.sys.createdAt), 'MMMM dd, yyyy');

                return (
                <Link key={post.sys.id} to={`/post/${post.sys.id}`}
                state={{ post }} className=''
                >
                    <div key={post.id} className="px-4 py-1 hover:text-blue-500 ">
                        <p className="barlow-semi-condensed-semibold text-xs light:text-gray-700 hover:text-blue-500">
                            {publishedDate}
                        </p>
                        <h2 className="barlow-semi-condensed-regular text-pretty text-lg">
                            {post.fields.title}
                        </h2>
                    <hr className="border-1 border-gray-300 w-2/3 mt-1" />
                    </div>
                </Link>
                )
            }
            )}
        </div>
    )
}

export default BlogPostLists
