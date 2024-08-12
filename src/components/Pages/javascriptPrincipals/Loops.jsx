import { useRef, useEffect } from 'react'
import propTypes from 'prop-types'
import forloop from '@assets/forloop.svg'
import { Link } from 'react-router-dom'
import reloadImg from '@assets/Feather refresh icon.svg'
import reloadingDark from '@assets/refreshdark.svg'
import { Helmet } from 'react-helmet-async'
import { gsap } from 'gsap'

import CodeBlock from '@/components/Sub_Components/CodeBlock'

function Loops() {
    const logoRef = useRef(null)

    useEffect(() => {
        gsap.to(logoRef.current, {
            rotation: 360,
            duration: 4,
            repeat: -1,
            ease: 'linear',
        })
    }, [])

    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const forLoop = `// Example 1: Counting from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
  // Output: 1, 2, 3, 4, 5
}

// Example 2: Summing numbers from 1 to 5
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log("Sum:", sum);
// Output: Sum: 15

// Example 3: Iterating over an array
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // Output: apple, banana, cherry
}`

    const whileLoop = `// Example 1: Counting down from 5 to 1
let count = 5;

while (count > 0) {
  console.log(count);
  // Output: 5, 4, 3, 2, 1

  count--;
}

// Example 2: Rolling a die until we get a 6
let dieRoll = 0; // Initialize dieRoll to 0
let attempts = 0; // attempts start at 0

while (dieRoll !== 6) {
  attempts++; // Increment attempts by 1

  dieRoll = Math.floor(Math.random() * 6) + 1;

  console.log("Rolled:", dieRoll);
  // Output: Rolled: 3, Rolled: 1, Rolled: 4, etc...
}

console.log("It took", attempts, "attempts to roll a 6");
// Output: It took 5 attempts to roll a 6

// Example 3: Input validation
let userInput;

while (isNaN(userInput)) {
  userInput = prompt("Please enter a number:");
}

console.log("You entered the number:", userInput);
// Output: You entered the number: 42`

    const doWhileLoop = `// Example 1: Ensuring at least one execution
let i = 10;

do {
  console.log(i);
  // Output: 10 (loop body executes once even though condition is false)

  i++;
} while (i < 5);

// Example 2: Menu-driven program
let choice;

do {
  console.log("1. Play Game");
  console.log("2. View High Scores");
  console.log("3. Exit");

  choice = prompt("Enter your choice (1-3):");

  //Based on the choice, perform the corresponding action ie. 1,2,3
  switch (choice) {
    case "1":
      console.log("Starting game...");
      break;
    case "2":
      console.log("Displaying high scores...");
      break;
    case "3":
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid choice. Try again.");
  }
} while (choice !== "3");

// Example 3: Password validation
let password;

do {
  password = prompt("Enter a password (at least 8 characters):");
} while (password.length < 8);

console.log("Password accepted!");
// Output: Password accepted!`

    return (
        <div className="container px-4 py-8 pb-40 mx-auto">
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

            <h1 className="mb-8 text-4xl font-bold text-center sm:text-6xl md:text-7xl">
                Loops...{' '}
                <span className="text-3xl sm:text-5xl">in JavaScript</span>
                <img
                    src={isDark ? reloadImg : reloadingDark}
                    alt="Reload Image"
                    ref={logoRef}
                    className="inline ml-2 animate-spin-slow h-14 w-14"
                />
            </h1>

            <hr className="mb-10 border-black dark:border-white" />

            <div className="p-4 mx-auto mb-8 bg-gray-100 border border-gray-300 rounded-lg shadow-lg w-fit dark:border-gray-500 dark:bg-gray-800">
                <p className="text-4xl text-center satisfyFont">
                    Loops are a programmer&apos;s best friend, helping us avoid
                    repetitive code and making our lives easier!
                </p>
            </div>

            <section className="mb-8">
                <h2 className="mb-4 text-3xl font-semibold">What are Loops?</h2>
                <p className="mb-4 text-lg">
                    Loops are a way to repeat a block of code multiple times.
                    They are useful when you want to perform the same task
                    multiple times, or when you want to iterate through a list
                    of items.
                </p>
                <p className="text-lg">
                    Let&apos;s explore the different types of loops in
                    JavaScript and see how they can make our coding lives
                    easier.
                </p>
            </section>

            <hr className="my-5 border-black dark:border-white" />

            <section className="mb-8">
                <h2 className="mb-4 text-3xl font-semibold">For Loop</h2>
                <p className="mb-4 text-lg">
                    The for loop is the most commonly used loop in JavaScript.
                    It repeats a block of code a specified number of times.
                    It&apos;s particularly useful when you know in advance how
                    many times you want to execute a block of code.
                </p>
                <CodeBlock code={forLoop} language="javascript" />
                <div className="mt-4 text-lg">
                    <p>
                        <strong>How it works:</strong> The for loop has three
                        parts:
                    </p>
                    <ol className="pl-6 list-decimal">
                        <li>
                            Initialization: Where you set the starting value
                            (e.g., <i>let i = 1</i>)
                        </li>
                        <li>
                            Condition: The loop continues as long as this
                            condition is true (e.g., <i>{`i <= 5`}</i>)
                        </li>
                        <li>
                            Final expression: What happens after each iteration
                            (e.g., <i>i++</i> to increment i by 1)
                        </li>
                    </ol>
                    <img src={forloop} alt="For Loop" className="w-2/5 p-12 mx-auto my-5 border border-gray-500 shadow-lg bg-slate-400 rounded-2xl" />
                    <p className="mt-4">
                        <strong>Example explanations:</strong>
                    </p>
                    <ul className="pl-6 list-disc">
                        <li>Example 1 shows a simple count from 1 to 5.</li>
                        <li>
                            Example 2 demonstrates how to use a for loop to
                            calculate a sum.
                        </li>
                        <li>
                            Example 3 shows how to iterate over an array, a very
                            common use case for for loops.
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="my-5 border-black dark:border-white" />

            <section className="mb-8">
                <h2 className="mb-4 text-3xl font-semibold">While Loop</h2>
                <p className="mb-4 text-lg">
                    The while loop repeats a block of code as long as a
                    specified condition is true. This is useful when you
                    don&apos;t know in advance how many times you need to run
                    the loop.
                </p>
                <CodeBlock code={whileLoop} language="javascript" />
                <div className="mt-4 text-lg">
                    <p>
                        <strong>How it works:</strong> The while loop has one
                        main part:
                    </p>
                    <ul className="pl-6 list-disc">
                        <li>
                            Condition: The loop continues as long as this
                            condition is true
                        </li>
                    </ul>
                    <p>
                        The loop will keep executing as long as the condition
                        remains true. You need to make sure that the condition
                        will eventually become false, or you&apos;ll create an
                        infinite loop!
                    </p>
                    <p className="mt-4">
                        <strong>Example explanations:</strong>
                    </p>
                    <ul className="pl-6 list-disc">
                        <li>Example 1 shows a countdown from 5 to 1.</li>
                        <li>
                            Example 2 simulates rolling a die until we get a 6.
                            This is a good example of when we don&apos;t know
                            how many iterations we&apos;ll need.
                        </li>
                        <li>
                            Example 3 demonstrates input validation, continuing
                            to ask for input until a valid number is entered.
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="my-5 border-black dark:border-white" />

            <section className="mb-8">
                <h2 className="mb-4 text-3xl font-semibold">Do...While Loop</h2>
                <p className="mb-4 text-lg">
                    The do...while loop is similar to the while loop, but it
                    always executes the code block at least once before checking
                    the condition. This is useful when you want to ensure that
                    your code runs at least once, regardless of the condition.
                </p>
                <CodeBlock code={doWhileLoop} language="javascript" />
                <div className="mt-4 text-lg">
                    <p>
                        <strong>How it works:</strong> The do...while loop has
                        two main parts:
                    </p>
                    <ol className="pl-6 list-decimal">
                        <li>Do: The block of code to be executed</li>
                        <li>
                            While: The condition that, if true, will make the
                            loop continue
                        </li>
                    </ol>
                    <p>
                        The key difference from a while loop is that a
                        do...while loop will always execute its code block at
                        least once, even if the condition is false from the
                        start.
                    </p>
                    <p className="mt-4">
                        <strong>Example explanations:</strong>
                    </p>
                    <ul className="pl-6 list-disc">
                        <li>
                            Example 1 demonstrates that the loop body executes
                            once even when the condition is false from the
                            start.
                        </li>
                        <li>
                            Example 2 shows a menu-driven program, a common use
                            case for do...while loops. It ensures the menu is
                            displayed at least once.
                        </li>
                        <li>
                            Example 3 illustrates password validation,
                            continually prompting for a password until a valid
                            one is entered.
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="my-5 border-black dark:border-white" />

            <section className="mb-8">
                <h2 className="mb-4 text-3xl font-semibold">
                    Which Loop Should I Use?
                </h2>
                <ul className="pl-6 text-lg list-disc">
                    <li className="mb-2">
                        Use a <strong>for loop</strong> when you know exactly
                        how many times you want to run the loop, like iterating
                        through an array or performing an action a specific
                        number of times.
                    </li>
                    <li className="mb-2">
                        Use a <strong>while loop</strong> when you don&apos;t
                        know how many times you want to run the loop, but you
                        know the condition under which it should stop. For
                        example, when waiting for user input or when a certain
                        condition is met.
                    </li>
                    <li className="mb-2">
                        Use a <strong>do...while loop</strong> when you want to
                        run the loop at least once, even if the condition is
                        false from the start. This is useful for menu systems or
                        input validation where you always want to perform an
                        action before checking a condition.
                    </li>
                </ul>
            </section>

            <div className="m-10 text-center">
                <Link
                    to="/javascriptPrincipals/PracticeProblems"
                    className="px-4 py-2 m-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Ready for Some Practice Problems?
                </Link>
            </div>
        </div>
    )
}

CodeBlock.propTypes = {
    code: propTypes.string,
    language: propTypes.string,
}

export default Loops
