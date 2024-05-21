import {useState } from 'react'
import axios from 'axios'


function Code_Practice_GPT({ userCode, testFunction }) {
    const [resultAndFeedback, setResult] = useState('')

    const api_key = import.meta.env.VITE_OPENAI_API_KEY
    // console.log('API Key:', api_key)
    let testCode = `let array = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
    `

    testFunction = `function sumArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }`

    userCode = testCode


    const executeCode = async () => {
        const prompt = userCode

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content:
                                'You are a JavaScript interpreter. Execute the following JavaScript code and provide only the result of the user code or the response incorrect answer if the user code is incorrect. Do not provide any feedback on the user',
                        },
                        { role: 'user', content: "Function: " + testFunction + " user code: " + prompt },
                    ],
                    max_tokens: 100,
                    temperature: 0.5,
                    top_p: 1.0,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${api_key}`,
                    },
                }
            )
            let data = response.data
            console.log('Data:', data.choices[0].message.content)

            const resultAndFeedback = data.choices[0].message.content
            console.log('Result:', resultAndFeedback)
            setResult(resultAndFeedback)
        } catch (error) {
            console.error('Error executing code:', error)
        }
    }
    
    return resultAndFeedback;
}

export {Code_Practice_GPT};
