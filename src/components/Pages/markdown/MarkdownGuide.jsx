import React from 'react';

import { Helmet } from 'react-helmet-async';
import CodeBlock from '@/components/Sub_Components/CodeBlock';

const MarkdownGuide = () => {
  const examples = [
    {
      title: 'Headers',
      content: '# Header 1\n## Header 2\n### Header 3',
      rendered: (
        <>
          <h1 style={{fontSize: '2em', fontWeight: 'bold'}}>Header 1</h1>
          <h2 style={{fontSize: '1.5em', fontWeight: 'bold'}}>Header 2</h2>
          <h3 style={{fontSize: '1.17em', fontWeight: 'bold'}}>Header 3</h3>
        </>
      )
    },
    {
      title: 'Emphasis',
      content: '*italic*\n**bold**\n***bold and italic***',
      rendered: (
        <>
          <p><em>italic</em></p>
          <p><strong>bold</strong></p>
          <p><em><strong>bold and italic</strong></em></p>
        </>
      )
    },
    {
      title: 'Lists',
      content: '1. First item\n2. Second item\n\n- Unordered item\n- Another item',
      rendered: (
        <>
          <ol>
            <li>First item</li>
            <li>Second item</li>
          </ol>
          <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
            <li>Unordered item</li>
            <li>Another item</li>
          </ul>
        </>
      )
    },
    {
      title: 'Links',
      content: '[Visit OpenAI](https://www.openai.com)',
      rendered: (
        <p><a href="https://www.openai.com" target="_blank" rel="noopener noreferrer">Visit OpenAI</a></p>
      )
    },
    {
      title: 'Images',
      content: '![Alt text](https://example.com/image.jpg)',
      rendered: (
        <p><img src="https://example.com/image.jpg" alt="Alt text" style={{maxWidth: '100%', height: 'auto'}} /></p>
      )
    },
    {
      title: 'Inline Code and Code Blocks',
      content: '`inline code`\n\n```python\nprint("Hello, World!")\n```',
      rendered: (
        <>
          <p><code>inline code</code></p>
          <pre><code className="language-python">print("Hello, World!")</code></pre>
        </>
      )
    },
    {
      title: 'Blockquotes',
      content: '> This is a blockquote',
      rendered: (
        <blockquote style={{borderLeft: '4px solid #ccc', paddingLeft: '1em', marginLeft: '0', color: '#666'}}>
          This is a blockquote
        </blockquote>
      )
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <Helmet>
        <title>Markdown Guide | Help Code It</title>
        <meta
          name="description"
          content="Learn how to use Markdown to format text in your documents. Markdown is a lightweight markup language that can be converted to HTML and other formats."
        />
        <meta
          property="og:title"
          content="Markdown Guide | Help Code It"
        />
        <meta
          name='keywords'
          content='Markdown, Markdown Guide, Markdown Examples, Markdown Syntax'
        />
        <meta
        canonical="https://www.helpcodeit.com/markdown/MarkdownGuide" />
      </Helmet>

      <h1 className="mb-6 text-6xl font-bold">Introduction to Markdown</h1>
      <h2 className="mb-4 text-2xl font-semibold">A Versatile Markup Language for Easy Formatting</h2>
      <p className="mb-6 text-lg">
        Markdown is a lightweight markup language that allows you to add formatting to plain text documents using simple and intuitive syntax. Created by John Gruber in 2004, it has become one of the most popular ways to format text for the web.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">How Markdown Works</h2>
      <p className="mb-6 text-lg">
        Markdown uses special characters and simple conventions to indicate how text should be formatted. When you write in Markdown, you're essentially writing plain text with some extra symbols. These symbols tell the Markdown processor how to convert your text into formatted HTML.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Why Use Markdown?</h2>
      <ul className="mb-6 space-y-2 list-disc list-inside">
        <li>Easy to learn and use</li>
        <li>Readable in its raw form</li>
        <li>Widely supported across various platforms</li>
        <li>Can display code with language syntax highlights</li>
        <li>Convertible to HTML and other formats</li>
      </ul>

      <h2 className="mb-4 text-3xl font-semibold text-center">Markdown Examples</h2>
      <p className="mb-6 text-lg">
        Below are some common Markdown syntax examples. Each example shows the raw Markdown and how it appears when rendered.
      </p>
      <hr className="mb-6 border-b-2 border-gray-300" />

      {examples.map((example, index) => (
        <div key={index} className="mb-10">
          <h3 className="mb-2 text-xl font-semibold">{example.title}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-2 text-lg font-medium">Markdown:</h4>
              <CodeBlock code={example.content} language="markdown"/>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-medium">Rendered Result:</h4>
              <div className="p-4 border rounded-lg">{example.rendered}</div>
            </div>
          </div>
        </div>
      ))}

      <p className="mt-8 text-xl mb-14">
        Start using Markdown today to create well-formatted, easy-to-read content that can be easily converted to HTML or other formats. As you can see, the syntax is simple, but the results are powerful!
      </p>
    </div>
  );
};

export default MarkdownGuide;