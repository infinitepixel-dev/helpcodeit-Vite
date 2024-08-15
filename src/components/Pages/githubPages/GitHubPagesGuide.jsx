import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { ArrowBigUp } from 'lucide-react';

const GitHubPagesGuide = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="container max-w-4xl mx-auto mt-12 mb-28 ">

      <h1 className="mb-6 text-3xl font-bold">Comprehensive Guide to Hosting a Project on GitHub Pages</h1>

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Step 1: Set Up a GitHub Repository</h2>
        <ul className="space-y-2 list-inside ">
          <li>
            <p className="font-semibold">Create a GitHub Account:</p>
            <p>If you don't have one already, sign up for a free GitHub account at <a href="https://github.com" className="text-blue-500">github.com</a>.</p>
          </li>
          <li>
            <p className="font-semibold">Create a New Repository:</p>
            <ol className="pl-6 space-y-2 list-decimal list-inside">
              <li>Go to your GitHub profile and click on the "Repositories" tab.</li>
              <li>Click the "New" button to create a new repository.</li>
              <li>Fill in the repository name (e.g., <code className="shadow-none px-1 py-0.5 border-none rounded">my-awesome-project</code>).</li>
              <li>Optionally, add a description.</li>
              <li>Choose whether to make the repository public (recommended for GitHub Pages) or private.</li>
              <li>Check the box to initialize the repository with a <code className="shadow-none px-1 py-0.5 border-none rounded">README</code> file.</li>
              <li>Click the "Create repository" button.</li>
            </ol>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Step 2: Add Your Project Files</h2>
        <ul className="space-y-2 list-inside ">
          <li>
            <p className="font-semibold">Clone the Repository to Your Local Machine:</p>
            <pre>
              <code className="language-bash">
                {`git clone https://github.com/your-username/my-awesome-project.git
cd my-awesome-project`}
              </code>
            </pre>
          </li>
          <li>
            <p className="font-semibold">Add Your Project Files:</p>
            <p>Add your HTML, CSS, JavaScript, and any other static files to this directory. Create an <code className="shadow-none px-1 py-0.5 border-none rounded">index.html</code> file as the entry point of your website.</p>
          </li>
          <li>
            <p className="font-semibold">Commit and Push Your Changes:</p>
            <pre>
              <code className="language-bash">
                {`git add .
git commit -m "Initial commit with project files"
git push origin main`}
              </code>
            </pre>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Step 3: Configure GitHub Pages</h2>
        <ul className="space-y-2 list-inside ">
          <li>
            <p className="font-semibold">Go to Repository Settings:</p>
            <p>On GitHub, navigate to your repository. Click on the "Settings" tab.</p>
          </li>
          <li>
            <p className="font-semibold">Enable GitHub Pages:</p>
            <ol className="pl-6 space-y-2 list-decimal list-inside">
              <li>Scroll down to the "Pages" section.</li>
              <li>Under "Source," select the branch you want to use (usually <code className="shadow-none px-1 py-0.5 border-none rounded">main</code> or <code className="shadow-none px-1 py-0.5 border-none rounded">master</code>).</li>
              <li>Optionally, select the folder (if you have a <code className="shadow-none px-1 py-0.5 border-none rounded">docs</code> folder, for example).</li>
              <li>Click "Save".</li>
            </ol>
          </li>
          <li>
            <p className="font-semibold">Check Your Site:</p>
            <p>After a few moments, GitHub will provide you with a URL where your site is hosted, typically in the format: <code className="shadow-none px-1 py-0.5 border-none rounded">https://your-username.github.io/repository-name</code>. Go to this URL in your web browser to see your hosted project.</p>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Step 4: Update Your Site</h2>
        <ul className="space-y-2 list-inside">
          <li>
            <p className="font-semibold">Make Changes Locally:</p>
            <p>Edit your project files locally on your machine.</p>
          </li>
          <li>
            <p className="font-semibold">Commit and Push Changes:</p>
            <pre>
              <code className="language-bash">
                {`git add .
git commit -m "Description of changes"
git push origin main`}
              </code>
            </pre>
          </li>
          <li>
            <p className="font-semibold">Changes Live:</p>
            <p>Your changes will be live on your GitHub Pages site after a few moments.</p>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Step 5: Custom Domain (Optional)</h2>
        <ul className="space-y-2 list-inside ">
          <li>
            <p className="font-semibold">Set Up a Custom Domain:</p>
            <p>If you have a custom domain, you can configure GitHub Pages to use it. In the repository settings, under the "Pages" section, enter your custom domain.</p>
          </li>
          <li>
            <p className="font-semibold">Configure DNS:</p>
            <p>Update your DNS settings with your domain registrar to point to GitHub Pages. Typically, you will create <code className="shadow-none px-1 py-0.5 border-none rounded">A</code> records pointing to the IP addresses <code className="shadow-none px-1 py-0.5 border-none rounded">185.199.108.153</code>, <code className="shadow-none px-1 py-0.5 border-none rounded">185.199.109.153</code>, <code className="shadow-none px-1 py-0.5 border-none rounded">185.199.110.153</code>, and <code className="shadow-none px-1 py-0.5 border-none rounded">185.199.111.153</code>. You may also need to add a <code className="shadow-none px-1 py-0.5 border-none rounded">CNAME</code> record for your custom domain.</p>
          </li>
          <li>
            <p className="font-semibold">Verify:</p>
            <p>It may take some time for DNS changes to propagate. Once done, your site should be accessible via your custom domain.</p>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Tips</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>Ensure your <code className="shadow-none px-1 py-0.5 border-none rounded">index.html</code> file is correctly set up as it serves as the homepage.</li>
          <li>Use a <code className="shadow-none px-1 py-0.5 border-none rounded">.nojekyll</code> file if your project requires skipping Jekyll processing.</li>
          <li>Regularly commit and push changes to keep your site updated.</li>
        </ul>
      </div>
      <div className="grid justify-center">
  <a href="#top" className="flex items-center text-blue-500 hover:text-blue-700">
    Back to top
    <ArrowBigUp className="ml-1" />
  </a>
</div>
    </div>
  );
};

export default GitHubPagesGuide;