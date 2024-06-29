import React, { useState, useEffect } from 'react'
import { Plus, GitCommit, Upload, ArrowRight, Moon, Sun } from 'lucide-react'

const DetailedGitWorkflow = () => {
    const [expandedStep, setExpandedStep] = useState(null)
    const [animationProgress, setAnimationProgress] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const animationDuration = 3000 // 3 seconds for a full cycle
        const intervalDuration = 16 // ~60 fps

        const timer = setInterval(() => {
            setAnimationProgress(
                (prevProgress) =>
                    (prevProgress +
                        (intervalDuration / animationDuration) * 100) %
                    100
            )
        }, intervalDuration)

        return () => clearInterval(timer)
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const steps = [
        {
            icon: Plus,
            title: 'git add',
            description: 'Stage changes for commit',
            details: (
                <div>
                    <p className="mb-2">
                        The{' '}
                        <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                            git add
                        </code>{' '}
                        command adds new or changed files in your working
                        directory to the Git staging area.
                    </p>
                    <p className="mb-2">Common usage:</p>
                    <ul className="mb-2 list-inside list-disc">
                        <li>
                            <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                                git add &lt;file&gt;
                            </code>{' '}
                            - Stage a specific file
                        </li>
                        <li>
                            <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                                git add .
                            </code>{' '}
                            - Stage all new and modified files
                        </li>
                    </ul>
                    <p>
                        Use{' '}
                        <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                            git status
                        </code>{' '}
                        to see which files are staged.
                    </p>
                </div>
            ),
        },
        {
            icon: GitCommit,
            title: 'git commit',
            description: 'Record changes to the repository',
            details: (
                <div>
                    <p className="mb-2">
                        The{' '}
                        <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                            git commit
                        </code>{' '}
                        command captures a snapshot of the project&apos;s
                        currently staged changes.
                    </p>
                    <p className="mb-2">Common usage:</p>
                    <ul className="mb-2 list-inside list-disc">
                        <li>
                            <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                                git commit -m &ldquo;Your message
                                here&ldquo;
                            </code>{' '}
                            - Commit with a message
                        </li>
                        <li>
                            <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                                git commit -am &ldquo;Your message here&ldquo;
                            </code>{' '}
                            - Add all changes and commit
                        </li>
                    </ul>
                    <p>
                        Write clear, concise commit messages to describe your
                        changes.
                    </p>
                </div>
            ),
        },
        {
            icon: Upload,
            title: 'git push',
            description: 'Upload local commits to a remote repository',
            details: (
                <div>
                    <p className="mb-2">
                        The{' '}
                        <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                            git push
                        </code>{' '}
                        command uploads your local repository content to a
                        remote repository.
                    </p>
                    <p className="mb-2">Common usage:</p>
                    <ul className="mb-2 list-inside list-disc">
                        <li>
                            <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                                git push origin main
                            </code>{' '}
                            - Push to the main branch
                        </li>
                        <li>
                            <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                                git push -u origin &lt;branch&gt;
                            </code>{' '}
                            - Push a new branch for the first time
                        </li>
                    </ul>
                    <p>
                        Ensure you have the latest changes with{' '}
                        <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
                            git pull
                        </code>{' '}
                        before pushing.
                    </p>
                </div>
            ),
        },
    ]

    return (
        <div
            className={`mx-auto mb-10 rounded-lg p-6 shadow-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold">Git Update Workflow</h2>
                <button
                    onClick={toggleDarkMode}
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>

            <div className="mb-12 space-y-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                    >
                        <div
                            className={`flex cursor-pointer items-center p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                            onClick={() =>
                                setExpandedStep(
                                    expandedStep === index ? null : index
                                )
                            }
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                                <step.icon size={24} />
                            </div>
                            <div className="ml-4">
                                <h3 className="font-mono text-xl text-green-500">
                                    {step.title}
                                </h3>
                                <p
                                    className={
                                        isDarkMode
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                    }
                                >
                                    {step.description}
                                </p>
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transition-transform ${expandedStep === index ? 'rotate-180 transform' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                        {expandedStep === index && (
                            <div
                                className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            >
                                {step.details}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div
                className={`mt-8 rounded border-l-4 border-blue-400 p-4 ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-50 text-blue-700'}`}
            >
                <p>
                    <strong>Pro Tip:</strong> Use{' '}
                    <code
                        className={`rounded px-1 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-100'}`}
                    >
                        git log
                    </code>{' '}
                    to review your commit history and{' '}
                    <code
                        className={`rounded px-1 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-100'}`}
                    >
                        git diff
                    </code>{' '}
                    to see changes before committing.
                </p>
            </div>

            {/* Animated Arrow Workflow */}
            <div className="mt-12 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 ${
                                        animationProgress >= index * 33.33 &&
                                        animationProgress < (index + 1) * 33.33
                                            ? 'scale-125 bg-green-500 text-white'
                                            : `${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'} scale-100`
                                    }`}
                                >
                                    <step.icon size={32} />
                                </div>
                                <p
                                    className={`mt-2 text-center font-mono transition-all duration-300 ${
                                        animationProgress >= index * 33.33 &&
                                        animationProgress < (index + 1) * 33.33
                                            ? 'font-bold text-green-500'
                                            : isDarkMode
                                              ? 'text-gray-300'
                                              : 'text-gray-600'
                                    }`}
                                >
                                    {step.title}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <ArrowRight
                                    size={24}
                                    className={`transition-all duration-300 ${
                                        (animationProgress >=
                                            (index + 1) * 33.33 - 16.67 &&
                                            animationProgress <
                                                (index + 1) * 33.33) ||
                                        (index === steps.length - 2 &&
                                            animationProgress >= 83.33)
                                            ? 'scale-125 text-green-500'
                                            : `${isDarkMode ? 'text-gray-500' : 'text-gray-400'} scale-100`
                                    }`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailedGitWorkflow
