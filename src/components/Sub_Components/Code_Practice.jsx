//Component meant to test code, it will take in some variables and expect the user to write a function that will return the expected output.
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import incorrectImg from '../../assets/no.png'
import correctImg from '../../assets/yes.png'

import AutoExpandingTextarea from './AutoExpandingTextArea'

function CodePractice({
    instructions,
    inputs,
    variables,
    expectedOutput,
    functionData,
    hljs,
}) {
    console.clear()
    console.log('\nDeclared Variables:', variables)
    console.log('Expected Output:', expectedOutput)
    console.log('Function to Test:', functionData)
    console.log('Inputs:', inputs)

    // Inside your CodePractice function component
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null) // Ref for observing the component's visibility

    //NOTE  Setting to an array to allow for multiple inputs
    // eslint-disable-next-line no-unused-vars
    const [userOutput, setUserOutput] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    // const [problem, setProblem] = useState("");

    const [userInput, setUserInput] =
        useState(`function addNumbers(num1, num2) {
    return num1 + num2;
  }`)
    const codeInput = useRef(null)

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userOutput === expectedOutput.includes(userOutput)) {
            setIsCorrect(true)
        }
        setIsSubmitted(true)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                })
            },
            {
                rootMargin: '0px',
                threshold: 0.1,
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // This useEffect runs on userInput changes, after the initial mount
    useEffect(() => {
        if (codeInput.current) {
            // Set the text content of the code element to userInput
            // codeInput.current.innerText = userInput;

            // Ensure the element is marked as not highlighted to allow re-highlighting
            codeInput.current.removeAttribute('data-highlighted')

            // Highlight with hljs
            hljs.highlightElement(codeInput.current)
        }
    }, [userInput])
      // Highlight with hljs
      hljs.highlightElement(codeInput.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

    return (
        <div ref={containerRef}>
            {/* loop through variables object */}
            {!isVisible ? (
                <div>Loading...</div> // Placeholder or spinner
            ) : (
                <form
                    className="rounded-lg border border-black bg-white p-5 shadow-xl dark:bg-gray-700"
                    onSubmit={handleSubmit}
                >
                    <p className="text-2xl font-semibold">{instructions}</p>
                    <div>
                        Variables:{' '}
                        <ul>
                            {/* {variables &&
              variables.forIn((element) => {
                <li>{element}</li>;
              })} */}
                            {variables &&
                                Object.entries(variables).map(
                                    (variable, index) => {
                                        variable = variable[1]
                                        // console.log("Single Object:", variable);
                                        return (
                                            <div key={index}>
                                                <p>{variable}</p>
                                            </div>
                                        )
                                    }
                                )}
                        </ul>
                    </div>
                    {/* TODO - Add a copy to clipboard button to the Code Output */}
                    <h3>
                        <b>Your Formatted Code Here:</b>
                    </h3>
                    <pre>
                        <code
                            //  style of max width 100%
                            style={{ maxWidth: '100%' }}
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
                        // console.log("Single Input:", input);
                        input = input[1]

                        if (input === 'textarea') {
                            return (
                                <AutoExpandingTextarea
                                    key={index}
                                    value={userInput}
                                    onChange={handleInputChange}
                                />
                            )
                        }
                    })}
                    {/* input test - end */}

                    {/* <textarea
          className='bg-white border border-black w-full h-20'
          value={userOutput}
          onChange={(e) => setUserOutput(e.target.value)}
        /> */}
                    <button
                        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
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
                                <img
                                    src={incorrectImg}
                                    alt="incorrect_answer"
                                />
                            </span>
                        </h3>
                    ) : null}
                </form>
            )}
        </div>
    )
}

CodePractice.propTypes = {
    instructions: PropTypes.string,
    inputs: PropTypes.any,
    variables: PropTypes.any,
    functionData: PropTypes.func,
    expectedOutput: PropTypes.string,
    hljs: PropTypes.object,
}

export default CodePractice
