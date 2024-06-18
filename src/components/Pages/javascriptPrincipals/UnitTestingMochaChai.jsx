import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

function UnitTestingMochaChai() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const mochaChaiHTML = `<!DOCTYPE html>
    <html>
    <head>
        <title>Mocha Test</title>
        <link rel="stylesheet" href="node_modules/mocha/mocha.css"/>
    </head>
    <body>
       <div id="mocha">
<p>
<a href=".">Index</a>
</p>
</div>
<div id="messages"></div>
<div id="fixtures"></div>
<script src="node_modules/mocha/mocha.js"></script>
<script src="node_modules/chai/chai.js"></script>
<script src="index.js"></script> <!-- YOUR FILENAME FOR YOUR MAIN PROJECT FILE in the src= -->
<script>mocha.setup('bdd')</script>
<script src="index.test.js"></script> <!-- YOUR FILENAME FOR YOUR TESTING FILE in the src= -->
<script>mocha.run();</script>
</body>
</html>
`

    const mochaChaiTesting = `const expect = chai.expect;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
        });
    });
});
`

    return (
        <div className="container text-lg">
            <h1 className="my-5 text-center text-6xl">
                Unit Testing with Mocha and Chai
            </h1>
            <hr className="border-2 border-black dark:border-white" />
            <p>
                Why do we even want to do Unit Testing? Unit Testing can serve
                as a guide to where things go wrong when adding new features. It
                can also help to prevent future bugs from happening. It can also
                help to prevent future bugs from happening.
            </p>
            <h2 className="my-5 text-3xl">Mocha and Chai</h2>
            <p>
                Mocha is a feature-rich JavaScript test framework running on
                Node.js and in the browser, making asynchronous testing simple
                and fun. Mocha tests run serially, allowing for flexible and
                accurate reporting, while mapping uncaught exceptions to the
                correct test cases.{' '}
            </p>
            <p>
                Chai is a BDD / TDD assertion library for node and the browser
                that can be delightfully paired with any javascript testing
                framework. Chai has several interfaces that allow the developer
                to choose the most comfortable. The chain-capable BDD styles
                provide an expressive language & readable style, while the TDD
                assert style provides a more classical feel.
            </p>
            <div className="my-5 grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="m-2 rounded-2xl border-2 border-black bg-slate-300 p-3 shadow-md  shadow-black dark:border-white dark:bg-gray-600">
                    <img
                        src="https://cdn.svgporn.com/logos/mocha.svg"
                        alt="Mocha Logo"
                        width="100px"
                        class="mx-auto my-auto"
                    />
                    <h3 className="satisfyFont mb-2 mt-3 text-center text-4xl ">
                        Mocha
                    </h3>
                    <p>
                        Mocha is a feature-rich JavaScript test framework
                        running on Node.js and in the browser, making
                        asynchronous testing simple and fun. Mocha tests run
                        serially, allowing for flexible and accurate reporting,
                        while mapping uncaught exceptions to the correct test
                        cases.
                    </p>
                    <div className="mx-auto my-5 h-fit w-fit rounded-2xl bg-amber-700 px-3 py-1 text-center font-bold text-white shadow-sm shadow-black">
                        <a href="https://mochajs.org/" target="_blank">
                            <button>Mocha Documentation</button>
                        </a>
                    </div>
                </div>
                <div className="m-2 rounded-2xl border-2 border-black bg-slate-300 p-3 shadow-md shadow-black dark:border-white dark:bg-gray-600">
                    <img
                        src="https://cdn.svgporn.com/logos/chai.svg"
                        alt="Chai Logo"
                        width="100px"
                        class="mx-auto my-auto"
                    />
                    <h3 className="satisfyFont mb-2 mt-3 text-center text-4xl">
                        Chai
                    </h3>

                    <p>
                        Chai is the BDD / TDD assertion library for node that
                        makes testing fun and easy. Chai has several interfaces
                        that allow the developer to choose the most comfortable.
                        The chain-capable BDD styles provide an expressive
                        language & readable style, while the TDD assert style
                        provides a more classical feel.
                    </p>
                    <div className="mx-auto my-5 h-fit w-fit rounded-2xl bg-amber-700 px-3 py-1 text-center font-bold text-white shadow-lg shadow-sm shadow-black">
                        <a
                            href="https://www.chaijs.com/api/bdd/"
                            target="_blank"
                        >
                            <button>Chai Documentation</button>
                        </a>
                    </div>
                </div>
            </div>
            <h2 className="my-5 text-3xl">Installation</h2>
            <p>
                This uses an older version of Mocha and Chai, and this method is
                no longer supported due to a recent update. To install Mocha and
                Chai, you will need to run the following command in your
                terminal:
            </p>
            <pre>
                <code ref={codeRef} className="bash mt-4 text-base">
                    {`npm install mocha@10.2.0 chai@4.3.7`}
                </code>
            </pre>
            <h2 className="my-5 text-3xl">Setting Up the HTML Page</h2>
            <p>Mocha and Chai use an HTML page to show the test results.</p>
            <p>
                Below is an example of how to set up the HTML page to run your
                tests:
            </p>
            <pre>
                <code ref={codeRef} className="html mt-4 text-base">
                    {mochaChaiHTML}
                </code>
            </pre>
            <h2 className="my-5 text-3xl">Setting Up the Testing File</h2>
            <p>
                Below is an example of how to set up the testing file to run
                your tests:
            </p>
            <pre>
                <code ref={codeRef} className="javascript mt-4 text-base">
                    {mochaChaiTesting}
                </code>
            </pre>
            <p>
                When you write your tests they are organized using 'describe'.
                We then use 'it' to write the test. We use 'expect' to write the
                assertion.
            </p>
            <p>
                For examples about how these work you can see the chai
                documentation at the link above.
            </p>

            <h3 className="my-5 text-2xl">Natural Language Test Writing</h3>
            <p>
                Chai also has a natural language test writing style that allows
                you to write tests in a more human-readable way. This can be
                useful for writing tests that are easier to read and understand.
            </p>
            <p>
                Below is a table of the natural language test options you can
                use. While these are a few you can see tons of examples in the
                Chai documentation.
            </p>

            <table className="mx-auto my-10 table-auto">
                <thead>
                    <tr>
                        <th className="border-2 border-black dark:border-white">
                            Test Style
                        </th>
                        <th className="border-2 border-black dark:border-white">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            expect(foo).to.be.a('string');
                        </td>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            Asserts that foo is a string.
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            expect(foo).to.equal('bar');
                        </td>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            Asserts that foo is equal to 'bar'.
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            expect(foo).to.have.lengthOf(3);
                        </td>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            Asserts that foo has a length of 3.
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            expect(foo).to.include('bar');
                        </td>
                        <td className="border-2 border-black p-1 text-center dark:border-white">
                            Asserts that foo includes 'bar'.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UnitTestingMochaChai
