import { useEffect, useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../ui/hover-card";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default function DeclaringVariables() {
  const codeRef = useRef(null);

  useEffect(() => {
    // Apply syntax highlighting to all code elements
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  const varExample = `var myName = "Bob";`;
  const letExample = `let myName = "Tom";`;
  const constExample = `const mySchool = "Cool School";`;

  return (
    <div>
      <div className="container mx-auto mukataFont min-h-screen text-lg">
        <div className="flex flex-wrap pt-20">
          <h1 className="text-6xl font-bold text-center w-full mb-10">
            Understanding Variables in JavaScript
          </h1>

          <section>
            <h2 className="text-5xl mt-12 mb-6">What is a Variable?</h2>
            <p className="text-lg font-bold">
              A variable is like a box where we can keep things. In programming,
              we use variables to store information like numbers, words, or more
              complex stuff. We can change the information in the box, and we
              can use the information in the box to do things. This makes
              variables very useful!
            </p>
          </section>

          <iframe
            className="youtube-video my-10"
            src="https://www.youtube.com/embed/BNETE_JL0cw?si=NgSGO9PYtzWBQTWF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <section>
          <hr className="border border-black dark:border-white" />
          <h2 className="text-4xl mt-10 mb-5">Using 'var'</h2>
          <p className="text-lg">
            In JavaScript, var is a keyword used to declare a variable. When you
            declare a variable using var, it is function-scoped, meaning it is
            available anywhere in the function where it was declared.{" "}
            <HoverCard>
              <HoverCardTrigger>
                <span className="text-blue-800  underline font-extrabold dark:text-blue-400">
                  Confused about Scope?
                </span>
              </HoverCardTrigger>
              <HoverCardContent
                className="bg-slate-200  m-5 border border-black font-extrabold text-lg shadow-lg px-10"
                customClass=" bg-slate-200  dark:bg-gray-700"
              >
                {" "}
                Scope in programming is like a set of boundaries that determines
                where variables and functions are accessible within your code.
                Think of it as an imaginary fence that encloses variables and
                functions, deciding where they can be seen or used. For example,
                a variable declared inside a function is like an item inside a
                locked room – it's only available within that function. On the
                other hand, a variable declared outside of all functions is like
                an item left in a public park – any part of your program can
                access it. Understanding scope is crucial because it helps
                manage and isolate variables in different parts of your code,
                preventing unexpected errors and conflicts.
              </HoverCardContent>
            </HoverCard>
            &nbsp;If it's declared outside of any function, it's globally
            scoped. It's important to note that variables declared with var can
            be re-declared and updated, which can lead to potential issues with
            variable scope, especially in larger codebases. This is why in
            modern JavaScript, let (for block-scoped variables that can be
            reassigned) and const (for block-scoped variables that cannot be
            reassigned) are often preferred over var. <br />
            Here's an example:
          </p>
          <div className="hover-container">
            Hover over me
            <div className="hover-card">
              This is the content of the hover card.
            </div>
          </div>
          <pre>
            <code ref={codeRef} className="language-javascript my-3 p-2">
              {varExample}
            </code>
          </pre>
        </section>

        <section>
          <hr className="mt-10 border border-black dark:border-white" />

          <h2 className="text-4xl mt-10 mb-5">Using 'let'</h2>

          <p>
            In JavaScript, let is used to create a variable that you can change
            later. It's similar to var, but let is more specific about where the
            variable can be used in your code. This is called Scope. This makes
            your code safer and easier to understand.
            <br /> Here's an example:
          </p>
          <pre>
            <code ref={codeRef} className="language-javascript my-3 p-2">
              {letExample}
            </code>
          </pre>
        </section>

        <section>
          <hr className="mt-10 border border-black dark:border-white " />

          <h2 className="text-4xl mt-10 mb-5">Using 'const'</h2>
          <p>
            In JavaScript, const is a keyword used to declare a variable.
            However, unlike variables declared with let or var, a const variable
            cannot be reassigned after it has been declared. This means once you
            set the value of a const variable, it stays the same throughout your
            code. It's useful for values that you know shouldn't change, like
            the number of days in a week. Just like let, const is also
            block-scoped, which means it's only available within the block where
            it was declared.
            <br />
            Here's how:
          </p>
          <pre>
            <code ref={codeRef} className="language-javascript my-3 p-2">
              {constExample}
            </code>
          </pre>
        </section>

        <section className="pb-32">
          <hr className="mt-10 border border-black dark:border-white " />

          <h2 className="text-4xl mt-10 mb-5">Summary</h2>
          <p>
            In summary, as a beginner, it's generally good practice to use let
            for variables that will change over time, const for variables that
            should remain constant, and only use var if you're maintaining or
            understanding older JavaScript code. Happy coding!
          </p>
        </section>
      </div>
    </div>
  );
}
