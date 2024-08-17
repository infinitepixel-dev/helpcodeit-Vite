
import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';
import 'ace-builds/src-noconflict/mode-typescript';

const AsyncAwait = () => {
  return (
    <div className="container px-6 py-4 mb-24 space-y-6">
      <h1 className="text-6xl font-bold text-center text-balance">
        The Basics of <code className="text-6xl text-green-500 border-none shadow-none">async</code> and <code className="text-6xl text-red-600 border-none shadow-none">await</code>
      </h1>
      <h2 className="text-2xl font-bold">
        When you're dealing with tasks that don't complete instantly, such as fetching data from an external API, you'll often need to use asynchronous programming. In JavaScript and TypeScript, <code className="text-2xl border-none shadow-none">async</code> and <code className="text-2xl border-none shadow-none">await</code> are handy keywords that help you manage such scenarios more effectively.
      </h2>

      <p className="text-pretty">
        The <code className="border-none shadow-none">async</code> keyword is used to define a function that's asynchronous. Inside the body of an <code className="border-none shadow-none">async</code> function, you can then use the <code className="border-none shadow-none">await</code> keyword to pause the execution of the function until a Promise is resolved or rejected. This syntax is not just cleaner but also more intuitive compared to traditional methods like callbacks or <code className="border-none shadow-none">.then()</code> chains.
      </p>

      <h3 className="text-xl font-bold"><code className="border-none shadow-none">async</code> Functions</h3>
      <p className="text-pretty">
        To start, you define an asynchronous function using the <code className="border-none shadow-none">async</code> keyword. Any function marked with <code className="border-none shadow-none">async</code> returns a Promise by default.
      </p>
      <CodeBlock
        code={`async function fetchData() {
    // Function is async, so it returns a Promise
}`}
        language="javascript"
      />

      <h3 className="text-xl font-bold">Using <code className="border-none shadow-none">await</code> to Pause Execution</h3>
      <p className="text-pretty">
        Once inside an <code className="border-none shadow-none">async</code> function, the <code className="border-none shadow-none">await</code> keyword allows you to pause the execution until the Promise resolves. When the Promise resolves, the function resumes, and the resolved value is assigned to a variable.
      </p>
      <CodeBlock
        code={`async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}`}
        language="javascript"
      />

      <p className="text-pretty">
        In this snippet:
        <ol className="space-y-2 list-decimal list-inside">
          <li><code className="border-none shadow-none">await</code> the completion of the <code className="border-none shadow-none">fetch</code> call. The function will pause here until the fetch call completes.</li>
          <li><code className="border-none shadow-none">await</code> the <code className="border-none shadow-none">.json()</code> method which also returns a Promise. This converts the raw response into a JSON object.</li>
        </ol>
      </p>

      <h3 className="text-xl font-bold">Error Handling with <code className="border-none shadow-none">try-catch</code></h3>
      <p className="text-pretty">
        Just like in synchronous code, you can handle errors in <code className="border-none shadow-none">async</code> functions using <code className="border-none shadow-none">try-catch</code> blocks. This is particularly important when dealing with network requests, which can fail for various reasons (network issues, wrong URLs, server errors, etc.).
      </p>
      <CodeBlock
        code={`async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}`}
        language="javascript"
      />

      <p className="text-pretty">
        This approach ensures that the code handles both HTTP errors (<code className="border-none shadow-none">!response.ok</code>) and other potential issues like network failures or JSON parsing errors.
      </p>

      <h3 className="text-xl font-bold">Making Multiple API Calls Sequentially</h3>
      <p className="text-pretty">
        <code className="border-none shadow-none">await</code> makes it easy to chain multiple asynchronous operations in a sequence, allowing each operation to wait for the previous one to complete.
      </p>
      <CodeBlock
        code={`async function fetchInfo() {
    try {
        const usersResponse = await fetch("https://api.example.com/users");
        const users = await usersResponse.json();

        const postsResponse = await fetch(\`https://api.example.com/posts?userId=\${users[0].id}\`);
        const posts = await postsResponse.json();

        console.log("First User:", users[0]);
        console.log("First User's Posts:", posts);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}`}
        language="javascript"
      />

      <p className="text-pretty">
        Here, one request (for users) is made first, and after its resolution, a second request (for posts related to the first user) is executed. The <code className="border-none shadow-none">await</code> keyword ensures these operations are performed in sequence, handling the complexity of asynchronous flows neatly.
      </p>

      <h3 className="text-xl font-bold">Making Multiple API Calls Simultaneously</h3>
      <p className="text-pretty">
        If you have multiple independent API calls, you don't need to wait for each to complete before starting the next one. You can initiate them simultaneously and use <code className="border-none shadow-none">Promise.all()</code> to wait for all of them to finish.
      </p>
      <CodeBlock
        code={`async function fetchMultiple() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch("https://api.example.com/users"),
            fetch("https://api.example.com/posts")
        ]);

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        console.log("Users:", users);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error during API calls:", error);
    }
}`}
        language="javascript"
      />

      <p className="text-pretty">
        In this example:
        <ul className="space-y-2 list-disc list-inside">
          <li><code className="border-none shadow-none">fetch("https://api.example.com/users")</code> and <code className="border-none shadow-none">fetch("https://api.example.com/posts")</code> start simultaneously.</li>
          <li><code className="border-none shadow-none">await Promise.all([...])</code> ensures that the function pauses until both promises resolve and then returns their results as an array.</li>
        </ul>
      </p>

      <h3 className="text-xl font-bold">Typing in TypeScript</h3>
      <p className="text-pretty">
        When working with TypeScript, you can define the types of the data you expect to receive. This increases code safety and readability.
      </p>
      <CodeBlock
        code={`interface User {
    id: number;
    name: string;
}

interface Post {
    id: number;
    userId: number;
    title: string;
}

async function fetchTypedData(): Promise<void> {
    try {
        const userResponse = await fetch("https://api.example.com/users");
        const users: User[] = await userResponse.json();

        const postResponse = await fetch(\`https://api.example.com/posts?userId=\${users[0].id}\`);
        const posts: Post[] = await postResponse.json();

        console.log(users, posts);
    } catch (error) {
        console.error("Error:", error);
    }
}`}
        language="typescript"
      />

      <p className="text-pretty">
        In this snippet:
        <ul className="space-y-2 list-disc list-inside">
          <li>We define <code className="border-none shadow-none">User</code> and <code className="border-none shadow-none">Post</code> interfaces to represent the data structures.</li>
          <li>
            When calling <code className="border-none shadow-none">await userResponse.json()</code>, we specify that the returned data will be an array of <code className="border-none shadow-none">User</code> objects.
          </li>
          <li>Similarly, we declare the posts as an array of <code className="border-none shadow-none">Post</code> objects.</li>
        </ul>
      </p>

      <p className="text-pretty">
        The type declarations help catch potential issues at compile time, making your code more robust.
      </p>

      <h3 className="text-xl font-bold">Conclusion</h3>
      <p className="text-pretty">
        Whether you're waiting for a simple task to complete or coordinating multiple API requests, <code className="border-none shadow-none">async</code> and <code className="border-none shadow-none">await</code> offer a clean, readable way to handle asynchronous code in JavaScript and TypeScript. With structured error handling and the ability to run asynchronous tasks in sequence or concurrently, they provide a powerful toolset for modern web development.
      </p>
    </div>
  );
};

export default AsyncAwait;
