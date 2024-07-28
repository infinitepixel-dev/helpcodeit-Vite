import React from 'react';
import rubberDucky from '@assets/RubberDucky.webp';


const RubberDucky = () => {
  return (
    <div className="container mx-auto px-12 py-8">
      <div className="flex flex-wrap">
        <h1 className="text-6xl text-pretty font-bold mb-6 items-center mx-auto">
          The <br /> Rubber Ducky <br /> Method
        </h1>
        <img src={rubberDucky} alt="Rubber Ducky" className="mx-auto rounded-xl" width='200rem' />
      <hr className="border-t-2 ms-10 border-gray-800 dark:border-gray-300 w-full my-8" />
      </div>


      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">What is the Rubber Ducky Method?</h2>
          <p className="text-lg">
            The Rubber Ducky Method is a simple yet effective technique for debugging and reviewing code. It is widely used, and taught by many in the tech industry and has even become a tradition. It involves explaining your code, line by line, to an inanimate object – traditionally, a rubber duck.
          </p>
          <p className='text-lg'>The method's full origins may never be known, but the book 'The Pragmatic Programmer' by Andrew Hunt and David Thomas is where most of us learned about it. The book is an excellent read, that goes beyond just the coding parts of software engineering. Last we saw it was in its 20th edition, with the first one printed in 1999.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How it Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Get a rubber duck (or any object)</li>
            <li>Place it next to your computer</li>
            <li>Explain your code to the duck, line by line</li>
            <li>As you explain, you'll often realize the solution to your problem!</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why it's Effective</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Forces you to articulate your thought process</li>
            <li>Helps identify logical errors or gaps in your reasoning</li>
            <li>Encourages thorough understanding of your own code</li>
            <li>Can reveal overlooked assumptions or edge cases</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Tips for Success</h2>
          <div className="bg-slate-300 border border-zinc-700 dark:border-gray-200 dark:text-white dark:bg-gray-700 p-4 rounded-lg">
            <ul className="list-none space-y-2">
              <li>🦆 When the code gets tough, and everything looks right, take a break!</li>
              <li>🦆 Don't skip any details, no matter how obvious they seem, it's a duck, he/she doesn't know JavaScript!</li>
              <li>🦆 Be patient and thorough in your explanation, otherwise the duck may never learn to code.</li>
              <li>🦆 If you're stuck, try explaining the problem to the duck, but from a different angle.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Remember</h2>
          <p className="text-lg italic">
            "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."
          </p>
          <p className="text-base mt-2">
            But in this case, it's a rubber duck helping you solve coding problems!
          </p>
        </section>
      </div>

      <hr className="border-t-2 ms-10 border-gray-800 dark:border-gray-300 w-full my-8" />
      <h2 className='text-4xl' >Where to get a duck...</h2>
      <ul>
        <li className='text-2xl'><a href='https://ducksinthewindow.com/'>Duck's in the Window</a></li>
        <li className='text-2xl'><a href='https://www.walmart.com/search/?query=rubber%20duck'>Walmart</a></li>
        <li className='text-2xl'><a href='https://www.amazon.com/s?k=rubber+duck&ref=nb_sb_noss_2'>Amazon</a></li>
      </ul>

      <footer className="mt-8 text-center">
        <p className="text-sm">
          Now comes the fun part! Go forth and adopt your duck 🐥
        </p>
      </footer>
    </div>
  );
};

export default RubberDucky;