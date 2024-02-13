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
      <div className='container mx-auto mukataFont p-2 sm:p-8'>
        <div className='flex flex-col'>
          <h1 className='text-center text-5xl my-20'>
            Learning About JavaScript Functions: A Beginner's Guide
          </h1>
          <p>
            A function in JavaScript is like a little recipe that tells the
            computer exactly what to do. Imagine you have a recipe for making
            cookies. It tells you the ingredients, the steps to mix them, and
            how to bake them. Functions work the same way, but instead of
            cookies, they make code do something special!
          </p>

          <h2 className='text-3xl py-2 mt-10'>What Is a Function?</h2>
          <p>
            A function is a set of instructions that performs a specific task.
            It's like a tiny computer program inside your main program. Let's
            learn how to create one!
          </p>
          <div className='md:grid grid-cols-2 '>
            <div className=' mt-2 p-2'>
              <h2 className='text-3xl'>How to Create a Function</h2>
              <p>
                Creating a function is like writing down a recipe. Here's an
                example of a simple function that says "Hello, World!" when it's
                called:
              </p>
            </div>
            <div className="m-2 p-2">
              <pre className='my-5'>
                <code ref={codeRef} className='language-javascript'>
                  {sayHelloString}
                </code>
              </pre>
              <p>
                This code says, "Create a function named 'sayHello' and make it
                show a pop-up with the words 'Hello, World!' when it's used."
              </p>
            </div>
          </div>
          <h2 className='text-3xl py-2 mt-10'>How to Use a Function</h2>
          <p>
            Once you have created a function, you can use it by calling its name
            followed by parentheses. Here's how you call the 'sayHello'
            function:
          </p>
          <pre className='my-5'>
            <code ref={codeRef} className='language-javascript'>
              {callHelloString}
            </code>
          </pre>
          <p>
            When this line of code is run, it will make a pop-up appear that
            says 'Hello, World!'
          </p>

          <h2 className='text-3xl py-2 mt-10'>Why Should You Use Functions?</h2>
          <p>
            Functions make your code neater and easier to read. They also let
            you reuse the same code many times without having to write it again
            and again. Imagine if you had to write down the whole cookie recipe
            every time you wanted to make cookies. That would be a lot of extra
            work!
          </p>

          <h2 className='text-3xl py-2 mt-10'>
            Functions with Parameters: Giving Information to Functions
          </h2>
          <p>
            Sometimes, you want your function to do something specific with
            certain pieces of information. These pieces of information are
            called parameters. Here's how you can create a function that takes
            two numbers and adds them together:
          </p>

          <pre className='my-5'>
            <code ref={codeRef} className='language-javascript'>
              {addNumbersString}
            </code>
          </pre>

          <h2 className='text-3xl py-2 mt-10'>Let's Practice!</h2>
          <CodePractice
            instructions={`"Create a function named 'addNumbers' that takes two
          numbers, adds them together, and then shows a pop-up with the
          result."`}
            inputs={{
              input1: "textarea",
              input2: "singleLine",
            }}
            variables={{
              variable1: "let num1 = 2;",
              variable2: "let num2 = 3;",
            }}
            expectedOutput={"addNumbers();"}
            // functionData={""}
          />
          <p>
            Now you know what functions are, how to create them, how to use
            them, and why they're helpful. Try making your own functions and see
            what you can do with them. Remember, coding is all about
            experimenting and having fun!
          </p>

          <h2 className='text-3xl py-2 mt-10'>
            Where can you 'Call' or Use Functions?
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
        <div className='flex flex-row'>
          <div className='flex-1'></div>
          <div className='flex-1 sm:flex-none sm:w-1/2'>
            <h2 className='text-4xl font-extrabold mt-20 text-center'>
              Video from Web Dev Simplified
            </h2>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/FOD408a0EzU'
              title='YouTube video player'
              frameBorder='0'
              className='youtube-video my-10 h-auto'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex-1'></div>
        </div>
      </div>
    </div>
  );
}

export default StandardFunctions;
