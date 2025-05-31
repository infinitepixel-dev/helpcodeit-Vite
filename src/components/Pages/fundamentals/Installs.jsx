import 'highlight.js/styles/atom-one-dark.css'
import homebrewlogo from '@assets/homebrew.svg'
import nodeLogo from '@assets/nodejs.svg'
import vsCodeLogo from '@assets/visual-studio-code.svg'
import { Helmet } from 'react-helmet-async'
import CodeBlock from '@/components/Sub_Components/CodeBlock'

function Installs() {
    const homebrew = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
    const nodeUsingHomebrew = `brew install node`

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-16 dark:from-gray-900 dark:to-gray-600">
            <Helmet>
                <title>Installations Needed for Front End Developers</title>
                <meta
                    name="description"
                    content="Learn about the installations needed for front end developers, including Homebrew, Node.js, and Visual Studio Code. Get started with the essentials for front end development."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/fundamentals/Installs"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="front end development, installations, Homebrew, Node.js, Visual Studio Code, Git, GitHub, web development"
                />
            </Helmet>

            <div className="mx-auto max-w-4xl px-6">
                <h1 className="mb-8 text-center text-5xl font-extrabold text-gray-700 dark:text-white">
                    Essential Installations for Front End Developers
                </h1>

                <div className="space-y-8">
                    <section className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-700">
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            As a front end developer, you&apos;ll need to
                            install a few essential tools to get started:
                        </p>
                        <ul className="mt-4 list-inside list-disc space-y-2 text-gray-500 dark:text-gray-200">
                            <li>
                                <a
                                    href="#homebrew"
                                    className="font-semibold hover:text-blue-600"
                                >
                                    Homebrew on Mac
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Node"
                                    className="font-semibold hover:text-blue-600"
                                >
                                    Node.js
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#vscode"
                                    className="font-semibold hover:text-blue-600"
                                >
                                    Visual Studio Code
                                </a>
                            </li>
                            <li>
                                Git (usually installed with Homebrew or Node.js)
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Skip the GitHub Desktop app for now—using Git via
                            the terminal gives you a deeper understanding.
                        </p>
                    </section>

                    <section
                        id="homebrew"
                        className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <img
                                src={homebrewlogo}
                                alt="Homebrew Logo"
                                className="w-10"
                            />
                            <h2 className="text-3xl font-bold">
                                Homebrew (Mac Only)
                            </h2>
                        </div>
                        <p className="mb-4">
                            Homebrew is a package manager for macOS, simplifying
                            the process of installing software via the terminal.
                        </p>
                        <CodeBlock code={homebrew} language="bash" />
                        <p className="mt-4">
                            After running the command, follow the terminal
                            instructions. Homebrew installs tools in{' '}
                            <code>/usr/local</code> for easy management.
                        </p>
                        <p className="mt-2">
                            To update everything, simply run{' '}
                            <code>brew update</code> and{' '}
                            <code>brew upgrade</code>.
                        </p>
                    </section>

                    <section
                        id="Node"
                        className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <img
                                src={nodeLogo}
                                alt="Node.js Logo"
                                className="w-14 rounded-md bg-white p-1"
                            />
                            <h2 className="text-3xl font-bold">Node.js</h2>
                        </div>
                        <p className="mb-4">
                            Node.js is a JavaScript runtime built on
                            Chrome&apos;s V8 engine. It&apos;s essential for
                            front end devs.
                        </p>
                        <h3 className="text-2xl font-semibold">
                            Install Node.js with Homebrew (Mac)
                        </h3>
                        <CodeBlock code={nodeUsingHomebrew} language="bash" />
                        <h3 className="mt-4 text-2xl font-semibold">
                            Install Node.js without Homebrew (Windows)
                        </h3>
                        <p>
                            Download the latest LTS version from{' '}
                            <a
                                href="https://nodejs.org/en"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Node.js website
                            </a>{' '}
                            and follow the installer instructions.
                        </p>
                    </section>

                    <section
                        id="vscode"
                        className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <img
                                src={vsCodeLogo}
                                alt="VS Code Logo"
                                className="w-10"
                            />
                            <h2 className="text-3xl font-bold">
                                Visual Studio Code
                            </h2>
                        </div>
                        <p>
                            Download and install Visual Studio Code from the{' '}
                            <a
                                href="https://code.visualstudio.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                official website
                            </a>
                            . It&apos;s a powerful, lightweight code editor
                            that&apos;s perfect for front end development.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Installs
