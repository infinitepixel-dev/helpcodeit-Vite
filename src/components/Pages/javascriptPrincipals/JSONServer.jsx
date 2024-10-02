import { Helmet } from 'react-helmet-async'
import { ShieldAlert } from 'lucide-react'

import CodeBlock from '@/components/Sub_Components/CodeBlock'

function JSONServer() {
    const installationCode = `npm install -g json-server@0.17.4`

    const basicUsageCode = `json-server --watch db.json`

    const customPortCode = `json-server --watch db.json --port 3004`

    const sampleDbJson = `{
    "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],
    "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
    "profile": { "name": "typicode" }
}
`

    const jsonCustomRoutes = `json-server --watch db.json --routes routes.json`

    const jsonCustomId = `json-server --watch db.json --id _id`

    const jsonDelay = `json-server --watch db.json --delay 2000`

    const HighlightText = {
        posts: { color: '#f87171', fontWeight: 'bold' },
        comments: { color: '#fbbf24', fontWeight: 'bold' },
        profile: { color: '#34d399', fontWeight: 'bold' },
    }

    return (
        <div className="container px-4 py-12 mx-auto text-gray-800 sm:px-6 lg:px-8 dark:text-gray-200">
            <Helmet>
                <title>
                    JSON-Server Installation and Usage Guide | Help Code It
                </title>
                <meta
                    name="description"
                    content="Learn how to install and use JSON-Server for creating a mock REST API. Explore installation, basic usage, and common commands with detailed examples and explanations."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/tools/json-server-guide"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="JSON-Server, REST API, mock API, JavaScript, Node.js, web development, API testing"
                />
            </Helmet>
            <h1 className="mb-6 text-4xl font-extrabold text-center text-indigo-600 sm:text-5xl dark:text-indigo-400">JSON-Server Guide</h1>
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-600 sm:text-3xl dark:text-gray-400">
                Installation and Usage Instructions
            </h2>
            <hr className="mb-12 border-t-2 border-gray-300 dark:border-gray-700" />

            <section className="mb-16">
                <h3 className="mb-6 text-2xl font-semibold text-indigo-500 sm:text-3xl dark:text-indigo-300">What is JSON-Server?</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    JSON-Server is a Node module that allows you to create a full
                    fake REST API with zero coding in less than 30 seconds.
                    It's perfect for prototyping and mocking, and it's
                    very easy to set up and use.
                </p>
            </section>

            <section className="mb-16">
                <h3 className="mb-6 text-2xl font-semibold text-indigo-500 sm:text-3xl dark:text-indigo-300">Installation</h3>
                <div className="p-4 mb-6 text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500 rounded dark:bg-yellow-900 dark:text-yellow-200">
                    <p className="font-medium">
                        The current version of json-server is in beta, and notes
                        <span className="px-2 py-1 mx-1 font-semibold text-black bg-yellow-300 rounded dark:bg-yellow-600 dark:text-white">
                            breaking changes
                        </span>
                        . We recommend using the older version listed below.
                    </p>
                </div>
                <p className="mb-4 text-lg">
                    To install JSON-Server globally on your system, run the
                    following command in your terminal:
                </p>
                <CodeBlock code={installationCode} language="bash" />
            </section>

            <section className="mb-16">
                <h3 className="mb-6 text-2xl font-semibold text-indigo-500 sm:text-3xl dark:text-indigo-300">Basic Usage</h3>
                <p className="mb-4 text-lg">1. Create a "db.json" file with some data:</p>

                <CodeBlock code={sampleDbJson} language="json" />

                <div className="p-6 mt-6 mb-8 bg-gray-100 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="mb-4 text-xl font-semibold">Endpoints</h4>
                    <p className="mb-4">
                        The "<span style={HighlightText.posts}>posts</span>",
                        "<span style={HighlightText.comments}>comments</span>" and
                        "<span style={HighlightText.profile}>profile</span>" in the example above all count as endpoints.
                    </p>
                    <p className="mb-4">This means your address would be:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li className="font-semibold">
                            http://localhost:3000/<span style={HighlightText.posts}>posts</span>
                        </li>
                        <li className="font-semibold">
                            http://localhost:3000/<span style={HighlightText.comments}>comments</span>
                        </li>
                        <li className="font-semibold">
                            http://localhost:3000/<span style={HighlightText.profile}>profile</span>
                        </li>
                    </ul>
                </div>

                <p className="mb-4 text-lg">2. Start JSON-Server:</p>

                <CodeBlock code={basicUsageCode} language="bash" />

                <p className="mt-6 mb-4 text-lg">
                    Now if you go to http://localhost:3000/posts/1, you'll get:
                </p>

                <CodeBlock
                    code={`{ "id": 1, "title": "json-server", "author": "typicode" }`}
                    language="json"
                />

                <div className="p-6 mt-8 bg-gray-100 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center mb-4">
                        <ShieldAlert className="w-6 h-6 mr-2 text-red-600" />
                        <h4 className="text-xl font-bold">Having issues with your ID's?</h4>
                    </div>
                    <hr className="mb-4 border-gray-300 dark:border-gray-600" />
                    <p className="mb-4 text-center">
                        In json-server when you create a new object, it will automatically assign an ID to it.
                        If you want to change the default ID field to something else, you can use the <span className="font-semibold">--id</span> flag.
                    </p>
                    <p className="mb-4 text-center">
                        For example, if you want to use the <span className="font-semibold">_id</span> field as your ID, you can run the following command:
                    </p>
                    <div className="flex justify-center">
                        <CodeBlock code={jsonCustomId} language="bash" />
                    </div>
                    <p className="mt-4 italic text-center">
                        Another consideration is that the id will not auto increment numbers if they are 'strings' so make sure to use numbers for your ID's.
                    </p>
                </div>
            </section>

            <section className="mb-16">
                <h3 className="mb-6 text-2xl font-semibold text-indigo-500 sm:text-3xl dark:text-indigo-300">Custom Port</h3>
                <p className="mb-4 text-lg">
                    You can start JSON-Server on a different port using the --port
                    flag:
                </p>

                <CodeBlock code={customPortCode} language="bash" />
            </section>

            <section className="mb-16">
                <h3 className="mb-6 text-2xl font-semibold text-indigo-500 sm:text-3xl dark:text-indigo-300">Common Commands</h3>
                <p className="mb-6 text-sm italic">
                    Note: The --watch flag is not necessary in the
                    current version of JSON-Server. The server will automatically
                    watch the db.json file for changes.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border border-collapse border-gray-300 dark:border-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Command</th>
                                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    <CodeBlock code={basicUsageCode} language="bash" />
                                </td>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    Start JSON-Server and watch db.json for changes
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    <CodeBlock code={customPortCode} language="bash" />
                                </td>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    Start JSON-Server on a custom port
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    <CodeBlock
                                        code={jsonCustomRoutes}
                                        language="bash"
                                    />
                                </td>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    Use a custom routes file
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    <CodeBlock code={jsonCustomId} language="bash" />
                                </td>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    Set a custom ID field
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    <CodeBlock code={jsonDelay} language="bash" />
                                </td>
                                <td className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-600">
                                    Add a delay to responses (ms)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <p className="mt-12 mb-24 text-lg">
                These are just a few examples of what you can do with
                JSON-Server. For more advanced usage and options, refer to the{' '}
                <a
                    className="font-bold text-indigo-600 underline hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                    href="https://github.com/typicode/json-server"
                    target="_blank"
                    rel="noreferrer"
                >
                    Official JSON-Server Documentation
                </a>.
            </p>
        </div>
    )
}

export default JSONServer