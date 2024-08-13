import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';

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
  };

  return (
    <div className="container px-4 py-8 mx-auto space-y-8 animate-fadeIn">
      <h1 className="mb-4 text-4xl font-bold text-center ">
        Understanding Conditionals in JavaScript
      </h1>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold ">Introduction to Conditionals</h2>
        <p>
          Conditionals are one of the foundational concepts in programming. They allow your code to make decisions based
          on certain conditions or criteria. In JavaScript, conditionals enable you to execute different blocks of code
          depending on whether a specific condition is <span className="font-semibold text-green-500">true</span> or{' '}
          <span className="font-semibold text-red-600">false</span>.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold ">1. if, else if, and else Statements</h2>
        <CodeBlock code={codeExamples.ifElse} language="javascript" />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold ">2. Comparison and Logical Operators</h2>
        <p>
          Conditionals often involve comparison and logical operators:
        </p>
              <ul className="pl-5 space-y-2 list-disc">
          <li>
            <span className="font-semibold">Comparison Operators:</span>
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                <code className='font-mono italic border-none'>===</code> (strict equality): Checks if two values are equal and of the same type.
                <br />
                Example: <code className='font-mono italic border-none'>5 === 5</code> is <code className='font-mono italic border-none'>true</code>, but <code className='font-mono italic border-none'>5 === '5'</code> is <code className='font-mono italic border-none'>false</code>.
              </li>
              <li>
                <code className='font-mono italic border-none'>!==</code> (strict inequality): Checks if two values are not equal or not of the same type.
                <br />
                Example: <code className='font-mono italic border-none'>5 !== 5</code> is <code className='font-mono italic border-none'>false</code>, but <code className='font-mono italic border-none'>5 !== '5'</code> is <code className='font-mono italic border-none'>true</code>.
              </li>
              <li>
                <code className='font-mono italic border-none'>{'>'}</code> (greater than): Checks if the value on the left is greater than the value on the right.
                <br />
                Example: <code className='font-mono italic border-none'>10 &gt; 5</code> is <code className='font-mono italic border-none'>true</code>, but <code className='font-mono italic border-none'>5 &gt; 10</code> is <code className='font-mono italic border-none'>false</code>.
              </li>
              <li>
                <code className='font-mono italic border-none'>{'<'}</code> (less than): Checks if the value on the left is less than the value on the right.
                <br />
                Example: <code className='font-mono italic border-none'>5 &lt; 10</code> is <code className='font-mono italic border-none'>true</code>, but <code className='font-mono italic border-none'>10 &lt; 5</code> is <code className='font-mono italic border-none'>false</code>.
              </li>
              <li>
                <code className='font-mono italic border-none'>{'>='}</code> (greater than or equal to): Checks if the value on the left is greater than or equal to the value on the right.
                <br />
                Example: <code className='font-mono italic border-none'>10 &gt;= 5</code> is <code className='font-mono italic border-none'>true</code>, and <code className='font-mono italic border-none'>5 &gt;= 5</code> is also <code className='font-mono italic border-none'>true</code>, but <code className='font-mono italic border-none'>5 &gt;= 10</code> is <code className='font-mono italic border-none'>false</code>.
              </li>
              <li>
                <code className='font-mono italic border-none'>{'<='}</code> (less than or equal to): Checks if the value on the left is less than or equal to the value on the right.
                <br />
                Example: <code className='font-mono italic border-none'>5 &lt;= 10</code> is <code className='font-mono italic border-none'>true</code>, and <code className='font-mono italic border-none'>5 &lt;= 5</code> is also <code className='font-mono italic border-none'>true</code>, but <code className='font-mono italic border-none'>10 &lt;= 5</code> is <code className='font-mono italic border-none'>false</code>.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Logical Operators:</span>
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                <code className='font-mono italic border-none'>&&</code> (AND): Returns <code className='font-mono italic border-none'>true</code> if both operands are <code className='font-mono italic border-none'>true</code>.
                <br />
                Example: <code className='font-mono italic border-none'>true && true</code> is <code className='font-mono italic border-none'>true</code>, but <code className='font-mono italic border-none'>true && false</code> is <code className='font-mono italic border-none'>false</code>.
              </li>
              <li>
                <code className='font-mono italic border-none'>||</code> (OR): Returns <code className='font-mono italic border-none'>true</code> if at least one of the operands is <code className='font-mono italic border-none'>true</code>.
                <br />
                Example: <code className='font-mono italic border-none'>true || false</code> is <code className='font-mono italic border-none'>true</code>, but <code className='font-mono italic border-none'>false || false</code> is <code className='font-mono italic border-none'>false</code>.
              </li>
              <li>
                <code className='font-mono italic border-none'>!</code> (NOT): Returns the opposite boolean value of the operand.
                <br />
                Example: <code className='font-mono italic border-none'>!true</code> is <code className='font-mono italic border-none'>false</code>, and <code className='font-mono italic border-none'>!false</code> is <code className='font-mono italic border-none'>true</code>.
              </li>
            </ul>
          </li>
        </ul>
        <CodeBlock code={codeExamples.comparisonOperators} language="javascript" />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold ">3. The switch Statement</h2>
        <p>Switch statements are useful when you have multiple conditions to check against a single value. They provide a cleaner alternative to long chains of if-else statements.</p>
        <p className=''>While not often used in modern JavaScript, switch statements can be helpful in certain scenarios such as when you need to check for specific values.</p>
        <CodeBlock code={codeExamples.switchStatement} language="javascript" />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold ">4. Ternary Operators</h2>
        <p>
          The ternary operator provides a shorthand way to write simple if-else statements. It is the only JavaScript operator that takes three operands.
        </p>
        <p className=''>The way you set them up is to first provide a condition (evaluating either true or false) that you want to check. If the condition is true, the first expression is executed; otherwise, the second expression is executed.</p>
        <p className=''>The syntax for the ternary operator is to separate the condition, the first expression, and the second expression with a question mark <code className='font-mono italic border-none '>?</code> and a colon <code className='font-mono italic border-none '>:</code>.</p>
        <CodeBlock code={codeExamples.ternaryOperator} language="javascript" />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold ">5. Practical Exercise</h2>
        <p>
          Write a script that checks a user's age and outputs a message based on their age group:
        </p>
        <ul className="pl-5 space-y-2 list-decimal">
          <li>If the user is under 13, log "You are a child."</li>
          <li>If the user is between 13 and 19, log "You are a teenager."</li>
          <li>If the user is 20 or older, log "You are an adult."</li>
          <li>Use a ternary operator to set a variable <code className='font-mono italic border-none '>canVote</code> to <code className='font-mono italic border-none '>true</code> if the user is 18 or older, otherwise <code className='font-mono italic border-none '>false</code>.</li>
        </ul>
        <CodeBlock code={codeExamples.practicalExercise} language="javascript" />
      </section>

      <footer className="mt-8 text-center ">
        <p>
          Practice using these concepts in your projects to reinforce your understanding!
        </p>

      </footer>
    </div>
  );
};

export default ConditionalLesson;
