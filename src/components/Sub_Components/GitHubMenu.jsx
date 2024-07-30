import React from 'react';
import { Link } from 'react-router-dom';

import gitHubLogo from '@assets/github-icon-white.svg';

const GitHubMenu = () => {
  const menuItems = [
    { title: 'Setting up a Repo', path: '/githubPages/setup' },
    { title: 'Pushing Updates', path: '/githubPages/push' },
    { title: 'Authentication', path: '/gitHubPages/auth' },
    { title: 'Troubleshooting', path: '/githubPages/troubleshoot' },
    { title: 'Cheatsheet', path: '/githubPages/GitHubCheatsheet' },
    { title: 'Changing Credentials', path: '/githubPages/ChangingGitHubCredentials' },
    { title: 'Branching', path: '/githubPages/GitHubBranching' },
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
                className="block py-2 px-4 text-gray-300 hover:bg-blue-500 hover:text-white rounded transition duration-150 ease-in-out"
              >
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