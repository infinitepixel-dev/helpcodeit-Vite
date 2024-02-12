import { useRef } from "react";
import CodePractice from "../../Sub_Components/Code_Practice";

function StandardFunctions() {
  const codeRef = useRef(null);

  const sayHelloString = `function sayHello() {
    alert("Hello, World!");
  };`;

  const callHelloString = `sayHello();`;

  const addNumbersString = `function addNumbers(num1, num2) {
    alert(num1 + num2);
  };`;

  return (
    <div>
      <div className="container mx-auto mukataFont p-2 sm:p-8">
        <div className="flex flex-col">
          <h1 className="text-center text-5xl my-20">
            Learning About JavaScript Functions: A Beginner&apos;s Guide
          </h1>
          <p>
            A function in JavaScript is like a little recipe that tells the
            computer exactly what to do. Imagine you have a recipe for making
            cookies. It tells you the ingredients, the steps to mix them, and
            how to bake them. Functions work the same way, but instead of
            cookies, they make code do something special!
          </p>

          <h2 className="text-3xl py-2 mt-10">What Is a Function?</h2>
          <p>
            A function is a set of instructions that performs a specific task.
            It&apos;s like a tiny computer program inside your main program.
            Let&apos;s learn how to create one!
          </p>
          <div className="md:grid grid-cols-2 ">
            <div className=" mt-2 items-start">
              <h2 className="text-3xl">How to Create a Function</h2>
              <p>
                Creating a function is like writing down a recipe. Here&apos;s
                an example of a simple function that says &quot;Hello,
                World!&quot; when it&apos;s called:
              </p>
            </div>
            <div>
              <pre className="my-5">
                <code ref={codeRef} className="language-javascript">
                  {sayHelloString}
                </code>
              </pre>
              <p>
                This code says, &quot;Create a function named
                &apos;sayHello&apos; and make it show a pop-up with the words
                &apos;Hello, World!&apos; when it&apos;s used.&quot;
              </p>
            </div>
          </div>
          <h2 className="text-3xl py-2 mt-10">How to Use a Function</h2>
          <p>
            Once you have created a function, you can use it by calling its name
            followed by parentheses. Here&apos;s how you call the
            &apos;sayHello&apos; function:
          </p>
          <pre className="my-5">
            <code ref={codeRef} className="language-javascript">
              {callHelloString}
            </code>
          </pre>
          <p>
            When this line of code is run, it will make a pop-up appear that
            says <b>&apos;Hello, World!&apos;</b>
          </p>

          <h2 className="text-3xl py-2 mt-10">Why Should You Use Functions?</h2>
          <p>
            Functions make your code neater and easier to read. They also let
            you reuse the same code many times without having to write it again
            and again. Imagine if you had to write down the whole cookie recipe
            every time you wanted to make cookies. That would be a lot of extra
            work!
          </p>

          <h2 className="text-3xl py-2 mt-10">
            Functions with Parameters: Giving Information to Functions
          </h2>
          <p>
            Sometimes, you want your function to do something specific with
            certain pieces of information. These pieces of information are
            called parameters. Here&apos;s how you can create a function that
            takes two numbers and adds them together:
          </p>

          <pre className="my-5">
            <code ref={codeRef} className="language-javascript">
              {addNumbersString}
            </code>
          </pre>

          <p>
            This code says, &quot;Create a function named &apos;addNumbers&apos;
            that takes two numbers, adds them together, and then shows a pop-up
            with the result.&quot;
          </p>

          <h2 className="text-3xl py-2 mt-10">Let&apos;s Practice!</h2>
          <p>
            <i>
              Time to say Hello, write a function that will return the expected
              output. The function should be called <b>&apos;sayHello&apos;</b>{" "}
              and should return: <b>&apos;Hello, World!&apos;</b>.
            </i>
          </p>
          <CodePractice
            variables="sayHello"
            expectedOutput="Hello, World!"
            functionData={sayHelloString}
          />
          <p>
            Now you know what functions are, how to create them, how to use
            them, and why they&apos;re helpful. Try making your own functions
            and see what you can do with them. Remember, coding is all about
            experimenting and having fun!
          </p>

          <h2 className="text-3xl py-2 mt-10">
            Where can you &apos;Call&apos; or Use Functions?
          </h2>
          <p>
            Functions can be called anywhere in your code. You can call them in
            the middle of a function, at the end of a function, or even inside
            another function. You can also call them from outside your code,
            like in the console or in a separate file.
          </p>
          <p>
            The flexibility of functions is one of their best features. You can
            use them in many different ways to make your code more powerful and
            easier to read.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="flex-1"></div>
          <div className="flex-1 sm:flex-none sm:w-1/2">
            <h2 className="text-4xl font-extrabold mt-20 text-center">
              Video from Web Dev Simplified
            </h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FOD408a0EzU"
              title="YouTube video player"
              frameBorder="0"
              className="youtube-video my-10 h-auto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default StandardFunctions;
