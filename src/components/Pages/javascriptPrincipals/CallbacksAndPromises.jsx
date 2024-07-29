import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import cookingPasta from '@assets/cookingpasta.png';

const CallbacksAndPromises = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="container mx-auto p-6 px-14">
      <div className="flex justify-evenly ">
      <h1 className="text-5xl font-bold mb-4 ">Understanding <br /> Callbacks and Promises <br /> in JavaScript</h1>
            <img src={cookingPasta} alt="Cooking Pasta" className="rounded-lg mx-5 mb-8 md:block hidden max-w-xs max-h-52"  />
      </div>
          <p className="mb-4 text-lg font-semibold">
          Imagine you’re cooking dinner and need to boil water before you can cook pasta. In this scenario, the boiling water represents the main task that needs to be completed. If you’re using a callback analogy, instead of standing idly by the stove waiting for the water to boil, you might chop vegetables or prepare sauce. These additional tasks are like performing other operations while waiting for the main task to finish. Once the water boils, you can proceed with cooking the pasta, similar to how a callback function is executed once its associated task is done.
          </p>
      <p className="mb-4 text-lg font-semibold">
      In the context of promises, the boiling water is like a promise that needs to be fulfilled. While the water is boiling, you use the time to chop vegetables or prepare sauce, much like handling other operations while waiting for a promise to resolve. Once the water boils, you can cook the pasta, just as you handle the result of a resolved promise in programming.
        </p>
      <p className="mb-4 italic">
        In this article, we’ll explore the concepts of callbacks and promises in JavaScript, including their differences, use cases, and how to combine them effectively. Let’s dive in!
      </p>

      <h2 className="text-3xl font-semibold mb-2">Callbacks</h2>
      <p className="mb-4">
        A <strong>callback</strong> is a function that you pass into another function as an argument. This callback function is then executed (or "called back") at a later time once the original function has completed its task.
      </p>
      <p className="mb-4">
        Callbacks are used to make sure certain code runs only after another piece of code has finished executing. This is crucial for tasks that take time, like reading files, making HTTP requests, or querying databases.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Example of Callbacks</h3>
      <pre>
        <code className="javascript">
          {`function printMessage(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 2000);
}

function afterPrint() {
  console.log("This message appears after the previous one.");
}

printMessage("Hello, World!", afterPrint);`}
        </code>
      </pre>

      <h2 className="text-3xl font-semibold mb-2">Promises</h2>
      <p className="mb-4">
        A <strong>promise</strong> is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more powerful and flexible way to handle asynchronous tasks compared to callbacks.
      </p>
      <p className="mb-4">
        Promises help to manage asynchronous code more cleanly and avoid "callback hell," a situation where multiple nested callbacks make code difficult to read and maintain.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Example of Promises</h3>
      <pre>
        <code className="javascript">
          {`function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data); // Simulate successful data fetching
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });`}
        </code>
      </pre>

      <h2 className="text-3xl font-semibold mb-2">Combining Callbacks and Promises</h2>
      <p className="mb-4">
        While you may still encounter callbacks in older code or some APIs, promises are the modern approach to handling asynchronous operations. Here’s an example combining both:
      </p>
      <pre>
        <code className="javascript">
          {`function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = { name: "Jane", age: 25 };
    callback(data);
  }, 2000);
}

function fetchDataWithPromise() {
  return new Promise((resolve) => {
    fetchDataWithCallback(resolve);
  });
}

fetchDataWithPromise()
  .then((data) => {
    console.log("Data fetched using promise:", data);
  });`}
        </code>
      </pre>

      <h2 className="text-3xl font-semibold mb-2">Conclusion</h2>
      <p className="mb-4">
        <ul className="list-disc list-inside">
          <li><strong>Callbacks</strong> are functions passed into other functions to be executed later.</li>
          <li><strong>Promises</strong> provide a cleaner, more flexible way to handle asynchronous operations and avoid deeply nested callbacks.</li>
          <li>Use promises to write more readable and maintainable asynchronous code.</li>
        </ul>
      </p>
      <p className="mb-4">
        Understanding callbacks and promises is essential for effective JavaScript programming, especially when dealing with asynchronous operations. Happy coding!
      </p>
    </div>
  );
};

export default CallbacksAndPromises;