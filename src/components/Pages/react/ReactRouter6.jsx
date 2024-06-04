import { useEffect, useRef } from 'react'
import reactRouterLogo from '../../../assets/React Router.svg'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

function ReactRouter6() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const basicExample = `
    import React from 'react';
    import {BrowserRouter} from 'react-router-dom';

    function index() {
        return (
            <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>
            </BrowserRouter>
        );
    }

    export default index;
    `

    const routesExample = `
    import React from 'react';
    import {Route, Routes} from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    import Contact from './Contact';

    function App() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        );
    }
    
    export default App;
    `

    const linkExample = `
    import React from 'react';
    import {Link} from 'react-router-dom';

    function Navbar() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }

    export default Navbar;
    `

    return (
        <div className="mb-32">
            <h1 className="mukataFont mt-5 text-center text-6xl">
                React Router 6+
            </h1>
            <div className="container">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div>
                            <h2 className="mb-3 mt-5 text-center text-3xl">
                                Why React Router Exists
                            </h2>
                            <p>
                                To answer this question we need to first
                                consider the nature of react. The react library
                                is a library for building user interfaces. It is
                                not a framework. This means that react does not
                                come with a built-in way to handle routing. By
                                routing we mean navigating to other 'pages' or
                                simulating this. This is where react router
                                comes in. React router is a library that
                                provides routing capabilities to react
                                applications. It is a collection of navigational
                                components that compose declaratively with your
                                application and allow you to define your
                                application's navigation rules.
                            </p>
                            <p>
                                Simplified it has a component that surrounds
                                your application watching the URL and rendering
                                the correct components based on the URL. It also
                                provides a way to navigate between different
                                URLs in your application.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="m-5 rounded-lg border bg-slate-700 p-5 dark:border-white">
                            <div className="my-5 flex justify-center align-baseline">
                                <h1 className="pb-3 text-center text-3xl">
                                    React Router 6+
                                </h1>
                                <img
                                    src={reactRouterLogo}
                                    alt="React Router Logo"
                                    className="mb-4 ms-5 max-w-[50px]"
                                />
                            </div>
                            <p>
                                React Router 6+ is the latest version of React
                                Router. It is a declarative routing library for
                                React. It is a collection of navigational
                                components that compose declaratively with your
                                application and allow you to define your
                                application's navigation rules.
                            </p>

                            <button className="mt-5 rounded-lg bg-blue-700 p-2 hover:bg-blue-900">
                                <a
                                    href="https://reactrouter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white"
                                >
                                    React Router Documentation
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="mb-3 mt-5 text-center text-2xl">
                        First lets look at how to install React Router
                    </h3>
                    <p>
                        To install React Router, you can run the following
                        command in your terminal:
                    </p>
                    <pre>
                        <code
                            ref={codeRef}
                            className="javascript me-5 mt-4 p-2 text-base"
                        >
                            npm install react-router-dom
                        </code>
                    </pre>
                    <p>
                        This will install the react-router-dom package in your
                        project.
                    </p>

                    <h3 className="mb-3 mt-5 text-center text-2xl">
                        Now Lets Look At A Basic Example of the index.js File
                    </h3>
                    <p>
                        This is where we will use the BrowserRouter so it can
                        watch the URL and render the correct components based on
                        the URL everywhere in our application.
                    </p>
                    <pre>
                        <code
                            ref={codeRef}
                            className="javascript mx-auto mt-4 p-2 text-base"
                        >
                            {basicExample}
                        </code>
                    </pre>

                    <h3 className="mb-3 mt-5 text-center text-2xl">
                        Now Lets Look At How To Define Routes
                    </h3>
                    <p>
                        This is where we define the routes in our application.
                        We use the Routes and Route components from react-router
                        to define the routes.
                    </p>
                    <pre>
                        <code
                            ref={codeRef}
                            className="javascript mx-auto mt-4 p-2 text-base"
                        >
                            {routesExample}
                        </code>
                    </pre>
                    <p>A few things to note: </p>
                    <ul className="list-disc marker:text-black dark:marker:text-slate-400 ">
                        <li>
                            The Routes component is used to wrap all the Route
                            components.
                        </li>
                        <li>
                            The Route component is used to define a route. It
                            takes a path prop which is the URL path and an
                            element prop which is the component to render when
                            the URL matches the path.
                        </li>
                        <li>
                            The element prop takes a JSX element. This is the
                            component that will be rendered when the URL matches
                            the path.
                        </li>
                    </ul>
                    <h3 className="mb-3 mt-5  text-center text-2xl">
                        Now What Changes with Links?
                    </h3>
                    <p>
                        In React Router we use the Link component to navigate
                        between different URLs in our application. The Link
                        component is a component that renders an anchor tag and
                        handles the navigation for us. One way to think about it
                        is that the link you click only changes the URL and the
                        BrowserRouter watches the URL and renders the correct
                        components based on the URL. This is how we can navigate
                        between different URLs in our application.
                    </p>
                    <pre>
                        <code
                            ref={codeRef}
                            className="javascript mx-auto mt-4 p-2 text-base"
                        >
                            {linkExample}
                        </code>
                    </pre>
                    <p>
                        In the example above we have a Navbar component that
                        renders a list of links. When a link is clicked the URL
                        changes and the BrowserRouter watches the URL and
                        renders the correct components based on the URL.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ReactRouter6
