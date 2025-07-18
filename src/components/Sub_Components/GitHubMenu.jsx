import React from 'react';
import { Link } from 'react-router-dom';
import { Key, GitBranch, GitPullRequest, FileText, UserCheck, GitCommit, GitFork } from 'lucide-react';


import gitHubLogo from '@assets/github-icon-white.svg';
import path from 'path';

const GitHubMenu = () => {
  const menuItems = [
    { title: 'Lets Setup a New Repository', path: '/githubPages/AddARepository', icon: GitBranch },
    { title: 'I want to update code in my repository', path: '/githubPages/push', icon: GitCommit },
    { title: 'Setting Up Authentication - Only needed the first time using GitHub on your system', path: '/githubPages/GitHubAuthentication', icon: Key },
    { title: 'Changing Your Credentials - Only when changing to a different github account', path: '/githubPages/ChangingGitHubCredentials', icon: UserCheck },
    { title: 'Branching Guide', path: '/githubPages/GitHubBranching', icon: GitFork },
    { title: 'Cheatsheet of Git Commands for CLI', path: '/githubPages/GitHubCheatsheet', icon: FileText },
    { title: 'Common Problems and Solutions', path: '/githubPages/GitProbAndAnswers', icon: GitPullRequest },
    { title: 'Comprehensive Guide to Hosting a Project on GitHub Pages', path: '/githubPages/GitHubPagesGuide', icon: GitCommit },
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="mx-auto">
            <h2 className="flex items-center text-4xl font-bold text-white">
              <img src={gitHubLogo} alt='logo for github' width={50} className='me-4' /> GitHub Navigation
            </h2>
        </div>

      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>

              <Link
                to={item.path}
                className="flex px-4 py-2 text-gray-300 transition duration-500 ease-in-out rounded hover:bg-blue-800 hover:text-white"
              >
                <item.icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                 {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GitHubMenu;