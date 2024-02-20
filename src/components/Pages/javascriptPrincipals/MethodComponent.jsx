import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function MethodComponent({ item }) {
  const codeRef = useRef(null);

  useEffect(() => {
    // Apply syntax highlighting to all code elements
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  const { title, description, example, graphical } = item;
  return (
    <div className="my-5 p-5 border rounded-lg border-black dark:border-white">
      <h4 className="text-4xl mt-10 mb-5 text-center" id={title}>
        {title}
      </h4>
      <hr className="w-11/12 mx-auto mb-5 border-1 border-black dark:border-white" />
      <p>{description} Here's some examples:</p>
      <div className="flex flex-wrap justify-center">
        <div className="container  mx-4 justify-center align-middle">
          <pre className="mt-4">
            <code
              ref={codeRef}
              className="language-javascript my-3 p-2 max-w-full"
            >
              {example}
            </code>
          </pre>
        </div>

        {graphical && (
          <div className="text-center my-auto">
            <p>Below is a graphical representation of the {title} method.</p>
            <div className="text-3xl text-center">{graphical}</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default MethodComponent;
