import 'tailwindcss/tailwind.css';
import cookingPasta from '@assets/cookingpasta.png';
import CodeBlock from '@subComponents/CodeBlock';

let callbacks = `function printMessage(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 2000);
}

function afterPrint() {
  console.log("This message appears after the previous one.");
}

printMessage("Hello, World!", afterPrint);`

let promises = `function fetchData() {
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
  });`

let callbacksAndPromises = `function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = { name: "Jane", age: 25 };
    callback(data);
  }, 2000);
}

function fetchDataWithPromise() {
  return new Promise((resolve) => {
    fetchDataWithCallback(resolve);
  });
}`

const CallbacksAndPromises = () => {
  return (
    <div className="container p-6 mx-auto px-14">
      <div className="flex justify-evenly">
        <h1 className="mb-4 text-5xl font-bold">
          Understanding <br /> Callbacks and Promises <br /> in JavaScript
        </h1>
        <img
          src={cookingPasta}
          alt="Cooking Pasta"
          className="hidden max-w-xs mx-5 mb-8 rounded-lg md:block max-h-52"
        />
      </div>

      <p className="mb-4 text-lg font-semibold">
        Imagine you're cooking dinner and need to boil water before you can cook pasta. The act of boiling water is your main task that must be completed before cooking the pasta. However, while waiting for the water to boil, you don't just stand idly by. Instead, you might chop vegetables or prepare the sauce. In programming, these additional tasks are like performing other operations while waiting for the main task (boiling water) to finish. The moment the water boils, you're ready to start cooking the pasta, which is similar to a callback function being executed once its associated task is complete.
      </p>

      <p className="mb-4 text-lg font-semibold">
        In the context of promises, the boiling water represents a promise that needs to be fulfilled. While waiting, you can continue with other tasks like chopping vegetables or preparing the sauce, similar to handling other operations while you wait for a promise to resolve in code. Once the water has boiled, you can start cooking pasta, just like you handle a resolved promise in coding.
      </p>

      <p className="mb-4 italic">
        In this article, we’ll dive into the concepts of callbacks and promises in JavaScript, discuss their differences, and learn how you can use them effectively—both individually and together. Let's get started!
      </p>

      <h2 className="mb-2 text-3xl font-semibold">What Are Callbacks?</h2>
      <p className="mb-4">
        A <strong>callback</strong> is simply a function that you pass to another function as an argument. This callback function is then invoked (or "called back") after the other function has finished executing its main task.
      </p>
      <p className="mb-4">
        Callbacks are commonly used to make sure certain pieces of code run only after another operation has completed. This is especially useful when working with tasks that take time to finish, like reading files from your computer, making requests to a server, or querying a database.
      </p>

      <h3 className="mb-2 text-2xl font-semibold">Example of Callbacks</h3>

      <CodeBlock code={callbacks} language="javascript" />
      <p className="mb-4">
        In this example, the `printMessage` function accepts a message and a callback function as parameters. It waits for 2 seconds using `setTimeout` (simulating a delay, like waiting for an API response), and then prints the message. After that, the callback function `afterPrint` is executed, printing another message to the console.
      </p>

      <h2 className="mb-2 text-3xl font-semibold">What Are Promises?</h2>
      <p className="mb-4">
        A <strong>promise</strong> is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation. It allows you to write asynchronous code in a cleaner, more flexible way compared to traditional callbacks. Promises make it easier to handle operations that take time to complete, such as fetching data from an external source.
      </p>
      <p className="mb-4">
        Promises are particularly useful because they help to avoid what is known as "callback hell"—a situation where callbacks are nested within callbacks and the code becomes harder to read and maintain.
      </p>

      <h3 className="mb-2 text-2xl font-semibold">Example of Promises</h3>
      <CodeBlock code={promises} language="javascript" />

      <p className="mb-4">
        In this example, `fetchData` is a function that returns a promise. The promise either resolves with some data after 2 seconds or rejects in case of an error. When you call `fetchData`, you can use `.then()` to specify what to do when the promise resolves (data is fetched), and `.catch()` to handle any errors that occur during this process.
      </p>

      <h2 className="mb-2 text-3xl font-semibold">Combining Callbacks and Promises</h2>
      <p className="mb-4">
        Although promises are generally preferred for handling asynchronous operations in modern JavaScript code, you may still encounter callbacks in older codebases or some APIs. You can even combine callbacks and promises together. Below is an example that shows how to wrap a function that uses a callback into a promise:
      </p>

      <CodeBlock code={callbacksAndPromises} language="javascript" />

      <p className="mb-4">
        In this example, `fetchDataWithCallback` is an old function that uses a callback to return data. We can easily wrap this function in a promise by creating a new function called `fetchDataWithPromise`. This allows us to use modern promise-based syntax while still working with the original callback-based code.
      </p>

      <h2 className="mb-2 text-3xl font-semibold">Conclusion</h2>
      <p className="mb-4">
        By now, you should have a clearer understanding of the following concepts:
        <ul className="list-disc list-inside">
          <li>A <strong>callback</strong> is a function passed into another function to be executed once the main task is completed.</li>
          <li>A <strong>promise</strong> is a more modern and flexible way to handle asynchronous operations. It helps avoid deeply nested callbacks.</li>
          <li>Using promises will generally make your asynchronous code more readable and easier to maintain.</li>
        </ul>
      </p>
      <p className="mb-4">
        Understanding callbacks and promises is essential for writing efficient and clean JavaScript code, especially when dealing with tasks that take time to complete. Keep practicing, and happy coding!
      </p>
    </div>
  );
};

export default CallbacksAndPromises;
