import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Dialog } from '@headlessui/react'

function Resources() {
    const [htmlExample] = useState(`<h1>Hello, World!</h1>`)
    const [cssExample] = useState(
        `h1 { color: blue; font-size: 2rem; background-color: lightyellow; padding: 1rem; border-radius: 8px; }`
    )
    const [jsExample] = useState(`console.log("Hello, JavaScript!");`)
    const [isCssModalOpen, setIsCssModalOpen] = useState(false)

    return (
        <div className="mx-auto max-w-6xl space-y-12 p-8">
            <Helmet>
                <title>Beginner Coding Resources | Help Code It</title>
                <meta
                    name="description"
                    content="Start your coding journey with beginner-friendly guides, examples, and explanations for HTML, CSS, and JavaScript."
                />
            </Helmet>

            <section className="text-center">
                <h1 className="mb-4 text-5xl font-bold text-blue-800">
                    Start Coding: HTML, CSS, and JavaScript
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-700">
                    Welcome! This page is your beginner's guide to understanding
                    how the web works. You'll learn the basics of HTML for
                    structure, CSS for styling, and JavaScript for
                    interactivity. Let's break it down and get you coding
                    today—no experience needed!
                </p>
            </section>

            {/* HTML Section */}
            <section>
                <h2 className="mb-4 text-3xl font-bold text-slate-800">
                    1️⃣ What is HTML?
                </h2>
                <p className="mb-4 text-lg text-gray-700">
                    HTML (HyperText Markup Language) is the backbone of web
                    pages. It defines the content and structure—like headings,
                    paragraphs, and lists.
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                        <strong>Elements:</strong> The building blocks of HTML
                        (like &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;)
                    </li>
                    <li>
                        <strong>Attributes:</strong> Extra information (like
                        href for links)
                    </li>
                    <li>
                        <strong>Tags:</strong> Mark the start and end of an
                        element
                    </li>
                </ul>

                <div className="mt-6">
                    <h3 className="mb-2 text-2xl font-semibold text-blue-800">
                        Try it out:
                    </h3>
                    <pre className="mb-4 overflow-x-auto rounded-md bg-gray-100 p-4">
                        {htmlExample}
                    </pre>
                    <button
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        onClick={() => alert('Hello, World!')}
                    >
                        Click me to see HTML in action!
                    </button>
                </div>
            </section>

            {/* CSS Section with Modal */}
            <section>
                <h2 className="mb-4 text-3xl font-bold text-slate-800">
                    2️⃣ What is CSS?
                </h2>
                <p className="mb-4 text-lg text-gray-700">
                    CSS (Cascading Style Sheets) makes web pages look good! It
                    controls colors, fonts, layouts, and more.
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                        <strong>Selectors:</strong> Target specific HTML
                        elements
                    </li>
                    <li>
                        <strong>Properties:</strong> Like color, font-size,
                        margin
                    </li>
                    <li>
                        <strong>Values:</strong> The specific setting (e.g.,
                        blue, 16px)
                    </li>
                </ul>

                <div className="mt-6">
                    <h3 className="mb-2 text-2xl font-semibold text-blue-800">
                        Try it out:
                    </h3>
                    <pre className="mb-4 overflow-x-auto rounded-md bg-gray-100 p-4">
                        {cssExample}
                    </pre>
                    <button
                        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                        onClick={() => setIsCssModalOpen(true)}
                    >
                        See CSS Example
                    </button>
                </div>

                {/* CSS Modal */}
                <Dialog
                    open={isCssModalOpen}
                    onClose={() => setIsCssModalOpen(false)}
                    className="relative z-50"
                >
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
                            <Dialog.Title className="mb-4 text-2xl font-bold text-slate-800">
                                CSS Example in Action
                            </Dialog.Title>
                            <div className="rounded-md bg-yellow-100 p-4 text-2xl font-semibold text-blue-600">
                                This is a styled heading!
                            </div>
                            <p className="mt-4 text-sm text-gray-700">
                                The CSS you saw changes the text color, size,
                                background color, padding, and border radius.
                            </p>
                            <button
                                className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                onClick={() => setIsCssModalOpen(false)}
                            >
                                Close
                            </button>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </section>

            {/* JavaScript Section */}
            <section>
                <h2 className="mb-4 text-3xl font-bold text-slate-800">
                    3️⃣ What is JavaScript?
                </h2>
                <p className="mb-4 text-lg text-gray-700">
                    JavaScript makes web pages interactive. It handles logic,
                    user actions, and dynamic content.
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                        <strong>Variables:</strong> Store information
                    </li>
                    <li>
                        <strong>Functions:</strong> Perform tasks
                    </li>
                    <li>
                        <strong>Events:</strong> Respond to user actions
                    </li>
                </ul>

                <div className="mt-6">
                    <h3 className="mb-2 text-2xl font-semibold text-blue-800">
                        Try it out:
                    </h3>
                    <pre className="mb-4 overflow-x-auto rounded-md bg-gray-100 p-4">
                        {jsExample}
                    </pre>
                    <button
                        className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                        onClick={() => console.log('Hello, JavaScript!')}
                    >
                        Open Console to See JavaScript in Action!
                    </button>
                </div>
            </section>

            {/* Extra Resources */}
            <section>
                <h2 className="mb-4 text-3xl font-bold text-slate-800">
                    📚 Extra Resources
                </h2>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MDN HTML Guide
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MDN CSS Guide
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MDN JavaScript Guide
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.freecodecamp.org/learn"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            freeCodeCamp - Learn for Free
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Resources
