import { Link } from 'react-router-dom'

import CodeBlock from '@/components/Sub_Components/CodeBlock'

const GitHubAuthentication = () => {
    const gitRepoSetup = `cd your-project-directory
git init
git remote add origin your-repo-url
git add .
git commit -m "Initial commit"
git push -u origin master`

    const gitConfig = `git config --list`

    return (
        <div className="container mx-auto mb-14 p-4">
            <h1 className="text-center text-5xl">
                Authenticate GitHub using VSCode
            </h1>
            <p className="text-center text-xl">
                Follow these steps to easily authenticate GitHub in Visual
                Studio Code
            </p>
            <hr className="border-1 border-black dark:border-white" />
            <h2 className="mb-3 mt-10 text-2xl font-semibold">
                1. Open VSCode
            </h2>
            <p>Open Visual Studio Code on your computer.</p>

            <h2 className="mb-3 mt-10 text-2xl font-semibold">
                2. Sign in to GitHub
            </h2>
            <p>
                In the lower left-hand corner, click on the Account icon (a
                small person icon) and select{' '}
                <strong>Sign in with GitHub</strong>. This will open a browser
                window for you to authenticate.
            </p>

            <h2 className="mb-3 mt-10 text-2xl font-semibold">
                3. Authorize Access
            </h2>
            <p>
                In the browser, sign in to your GitHub account if prompted, and
                authorize Visual Studio Code to access your GitHub account.
                Click <strong>Authorize</strong> to proceed.
            </p>

            <h2 className="mb-3 mt-10 text-2xl font-semibold">
                4. Return to VSCode
            </h2>
            <p>
                Once authorized, return to VSCode. You should see a notification
                confirming that you have successfully signed in.
            </p>

            <h2 className="mb-3 mt-10 text-2xl font-semibold">
                5. Verify Authentication
            </h2>
            <p>
                To verify that you&apos;re authenticated, open a new terminal in
                VSCode by pressing
                <code className="border-none shadow-none">Ctrl+`</code>
                (backtick) on Windows/Linux or
                <code className="border-none shadow-none">Cmd+`</code> on Mac
                and type:
            </p>

            <CodeBlock code={gitConfig} language="bash" />
            <p>
                Look for
                <code className="border-none shadow-none">
                    credential.helper=manager
                </code>
                or similar, indicating that GitHub credentials are being
                managed.
            </p>

            <h2 className="mb-3 mt-10 text-2xl font-semibold">
                Troubleshooting
            </h2>
            <p>
                If you encounter issues during authentication, try the following
                steps:
            </p>
            <ul>
                <li>Ensure that you have an active internet connection.</li>
                <li>Make sure your GitHub credentials are correct.</li>
                <li>
                    Restart VSCode and try the authentication process again.
                </li>
                <li>
                    Check the{' '}
                    <a href="https://github.com/microsoft/vscode/issues">
                        VSCode GitHub issues page
                    </a>{' '}
                    for any known issues.
                </li>
            </ul>
            <p>
                If the authentication doesn&apos;t work correctly, you can exit
                out of VSCode, reopen it, and try setting up the repository
                again. This often triggers the authentication process.
            </p>

            <h2 className="mb-3 mt-10 text-2xl font-semibold">
                Setting Up a New Repository
            </h2>
            <p>
                If you&apos;re setting up a new repository, follow these
                additional steps:
            </p>

            <CodeBlock code={gitRepoSetup} language="bash" />
            <p>
                This will prompt you to authenticate if you haven&apos;t
                already. After authenticating, your code will be pushed to
                GitHub. In most cases the page stays blank, but the code in the
                terminal should show that the push was successful before you
                even make it back to vscode.
            </p>
            <div className="mt-10 text-center">
                <a
                    href="#top"
                    className="text-xl font-bold text-blue-500 hover:underline"
                >
                    Back to top
                </a>
                <br /> <br />
                <Link
                    to="/githubPages/GitHub"
                    className="text-xl font-bold text-blue-500 hover:underline"
                >
                    GitHub Home
                </Link>
            </div>
        </div>
    )
}

export default GitHubAuthentication
