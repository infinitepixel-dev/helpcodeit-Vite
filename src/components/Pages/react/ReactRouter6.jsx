import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import reactRouterLogo from '@assets/React Router.svg';

const ReactRouter6 = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  const CodeBlock = ({ code }) => (
    <pre className="my-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
      <code ref={codeRef} className="text-base">
        {code}
      </code>
    </pre>
  );

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>React Router 6+ | Help Code It</title>
        <meta
          name="description"
          content="Learn how to use React Router 6+ to manage navigation in your React applications. Understand the basics of routing, setting up routes, and using links with practical examples."
        />
        <link rel="canonical" href="https://www.helpcodeit.com/ReactRouter6" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="React Router, React Router 6, routing in React, navigation, React tutorial, web development, JavaScript, single-page applications"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-6xl font-bold text-gray-800 dark:text-gray-100">
          React Router 6+
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <section className="mb-8   p-6  ">
              <h2 className="mb-4 text-4xl font-semibold text-gray-800 dark:text-gray-100">
                Why React Router Exists
              </h2>
              <p className="mb-4 text-2xl text-gray-600 dark:text-gray-300">
                React is a library for building user interfaces, not a framework. It doesn't come with built-in routing capabilities. React Router fills this gap by providing routing functionality to React applications.
              </p>
              <p className="text-gray-600 text-2xl dark:text-gray-300">
                In essence, React Router watches the URL and renders the appropriate components based on the current path. It also provides a way to navigate between different URLs within your application.
              </p>
            </section>
          </div>

          <div className="md:col-span-1">
            <aside className="rounded-lg bg-gray-50  p-6 shadow-md border border-gray-400 dark:border-gray-300 dark:bg-gray-600">
                <img src={reactRouterLogo} alt="React Router Logo" className=" mx-auto mb-4" />
              <h2 className="mb-4 text-4xl font-semibold text-gray-800 dark:text-gray-100 text-center">
                React Router 6+
              </h2>
              <p className="mb-4 text-lg text-gray-600 dark:text-gray-100  font-bold">
                React Router 6+ is the latest version of this declarative routing library for React. It allows you to compose your application's navigation rules declaratively.
              </p>
              <div className="grid justify-center">
                  <a
                    href="https://reactrouter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className=" rounded-lg text-lg font-semibold  bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  >
                    React Router Documentation
                  </a>
              </div>
            </aside>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-300" />

        <section className="mb-8 rounded-lg bg-white border border-gray-200 p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Installing React Router
          </h3>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            To install React Router, run the following command in your terminal:
          </p>
          <CodeBlock code="npm install react-router-dom" />
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 border border-gray-200">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Basic Example: index.js/main.js/main.tsx
          </h3>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            Here's how to set up BrowserRouter in your index.js/main.js/main.tsx file:
          </p>
          <CodeBlock code={`
import React from 'react';
import {BrowserRouter} from 'react-router-dom'; // <--- Import BrowserRouter

function index() {
    return (
        <BrowserRouter> {/* <--- Wrap your App component with BrowserRouter */}
        <StrictMode>
            <App />
        </StrictMode>
        </BrowserRouter> {/* <--- Wrap your App component with BrowserRouter */}
    );
}

export default index;
          `} />
        </section>

        <section className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Defining Routes
          </h3>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            Here's how to define routes in your application in the App.js/App.tsx file:
          </p>
          <CodeBlock code={`
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home'; // <--- Import your components
import About from './About'; // <--- Import your components
import Contact from './Contact'; // <--- Import your components

function App() {
    return (
        <Routes> {/* <--- Wrap all your Route components with Routes */}
            <Route path="/" element={<Home />} />              {/* <--- Define your routes */}
            <Route path="/about" element={<About />} />        {/* <--- Define your routes */}
            <Route path="/contact" element={<Contact />} />    {/* <--- Define your routes */}
        </Routes> {/* <--- Wrap all your Route components with Routes */}
    );
}

export default App;
          `} />
          <ul className="mt-4 list-inside list-disc text-gray-600 dark:text-gray-300">
            <li>The Routes component wraps all Route components.</li>
            <li>Each Route component defines a path and an element to render.</li>
            <li>The element prop takes a JSX element to render when the path matches.</li>
          </ul>
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Using Links
          </h3>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            In React Router, we use the Link component for navigation:
          </p>
          <CodeBlock code={`
import React from 'react';
import {Link} from 'react-router-dom'; // <--- Import the Link component

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>  {/* <--- Use the Link component */}
                </li>
                <li>
                    <Link to="/about">About</Link> {/* <--- Use the Link component */}
                </li>
                <li>
                    <Link to="/contact">Contact</Link> {/* <--- Use the Link component */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
          `} />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The Link component renders an anchor tag and handles navigation. When a link is clicked, it changes the URL, and BrowserRouter updates the rendered components accordingly.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReactRouter6;