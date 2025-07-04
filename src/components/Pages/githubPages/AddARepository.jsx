import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';

const AddARepository = () => {
  const commands = `
  # Navigate to your project directory
  cd path/to/your/project

  # Initialize Git repository
  git init

  # Add remote repository
  git remote add origin https://github.com/your-username/my-new-repo.git

  # Create initial file and add to staging
  echo "# My New Repo" > README.md
  git add README.md

  # Commit the changes
  git commit -m "Initial commit"

  # Push to GitHub
  git push -u origin master

  # Add remaining files
  git add .
  git commit -m "Add all project files"
  git push
  `;

  let initialCommit = `echo "# My New Repo" > README.md
git add README.md
git commit -m "Initial commit"
git push -u origin master`;

  let addFiles = `git add .
git commit -m "Add all project files"
git push`;

  return (
    <div className="container grid justify-center">
      <h1 className="my-8 text-5xl font-bold">How to Create a <br /> GitHub Repository <br />and Add Files</h1>
      <ol className="list-inside">
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Create a New Repository on GitHub</h2>
          <p className="ml-4">
            1. Log in to GitHub and click the "+" icon at the top-right corner, then select "New repository".
            <br />
            2. Enter a repository name (e.g., <span className="font-mono italic">my-new-repo</span>).
            <br />
            3. Optionally add a description.
            <br />
            4. Choose the repository visibility: Public or Private.
            <br />
            5. <strong>DO NOT</strong> initialize the repository with a README, .gitignore, or license.
            <br />
            6. Click the "Create repository" button.
          </p>
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Set Up Local Repository</h2>
          <p className="ml-4">
            1. Open your terminal or command prompt.
            <br />
            2. Navigate to the correct directory where you want to initialize your Git repository.
            <br />
            <strong>Warning:</strong> Make sure you are in the right folder before proceeding.
          </p>
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Initialize Local Repository</h2>
          <p className="ml-4">Run the following command to initialize a new Git repository in your current directory:</p>
          <CodeBlock code="git init" language="bash" />
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Add Remote Repository</h2>
          <p className="ml-4">Copy the repository URL from GitHub and run the following command:</p>
          <CodeBlock code="git remote add origin https://github.com/your-username/my-new-repo.git" language="sh" />
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Create and Push Initial Commit</h2>
          <p className="ml-4">
            Create a README file or another initial file, add it to the staging area, commit it, and push to GitHub:
          </p>
          <CodeBlock code={initialCommit} language="bash" />
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Add Additional Files</h2>
          <p className="ml-4">Add the remaining files, commit, and push the changes:</p>
          <CodeBlock code={addFiles} language="bash" />
        </li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold">Summary of Commands</h2>
      <p className="mb-4">These are the command listed in the box with the copy button just under the box containing the address of the repository. Feel free to copy the ones on the GitHub page and paste them in your terminal.</p>
      <CodeBlock code={commands} language="bash" />
      <h2 className="mt-6 text-xl font-semibold">Warnings and Tips</h2>
      <ul className="mb-5 ml-4 list-disc list-inside">
        <li>Ensure you are in the correct directory before running <span className='italic'>git init</span>.</li>
        <li>Do not change any settings during repository creation other than naming the repository.</li>
        <li>Use meaningful commit messages to keep track of changes.</li>
        <li>Check the status of your repository with <span className='italic'>git status</span> to see which files are staged for commit.</li>
      </ul>
      <div className="grid grid-cols-2 my-10">
          <div className='grid justify-center col-span-2 lg:col-span-1 min-w-fit'>
          <h2 className="mt-6 text-xl font-semibold text-center">Terminal Video Tutorial</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sIUTpwiRXfs?si=QrheJgtJerUkgWsW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="grid justify-center col-span-2 lg:col-span-1 min-w-fit">
              <h2 className="mt-6 text-xl font-semibold text-center">VS Code Source Control Video Tutorial</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5Cvq9zM5qVE?si=dAqPFfhcK-s1uHM2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
      </div>
    </div>
  );
};

export default AddARepository;