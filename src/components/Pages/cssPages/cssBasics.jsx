import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('css', css);

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className=" p-4 rounded-md overflow-x-auto">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

const cssBasics = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const commonAttributes = [
    { attribute: 'color', description: 'Sets the text color', example: 'color: #ff0000;' },
    { attribute: 'background-color', description: 'Sets the background color', example: 'background-color: #f0f0f0;' },
    { attribute: 'font-size', description: 'Sets the font size', example: 'font-size: 16px;' },
    { attribute: 'margin', description: 'Sets the outer spacing', example: 'margin: 10px;' },
    { attribute: 'padding', description: 'Sets the inner spacing', example: 'padding: 5px 10px;' },
    { attribute: 'border', description: 'Sets the border', example: 'border: 1px solid #000000;' },
    { attribute: 'width', description: 'Sets the width', example: 'width: 100px;' },
    { attribute: 'height', description: 'Sets the height', example: 'height: 100px;' },
    { attribute: 'text-align', description: 'Sets the text alignment', example: 'text-align: center;' },
    { attribute: 'font-weight', description: 'Sets the font weight', example: 'font-weight: bold;' },
    { attribute: 'display', description: 'Sets the display behavior', example: 'display: flex;' },
    { attribute: 'flex-direction', description: 'Sets the flex direction', example: 'flex-direction: column;' },
    { attribute: 'justify-content', description: 'Aligns items horizontally', example: 'justify-content: center;' },
    { attribute: 'align-items', description: 'Aligns items vertically', example: 'align-items: center;' },
    { attribute: 'position', description: 'Sets the position type', example: 'position: relative;' },
    { attribute: 'top', description: 'Sets the top position', example: 'top: 10px;' },
    { attribute: 'right', description: 'Sets the right position', example: 'right: 10px;' },
    { attribute: 'bottom', description: 'Sets the bottom position', example: 'bottom: 10px;' },
    { attribute: 'left', description: 'Sets the left position', example: 'left: 10px;' },
    { attribute: 'z-index', description: 'Sets the stack order', example: 'z-index: 1;' },
    { attribute: 'box-shadow', description: 'Sets the shadow effect', example: 'box-shadow: 2px 2px 5px #000000;' },
    { attribute: 'border-radius', description: 'Sets the border radius', example: 'border-radius: 5px;' },
    { attribute: 'overflow', description: 'Sets the overflow behavior', example: 'overflow: hidden;' },
    { attribute: 'transition', description: 'Sets the transition effect', example: 'transition: all 0.3s;' },
    { attribute: 'animation', description: 'Sets the animation effect', example: 'animation: slide 3s infinite;' },
    { attribute: 'filter', description: 'Sets the filter effect', example: 'filter: brightness(0.5);' },
    { attribute: 'cursor', description: 'Sets the cursor type', example: 'cursor: pointer;' },
    { attribute: 'user-select', description: 'Sets the user selection behavior', example: 'user-select: none;' },
    { attribute: 'pointer-events', description : 'Sets the pointer event behavior', example: 'pointer-events: none;' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cascading Style Sheets (CSS)</h1>
<section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is CSS?</h2>
              <p className="text-xl mb-4">
          CSS (Cascading Style Sheets) is essential for defining the visual presentation of HTML documents, separating content from design for flexibility and maintainability. Proposed by Håkon Wium Lie in 1994 and released by W3C in 1996, CSS1 introduced basic styling capabilities.
        </p>
        <p className="text-xl mb-4">
          Subsequent versions like CSS2 and CSS3 added advanced features such as layout controls, animations, and media queries. This separation of content and presentation allows for cleaner code and easier maintenance, enhancing accessibility.
        </p>
        <p className="text-xl mb-4">
          CSS offers extensive styling options for typography, backgrounds, borders, and layout, supporting responsive design through media queries. This ensures a consistent user experience across devices.
        </p>
        <p className="text-xl mb-4">
          CSS animations and transitions create engaging visual effects without JavaScript, adding interactivity and smooth style changes.
        </p>
        <p className="text-xl mb-4">
          Frameworks like Bootstrap and preprocessors like Sass enhance CSS usability, providing pre-designed components and extended features like variables and nested rules.
        </p>
        <p className="text-xl mb-4">
          Efficient CSS usage improves web performance by reducing page load times. Techniques like minification and critical CSS optimization streamline rendering for faster user experiences.
        </p>
        <p className="text-xl mb-4">
          CSS continues to evolve with new features like CSS Grid, Flexbox, and CSS variables, offering powerful tools for responsive design and maintainable styles.
        </p>

      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Link and Use CSS</h2>
        <p className="mb-4">There are three ways to include CSS in your HTML:</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>External CSS:</strong> Link an external CSS file in your HTML head.
            <CodeBlock
              language="html"
              code={`<link rel="stylesheet" href="styles.css">`}
            />
          </li>
          <li className="mb-2">
            <strong>Internal CSS:</strong> Use a style tag in your HTML head.
            <CodeBlock
              language="html"
              code={`<style>
  body {
    background-color: #f0f0f0;
  }
</style>`}
            />
          </li>
          <li className="mb-2">
            <strong>Inline CSS:</strong> Apply styles directly to HTML elements.<span className="font-semibold italic">(This is not recommended as it reduces maintainability)</span>
            <CodeBlock
              language="html"
              code={`<p style="color: blue; font-size: 14px;">This is a paragraph.</p>`}
            />
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CSS Selector Specificity</h2>
        <p className="mb-4">CSS specificity determines which styles are applied when multiple rules target the same element. From least to most specific:</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">Element selectors (e.g., <code className='border-none shadow-none'>p</code>)</li>
          <li className="mb-2">Class selectors (e.g., <code className='border-none shadow-none'>.class-name</code>)</li>
          <li className="mb-2">ID selectors (e.g., <code className='border-none shadow-none'>#id-name</code>)</li>
          <li className="mb-2">Inline styles</li>
        </ol>
        <p className="mb-4">Example of specificity:</p>
        <CodeBlock
          language="css"
          code={`/* Least specific */
p {
  color: blue;
}

/* More specific */
.text-red {
  color: red;
}

/* Most specific */
#unique-paragraph {
  color: green;
}

/* Inline style (highest specificity) */
<p style="color: purple;">This text will be purple</p>`}
        />
      </section>

      <section>
        <div className="overflow-x-auto rounded-lg w-fit mx-auto mb-14">
        <h2 className="text-4xl font-semibold mb-4 text-center">Common CSS Attributes</h2>
          <table className="w-full border-collapse border rounded-lg border-gray-300 ">
            <thead>
              <tr className="dark:bg-gray-800 dark:text-white rounded-lg">
                <th className="border dark:text-white text-black  border-gray-300 px-4 py-2">Attribute</th>
                <th className="border dark:text-white text-black  border-gray-300 px-4 py-2">Description</th>
                <th className="border dark:text-white text-black  border-gray-300 px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              {commonAttributes.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-700' : ''}>
                  <td className="border dark:text-white text-black  border-gray-300 px-4 py-2">{item.attribute}</td>
                  <td className="border dark:text-white text-black  border-gray-300 px-4 py-2">{item.description}</td>
                  <td className="border dark:text-white text-black  border-gray-300 px-4 py-2">
                    <code className='border-none shadow-none'>{item.example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default cssBasics;