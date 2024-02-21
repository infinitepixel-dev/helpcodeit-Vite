import React, { useEffect, useRef } from 'react'

function CRUD({ Object, hljs }) {
    console.log('accordion')

    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])
    console.log(Object)
    return (
        <div className="text-lg">
            <p>
                Each list item below represents a line of code to explain what
                it is doing.
            </p>
            <div className="border-1 my-5 rounded-lg border border-black  p-3 dark:border-white">
                <ul className="list-inside">
                    {Object.content.map((item, index) => {
                        return (
                            <li key={index} className="my-2 list-disc">
                                {item.description}
                            </li>
                        )
                    })}
                </ul>
                <pre>
                    <code
                        ref={codeRef}
                        className="language-javascript mx-auto mt-10"
                    >
                        {Object.code}
                    </code>
                </pre>
            </div>
        </div>
    )
}
export default CRUD
