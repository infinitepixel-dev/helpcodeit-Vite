//Component meant to test code, it will take in some variables and expect the user to write a function that will return the expected output.
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import incorrectImg from "../../assets/no.png";
import correctImg from "../../assets/yes.png";

import hljs from "highlight.js";
// import javascript from "highlight.js/lib/languages/javascript.js";

import "highlight.js/styles/atom-one-dark.css";

function CodePractice({
  instructions,
  inputs,
  variables,
  expectedOutput,
  functionData,
}) {
  console.clear();
  console.log("\nDeclared Variables:", variables);
  console.log("Expected Output:", expectedOutput);
  console.log("Function to Test:", functionData);
  console.log("Inputs:", inputs);

  //NOTE  Setting to an array to allow for multiple inputs
  const [userOutput, setUserOutput] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [problem, setProblem] = useState("");

  const [userInput, setUserInput] = useState(" ");
  const codeInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userOutput === expectedOutput.includes(userOutput)) {
      setIsCorrect(true);
    }
    setIsSubmitted(true);
  };

  useEffect(() => {
    // Apply highlighting when the component mounts
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    if (codeInput.current) {
      // Set the text content of the code element to userInput
      codeInput.current.textContent = userInput;

      // Remove the highlighted attribute if it's set
      if (codeInput.current.hasAttribute("data-highlighted")) {
        delete codeInput.current.dataset.highlighted;
      }

      // Highlight with hljs
      hljs.highlightElement(codeInput.current);
    }
  }, [userInput]);

  return (
    <div>
      {/* loop through variables object */}

      {/* tailwind css styling */}
      <form
        className="bg-white shadow-xl rounded-lg border border-black p-5 dark:bg-gray-700"
        onSubmit={handleSubmit}
      >
        <p className="font-semibold text-2xl">{instructions}</p>
        <p>
          Variables:{" "}
          <ul>
            {/* {variables &&
              variables.forIn((element) => {
                <li>{element}</li>;
              })} */}
            {variables &&
              Object.entries(variables).map((variable, index) => {
                variable = variable[1];
                console.log("Single Object:", variable);
                return (
                  <div key={index}>
                    <p>{variable}</p>
                  </div>
                );
              })}
          </ul>
        </p>
        {/* TODO - Add a copy to clipboard button to the Code Output */}
        <h3>
          <b>Your Formatted Code Here:</b>
        </h3>
        <pre>
          <code
            //  style of max width 100%
            style={{ maxWidth: "100%" }}
            id="codeInput"
            ref={codeInput}
            className="language-javascript"
          >
            {userInput}
          </code>
        </pre>

        {/* input test - begin */}
        {/* If the input type is textarea output a text area element */}
        <h3>
          <b>Input Your Code Here:</b>
        </h3>
        {Object.entries(inputs).map((input, index) => {
          console.log("Single Input:", input);
          input = input[1];

          if (input === "textarea") {
            return (
              <textarea
                key={index}
                className="bg-white border border-black w-full h-20 dark:bg-slate-600 text-white"
                value={userInput}
                onChange={(e) => setUserInput(`${e.target.value}`)}
              />
            );
          }
        })}
        {/* input test - end */}

        {/* <textarea
          className='bg-white border border-black w-full h-20'
          value={userOutput}
          onChange={(e) => setUserOutput(e.target.value)}
        /> */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
        {isSubmitted && isCorrect ? (
          <h3 className="text-2xl text-green-500">
            Correct!
            <span>
              <img src={correctImg} alt="correct_answer" />
            </span>
          </h3>
        ) : isSubmitted && !isCorrect ? (
          <h3 className="text-2xl text-red-500">
            Incorrect, Try again.
            <span>
              <img src={incorrectImg} alt="incorrect_answer" />
            </span>
          </h3>
        ) : null}
      </form>
    </div>
  );
}

CodePractice.propTypes = {
  instructions: PropTypes.string,
  inputs: PropTypes.any,
  variables: PropTypes.any,
  functionData: PropTypes.func,
  expectedOutput: PropTypes.string,
};

export default CodePractice;
