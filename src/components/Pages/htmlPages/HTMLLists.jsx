import React from "react";
import { List, ListOrdered, Info, Code, ChevronRight, ChevronsRight } from "lucide-react";
import CodeBlock from "@subComponents/CodeBlock";
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import listSloth from "@assets/listSloth.webp";
import { Helmet } from "react-helmet-async";


const HTMLLists = () => {

    let codeArray = [
        {
            code: `<ol>
    <li>Preheat the oven to 350°F (175°C).</li>
    <li>Mix the flour, sugar, and eggs in a bowl.</li>
    <li>Bake for 30 minutes.</li>
</ol>`,
language: "html"
        },
        {
            code: `<ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
</ul>`,
language: "html"
        },
        {
            code: `<dl>
    <dt>HTML</dt>
    <dd>A standard markup language for creating web pages.</dd>
    <dt>CSS</dt>
    <dd>A stylesheet language used to describe the presentation of a document written in HTML.</dd>
</dl>`,
language: "html"
        },
        {
            code: `<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Oranges</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrots</li>
            <li>Broccoli</li>
        </ul>
    </li>
</ul>`,

language: "html"
        },
        {
            code: `<ol start="5">
    <li>Item 1</li>
    <li>Item 2</li>
</ol>`,
language: "html"

        },
        {
            code: `<ul>
    <li>Custom bullet 1</li>
    <li>Custom bullet 2</li>
</ul>`,
language: "html"

        }
        ,
        {
            code: `ul.custom-bullets {
            list-style-type: square;
            `
            ,
            language: "css"
        }
    ];



  return (
    <div className="container p-8">
      <Helmet>
        <title>Understanding Lists in HTML | Help Code It</title>
        <meta
          name="description"
          content="Learn how to create ordered, unordered, and description lists in HTML. Lists are a fundamental part of HTML, allowing you to organize content in a structured, easy-to-read format."
        />
        <meta
          property="og:title"
          content="Understanding Lists in HTML | Help Code It"
        />
        <meta
          name='keywords'
          content='HTML Lists, HTML Ordered Lists, HTML Unordered Lists, HTML Description Lists'
        />
        <meta
          canonical="https://www.helpcodeit.com/htmlPages/HTMLLists" />
      </Helmet>
      <div className="flex items-center justify-center mb-8">
          <List className="my-auto mb-3 h-14 w-14 me-4" />
          <h1 className="my-auto mb-4 text-5xl font-bold">Understanding Lists in HTML </h1>
      </div>
      <p className="mb-6">
        Lists are a fundamental part of HTML, allowing you to organize content
        in a structured, easy-to-read format. Whether you want to display a
        series of items, steps in a process, or a collection of related content,
        HTML provides a simple way to create lists.
        <img src={listSloth} alt="List Sloth" className="hidden float-right w-2/5 m-3 rounded-lg md:block" />
      </p>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <List className="mr-2" /> Types of Lists in HTML
        </h2>
        <p className="mb-4">
          HTML supports three primary types of lists:
        </p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            <strong>Ordered Lists (`&lt;ol&gt;`)</strong>: An ordered list is
            used when the order of items is important, such as a sequence of
            steps in a procedure. Items in an ordered list are automatically
            numbered by the browser.
          </li>
          <li className="mb-2">
            <strong>Unordered Lists (`&lt;ul&gt;`)</strong>: An unordered list
            is used when the order of items doesn’t matter. Each item in an
            unordered list is typically marked with a bullet point.
          </li>
          <li>
            <strong>Description Lists (`&lt;dl&gt;`)</strong>: A description
            list is used to pair terms with their descriptions. It’s commonly
            used for glossaries or for defining terms.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <ListOrdered className="mr-2" /> Creating an Ordered List
        </h2>
        <p className="mb-4">
          An ordered list is created using the `&lt;ol&gt;` element. Each item
          in the list is wrapped in an `&lt;li&gt;` (list item) element. Here’s
          an example of an ordered list:
        </p>
        <CodeBlock
            code={codeArray[0].code}
            language={codeArray[0].language}
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <List className="mr-2" /> Creating an Unordered List
        </h2>
        <p className="mb-4">
          To create an unordered list, use the `&lt;ul&gt;` element in
          combination with the `&lt;li&gt;` element:
        </p>
        <CodeBlock
            code={codeArray[1].code}
            language={codeArray[1].language}
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Info className="mr-2" /> Creating a Description List
        </h2>
        <p className="mb-4">
          A description list is slightly different. It uses three tags:
          `&lt;dl&gt;`, `&lt;dt&gt;`, and `&lt;dd&gt;`. The `&lt;dl&gt;` element
          wraps the entire list, the `&lt;dt&gt;` element represents the term,
          and the `&lt;dd&gt;` element represents the description:
        </p>
        <CodeBlock
          code={codeArray[2].code}
            language={codeArray[2].language}
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <ChevronsRight className="mr-2" /> Nesting Lists
        </h2>
        <p className="mb-4">
          HTML allows you to nest lists within each other. This can be useful
          for creating subcategories within a list. For example:
        </p>
        <CodeBlock
            code={codeArray[3].code}
            language={codeArray[3].language}
        />
      </section>

      <section className="mb-8">
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <Code className="mr-2" /> Attributes and Customization
        </h2>
        <p className="mb-4">
          Lists in HTML can be customized using various attributes and CSS:
        </p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            <strong>Type Attribute (`type`)</strong>: In ordered lists, you can
            specify the type of numbering (e.g., numerals, letters, or Roman
            numerals) using the `type` attribute.
          </li>
          <li className="mb-2">
            <strong>Start Attribute (`start`)</strong>: The `start` attribute
            can be used in an ordered list to specify the starting number.
          </li>
          <CodeBlock
            code={codeArray[3].code}
            language={codeArray[3].language}
            />

          <li>
            <strong>Custom Bullets</strong>: Unordered list bullets can be
            customized using CSS to change their appearance.
          </li>
          <CodeBlock
            code={codeArray[4].code}
            language={codeArray[4].language}
            />
          <CodeBlock
            code={codeArray[5].code}
            language={codeArray[5].language}
            />
        </ul>
      </section>

      <section>
        <h2 className="flex items-center mb-2 text-2xl font-semibold">
          <ChevronRight className="mr-2" /> Best Practices for Using Lists
        </h2>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            <strong>Use Ordered Lists for Sequential Content</strong>: If the
            order of items matters, such as steps in a process, always use an
            ordered list.
          </li>
          <li className="mb-2">
            <strong>Use Unordered Lists for Grouped Content</strong>: For items
            where the sequence doesn’t matter, an unordered list is
            appropriate.
          </li>
          <li>
            <strong>Avoid Over-Nesting</strong>: While nesting lists is a
            powerful feature, excessive nesting can make the HTML code difficult
            to read and maintain. Keep it simple whenever possible.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HTMLLists;
