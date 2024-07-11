import { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { Helmet } from 'react-helmet-async'


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

const codeString2 = `let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // John Doe
`

    const templateLiteral = `let firstName = 'John';
let lastName = 'Doe';
let fullName = \` First Name: \${firstName}, Last Name: \${lastName}\`;
console.log(fullName); // First Name: John, Last Name: Doe
`

const teplateLiteral2 = `let firstName = 'John';
let lastName = 'Doe';
console.log(\`Hello, my name is \${firstName} \${lastName}\`); // Hello, my name is John Doe
`


    return (
        <div className="container text-lg">
            <Helmet>
                <title>JavaScript String Concatenation | Help Code It</title>
                <meta
                    name="description"
                    content="Learn how to join two or more strings together using JavaScript. Explore standard concatenation and template literals with detailed examples and explanations."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascriptPrincipals/StringConcatenation"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="JavaScript, string concatenation, JavaScript tutorial, coding strings, template literals, programming, web development"
                />
            </Helmet>
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
                <code ref={codeRef} className="javascript mt-4 text-base">
                    {codeString}
                </code>
            </pre>
            <p>
                You can declare a variable and then concatenate the strings, but
                you also can use this when logging a string directly.
            </p>
            <pre>
                <code ref={codeRef} className="javascript mt-4 text-base">
                    {codeString2}
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
                <code ref={codeRef} className="javascript mt-4 text-base">
                    {templateLiteral}
                </code>
            </pre>
            <p>
                You can also use template literals to directly log a string
                without having to store it in a variable first.
            </p>
            <pre>
                <code ref={codeRef} className="javascript mt-4 text-base">
                    {teplateLiteral2}
                </code>
            </pre>
        </div>
    )
}

export default StringConcatenation
