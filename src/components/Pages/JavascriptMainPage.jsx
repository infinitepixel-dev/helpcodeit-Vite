import { Link } from "react-router-dom";
import javascriptlogo from "../../assets/jswithburstlogo.svg";

function JavascriptMainPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 p-2 pb-100 sm:p-8 ">
        <div className="flex flex-wrap items-center mt-5 ">
          <div className="w-full md:w-2/3 lg:w-2/3 ">
            <h1 className="text-center text-3xl font-bold ">JavaScript</h1>
            <p className="mt-4">
              JavaScript is a programming language that adds interactivity to
              your website. This happens in games, in the behavior of responses
              when buttons are pressed or with data entry on forms; with dynamic
              styling; with animation, etc. This article helps you get started
              with this exciting language and gives you an idea of what is
              possible.
            </p>

            <p className="mt-4">
              This page gives you subjects that are covered to help supplement
              your learning.
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
          <h2 className="text-center pb-4 text-3xl font-bold border-b-2 border-black mb-4 dark:border-white">
            Pages by Topic
          </h2>
          <div className="w-full ">
            <ul className="list-none text-center grid md:grid-cols-2 sm:grid-cols-1">
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/PracticeProblems"
                  className="jsMainPageLink"
                >
                  Free Practice Problems
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/DeclaringVariables"
                  className="jsMainPageLink"
                >
                  Declaring Variables
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/StandardFunctions"
                  className="jsMainPageLink"
                >
                  Standard Functions
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/ArrowFunctions"
                  className="jsMainPageLink"
                >
                  Arrow Functions
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/ArrayMethods"
                  className="jsMainPageLink"
                >
                  Array Methods
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link to="/javascript/stringmethods" className="jsMainPageLink">
                  String Methods
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascript/jquerytroubleshooting"
                  className="jsMainPageLink"
                >
                  Troubleshooting jQuery
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/PackagesAndPackageJson"
                  className="jsMainPageLink"
                >
                  &apos;npm init&apos; and Making a &apos;package.json&apos;
                  File
                </Link>
              </li>

              {/* NOTE Divider */}

              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/Objects"
                  className="jsMainPageLink"
                >
                  Objects
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/Loops"
                  className="jsMainPageLink"
                >
                  Loops
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/StringConcatenation"
                  className="jsMainPageLink"
                >
                  String Concatenation
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascript/asynchronousfunctions"
                  className="jsMainPageLink"
                >
                  Asynchronous Functions
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascript/unittestingmocha&chai"
                  className="jsMainPageLink"
                >
                  Unit Testing with Mocha & Chai
                </Link>
              </li>
              <li className="py-2 text-xl font-bold mx-auto">
                <Link
                  to="/javascriptPrincipals/CRUD-Main"
                  className="jsMainPageLink"
                >
                  C.R.U.D. Operations with API&apos;s
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavascriptMainPage;
