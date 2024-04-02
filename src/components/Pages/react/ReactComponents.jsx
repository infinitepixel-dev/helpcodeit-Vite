import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

function ReactComponents() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const codeString = `import React from 'react';

function Heading() {
  return <h1>Hello, World!</h1>;
}

export default Heading;`

    const codeString2 = `import React from 'react';

function Heading() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my website!</p>
    </div>
  );
}

export default Heading;`

    return (
        <div className="mb-24">
            <h1 className="satisfyFont my-4 text-center text-6xl">
                React Components
            </h1>
            <h2 className="mb-5 mt-5 text-center text-2xl">
                What are React Components?
            </h2>
            <hr className="my-2 border-2 border-black dark:border-white" />
            <div className="container">
                <h3 className="my-5 text-2xl">Components</h3>
                <p>
                    Components are the building blocks of any React application.
                    A React component is a JavaScript function or class that
                    accepts inputs and returns a React element. Components are
                    reusable and can be composed together to create complex user
                    interfaces.
                </p>
                <p>
                    Below is an example of a simple React component that renders
                    a heading element:
                </p>
                <pre className="mb-2">
                    <code
                        ref={codeRef}
                        className="javascript float-start me-5 mt-4 p-2 text-base"
                    >
                        {codeString}
                    </code>
                </pre>

                <p>
                    It is important to remember to export your component so that
                    it can be imported and used in other parts of your
                    application.
                </p>
                <br />
                <p>
                    When using components it is useful to think of the big
                    picture. Components can be used to create a complex user
                    interface by breaking it down into smaller, reusable parts.
                </p>
                <br />
                <p>
                    That part about reusable is the key. Components are reusable
                    and can be used in multiple places throughout your
                    application that way you don't have to write the same code
                    over and over again. In other words D.R.Y - Don't Repeat
                    Yourself.
                </p>
                <hr className="my-2 border-1 border-black dark:border-white" />
                <h2 className="mb-5 mt-5 text-center text-2xl">
                    Imporant Information About Your Returns
                </h2>
                <p>
                    When returning JSX in a component, you can only return one
                    element. If you need to return multiple elements, you can
                    wrap them in a div element or use a fragment.
                </p>
                <p>
                    I like to think of it as a sandwich. You can only have one
                    piece of bread on the top and one piece of bread on the
                    bottom. The meat and cheese are the JSX elements that you
                    want to return.
                </p>
                <p>
                    In our first example we only returned one element, the h1
                    element. In the next example we will return multiple
                    elements.
                </p>
                <pre>
                    <code
                        ref={codeRef}
                        className="javascript float-start me-5 mt-4 p-2 text-base"
                    >
                        {codeString2}
                    </code>
                </pre>
                <p>
                    In this example we are returning a div element that contains
                    an h1 element and a p element. This is a valid return
                    because we are only returning one element.
                </p>
                <h3 className="my-5 text-2xl">Conclusion</h3>
                <p>
                    Components are the building blocks of any React application.
                    They are reusable and can be composed together to create
                    complex user interfaces. When returning JSX in a component,
                    you can only return one element. If you need to return
                    multiple elements, you can wrap them in a div element or use
                    a fragment.
                </p>
            </div>
        </div>
    )
}
export default ReactComponents
