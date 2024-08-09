import { useEffect, useState, useRef } from 'react'
import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.css'
import { Helmet } from 'react-helmet-async'

import AceEditor from 'react-ace'
import '@/Routes/aceEditorStyles'
import CopyButton from '@/components/Sub_Components/CopyButton'

export default function ArrowFunctions() {
    const codeRef = useRef(null)
    const [editorHeights, setEditorHeights] = useState({})
    const [editorWidths, setEditorWidths] = useState({})

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

return (<button onClick={(e) => handleClick(e)}>Click Me!</button>)`

    //INFO Calculate the height and width of the editor based on the content
    const calculateEditorDimensions = (code, fontSize = 16, padding = 20) => {
        const lineHeight = fontSize * 1.5 // Approximate line height in pixels, adjusted for readability
        const charWidth = fontSize / 2 + 2 // Approximate character width in pixels for monospaced font

        const numLines = code.split('\n').length // Calculate number of lines
        const maxLineLength = Math.max(
            ...code.split('\n').map((line) => line.length)
        )

        const contentHeight = numLines * lineHeight + padding // Adjust height calculation
        const contentWidth = maxLineLength * charWidth + padding // Adjust width calculation

        console.log('contentHeight', contentHeight)
        console.log('contentWidth', contentWidth, '\n')

        return { height: `${contentHeight}px`, width: `${contentWidth}px` }
    }

    //INFO Loads the editor and calculates the height and width
    const handleEditorLoad = (code, key) => {
        console.log('code', code)
        console.log('key', key)

        const { height, width } = calculateEditorDimensions(code)
        setEditorHeights((prev) => ({ ...prev, [key]: height }))
        setEditorWidths((prev) => ({ ...prev, [key]: width }))
    }

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
                        <div
                            className="my-5 mb-8 flex justify-center rounded-lg border border-gray-500 p-0.5"
                            style={{
                                position: 'relative',
                                width: editorWidths.arrowFunction || '100%',
                                height: editorHeights.arrowFunction || '50em',
                            }}
                        >
                            <AceEditor
                                ref={codeRef}
                                mode="javascript"
                                theme="vibrant_ink"
                                name="code"
                                fontSize={16}
                                showPrintMargin={true}
                                showGutter={true}
                                highlightActiveLine={true}
                                value={arrowFunction}
                                setOptions={{
                                    vScrollBarAlwaysVisible: false,
                                    printMargin: false,
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: false,
                                    enableSnippets: false,
                                    showLineNumbers: true,
                                    tabSize: 2,
                                    readOnly: true,
                                }}
                                style={{ width: '100%', height: '100%' }}
                                onLoad={() =>
                                    handleEditorLoad(
                                        arrowFunction,
                                        'arrowFunction'
                                    )
                                }
                            />
                            <CopyButton
                                textToCopy={arrowFunction}
                                position="absolute bottom-1 right-1" // Adjusted for top right-hand corner
                            />
                        </div>

                        <p className="col-span-2 mx-5 mb-16 text-2xl">
                            Here we show an arrow function that logs
                            &quot;Hello, World!&quot; to the console. The arrow
                            function is assigned to the variable sayHello. The
                            arrow function is then called using the variable
                            name followed by parentheses. The output of the
                            arrow function is &quot;Hello, World!&quot;
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
                    <div
                        className="my-5 mb-8 flex justify-center rounded-lg border border-gray-500 p-0.5"
                        style={{
                            position: 'relative',
                            width:
                                editorWidths.arrowFunctionWithParams || '50%',
                            height:
                                editorHeights.arrowFunctionWithParams || '50em',
                        }}
                    >
                        <AceEditor
                            ref={codeRef}
                            mode="javascript"
                            theme="vibrant_ink"
                            name="code"
                            fontSize={16}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={arrowFunctionWithParams}
                            setOptions={{
                                vScrollBarAlwaysVisible: false,
                                printMargin: false,
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                                readOnly: true,
                            }}
                            style={{ width: '100%', height: '100%' }}
                            onLoad={() =>
                                handleEditorLoad(
                                    arrowFunctionWithParams,
                                    'arrowFunctionWithParams'
                                )
                            }
                        />
                        <CopyButton
                            textToCopy={arrowFunctionWithParams}
                            position="absolute bottom-1 right-1" // Adjusted for top right-hand corner
                        />
                    </div>
                    <p className="mb-16 text-2xl">
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
                    <div
                        className="my-5 mb-8 flex justify-center rounded-lg border border-gray-500 p-0.5"
                        style={{
                            position: 'relative',
                            width: editorWidths.arrowButton || '50%',
                            height: editorHeights.arrowButton || '50em',
                        }}
                    >
                        <AceEditor
                            ref={codeRef}
                            mode="javascript"
                            theme="vibrant_ink"
                            name="code"
                            fontSize={16}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={arrowButton}
                            setOptions={{
                                vScrollBarAlwaysVisible: false,
                                printMargin: false,
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                                readOnly: true,
                            }}
                            style={{ width: '100%', height: '100%' }}
                            onLoad={() =>
                                handleEditorLoad(arrowButton, 'arrowButton')
                            }
                        />
                        <CopyButton
                            textToCopy={arrowButton}
                            position="absolute bottom-1 right-1" // Adjusted for top right-hand corner
                        />
                    </div>
                    <p className="my-10 text-2xl">
                        In this example, we have a button that when clicked will
                        log &quot;Button was clicked!&quot; to the console. The
                        arrow function is used to prevent the function from
                        being called immediately.
                    </p>
                </div>
            </div>
        </div>
    )
}
