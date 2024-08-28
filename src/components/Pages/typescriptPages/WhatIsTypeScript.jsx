import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';

const WhatIsTypeScript = () => {
  const typeScriptExample = `
// JavaScript
let greeting = "Hello, World!";

// TypeScript
let greeting: string = "Hello, World!";
let count: number = 42;
let isActive: boolean = true;

function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
`;

  return (
    <div className="container p-6 mx-auto mb-24">
      <h1 className="mb-6 text-3xl font-bold text-blue-600">What is TypeScript?</h1>

      <p className="mb-4">
        TypeScript is a programming language that builds on JavaScript by adding static type definitions.
        In simpler terms, it's like JavaScript with some extra features that help you catch errors early
        and write code that's easier to manage and understand.
      </p>

      <p className="mb-4">
        Created and maintained by Microsoft, TypeScript has quickly become one of the most popular languages for building large-scale applications.
        It extends JavaScript by allowing developers to specify types for variables, function parameters, and return values.
        These type annotations provide a way to enforce consistent data handling throughout an application, making the codebase more predictable and reducing bugs.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold text-blue-500">Key Points About TypeScript</h2>

      <ul className="pl-6 mb-6 space-y-2 list-disc">
        <li><strong>Superset of JavaScript:</strong> TypeScript is a "superset" of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.</li>
        <li><strong>Static Typing:</strong> You can define the types of variables, function parameters, and return values in your code, reducing runtime errors.</li>
        <li><strong>Compiled to JavaScript:</strong> TypeScript code is compiled into regular JavaScript for execution. This ensures that your TypeScript code can run anywhere JavaScript runs, whether it's in the browser, on a server, or on mobile devices.</li>
        <li><strong>Tooling and IDE Support:</strong> TypeScript has excellent support in most modern IDEs and text editors. Features like autocompletion, refactoring tools, and advanced navigation make development faster and more efficient.</li>
        <li><strong>Open Source:</strong> TypeScript is open-source, with a growing community that continuously contributes to its development and improves its features.</li>
      </ul>

      <h2 className="mt-8 mb-4 text-2xl font-semibold text-blue-500">Why Do We Use TypeScript?</h2>

      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="mb-2 font-semibold text-blue-400">Error Detection</h3>
          <p className='text-black'>
            TypeScript catches errors early in the development process by enforcing type checks.
            This prevents many common bugs, like trying to perform operations on incompatible data types, from ever making it into production.
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="mb-2 font-semibold text-blue-400">Improved Code Quality</h3>
          <p className='text-black'>
            Explicit types make your code more predictable and easier to understand.
            When the types are clear, it's easier to follow the logic and spot potential issues before they become problems.
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="mb-2 font-semibold text-blue-400">Better Tooling</h3>
          <p className='text-black'>
            Get better support from your editor or IDE, improving productivity.
            TypeScript's integration with tools like Visual Studio Code allows for features like IntelliSense, which provides smart completions based on variable types, function definitions, and imported modules.
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="mb-2 font-semibold text-blue-400">Scalability</h3>
          <p className='text-black'>
            TypeScript helps manage complexity in large projects, making code more modular and maintainable.
            As your application grows, the type system helps ensure that the different parts of your codebase interact in expected ways, preventing many bugs that can arise in large JavaScript projects.
          </p>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-2xl font-semibold text-blue-500">TypeScript Example</h2>

      <CodeBlock code={typeScriptExample} language="typescript" />

      <p className="mt-4">
        In the example above, we have a simple TypeScript code snippet that declares variables with types.
        The <code>greet</code> function takes a <code>name</code> parameter of type <code>string</code> and returns a greeting message.
        TypeScript's type system allows you to define the shape of objects and the types of variables, making your code more reliable and easier to refactor.
      </p>

      <p className="mt-4">
        TypeScript also supports advanced features like <strong>interfaces</strong> and <strong>enums</strong>, which provide even more ways to structure your code and enforce consistency.
        Interfaces allow you to define the structure of an object, ensuring that objects adhere to a specific shape. Enums, on the other hand, provide a way to define a set of named constants, making your code more readable and less error-prone.
      </p>

      <p className="mt-4">
        TypeScript is a powerful language that can help you write better code and build more robust applications.
        It is widely used in modern web development and has a growing community of developers.
        Whether you're working on a small personal project or a large enterprise application, TypeScript can help you improve your code quality and developer experience.
      </p>

    </div>
  );
};

export default WhatIsTypeScript;
