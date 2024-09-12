import React from 'react';
import { Helmet } from 'react-helmet-async';
import CodeBlock from '@/components/Sub_Components/CodeBlock';
import { useEffect } from 'react';

const EventListeners = () => {
  const vanillaJSExample = `
// Select the element
const button = document.querySelector('#myButton');

// Add event listener
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Remove event listener
function handleClick() {
  console.log('Button clicked!');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
`;

  const jQueryExample = `
// Add event listener
$('#myButton').on('click', function() {
  console.log('Button clicked!');
});

// Remove event listener
function handleClick() {
  console.log('Button clicked!');
}
$('#myButton').on('click', handleClick);
$('#myButton').off('click', handleClick);
`;

  const interactiveHtmlExample = `
<div id="colorBox" class="flex items-center justify-center w-32 h-32 mb-4 bg-gray-300">
  #CCCCCC
</div>
<button id="changeColorBtn" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
  Change Color
</button>
  `.trim();

  const interactiveExample = `
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeColorBtn.addEventListener('click', function() {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
  colorBox.textContent = newColor;
});
  `.trim();

  useEffect(() => {
    const colorBox = document.getElementById('colorBox');
    const changeColorBtn = document.getElementById('changeColorBtn');

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function handleChangeColor() {
      const newColor = getRandomColor();
      colorBox.style.backgroundColor = newColor;
      colorBox.textContent = newColor;
    }

    changeColorBtn.addEventListener('click', handleChangeColor);

    // Clean up the event listener when the component unmounts
    return () => {
      changeColorBtn.removeEventListener('click', handleChangeColor);
    };
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <Helmet>
        <title>Event Listeners in JavaScript | Learn JavaScript</title>
        <meta name="description" content="Learn about event listeners in JavaScript, including vanilla JS and jQuery approaches." />
        <meta name="keywords" content="event listeners, JavaScript, vanilla JS, jQuery, web development, interactive web applications" />
        <meta name="author" content="Michael Varnell" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="twitter" content="summary_large_image" />
        <meta name="og:title" content="Event Listeners in JavaScript | Learn JavaScript" />
        <meta name="og:description" content="Learn about event listeners in JavaScript, including vanilla JS and jQuery approaches." />
        <meta name="og:type" content="website" />

      </Helmet>

      <h1 className="mb-6 font-semibold text-7xl text-balance">Event Listeners in JavaScript</h1>

      <p className="mb-4">
        Event listeners are a crucial part of creating interactive web applications. They allow you to respond to user actions and browser events, making your web pages dynamic and responsive. When you get into React, you will see that event listeners are still used, but the syntax is different and they are easier to manage.
      </p>

      <h2 className="mt-6 mb-4 text-2xl font-semibold">Vanilla JavaScript Event Listeners</h2>

      <p className="mb-4">
        In vanilla JavaScript, you can add event listeners using the <code>addEventListener</code> method. Here's a basic example:
      </p>

      <CodeBlock code={vanillaJSExample} language="javascript" />

      <p className="mt-4 mb-4">
        The <code>addEventListener</code> method takes two main arguments:
        <ol className="ml-4 list-decimal list-inside">
          <li>The event type (e.g., 'click', 'mouseover', 'keydown')</li>
          <li>The function to be executed when the event occurs</li>
        </ol>
      </p>

      <h2 className="mt-6 mb-4 text-2xl font-semibold">jQuery Event Listeners</h2>

      <p className="mb-4">
        jQuery provides a simpler syntax for adding event listeners. Here's how you can achieve the same result using jQuery:
      </p>

      <CodeBlock code={jQueryExample} language="javascript" />

      <p className="mt-4 mb-4">
        jQuery's <code>on</code> method is used to attach event handlers. The syntax is similar to vanilla JavaScript, but it's often more concise and works consistently across different browsers.
      </p>

      <h2 className="mt-6 mb-4 text-2xl font-semibold">Interactive Example</h2>
      <p className="mt-4 mb-4">Here we show an example where clicking a button changes the color of a box, using vanilla JS, with code provided for both the HTML and the JavaScript</p>

      <div className="my-10">
          <div id="colorBox" className="flex items-center justify-center w-32 h-32 mb-4 font-bold text-gray-300 border-2 border-gray-300 rounded-md">
            #CCCCCC
          </div>
          <button id="changeColorBtn" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
            Change Color
          </button>
      </div>

      <p className="mb-4">
        Let's create the simple interactive example where clicking a button changes the color of a box. Here's the HTML structure:
      </p>

      <CodeBlock code={interactiveHtmlExample} language="html" />

      <p className="mt-4 mb-4">And here's the JavaScript code that adds the event listener:</p>

      <CodeBlock code={interactiveExample} language="javascript" />

        <hr className="my-10 border-gray-300" />
        <h2 className="mt-6 mb-4 text-2xl font-semibold">Common Event Types</h2>
        <p className="mb-4">
          Here's a table of common event types you can use with event listeners, along with what they're listening for:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full mb-6 border-collapse table-auto bg-gray-50">
            <thead>
              <tr className="text-white bg-green-700">
                <th className="p-2 text-center border border-gray-400">Event Type</th>
                <th className="p-2 text-left border border-gray-400">Description</th>
                <th className="p-2 text-left border border-gray-400">Example Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"click"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When an element is clicked</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>element.addEventListener('click', handleClick);</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"mouseover"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When the mouse pointer enters an element</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>element.addEventListener('mouseover', handleMouseOver);</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"mouseout"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When the mouse pointer leaves an element</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>element.addEventListener('mouseout', handleMouseOut);</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"keydown"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When a key is pressed down</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>document.addEventListener('keydown', handleKeyDown); </code> <br /><br /> To get the key that was pressed, you can use <code>event.key</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"keyup"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When a key is released</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>document.addEventListener('keyup', handleKeyUp);</code> <br /><br /> To get the key that was released, you can use <code>event.key</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"submit"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When a form is submitted</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>form.addEventListener('submit', handleSubmit);</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"change"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When the value of an input element changes</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>input.addEventListener('change', handleChange);</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"load"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When a page or an element has finished loading</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>window.addEventListener('load', handleLoad);</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"resize"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When the browser window is resized</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>window.addEventListener('resize', handleResize);</code></td>
              </tr>
              <tr>
                <td className="p-2 text-center text-gray-700 border border-gray-400">"scroll"</td>
                <td className="p-2 text-gray-700 border border-gray-400">When the user scrolls in the specified element</td>
                <td className="p-2 text-gray-700 border border-gray-400"><code>window.addEventListener('scroll', handleScroll);</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-4">
          These are just a few of the many event types available. When using event listeners, keep in mind:
        </p>
        <ul className="ml-6 list-disc">
          <li>Some events bubble up through the DOM, meaning they can be caught by parent elements.</li>
          <li>The <code>event</code> object passed to your handler function contains useful information about the event.</li>
          <li>You can use <code>event.preventDefault()</code> to stop the default behavior of certain events (like form submission).</li>
          <li>For performance reasons, consider using event delegation for large numbers of similar elements.</li>
        </ul>
        <hr className="my-10 border-gray-300" />

      <h2 className="mt-6 mb-4 text-2xl font-semibold">Key Concepts</h2>

      <ul className="ml-4 list-disc list-inside">
        <li>Event listeners "listen" for specific events on HTML elements.</li>
        <li>Common events include 'click', 'mouseover', 'keydown', 'submit', etc.</li>
        <li>You can add multiple listeners to the same element for different events.</li>
        <li>It's important to remove event listeners when they're no longer needed to prevent memory leaks.</li>
        <li>jQuery simplifies the process of adding and removing event listeners, especially for older browsers.</li>
      </ul>

      <p className="mt-6 mb-4">
        Practice adding and removing event listeners to different elements on your web pages. Experiment with various event types to create more interactive and responsive web applications!
      </p>
    </div>
  );
};

export default EventListeners;