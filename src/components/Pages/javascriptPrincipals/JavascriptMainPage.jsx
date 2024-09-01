import javascriptlogo from '@assets/jswithburstlogo.svg'
import { Helmet } from 'react-helmet-async'
import JavaScriptNavigation from '../../Sub_Components/JavaScriptNavigation'
import { Link } from 'react-router-dom'  // Add this import

function JavascriptMainPage() {
    return (
        <div className="min-h-screen mb-10">
            <Helmet>
                <title>Learn JavaScript | Help Code It</title>
                <meta
                    name="description"
                    content="Explore a comprehensive guide to JavaScript, including free practice problems, declaring variables, functions, array methods, string methods, and more. Enhance your web development skills with Help Code It."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascript"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="JavaScript, JavaScript tutorial, JavaScript practice problems, declaring variables, standard functions, arrow functions, array methods, string methods, npm init, package.json, objects, loops, string concatenation, unit testing, Mocha, Chai, CRUD operations, API, OOP, War Game"
                />
            </Helmet>
            <div className="container p-2 px-4 mx-auto pb-100 sm:p-8">
                <div className="flex flex-wrap items-center mt-5">
                    <div className="w-full md:w-2/3 lg:w-2/3 ">
                        <h1 className="text-3xl font-bold text-center">
                            JavaScript
                        </h1>
                        <p className="mt-4">
                            JavaScript is a programming language that adds
                            interactivity to your website. This happens in
                            games, in the behavior of responses when buttons are
                            pressed or with data entry on forms; with dynamic
                            styling; with animation, etc. This article helps you
                            get started with this exciting language and gives
                            you an idea of what is possible.
                        </p>
                        <p className="mt-4">
                            This page gives you subjects that are covered to
                            help supplement your learning.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/3">
                        <img
                            src={javascriptlogo}
                            alt="JavaScript Logo with burst color behind"
                            className="w-full"
                            aria-label="JavaScript Logo with burst color behind"
                        />
                    </div>
                </div>
                {/* SECTION End Hero Section */}
                {/* SECTION Main Content Goes Below This Line */}
                <div className="mt-10">
                    <JavaScriptNavigation />
                </div>

                {/* Add this new section for the Interactive Fetch example */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Interactive Examples</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            <Link
                                to="/javascriptPrincipals/InteractiveFetch"
                                className="text-blue-500 hover:underline"
                            >
                                Interactive Fetch Example
                            </Link>
                            : Learn about CRUD operations and API interactions with a hands-on example.
                        </li>
                    </ul>
                </div>

                {/* NEW SECTION: JavaScript Terminology */}
                <div className="mt-16">
                    <h2 className="mb-6 text-2xl font-bold">Comprehensive JavaScript Terminology for Beginners</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { term: "Variable", definition: "A container for storing data values." },
                            { term: "Function", definition: "A reusable block of code that performs a specific task." },
                            { term: "Array", definition: "An ordered list of values." },
                            { term: "Object", definition: "A collection of related data and/or functionality." },
                            { term: "Loop", definition: "A way to repeat a block of code multiple times." },
                            { term: "Conditional", definition: "A statement that performs different actions based on whether a condition is true or false." },
                            { term: "DOM", definition: "Document Object Model, a programming interface for HTML and XML documents." },
                            { term: "Event", definition: "An action that occurs in the browser, like a click or keypress." },
                            { term: "Callback", definition: "A function passed as an argument to another function, to be executed later." },
                            { term: "Scope", definition: "The context in which values and expressions are visible or can be referenced." },
                            { term: "Closure", definition: "A function that has access to variables in its outer (enclosing) lexical scope." },
                            { term: "Promise", definition: "An object representing the eventual completion or failure of an asynchronous operation." },
                            { term: "Async/Await", definition: "A syntax for writing asynchronous code that looks and behaves like synchronous code." },
                            { term: "Hoisting", definition: "JavaScript's default behavior of moving declarations to the top of their scope." },
                            { term: "Prototype", definition: "The mechanism by which JavaScript objects inherit features from one another." },
                            { term: "ES6+", definition: "Versions of ECMAScript (JavaScript) from 2015 onwards, introducing new features and syntax." },
                            { term: "Destructuring", definition: "A way to unpack values from arrays or properties from objects into distinct variables." },
                            { term: "Module", definition: "A file containing related code that can be imported and exported to share functionality." },
                            { term: "Arrow Function", definition: "A concise way to write function expressions in JavaScript." },
                            { term: "Template Literal", definition: "A way to create multi-line strings and embed expressions in strings." },
                            { term: "Spread Operator", definition: "Allows an iterable to be expanded in places where zero or more arguments/elements are expected." }
                        ].map(({ term, definition }, index) => (
                            <div key={index} className="p-4 bg-white rounded-lg shadow">
                                <h3 className="mb-2 text-lg font-semibold text-black">{term}</h3>
                                <p className="text-black">{definition}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JavascriptMainPage
