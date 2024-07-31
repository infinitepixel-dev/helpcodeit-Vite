import React from 'react';
import { Link } from 'react-router-dom';
import { Key, GitBranch, GitPullRequest, FileText, UserCheck, GitCommit, GitFork } from 'lucide-react';


import gitHubLogo from '@assets/github-icon-white.svg';

const GitHubMenu = () => {
  const menuItems = [
    { title: 'Setting Up Authentication', path: '/githubPages/GitHubAuthentication', icon: Key },
    { title: 'Making a New Repository and Linking It', path: '/githubPages/AddARepository', icon: GitBranch },
    { title: 'Pushing Updates to an Existing Repository', path: '/githubPages/push', icon: GitPullRequest },
    { title: 'Changing Your Credentials', path: '/githubPages/ChangingGitHubCredentials', icon: UserCheck },
    { title: 'Branching Guide', path: '/githubPages/GitHubBranching', icon: GitFork },
    { title: 'Cheatsheet of Git Commands for CLI', path: '/githubPages/GitHubCheatsheet', icon: FileText },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white flex items-center">
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
                className="flex py-2 px-4 text-gray-300 hover:bg-blue-800 hover:text-white rounded transition duration-500 ease-in-out"
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