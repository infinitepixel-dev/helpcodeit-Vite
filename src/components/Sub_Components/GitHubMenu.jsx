import { Link } from 'react-router-dom'
import gitHubLogo from '@assets/github-icon-white.svg'
import { lazy, Suspense } from 'react'

const GitHubMenu = () => {
    const menuItems = [
        {
            title: 'Setting Up Authentication',
            path: '/githubPages/GitHubAuthentication',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.Key,
                }))
            ),
        },
        {
            title: 'Making a New Repository and Linking It',
            path: '/githubPages/AddARepository',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.GitBranch,
                }))
            ),
        },
        {
            title: 'Pushing Updates to an Existing Repository',
            path: '/githubPages/push',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.GitPullRequest,
                }))
            ),
        },
        {
            title: 'Changing Your Credentials',
            path: '/githubPages/ChangingGitHubCredentials',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.UserCheck,
                }))
            ),
        },
        {
            title: 'Branching Guide',
            path: '/githubPages/GitHubBranching',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.GitFork,
                }))
            ),
        },
        {
            title: 'Cheatsheet of Git Commands for CLI',
            path: '/githubPages/GitHubCheatsheet',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.FileText,
                }))
            ),
        },
        {
            title: 'Common Problems and Solutions',
            path: '/githubPages/GitProbAndAnswers',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.GitCommit,
                }))
            ),
        },
        {
            title: 'Comprehensive Guide to Hosting a Project on GitHub Pages',
            path: '/githubPages/GitHubPagesGuide',
            icon: lazy(() =>
                import('lucide-react').then((module) => ({
                    default: module.GitCommit,
                }))
            ),
        },
    ]

    return (
        <div className="rounded-lg bg-gray-800 p-4 shadow-md">
            <div className="mb-4 flex items-center justify-between">
                <div className="mx-auto">
                    <h2 className="flex items-center text-4xl font-bold text-white">
                        <img
                            src={gitHubLogo}
                            alt="logo for github"
                            width={50}
                            className="me-4"
                        />{' '}
                        GitHub Navigation
                    </h2>
                </div>
            </div>
            <nav>
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Link
                                    to={item.path}
                                    className="flex rounded px-4 py-2 text-gray-300 transition duration-500 ease-in-out hover:bg-blue-800 hover:text-white"
                                >
                                    <item.icon className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    {item.title}
                                </Link>
                            </Suspense>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default GitHubMenu
