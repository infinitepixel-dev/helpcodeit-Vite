import React, { useState } from 'react'
import { Copy } from 'lucide-react'
import gitLogoDark from '../../../assets/github-icon-white.svg'
import gitLogoLight from '../../../assets/github-icon.svg'
import { Helmet } from 'react-helmet-async'

const commands = [
    {
        category: 'Getting Started',
        items: [
            {
                command: 'git init',
                explanation:
                    'Creates a new Git repository in your current folder. It\'s like telling Git, "Hey, I want to start tracking changes in this project!"',
            },
            {
                command: 'git clone https://github.com/username/repository.git',
                explanation:
                    "Makes a copy of a project from GitHub onto your computer. It's like downloading a project to work on it locally.",
            },
            {
                command: 'git config --global user.name "Your Name"',
                explanation:
                    "Sets up your name for Git to use when you make changes. It's like signing your work.",
            },
            {
                command:
                    'git config --global user.email "your_email@example.com"',
                explanation:
                    'Sets up your email for Git. This helps identify who made what changes.',
            },
        ],
    },
    {
        category: 'Making Changes',
        items: [
            {
                command: 'git add filename.txt',
                explanation:
                    'Tells Git to start tracking changes in a specific file. It\'s like saying, "Pay attention to this file, I might want to save the changes later."',
            },
            {
                command: 'git add .',
                explanation:
                    'Tells Git to track changes in all files in the current directory. It\'s like saying, "Pay attention to everything here."',
            },
            {
                command: 'git commit -m "Your message here"',
                explanation:
                    "Saves your changes with a descriptive message. It's like taking a snapshot of your project at this point in time.",
            },
            {
                command: 'git commit -am "Your message here"',
                explanation:
                    "Adds all changes and commits them in one step. It's a shortcut for `git add .` followed by `git commit -m`.",
            },
        ],
    },
    {
        category: 'Checking Status and History',
        items: [
            {
                command: 'git status',
                explanation:
                    "Shows you what's going on in your project. It tells you which files have changes that haven't been saved yet.",
            },
            {
                command: 'git log',
                explanation:
                    "Shows a history of all the saves (commits) you've made. It's like a timeline of your project.",
            },
            {
                command: 'git diff',
                explanation:
                    "Shows the differences between your current files and the last commit. It's like highlighting what's changed since your last save.",
            },
        ],
    },
    {
        category: 'Working with Branches',
        items: [
            {
                command: 'git branch',
                explanation:
                    "Lists all the branches in your repository. It's like showing all the different versions or timelines of your project.",
            },
            {
                command: 'git branch new-branch-name',
                explanation:
                    "Creates a new branch. It's like starting a new timeline for your project where you can make changes without affecting the main version.",
            },
            {
                command: 'git checkout branch-name',
                explanation:
                    "Switches to a different branch. It's like jumping to a different timeline of your project.",
            },
            {
                command: 'git merge branch-name',
                explanation:
                    "Combines changes from one branch into your current branch. It's like bringing the changes from one timeline into another.",
            },
        ],
    },
    {
        category: 'Working with GitHub',
        items: [
            {
                command: 'git push origin main',
                explanation:
                    "Uploads your local changes to GitHub. It's like publishing your work for others to see.",
            },
            {
                command: 'git pull origin main',
                explanation:
                    "Downloads the latest changes from GitHub to your computer. It's like syncing your local copy with the online version.",
            },
            {
                command:
                    'git remote add origin https://github.com/username/repository.git',
                explanation:
                    "Links your local repository to a GitHub repository. It's like connecting your local project to its online home.",
            },
        ],
    },
    {
        category: 'Undoing Changes',
        items: [
            {
                command: 'git reset HEAD~1',
                explanation:
                    "Undoes the last commit but keeps the changes in your working directory. It's like un-saving your last changes but not erasing them.",
            },
            {
                command: 'git reset --hard HEAD~1',
                explanation:
                    "Undoes the last commit and discards the changes. It's like going back in time and erasing the last changes completely. Be careful with this!",
            },
            {
                command: 'git revert HEAD',
                explanation:
                    'Creates a new commit that undoes the changes from the last commit. It\'s like adding an "undo" action to your project\'s timeline.',
            },
            {
                command: 'git checkout -- filename.txt',
                explanation:
                    "Discards changes in a specific file, reverting it to the last committed version. It's like using an eraser on recent changes in one file.",
            },
        ],
    },
]

const CommandItem = ({ command, explanation }) => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-md  dark:bg-neutral-800">
            <Helmet>
                <title>Git and GitHub Cheatsheet | Help Code It</title>
                <meta
                    name="description"
                    content="Explore essential Git and GitHub commands for beginners. Learn how to get started, make changes, check status, work with branches, and more."
                />
                <meta
                    name="keywords"
                    content="Git, GitHub, version control, commands, cheatsheet, beginners, development, collaboration"
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/fundamentals/GitHubCheatsheet"
                />
            </Helmet>
            <div className="m-px flex items-center justify-between rounded-lg border-2  bg-slate-400  p-3 dark:border-white dark:bg-zinc-600 dark:text-white">
                <code className="rounded-sm bg-white px-1 font-mono font-semibold text-blue-700 dark:bg-black dark:text-white ">
                    {command}
                </code>
                <button
                    onClick={copyToClipboard}
                    className="text-white transition-colors duration-200 hover:text-blue-600"
                >
                    <Copy size={18} />
                </button>
            </div>
            <p className="p-3 text-sm text-gray-700 dark:text-white">
                {explanation}
            </p>
            {copied && (
                <div className="bg-green-400 p-1 text-center text-xs text-green-800">
                    Copied to clipboard!
                </div>
            )}
        </div>
    )
}

const GitHubCheatsheet = () => {
    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return (
        <div className="mx-auto max-w-4xl p-6">
            <div className="mb-10 flex h-full items-center justify-center">
                <h1 className="text-center text-3xl font-bold">
                    Git and GitHub Cheatsheet for Beginners
                </h1>
                <img
                    src={isDark ? gitLogoDark : gitLogoLight}
                    alt="github"
                    width="50"
                    className="ms-4"
                />
            </div>
            {commands.map((category, index) => (
                <div key={index} className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold ">
                        {category.category}
                    </h2>
                    {category.items.map((item, itemIndex) => (
                        <CommandItem
                            key={itemIndex}
                            command={item.command}
                            explanation={item.explanation}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GitHubCheatsheet
