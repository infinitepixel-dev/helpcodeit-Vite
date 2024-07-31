import React from 'react';
import { ChevronDown, ChevronUp, Github, Terminal, Cog } from 'lucide-react';

const Section = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full p-4 rounded-lg hover:opacity-80 transition-opacity"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {icon}
          <h2 className="ml-2 text-xl font-semibold">{title}</h2>
        </div>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && <div className="mt-4 p-6 rounded-lg shadow">{children}</div>}
    </div>
  );
};

const Instructions = ({ steps }) => (
  <ol className="list-decimal list-inside">
    {steps.map((step, index) => (
      <li key={index} className="mb-3 text-lg">{step}</li>
    ))}
  </ol>
);

const CodeBlock = ({ code }) => (
  <pre className="p-4 rounded-md overflow-x-auto my-4 ">
    <code className="text-sm  md:text-base overridecode">{code}</code>
  </pre>
);

export default function ChangingGitHubCredentials() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Changing GitHub User Credentials Locally</h1>

        <div className="space-y-8">
          <Section title="If Using GitHub Desktop (we don't recommend it)" icon={<Github size={28} className="text-blue-500" />}>
            <h3 className="font-semibold mb-4 text-xl">Log Out:</h3>
            <Instructions steps={[
              "Open GitHub Desktop.",
              "Click on \"File\" in the menu bar.",
              "Select \"Options\" (on Windows) or \"Preferences\" (on Mac).",
              "Click \"Sign Out\" under the \"Accounts\" section."
            ]} />

            <h3 className="font-semibold mt-6 mb-4 text-xl">Log In:</h3>
            <Instructions steps={[
              "After logging out, click on \"Sign in to GitHub.com\" or \"Sign in to GitHub Enterprise\".",
              "Enter the credentials for the new GitHub username."
            ]} />
          </Section>

          <Section title="Command Line (Git CLI)" icon={<Terminal size={28} className="text-green-500" />}>
            <h3 className="font-semibold mb-4 text-xl">Clear Existing Credentials:</h3>
            <Instructions steps={[
              "Open a terminal or command prompt.",
              "Run the following command to clear the existing credentials:"
            ]} />
            <CodeBlock code="git credential-cache exit" />

            <h3 className="font-semibold mt-6 mb-4 text-xl">Remove Cached Credentials (if applicable):</h3>
            <p className="mb-4 text-lg">If your credentials are stored in the Git credentials manager, you can remove them using the following commands based on your OS:</p>
            <h4 className="font-semibold mt-4 mb-2 text-lg">Windows:</h4>
            <CodeBlock code="cmdkey /delete:git:https://github.com" />
            <h4 className="font-semibold mt-4 mb-2 text-lg">macOS:</h4>
            <CodeBlock code="git credential-osxkeychain erase" />
            <h4 className="font-semibold mt-4 mb-2 text-lg">Linux:</h4>
            <CodeBlock code="git config --global --unset credential.helper" />

            <h3 className="font-semibold mt-6 mb-4 text-xl">Log In with New Credentials:</h3>
            <p className="text-lg">The next time you perform a Git operation (e.g., git push or git pull), you will be prompted to enter the new credentials for the new GitHub username you want to use.</p>
          </Section>

          <Section title="Update Git Config" icon={<Cog size={28} className="text-purple-500" />}>
            <h3 className="font-semibold mb-4 text-xl">Update Global Config:</h3>
            <Instructions steps={[
              "Run the following commands to update the global configuration:"
            ]} />
            <CodeBlock code={`git config --global user.name "YourGithubUsername"
git config --global user.email "YourGithubEmail@example.com"`} />
          </Section>
        </div>
      </div>
    </div>
  );
}