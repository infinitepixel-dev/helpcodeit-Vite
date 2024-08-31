import React from 'react'
import CodeBlock from '@subComponents/CodeBlock'
import { Helmet } from 'react-helmet-async'

function StringConcatenation() {
    const standardConcatenation = `let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // John Doe

// Direct concatenation in console.log
console.log('Hello, ' + firstName + ' ' + lastName + '!'); // Hello, John Doe!`

    const templateLiteral = `let firstName = 'John';
let lastName = 'Doe';
let fullName = \`First Name: \${firstName}, Last Name: \${lastName}\`;
console.log(fullName); // First Name: John, Last Name: Doe

// Direct use in console.log
console.log(\`Hello, \${firstName} \${lastName}!\`); // Hello, John Doe!`

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

            <h1 className="my-4 text-6xl text-center satisfyFont">
                String Concatenation in JavaScript
            </h1>

            <section className="my-8">
                <h2 className="mb-4 text-3xl font-bold">What is String Concatenation?</h2>
                <p>
                    String concatenation is the process of combining two or more strings to create a single string.
                    In JavaScript, there are two main methods for concatenating strings: standard concatenation
                    using the + operator and template literals.
                </p>
            </section>

            <section className="my-8">
                <h2 className="mb-4 text-3xl font-bold">1. Standard Concatenation</h2>
                <p className="mb-4">
                    The most common method of string concatenation in JavaScript is using the + operator.
                    You can also use the += operator to append to an existing string.
                </p>
                <h3 className="mb-2 text-2xl font-semibold">Example:</h3>
                <CodeBlock code={standardConcatenation} language="javascript" />
                <p className="mt-4">
                    In this example, we use the + operator to combine the firstName and lastName variables
                    with a space in between. We can also directly concatenate strings in a console.log statement.
                </p>
            </section>

            <section className="my-8">
                <h2 className="mb-4 text-3xl font-bold">2. Template Literals</h2>
                <p className="mb-4">
                    Template literals, introduced in ES6, provide a more flexible and readable way to concatenate strings.
                    They use backticks (` `) instead of quotes and allow for embedded expressions using ${'${}'} syntax.
                </p>
                <h3 className="mb-2 text-2xl font-semibold">Example:</h3>
                <CodeBlock code={templateLiteral} language="javascript" />
                <p className="mt-4">
                    Template literals make it easier to create complex strings with variables or expressions.
                    They also preserve line breaks and indentation, making multi-line strings more manageable.
                </p>
            </section>

            <section className="my-8">
                <h2 className="mb-4 text-3xl font-bold">Advantages of Template Literals</h2>
                <ul className="pl-6 list-disc">
                    <li>More readable for complex string concatenations</li>
                    <li>Easier to insert variables and expressions into strings</li>
                    <li>Preserve formatting for multi-line strings</li>
                    <li>Can include both single and double quotes without escaping</li>
                </ul>
            </section>

            <section className="my-8">
                <h2 className="mb-4 text-3xl font-bold">Conclusion</h2>
                <p>
                    Both standard concatenation and template literals are valid ways to combine strings in JavaScript.
                    While the + operator is still commonly used, template literals offer more flexibility and readability,
                    especially for complex string operations. Choose the method that best fits your specific use case and
                    coding style.
                </p>
            </section>
        </div>
    )
}

export default StringConcatenation
