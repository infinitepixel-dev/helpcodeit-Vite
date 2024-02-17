import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function ArrayMethods() {
  const codeRef = useRef(null);

  useEffect(() => {
    // Apply syntax highlighting to all code elements
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  const atMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.at(0); // 1
    myArray.at(-1); // 5
    myArray.at(5); // undefined`;
  const concatMethod = `let myArray = [1, 2, 3];
    let myOtherArray = [4, 5, 6];
    let myFinalArray = myArray.concat(myOtherArray);
    console.log(myFinalArray); // [1, 2, 3, 4, 5, 6]`;
  const copyWithinMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.copyWithin(0, 3, 4);
    console.log(myArray); // [4, 2, 3, 4, 5]`;
  const entriesMethod = `let myArray = ["a", "b", "c"];
    let iterator = myArray.entries();
    console.log(iterator.next().value); // [0, "a"]
    console.log(iterator.next().value); // [1, "b"]
    console.log(iterator.next().value); // [2, "c"]`;
  const everyMethod = `let myArray = [1, 2, 3, 4, 5];
    let isEven = (number) => number % 2 === 0;
    console.log(myArray.every(isEven)); // false`;
  const fillMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.fill(0, 2, 4);
    console.log(myArray); // [1, 2, 0, 0, 5]`;
  const filterMethod = `let myArray = [1, 2, 3, 4, 5];
    let isEven = (number) => number % 2 === 0;
    let evenNumbers = myArray.filter(isEven);
    console.log(evenNumbers); // [2, 4]`;
  const findMethod = `let myArray = [1, 2, 3, 4, 5];
    let isEven = (number) => number % 2 === 0;
    console.log(myArray.find(isEven)); // 2`;
  const findIndexMethod = `let myArray = [1, 2, 3, 4, 5];
    let isEven = (number) => number % 2 === 0;
    console.log(myArray.findIndex(isEven)); // 1`;
  const flatMethod = `let myArray = [1, 2, [3, 4, [5, 6]]];
    console.log(myArray.flat()); // [1, 2, 3, 4, [5, 6]]`;
  const flatMapMethod = `let myArray = [1, 2, 3, 4, 5];
    let double = (number) => [number, number];
    console.log(myArray.flatMap(double)); // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]`;
  const forEachMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.forEach((number) => console.log(number));
    // 1
    // 2
    // 3
    // 4
    // 5`;
  const includesMethod = `let myArray = [1, 2, 3, 4, 5];
    console.log(myArray.includes(3)); // true`;
  const indexOfMethod = `let myArray = [1, 2, 3, 4, 5];
    console.log(myArray.indexOf(3)); // 2`;
  const joinMethod = `let myArray = [1, 2, 3, 4, 5];
    console.log(myArray.join(" - ")); // "1 - 2 - 3 - 4 - 5"`;
  const keysMethod = `let myArray = ["a", "b", "c"];
    let iterator = myArray.keys();
    console.log(iterator.next().value); // 0
    console.log(iterator.next().value); // 1
    console.log(iterator.next().value); // 2`;
  const lastIndexOfMethod = `let myArray = [1, 2, 3, 4, 5, 3];
    console.log(myArray.lastIndexOf(3)); // 5`;
  const mapMethod = `let myArray = [1, 2, 3, 4, 5];
    let double = (number) => number * 2;
    let doubledArray = myArray.map(double);
    console.log(doubledArray); // [2, 4, 6, 8, 10]`;
  const popMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.pop();
    console.log(myArray); // [1, 2, 3, 4]`;
  const pushMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.push(6);
    console.log(myArray); // [1, 2, 3, 4, 5, 6]`;
  const reduceMethod = `let myArray = [1, 2, 3, 4, 5];
    let sum = (accumulator, number) => accumulator + number;
    console.log(myArray.reduce(sum)); // 15`;
  const reduceRightMethod = `let myArray = [1, 2, 3, 4, 5];
    let sum = (accumulator, number) => accumulator + number;
    console.log(myArray.reduceRight(sum)); // 15`;
  const reverseMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.reverse();
    console.log(myArray); // [5, 4, 3, 2, 1]`;
  const shiftMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.shift();
    console.log(myArray); // [2, 3, 4, 5]`;
  const sliceMethod = `let myArray = [1, 2, 3, 4, 5];
    let myOtherArray = myArray.slice(2, 4);
    console.log(myOtherArray); // [3, 4]`;
  const someMethod = `let myArray = [1, 2, 3, 4, 5];
    let isEven = (number) => number % 2 === 0;
    console.log(myArray.some(isEven)); // true`;
  const sortMethod = `let myArray = [5, 3, 2, 4, 1];
    myArray.sort();
    console.log(myArray); // [1, 2, 3, 4, 5]`;
  const spliceMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.splice(2, 0, 6);
    console.log(myArray); // [1, 2, 6, 3, 4, 5]`;
  const toLocaleStringMethod = `let myArray = [1, 2, 3, 4, 5];
    console.log(myArray.toLocaleString()); // "1,2,3,4,5"`;
  const toStringMethod = `let myArray = [1, 2, 3, 4, 5];
    console.log(myArray.toString()); // "1,2,3,4,5"`;
  const unshiftMethod = `let myArray = [1, 2, 3, 4, 5];
    myArray.unshift(0);
    console.log(myArray); // [0, 1, 2, 3, 4, 5]`;
  const valuesMethod = `let myArray = ["a", "b", "c"];
    let iterator = myArray.values();
    console.log(iterator.next().value); // "a"
    console.log(iterator.next().value); // "b"
    console.log(iterator.next().value); // "c"`;

  return (
    <div>
      <div className='container'>
        <h1 className='text-6xl text-center pt-8 pb-2'>Array Methods</h1>
        <h2 className='text-3xl text-center pb-5'>Our Little Helpers</h2>
        <hr className='border border-black dark:border-white' />
        <h3 className='text-2xl mt-10 '>Table of Contents</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div>
            <ul>
              <li className='link-custom'>
                {" "}
                <a href='#atMethod'>at()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#concatMethod'>concat()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#copyWithinMethod'>copyWithin()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#entriesMethod'>entries()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#everyMethod'>every()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#fillMethod'>fill()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#filterMethod'>filter()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#findMethod'>find()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#findIndexMethod'>findIndex()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#flatMethod'>flat()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#flatMapMethod'>flatMap()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#forEachMethod'>forEach()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#includesMethod'>includes()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#indexOfMethod'>indexOf()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#joinMethod'>join()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#keysMethod'>keys()</a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='link-custom'>
                {" "}
                <a href='#lastIndexOfMethod'>lastIndexOf()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#mapMethod'>map()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#popMethod'>pop()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#pushMethod'>push()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#reduceMethod'>reduce()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#reduceRightMethod'>reduceRight()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#reverseMethod'>reverse()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#shiftMethod'>shift()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#sliceMethod'>slice()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#someMethod'>some()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#sortMethod'>sort()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#spliceMethod'>splice()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#toLocaleStringMethod'>toLocaleString()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#toStringMethod'>toString()</a>{" "}
              </li>
              <li className='link-custom'>
                {" "}
                <a href='#unshiftMethod'>unshift()</a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-2xl mt-10' id='atMethod'>
              at()
            </h4>
            <p>
              The at() method returns the element at the specified index in an
              array. You can use negative numbers to count from the end of the
              array.
            </p>
            <div className='grid grid-col-1 md:grid-cols-2'>
              <div>
                <pre>
                  <code ref={codeRef} className='language-javascript my-3 p-2'>
                    {atMethod}
                  </code>
                </pre>
              </div>
              <p>Below is a graphical representation of the at() method.</p>
              <div>🍏🍏🍊🍏.at(2) =&gt; 🍊</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArrayMethods;
