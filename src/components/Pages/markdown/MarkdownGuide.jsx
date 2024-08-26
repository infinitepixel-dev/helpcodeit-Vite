import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import markdown from 'highlight.js/lib/languages/markdown';
import 'highlight.js/styles/atom-one-dark.css'
import { Helmet } from 'react-helmet-async';
import CodeBlock from '@/components/Sub_Components/CodeBlock';

hljs.registerLanguage('markdown', markdown);

const MarkdownGuide = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const examples = [
    { title: 'Headers', content: '# Header 1\n## Header 2\n### Header 3' },
    { title: 'Emphasis', content: '*italic*\n**bold**\n***bold and italic***' },
    { title: 'Lists', content: '1. First item\n2. Second item\n\n- Unordered item\n- Another item' },
    { title: 'Links', content: '[Visit OpenAI](https://www.openai.com)' },
    { title: 'Images', content: '![Alt text](https://example.com/image.jpg)' },
    { title: 'Python', content: '`inline code`\n\n```python\nprint("Hello, World!")\n```' },
    { title: 'JavaScript', content: '```javascript\nconsole.log("Hello, World!")\n```' },
    { title: 'Blockquotes', content: '> This is a blockquote' },
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
      <h2 className="mb-4 text-2xl font-semibold">## A Versitile Markup Language Used Everywhere!</h2>
      <p className="mb-6 text-lg">
        Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
        Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages. We see if first as developers in README files on GitHub, but it's also used in forums, blogs, and other platforms. It is a simple way to format text that can be converted to HTML and other formats. There are tons of formatters that can convert it to HTML, PDF, and other formats.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Why use Markdown?</h2>
      <ul className="mb-6 space-y-2 list-disc list-inside">
        <li>It's easy to learn and use</li>
        <li>It's readable even in its raw form</li>
        <li>It's widely supported across various platforms</li>
        <li>It can display code with language syntax highlights.</li>
        <li>It can be converted to HTML and other formats</li>
      </ul>
      <h2 className="mb-4 text-3xl font-semibold text-center">Markdown Examples</h2>
      <hr className="mb-6 border-b-2 border-gray-300" />
      <div className="grid grid-cols-2">
        {examples.map((example, index) => (
          <div key={index} className="mx-auto mb-6">
            <h3 className="mb-2 text-xl font-semibold text-center">{example.title}</h3>
            <pre className="p-4 rounded-lg ">
              <CodeBlock code={example.content} language="markdown"/>
            </pre>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xl mb-14">
        Start using Markdown in your documents today to create well-formatted, easy-to-read content that can be easily converted to HTML or other formats!
      </p>


    </div>
  );
};

export default MarkdownGuide;