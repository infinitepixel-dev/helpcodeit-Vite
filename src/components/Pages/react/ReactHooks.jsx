import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { Helmet } from 'react-helmet-async';

function ReactHooks() {
    const codeRef = useRef(null);

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, []);

    return (
        <div className="pb-14 mx-4">
            <Helmet
                title="React Hooks"
                meta={[
                    {
                        name: 'description',
                        content: 'Learn how to use React Hooks to add state and other React features to functional components.',
                    },
                    {
                        name: 'keywords',
                        content: 'React, React Hooks, useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, custom hooks',
                    },
                ]}
            />

            <div className="container">
                <h1 className="my-5 text-center text-6xl">React Hooks</h1>
                <p className="text-center">Learn how to use React Hooks to add state and other React features to functional components.</p>
                <hr className="my-4"/>
                <section>
                    <h2 className="text-4xl my-4">Introduction</h2>
                    <p>React Hooks were introduced in React 16.8 and have since become a fundamental part of writing React functional components. Hooks allow you to use state and other React features without writing a class.</p>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Prerequisites</h2>
                    <ul className="list-disc list-inside">
                        <li>Basic understanding of React and JavaScript</li>
                        <li>Familiarity with functional components in React</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Table of Contents</h2>
                    <ul className="list-decimal list-inside">
                        <li><a href="#what-are-hooks">What are Hooks?</a></li>
                        <li><a href="#rules-of-hooks">Rules of Hooks</a></li>
                        <li><a href="#commonly-used-hooks">Commonly Used Hooks</a>
                            <ul className="list-disc list-inside ml-6">
                                <li><a href="#usestate" className='text-blue-600 hover:text-blue-700 hover:underline'>useState</a></li>
                                <li><a href="#useeffect" className='text-blue-600 hover:text-blue-700 hover:underline'>useEffect</a></li>
                                <li><a href="#usecontext" className='text-blue-600 hover:text-blue-700 hover:underline'>useContext</a></li>
                                <li><a href="#usereducer" className='text-blue-600 hover:text-blue-700 hover:underline'>useReducer</a></li>
                                <li><a href="#usecallback" className='text-blue-600 hover:text-blue-700 hover:underline'>useCallback</a></li>
                                <li><a href="#usememo" className='text-blue-600 hover:text-blue-700 hover:underline'>useMemo</a></li>
                                <li><a href="#useref" className='text-blue-600 hover:text-blue-700 hover:underline'>useRef</a></li>
                            </ul>
                        </li>
                        <li><a href="#custom-hooks">Custom Hooks</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                    </ul>
                </section>
                <section id="what-are-hooks">
                    <h2 className="text-4xl my-4">What are Hooks?</h2>
                    <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They do not work inside classes — they let you use React without classes.</p>
                </section>
                <section id="rules-of-hooks">
                    <h2 className="text-4xl my-4">Rules of Hooks</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Only Call Hooks at the Top Level:</strong> Don’t call Hooks inside loops, conditions, or nested functions. Always use Hooks at the top level of your React function.</li>
                        <li><strong>Only Call Hooks from React Functions:</strong> Call Hooks from React function components and custom Hooks.</li>
                    </ul>
                </section>
                <section id="commonly-used-hooks">
                    <h2 className="text-4xl my-4">Commonly Used Hooks</h2>
                    <section id="usestate">
                        <h3 className="text-3xl my-3">useState</h3>
                        <p>The <span className='font-semibold italic'>useState</span> Hook lets you add state to functional components.</p>
                        <pre><code className="language-jsx">
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                        </code></pre>
                    </section>
                    <section id="useeffect">
                        <h3 className="text-3xl my-3">useEffect</h3>
                        <p>The <span className='font-semibold italic'>useEffect</span> Hook lets you perform side effects in function components. It serves the same purpose as <span className='font-semibold italic'>componentDidMount</span>, <span className='font-semibold italic'>componentDidUpdate</span>, and <span className='font-semibold italic'>componentWillUnmount</span> in React classes.</p>
                        <pre><code className="language-jsx">
{`import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;

    return () => {
      // Clean up if needed
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                        </code></pre>
                    </section>
                    <section id="usecontext">
                        <h3 className="text-3xl my-3">useContext</h3>
                        <p>The <span className='font-semibold italic'>useContext</span>
                         Hook lets you subscribe to React context without introducing nesting.</p>
                        <pre><code className="language-jsx">
{`import React, { useContext } from 'react';
import { MyContext } from './MyContextProvider';

function MyComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}`}
                        </code></pre>
                    </section>
                    <section id="usereducer">
                        <h3 className="text-3xl my-3">useReducer</h3>
                        <p>The <span className='font-semibold italic'>useReducer</span> Hook is usually preferable to <span className='font-semibold italic'>useState</span> when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</p>
                        <pre><code className="language-jsx">
{`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </div>
  );
}`}
                        </code></pre>
                    </section>
                    <section id="usecallback">
                        <h3 className="text-3xl my-3">useCallback</h3>
                        <p>The <span className='font-semibold italic'>useCallback</span> Hook returns a memoized callback.</p>
                        <pre><code className="language-jsx">
{`import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  return <button onClick={increment}>Increment</button>;
}`}
                        </code></pre>
                    </section>
                    <section id="usememo">
                        <h3 className="text-3xl my-3">useMemo</h3>
                        <p>The <span className='font-semibold italic'>useMemo</span> Hook returns a memoized value.</p>
                        <pre><code className="language-jsx">
{`import React, { useMemo, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    // Some expensive calculation
    return num;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return <div>{memoizedValue}</div>;
}`}
                        </code></pre>
                    </section>
                    <section id="useref">
                        <h3 className="text-3xl my-3">useRef</h3>
                        <p>The <span className='font-semibold italic'>useRef</span> Hook lets you persist values between renders and directly access DOM elements.</p>
                        <pre><code className="language-jsx">
{`import React, { useRef } from 'react';

function TextInputWithFocus

Button() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}`}
                        </code></pre>
                    </section>
                </section>
                <section id="custom-hooks">
                    <h2 className="text-4xl my-4">Custom Hooks</h2>
                    <p>You can create custom Hooks to extract and share logic between components. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.</p>
                    <p>These are useful for situations like fetching data from an API, handling form state, or any other logic that you want to reuse across multiple components.</p>
                    <pre><code className="language-jsx">
{`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}`}
                    </code></pre>
                </section>
                <section id="conclusion">
                    <h2 className="text-4xl my-4">Conclusion</h2>
                    <p>React Hooks are a powerful addition to the React library that allow you to write cleaner, more maintainable functional components. By understanding and utilizing the built-in Hooks, as well as creating your own custom Hooks, you can enhance your React development experience.</p>
                </section>
            </div>
        </div>
    );
}

export default ReactHooks;