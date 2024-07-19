import { Link } from 'react-router-dom'
import javascriptlogo from '../../assets/jswithburstlogo.svg'
import { Helmet } from 'react-helmet-async'


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
                    href="https://helpcodeit.com/javascript"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="JavaScript, JavaScript tutorial, JavaScript practice problems, declaring variables, standard functions, arrow functions, array methods, string methods, npm init, package.json, objects, loops, string concatenation, unit testing, Mocha, Chai, CRUD operations, API, OOP, War Game"
                />
            </Helmet>
            <div className="pb-100 container mx-auto p-2 px-4 sm:p-8 ">
                <div className="mt-5 flex flex-wrap items-center ">
                    <div className="w-full md:w-2/3 lg:w-2/3 ">
                        <h1 className="text-center text-3xl font-bold ">
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
                            alt="Javascript Logo with burst color behind"
                            className="w-full"
                        />
                    </div>
                </div>
                {/* SECTION End Hero Section */}
                {/* SECTION Main Content Goes Below This Line */}
                <div className="mt-10">
                    <h2 className="mb-4 border-b-2 border-black pb-4 text-center text-3xl font-bold dark:border-white">
                        Pages by Topic
                    </h2>
                    <div className="w-full ">
                        <ul className="grid list-none text-center sm:grid-cols-1 md:grid-cols-2">
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/PracticeProblems"
                                    className="jsMainPageLink"
                                >
                                    Free Practice Problems
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/DeclaringVariables"
                                    className="jsMainPageLink"
                                >
                                    Declaring Variables
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/StandardFunctions"
                                    className="jsMainPageLink"
                                >
                                    Standard Functions
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/ArrowFunctions"
                                    className="jsMainPageLink"
                                >
                                    Arrow Functions
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/ArrayMethods"
                                    className="jsMainPageLink"
                                >
                                    Array Methods
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/StringMethods"
                                    className="jsMainPageLink"
                                >
                                    String Methods
                                </Link>
                            </li>

                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/PackagesAndPackageJson"
                                    className="jsMainPageLink"
                                >
                                    &apos;npm init&apos; and Making a
                                    &apos;package.json&apos; File
                                </Link>
                            </li>

                            {/* NOTE Divider */}

                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/Objects"
                                    className="jsMainPageLink"
                                >
                                    Objects
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/Loops"
                                    className="jsMainPageLink"
                                >
                                    Loops
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/StringConcatenation"
                                    className="jsMainPageLink"
                                >
                                    String Concatenation
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/UnitTestingMochaChai"
                                    className="jsMainPageLink"
                                >
                                    Unit Testing with Mocha & Chai
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/CRUD-Main"
                                    className="jsMainPageLink"
                                >
                                    C.R.U.D. Operations with API&apos;s
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/MenuApp"
                                    className="jsMainPageLink"
                                >
                                    Menu App OOP diagram
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/WarGameTutorial"
                                    className="jsMainPageLink"
                                >
                                    War Game
                                </Link>
                            </li>
                            <li className="mx-auto py-2 text-xl font-bold">
                                <Link
                                    to="/javascriptPrincipals/JSONServer"
                                    className="jsMainPageLink"
                                >
                                    JSON Server
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JavascriptMainPage
