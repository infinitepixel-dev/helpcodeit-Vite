import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { Helmet } from 'react-helmet-async';

function JSONServer() {
    const codeRef = useRef(null);

    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, []);

    const installationCode = `npm install -g json-server`;

    const basicUsageCode = `json-server --watch db.json`;

    const customPortCode = `json-server --watch db.json --port 3004`;

    const sampleDbJson = `{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}`;

    return (
        <div className="container text-lg">
            <Helmet>
                <title>JSON-Server Installation and Usage Guide | Help Code It</title>
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
            <h1 className=" my-4 text-center text-6xl">
                json-server Guide
            </h1>
            <h2 className="mb-5 mt-5 text-center text-2xl">
                Installation and Usage Instructions
            </h2>
            <hr className="border-2 border-black dark:border-white" />

            <h3 className="my-5 text-2xl">What is JSON-Server?</h3>
            <p>
                JSON-Server is a Node module that allows you to create a full fake REST API with zero coding in less than 30 seconds. It&apos;s perfect for prototyping and mocking, and it&apos;s very easy to set up and use.
            </p>

            <h3 className="my-5 text-2xl">Installation</h3>
            <p>
                To install JSON-Server globally on your system, run the following command in your terminal:
            </p>
            <pre>
                <code ref={codeRef} className="bash mt-4 text-base">
                    {installationCode}
                </code>
            </pre>

            <h3 className="my-5 text-2xl">Basic Usage</h3>
            <p>
                1. Create a `db.json` file with some data:
            </p>
            <pre>
                <code ref={codeRef} className="json mt-4 text-base">
                    {sampleDbJson}
                </code>
            </pre>
            <p>
                2. Start JSON-Server:
            </p>
            <pre>
                <code ref={codeRef} className="bash mt-4 text-base">
                    {basicUsageCode}
                </code>
            </pre>
            <p>
                Now if you go to http://localhost:3000/posts/1, you&apos;ll get:
            </p>
            <pre>
                <code ref={codeRef} className="json mt-4 text-base">
                    {`{ "id": 1, "title": "json-server", "author": "typicode" }`}
                </code>
            </pre>

            <h3 className="my-5 text-2xl">Custom Port</h3>
            <p>
                You can start JSON-Server on a different port using the --port flag:
            </p>
            <pre>
                <code ref={codeRef} className="bash mt-4 text-base">
                    {customPortCode}
                </code>
            </pre>

            <h3 className="my-5 text-2xl">Common Commands</h3>
            <p className='text-base mb-2'>**It is of note that the --watch flag is not necessary in the current version of JSON-Server. The server will automatically watch the db.json file for changes.</p>
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-700 p-2">Command</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-2"><pre><code ref={codeRef} className="json mt-4 text-base">json-server --watch db.json</code></pre></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-2">Start JSON-Server and watch db.json for changes</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-2"><pre><code ref={codeRef} className="json mt-4 text-base">json-server --watch db.json --port 3004</code></pre></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-2">Start JSON-Server on a custom port</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-2"><pre><code ref={codeRef} className="json mt-4 text-base">json-server --watch db.json --routes routes.json</code></pre></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-2">Use a custom routes file</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-2"><pre><code ref={codeRef} className="json mt-4 text-base">json-server db.json --id _id</code></pre></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-2">Set a custom ID field</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-2"><pre><code ref={codeRef} className="json mt-4 text-base">json-server --watch db.json --delay 2000</code></pre></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-2">Add a delay to responses (ms)</td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-5 mb-24">
                These are just a few examples of what you can do with JSON-Server. For more advanced usage and options, refer to the <a className='text-blue-600 font-bold hover:text-blue-800' href='https://github.com/typicode/json-server' target='_blank' rel='noreferrer'>Official JSON-Server Documentation</a> .
            </p>
        </div>
    );
}

export default JSONServer;