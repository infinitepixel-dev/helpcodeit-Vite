// REVIEW Array of objects for AJAX and AXIOS operations

const AJAXArray = [
    {
        title: 'AJAX GET:',
   code: `$.ajax({
    url: "Your API URL Here",
    method: "GET",
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.log(error);
    },
});`,
        content: [
            {
                description:
                    'In the first line we are using the $.ajax method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the method of the request. In this case it is a GET request.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
    {
        title: 'AJAX POST:',
        code: `$.ajax({
    url: "Your API URL Here",
    method: "POST",
    data: {
      name: "John Doe",
      age: 25,
    },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.log(error);
    },
});`,
        content: [
            {
                description:
                    'In the first line we are using the $.ajax method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the method of the request. In this case it is a GET request.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
    {
        title: 'AJAX PUT:',
        code: `$.ajax({
    url: "Your API URL Here" + "/" + id,
    method: "PUT",
    data: {
      name: "John Doe",
      age: 25,
    },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.log(error);
    },
});`,
        content: [
            {
                description:
                    'In the first line we are using the $.ajax method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the method of the request. In this case it is a GET request.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
    {
        title: 'AJAX DELETE:',
        code: `$.ajax({
    url: "Your API URL Here" + "/" + id,
    method: "DELETE",
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.log(error);
    },
});`,
        content: [
            {
                description:
                    'In the first line we are using the $.ajax method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the method of the request. In this case it is a GET request.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
    {
        title: 'AJAX GET ONE:',
        code: `$.ajax({
        url: "Your API URL Here" + "/" + id,
        method: "GET",
        data: {
        id: 1,
        },
        success: function (data) {
        console.log(data);
        },
        error: function (error) {
        console.log(error);
        },
    });`,
        content: [
            {
                description:
                    'In the first line we are using the $.ajax method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the method of the request. In this case it is a GET request.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
]

const AXIOSArray = [
    {
        title: 'AXIOS GET:',
        code: `axios.get('Your API URL Here')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });`,
        content: [
            {
                description:
                    'In the first line we are using the axios.get method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fourth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
    {
        title: 'AXIOS POST:',
        code: `axios.post('Your API URL Here', {
          name: 'John Doe',
          age: 25,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });`,
        content: [
            {
                description:
                    'In the first line we are using the axios.post method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the data that we want to send to the API.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
    {
        title: 'AXIOS PUT:',
        code: `axios.put('Your API URL Here' + "/" + id, {
          name: 'John Doe',
          age: 25,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });`,
        content: [
            {
                description:
                    'In the first line we are using the axios.put method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the data that we want to send to the API.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },

    {
        title: 'AXIOS DELETE:',
        code: `axios.delete('Your API URL Here' + "/" + id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });`,
        content: [
            {
                description:
                    'In the first line we are using the axios.delete method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fourth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
    {
        title: 'AXIOS GET ONE:',
        code: `axios.get('Your API URL Here' + "/" + id, {
          params: {
            id: 1,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });`,
        content: [
            {
                description:
                    'In the first line we are using the axios.get method to make a request to the API. This just tells the method that we are making a request to the API.',
            },
            {
                description:
                    'In the second line we are providing the URL of the API we are making the request to.',
            },
            {
                description:
                    'In the third line we are providing the data that we want to send to the API.',
            },
            {
                description:
                    'In the fourth line we are providing a success callback function. This function will be called if the request is successful. This is where you might want to do something with the data that is returned from the API.',
            },
            {
                description:
                    'In the fifth line we are providing an error callback function. This function will be called if the request is not successful. This is where you might want to do something with the error that is returned from the API to let you know what went wrong.',
            },
        ],
    },
]

export { AJAXArray, AXIOSArray }
