import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import MethodComponent from "./MethodComponent";
import ArrayMethodsArray from "./MethodArrays/ArrayMethodsArray";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";


function ArrayMethods() {
 


  return (
    <div>
      <div className='container'>
        <h1 className='text-6xl text-center pt-8 pb-2'>Array Methods</h1>
        <h2 className='text-3xl text-center pb-5'>Our Little Helpers</h2>
        <hr className='border border-black dark:border-white' />
        <div className="text-2xl text-center my-7">
          <p>
            
            Below is a list of array methods that are commonly used in
            JavaScript.{" "}
          </p>
          <p> Click on the method to see an example of how to use it. </p>
        </div>
        <div className=''>
          <div>
            <ul className=''>
              {ArrayMethodsArray.map((ArrayItem, index) => (
                <li key={index}>
                  <div className='container'>
                    <Accordion type='single' collapsible>
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger>
                          <h4 className='text-xl font-bold'>
                            {ArrayItem.title}
                          </h4>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div>
                            <MethodComponent item={ArrayItem} />
                          </div>
                        </AccordionContent>
                        <hr className='border-1 border-black dark:border-white' />
                      </AccordionItem>
                    </Accordion>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArrayMethods;
