import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';

const ViteVanilla = () => {
  return (
    <div className="container p-4 mb-24">
      <h1 className="mb-8 text-5xl font-bold text-balance">Differences Between a Vanilla Vite Application and a Basic JavaScript/HTML Project</h1>
      <h2 className="mb-4 text-2xl font-bold"> What are the differences between a Vanilla Vite application and a basic JavaScript/HTML project?</h2>
      <ul className="mb-4 list-disc list-inside">
        <li className="mt-2">
          <strong>Development Server with HMR (Hot Module Replacement):</strong>
          <p className="ml-4">
            <strong>Vite:</strong> Comes with a built-in development server that supports Hot Module Replacement (HMR), allowing for instant updates in the browser as you make changes to your code.<br/>
            <strong>Basic Project:</strong> Typically requires manual refreshes of the browser to see changes.
          </p>
        </li>

        <li className="mt-2">
          <strong>Module Bundling:</strong>
          <p className="ml-4">
            <strong>Vite:</strong> Uses ES module imports natively in the browser during development. For production, it bundles your code with Rollup, providing optimized output.<br/>
            <strong>Basic Project:</strong> No module bundling unless you manually set up a tool like Webpack or Parcel. Scripts are often included directly in HTML with <code className="p-1 rounded">{'<script>'}</code> tags.
          </p>
        </li>

        <li className="mt-2">
          <strong>Build Optimization:</strong>
          <p className="ml-4">
            <strong>Vite:</strong> Automatically optimizes and minifies your code for production with modern build tools. This includes tree-shaking, dead-code elimination, and splitting the code into smaller chunks.<br/>
            <strong>Basic Project:</strong> Requires manual setup for optimization using tools like Webpack, Babel, or UglifyJS.
          </p>
        </li>

        <li className="mt-2">
          <strong>Out-of-the-Box Features:</strong>
          <p className="ml-4">
            <strong>Vite:</strong> Includes useful features like pre-configured ESLint, TypeScript support, and CSS preprocessing (like Sass), which can be easily extended.<br/>
            <strong>Basic Project:</strong> Typically starts with no build tools or additional features unless manually added.
          </p>
        </li>

        <li className="mt-2">
          <strong>Modern JavaScript Features:</strong>
          <p className="ml-4">
            <strong>Vite:</strong> Supports modern JavaScript features out-of-the-box, which can be directly used without worrying about browser compatibility during development. It will only transpile for production as needed.<br/>
            <strong>Basic Project:</strong> Requires manual setup for transpiling modern JavaScript (e.g., using Babel) to ensure compatibility across older browsers.
          </p>
        </li>

        <li className="mt-2">
          <strong>Speed and Performance:</strong>
          <p className="ml-4">
            <strong>Vite:</strong> Designed for speed, especially with large projects, by only serving source files as ES modules and bundling them on demand.<br/>
            <strong>Basic Project:</strong> Can become slow to manage as the project grows unless additional tooling is added to handle tasks like minification, bundling, and live reloading.
          </p>
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-bold">Summary:</h2>
      <p className="mb-4">
        A Vanilla Vite application provides a modern, optimized development environment with features like hot module replacement, fast builds, and automatic optimizations, making it significantly different from a basic JavaScript and HTML project, which typically lacks these features and requires additional configuration to achieve similar capabilities.
      </p>

      <h2 className="mb-4 text-2xl font-bold">Process for Creating a Vanilla Vite Application</h2>

      <ol className="space-y-8 list-decimal list-outside">
      <li className="ml-4">
        <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold ">Install Node.js:</h3>
          <p className="">
            Before you can create a Vite project, ensure that you have Node.js installed on your system.
            You can download and install it from
            <a href="https://nodejs.org/" className="ml-1 text-blue-600 underline transition-colors duration-300 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Node.js</a>.
          </p>
        </div>
      </li>

      <li className="ml-4">
        <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold ">Create a New Vite Project:</h3>
          <p className="mb-3 ">
            Open your terminal and run the following command to create a new Vite project:
          </p>
          <CodeBlock
            code={`npm create vite@latest`}
            language="bash"
          />
          <p className="mt-3 ">
            You will be prompted to name your project. Type the name of your project and press Enter.<br/>
            Next, select the project framework. Since we're creating a vanilla project, choose <code className="px-2 py-1 font-mono text-sm rounded-md">vanilla</code>.
          </p>
        </div>
      </li>

      <li className="ml-4">
        <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold ">Navigate to Your Project Directory:</h3>
          <p className="mb-3 ">
            Move into your newly created project directory:
          </p>
          <CodeBlock
            code={`cd your-project-name`}
            language="bash"
          />
        </div>
      </li>

      <li className="ml-4">
        <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold ">Install Dependencies:</h3>
          <p className="mb-3 ">
            Run the following command to install all necessary dependencies:
          </p>
          <CodeBlock
            code={`npm install`}
            language="bash"
          />
        </div>
      </li>

      <li className="ml-4">
        <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold ">Start the Development Server:</h3>
          <p className="mb-3 ">
            This will launch a development server. A development server is useful for testing your application locally and seeing changes in real-time as you make edits to your code. To start the development server, run:
          </p>
          <CodeBlock
            code={`npm run dev`}
            language="bash"
          />
          <p className="mt-3 ">
            Vite will provide a local development server (typically at
            <code className="px-2 py-1 ml-1 font-mono text-sm rounded-md">http://localhost:5173</code>).
          </p>
        </div>
      </li>

      <li className="ml-4">
        <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold ">Build for Production:</h3>
          <p className="mb-3 ">
            When you're ready to deploy, build your application with:
          </p>
          <CodeBlock
            code={`npm run build`}
            language="bash"
          />
          <p className="mt-3 ">
            This command creates an optimized production version of your project in the
            <code className="px-2 py-1 mx-1 font-mono text-sm rounded-md">dist</code> folder. This is used for deployment to a server with a simple static file server.
          </p>
        </div>
      </li>

      <li className="ml-4">
        <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold ">Preview the Production Build:</h3>
          <p className="mb-3 ">
            This is used to preview the production build locally without deploying it to a server. You can preview the production build locally by running:
          </p>
          <CodeBlock
            code={`npm run preview`}
            language="bash"
          />
        </div>
      </li>
    </ol>
    </div>
  );
};

export default ViteVanilla;