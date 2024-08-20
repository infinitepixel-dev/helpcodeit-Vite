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

    const getPreviewText = (posts) => {
        let previewText = ''
        let wordCount = 0

        for (let i = 0; i < posts.content.length; i++) {
            const contentBlock = posts.content[i].content
            for (let j = 0; j < contentBlock.length; j++) {
                const text = contentBlock[j].value
                const words = text.split(' ')

                if (wordCount + words.length > 100) {
                    const remainingWords = 100 - wordCount
                    previewText +=
                        words.slice(0, remainingWords).join(' ') + '...'
                    return previewText
                } else {
                    previewText += text + ' '
                    wordCount += words.length
                }
            }
        }

        return previewText.trim()
    }

    return (
        <div>
            <h1 className="satisfyFont my-8 text-center text-7xl">
                Code Chronicles
            </h1>
            <p className="text-center text-3xl">
                Welcome to the Help Code It blog{' '}
            </p>
            <div className="container">
                <h2 className="mb-5 mt-14 text-balance text-3xl font-bold">
                    Recent Posts
                </h2>
                <ul>
                    {posts.map((post) => {
                        let publishedDate = format(
                            new Date(post.sys.updatedAt),
                            'MMMM dd, yyyy'
                        )
                        return (
                            <li key={post.sys.id}>
                                <div className="mb-8 flex flex-col justify-between rounded bg-orange-300 p-6 shadow-md dark:bg-slate-500 dark:shadow-none">
                                    <div>
                                        <h2 className="mb-2 text-balance text-xl font-bold ">
                                            {post.fields.title}
                                        </h2>
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
                                        className="mt-2 self-start font-bold text-blue-600 hover:underline dark:text-blue-400"
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
