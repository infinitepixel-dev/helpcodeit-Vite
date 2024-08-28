import TypescriptNavigation from './TypescriptNavigation'
import typescriptlogo from '@assets/TypeScriptLogo.svg'
import { Helmet } from 'react-helmet-async'

function TypeScriptMain() {
    return (
        <div className="min-h-screen mb-10">
            <Helmet>
                <title>Learn TypeScript | Help Code It</title>
                <meta
                    name="description"
                    content="Explore a comprehensive guide to TypeScript, declaring variables, datatypes and more. Enhance your web development skills with Help Code It."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/TypescriptMain"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="TypeScript, TypeScript tutorial"
                />
            </Helmet>
            <div className="container p-2 px-4 mx-auto pb-100 sm:p-8">
                <div className="flex flex-wrap items-center mt-5">
                    <div className="w-full md:w-2/3 lg:w-2/3 ">
                        <h1 className="font-bold text-center text-7xl">
                            TypeScript
                        </h1>
                        <p className="mt-4">
                            TypeScript is a programming language that adds
                            interactivity to your website. This happens in
                            games, in the behavior of responses when buttons are
                            pressed or with data entry on forms; with dynamic
                            styling; with animation, etc. This article helps you
                            get started with this exciting language and gives
                            you an idea of what is possible.
                        </p>
                        <p className="mt-4">
                            This page gives you subjects that are covered to
                            help supplement your learning.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/3">
                        <img
                            src={typescriptlogo}
                            alt="TypeScript Logo"
                            className="w-full bg-white"
                            aria-label="TypeScript Logo"
                        />
                    </div>
                </div>
                {/* SECTION End Hero Section */}
                {/* SECTION Main Content Goes Below This Line */}
                <div className="mt-10">
                    <TypescriptNavigation />
                </div>
            </div>
        </div>
    )
}

export default TypeScriptMain;
