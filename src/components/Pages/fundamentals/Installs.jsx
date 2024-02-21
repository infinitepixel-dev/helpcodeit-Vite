import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import homebrewlogo from '../../../assets/homebrew.svg'
import nodeLogo from '../../../assets/nodejs.svg'
import vsCodeLogo from '../../../assets/visual-studio-code.svg'

function Installs() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const homebrew = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

    const nodeUsingHomebrew = `brew install node`

    return (
        <div className="pb-14">
            <div className="container">
                <h1 className="my-5 text-center text-6xl">
                    Installations Needed for Front End Developers
                </h1>
                <hr className="my-4 border-2 border-black dark:border-white" />
                <div className="">
                    <p className="my-4">
                        As a front end developer, there are a few installations
                        that you will need to have on your computer in order to
                        get started. Below are the installations that you will
                        need to have:
                    </p>
                    <ul className="list-inside list-disc font-bold">
                        <li className="my-4">
                            <a
                                href="#homebrew"
                                className="text-blue-600 underline hover:text-blue-900"
                            >
                                Homebrew on Mac
                            </a>
                        </li>
                        <li className="my-4">
                            <a
                                href="#Node"
                                className="text-blue-600 underline hover:text-blue-900"
                            >
                                Node.js
                            </a>
                        </li>

                        <li className="my-4">
                            <a
                                href="#vscode"
                                className="text-blue-600 underline hover:text-blue-900"
                            >
                                Visual Studio Code
                            </a>
                        </li>
                        <li className="my-4">
                            Git - Typically this will be installed with Homebrew
                            on Mac or with Node.js on Windows
                        </li>
                    </ul>
                    <p className="my-3">
                        It is not necessary to install the GitHub desktop app.
                        There are other ways to interact with GitHub that are
                        more efficient and will help you learn more about Git
                        and GitHub.
                    </p>
                    <p className="my-4">
                        In the next few sections, we will go over what each of
                        these installations are and how to install them.
                    </p>
                </div>
                <div id="homebrew" className="mt-10">
                    <div className="flex items-center justify-center ">
                        <img
                            src={homebrewlogo}
                            alt="Homebrew Logo"
                            width="50px"
                            className="me-2"
                        />
                        <h2 className="mukataFont mt-6 text-center text-4xl">
                            Homebrew (Mac Only)
                        </h2>
                    </div>
                    <hr className="my-4 border-2 border-black dark:border-white" />
                    <div className="text-xl">
                        <p className="my-4">
                            Homebrew is a package manager for macOS. It allows
                            you to install software packages from the command
                            line. Homebrew is a great tool for installing
                            software on your Mac, and it is very easy to use.
                        </p>
                        <p className="my-4">
                            To install Homebrew, open your terminal and run the
                            following command:
                        </p>
                        <pre>
                            <code ref={codeRef} className="language-bash">
                                {homebrew}
                            </code>
                        </pre>
                        <p className="my-4">
                            Once you have run the command, follow the
                            instructions in the terminal to complete the
                            installation. Once Homebrew is installed, you can
                            use it to install other software packages on your
                            Mac.
                        </p>
                        <p>
                            One major advantage to using Homebrew is that
                            anything installed with Homebrew is installed in the
                            /usr/local directory. This means that you can easily
                            find and manage the software that you have installed
                            with Homebrew.
                        </p>
                        <p>
                            Another major advantage is that updating software is
                            as simple as running 'brew update' and 'brew
                            upgrade' in your terminal. This will update all the
                            software that you have installed using Homebrew.
                        </p>
                    </div>
                    <div className="flex justify-center pt-16">
                        <img
                            src={nodeLogo}
                            alt="Node.js Logo"
                            className="rounded-md bg-white p-1"
                            width="200px"
                            id="Node"
                        />
                    </div>
                    <hr className="my-4 border-2 border-black dark:border-white" />
                    <div className="text-xl">
                        <p className="my-4">
                            Node.js is a JavaScript runtime built on Chrome's V8
                            JavaScript engine. Node.js uses an event-driven,
                            non-blocking I/O model that makes it lightweight and
                            efficient. Node.js' package ecosystem, npm, is the
                            largest ecosystem of open source libraries in the
                            world.
                        </p>
                        <h3 className="text-4xl">
                            Installing Node.js with Homebrew
                        </h3>
                        <p className="my-4">
                            If you have Homebrew installed, you can use it to
                            install Node.js. To do this, open your terminal and
                            run the following command:
                        </p>
                        <pre>
                            <code ref={codeRef} className="language-bash">
                                {nodeUsingHomebrew}
                            </code>
                        </pre>
                        <p className="my-4">
                            Once you have run the command, follow the
                            instructions in the terminal to complete the
                            installation. Once Node.js is installed, you can use
                            it to run JavaScript code on your computer.
                        </p>
                        <h3 className="text-4xl">
                            Installing Node.js without Homebrew (Windows)
                        </h3>
                        <p className="my-4">
                            To install Node.js, go to the{' '}
                            <a
                                href="https://nodejs.org/en"
                                target="_blank"
                                className="text-blue-600 underline hover:text-blue-900"
                            >
                                {' '}
                                Node.js website
                            </a>{' '}
                            and download the LTS version of Node.js. Once you
                            have downloaded the file, run the installer and
                            follow the instructions.
                        </p>
                        <div className="mt-14 flex justify-center">
                            {' '}
                            <img
                                src={vsCodeLogo}
                                alt="VS Code Logo"
                                width="50px"
                                className="me-2"
                            />
                            <h3 className="text-4xl">Installing VS Code</h3>
                        </div>
                        <hr className="my-4 border-2 border-black dark:border-white" />
                        <p className="my-4">
                            To install Visual Studio Code, go to the{' '}
                            <a
                                href="https://code.visualstudio.com"
                                target="_blank"
                                className="text-blue-600 underline hover:text-blue-900"
                            >
                                {' '}
                                Visual Studio Code website
                            </a>{' '}
                            and download the version for your operating system.
                            Once you have downloaded the file, run the installer
                            and follow the instructions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Installs
