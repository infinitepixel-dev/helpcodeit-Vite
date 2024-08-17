import javascriptlogo from '@assets/jswithburstlogo.svg'
import { Helmet } from 'react-helmet-async'
import JavaScriptNavigation from '../../Sub_Components/JavaScriptNavigation'

function JavascriptMainPage() {
    return (
        <div className="mb-10 min-h-screen">
            <Helmet>
                <title>Learn JavaScript | Help Code It</title>
                <meta
                    name="description"
                    content="Explore a comprehensive guide to JavaScript, including free practice problems, declaring variables, functions, array methods, string methods, and more. Enhance your web development skills with Help Code It."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascript"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="JavaScript, JavaScript tutorial, JavaScript practice problems, declaring variables, standard functions, arrow functions, array methods, string methods, npm init, package.json, objects, loops, string concatenation, unit testing, Mocha, Chai, CRUD operations, API, OOP, War Game"
                />
            </Helmet>
            <div className="pb-100 container mx-auto p-2 px-4 sm:p-8">
                <div className="mt-5 flex flex-wrap items-center">
                    <div className="w-full md:w-2/3 lg:w-2/3 ">
                        <h1 className="text-center text-3xl font-bold">
                            JavaScript
                        </h1>
                        <p className="mt-4">
                            JavaScript is a programming language that adds
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
                            src={javascriptlogo}
                            alt="JavaScript Logo with burst color behind"
                            className="w-full"
                            aria-label="JavaScript Logo with burst color behind"
                        />
                    </div>
                </div>
                {/* SECTION End Hero Section */}
                {/* SECTION Main Content Goes Below This Line */}
                <div className="mt-10">
                    <JavaScriptNavigation />
                </div>
            </div>
        </div>
    )
}

export default JavascriptMainPage
