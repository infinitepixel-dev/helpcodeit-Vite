import vscodelogo from '../../../assets/visual-studio-code.svg'

function VSCodeExtensions() {
    return (
        <div className="container mb-24">
            <div className="mt-5 flex items-center justify-center">
                {' '}
                {/* Add flex and items-center justify-center classes */}
                <img
                    src={vscodelogo}
                    alt="VS Code Logo"
                    width="100px"
                    className="my-auto me-5"
                />
                <div>
                    <h1 className="text-5xl">VS Code Extensions</h1>
                    <h2 className="text-2xl text-balance">
                        Below is a collection of our Recommended Extensions
                    </h2>
                </div>
            </div>
            <div>
                <div className="mt-10 grid grid-cols-1 items-center justify-center rounded-3xl border border-black bg-slate-200 p-5 text-lg shadow-md shadow-black dark:border-white dark:bg-slate-800 md:grid-cols-2 lg:p-0">
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                        target="_blank"
                    >
                        <div className="my-auto lg:my-5 hover:text-blue-800 dark:hover:text-blue-300">
                            <h2 className="text-center text-4xl">Prettier</h2>
                            <p className="text-balance text-center text-2xl">
                                By Prettier
                            </p>
                            <p className="text-balance text-center lg:px-2">
                                This extension allows you to format your code
                                with the click of a button. It is highly
                                customizable and can be set to format your code
                                on save. You can also get extensions that will
                                enable this to work for more than just the
                                typical standard languages.
                            </p>
                            <p className="text-balance pt-3 text-center font-semibold lg:px-2">
                                Works for: <br /> JavaScript · TypeScript · Flow
                                · JSX · JSON CSS · SCSS · Less HTML · Vue ·
                                Angular HANDLEBARS · Ember · Glimmer GraphQL ·
                                Markdown · YAML
                            </p>
                        </div>
                    </a>
                    <div>
                        <img
                            src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/10.1.0/1690819498575/Microsoft.VisualStudio.Services.Icons.Default"
                            alt="Prettier Icon"
                            className="mx-auto w-64"
                        />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 items-center justify-center rounded-3xl border border-black bg-slate-200 p-5 text-lg shadow-md shadow-black dark:border-white dark:bg-slate-800 md:grid-cols-2 lg:p-0">
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
                        target="_blank"
                    >
                        <div className="my-auto hover:text-blue-800 dark:hover:text-blue-300">
                            <h2 className="text-center text-4xl">
                                Live Server
                            </h2>
                            <p className="text-balance text-center text-2xl">
                                By Ritwick Dey
                            </p>
                            <p className="text-balance text-center">
                                With over 5 million installs, Live Server is a
                                must-have and takes the place of other live
                                server extensions. It allows you to see your
                                changes in real-time without having to refresh
                                the page. This is essential to see your changes
                                as you make them. This one will even let you see
                                a list of all the comments you have made, and
                                navigate to them.
                            </p>
                        </div>
                    </a>
                    <div>
                        <img
                            src="https://ritwickdey.github.io/vscode-live-server/images/icon.png"
                            alt="Live Server Icon"
                            className="mx-auto w-80"
                        />
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 items-center justify-center rounded-3xl border border-black bg-slate-200 p-5 text-lg shadow-md shadow-black dark:border-white dark:bg-slate-800 md:grid-cols-2 lg:p-0">
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors"
                        target="_blank"
                    >
                        <div className="my-auto hover:text-blue-800 dark:hover:text-blue-300">
                            <h2 className="text-center text-4xl">
                                Comment Anchors
                            </h2>
                            <p className="text-balance text-center text-2xl">
                                By Exodius Studios
                            </p>
                            <p className="text-balance text-center">
                                This extension allows you to create anchors in
                                your comments to help you navigate your code.
                                This is especially useful when you have a large
                                file and need to find a specific section. This
                                is a must-have for any developer.
                            </p>
                        </div>
                    </a>
                    <div>
                        <img
                            src="https://exodiusstudios.gallerycdn.vsassets.io/extensions/exodiusstudios/comment-anchors/1.10.4/1705659936841/Microsoft.VisualStudio.Services.Icons.Default"
                            alt="Comment Anchors Icon"
                            className="mx-auto w-64"
                        />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 items-center justify-center rounded-3xl border border-black bg-slate-200 p-5 text-lg shadow-md shadow-black dark:border-white dark:bg-slate-800 md:grid-cols-2 lg:p-0">
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
                        target="_blank"
                    >
                        <div className="my-auto hover:text-blue-800 dark:hover:text-blue-300">
                            <h2 className="text-center text-4xl">
                                Auto Rename Tag
                            </h2>
                            <p className="text-balance text-center text-2xl">
                                By Jun Han
                            </p>
                            <p className="text-balance text-center lg:px-2">
                                This extension allows you to rename the opening
                                or closing tag and it will automatically rename
                                the other tag for you. This is a must-have for
                                any developer.
                            </p>
                        </div>
                    </a>
                    <div>
                        <img
                            src="https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-rename-tag/0.1.10/1644319230173/Microsoft.VisualStudio.Services.Icons.Default"
                            alt="Auto Rename Tag Icon"
                            className="mx-auto w-64"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 items-center justify-center rounded-3xl border border-black bg-slate-200 p-5 text-lg shadow-md shadow-black dark:border-white dark:bg-slate-800 md:grid-cols-2 lg:p-0">
                <a
                    href="https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag"
                    target="_blank"
                >
                    <div className="my-auto hover:text-blue-800 dark:hover:text-blue-300">
                        <h2 className="text-center text-4xl">
                            Highlight Matching Tag
                        </h2>
                        <p className="text-balance text-center text-2xl">
                            By vincaslt
                        </p>
                        <p className="text-balance text-center lg:px-2">
                            This extension highlights the matching tag when you
                            select one. This is great for finding the matching
                            tag easily in larger documents.
                        </p>
                    </div>
                </a>
                <div>
                    <img
                        src="https://vincaslt.gallerycdn.vsassets.io/extensions/vincaslt/highlight-matching-tag/0.11.0/1678358667427/Microsoft.VisualStudio.Services.Icons.Default"
                        alt="Highlight Matching Tag Icon"
                        className="mx-auto w-64"
                    />
                </div>
            </div>
        </div>
    )
}
export default VSCodeExtensions
