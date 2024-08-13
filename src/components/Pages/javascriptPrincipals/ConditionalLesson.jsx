import CodeBlock from '@subComponents/CodeBlock'
import ifChart from '@assets/flowcharts/ifChart.svg'
import ifElseChart from '@assets/flowcharts/ifElseChart.svg'
import switchChart from '@assets/flowcharts/switchChart.svg'
import conditionalMan from '@assets/conditionalMan.webp'

const ConditionalLesson = () => {
    const codeExamples = {
        ifElse: `let temperature = 75;

if (temperature > 80) {
  console.log("It's too hot outside!");
} else if (temperature >= 60 && temperature <= 80) {
  console.log("The weather is perfect.");
} else {
  console.log("It's too cold outside!");
}`,
        comparisonOperators: `let age = 20;

if (age >= 18 && age <= 25) {
  console.log("You are a young adult.");
}`,
        switchStatement: `let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Wednesday":
    console.log("Midweek already.");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("Just another day.");
}`,
        ternaryOperator: `let isMember = true;
let discount = isMember ? 10 : 0;

console.log(\`You receive a \${discount}% discount.\`);`,
        practicalExercise: `let age = 16;

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

let canVote = age >= 18 ? true : false;
console.log(\`Can vote: \${canVote}\`);`,
    }

    return (
        <div className="animate-fadeIn container mx-auto mb-24 space-y-8 px-4 py-8">
            <h1 className="mb-4 text-center text-4xl font-bold ">
                Understanding Conditionals in JavaScript
            </h1>
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold ">
                    Introduction to Conditionals
                </h2>
                <p>
                    <img
                        src={conditionalMan}
                        className="float-right m-4 my-3 hidden w-1/4 rounded-md md:block"
                    />
                    Conditionals are one of the foundational concepts in
                    programming. They allow your code to make decisions based on
                    certain conditions or criteria. In JavaScript, conditionals
                    enable you to execute different blocks of code depending on
                    whether a specific condition is
                    <span className="font-semibold text-green-500">true</span>
                    or <span className="font-semibold text-red-600">false</span>
                    .
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold ">
                    1. if, else if, and else Statements
                </h2>
                <p>
                    &quot;if&quot; statements are used to execute a block of
                    code if a specified condition is true. You can also use
                    &quot;else if&quot; and &quot;else&quot; statements to
                    provide additional conditions and fallback options.
                </p>
                <p className="">
                    The syntax for an &quot;if&quot; statement is to type if
                    followed by a condition in parentheses and then the block of
                    code you want to execute in curly braces, which I like to
                    call &quot;action brackets&quot;.
                </p>
                <p>
                    Here is a chart to illustrate what happens when you use an
                    &quot;if&quot; statement:
                </p>
                <img
                    src={ifChart}
                    alt="if statement flowchart"
                    className="mx-auto my-5 w-3/4 rounded-2xl dark:bg-gray-300 md:w-1/4"
                />
                <p>
                    &quot;else if&quot; statements are used to check additional
                    conditions if the first condition is false. You can have
                    multiple &quot;else if&quot; statements to check for
                    different conditions.
                </p>
                <p>
                    Here is a chart to illustrate what happens when you use an
                    &quot;else if&quot; statement:
                </p>
                <img
                    src={ifElseChart}
                    alt="if else statement flowchart"
                    className="mx-auto my-5 w-4/5 rounded-2xl dark:bg-gray-300 md:w-3/5"
                />
                <p>
                    &quot;else&quot; statements are used to execute a block of
                    code if none of the conditions are true. It acts as a
                    fallback option when all other conditions are false.
                </p>
                <p>Below are the examples in code:</p>
                <CodeBlock code={codeExamples.ifElse} language="javascript" />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold ">
                    2. Comparison and Logical Operators
                </h2>
                <p>
                    Conditionals often involve comparison and logical operators:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>
                        <span className="font-semibold">
                            Comparison Operators:
                        </span>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    ===
                                </code>
                                (strict equality): Checks if two values are
                                equal and of the same type.
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    5 === 5
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    5 === &quot;5&quot;
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                .
                            </li>
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    !==
                                </code>
                                (strict inequality): Checks if two values are
                                not equal or not of the same type.
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    5 !== 5
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    5 !== &quot;5&quot;
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                .
                            </li>
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    {'>'}
                                </code>
                                (greater than): Checks if the value on the left
                                is greater than the value on the right.
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    10 &gt; 5
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    5 &gt; 10
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                .
                            </li>
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    {'<'}
                                </code>
                                (less than): Checks if the value on the left is
                                less than the value on the right.
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    5 &lt; 10
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    10 &lt; 5
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                .
                            </li>
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    {'>='}
                                </code>
                                (greater than or equal to): Checks if the value
                                on the left is greater than or equal to the
                                value on the right.
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    10 &gt;= 5
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , and
                                <code className="border-none font-mono italic shadow-none">
                                    5 &gt;= 5
                                </code>
                                is also
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    5 &gt;= 10
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                .
                            </li>
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    {'<='}
                                </code>
                                (less than or equal to): Checks if the value on
                                the left is less than or equal to the value on
                                the right.
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    5 &lt;= 10
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , and
                                <code className="border-none font-mono italic shadow-none">
                                    5 &lt;= 5
                                </code>
                                is also
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    10 &lt;= 5
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                .
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">
                            Logical Operators:
                        </span>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    &&
                                </code>
                                (AND): Returns
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                if both operands are
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                .
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    true && true
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    true && false
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                .
                            </li>
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    ||
                                </code>
                                (OR): Returns
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                if at least one of the operands is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                .
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    true || false
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                , but
                                <code className="border-none font-mono italic shadow-none">
                                    false || false
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                .
                            </li>
                            <li>
                                <code className="border-none font-mono italic shadow-none">
                                    !
                                </code>
                                (NOT): Returns the opposite boolean value of the
                                operand.
                                <br />
                                Example:
                                <code className="border-none font-mono italic shadow-none">
                                    !true
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    false
                                </code>
                                , and
                                <code className="border-none font-mono italic shadow-none">
                                    !false
                                </code>
                                is
                                <code className="border-none font-mono italic shadow-none">
                                    true
                                </code>
                                .
                            </li>
                        </ul>
                    </li>
                </ul>
                <CodeBlock
                    code={codeExamples.comparisonOperators}
                    language="javascript"
                />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold ">
                    3. The switch Statement
                </h2>
                <p>
                    Switch statements are useful when you have multiple
                    conditions to check against a single value. They provide a
                    cleaner alternative to long chains of if-else statements.
                </p>
                <p>Below is a chart to illustrate what is happening: </p>
                <img
                    src={switchChart}
                    alt="switch statement flowchart"
                    className="mx-auto my-5 w-4/5 rounded-2xl dark:bg-gray-300"
                />
                <p className="">
                    While not often used in modern JavaScript, switch statements
                    can be helpful in certain scenarios such as when you need to
                    check for specific values.
                </p>
                <p>Here is an example of a switch statement:</p>
                <CodeBlock
                    code={codeExamples.switchStatement}
                    language="javascript"
                />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold ">
                    4. Ternary Operators
                </h2>
                <p>
                    The ternary operator provides a shorthand way to write
                    simple if-else statements. It is the only JavaScript
                    operator that takes three operands.
                </p>
                <p className="">
                    The way you set them up is to first provide a condition
                    (evaluating either true or false) that you want to check. If
                    the condition is true, the first expression is executed;
                    otherwise, the second expression is executed.
                </p>
                <p className="">
                    The syntax for the ternary operator is to separate the
                    condition, the first expression, and the second expression
                    with a question mark
                    <code className="border-none font-mono italic shadow-none">
                        ?
                    </code>{' '}
                    and a colon
                    <code className="border-none font-mono italic shadow-none">
                        :
                    </code>
                    .
                </p>
                <CodeBlock
                    code={codeExamples.ternaryOperator}
                    language="javascript"
                />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold ">
                    5. Practical Exercise
                </h2>
                <p>
                    Write a script that checks a user&quot;s age and outputs a
                    message based on their age group:
                </p>
                <ul className="list-decimal space-y-2 pl-5">
                    <li>
                        If the user is under 13, log &quot;You are a
                        child.&quot;
                    </li>
                    <li>
                        If the user is between 13 and 19, log &quot;You are a
                        teenager.&quot;
                    </li>
                    <li>
                        If the user is 20 or older, log &quot;You are an
                        adult.&quot;
                    </li>
                    <li>
                        Use a ternary operator to set a variable
                        <code className="border-none font-mono italic shadow-none">
                            canVote
                        </code>
                        to
                        <code className="border-none font-mono italic shadow-none">
                            true
                        </code>
                        if the user is 18 or older, otherwise
                        <code className="border-none font-mono italic shadow-none">
                            false
                        </code>
                        .
                    </li>
                </ul>
                <CodeBlock
                    code={codeExamples.practicalExercise}
                    language="javascript"
                />
            </section>

            <footer className="mt-8 text-center ">
                <p>
                    Practice using these concepts in your projects to reinforce
                    your understanding!
                </p>
            </footer>
        </div>
    )
}

export default ConditionalLesson
