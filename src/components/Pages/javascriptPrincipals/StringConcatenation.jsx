import { useEffect } from 'react'
import { useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

function StringConcatenation() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const codeString = `let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // John Doe
`

    const templateLiteral = `let firstName = 'John';
let lastName = 'Doe';
let fullName = \` First Name: \${firstName}, Last Name: \${lastName}\`;
console.log(fullName); // First Name: John Last Name: Doe
`

    return (
        <div className="container text-lg">
            <h1 className="satisfyFont my-4 text-center text-6xl">
                String Concatenation
            </h1>
            <h2 className="mb-5 mt-5 text-center text-2xl">
                Joining Two or More Strings Together
            </h2>
            <hr className="border-2 border-black dark:border-white" />
            <h3 className="my-5 text-2xl">Standard Concatenation</h3>
            <p>
                String concatenation is the process of joining two or more
                strings together. In JavaScript, you can use the + operator to
                concatenate strings. You can also use the += operator to
                concatenate strings.
            </p>
            <>
                Below is an example of how to concatenate strings using the +
                operator:
            </>
            <pre>
                <code ref={codeRef} className="javascript text-base mt-4">
                    {codeString}
                </code>
            </pre>
            <h3 className="my-5 text-2xl">Template Literal</h3>
            <p>
                The other method of concatenating strings is by using template
                literals. Template literals are enclosed by backticks (` `)
                instead of single or double quotes. Inside the template literal,
                you can use the ${'{}'} to insert variables or expressions.
            </p>
            <p>
                Template literal makes it easier to concatenate strings and
                variables when you want to include JavaScript expressions inside
                the string. It also makes showing JavaScript variables inside a
                string easier to read.
            </p>
            <p>
                Below is an example of how to concatenate strings using template
                literals:
            </p>
            <pre>
                <code ref={codeRef} className="javascript text-base mt-4">
                    {templateLiteral}
                </code>
            </pre>
        </div>
    )
}

export default StringConcatenation
