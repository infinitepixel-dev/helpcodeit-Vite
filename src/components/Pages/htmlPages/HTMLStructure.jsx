import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import elementDiagram from '@assets/ElementDiagram.png';

const HTMLStructure = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const basicStructure = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`;

  const semanticStructure = `<header>
    <h1>Website Title</h1>
    <nav>
        <!-- Navigation menu items -->
    </nav>
</header>
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
    <aside>
        <!-- Sidebar content -->
    </aside>
</main>
<footer>
    <!-- Footer content -->
</footer>`;

  return (
    <div className=" min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold">HTML Structure and Elements</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            HTML (HyperText Markup Language) is the backbone of web pages. It provides the structure and content of a webpage, which can then be styled with CSS and made interactive with JavaScript.
          </p>
          <p className="mb-4">To create a page we will use many different HTML elements. These elements are the building blocks of a webpage and are used to define the structure and content of the page. In the following image, you can see the basic structure of an HTML page:</p>
          <img src={elementDiagram} alt="HTML Element Diagram" className="w-full p-1 my-5 rounded-lg shadow-lg mx-auto" />
          <p className="mb-4">In this lesson, we will cover the basic structure of an HTML page, key HTML elements, semantic HTML structure, and best practices for writing HTML code.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Basic HTML Page Structure</h2>
          <p className="mb-4">Every HTML page should have the following basic structure:</p>
          <pre>
            <code className="language-html">{basicStructure}</code>
          </pre>
          <p className="mb-4">Let's break down the different parts of the basic structure:</p>
            <ul className="list-disc pl-6 mb-4">
                <li><code className=" text-lg border-none font-bold px-2">&lt;!DOCTYPE html&gt;</code>: Declares that this is an HTML5 document</li>
                <li><code className=" text-lg border-none font-bold px-2">&lt;html lang="en"&gt;</code>: The root (main) element of the HTML page with the language attribute</li>
                <li><code className=" text-lg border-none font-bold px-2">&lt;head&gt;</code>: Contains meta information about the document that the browser and search engines use.</li>
                <li><code className=" text-lg border-none font-bold px-2">&lt;meta charset="UTF-8"&gt;</code>: Specifies the character encoding for the document. UTF-8 is the most common encoding for web pages</li>
                <li><code className=" text-lg border-none font-bold px-2">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>: Sets the viewport width and initial scale for mobile devices produced after the iPhone 4</li>
                <li><code className=" text-lg border-none font-bold px-2">&lt;title&gt;</code>: Specifies a title for the document</li>
                <li><code className=" text-lg border-none font-bold px-2">&lt;body&gt;</code>: Defines the document's body, which contains all the visible contents</li>
            </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key HTML Elements</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><code className="text-lg border-none font-bold px-2">&lt;!DOCTYPE html&gt;</code>: Declares that this is an HTML5 document</li>
            <li><code className="text-lg border-none font-bold px-2">&lt;html&gt;</code>: The root element of the HTML page</li>
            <li><code className="text-lg border-none font-bold px-2">&lt;head&gt;</code>: Contains meta information about the document</li>
            <li><code className="text-lg border-none font-bold px-2">&lt;title&gt;</code>: Specifies a title for the document</li>
            <li><code className="text-lg border-none font-bold px-2">&lt;body&gt;</code>: Defines the document's body, which contains all the visible contents</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Semantic HTML Structure</h2>
          <p className="mb-4">Using semantic HTML elements helps to describe the meaning of the content within the structure. Here's an example of a semantic structure:</p>
          <pre>
            <code className="language-html">{semanticStructure}</code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc pl-6">
            <li>Always use semantic HTML elements when possible <span className='italic'>even though most of the web doesn't reliably use them</span> </li>
            <li>Keep your HTML structure clean and well-indented - There are extensions to help with this.</li>
            <li>Use meaningful class names and IDs - but remember use IDs sparingly, you will need them for other parts of the code later.</li>
            <li>Ensure your page is accessible by using appropriate ARIA attributes when necessary.</li>
            <li>Validate your HTML using tools like the W3C Markup Validation Service to check for errors and to ensure your code is compliant with web standards - This can also check for accessibility issues.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HTMLStructure;
