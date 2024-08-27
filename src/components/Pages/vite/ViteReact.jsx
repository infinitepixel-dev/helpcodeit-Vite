import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';
import viteLogo from '@assets/ViteJSlogo.svg';

const ViteReact = () => {
  return (
    <div className="container p-4 mb-24">
      <div className="inline-flex align-middle">
        <h1 className="my-auto mb-8 text-5xl font-bold text-balance">Starting Your React Project Using Vite</h1>
          <img src={viteLogo} alt="Vite Logo" className="w-24 h-24 mx-auto" />
      </div>
      <h2 className="mb-4 text-2xl font-bold"> Why Use Vite?

</h2>
        <p className="mb-4"> Vite is a modern build tool that provides a fast and optimized development environment for building web applications. It leverages native ES module imports in the browser during development, eliminating the need for bundling tools like Webpack or Parcel. This results in faster build times and a more efficient development experience. Vite also supports features like hot module replacement (HMR), automatic optimizations, and pre-configured tools like ESLint and TypeScript, making it an excellent choice for React projects.</p>
        <h2 className="mb-4 text-2xl font-bold">What is Vite-React?</h2>
        <p className="mb-4">Vite-React is a project template that combines Vite's fast build tooling with React's component-based library for building user interfaces. By using Vite-React, you can take advantage of Vite's features like HMR, optimized builds, and out-of-the-box support for modern JavaScript and React development. This allows you to focus on building your React application without worrying about complex build configurations or slow development cycles.</p>
        <h2 className="mb-4 text-2xl font-bold">Key Features of Vite-React:</h2>
        <ul className="mb-4 list-disc list-inside">
            <li className="mt-2">
                <strong>Fast Development Server:</strong>
                <p className="ml-4">
                    Vite-React comes with a fast development server that supports Hot Module Replacement (HMR), allowing you to see instant updates in the browser as you make changes to your React components.
                </p>
            </li>
            <li className="mt-2">
                <strong>Optimized Builds:</strong>
                <p className="ml-4">
                    Vite-React automatically optimizes and bundles your React application for production, resulting in smaller bundle sizes, faster load times, and improved performance.
                </p>
            </li>
            <li className="mt-2">
                <strong>Modern JavaScript and React Support:</strong>
                <p className="ml-4">
                    Vite-React supports modern JavaScript features like ES modules, async/await, and arrow functions, as well as JSX syntax and React components out of the box.
                </p>
            </li>
            <li className="mt-2">
                <strong>Pre-configured Tools:</strong>
                <p className="ml-4">
                    Vite-React comes with pre-configured tools like ESLint for code linting, Prettier for code formatting, and TypeScript for type checking, ensuring code quality and consistency in your React project.
                </p>
            </li>
            <li className="mt-2">
                <strong>Customizable Configuration:</strong>
                <p className="ml-4">
                    Vite-React allows you to customize the build configuration to suit your project's specific requirements, such as adding custom plugins, configuring CSS preprocessors, or integrating testing frameworks.
                </p>
            </li>
        </ul>

<hr className="mb-4 border-black border-1 dark:border-white"  />

      <h2 className="mb-4 text-2xl font-bold">Process for Creating a Vite-React Application</h2>

      <ol className="space-y-8 list-decimal list-outside">
        <li className="ml-4">
          <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold">Install Node.js:</h3>
            <p>
              Before you can create a Vite project, ensure that you have Node.js installed on your system.
              You can download and install it from
              <a href="https://nodejs.org/" className="ml-1 text-blue-600 underline transition-colors duration-300 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Node.js</a>.
            </p>
          </div>
        </li>

        <li className="ml-4">
          <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold">Create a New Vite-React Project:</h3>
            <p className="mb-3">
              Open your terminal and run the following command to create a new Vite-React project:
            </p>
            <CodeBlock
              code={`npm create vite@latest`}
              language="bash"
            />
            <p className="mt-3">
              You will be prompted to name your project. Type the name of your project and press Enter.<br/>
              Next, select the project framework. Since we're creating a Vite-React project, choose <code className="px-2 py-1 font-mono text-sm rounded-md">react</code>.
            </p>
          </div>
        </li>

        <li className="ml-4">
          <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold">Navigate to Your Project Directory:</h3>
            <p className="mb-3">
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
            <p className="mb-3">
              This will launch a development server. To start the development server, run:
            </p>
            <CodeBlock
              code={`npm run dev`}
              language="bash"
            />
            <p className="mt-3">
              Vite will provide a local development server (typically at <code className="px-2 py-1 ml-1 font-mono text-sm rounded-md">http://localhost:5173</code>).
            </p>
          </div>
        </li>

        <li className="ml-4">
          <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold ">Build for Production:</h3>
            <p className="mb-3">
              When you're ready to deploy, build your application with:
            </p>
            <CodeBlock
              code={`npm run build`}
              language="bash"
            />
            <p className="mt-3">
              This command creates an optimized production version of your project in the <code className="px-2 py-1 mx-1 font-mono text-sm rounded-md">dist</code> folder. This is used for deployment to a server with a simple static file server.
            </p>
          </div>
        </li>

        <li className="ml-4">
          <div className="p-6 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md dark:bg-slate-700 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold ">Preview the Production Build:</h3>
            <p className="mb-3">
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

export default ViteReact;
