import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Simulated API functions
const simulateAPI = (method, data = null, delay = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject(new Error('Simulated API error'));
      } else {
        let responseData;
        switch (method) {
          case 'GET':
            responseData = { id: 1, ...data };
            break;
          case 'POST':
            responseData = { id: Math.floor(Math.random() * 1000) + 1, ...data };
            break;
          default:
            responseData = data;
        }
        resolve({
          status: 200,
          json: () => Promise.resolve({
            message: `${method} operation successful`,
            data: responseData
          })
        });
      }
    }, delay);
  });
};

const InteractiveFetch = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({ id: '', name: '', email: '', age: '' });
  const [selectedMethod, setSelectedMethod] = useState('GET');
  const [fetchCode, setFetchCode] = useState('');
  const [animationState, setAnimationState] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData(prev => ({ ...prev, [name]: value }));
  };

  const handleOperation = async () => {
    setLoading(true);
    setAnimationState('sending');
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate request travel time
      setAnimationState('processing');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API processing time
      setAnimationState('receiving');
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate response travel time
      setAnimationState('completed'); // New state to hide the green dot
      const response = await simulateAPI(selectedMethod, inputData);
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));

      if (selectedMethod === 'POST' && data.data.id) {
        setInputData(prevData => ({ ...prevData, id: data.data.id.toString() }));
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
      setTimeout(() => setAnimationState('idle'), 1000); // Reset animation after 1 second
    }
  };

  useEffect(() => {
    updateFetchCode();
  }, [selectedMethod, inputData]);

  const updateFetchCode = () => {
    let url = 'https://api.example.com/data';
    let options = {
      method: selectedMethod,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let dataObjectCode = '';
    if (selectedMethod === 'PUT' || selectedMethod === 'DELETE') {
      url += `/${inputData.id}`;
    }

    if (selectedMethod === 'POST' || selectedMethod === 'PUT') {
      const { id, ...dataWithoutId } = inputData;
      dataObjectCode = `const data = ${JSON.stringify(dataWithoutId, null, 2)};\n\n`;
      options.body = 'JSON.stringify(data)';
    }

    const optionsString = JSON.stringify(options, null, 2).replace('"JSON.stringify(data)"', 'JSON.stringify(data)');

    const code = `${dataObjectCode}fetch('${url}', ${optionsString})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;

    setFetchCode(code);
  };

  const explanations = {
    GET: "GET requests fetch data from a specified resource. It's a 'read-only' operation.",
    POST: "POST requests submit data to be processed to a specified resource. It's used to send data to a server to create a new resource.",
    PUT: "PUT requests update an existing resource on a server. The data sent replaces the entire resource. It requires an ID to identify the resource to update.",
    DELETE: "DELETE requests delete the specified resource. It requires an ID to identify the resource to delete."
  };

  return (
    <div className="container max-w-3xl p-4 mx-auto">
      <Helmet>
        <title>Interactive Fetch Example | Learn JavaScript</title>
        <meta name="description" content="Learn about CRUD operations and API interactions with this hands-on example." />
      </Helmet>

      <h1 className="mb-6 text-3xl font-bold">Interactive Fetch Example</h1>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Select HTTP Method:</label>
        <div className="flex space-x-2">
          {Object.keys(explanations).map((method) => (
            <button
              key={method}
              onClick={() => setSelectedMethod(method)}
              className={`px-4 py-2 rounded ${
                selectedMethod === method
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {method === 'GET' ? 'GET ALL' : method}
            </button>
          ))}
        </div>
      </div>

      {selectedMethod !== 'GET' && (
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Enter Data:</label>
          <div className="space-y-2">
            {(selectedMethod === 'PUT' || selectedMethod === 'DELETE') && (
              <input
                type="text"
                name="id"
                value={inputData.id}
                onChange={handleInputChange}
                placeholder="Enter ID (required for PUT and DELETE)"
                className="w-full p-2 text-black border rounded"
              />
            )}
            {selectedMethod !== 'DELETE' && (
              <>
                <input
                  type="text"
                  name="name"
                  value={inputData.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  className="w-full p-2 text-black border rounded"
                />
                <input
                  type="email"
                  name="email"
                  value={inputData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  className="w-full p-2 text-black border rounded"
                />
                <input
                  type="number"
                  name="age"
                  value={inputData.age}
                  onChange={handleInputChange}
                  placeholder="Enter age"
                  className="w-full p-2 text-black border rounded"
                />
              </>
            )}
          </div>
        </div>
      )}

      <button
        onClick={handleOperation}
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Send Request'}
      </button>

      <div className="relative flex items-center justify-center h-32 my-6">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-bold">Client</span>
          <div className={`flex items-center justify-center w-20 h-20 text-center rounded-full ${animationState === 'sending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Send Request
          </div>
        </div>
        <div className="relative w-32 h-4 mx-2 overflow-hidden bg-gray-300 rounded-full">
          <div className={`absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full ${animationState === 'sending' ? 'animate-move-right' : 'hidden'}`}></div>
        </div>
        <div className="relative flex items-center justify-center w-20 h-20 border-4 border-gray-300 rounded-full">
          API
          <div className={`absolute inset-0 bg-yellow-200 rounded-full ${animationState === 'processing' ? 'animate-pulse' : 'opacity-0'}`}></div>
        </div>
        <div className="relative w-32 h-4 mx-2 overflow-hidden bg-gray-300 rounded-full">
          <div className={`absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full ${animationState === 'receiving' ? 'animate-move-right' : 'hidden'}`}></div>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-bold">Client</span>
          <div className={`flex items-center justify-center w-20 h-20 text-center rounded-full ${animationState === 'completed' || animationState === 'receiving' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
            Receive Result
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">Fetch Code:</h2>
        <pre className="p-4 overflow-x-auto text-black bg-gray-100 rounded">
          <code>{fetchCode}</code>
        </pre>
      </div>

      {result && (
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-semibold">Result:</h2>
          <pre className="p-4 overflow-x-auto text-black bg-gray-100 rounded">
            <code>{result}</code>
          </pre>
        </div>
      )}

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Explanation</h2>
        <p className="mb-4">{explanations[selectedMethod]}</p>
        <h3 className="mb-2 text-xl font-semibold">What's happening:</h3>
        <ol className="space-y-2 list-decimal list-inside">
          <li>You select an HTTP method (GET, POST, PUT, or DELETE).</li>
          <li>You enter data into the form fields. For PUT and DELETE, an ID is required to identify the resource.</li>
          <li>The "Fetch Code" section updates to show how your request would look using the Fetch API.</li>
          <li>When you click "Send Request", a simulated API call is made with your data.</li>
          <li>The API simulation has a 10% chance of returning an error to demonstrate error handling.</li>
          <li>The response (or error) is then displayed in the "Result" section, showing how your data was processed.</li>
        </ol>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Key Concepts</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>CRUD:</strong> Create (POST), Read (GET), Update (PUT), Delete (DELETE) - the four basic operations for persistent storage.</li>
          <li><strong>API:</strong> Application Programming Interface - a set of rules that allow programs to talk to each other.</li>
          <li><strong>Fetch:</strong> A modern JavaScript API for making HTTP requests to servers.</li>
          <li><strong>Promise:</strong> An object representing the eventual completion or failure of an asynchronous operation.</li>
          <li><strong>async/await:</strong> Syntax for writing asynchronous code that looks and behaves more like synchronous code.</li>
          <li><strong>Resource Identification:</strong> Using IDs to specify which resource to update or delete in PUT and DELETE operations.</li>
        </ul>
      </div>
    </div>
  );
};

export default InteractiveFetch;
