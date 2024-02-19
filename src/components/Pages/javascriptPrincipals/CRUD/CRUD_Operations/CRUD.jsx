
import React, { useEffect, useRef } from "react";

function CRUD({ Object, hljs}) {
console.log("accordion");

  const codeRef = useRef(null);

    useEffect(() => {
      // Apply syntax highlighting to all code elements
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    }, []);
  console.log(Object)
  return (
    <div className='text-lg'>
      <p>
        Each list item below represents a line of code to explain what it is
        doing.
      </p>
      <div className='border border-1 p-3 my-5 rounded-lg  border-black dark:border-white'>
        <ul className='list-inside'>
           
          {Object.content.map((item, index) => {
            return (
              <li key={index} className='list-disc my-2'>
                {item.description}
              </li>
            );
          })}
        </ul>
        <pre>
          <code ref={codeRef} className='language-javascript mx-auto mt-10'>
            {Object.code}
          </code>
        </pre>
      </div>
    </div>
  );
}
export default CRUD;
