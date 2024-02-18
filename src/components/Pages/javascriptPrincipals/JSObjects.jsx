import objectImg from "../../../assets/objectpagegraphic.svg";
import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default function JSObjects() {
  const codeRef = useRef(null);

  useEffect(() => {
    // Apply syntax highlighting to all code elements
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  const objectExample = `var person = {
  firstName:"John", 
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue"
};`;

  return (
    <div>
      <div className='container pb-14 text-xl'>
        <div className='grid grid-cols-1 pt-28 md:grid-cols-2'>
          <div>
            <h1 className='satisfyFont text-center text-6xl pb-7'>
              JavaScript Objects
            </h1>
            <hr className='border-1 border-black w-10/12 mx-auto dark:border-white' />
            <p className='p-4'>
              Objects are variables too. But objects can contain many values.
            </p>
            <p className='p-4'>
              Think of an object as a list of values that are written as
              name:value pairs, with the names and the values separated by
              colons.
            </p>
            <p className='p-4'>
              JavaScript objects are containers for named values called
              properties or methods.
            </p>
            <p className='p-4'>
              JavaScript objects are written with curly braces {}.
            </p>
            <p className='p-4'>
              Object properties are written as name:value pairs, separated by
              commas.
            </p>
          </div>
          <div>
            <img
              src={objectImg}
              alt='Image of Curly Brackets'
              className='h-full w-auto'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 pt-28 lg:grid-cols-2'>
          <div>
            <h2 className='text-4xl text-center'>Example of an Object</h2>
            <pre>
              <code ref={codeRef} className='language-javascript mx-auto py-5'>
                {objectExample}
              </code>
            </pre>
          </div>
          <div className='m-4 bg-slate-200 shadow-xl border border-black rounded-2xl dark:bg-slate-600 dark:border-white'>
            <p className='p-4   font-bold'>
              Bonus: Did you know that you can use all the normal JavaScript
              datatypes within an Object?
            </p>
          </div>
          <div>
            <h2 className='text-4xl mb-4 mt-12 text-center'>
              Accessing Object Properties
            </h2>
            <p className='p-4 underline text-2xl'>
              You can access object properties in two ways:
            </p>
            <p className='p-4'>
              objectName.propertyName -- This is known as dot notation and can
              be applied in other circumstances as well. You might use it when
              working with arrays, for example. We use it commonly when working
              with objects.
            </p>
            <p className='p-4 text-4xl text-center'>or</p>
            <p className='p-4'>
              objectName["propertyName"] -- This is known as bracket notation.
              It's useful when you need to access a property that has a space in
              the name or when you need to use a variable to access the
              property. It is poor practice to name your properties with spaces,
              but it's good to know how to access them if you encounter them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
