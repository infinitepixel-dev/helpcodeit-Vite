import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const CSSResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Responsive Design with CSS | Help Code It</title>
        <meta
          name="description"
          content="Learn how to create responsive web designs using CSS. Understand media queries, flexible layouts, and mobile-first approach."
        />
        <link rel="canonical" href="https://www.helpcodeit.com/cssPages/CSSResponsive" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">Responsive Design with CSS</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Responsive Design?</h2>
        <p className="mb-4">
          Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It uses CSS techniques to adapt the layout and styling of a website to provide an optimal viewing experience across different devices, from desktop computers to mobile phones.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts of Responsive Design</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Fluid Grids</li>
          <li>Flexible Images</li>
          <li>Media Queries</li>
          <li>Mobile-First Approach</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Media Queries</h2>
        <p className="mb-4">
          Media queries are a key component of responsive design. They allow you to apply CSS styles based on the characteristics of the device, such as its width, height, or orientation.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="whitespace-pre-wrap">
            <code>
              {`@media (max-width: 600px) {
  /* Styles for screens up to 600px wide */
}

@media (min-width: 601px) and (max-width: 1024px) {
  /* Styles for screens between 601px and 1024px wide */
}

@media (min-width: 1025px) {
  /* Styles for screens wider than 1024px */
}`}
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Example</h2>
        <p className="mb-4">
          Resize your browser window to see how the box below changes color based on the window width. Current width: {windowWidth}px
        </p>
        <div
          className={`p-4 rounded-lg text-white text-center ${
            windowWidth < 600
              ? 'bg-red-500'
              : windowWidth < 1024
              ? 'bg-yellow-500'
              : 'bg-green-500'
          }`}
        >
          {windowWidth < 600
            ? 'Small Screen'
            : windowWidth < 1024
            ? 'Medium Screen'
            : 'Large Screen'}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Flexible Images</h2>
        <p className="mb-4">
          To make images responsive, you can use the max-width property:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <pre className="whitespace-pre-wrap">
            <code>
              {`img {
  max-width: 100%;
  height: auto;
}`}
            </code>
          </pre>
        </div>
        <p className="mb-4">This ensures that images never exceed their container's width while maintaining their aspect ratio.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mobile-First Approach</h2>
        <p className="mb-4">
          The mobile-first approach involves designing for mobile devices first, then progressively enhancing the design for larger screens. This often results in cleaner, more focused designs and can improve performance on mobile devices.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="whitespace-pre-wrap">
            <code>
              {`/* Base styles for mobile */
.container {
  width: 100%;
  padding: 10px;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}`}
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          Responsive design is crucial for creating websites that work well across all devices. By using fluid grids, flexible images, and media queries, you can ensure your website provides an optimal viewing experience for all users, regardless of their device.
        </p>
      </section>
    </div>
  );
};

export default CSSResponsive;