import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const TypographyDemo = ({ property, value, options, onChangeText }) => (
  <div className="mb-4">
    <label className="block mb-2 font-bold">{property}:</label>
    <select
      value={value}
      onChange={(e) => onChangeText(property, e.target.value)}
      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const CSSTypography = () => {
  const [text, setText] = useState({
    fontFamily: "'Arial', sans-serif",
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: 'currentColor',
  });

  const handleChangeText = (property, value) => {
    setText(prevState => {
      const newState = { ...prevState, [property]: value };
      console.log('Updated state:', newState); // Debug log
      return newState;
    });
  };

  const options = {
    fontFamily: [
      { value: "'Arial', sans-serif", label: "Arial" },
      { value: "'Times New Roman', serif", label: "Times New Roman" },
      { value: "'Courier New', monospace", label: "Courier New" },
      { value: "'Georgia', serif", label: "Georgia" },
      { value: "'Verdana', sans-serif", label: "Verdana" },
    ],
    fontSize: [
      { value: '12px', label: "12px" },
      { value: '16px', label: "16px" },
      { value: '20px', label: "20px" },
      { value: '24px', label: "24px" },
      { value: '32px', label: "32px" },
    ],
    fontWeight: [
      { value: 'normal', label: "Normal" },
      { value: 'bold', label: "Bold" },
      { value: '100', label: "Thin (100)" },
      { value: '300', label: "Light (300)" },
      { value: '500', label: "Medium (500)" },
      { value: '700', label: "Bold (700)" },
      { value: '900', label: "Black (900)" },
    ],
    lineHeight: [
      { value: '1', label: "1 (No spacing)" },
      { value: '1.5', label: "1.5 (Default)" },
      { value: '2', label: "2 (Double spaced)" },
      { value: '2.5', label: "2.5 (Extra spaced)" },
    ],
    letterSpacing: [
      { value: 'normal', label: "Normal" },
      { value: '1px', label: "1px" },
      { value: '2px', label: "2px" },
      { value: '-1px', label: "Tighter (-1px)" },
    ],
    textAlign: [
      { value: 'left', label: "Left" },
      { value: 'center', label: "Center" },
      { value: 'right', label: "Right" },
      { value: 'justify', label: "Justify" },
    ],
    color: [
      { value: 'currentColor', label: "Current Color" },
      { value: 'red', label: "Red" },
      { value: 'blue', label: "Blue" },
      { value: 'green', label: "Green" },
      { value: '#FF00FF', label: "Magenta" },
    ],
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <Helmet>
        <title>Typography in CSS | Help Code It</title>
        <meta
          name="description"
          content="Learn about typography in CSS and experiment with different text properties interactively."
        />
        <link rel="canonical" href="https://www.helpcodeit.com/cssPages/CSSTypography" />
      </Helmet>

      <h1 className="mb-8 text-4xl font-bold">Typography in CSS</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Interactive Demo</h2>
          <TypographyDemo property="fontFamily" value={text.fontFamily} options={options.fontFamily} onChangeText={handleChangeText} />
          <TypographyDemo property="fontSize" value={text.fontSize} options={options.fontSize} onChangeText={handleChangeText} />
          <TypographyDemo property="fontWeight" value={text.fontWeight} options={options.fontWeight} onChangeText={handleChangeText} />
          <TypographyDemo property="lineHeight" value={text.lineHeight} options={options.lineHeight} onChangeText={handleChangeText} />
          <TypographyDemo property="letterSpacing" value={text.letterSpacing} options={options.letterSpacing} onChangeText={handleChangeText} />
          <TypographyDemo property="textAlign" value={text.textAlign} options={options.textAlign} onChangeText={handleChangeText} />
          <TypographyDemo property="color" value={text.color} options={options.color} onChangeText={handleChangeText} />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Result</h2>
          <div
            className="p-4 text-black bg-white border rounded dark:bg-gray-800 dark:text-white"
            style={{
              fontFamily: text.fontFamily,
              fontSize: text.fontSize,
              fontWeight: text.fontWeight,
              lineHeight: text.lineHeight,
              letterSpacing: text.letterSpacing,
              textAlign: text.textAlign,
              color: text.color !== 'currentColor' ? text.color : 'inherit',
            }}
          >
            <p>
              This is a sample text to demonstrate various typography properties in CSS.
              You can adjust the values on the left to see how they affect this text.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Explanation</h2>
        <ul className="pl-6 list-disc">
          <li><strong>Font Family:</strong> Specifies the typeface for the text.</li>
          <li><strong>Font Size:</strong> Sets the size of the text.</li>
          <li><strong>Font Weight:</strong> Determines the thickness of the text (e.g., normal, bold).</li>
          <li><strong>Line Height:</strong> Controls the spacing between lines of text.</li>
          <li><strong>Letter Spacing:</strong> Adjusts the space between characters.</li>
          <li><strong>Text Align:</strong> Sets the horizontal alignment of the text.</li>
          <li><strong>Color:</strong> Defines the color of the text.</li>
        </ul>
      </div>
    </div>
  );
};

export default CSSTypography;