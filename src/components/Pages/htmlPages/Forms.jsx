import React from "react";
import { TextCursorInput, Info, CheckSquare, AlignCenter, Layers } from "lucide-react";
import CodeBlock from "@subComponents/CodeBlock";
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
// import { FormSelect } from "react-bootstrap";

const Form = () => {
  return (
    <div className="container p-8 mb-24">
      <h1 className="mb-4 text-3xl font-bold">Understanding Forms in HTML</h1>

      <p className="mb-6">
        Forms are a crucial part of web development, allowing users to input and submit data.
        HTML provides various elements to create forms for different purposes.
      </p>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <TextCursorInput className="mr-2" /> Basic Form Structure
        </h2>
        <p className="mb-4">
          A form in HTML is created using the <code className="border-none shadow-none">&lt;form&gt;</code> element.
          Inside it, you define different input elements such as text fields, checkboxes, radio buttons, etc.
          Here’s an example of a simple form:
        </p>
        <CodeBlock
          code={`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <input type="submit" value="Submit">
</form>`}
          language="html"
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <CheckSquare className="mr-2" /> Input Types
        </h2>
        <p className="mb-4">
          HTML provides a variety of input types to cater to different data inputs.
          Here are some commonly used input types:
        </p>
        <CodeBlock
          code={`<form>
  <label for="text">Text:</label>
  <input type="text" id="text" name="text">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <label for="number">Number:</label>
  <input type="number" id="number" name="number">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <label for="date">Date:</label>
  <input type="date" id="date" name="date">

  <label for="checkbox">Checkbox:</label>
  <input type="checkbox" id="checkbox" name="checkbox">

  <label for="radio">Radio:</label>
  <input type="radio" id="radio" name="radio">

  <input type="submit" value="Submit">
</form>`}
          language="html"
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <AlignCenter className="mr-2" /> Grouping Form Elements
        </h2>
        <p className="mb-4">
          You can group related form elements using the <code className="border-none shadow-none">&lt;fieldset&gt;</code> element,
          and provide a caption using the <code className="border-none shadow-none">&lt;legend&gt;</code> element. This helps in better organization and readability:
        </p>
        <CodeBlock
          code={`<form>
  <fieldset>
    <legend>Personal Information</legend>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>

  <input type="submit" value="Submit">
</form>`}
          language="html"
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Layers className="mr-2" /> Form Validation
        </h2>
        <p className="mb-4">
          Form validation ensures that the user inputs data correctly before submitting the form.
          HTML5 provides built-in validation attributes like <code className="border-none shadow-none">required</code>, <code className="border-none shadow-none">minlength</code>,
          <code className="border-none shadow-none">maxlength</code>, and more:
        </p>
        <CodeBlock
          code={`<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required minlength="4" maxlength="8">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100">

  <input type="submit" value="Submit">
</form>`}
          language="html"
        />
      </section>

      <section>
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Info className="mr-2" /> Best Practices for Using Forms
        </h2>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            <strong>Use Proper Input Types</strong>: Choose the correct input type for the data you’re collecting to enhance user experience and data accuracy.
          </li>
          <li className="mb-2">
            <strong>Validate User Input</strong>: Ensure data integrity by validating user input both on the client side and server side.
          </li>
          <li>
            <strong>Group Related Inputs</strong>: Use <code className="border-none shadow-none">&lt;fieldset&gt;</code> and <code className="border-none shadow-none">&lt;legend&gt;</code> to group related form elements, making the form more accessible and easier to navigate.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Form;