import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/Sub_Components/ScopeHovercard";

export default function DeclaringVariables() {
  const codeRef = useRef(null);

  const varExample = `var myName = "Bob";`;
  const letExample = `let myName = "Tom";`;
  const constExample = `const mySchool = "Cool School";`;

  


  return (
    <div className='dark:bg-slate-600 '>
      <div className='container mx-auto mukataFont min-h-screen text-lg dark:text-white'>
        <div className='flex flex-wrap pt-20'>
          <h1 className='text-6xl font-bold text-center w-full mb-10'>
            Understanding Variables in JavaScript
          </h1>

          <section>
            <h2 className='text-5xl mt-12 mb-6'>What is a Variable?</h2>
            <p className='text-lg font-bold'>
              A variable is like a box where we can keep things. In programming,
              we use variables to store information like numbers, words, or more
              complex stuff. We can change the information in the box, and we
              can use the information in the box to do things. This makes
              variables very useful!
            </p>
          </section>

          <iframe
            className='youtube-video my-10'
            src='https://www.youtube.com/embed/BNETE_JL0cw?si=NgSGO9PYtzWBQTWF'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>

        <section>
          <hr className='border border-black dark:border-white' />
          <h2 className='text-4xl mt-10 mb-5'>Using 'var'</h2>
          <p className='text-lg'>
            In JavaScript, var is a keyword used to declare a variable. When you
            declare a variable using var, it is function-scoped, meaning it is
            available anywhere in the function where it was declared. If it's
            declared outside of any function, it's globally scoped. It's
            important to note that variables declared with var can be
            re-declared and updated, which can lead to potential issues with
            variable scope, especially in larger codebases. This is why in
            modern JavaScript, let (for block-scoped variables that can be
            reassigned) and const (for block-scoped variables that cannot be
            reassigned) are often preferred over var. <br />
            Here's an example:
          </p>

          <pre>
            <code ref={codeRef} className='language-javascript my-3 p-2'>
              {varExample}
            </code>
          </pre>
        </section>

        <section>
          <hr className='mt-10 border border-black dark:border-white' />

          <h2 className='text-4xl mt-10 mb-5'>Using 'let'</h2>
          
          <p>
            In JavaScript, let is used to create a variable that you can change
            later. It's similar to var, but let is more specific about where the
            variable can be used in your code. This is called {<HoverCard/>} This makes your code safer and
            easier to understand.
            <br /> Here's an example:
          </p>
          <pre>
            <code ref={codeRef} className='language-javascript my-3 p-2'>
              {letExample}
            </code>
          </pre>
          
        </section>

        <section>
          <hr className='mt-10 border border-black dark:border-white ' />

          <h2 className='text-4xl mt-10 mb-5'>Using 'const'</h2>
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
            <code ref={codeRef} className='language-javascript my-3 p-2'>
              {constExample}
            </code>
          </pre>
        </section>

        <section className='pb-32'>
          <hr className='mt-10 border border-black dark:border-white ' />

          <h2 className='text-4xl mt-10 mb-5'>Summary</h2>
          <p>
            Use 'var' if you see old code, 'let' if you want to change the
            variable, and 'const' if you never want it to change. Happy coding!
          </p>
        </section>
      </div>
    </div>
  );
}
