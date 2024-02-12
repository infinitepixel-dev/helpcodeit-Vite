//Component meant to test code, it will take in some variables and expect the user to write a function that will return the expected output
import { useState } from "react";
import PropTypes from "prop-types";

function CodePractice({ variables, expectedOutput, functionData }) {
  console.clear();
  console.log("\nDeclared Variables:", variables);
  console.log("Expected Output:", expectedOutput);
  console.log("Function to Test:", functionData);

  CodePractice.propTypes = {
    variables: PropTypes.string,
    expectedOutput: PropTypes.string,
    functionData: PropTypes.func,
  };

  const [userOutput, setUserOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userOutput === expectedOutput) {
      setIsCorrect(true);
    }
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* tailwind css styling */}
      <form
        className="bg-white shadow-xl border border-black"
        onSubmit={handleSubmit}
      >
        <h3>Variables: {variables}</h3>
        <input
          className="bg-white shadow-xl border border-black"
          type="text"
          value={userOutput}
          onChange={(e) => setUserOutput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && isCorrect ? (
        <h3>Correct!</h3>
      ) : isSubmitted && !isCorrect ? (
        <h3>Incorrect</h3>
      ) : null}
    </div>
  );
}

export default CodePractice;
