import initialSetup from "../assets/Getting Started.svg";
import arrayMethods from "../assets/Array Methods.svg";
import practiceEnv from "../assets/Practice Environment Title.svg";
import unitTesting from "../assets/Unit Testing Title Only.svg";

export default function MainCards() {
  return (
    <div className='grid place-items-center 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-10 p-5 sm:grid-cols-1  '>
      {/* SECTION Card #1 */}
      <div className='w-full mx-auto my-8'>
        <div className='bg-white shadow-xl border border-black rounded card-max dark:bg-neutral-600 '>
          <img
            src={initialSetup}
            className='w-full h-auto border-b-2 border-black'
            alt='Getting Started header'
          />
          <div className='p-4'>
            <h5 className='text-4xl pb-8 font-bold text-black'>
              Initial Setup
            </h5>
            <p className='text-black text-xl'>
              This page will help you setup your computer to begin programming
            </p>
            <a
              href=''
              className='bg-blue-500 text-white px-2 py-1 font-bold mt-3 inline-block'
            >
              Let&apos;s Go
            </a>
          </div>
        </div>
      </div>
      {/* !SECTION Card #1 END*/}
      {/* SECTION Card #2 */}
      <div className='w-full  mx-auto my-8 '>
        <div className='bg-white shadow-xl  border border-black rounded card-max dark:bg-neutral-600 text-white'>
          <img
            src={arrayMethods}
            className='w-full h-auto border-b-2 border-black'
          />
          <div className='p-4'>
            <h5 className='text-4xl pb-8 font-bold text-black'>
              Need to see the available options?
            </h5>
            <p className='text-black text-xl '>
              This page contains a table with all the array methods, with
              explanations and examples.
            </p>
            <a
              href='./javascriptPrincipals/arraymethods.html'
              className='bg-pink-600 text-white px-2 py-1 rounded font-bold mt-3 inline-block'
            >
              See the Table
            </a>
          </div>
        </div>
      </div>
      {/* !SECTION Card #2 END  */}
      {/* SECTION Card #3 */}
      <div className='w-full p-3 mx-auto my-8'>
        <div className='bg-white shadow-xl border border-black rounded card-max dark:bg-neutral-600 text-white'>
          <img
            src={practiceEnv}
            className='w-full h-auto border-b-2 border-black'
          />
          <div className='p-4'>
            <h5 className='text-4xl pb-8 font-bold text-black'>
              Want a place to code?
            </h5>
            <p className='text-black text-xl text-overflow-ellipsis'>
              This page has a video to walk you through getting a project
              started to get off the ground coding in Javascript.
            </p>
            <a
              href='./gettingStarted/practiceEnvironmentVideo.html'
              className='bg-blue-500 text-white px-2 py-1 rounded font-bold mt-3 inline-block'
            >
              See Video
            </a>
          </div>
        </div>
      </div>
      {/* !SECTION Card #3 END */}
      {/* SECTION Card #4 */}
      <div className='w-full p-3 mx-auto my-8 '>
        <div className='bg-white shadow-xl rounded border border-black card-max dark:bg-neutral-600 text-white'>
          <img
            src={unitTesting}
            className='w-full h-auto border-b-2 border-black'
          />

          <div className='p-4'>
            <h5 className='text-4xl pb-8 font-bold text-black'>
              Mocha and Chai
            </h5>
            <p className='text-black text-xl text-overflow-ellipsis'>
              Unit testing is an important part of programming. This page will
              help you get started with Mocha and Chai.
            </p>
            <a
              href='./javascriptPrincipals/unittestingmocha&chai.html'
              className='bg-blue-500 text-white px-2 py-1 rounded font-bold mt-3 inline-block'
            >
              Let&apos;s Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
