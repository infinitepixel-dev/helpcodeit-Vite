
import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';
import 'ace-builds/src-noconflict/mode-html';
import metaimage from '@assets/metapage.webp';

const GuideToMetaTags = () => {
  return (
    <div className="container p-8 mb-24">
      <h1 className="mb-6 text-6xl font-bold text-center text-balance">Guide to Meta Tags in HTML</h1>
<img src={metaimage} alt="Meta Tags" className="hidden w-1/3 rounded-lg shadow-lg md:block float-end " />
      <p className="mb-4">
        Meta tags are small pieces of HTML code that provide metadata about your webpage. Unlike other HTML elements, meta tags don't affect the appearance of a page; they're primarily used by browsers and search engines to gather information about the page. They are typically placed within the <code className='border-none shadow-none'>&lt;head&gt;</code> section of an HTML document.
      </p>

      <h2 className="my-4 text-2xl font-semibold">Why Are Meta Tags Important?</h2>

      <ul className="mb-4 ml-6 list-disc">
        <li><strong>SEO (Search Engine Optimization):</strong> Meta tags play a crucial role in how search engines like Google index and rank your web pages.</li>
        <li><strong>Content Descriptions:</strong> They describe the content, define the character set, or specify keywords for search engines.</li>
        <li><strong>Browser Behaviour:</strong> Meta tags can control the behaviour and display of the browser. For instance, they can control how a page is displayed on mobile devices or handle caching.</li>
        <li><strong>Social Media:</strong> Some meta tags help customize the title, description, image, etc., when your web page is shared on social media platforms (like Facebook, Twitter, etc.).</li>
      </ul>

      <h2 className="my-4 text-2xl font-semibold">The Most Common Meta Tags</h2>

      <h3 className="my-2 text-xl font-semibold">1. Basic Meta Tags</h3>

      <h4 className="my-2 text-lg font-semibold">Title Tag</h4>
      <p className="mb-4">
        Strictly speaking, the title tag is not a meta tag, but it is often discussed alongside meta tags because it appears in the same <code className='border-none shadow-none'>&lt;head&gt;</code> section and is crucial for SEO.
      </p>

      <CodeBlock code={`<title>Your Webpage Title</title>`} language="html" />

      <p className="my-4">
        The content of the <code className='border-none shadow-none'>&lt;title&gt;</code> tag is what appears as the title of the page in search engine results and browser tabs.
      </p>

      <h4 className="my-2 text-lg font-semibold">Description Meta Tag</h4>
      <p className="mb-4">
        This tag provides a brief description of the page's content. Search engines can use this to show a snippet of your page in search results.
      </p>

      <CodeBlock
        code={`<meta name="description" content="This is a brief description of what my webpage is about.">`}
        language="html"
      />

      <p className="my-4"><strong>Example:</strong></p>

      <CodeBlock
        code={`<meta name="description" content="Learn HTML and CSS with our comprehensive guide for beginners.">`}
        language="html"
      />

      <h4 className="my-2 text-lg font-semibold">Keywords Meta Tag</h4>
      <p className="mb-4">
        This tag used to be important for SEO, but nowadays, most search engines ignore it. You can still use it, but don’t rely on it for SEO.
      </p>

      <CodeBlock
        code={`<meta name="keywords" content="HTML, CSS, JavaScript, Web Development">`}
        language="html"
      />

      <h4 className="my-2 text-lg font-semibold">Charset Meta Tag</h4>
      <p className="mb-4">
        This tag defines the character encoding for the HTML document. The most widely used encoding is UTF-8, which supports virtually all characters from the world’s writing systems.
      </p>

      <CodeBlock
        code={`<meta charset="UTF-8">`}
        language="html"
      />

      <h4 className="my-2 text-lg font-semibold">Viewport Meta Tag</h4>
      <p className="mb-4">
        This tag is crucial for making your webpage responsive to different devices, especially mobile devices.
      </p>

      <CodeBlock
        code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        language="html"
      />

      <p className="my-4"><strong>Example:</strong></p>

      <CodeBlock
        code={`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`}
        language="html"
      />

      <ul className="mb-4 ml-6 list-disc">
        <li><code className='border-none shadow-none'>width=device-width</code> makes sure the width of the viewport matches the device’s width.</li>
        <li><code className='border-none shadow-none'>initial-scale=1.0</code> sets the initial zoom level when the page is first loaded.</li>
        <li><code className='border-none shadow-none'>maximum-scale=1.0, user-scalable=no</code> prevents users from zooming in on the page.</li>
      </ul>

      <h3 className="my-2 text-xl font-semibold">2. SEO & Social Media Meta Tags</h3>

      <h4 className="my-2 text-lg font-semibold">Open Graph Tags for Facebook</h4>
      <p className="mb-4">These tags control how your content appears when shared on Facebook.</p>

      <CodeBlock
        code={`<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="A brief description of your page.">
<meta property="og:image" content="URL to image">
<meta property="og:url" content="URL">
<meta property="og:type" content="website">`}
        language="html"
      />

      <p className="my-4"><strong>Example:</strong></p>

      <CodeBlock
        code={`<meta property="og:title" content="Learn HTML & CSS with Us">
<meta property="og:description" content="The best place to learn web development from scratch.">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/learn-html-css">
<meta property="og:type" content="website">`}
        language="html"
      />

      <h4 className="my-2 text-lg font-semibold">Twitter Card Tags</h4>
      <p className="mb-4">These tags customize how your content appears when shared on Twitter.</p>

      <CodeBlock
        code={`<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Page Title">
<meta name="twitter:description" content="A brief description of your content.">
<meta name="twitter:image" content="URL to image">`}
        language="html"
      />

      <p className="my-4"><strong>Example:</strong></p>

      <CodeBlock
        code={`<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Learn HTML & CSS with Us">
<meta name="twitter:description" content="Comprehensive guide to learning web development.">
<meta name="twitter:image" content="https://example.com/image.jpg">`}
        language="html"
      />

      <h3 className="my-2 text-xl font-semibold">3. Control Browser Behavior</h3>

      <h4 className="my-2 text-lg font-semibold">Robots (Indexing and Following)</h4>

      <CodeBlock
        code={`<meta name="robots" content="index, follow">`}
        language="html"
      />

      <p className="my-4">This meta tag tells search engines whether to index your page and follow its links.</p>

      <ul className="mb-4 ml-6 list-disc">
        <li><code className='border-none shadow-none'>index</code> means: "Include this page in search engine results."</li>
        <li><code className='border-none shadow-none'>follow</code> means: "Follow the links on this page."</li>
      </ul>

      <p className="my-4">
        Other possible values are:
      </p>

      <ul className="mb-4 ml-6 list-disc">
        <li><code className='border-none shadow-none'>noindex</code>: Don’t include this page in search engine results.</li>
        <li><code className='border-none shadow-none'>nofollow</code>: Don’t follow any links on this page.</li>
      </ul>

      <p className="my-4"><strong>Example:</strong></p>

      <CodeBlock
        code={`<meta name="robots" content="noindex, nofollow">`}
        language="html"
      />

      <p className="my-4">This example tells search engines not to index the page and not to follow the links.</p>

      <h4 className="my-2 text-lg font-semibold">HTTP-Equiv Content-Type</h4>
      <p className="mb-4">
        This tag sets the content type of the document and the character encoding. However, it’s often better to use the <code className='border-none shadow-none'>&lt;meta charset="UTF-8"&gt;</code> tag.
      </p>

      <CodeBlock
        code={`<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">`}
        language="html"
      />

      <h4 className="my-2 text-lg font-semibold">Refresh</h4>
      <p className="mb-4">This tag will make the webpage reload after a certain period of time.</p>

      <CodeBlock
        code={`<meta http-equiv="refresh" content="30">`}
        language="html"
      />

      <p className="my-4">The <code className='border-none shadow-none'>content</code> attribute tells the page to refresh after 30 seconds.</p>

      <h3 className="my-2 text-xl font-semibold">4. Other Meta Tags</h3>

      <h4 className="my-2 text-lg font-semibold">Author</h4>
      <p className="mb-4">This tag specifies the author of the document.</p>

      <CodeBlock
        code={`<meta name="author" content="John Doe">`}
        language="html"
      />

      <h4 className="my-2 text-lg font-semibold">Theme-Color</h4>
      <p className="mb-4">
        This tag changes the color of the browser’s address bar or tab, mostly used for mobile browsers.
      </p>

      <CodeBlock
        code={`<meta name="theme-color" content="#4285f4">`}
        language="html"
      />

      <h3 className="my-2 text-xl font-semibold">5. Favicon</h3>
      <p className="mb-4">
        While not a meta tag, specifying a `favicon` is also usually done in the <code className='border-none shadow-none'>&lt;head&gt;</code> section of an HTML document.
      </p>

      <CodeBlock
        code={`<link rel="icon" href="favicon.ico" type="image/x-icon">`}
        language="html"
      />

      <h2 className="my-4 text-2xl font-semibold">Common <code className='border-none shadow-none'>&lt;head&gt;</code> Section Layout</h2>
      <p className="mb-4">Here’s an example of what a typical <code className='border-none shadow-none'>&lt;head&gt;</code> section might look like with some common meta tags:</p>

      <CodeBlock
        code={`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A comprehensive guide to learning HTML and CSS.">
    <meta name="author" content="John Doe">

    <meta property="og:title" content="Learn HTML & CSS">
    <meta property="og:description" content="The best place to learn web development.">
    <meta property="og:image" content="https://example.com/og-image.jpg">
    <meta property="og:url" content="https://example.com/learn-html-css">
    <meta property="og:type" content="website">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Learn HTML & CSS">
    <meta name="twitter:description" content="A beginner's guide to web development.">
    <meta name="twitter:image" content="https://example.com/twitter-image.jpg">

    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">

    <title>Learn HTML and CSS</title>
</head>`}
        language="html"
      />

      <h2 className="my-4 text-2xl font-semibold">Conclusion</h2>
      <p className="mb-4">
        Meta tags might seem small and insignificant at first, but they play a crucial role in determining your pages' visibility, user experience, and how the content is shared across different platforms. As a beginner, start with the basics such as description and viewport tags. As you grow more comfortable, you can explore more specific tags like Open Graph and Twitter Cards.
      </p>
    </div>
  );
};

export default GuideToMetaTags;
