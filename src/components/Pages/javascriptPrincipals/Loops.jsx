import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import reloadImg from '../../../assets/Feather refresh icon.svg'
import reloadingDark from '../../../assets/refreshdark.svg'

import CopyButton from '../../Sub_Components/CopyButton' //REVIEW Import the CopyButton

import { gsap } from 'gsap'

import codeContainerStyles from '../../CSS_Wrappers/Code_container.module.css'

export default function Loops() {
    // SECTION[Logo Animation]
    const logoRef = useRef(null) // Add this line to create a ref for your logo
    useEffect(() => {
        gsap.to(logoRef.current, {
            rotation: 360, // Rotate the logo 360 degrees
            duration: 4, // Animation duration of 2 seconds
            repeat: -1, // Repeat the animation indefinitely
            ease: 'linear', // Use a linear ease for a smooth, constant rotation
        })
    }, [])
    // !SECTION[Logo Animation]

    //NOTE UseEffect to apply syntax highlighting to all code elements
    const codeRef = useRef(null) // Used to reference the code in the syntax highlighting
    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log('Dark Mode: ', isDark)

    const forLoop = `for (let i = 0; i < 5; i++) {
    console.log(i);
    };
    //Output: 0, 1, 2, 3, 4`
    const whileLoop = `let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    }
    //Output: 0, 1, 2, 3, 4`
    const doWhileLoop = `let i = 0;
do {
    console.log(i);
    i++;
    } while (i < 5);
    //Output: 0, 1, 2, 3, 4`

    return (
        <div className="min-h-full min-w-full pb-40 ">
            <Helmet>
                <title>JavaScript Loops | Help Code It</title>
                <meta
                    name="description"
                    content="Learn about different types of loops in JavaScript including for loops, while loops, and do...while loops. Understand their use cases with practical examples."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascriptPrincipals/Loops"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="JavaScript loops, for loop, while loop, do...while loop, coding tutorial, JavaScript tutorial, web development"
                />
            </Helmet>
            <div className="container">
                <h1 className="py-10 text-center text-8xl font-bold">
                    Loops...<span className="text-5xl"> in JavaScript</span>{' '}
                    <img
                        src={isDark ? reloadImg : reloadingDark}
                        alt="Reload Image"
                        ref={logoRef} // Used to reference the logo in the animation
                        className="animate-spin-slow ms-3 inline"
                    />
                </h1>
                <hr className="mb-10 border-black dark:border-white" />
                <h2 className="mt-10 py-2 text-5xl">What are Loops? </h2>
                <p className="text-xl">
                    Loops are a way to repeat a block of code multiple times.
                    They are useful when you want to perform the same task
                    multiple times, or when you want to iterate through a list
                    of items. Mainly because us programmers are lazy and
                    don&apos;t want to write the same code over and over again.
                    This way we don&apos;t have to!{' '}
                </p>
                <p className="text-xl">
                    So now that we have established that loops are a good thing,
                    let&apos;s learn about the different types of loops in
                    JavaScript.
                </p>
                <hr className="my-5 border-black dark:border-white" />
                <h2 className="py-2 text-4xl">For Loop </h2>
                <p className="text-xl">
                    The for loop is the most commonly used loop in JavaScript.
                    It repeats a block of code a specified number of times.{' '}
                    <br /> Here&apos;s an example of a for loop:
                </p>

                {/* REVIEW bring in a code container, with the copy button and pre/code */}
                <div className={codeContainerStyles['code-container']}>
                    <CopyButton
                        textToCopy={forLoop}
                        className="absolute left-0 top-0"
                    />
                    <pre>
                        <code ref={codeRef} className="language-javascript p-2">
                            {forLoop}
                        </code>
                    </pre>
                </div>

                <p className="mb-1 text-xl">
                    <i>
                        This particular for loop will log the numbers 0 through
                        4 to the console.
                    </i>
                </p>
                <p className="text-xl">
                    The for loop has three parts: the initialization, the
                    condition, and the final expression. The initialization is
                    where you set the starting value of the loop. The condition
                    is where you specify when the loop should stop. The final
                    expression is where you specify what should happen after
                    each iteration of the loop.
                </p>
                <p className="text-xl">
                    In the example above, the loop starts with i equal to 0. The
                    loop will continue as long as i is less than 5. After each
                    iteration, i is incremented by 1.
                </p>

                <hr className="my-5 border-black dark:border-white" />

                <h2 className="py-2 text-4xl">While Loop</h2>
                <p className="text-xl">
                    The while loop repeats a block of code as long as a
                    specified condition is true. This is useful when you
                    don&apos;t know how many times you need to run the loop. It
                    is one you will use less, but it is still good to know.{' '}
                    <br /> Here&apos;s an example of a while loop:
                </p>

                <div className={codeContainerStyles['code-container']}>
                    <CopyButton
                        textToCopy={whileLoop}
                        className="absolute left-0 top-0"
                    />
                    <pre>
                        <code
                            ref={codeRef}
                            className="language-javascript my-4 p-2"
                        >
                            {whileLoop}
                        </code>
                    </pre>
                </div>
                <p className="mb-1 text-xl">
                    <i>
                        This particular while loop will log the numbers 0
                        through 4 to the console.
                    </i>
                </p>
                <p className="text-xl">
                    The while loop has one part: the condition. The condition is
                    where you specify when the loop should stop. In the example
                    above, the loop starts with i equal to 0. The loop will
                    continue as long as i is less than 5. After each iteration,
                    i is incremented by 1.
                </p>

                <hr className="my-5 border-black dark:border-white" />

                <h2 className="my-4 py-2 text-4xl">Do...While Loop</h2>
                <p className="text-xl">
                    The do...while loop repeats a block of code as long as a
                    specified condition is true. This is useful when you want to
                    run the loop at least once, even if the condition is false.{' '}
                    <br /> Here&apos;s an example of a do...while loop:
                </p>
                <div className={codeContainerStyles['code-container']}>
                    <CopyButton
                        textToCopy={doWhileLoop}
                        className="absolute left-0 top-0"
                    />
                    <pre>
                        <code ref={codeRef} className="language-javascript p-2">
                            {doWhileLoop}
                        </code>
                    </pre>
                </div>
                <p className="mb-1 text-xl">
                    <i>
                        This particular do...while loop will log the numbers 0
                        through 4 to the console.
                    </i>
                </p>
                <p className="text-xl">
                    The do...while loop has two parts: the block of code to be
                    executed and the condition. The block of code is where you
                    specify the instructions to be executed. The condition is
                    where you specify when the loop should stop. In the example
                    above, the loop starts with i equal to 0. The loop will
                    continue as long as i is less than 5. After each iteration,
                    i is incremented by 1.
                </p>

                <hr className="my-5 border-black dark:border-white" />

                <h2 className="my-4 py-2 text-4xl">
                    So, How Do I Know Which To Use?
                </h2>
                <ul>
                    <li className="list-disc">
                        The for loop is the most commonly used and a real world
                        use case would be when you know exactly how many times
                        you want to run the loop. So you might use it for
                        something like iterating through an array.
                    </li>
                    <li className="list-disc">
                        The while loop is useful when you don&apos;t know how
                        many times you want to run the loop. So you might use it
                        for something like waiting for a user to input a
                        specific value.
                    </li>
                    <li className="list-disc">
                        The do...while loop is useful when you want to run the
                        loop at least once, even if the condition is false. So
                        you might use it for something like prompting the user
                        to input a value and then checking if the value is
                        valid.
                    </li>
                </ul>
                <div className="m-10 text-center">
                    <Link
                        to="/javascriptPrincipals/PracticeProblems"
                        className="m-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                    >
                        Need Some Practice Problems?
                    </Link>
                </div>
            </div>
        </div>
    )
}
