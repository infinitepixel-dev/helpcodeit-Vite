import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const PracticeProblems = () => {
    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    return (
        <div className="mx-auto  min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="container flex flex-wrap">
                <div className="mt-20 pt-20 md:w-1/4 ">
                    <div className="center me-20 flex min-w-fit flex-col items-center rounded-t-2xl border-2 border-black pb-5 dark:bg-slate-500">
                        <h2 className="rounded-t-xl bg-blue-500 p-2 text-center text-xl font-bold text-white dark:bg-blue-800">
                            Links to Practice Problems
                        </h2>
                        <div className="w-full pt-2 text-center text-2xl">
                            <a
                                href="https://github.com/movarnell/JavaScript-Data-Types-and-Problems.git"
                                target="_blank"
                                rel="noreferrer"
                                className="list-group-item list-group-item-action text-2xl hover:text-3xl hover:text-blue-800"
                            >
                                Data Types
                            </a>
                            <hr />
                            <a
                                href="https://github.com/movarnell/JavaScript-Functions-Extra-Problems.git"
                                target="_blank"
                                rel="noreferrer"
                                className="list-group-item list-group-item-action text-2xl hover:text-3xl hover:text-blue-800"
                            >
                                Functions
                            </a>
                            <hr />
                            <a
                                href="https://github.com/movarnell/JavaScript-Conditionals-Extra-Practice.git"
                                target="_blank"
                                rel="noreferrer"
                                className="list-group-item list-group-item-action text-2xl hover:text-3xl hover:text-blue-800"
                            >
                                Conditionals
                            </a>
                            <hr />
                            <a
                                href="https://github.com/movarnell/JavaScript-Loop-Problems-for-Students.git"
                                target="_blank"
                                rel="noreferrer"
                                className="list-group-item list-group-item-action text-2xl hover:text-3xl hover:text-blue-800"
                            >
                                Loops
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full py-20 md:w-3/4">
                    <h1 className="mb-6 text-center text-6xl">
                        JavaScript Practice Problems
                    </h1>
                    <hr className="my-5 border-2 dark:border-white" />
                    <h2 className="mb-4 text-center text-4xl">
                        Code Problems Site
                    </h2>
                    <p>
                        The following site is a great resource for practicing
                        coding problems. It has a wide variety of problems that
                        you can work on to improve your coding skills.
                    </p>
                    <div className="w-fit p-2 shadow-lg mx-auto mt-auto rounded-3xl border text-center border-black border-2 dark:border-white">
                        <p>Click the link below to go to the site:</p>
                        <a
                            href="https://codeproblems.michaelvarnell.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl underline hover:text-blue-800"
                        >
                            Code Problems Site
                        </a>
                    </div>
                    <hr className="my-5 border-2 dark:border-white" />
                    <h2 className="mb-4 text-center text-4xl">
                        How to Clone in GitHub
                    </h2>
                    <p>
                        Cloning a repository is a way to download the code from
                        a repository to your local machine. This is the first
                        step in being able to work on the code locally. The
                        problems in the repositories listed above will need to
                        be cloned down to your local machine in order to work on
                        them.
                    </p>
                    <p>
                        There are two ways to clone a repository. The first is
                        to use the command line. The second is to use the VS
                        Code GUI. I will show you both ways.
                    </p>
                    <hr className="my-5 border-2 dark:border-white" />

                    <h3 className="mt-6 text-center text-3xl">
                        Cloning a Repository Using the Command Line
                    </h3>
                    <p>
                        First, you will need to copy the link to the repository
                        you want to clone. You can do this by clicking on the
                        green code button and copying the link.
                    </p>
                    <p>
                        Next, you will need to open your terminal and navigate
                        to the folder where you want to clone the repository.
                        You can do this by using the cd command. For example, if
                        I wanted to clone the repository to my desktop, I would
                        type cd desktop. In VS Code, you can open the folder you
                        want to put the repository in and then right-click on
                        the folder and select open in integrated terminal.
                    </p>
                    <p>
                        Once you are in the folder you want to clone the
                        repository to, you will type git clone and then paste
                        the link to the repository. It should look something
                        like this:
                    </p>
                    <pre>
                        <code className="language-bash text-sm">
                            git clone "repository-link"
                        </code>
                    </pre>
                    <p>
                        Once you have typed this, you will hit enter and the
                        repository will be cloned to your local machine.
                    </p>
                    <hr className="my-5 border-2 dark:border-white" />

                    <h3 className="mt-6 text-center text-3xl">
                        Cloning a Repository Using the VS Code GUI
                    </h3>
                    <p>
                        First, you will need to copy the link to the repository
                        you want to clone. You can do this by clicking on the
                        green code button and copying the link.
                    </p>
                    <p>
                        Then you will go to the source control tab in VS Code.
                        You can do this by clicking on the icon that looks like
                        a branch with a magnifying glass. Then you will click on
                        the clone repository button. It looks like a folder with
                        an arrow pointing down. You will then paste the link to
                        the repository in the box that pops up and hit enter.
                    </p>
                    <p>
                        Once you have done this, you will be prompted to select
                        a folder to clone the repository to. You will select the
                        folder you want to clone the repository to and then
                        click select repository location.
                    </p>
                    <p>
                        Once you have done this, the repository will be cloned
                        to your local machine.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PracticeProblems
