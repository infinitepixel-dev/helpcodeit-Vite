import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import githubFlow from '@assets/CleanShot 2023-12-05 at 12.18.20.png'
import DetailedGitWorkflow from '@subComponents/DetailedGitWorkflow';
import CodeBlock from '@subComponents/CodeBlock'



const PushingUpdates = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const workflowCode = `
  # If working with others and you're not sure
  # if your local repository is up-to-date
  git pull

  # Add all changes to staging
  git add .

  # Commit changes with a message
  git commit -m "Your commit message"

  # Push changes to remote repository
  git push
  `;

  return (
    <div className="container p-4 mx-auto rounded-lg shadow-md">

      <h1 className="mb-6 text-4xl font-bold text-center">GitHub Workflow</h1>
  <div className="p-6 mt-8 rounded-lg shadow-sm">
    <div className="flex items-center justify-center h-16 space-x-4 text-2xl">
      <div className={`transition-all duration-200 transform ${animationStep >= 1 ? 'scale-110 text-green-500' : 'dark:text-gray-100 light:text-gray-700'}`}>
        git add <strong>.</strong>
      </div>
      <div className={`transition-all duration-200 transform ${animationStep >= 2 ? 'scale-110 text-blue-500' : 'dark:text-gray-100 light:text-gray-700'}`}>
        →
      </div>
      <div className={`transition-all duration-200 transform ${animationStep >= 2 ? 'scale-105 text-blue-500' : 'dark:text-gray-100 light:text-gray-700'}`}>
        git commit -m "Your commit message"
      </div>
      <div className={`transition-all duration-200 transform ${animationStep >= 3 ? 'scale-110 text-purple-500' : 'dark:text-gray-100 light:text-gray-700'}`}>
        →
      </div>
      <div className={`transition-all duration-200 transform ${animationStep >= 3 ? 'scale-110 text-purple-500' : 'dark:text-gray-100 light:text-gray-700'}`}>
        git push
      </div>
    </div>
  </div>

      <div className="grid justify-center p-6 rounded-lg shadow-sm ">
        <h2 className="text-2xl font-semibold text-center">Basic Git Commands</h2>
        <p className="mb-4 text-lg text-center">Use these commands to push updates to your repository</p>
      <CodeBlock
          language="bash"
          code={workflowCode}
        />
      </div>

<div className='grid justify-center'>
<img
                        src={githubFlow}
                        alt="Diagram of github workflow"
                        className="rounded-lg"
                    />
</div>

      <div className="p-6 mt-8 rounded-lg shadow-sm">
      <DetailedGitWorkflow />
        <h2 className="mb-4 text-2xl font-semibold ">Tips</h2>
        <ul className="list-disc list-inside ">
          <li>Always check your changes with <code className="px-1 border-none rounded shadow-none ">git status</code> before committing</li>
          <li>Write clear and concise commit messages</li>
          <li>Push your changes regularly to keep your remote repository up-to-date</li>
        </ul>
      </div>
    </div>
  );
};

export default PushingUpdates;