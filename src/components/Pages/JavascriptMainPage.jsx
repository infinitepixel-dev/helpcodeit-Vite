import { Link} from "react-router-dom";
import javascriptlogo from "../../assets/jswithburstlogo.svg";

function JavascriptMainPage() {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap items-center mt-5'>
        <div className='w-full md:w-2/3 lg:w-2/3'>
          <h1 className='text-center text-3xl font-bold'>JavaScript</h1>
          <p className='mt-4'>
            JavaScript is a programming language that adds interactivity to your
            website. This happens in games, in the behavior of responses when
            buttons are pressed or with data entry on forms; with dynamic
            styling; with animation, etc. This article helps you get started
            with this exciting language and gives you an idea of what is
            possible.
          </p>

          <p className='mt-4'>
            This page gives you subjects that are covered to help supplement
            your learning.
          </p>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/3'>
          <img
            src={javascriptlogo}
            alt='Javascript Logo with burst color behind'
            className='w-full'
          />
        </div>
      </div>
      {/* SECTION End Hero Section */}
      {/* SECTION Main Content Goes Below This Line */}
      <div className='mt-10'>
        <h2 className='text-start text-2xl font-bold border-b-2'>
          Pages by Topic
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='w-full md:w-1/2 lg:w-1/2'>
            <ul className='list-none'>
              <li className='py-2'>
                <Link
                  to='/javascriptPrincipals/PracticeProblems'
                  className='text-blue-500'
                >
                  Free Practice Problems
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  to='/javascriptPrincipals/DeclaringVariables'
                  className='text-blue-500'
                >
                  Declaring Variables
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/javascriptPrincipals/StandardFunctions' className='text-blue-500'>
                  Standard Functions
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/javascript/arrowfunctions' className='text-blue-500'>
                  Arrow Functions
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/javascript/arraymethods' className='text-blue-500'>
                  Array Methods
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/javascript/stringmethods' className='text-blue-500'>
                  String Methods
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  to='/javascript/jquerytroubleshooting'
                  className='text-blue-500'
                >
                  Troubleshooting jQuery
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  to='/javascript/packagejsonfile'
                  className='text-blue-500'
                >
                  &apos;npm init&apos; and Making a &apos;package.json&apos;
                  File
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/javascript/objects' className='text-blue-500'>
                  Objects
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/javascript/loops' className='text-blue-500'>
                  Loops
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  to='/javascript/stringConcatenation'
                  className='text-blue-500'
                >
                  String Concatenation
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  to='/javascript/asynchronousfunctions'
                  className='text-blue-500'
                >
                  Asynchronous Functions
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  to='/javascript/unittestingmocha&chai'
                  className='text-blue-500'
                >
                  Unit Testing with Mocha & Chai
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/javascript/CRUD' className='text-blue-500'>
                  C.R.U.D. Operations with API&apos;s (Fetch)
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
