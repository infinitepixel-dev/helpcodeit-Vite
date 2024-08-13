import { Helmet } from 'react-helmet-async'

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
        posts: {
            color: '#ff7b72d5',
            fontWeight: 'bold',
        },
        comments: {
            color: '#FFCC00d5',
            fontWeight: 'bold',
        },
        profile: {
            color: '#00FF00d5',
            fontWeight: 'bold',
        },
    }

    return (
        <div className="container text-lg">
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
            <h1 className="my-4 text-center text-6xl">json-server Guide</h1>
            <h2 className="mb-5 mt-5 text-center text-2xl">
                Installation and Usage Instructions
            </h2>
            <hr className="border-2 border-black dark:border-white" />

            <h3 className="my-5 text-2xl">What is JSON-Server?</h3>
            <p>
                JSON-Server is a Node module that allows you to create a full
                fake REST API with zero coding in less than 30 seconds.
                It&apos;s perfect for prototyping and mocking, and it&apos;s
                very easy to set up and use.
            </p>

            <h3 className="my-5 text-2xl">Installation</h3>
            <p>
                The Current version of json-server is in beta, and notes
                <span className=" rounded-sm bg-yellow-300 p-0.5 text-xl font-semibold dark:bg-yellow-400 dark:font-bold dark:text-black">
                    breaking changes
                </span>
                . So we are recommending you to use the older version, which we
                have listed below.
            </p>
            <p>
                To install JSON-Server globally on your system, run the
                following command in your terminal:
            </p>
            <CodeBlock code={installationCode} language="bash" />

            <h3 className="my-5 text-2xl">Basic Usage</h3>
            <p>1. Create a &quot;db.json&quot; file with some data:</p>

            <CodeBlock code={sampleDbJson} language="json" />

            <table className="mb-5 w-fit border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 p-2 dark:border-gray-700">
                            Endpoints
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <p>
                                The &quot;
                                <span style={HighlightText.posts}>posts</span>
                                &quot;, &quot;{' '}
                                <span style={HighlightText.comments}>
                                    comments
                                </span>
                                &quot; and &quot;{' '}
                                <span style={HighlightText.profile}>
                                    profile
                                </span>
                                &quot; in the example above all count as
                                endpoints. <br />
                                <br />
                                This means your address would be:
                                <ul className="ml-5 list-disc">
                                    <li className="list font-semibold">
                                        http://localhost:3000/
                                        <span style={HighlightText.posts}>
                                            posts
                                        </span>
                                    </li>
                                    <li className="font-semibold">
                                        http://localhost:3000/{' '}
                                        <span style={HighlightText.comments}>
                                            comments
                                        </span>
                                    </li>
                                    <li className="font-semibold">
                                        http://localhost:3000/{' '}
                                        <span style={HighlightText.profile}>
                                            profile
                                        </span>
                                    </li>
                                </ul>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>2. Start JSON-Server:</p>

            <CodeBlock code={basicUsageCode} language="bash" />

            <p>
                Now if you go to http://localhost:3000/posts/1, you&apos;ll get:
            </p>

            <CodeBlock
                code={`{ "id": 1, "title": "json-server", "author": "typicode" }`}
                language="json"
            />

            <h3 className="my-5 text-2xl">Custom Port</h3>
            <p>
                You can start JSON-Server on a different port using the --port
                flag:
            </p>

            <CodeBlock code={customPortCode} language="bash" />

            <h3 className="my-5 text-2xl">Common Commands</h3>
            <p className="mb-2 text-base">
                **It is of note that the --watch flag is not necessary in the
                current version of JSON-Server. The server will automatically
                watch the db.json file for changes.
            </p>
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 p-2 dark:border-gray-700">
                            Command
                        </th>
                        <th className="border border-gray-300 p-2 dark:border-gray-700">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock code={basicUsageCode} language="bash" />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Start JSON-Server and watch db.json for changes
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock code={customPortCode} language="bash" />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Start JSON-Server on a custom port
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock
                                code={jsonCustomRoutes}
                                language="bash"
                            />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Use a custom routes file
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock code={jsonCustomId} language="bash" />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Set a custom ID field
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock code={jsonDelay} language="bash" />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Add a delay to responses (ms)
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className="mb-24 mt-5">
                These are just a few examples of what you can do with
                JSON-Server. For more advanced usage and options, refer to the{' '}
                <a
                    className="font-bold text-blue-600 hover:text-blue-800"
                    href="https://github.com/typicode/json-server"
                    target="_blank"
                    rel="noreferrer"
                >
                    Official JSON-Server Documentation
                </a>{' '}
                .
            </p>
        </div>
    )
}

export default JSONServer
