import { useLocation, Link } from 'react-router-dom'
import { format } from 'date-fns'

function BlogsPage() {
    const location = useLocation()
    console.log('Location: ', location.state)
    const { posts } = location.state || {}

    console.log('Posts Blog Page: ', posts)

    if (!posts || posts.length === 0) {
        return <p>No posts available.</p>
    }
    
    posts.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt))

    const getPreviewText = (posts) => {
        let previewText = ''
        let wordCount = 0

             for (let i = 0; i < posts.content.length; i++) {
            const contentBlock = posts.content[i].content;
            for (let j = 0; j < contentBlock.length; j++) {
                const text = contentBlock[j].value;

                if (typeof text !== 'string') {
                    continue; // Skip if text is not a string
                }

                const words = text.split(' ');

                if (wordCount + words.length > 100) {
                    const remainingWords = 100 - wordCount;
                    previewText += words.slice(0, remainingWords).join(' ') + '...';
                    return previewText;
                } else {
                    previewText += text + ' ';
                    wordCount += words.length;
                }
            }
        }

        return previewText.trim()
    }

    return (
        <div>
            <h1 className="my-8 text-center satisfyFont text-7xl">
                Code Chronicles
            </h1>
            <p className="text-3xl text-center">
                Welcome to the Help Code It blog{' '}
            </p>
            <div className="container">
                <h2 className="mb-5 text-3xl font-bold mt-14 text-balance">
                    Recent Posts
                </h2>
                <ul>
                    {posts.map((post) => {
                        let publishedDate = format(
                            new Date(post.sys.createdAt),
                            'MMMM dd, yyyy'
                        )
                        return (
                            <li key={post.sys.id}>
                                <div className="flex flex-col justify-between p-6 mb-8 bg-orange-300 rounded shadow-md dark:bg-slate-500 dark:shadow-none">
                                    <div>
                                        <h2 className="mb-2 text-xl font-bold text-balance ">
                                            {post.fields.title}
                                        </h2>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                           By: {post.fields.Author}
                                        </p>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            {publishedDate}
                                        </p>
                                        <p className="mb-1 ">
                                            {getPreviewText(
                                                post.fields.content
                                            )}
                                        </p>
                                    </div>
                                    <Link
                                        to={`/post/${post.sys.id}`}
                                        state={{ post }} // Pass the entire post data through the Link state
                                        className="self-start mt-2 font-bold text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        Read This Post
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BlogsPage
