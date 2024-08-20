import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'



function MethodComponent({ item }) {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const { title, description, example, graphical } = item
    return (
        <div className="my-5 rounded-lg border border-black p-5 dark:border-white">

            <h4 className="mb-5 mt-10 text-center text-4xl" id={title}>
                {title}
            </h4>
            <hr className="border-1 mx-auto mb-5 w-11/12 border-black dark:border-white" />
            <p>{description} Here's some examples:</p>
            <div className="flex flex-wrap justify-center">
                <div className="container  mx-4 justify-center align-middle">
                    <pre className="mt-4">
                        <code
                            ref={codeRef}
                            className="language-javascript my-3 max-w-full p-2"
                        >
                            {example}
                        </code>
                    </pre>
                </div>

                {graphical && (
                    <div className="my-auto text-center">
                        <p>
                            Below is a graphical representation of the {title}{' '}
                            method.
                        </p>
                        <div className="text-center text-3xl">{graphical}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default MethodComponent
