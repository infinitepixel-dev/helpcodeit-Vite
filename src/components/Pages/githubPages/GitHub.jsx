import githubLogo from '@assets/github-icon.svg'
import githublogolight from '@assets/github-icon-white.svg'
import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import GitHubMenu from '@subComponents/GitHubMenu'
import library from '@assets/LibraryofCookbooks.webp'
import CodeBlock from '@subComponents/CodeBlock'

function GitHub() {
    const githubIdentify = `git config --global user.name "Your Name"
git config --global user.email "Your Email"`

    const gitAdd = `git add .`
    const gitCommit = `git commit -m "Your commit message"`
    const gitPush = `git push`

    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return (
        <div className="container text-xl mb-14" id="#top">
            <Helmet>
                <title>GitHub - A Beginners Guide | Help Code It</title>
                <meta
                    name="description"
                    content="Learn the basics of GitHub, a version control system that allows you to store and manage your code. Discover how to create a repository, add files, commit changes, and push your code to GitHub."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/gitHubPages/GitHub"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="GitHub, version control, GitHub tutorial, coding collaboration, Git, software development, web development"
                />
            </Helmet>
            <div className="grid justify-center grid-cols-1 mt-10 place-items-center md:grid-cols-2 ">
                <div className="my-auto md:ms-auto">
                    <h1 className="mx-auto my-auto text-2xl text-center md:text-7xl ">
                        GitHub
                    </h1>
                    <h2 className="mx-auto font-bold text-center md:text-2xl">
                        A Beginners Guide
                    </h2>
                </div>
                <div className="md:me-auto">
                    <img
                        src={isDark ? githublogolight : githubLogo}
                        alt="Github logo"
                        className="mx-auto my-5 mb-5 w-36 md:my-auto md:ms-5 md:w-48"
                    />
                </div>
            </div>
            <hr className="my-2 border-black border-1 dark:border-white" />
            <div className="">
                <h2 className="text-2xl text-center mt-14 text-pretty md:text-4xl ">
                    📔The Library of Cookbooks👨‍🍳
                </h2>
                <img src={library} alt="Library of cookbooks" className="mx-auto my-5 w-72 md:w-96" />
            </div>
            <div className="mb-12 mx-14">
                <p className="mt-4">
                    Imagine a library full of cookbooks (repositories). Each
                    cookbook has its own unique recipes (code). Chefs
                    (developers) come into the library to write, edit, or add
                    new recipes.
                </p>
                <h3 className="text-xl mt-14 md:text-2xl">
                    1. Version Control
                </h3>
                <p>
                    Each time a chef makes changes to a recipe, they take a
                    photocopy of the page and date it. This way, if a new
                    version of a dish turns out not to taste good, they can
                    always go back to an earlier version of the recipe. This is
                    like saving multiple drafts of a document, where each draft
                    represents different stages of the document's evolution.
                </p>
                <h3 className="mt-8 text-xl md:text-2xl">2. Backup</h3>
                <p>
                    The library ensures that there are multiple copies of each
                    cookbook in various locations, so even if there's a flood or
                    fire in one part of the library, the recipes aren't lost.
                    This is similar to how GitHub stores code in a distributed
                    manner, ensuring there's always a backup.
                </p>
                <h3 className="mt-8 text-xl md:text-2xl">3. Collaboration</h3>
                <p>
                    Multiple chefs can work on a single cookbook. If two chefs
                    want to modify the same recipe, one might create a photocopy
                    (a branch) and make changes there. Later, they can combine
                    (merge) their modifications with the main cookbook. The
                    library has a system in place (pull requests) for chefs to
                    propose changes, discuss, and then integrate those changes
                    into the main recipe.
                </p>
            </div>
            <hr className="my-5 border-black border-1 dark:border-white" />
            <GitHubMenu />

            {/* Add CodeBlock components for the Git commands */}
            <div className="mt-8">
                <h3 className="mb-4 text-xl md:text-2xl">Common Git Commands</h3>
                <h4 className="mb-2 text-lg">Set up Git identity:</h4>
                <CodeBlock code={githubIdentify} language="bash" />

                <h4 className="mt-4 mb-2 text-lg">Add changes:</h4>
                <CodeBlock code={gitAdd} language="bash" />

                <h4 className="mt-4 mb-2 text-lg">Commit changes:</h4>
                <CodeBlock code={gitCommit} language="bash" />

                <h4 className="mt-4 mb-2 text-lg">Push changes to remote repository:</h4>
                <CodeBlock code={gitPush} language="bash" />
            </div>
        </div>
    )
}

export default GitHub;