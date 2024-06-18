const FetchArray = [
    {
        title: 'Fetch GET Request using Async/Await',
        code: `const fetchGet = async () => {
    try {
        let response = await fetch(URL_ENDPOINT);
        let data = await response.json();
        console.log(data); // Do something with the data here!
    } catch (error) {
        console.error('Error:', error);
    }
}`,
        content: [
            {
                description:
                    'Line 1: We declare an asynchronous function called fetchGet. This function will be used to make a GET request to the API.',
            },
            {
                description:
                    'Line 2: We use a try/catch block to handle the promise returned by the fetch function. This is a best practice to handle errors when working with asynchronous code.',
            },
            {
                description:
                    'Line 3: We use the await keyword to pause the execution of the function until the promise returned by fetch resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 4: We use the await keyword to pause the execution of the function until the promise returned by response.json resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 5: We log the data to the console. This is where you would do something with the data, such as updating the UI of your application.',
            },
            {
                description:
                    'Line 6: We use the catch block to handle any errors that occur during the execution of the try block. This is a best practice when working with asynchronous code.',
            },
        ],
    },
    {
        title: 'Fetch GET One Item Request using Async/Await',
        code: `const fetchGetOne = async (id) => {
    try {
        let response = await fetch(URL_ENDPOINT + '/' + id);
        let data = await response.json();
        console.log(data); // Do something with the data here!
    } catch (error) {
        console.error('Error:', error);
    }
}`,
        content: [
            {
                description:
                    'Line 1: We declare an asynchronous function called fetchGetOne. This function will be used to make a GET request to the API to retrieve a single item.',
            },
            {
                description:
                    'Line 2: We use a try/catch block to handle the promise returned by the fetch function. This is a best practice to handle errors when working with asynchronous code.',
            },
            {
                description:
                    'Line 3: We use the await keyword to pause the execution of the function until the promise returned by fetch resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 4: We use the await keyword to pause the execution of the function until the promise returned by response.json resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 5: We log the data to the console. This is where you would do something with the data, such as updating the UI of your application.',
            },
            {
                description:
                    'Line 6: We use the catch block to handle any errors that occur during the execution of the try block. This is a best practice when working with asynchronous code.',
            },
        ],
    },
    {
        title: 'Fetch POST Request using Async/Await',
        code: `const fetchPost = async () => {
    try {
        let response = await fetch(URL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('object you are posting')
        });
        let data = await response.json();
        console.log(data); // Do something with the data here!
    } catch (error) {
        console.error('Error:', error);
    }
}`,
        content: [
            {
                description:
                    'Line 1: We declare an asynchronous function called fetchPost. This function will be used to make a POST request to the API.',
            },
            {
                description:
                    'Line 2: We use a try/catch block to handle the promise returned by the fetch function. This is a best practice to handle errors when working with asynchronous code.',
            },
            {
                description:
                    'Line 3: We use the await keyword to pause the execution of the function until the promise returned by fetch resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 4: We use the await keyword to pause the execution of the function until the promise returned by response.json resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 5: We log the data to the console. This is where you would do something with the data, such as updating the UI of your application.',
            },
            {
                description:
                    'Line 6: We use the catch block to handle any errors that occur during the execution of the try block. This is a best practice when working with asynchronous code.',
            },
        ],
    },

    {
        title: 'Fetch PUT Request using Async/Await',
        code: `const fetchPut = async () => {
    try {
        let response = await fetch(URL_ENDPOINT + "/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('Object you are updating') // Your item can go here instead of making the object inline.
        });
        let data = await response.json();
        console.log(data); // Do something with the data here!
    } catch (error) {
        console.error('Error:', error);
    }
}`,
        content: [
            {
                description:
                    'Line 1: We declare an asynchronous function called fetchPut. This function will be used to make a PUT request to the API.',
            },
            {
                description:
                    'Line 2: We use a try/catch block to handle the promise returned by the fetch function. This is a best practice to handle errors when working with asynchronous code.',
            },
            {
                description:
                    'Line 3: We use the await keyword to pause the execution of the function until the promise returned by fetch resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 4: We use the await keyword to pause the execution of the function until the promise returned by response.json resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 5: We log the data to the console. This is where you would do something with the data, such as updating the UI of your application.',
            },
            {
                description:
                    'Line 6: We use the catch block to handle any errors that occur during the execution of the try block. This is a best practice when working with asynchronous code.',
            },
        ],
    },
    {
        title: 'Fetch DELETE Request using Async/Await',
        code: `const fetchDelete = async () => {
    try {
        let response = await fetch(URL_ENDPOINT + "/" + id, {
            method: 'DELETE'
        });
        let data = await response.json();
        console.log(data); // Do something with the data here!
    } catch (error) {
        console.error('Error:', error);
    }
}`,
        content: [
            {
                description:
                    'Line 1: We declare an asynchronous function called fetchDelete. This function will be used to make a DELETE request to the API.',
            },
            {
                description:
                    'Line 2: We use a try/catch block to handle the promise returned by the fetch function. This is a best practice to handle errors when working with asynchronous code.',
            },
            {
                description:
                    'Line 3: We use the await keyword to pause the execution of the function until the promise returned by fetch resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 4: We use the await keyword to pause the execution of the function until the promise returned by response.json resolves. This is a best practice when working with asynchronous code.',
            },
            {
                description:
                    'Line 5: We log the data to the console. This is where you would do something with the data, such as updating the UI of your application.',
            },
            {
                description:
                    'Line 6: We use the catch block to handle any errors that occur during the execution of the try block. This is a best practice when working with asynchronous code.',
            },
        ],
    },
]

export default FetchArray
