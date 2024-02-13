import { useRef } from "react";
import { Link } from "react-router-dom";

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
    <div className='dark: bg-gray-600 text-white'>
      <div className='container mx-auto roboto-font text-xl p-2 sm:p-8 '>
        <div className='flex flex-col'>
          <h1 className='text-center text-5xl my-20'>
            Learning About JavaScript Functions: A Beginner's Guide
          </h1>
          <hr className='border-black border-2 dark:border-white' />
          <div className=' m-14 my-1'>
            <h2 className='text-3xl px-2 mt-10 ms-2 '>What Is a Function?</h2>
            <p className='text-2xl roboto-font mb-10 ms-4'>
              A function is a set of instructions that performs a specific task.
              It's like a tiny computer program inside your main program That
              you can easily reuse. Another way of thinking about it is the
              office setting. You have a coworker named Bob, Bob works in the
              corner and only does one specific task. We can think of Bob as a
              function. Bob is a function that does a specific task. When we
              need that task done, we call Bob to do it. Functions are the same
              way. They are a set of instructions that perform a specific task.
              When we need that task done, we call the function to do it. Then
              when the function is done, it returns the result of the task.
              Which is equivalent to Bob giving you the result of his task. Cool
              right? <br />
              Let's learn how to create one!
            </p>
          </div>
          <hr className='border-black border-2 mb-10 dark:border-white' />

          <div className='mb-10'>
            <div className=''>
              <h2 className='text-3xl'>How to Create a Function</h2>
              <p>
                When you create a function you are defining a set of
                instructions that will be performed when the function is called.
                First you use the keyword 'function' to tell the computer that
                you are creating a function. Then you give the function a name.
                After that, you put parentheses and then curly braces. Inside
                the curly braces, you write the instructions that you want the
                function to perform. Here's an example of a simple function:
              </p>
            </div>
            <div className='m-2 '>
              <pre className='my-5'>
                <code
                  ref={codeRef}
                  className='language-javascript float-start me-10 p-2'
                >
                  {sayHelloString}
                </code>
              </pre>
              <p>
                <i>
                  This code says, "Create a function named 'sayHello' and make
                  it show an alert pop-up with the words 'Hello, World!' when
                  it's used.
                </i>{" "}
                This is a simple function with one purpose: to show a pop-up
                that says 'Hello, World!'. You can create functions that do many
                different things, from simple tasks like this to complex tasks
                like calculating the square root of a number. The possibilities
                are endless!
              </p>
            </div>
          </div>
          <hr className='border-black border-2 mb-10 dark:border-white' />

          <h2 className='text-3xl py-2'>How to Use a Function</h2>

          <p>
            Once you have created a function, you can use it by calling its name
            followed by parentheses. Here&apos;s how you call the
            &apos;sayHello&apos; function:
          </p>

          <div>
            <pre className='my-5'>
              <code
                ref={codeRef}
                className='language-javascript float-start me-5 p-2'
              >
                {callHelloString}
              </code>
            </pre>
            <p>
              When this line of code is run, it will make a pop-up appear that
              says 'Hello, World!' because that's what the 'sayHello' function
              does. You can 'call' a function where ever you want in your code.
              You can even call it multiple times in a row if you want to or
              inside another function.{" "}
            </p>
          </div>
          <hr className='border-black border-2 my-7 dark:border-white' />
          <h2 className='text-3xl py-2'>Why Should You Use Functions?</h2>

          <p>
            Functions make your code neater and easier to read. They also let
            you reuse the same code many times without having to write it again
            and again. Imagine if you had to write down the whole cookie recipe
            every time you wanted to make cookies. That would be a lot of extra
            work!
          </p>
          <hr className='border-black border-2 my-7 dark:border-white' />

          <h2 className='text-3xl py-2'>
            Functions with Parameters: Giving Information to Functions
          </h2>
          <p>
            Sometimes, you want your function to do something specific with
            certain pieces of information. These pieces of information are
            called parameters. Here&apos;s how you can create a function that
            takes two numbers and adds them together:
          </p>

          <div>
            <pre className='my-5'>
              <code
                ref={codeRef}
                className='language-javascript float-start me-5'
              >
                {addNumbersString}
              </code>
            </pre>
            <p>
              {" "}
              If you wanted to have this function return the result return the
              answer instead of showing a pop-up, you would use the 'return'
              keyword. You can have it do almost anything though. This is where
              the use case of the function comes into play. Once declared you
              have total control over what the function does.{" "}
            </p>{" "}
            <p>
              {" "}
              The flexibility of functions is one of their best features. You
              can use them in many different ways to make your code more
              powerful and easier to read.
            </p>
          </div>
          <hr className='border-black border-2 my-7 dark:border-white' />

          <h2 className='text-3xl py-2 mt-10'>Let's Practice!</h2>
          <CodePractice
            codeRef={codeRef}
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
          <p className='mt-10'>
            Now you know what functions are, how to create them, how to use
            them, and why they&apos;re helpful. Try making your own functions
            and see what you can do with them. Remember, coding is all about
            experimenting and having fun!
          </p>
        </div>
        <hr className='border-black border-2 mt-7 mb-5 dark:border-white' />

        <div className='flex flex-row'>
          <div className='flex-1'></div>
          <div className='flex-1 sm:flex-none sm:w-1/2'>
            <h2 className='text-5xl font-extrabold  text-center'>
              Need deeper explanation?
            </h2>
            <h2 className='text-4xl font-extrabold text-center'>
              Here is a Video from Web Dev Simplified
            </h2>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/FOD408a0EzU'
              title='YouTube video player'
              frameBorder='0'
              className='youtube-video mt-10 h-auto'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex-1'></div>
        </div>
      </div>
      <div className='text-center text-2xl mb-10 text-red-600'>
        <Link to='/javascript'>Back to JavaScript Main Page</Link>
      </div>
    </div>
  );
}

export default StandardFunctions;
