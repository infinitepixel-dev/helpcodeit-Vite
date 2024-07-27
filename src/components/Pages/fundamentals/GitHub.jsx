import githubLogo from '@assets/github-icon.svg'
import githublogolight from '@assets/github-icon-white.svg'
import { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import githubInitialInstructions from '@assets/githubsetupcommandsfromsite.png'
import githubFlow from '@assets/CleanShot 2023-12-05 at 12.18.20.png'
import redPill from '@assets/1__URX2jndILBo7mMkgs-SWQ Background Removed.png'
import bluePill from '@assets/Bluepill Background Removed.png'
import DetailedGitWorkflow from '@subComponents/DetailedGitWorkflow'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function GitHub() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const githubIdentify = `git config --global user.name "Your Name"
git config --global user.email "Your Email"`

    const gitAdd = `git add .`
    const gitCommit = `git commit -m "Your commit message"`
    const gitPush = `git push`

    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return (
        <div className="container mb-14 text-xl" id="#top">
            <Helmet>
                <title>GitHub | Help Code It</title>
                <meta
                    name="description"
                    content="Learn the basics of GitHub, a version control system that allows you to store and manage your code. Discover how to create a repository, add files, commit changes, and push your code to GitHub."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/fundamentals/GitHub"

                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="GitHub, version control, GitHub tutorial, coding collaboration, Git, software development, web development"
                />
            </Helmet>
            <div className="mt-10 grid grid-cols-1 place-items-center justify-center md:grid-cols-2 ">
                <div className=" my-auto md:ms-auto ">
                    <h1 className="mx-auto my-auto text-center text-2xl md:text-7xl  ">
                        GitHub
                    </h1>
                    <h2 className=" mx-auto text-center font-bold md:text-2xl">
                        A Beginners Guide
                    </h2>
                </div>
                <div className="md:me-auto">
                    <img
                        src={isDark ? githublogolight : githubLogo}
                        alt="Github logo"
                        className="mx-auto my-5  mb-5 w-36 md:my-auto md:ms-5 md:w-48"
                    />
                </div>
            </div>
            <hr className="border-1 my-2 border-black dark:border-white" />
            <div className="">
                <h2 className="mt-14 text-center text-2xl md:text-4xl">
                    📔The Library of Cookbooks👨‍🍳
                </h2>
                <p className="mt-4">
                    Imagine a library full of cookbooks (repositories). Each
                    cookbook has its own unique recipes (code). Chefs
                    (developers) come into the library to write, edit, or add
                    new recipes.
                </p>
                <h3 className="mt-14 text-xl md:text-2xl">
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
                    fire in one part of the library, the recipes aren’t lost.
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
                <hr className="border-1 my-2 border-black dark:border-white" />
                <div className="mt-10">
                        <h3 className="my-5 text-2xl text-center bg-blue-700 rounded-3xl w-fit mx-auto animate-bounce hover:animate-none">
                    <Link
                        to="/fundamentals/GitHubCheatsheet"
                        className="text-center text-white p-4"
                    >
                            Click Here for a GitHub Cheatsheet
                    </Link>
                        </h3>
                    <DetailedGitWorkflow />
                    <h1 className="text-3xl">Lets Get Started</h1>
                    <h2 className="text-2xl">
                        Step 1. Create a GitHub account
                    </h2>
                    <p className="mt-4">
                        Go to{' '}
                        <a href="https://www.github.com" target="_blank">
                            GitHub
                        </a>{' '}
                        and sign up for an account if you haven't already.
                    </p>
                    <p className="mt-4">
                        It is worth noting that Microsoft owns VS Code, Windows,
                        and GitHub, so when using it is alright to give them all
                        the authorizations (they already work together)
                    </p>
                    <p className="mt-4">
                        It is a good idea to go on and put the following two
                        commands in the terminal before getting too deep in this
                        so that you will have already 'Identified' yourself.
                        Take note you will use the email and username you used
                        to sign up for GitHub.
                    </p>
                    <pre>
                        <code
                            ref={codeRef}
                            className="language-bash my-4 p-1 text-base"
                        >
                            {githubIdentify}
                        </code>
                    </pre>
                    <h2 className="mt-10 text-2xl">
                        Step 2. Create a Repository
                    </h2>
                    <p className="mt-4">
                        A repository is like a cookbook. It contains all the
                        recipes (code) for a particular project. <br />
                        <span className="font-extrabold italic">
                            *** It is a good idea to create a new repository for
                            each new project you start. ***
                        </span>
                    </p>
                    <p className="mt-4">
                        To create a new repository, click on the{' '}
                        <span className="font-bold">New</span> button in the top
                        right corner of the page.
                    </p>
                    <p className="mt-4">
                        Give your repository a name and a description. You can
                        also choose to make it public or private. A public
                        repository is visible to everyone and for your purposes
                        is the ideal choice, while a private repository is only
                        visible to you and the people you choose to share it
                        with and may be the way you want to go if you are
                        working on a project that you don't want to share with
                        the world.
                    </p>
                    <p className="mt-4">
                        Once you have filled out the information, click the{' '}
                        <span className="font-bold">Create repository</span>{' '}
                        button.
                    </p>
                    <p className="mt-4">
                        You now have a repository! You can add files to it,
                        create branches, and collaborate with others. We will
                        cover these topics in the next sections.
                    </p>
                    <h2 className="mt-10 text-2xl">
                        Step 3. Add Your Files to Your Repository
                    </h2>
                    <p className="mt-4">
                        You will need to go through the steps listed on the page
                        to add your files to your repository. Take note though
                        of the command 'git add README.md' as it would only add
                        your README file to the repository. You will need to use
                        'git add .' to add all files in the directory to the
                        repository.
                    </p>
                    <p>
                        Here is what the commands your looking for should look
                        like:
                    </p>
                    <img
                        src={githubInitialInstructions}
                        alt="Initial command list for github"
                        className="my-5"
                    />
                    <h2 className="mt-10 text-2xl">
                        Step 4. Commit Your Changes
                    </h2>
                    <p className="mt-4">
                        After you have added your files to your repository, you
                        will need to commit your changes. This is like taking a
                        photocopy of the page and dating it. This way, if a new
                        version of a dish turns out not to taste good, you can
                        always go back to an earlier version of the recipe.
                    </p>
                    <p className="mt-4">
                        Imagine you have been coding for a bit. You just
                        finished a new feature and you want to save your
                        progress. You would use the following commands:
                    </p>
                    <pre>
                        <code
                            ref={codeRef}
                            className="language-bash my-4 p-1 text-base"
                        >
                            git add .
                        </code>
                    </pre>
                    <pre>
                        <code
                            ref={codeRef}
                            className="language-bash my-4 p-1 text-base"
                        >
                            {gitCommit}
                        </code>
                    </pre>
                    <h2 className="mt-10 text-2xl">
                        Step 5. Push Your Changes to GitHub
                    </h2>
                    <p className="mt-4">
                        After you have committed your changes, you will need to
                        push your changes to GitHub. This is like making sure
                        there are multiple copies of each cookbook in various
                        locations, so even if there's a flood or fire in one
                        part of the library, the recipes aren’t lost.
                    </p>
                    <p className="mt-4">
                        This is how the files actually get stored on the GitHub
                        website. Staging files, and commiting files all happen
                        locally on your machine, but when you run git push, you
                        are sending the files to the GitHub website. Here is the
                        command you will use:
                    </p>
                    <pre>
                        <code
                            ref={codeRef}
                            className="language-bash my-4 p-1 text-base"
                        >
                            {gitPush}
                        </code>
                    </pre>
                    <p className="mt-10">
                        It follows a workflow process that is illustrated here:{' '}
                    </p>
                    <img
                        src={githubFlow}
                        alt="Diagram of github workflow"
                        className="rounded-lg"
                    />
                </div>
                <hr className="border-1 my-2 border-black dark:border-white" />
                <h2 className="mt-10 text-center text-4xl">Branching to Develop New Features</h2>
                <p>Branching is an extrememly useful tool in Git that allows you to work on new features or parts of an application without affecting the main codebase. This is especially helpful when you want to experiment with new ideas or develop new features without disrupting the existing code.</p>
                <Link to="/fundamentals/GitHubBranching" className="text-center text-2xl text-blue-500 mx-auto hover:text-blue-700">
                    Click Here for a Detailed Page on GitHub Branching
                </Link>


                <hr className="border-1 my-2 border-black dark:border-white" />

                <h2 className="mt-10 text-center text-4xl">
                    Want to see a Walkthrough Video?
                </h2>
                <h2 className="mt-4 text-center text-xl italic">
                    This is it...Your Red Pill or Blue Pill Moment.
                </h2>
                <div className="mx-auto">
                    <img
                        src="https://m.media-amazon.com/images/I/51kTD1xqVJL.jpg"
                        alt="Morpheus from Matrix holding red pill and blue pill"
                        class="mx-auto my-5 w-1/2 rounded-3xl"
                    ></img>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div>
                        <h3 class="pt-5 text-center text-2xl">
                            {' '}
                            Red Pill: Terminal
                        </h3>
                        <img
                            src={redPill}
                            width="100px"
                            height="auto"
                            alt="red pill"
                            className="mx-auto"
                        />
                        <iframe
                            class="youtube-video"
                            src={
                                'https://www.youtube.com/embed/sIUTpwiRXfs?si=YoYw480M6qkAyBns'
                            }
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div>
                        <h3 class="pt-5 text-center text-2xl">
                            {' '}
                            Blue Pill: VS Code
                        </h3>
                        <img
                            src={bluePill}
                            width="100px"
                            height="auto"
                            alt="Blue Pill"
                            className="mx-auto"
                        />
                        <iframe
                            class="youtube-video"
                            src="https://www.youtube.com/embed/5Cvq9zM5qVE?si=ry0aLUDNoTMIWyLH"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <a href="#top" className="mt-10 block text-center">
                Back to Top
            </a>
        </div>
    )
}
export default GitHub
