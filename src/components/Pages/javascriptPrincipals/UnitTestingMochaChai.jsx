import { Helmet } from 'react-helmet-async'

import CodeBlock from '@/components/Sub_Components/CodeBlock'

function UnitTestingMochaChai() {
    const mochaChaiHTML = `<!doctype html>
        <html>
            <head>
                <title>Mocha Test</title>
                <link rel="stylesheet" href="node_modules/mocha/mocha.css" />
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
                <script src="index.js"></script>
                <!-- YOUR FILENAME FOR YOUR MAIN PROJECT FILE in the src= -->
                <script>
                    mocha.setup('bdd')
                </script>
                <script src="index.test.js"></script>
                <!-- YOUR FILENAME FOR YOUR TESTING FILE in the src= -->
                <script>
                    mocha.run()
                </script>
            </body>
        </html>`

    const mochaChaiTesting = `const expect = chai.expect;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
        });
    });
});`

    const installMocha = `npm install mocha@10.2.0 chai@4.3.7`
    const expectString = `expect(foo).to.be.a('string');`
    const expectEqual = `const expect(foo).to.equal('bar');`
    const expectLength = `expect(foo).to.have.lengthOf(3);`
    const expectInclude = `expect(foo).to.include('bar')`

    return (
        <div className="container text-lg">
            <Helmet>
                <title>Unit Testing with Mocha and Chai | Help Code It</title>
                <meta
                    name="description"
                    content="Learn how to set up and use Mocha and Chai for unit testing in JavaScript. This tutorial provides step-by-step instructions, code examples, and tips for effective testing."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascriptPrincipals/UnitTestingMochaChai"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Mocha, Chai, unit testing, JavaScript testing, BDD, TDD, test framework, JavaScript tutorial, testing tutorial, coding tests"
                />
            </Helmet>
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
                        className="mx-auto my-auto"
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
                        <a
                            href="https://mochajs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button aria-label="Mocha Documentation">
                                Mocha Documentation
                            </button>
                        </a>
                    </div>
                </div>
                <div className="m-2 rounded-2xl border-2 border-black bg-slate-300 p-3 shadow-md shadow-black dark:border-white dark:bg-gray-600">
                    <img
                        src="https://cdn.svgporn.com/logos/chai.svg"
                        alt="Chai Logo"
                        width="100px"
                        className="mx-auto my-auto"
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
                    <div className="mx-auto my-5 h-fit w-fit rounded-2xl bg-amber-700 px-3 py-1 text-center font-bold text-white shadow-lg shadow-black">
                        <a
                            href="https://www.chaijs.com/api/bdd/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button aria-label="Chai Documentation Button">
                                Chai Documentation
                            </button>
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
            <CodeBlock code={installMocha} language="bash" />
            <h2 className="my-5 text-3xl">Setting Up the HTML Page</h2>
            <p>Mocha and Chai use an HTML page to show the test results.</p>
            <p>
                Below is an example of how to set up the HTML page to run your
                tests:
            </p>

            <CodeBlock code={mochaChaiHTML} language="html" />
            <h2 className="my-5 text-3xl">Setting Up the Testing File</h2>
            <p>
                Below is an example of how to set up the testing file to run
                your tests:
            </p>
            <CodeBlock code={mochaChaiTesting} language="javascript" />
            <p>
                When you write your tests they are organized using
                &apos;describe&apos;. We then use &apos;it&apos; to write the
                test. We use &apos;expect&apos; to write the assertion.
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

            <table className="mx-auto mb-16 mt-8 table-auto border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 p-2 dark:border-gray-700">
                            Test Style
                        </th>
                        <th className="border border-gray-300 p-2 dark:border-gray-700">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock
                                code={expectString}
                                language="javascript"
                            />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Asserts that foo is a string.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock
                                code={expectEqual}
                                language="javascript"
                            />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Asserts that foo is equal to &apos;bar&apos;.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock
                                code={expectLength}
                                language="javascript"
                            />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Asserts that foo has a length of 3.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            <CodeBlock
                                code={expectInclude}
                                language="javascript"
                            />
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                            Asserts that foo includes &apos;bar&apos;.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UnitTestingMochaChai
