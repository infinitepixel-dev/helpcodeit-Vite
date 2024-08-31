import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ColorDemo = ({ title, children }) => (
  <div className="p-4 mb-8 bg-white border rounded dark:bg-gray-800">
    <h3 className="mb-4 text-xl font-bold">{title}</h3>
    {children}
  </div>
);

const ColorInput = ({ value, onChange, label }) => (
  <div className="flex flex-col items-start mb-2 md:mb-0 md:mr-4">
    <label className="mb-1">{label}</label>
    <input
      type="color"
      value={value}
      onChange={onChange}
      className="w-12 h-12 p-1 border rounded cursor-pointer"
    />
  </div>
);

const CSSColors = () => {
  const [solidColor, setSolidColor] = useState('#3498db');
  const [gradientColor1, setGradientColor1] = useState('#3498db');
  const [gradientColor2, setGradientColor2] = useState('#e74c3c');
  const [gradientDirection, setGradientDirection] = useState('to right');

  return (
    <div className="container px-4 py-8 mx-auto">
      <Helmet>
        <title>Working with Colors in CSS | Help Code It</title>
        <meta
          name="description"
          content="Learn how to work with colors and gradients in CSS, including different color formats and interactive examples."
        />
        <link rel="canonical" href="https://www.helpcodeit.com/cssPages/CSSColors" />
      </Helmet>

      <h1 className="mb-8 text-4xl font-bold">Working with Colors in CSS</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Color Formats in CSS</h2>
        <p className="mb-4">CSS supports various color formats:</p>
        <ul className="pl-6 mb-4 list-disc">
          <li><strong>Keyword:</strong> Predefined color names (e.g., red, blue, green)</li>
          <li><strong>Hexadecimal:</strong> #RRGGBB or #RGB (e.g., #FF0000 for red)</li>
          <li><strong>RGB:</strong> rgb(red, green, blue) (e.g., rgb(255, 0, 0) for red)</li>
          <li><strong>RGBA:</strong> rgba(red, green, blue, alpha) (e.g., rgba(255, 0, 0, 0.5) for semi-transparent red)</li>
          <li><strong>HSL:</strong> hsl(hue, saturation, lightness) (e.g., hsl(0, 100%, 50%) for red)</li>
          <li><strong>HSLA:</strong> hsla(hue, saturation, lightness, alpha) (e.g., hsla(0, 100%, 50%, 0.5) for semi-transparent red)</li>
        </ul>
      </section>

      <ColorDemo title="Solid Colors">
        <div className="flex flex-col items-center mb-4 md:flex-row">
          <ColorInput
            value={solidColor}
            onChange={(e) => setSolidColor(e.target.value)}
            label="Select color"
          />
          <p className="mt-2 md:mt-0 md:ml-4">Selected color: {solidColor}</p>
        </div>
        <div
          className="w-full h-20 rounded"
          style={{ backgroundColor: solidColor }}
        ></div>
        <p className="mt-2">CSS: <code>background-color: {solidColor};</code></p>
      </ColorDemo>

      <ColorDemo title="Gradients">
        <div className="flex flex-col items-center mb-4 md:flex-row">
          <ColorInput
            value={gradientColor1}
            onChange={(e) => setGradientColor1(e.target.value)}
            label="Color 1"
          />
          <ColorInput
            value={gradientColor2}
            onChange={(e) => setGradientColor2(e.target.value)}
            label="Color 2"
          />
          <div className="w-full mt-2 md:w-auto md:mt-0">
            <label className="block mb-1">Direction</label>
            <select
              value={gradientDirection}
              onChange={(e) => setGradientDirection(e.target.value)}
              className="w-full p-2 border rounded md:w-auto dark:bg-gray-700 dark:text-white"
            >
              <option value="to right">To Right</option>
              <option value="to left">To Left</option>
              <option value="to bottom">To Bottom</option>
              <option value="to top">To Top</option>
              <option value="to bottom right">To Bottom Right</option>
              <option value="to bottom left">To Bottom Left</option>
              <option value="to top right">To Top Right</option>
              <option value="to top left">To Top Left</option>
            </select>
          </div>
        </div>
        <div
          className="w-full h-20 rounded"
          style={{
            background: `linear-gradient(${gradientDirection}, ${gradientColor1}, ${gradientColor2})`,
          }}
        ></div>
        <p className="mt-2">CSS: <code>background: linear-gradient({gradientDirection}, {gradientColor1}, {gradientColor2});</code></p>
      </ColorDemo>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Using Colors in CSS</h2>
        <p className="mb-4">Colors can be applied to various CSS properties:</p>
        <ul className="pl-6 mb-4 list-disc">
          <li><code>color</code>: Sets the text color</li>
          <li><code>background-color</code>: Sets the background color of an element</li>
          <li><code>border-color</code>: Sets the color of an element's border</li>
          <li><code>box-shadow</code>: Adds colored shadows to elements</li>
          <li><code>text-shadow</code>: Adds colored shadows to text</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Working with Gradients</h2>
        <p className="mb-4">CSS supports two types of gradients:</p>
        <ul className="pl-6 mb-4 list-disc">
          <li><strong>Linear Gradients:</strong> Colors transition in a straight line</li>
          <li><strong>Radial Gradients:</strong> Colors transition from a central point outward</li>
        </ul>
        <h3 className="mb-2 text-2xl font-bold">Linear Gradient Syntax:</h3>
        <pre className="p-4 mb-4 overflow-x-auto bg-gray-100 rounded dark:bg-gray-700">
          <code>
            background: linear-gradient(direction, color1, color2, ...);
          </code>
        </pre>
        <h3 className="mb-2 text-2xl font-bold">Radial Gradient Syntax:</h3>
        <pre className="p-4 mb-4 overflow-x-auto bg-gray-100 rounded dark:bg-gray-700">
          <code>
            background: radial-gradient(shape size at position, color1, color2, ...);
          </code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Best Practices for Using Colors</h2>
        <ul className="pl-6 mb-4 list-disc">
          <li>Use a consistent color palette throughout your website</li>
          <li>Ensure sufficient contrast between text and background colors for readability</li>
          <li>Consider color blindness and accessibility when choosing colors</li>
          <li>Use CSS variables (custom properties) for easy theme management</li>
          <li>Implement dark mode using CSS variables or media queries</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Advanced Color Techniques</h2>
        <ul className="pl-6 mb-4 list-disc">
          <li>Use <code>currentColor</code> keyword for dynamic color inheritance</li>
          <li>Implement color theming with CSS variables</li>
          <li>Create color overlays using pseudo-elements and opacity</li>
          <li>Use <code>mix-blend-mode</code> for interesting color effects</li>
          <li>Experiment with CSS filters for color manipulation</li>
        </ul>
      </section>
    </div>
  );
};

export default CSSColors;