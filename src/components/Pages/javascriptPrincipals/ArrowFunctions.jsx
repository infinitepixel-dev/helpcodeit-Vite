import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { Helmet } from 'react-helmet-async'


export default function ArrowFunctions() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const arrowFunction = `const sayHello = () => {
    console.log("Hello, World!");
    };
    sayHello();
    //Output: Hello, World!`

    const arrowFunctionWithParams = `const addNumbers = (num1, num2) => {
    console.log(num1 + num2);
    }
    addNumbers(5, 10);
    //Output: 15`

    const arrowButton = `function handleClick(e) {
      e.preventDefault();
      console.log("Button was clicked!");
    }


    return (
      <button onClick={(e) => handleClick(e)}>Click Me!</button>
    )`

    return (
        <div className="pb-16">
            <Helmet>
                <title>Arrow Functions in JavaScript | Help Code It</title>
                <meta
                    name="description"
                    content="Learn about arrow functions in JavaScript. Understand their syntax, benefits, and use cases through practical examples."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascriptPrincipals/ArrowFunctions"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="JavaScript, arrow functions, ES6, fat arrow functions, JavaScript functions, JavaScript tutorial, web development"
                />
            </Helmet>
            <div className="container">
                <h1 className="satisfyFont py-10 text-center text-8xl font-bold">
                    Arrow Functions🏹
                </h1>
                <hr className="border-2 border-black dark:border-white" />
                <div className="my-10">
                    <h2 className="text-center text-6xl font-bold">
                        What are Arrow Functions?
                    </h2>
                    <h3 className="mb-10 text-center text-3xl font-bold">
                        Why do we use them?
                    </h3>
                    <hr className="border-1 border-black dark:border-white" />

                    <p className="my-10 text-2xl">
                        Arrow functions are a more concise way to write a
                        function in JavaScript. They are also known as fat arrow
                        functions. Arrow functions do not have their own this
                        value. They are not well suited for defining object
                        methods. Arrow functions are not hoisted, which means
                        they cannot be called before they are defined like
                        standard functions.
                    </p>
                    <h2 className="text-center text-6xl font-bold">
                        Basic Syntax
                    </h2>
                    <hr className="border-1 my-2 border-black dark:border-white" />

                    <p className="my-10 text-2xl">
                        The basic syntax for an arrow function is as follows:
                    </p>
                    <div className="grid-cols-3 lg:grid">
                        <pre className="col-span-1">
                            <code ref={codeRef} className="javascript">
                                {arrowFunction}
                            </code>
                        </pre>
                        <p className="col-span-2 text-2xl">
                            Here we show an arrow function that logs "Hello,
                            World!" to the console. The arrow function is
                            assigned to the variable sayHello. The arrow
                            function is then called using the variable name
                            followed by parentheses. The output of the arrow
                            function is "Hello, World!"
                        </p>
                    </div>
                    <h2 className="text-center text-6xl font-bold ">
                        Arrow Functions with Parameters
                    </h2>
                    <hr className="border-1 my-2 border-black dark:border-white" />

                    <p className="my-10 text-2xl">
                        Arrow functions can also take parameters. The syntax for
                        an arrow function with parameters is as follows:
                    </p>
                    <pre>
                        <code ref={codeRef} className="javascript">
                            {arrowFunctionWithParams}
                        </code>
                    </pre>
                    <p className="text-2xl">
                        Here we show an arrow function that takes two
                        parameters, num1 and num2. The arrow function is
                        assigned to the variable addNumbers. The arrow function
                        is then called using the variable name followed by
                        parentheses. The output of the arrow function is 15.
                    </p>
                    <h2 className="text-center text-6xl font-bold">
                        Other Uses...
                    </h2>
                    <hr className="border-1 my-2 border-black dark:border-white" />
                    <p className="my-10 text-2xl">
                        Arrow functions are also useful when using higher order
                        functions such as map, filter, and reduce. Arrow
                        functions are also useful when using setTimeout and
                        setInterval.
                    </p>
                    <p className="my-10 text-2xl">
                        One of the most useful is that you can use them in
                        buttons to prevent the function from being called
                        immediately.
                    </p>
                    <p className="my-10 text-2xl">For example:</p>
                    <pre>
                        <code ref={codeRef} className="language-javascript">
                            {arrowButton}
                        </code>
                    </pre>
                    <p className="my-10 text-2xl">
                        In this example, we have a button that when clicked will
                        log "Button was clicked!" to the console. The arrow
                        function is used to prevent the function from being
                        called immediately.
                    </p>
                </div>
            </div>
        </div>
    )
}
