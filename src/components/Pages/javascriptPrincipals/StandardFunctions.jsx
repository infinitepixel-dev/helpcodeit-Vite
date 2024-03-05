import { useRef, useEffect, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import hljs from 'highlight.js'

const CodePractice = lazy(() => import('../../Sub_Components/Code_Practice'))

import 'highlight.js/styles/atom-one-dark.css'
import styles from './animations.module.css'

function StandardFunctions() {
    const codeRef = useRef(null)

    //Used to handle the fade in animation
    useEffect(() => {
        let delayIncrement = 6 // Increment the delay by 200ms for each element
        const baseDelay = 0 // Base delay, if any

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const animationDelay =
                            baseDelay + delayIncrement * index + 's'
                        entry.target.style.animationDelay = animationDelay
                        entry.target.classList.add(styles.fadeInCustom)
                    } else {
                        // Optionally reset the animation delay if you want the animation to trigger again with the same delay
                        entry.target.style.animationDelay = '0s'
                        entry.target.classList.remove(styles.fadeInCustom)
                    }
                })
            },
            { rootMargin: '0px', threshold: 0.1 }
        )

        const elements = document.querySelectorAll('.observeMe')
        elements.forEach((el, index) => {
            // Set an initial delay based on order
            el.style.animationDelay = baseDelay + delayIncrement * index + 's'
            observer.observe(el)
        })

        return () => elements.forEach((el) => observer.unobserve(el))
    }, [])

    useEffect(() => {
        // Apply syntax highlighting to all code elements

        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const sayHelloString = `function sayHello() {
    alert("Hello, World!");
  };`

    const callHelloString = `sayHello();`

    const addNumbersString = `function addNumbers(num1, num2) {
    alert(num1 + num2);
  };`

    return (
        <div
            className="roboto-font container mx-auto p-2 px-4 text-xl sm:p-8"
            //NOTE This was commented out because it was adding a second scroll bar
            // style={{
            //     scrollSnapType: 'y mandatory',
            //     overflowY: 'scroll',
            //     height: '100vh',
            // }}
        >
            <div className="flex flex-col">
                <div className="observeMe">
                    <h1 className="my-20 text-center text-5xl">
                        Learning About JavaScript Functions: A Beginner&apos;s
                        Guide
                    </h1>
                    <hr className="border-2 border-black dark:border-white" />
                    <div className="my-1">
                        <h2 className="mt-10 text-4xl ">What Is a Function?</h2>
                        <p className="roboto-font mb-10 text-2xl">
                            A function is a set of instructions that performs a
                            specific task. It&apos;s like a tiny computer
                            program inside your main program That you can easily
                            reuse. Another way of thinking about it is the
                            office setting. You have a coworker named Bob, Bob
                            works in the corner and only does one specific task.
                            We can think of Bob as a function. Bob is a function
                            that does a specific task. When we need that task
                            done, we call Bob to do it. Functions are the same
                            way. They are a set of instructions that perform a
                            specific task. When we need that task done, we call
                            the function to do it. Then when the function is
                            done, it returns the result of the task. Which is
                            equivalent to Bob giving you the result of his task.
                            Cool right? <br />
                            <br />
                            <span className="text-3xl">
                                Let&apos;s learn how to create one!
                            </span>
                        </p>
                    </div>
                    <hr className="mb-10 border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <div className="mb-10">
                        <div className="">
                            <h2 className="text-3xl">
                                How to Create a Function
                            </h2>
                            <p>
                                When you create a function you are defining a
                                set of instructions that will be performed when
                                the function is called. First you use the
                                keyword &apos;function&apos; to tell the
                                computer that you are creating a function. Then
                                you give the function a name. After that, you
                                put parentheses and then curly braces. Inside
                                the curly braces, you write the instructions
                                that you want the function to perform.
                                Here&apos;s an example of a simple function:
                            </p>
                        </div>
                        <div className="m-2 ">
                            <pre className="my-5">
                                <code
                                    ref={codeRef}
                                    className="language-javascript float-start me-10 p-2"
                                >
                                    {sayHelloString}
                                </code>
                            </pre>
                            <p>
                                <i>
                                    This code says, &quot;Create a function
                                    named &apos;sayHello&apos; and make it show
                                    an alert pop-up with the words &apos;Hello,
                                    World!&apos; when it&apos;s used.&quot;
                                </i>{' '}
                                This is a simple function with one purpose: to
                                show a pop-up that says &apos;Hello,
                                World!&apos;. You can create functions that do
                                many different things, from simple tasks like
                                this to complex tasks like calculating the
                                square root of a number. The possibilities are
                                endless!
                            </p>
                        </div>
                    </div>
                    <hr className="mb-10 border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <h2 className="py-2 text-3xl">How to Use a Function</h2>

                    <p>
                        Once you have created a function, you can use it by
                        calling its name followed by parentheses. Here&apos;s
                        how you call the &apos;sayHello&apos; function:
                    </p>

                    <div>
                        <pre className="my-5">
                            <code
                                ref={codeRef}
                                className="language-javascript float-start me-5 p-2"
                            >
                                {callHelloString}
                            </code>
                        </pre>
                        <p>
                            When this line of code is run, it will make a pop-up
                            appear that says &apos;Hello, World!&apos; because
                            that&apos;s what the &apos;sayHello&apos; function
                            does. You can &apos;call&apos; a function where ever
                            you want in your code. You can even call it multiple
                            times in a row if you want to or inside another
                            function.{' '}
                        </p>
                    </div>
                    <hr className="my-7 border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <h2 className="py-2 text-3xl">
                        Why Should You Use Functions?
                    </h2>

                    <p>
                        Functions make your code neater and easier to read. They
                        also let you reuse the same code many times without
                        having to write it again and again. Imagine if you had
                        to write down the whole cookie recipe every time you
                        wanted to make cookies. That would be a lot of extra
                        work!
                    </p>
                    <hr className="my-7 border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <h2 className="py-2 text-3xl">
                        Functions with Parameters: Giving Information to
                        Functions
                    </h2>
                    <p>
                        Sometimes, you want your function to do something
                        specific with certain pieces of information. These
                        pieces of information are called parameters. Here&apos;s
                        how you can create a function that takes two numbers and
                        adds them together:
                    </p>

                    <div>
                        <pre className="my-5">
                            <code
                                ref={codeRef}
                                className="language-javascript float-start me-5"
                            >
                                {addNumbersString}
                            </code>
                        </pre>
                        <p>
                            {' '}
                            If you wanted to have this function return the
                            result return the answer instead of showing a
                            pop-up, you would use the &apos;return&apos;
                            keyword. You can have it do almost anything though.
                            This is where the use case of the function comes
                            into play. Once declared you have total control over
                            what the function does.{' '}
                        </p>{' '}
                        <p>
                            {' '}
                            The flexibility of functions is one of their best
                            features. You can use them in many different ways to
                            make your code more powerful and easier to read.
                        </p>
                    </div>
                    <hr className="my-7 border-2 border-black dark:border-white" />
                </div>
                {/* FIXME This is commented out because it is not working */}
                {/* <div className="observeMe">
                    <h2 className="mt-10 py-2 text-3xl">
                        Let&apos;s Practice!
                    </h2>
                    <Suspense fallback={<div>Loading...</div>}>
                        <CodePractice
                            codeRef={codeRef}
                            instructions={`"Create a function named &apos;addNumbers&apos; that takes two
          numbers, adds them together, and then shows a pop-up with the
          result."`}
                            inputs={{
                                input1: 'textarea',
                                input2: 'singleLine',
                            }}
                            variables={{
                                variable1: 'let num1 = 2;',
                                variable2: 'let num2 = 3;',
                            }}
                            expectedOutput={'addNumbers();'}
                            // functionData={""}
                            hljs={hljs}
                        />
                    </Suspense>
                </div> */}
            </div>

            <div className="observeMe">
                <p className="mt-10">
                    Now you know what functions are, how to create them, how to
                    use them, and why they&apos;re helpful. Try making your own
                    functions and see what you can do with them. Remember,
                    coding is all about experimenting and having fun!
                </p>

                <hr className="mb-5 mt-7 border-2 border-black dark:border-white" />
            </div>

            <div className="observeMe">
                <div className="flex flex-row">
                    <div className="flex-1"></div>
                    <div className="flex-1 sm:w-1/2 sm:flex-none">
                        <h2 className="text-center text-5xl  font-extrabold">
                            Need deeper explanation?
                        </h2>
                        <h2 className="text-center text-4xl font-extrabold">
                            Here is a Video from Web Dev Simplified
                        </h2>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/FOD408a0EzU"
                            title="YouTube video player"
                            // frameBorder="0"
                            className="youtube-video mt-10 h-auto"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
            <div className="pb-10 text-center text-2xl text-red-500 dark:text-white">
                <Link to="/javascript">Back to JavaScript Main Page</Link>
            </div>
        </div>
    )
}

export default StandardFunctions
