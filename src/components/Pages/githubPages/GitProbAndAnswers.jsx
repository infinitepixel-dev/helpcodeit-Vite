import React from "react";
import { Helmet } from "react-helmet-async";

const GitProbAndAnswers = () => {
  const problems = [
    {
      problem: "Accidentally committed to the wrong branch",
      commands: `git checkout correct-branch\n
  git merge wrong-branch`,
      explanation:
        "You switch to the correct branch, then merge the changes from the wrong branch into it, essentially moving your work.",
    },
    {
      problem: "Forgot to add a `.gitignore` file before committing",
      commands: `touch .gitignore\n
  echo "filename" >> .gitignore\n
  git rm -r --cached .\n
  git add .\n
  git commit -m "Add .gitignore and remove unnecessary files"`,
      explanation:
        "Create a `.gitignore` file, list files to ignore, untrack files already committed, then recommit only the necessary files.",
    },
    {
      problem: "Pushed sensitive information (e.g., passwords)",
      commands: `git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch PATH_TO_FILE' --prune-empty --tag-name-filter cat -- --all\n
  git push origin --force --all`,
      explanation:
        "This rewrites the history of your repository to remove sensitive information, then force pushes the cleaned history back.",
    },
    {
      problem: "Merge conflict during a pull or merge",
      commands: `git status\n
  git merge branch-name\n
  **Resolve conflicts in files**\n
  git add resolved-file\n
  git commit`,
      explanation:
        "Check for conflicting files, manually resolve the conflicts in your code editor, then mark them as resolved and commit.",
    },
    {
      problem: "Need to undo the last commit",
      commands: `git reset --soft HEAD~1\n
  or\n
  git reset --hard HEAD~1`,
      explanation:
        "Undo the last commit. The `--soft` option keeps your changes for you to edit, while `--hard` completely removes them.",
    },
    {
      problem: "Detached HEAD state (committed to no branch)",
      commands: `git checkout branch-name\n
  git merge HEAD\n
  git branch -d no-branch`,
      explanation:
        "Switch to the correct branch, merge your changes, and delete the temporary branch you were on to clean up your workspace.",
    },
    {
      problem: "Local changes not showing after a pull",
      commands: `git stash\n
  git pull origin branch-name\n
  git stash pop`,
      explanation:
        "Temporarily save your local changes, pull the latest changes from the remote branch, then reapply your local changes.",
    },
    {
      problem: "Accidentally deleted a branch",
      commands: `git reflog\n
  git checkout -b branch-name commit-id`,
      explanation:
        "View the history of your actions to find the deleted branch, then recreate the branch using the correct commit ID.",
    },
    {
      problem: "Mistakenly pushed to the wrong repository",
      commands: `git remote set-url origin correct-repository-url\n
  git push origin branch-name`,
      explanation:
        "Change the remote repository URL to the correct one, then push your branch to the correct location.",
    },
    {
      problem: "Need to change the last commit message",
      commands: `git commit --amend -m "New commit message"`,
      explanation:
        "Modify the message of the most recent commit without changing the actual content or code of that commit.",
    },
    {
      problem: "Roll back to a specific commit",
      commands: `git reset --hard commit-id\n
  git push --force origin branch-name`,
      explanation:
        "This command resets your current branch to the specific commit. The `--hard` option removes all changes after that commit. You then force push this change to the remote repository to align it with your local branch.",
    },
  ];

  return (
    <div className="container p-4 mx-auto my-8 mb-28">
      <Helmet>
        <title>Common GitHub Problems and Solutions</title>
        <meta name="description" content="Common GitHub problems and solutions, including how to fix them using Git commands." />
      <meta name="keywords" content="GitHub, Git, common problems, solutions, fix, commands" />
      <meta name="canonical" href="https://justinto.dev/githubPages/GitProbAndAnswers" />
      </Helmet>

      <h1 className="mb-4 text-4xl font-bold text-balance">Common GitHub Problems and Solutions</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-collapse border-gray-300 table-auto">
          <thead>
            <tr className="bg-gray-500">
              <th className="p-2 bg-gray-200 border border-gray-300 dark:bg-gray-600 dark: dark:text-white">Common Problem</th>
              <th className="p-2 bg-gray-200 border border-gray-300 dark:bg-gray-600 dark: dark:text-white">Commands to Fix It</th>
              <th className="p-2 bg-gray-200 border border-gray-300 dark:bg-gray-600 dark: dark:text-white">Explanation (Simple Terms)</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-slate-500">
                <td className="p-2 border border-gray-300">{item.problem}</td>
                <td className="p-2 whitespace-pre-wrap border border-gray-300">
                  <code className="border-none shadow-none">{item.commands}</code>
                </td>
                <td className="p-2 border border-gray-300">{item.explanation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Got one you want added? Let us know!</p>
      </div>
    </div>
  );
};

export default GitProbAndAnswers;