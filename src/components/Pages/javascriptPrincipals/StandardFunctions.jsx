function StandardFunctions() {
  return (
    <div>
      <div className='container mukataFont p-sm-2'>
        <div className='row'>
          <h1 className='display-5 text-center p-5'>
            Learning About JavaScript Functions: A Beginner&apos;s Guide
          </h1>
          <p>
            A function in JavaScript is like a little recipe that tells the
            computer exactly what to do. Imagine you have a recipe for making
            cookies. It tells you the ingredients, the steps to mix them, and
            how to bake them. Functions work the same way, but instead of
            cookies, they make code do something special!
          </p>

          <h2 className='p-1'>What Is a Function?</h2>
          <p>
            A function is a set of instructions that performs a specific task.
            It&apos;s like a tiny computer program inside your main program.
            Let&apos;s learn how to create one!
          </p>

          <h2 className='p-1'>How to Create a Function</h2>
          <p>
            Creating a function is like writing down a recipe. Here&apos;s an
            example of a simple function that says &quot;Hello, World!&quot;
            when it&apos;s called:
          </p>
          <pre>
            <code className='javascript'>
              function sayHello() {alert("Hello, World!")}
            </code>
          </pre>
          <p>
            This code says, &quot;Create a function named &squot;sayHello&squot;
            and make it show a pop-up with the words &squot;Hello, World!&squot;
            when it&squot;s used.&quot;
          </p>

          <h2 className='p-1'>How to Use a Function</h2>
          <p>
            Once you have created a function, you can use it by calling its name
            followed by parentheses. Here&squot;s how you call the
            &squot;sayHello&squot; function:
          </p>
          <pre>
            <code className='language-javascript'>sayHello();</code>
          </pre>
          <p>
            When this line of code is run, it will make a pop-up appear that
            says &squot;Hello, World!&squot;
          </p>

          <h2 className='p-1'>Why Should You Use Functions?</h2>
          <p>
            Functions make your code neater and easier to read. They also let
            you reuse the same code many times without having to write it again
            and again. Imagine if you had to write down the whole cookie recipe
            every time you wanted to make cookies. That would be a lot of extra
            work!
          </p>

          <h2 className='p-1'>
            Functions with Parameters: Giving Information to Functions
          </h2>
          <p>
            Sometimes, you want your function to do something specific with
            certain pieces of information. These pieces of information are
            called parameters. Here&squot;s how you can create a function that
            takes two numbers and adds them together:
          </p>

          <pre>
            <code className='javascript'>
              function addNumbers(num1, num2){alert(num1 + num2)}
              addNumbers(5, 10); // Output: 15
            </code>
          </pre>

          <p>
            This code says, &quot;Create a function named
            &squot;addNumbers&squot; that takes two numbers, adds them together,
            and then shows a pop-up with the result.&quot;
          </p>

          <h2 className='p-1'>Let&squot;s Practice!</h2>
          <p>
            Now you know what functions are, how to create them, how to use
            them, and why they&squot;re helpful. Try making your own functions
            and see what you can do with them. Remember, coding is all about
            experimenting and having fun!
          </p>

          <h2 className='p-1'>
            Where can you &squot;Call&squot; or Use Functions?
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
        <div className='row'>
          <div className='col'></div>
          <div className='col-sm-12 col-md-6'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/FOD408a0EzU'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
}

export default StandardFunctions;
