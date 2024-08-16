import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';
import 'ace-builds/src-noconflict/mode-html';
import { Helmet } from 'react-helmet-async';

const AccessibilityChecklist = () => {
    const codeExamples = [
      {
        code: "<nav>\n  <!-- Navigation items -->\n</nav>",
        language: "html",
      },
      {
        code: "<label for='username'>Username:</label>\n<input type='text' id='username' name='username'>",
        language: "html",
      },
      {
        code: "<a href='#' role='button'>Click me</a>",
        language: "html",
      },
      {
        code: "<img src='example.jpg' alt='A description of the image' />",
        language: "html",
      },
      {
        code: "<img src='decorative.jpg' alt='' />",
        language: "html",
      },
      {
        code: "<input type='text' aria-label='Search' />",
        language: "html",
      },
      {
        code: "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Sub-subheading</h3>",
        language: "html",
      },
      {
        code: "<form>\n  <fieldset>\n    <legend>Personal Information</legend>\n    <label for='name'>Name:</label>\n    <input type='text' id='name' name='name'>\n  </fieldset>\n</form>",
        language: "html",
      },
      {
        code: "<video controls>\n  <source src='movie.mp4' type='video/mp4'>\n  Your browser does not support the video tag.\n</video>",
        language: "html",
      },
      {
        code: "<a href='#main-content' class='skip-link'>Skip to content</a>",
        language: "html",
      },
      {
        code: "<html lang='en'>\n  <!-- Rest of the document -->\n</html>",
        language: "html",
      },
    ];

    return (
      <div className="container mb-36">
        <Helmet>
          <title>Accessibility Checklist | Help Code It</title>
          <meta

            name="description"
            content="Learn how to create accessible websites by following a checklist of common accessibility practices in HTML. Accessibility is essential for ensuring that all users, including those with disabilities, can access and interact with your content."
          />
          <meta property="og:title" content="Accessibility in HTML Checklist | Help Code It" />
          <meta name='keywords' content='Accessibility, Web Accessibility, HTML Accessibility, Accessibility Checklist' />
          <meta canonical="https://www.helpcodeit.com/htmlPages/AccessibilityChecklist" />
        </Helmet>



        <section>
          <h2 className="pb-5 text-5xl text-center text-balance">Guide to Common Accessibility in HTML</h2>
          <ul className="pl-5 space-y-4 list-disc">
            <li>
              <strong>Semantic HTML</strong>
              <p>Semantic HTML is one of those parts of HTML that people often overlook. It is easy to look at it soley as a means to organize. And it is important to realize how much people rely on it. It is the foundation of accessibility. By using proper HTML elements, you create a structure that is meaningful and navigable by assistive technologies like screen readers. This is why it is important to:</p>
              <ul className="pl-5 list-inside">
                <li>Use proper HTML elements (e.g., <code className='border-none shadow-none '>&lt;nav&gt;</code>, <code className='border-none shadow-none '>&lt;header&gt;</code>, <code className='border-none shadow-none '>&lt;footer&gt;</code>, <code className='border-none shadow-none '>&lt;article&gt;</code>, <code className='border-none shadow-none '>&lt;section&gt;</code>, <code className='border-none shadow-none '>&lt;main&gt;</code>, <code className='border-none shadow-none '>&lt;aside&gt;</code>).</li>
                <li>Ensure all form elements have associated labels (<code className='border-none shadow-none '>&lt;label&gt;</code>).</li>
              </ul>
              <CodeBlock code={codeExamples[0].code} language={codeExamples[0].language} />
              <CodeBlock code={codeExamples[1].code} language={codeExamples[1].language} />
            </li>

            <li>
              <strong>Keyboard Navigation</strong>
              <ul className="pl-5 list-inside">
                <li>Ensure all interactive elements (links, buttons, form controls) are accessible via keyboard (Tab, Enter, Space).</li>
                <li>Test focus styles to make sure they are visible and not overridden by custom styles.</li>
              </ul>
              <CodeBlock code={codeExamples[2].code} language={codeExamples[2].language} />
            </li>

            <li>
              <strong>ARIA Landmarks and Roles</strong>
              <ul className="pl-5 list-inside">
                <li>ARIA (Accessible Rich Internet Applications) landmarks and roles are used to enhance the accessibility of web applications by providing additional semantic information that helps assistive technologies, like screen readers, understand the structure and purpose of web content. Landmarks define key areas of a webpage (such as banner, navigation, main, and contentinfo), allowing users to quickly navigate to these sections using screen reader shortcuts. Roles, on the other hand, define the function of elements that may not be naturally conveyed by HTML alone, such as buttons, dialogs, or progress bars. This ensures that all users, regardless of disability, can interact with complex web interfaces effectively and efficiently, improving overall usability and user experience.</li>
                <li>Ensure ARIA attributes are used correctly (e.g., <code className='border-none shadow-none '>aria-label</code>, <code className='border-none shadow-none '>aria-labelledby</code>, <code className='border-none shadow-none '>aria-hidden</code>).</li>
              </ul>
              <CodeBlock code={codeExamples[5].code} language={codeExamples[5].language} />
            </li>

            <li>
              <strong>Alt Text for Images</strong>
              <ul className="pl-5 list-inside">
                <li>Provide meaningful <code className='border-none shadow-none '>alt</code> attributes for all images. by adding the alt tag you provide a description of the image to screen readers. When the reader encounters an image, it will read the alt text aloud, allowing users to understand the content of the image. The reader would hear something like this: "Image: A description of the image".</li>
                <li>Ensure decorative images have empty <code className='border-none shadow-none '>alt</code> attributes (<code className='border-none shadow-none '>alt=""</code>).</li>
              </ul>
              <CodeBlock code={codeExamples[3].code} language={codeExamples[3].language} />
              <CodeBlock code={codeExamples[4].code} language={codeExamples[4].language} />
            </li>

            <li>
              <strong>Color Contrast</strong>
              <ul className="pl-5 list-inside">
                <li>Check color contrast ratios to ensure text is readable against its background (minimum 4.5:1 for regular text).</li>
                <li>Use tools like a contrast checker to validate color choices. One such site is  <a href="https://webaim.org/resources/contrastchecker/" referrerPolicy='noreferrer' className='font-bold text-blue-500 hover:text-blue-700 hover:underline' target='_blank' >Web AIM</a> which provides a contrast checker tool that is completely free to use.</li>
              </ul>
            </li>

            <li>
              <strong>Text Resizing and Zoom</strong>
              <ul className="pl-5 list-inside">
                <li>Ensure that the layout remains functional when text is resized up to 200%.</li>
                <li>Make sure the site is usable when zoomed in up to 400% without horizontal scrolling.</li>
              </ul>
            </li>

            <li>
              <strong>Responsive Design</strong>
              <ul className="pl-5 list-inside">
                <li>In the last ten years the use of mobile devices has increased dramatically. It is important to make sure that your site is responsive. This means that the site will look good on any device. This is important for accessibility because it allows users to access your site on any device.</li>
                <li>When designing the site to be responsive, one major concern is touchpoints. Make sure that all touchpoints are large enough to be easily clicked on a touch screen.</li>
                <li>Also avoid fixed-width elements that could break layouts on smaller screens.</li>
              </ul>
            </li>

            <li>
              <strong>Forms and Inputs</strong>
              <ul className="pl-5 list-inside">
                <li>Ensure that form fields are properly labeled and grouped using <code className='border-none shadow-none '>&lt;fieldset&gt;</code> and <code className='border-none shadow-none '>&lt;legend&gt;</code>.</li>
                <li>Provide clear instructions and error messages for form validation.</li>
              </ul>
              <CodeBlock code={codeExamples[7].code} language={codeExamples[7].language} />
            </li>

            <li>
              <strong>Multimedia Content</strong>
              <ul className="pl-5 list-inside">
                <li>Provide captions for videos.</li>
                <li>Ensure that audio content has transcripts available.</li>
                <li>Include controls to pause, stop, or adjust volume for any autoplaying media.</li>
              </ul>
              <CodeBlock code={codeExamples[8].code} language={codeExamples[8].language} />
            </li>

            <li>
              <strong>Headings and Structure</strong>
              <ul className="pl-5 list-inside">
                <li>Use headings (<code className='border-none shadow-none '>&lt;h1&gt;</code> to <code className='border-none shadow-none '>&lt;h6&gt;</code>) to reflect the structure and hierarchy of content.</li>
                <li>Avoid skipping heading levels (e.g., do not jump from <code className='border-none shadow-none '>&lt;h1&gt;</code> to <code className='border-none shadow-none '>&lt;h3&gt;</code>).</li>
              </ul>
              <CodeBlock code={codeExamples[6].code} language={codeExamples[6].language} />
            </li>

            <li>
              <strong>Skip Links</strong>
              <ul className="pl-5 list-inside">
                <li>Implement a "skip to content" link at the top of the page to allow users to bypass repetitive navigation.</li>
              </ul>
              <CodeBlock code={codeExamples[9].code} language={codeExamples[9].language} />
            </li>

            <li>
              <strong>Forms of Feedback</strong>
              <ul className="pl-5 list-inside">
                <li>Ensure that success, error, and warning messages are visible and communicated to screen readers.</li>
              </ul>
            </li>

            <li>
              <strong>Timed Content</strong>
              <ul className="pl-5 list-inside">
                <li>Provide mechanisms to extend time limits or disable them where possible.</li>
              </ul>
            </li>

            <li>
              <strong>Language Declaration</strong>
              <ul className="pl-5 list-inside">
                <li>Declare the default language of the document using the <code className='border-none shadow-none '>lang</code> attribute on the <code className='border-none shadow-none '>&lt;html&gt;</code> element.</li>
              </ul>
              <CodeBlock code={codeExamples[10].code} language={codeExamples[10].language} />
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold">The Importance of Accessibility Changes</h3>
          <p>
            Ensuring accessibility in front-end projects is not just a technical requirement; it’s a commitment to inclusivity...
            {/* Full content from the provided text goes here */}
          </p>
          <p>
            <strong>Semantic HTML</strong> is the foundation of accessibility. By using proper HTML elements, you create a structure that is meaningful and navigable by assistive technologies like screen readers...
          </p>
          <p>
            <strong>Keyboard navigation</strong> is crucial because not all users can use a mouse...
          </p>
          {/* Add the rest of the content similarly */}
        </section>
      </div>
    );
  };

  export default AccessibilityChecklist;
