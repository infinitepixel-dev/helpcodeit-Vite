import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-700 to-slate-950 px-6 py-16 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                {/* Section 1: Getting Started */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold">
                        Getting Started
                    </h3>
                    <ul>
                        <li>
                            <Link
                                to="/fundamentals/Installs"
                                className="hover:text-gray-400"
                            >
                                Installs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fundamentals/Files"
                                className="hover:text-gray-400"
                            >
                                Understanding Files
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/MiscPages/RubberDucky"
                                className="hover:text-gray-400"
                            >
                                Rubber Ducky Method
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fundamentals/NamingConventions"
                                className="hover:text-gray-400"
                            >
                                Naming Conventions
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fundamentals/VSCodeExtensions"
                                className="hover:text-gray-400"
                            >
                                VS Code Extensions
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fundamentals/VSCodeHotkeysTable"
                                className="hover:text-gray-400"
                            >
                                VS Code Hotkeys
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fundamentals/SettingUpPracticeEnvironment"
                                className="hover:text-gray-400"
                            >
                                Setting Up Practice Environment
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Section 2: Tools */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold">Tools</h3>
                    <ul>
                        <li>
                            <a
                                href="https://codeproblems.michaelvarnell.com"
                                className="hover:text-gray-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Practice Code Problems
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/data-generator"
                                className="hover:text-gray-400"
                            >
                                Data Generator
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/JavascriptPrincipals/APIResources"
                                className="hover:text-gray-400"
                            >
                                API Resources
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/useful-links"
                                className="hover:text-gray-400"
                            >
                                Useful Links
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/MediaRecommendations"
                                className="hover:text-gray-400"
                            >
                                Our Media Recommendations
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Section 3: Topics */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold">Topics</h3>
                    <ul>
                        <li>
                            <Link
                                to="/fundamentals/WebDesignPrincipals"
                                className="hover:text-gray-400"
                            >
                                Web Design Principals
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/htmlPages/htmlMain"
                                className="hover:text-gray-400"
                            >
                                HTML
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cssPages/CSSMain"
                                className="hover:text-gray-400"
                            >
                                CSS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fundamentals/Bootstrap"
                                className="hover:text-gray-400"
                            >
                                Bootstrap
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/githubPages/GitHub"
                                className="hover:text-gray-400"
                            >
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/markdown/MarkdownGuide"
                                className="hover:text-gray-400"
                            >
                                Markdown
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ViteMain"
                                className="hover:text-gray-400"
                            >
                                Vite Guides
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/typescriptPages/TypeScriptMain"
                                className="hover:text-gray-400"
                            >
                                TypeScript
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/javascript"
                                className="hover:text-gray-400"
                            >
                                JavaScript
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ReactMain"
                                className="hover:text-gray-400"
                            >
                                React.js
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Section 4: About & Contact */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold">
                        About & Contact
                    </h3>
                    <ul>
                        <li>
                            <Link to="/about" className="hover:text-gray-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 text-center text-sm text-gray-400">
                <p>&copy; 2025 HelpCodeIt. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
