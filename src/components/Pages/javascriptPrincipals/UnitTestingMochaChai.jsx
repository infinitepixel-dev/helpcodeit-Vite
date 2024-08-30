
import CodeBlock from '@subComponents/CodeBlock'
import { Helmet } from 'react-helmet-async'



function UnitTestingMochaChai() {


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
            <h1 className="my-5 text-6xl text-center">
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
            <div className="grid grid-cols-1 gap-2 my-5 md:grid-cols-2">
                <div className="p-3 m-2 border-2 border-black shadow-md rounded-2xl bg-slate-300 shadow-black dark:border-white dark:bg-gray-600">
                    <img
                        src="https://cdn.svgporn.com/logos/mocha.svg"
                        alt="Mocha Logo"
                        width="100px"
                        class="mx-auto my-auto"
                    />
                    <h3 className="mt-3 mb-2 text-4xl text-center satisfyFont ">
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
                    <div className="px-3 py-1 mx-auto my-5 font-bold text-center text-white shadow-sm h-fit w-fit rounded-2xl bg-amber-700 shadow-black">
                        <a href="https://mochajs.org/" target="_blank">
                            <button
                            aria-label='Mocha Documentation'
                            >Mocha Documentation</button>
                        </a>
                    </div>
                </div>
                <div className="p-3 m-2 border-2 border-black shadow-md rounded-2xl bg-slate-300 shadow-black dark:border-white dark:bg-gray-600">
                    <img
                        src="https://cdn.svgporn.com/logos/chai.svg"
                        alt="Chai Logo"
                        width="100px"
                        class="mx-auto my-auto"
                    />
                    <h3 className="mt-3 mb-2 text-4xl text-center satisfyFont">
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
                    <div className="px-3 py-1 mx-auto my-5 font-bold text-center text-white shadow-sm shadow-lg h-fit w-fit rounded-2xl bg-amber-700 shadow-black">
                        <a
                            href="https://www.chaijs.com/api/bdd/"
                            target="_blank"
                        >
                            <button aria-label='Chai Documentation Button'>Chai Documentation</button>
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
                <CodeBlock code={`npm install mocha@10.2.0 chai@4.3.7`} language={`bash`} />

            </pre>
            <h2 className="my-5 text-3xl">Setting Up the HTML Page</h2>
            <p>Mocha and Chai use an HTML page to show the test results.</p>
            <p>
                Below is an example of how to set up the HTML page to run your
                tests:
            </p>
            <pre>
                <CodeBlock code={mochaChaiHTML} language={'html'} />
            </pre>
            <h2 className="my-5 text-3xl">Setting Up the Testing File</h2>
            <p>
                Below is an example of how to set up the testing file to run
                your tests:
            </p>
            <pre>
                <CodeBlock code={mochaChaiTesting} language={'javascript'} />
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
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            expect(foo).to.be.a('string');
                        </td>
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            Asserts that foo is a string.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            expect(foo).to.equal('bar');
                        </td>
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            Asserts that foo is equal to 'bar'.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            expect(foo).to.have.lengthOf(3);
                        </td>
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            Asserts that foo has a length of 3.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            expect(foo).to.include('bar');
                        </td>
                        <td className="p-1 text-center border-2 border-black dark:border-white">
                            Asserts that foo includes 'bar'.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UnitTestingMochaChai
