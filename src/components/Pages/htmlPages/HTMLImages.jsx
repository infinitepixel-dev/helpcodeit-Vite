import React from "react";
import { Image, Info, Code, ChevronRight } from "lucide-react";
import CodeBlock from "@subComponents/CodeBlock";
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';

const HTMLImages = () => {

    const codeArray = [
        {
            code: `<img src="path/to/image.jpg" alt="Description of the image">`,
            language: "html"
        },
        {
            code: `img {
    width: 100%;
    height: auto;
}`,
            language: "css"
        },
        {
            code: `img {
    max-width: 100%;
    height: auto;
}`,
            language: "css"
        },
        {
            code: `img {
    border: 2px solid #333;
    border-radius: 8px;
}

.circle-img {
    border-radius: 50%;
}`,
            language: "css"
        },
        {
            code: `img {
    filter: grayscale(100%);
}`,
            language: "css"
        },
        {
            code: `<div class="hero-section">
    <img src="path/to/background.jpg" alt="Background">
</div>

.hero-section {
    background-image: url('path/to/background.jpg');
    background-size: cover;
    background-position: center;
}`,
            language: "css"
        },
        {
            code: `<img src="path/to/image.jpg" alt="Lazy load example" loading="lazy">`,
            language: "html"
        }
    ];

    return (
        <div className="container p-8 mb-28">
            <div className="flex items-center justify-center mb-8">
                <Image className="my-auto mb-3 h-14 w-14 me-4" />
                <h1 className="my-auto mb-4 text-5xl font-bold text-pretty">Understanding How Images Work with HTML and CSS</h1>
            </div>
            <section className="mb-8">
                <h2 className="flex items-center mb-2 text-2xl font-semibold">
                    <Info className="mr-2" /> Introduction to Images in HTML
                </h2>
                <p className="mb-4">
                    When building a website, images play a crucial role in enhancing the visual appeal and providing context to your content. Understanding how to add and style images using HTML and CSS is essential for any beginner in web development. This guide will walk you through the basics of using images in HTML and CSS, along with best practices to ensure your images are accessible, responsive, and optimized.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="flex items-center mb-2 text-2xl font-semibold">
                    <Code className="mr-2" /> Adding Images with HTML
                </h2>
                <p className="mb-4">
                    To display an image on a webpage, you use the <code>&lt;img&gt;</code> tag in HTML. The <code>&lt;img&gt;</code> tag is a self-closing tag, meaning it doesn’t need an opening and closing pair like other HTML tags. Here’s a simple example:
                </p>
                <CodeBlock
                    code={codeArray[0].code}
                    language={codeArray[0].language}
                />
                <p className="mt-4">
                    - <strong>`src` attribute</strong>: The <code>src</code> (source) attribute specifies the path to the image file. This can be a relative path (a path relative to the location of the HTML file) or an absolute URL (a full web address).
                    <br />
                    - <strong>`alt` attribute</strong>: The <code>alt</code> (alternative text) attribute provides a text description of the image. This is important for accessibility, as it allows screen readers to describe the image to users with visual impairments. It also helps if the image fails to load, as the alt text will be displayed instead.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="flex items-center mb-2 text-2xl font-semibold">
                    <ChevronRight className="mr-2" /> Best Practices for Using Images in HTML
                </h2>
                <ul className="ml-6 list-disc">
                    <li className="mb-2">
                        <strong>Use Descriptive Alt Text</strong>: Always provide meaningful alt text. It should describe the content and function of the image. For example, if the image is of a product, the alt text might be "Red leather wallet."
                    </li>
                    <li className="mb-2">
                        <strong>Keep File Sizes Small</strong>: Large images can slow down your website. Compress your images using tools like TinyPNG or ImageOptim before uploading them to your site. This improves load times and overall user experience.
                    </li>
                    <li className="mb-2">
                        <strong>Use Correct File Formats</strong>: Choose the appropriate image format:
                        <ul className="ml-6 list-disc">
                            <li><strong>JPEG</strong>: Best for photographs and images with many colors.</li>
                            <li><strong>PNG</strong>: Ideal for images that require transparency or have fewer colors, such as logos.</li>
                            <li><strong>SVG</strong>: A scalable vector format perfect for icons and illustrations that need to be sharp at any size.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Responsive Images</strong>: Make sure your images look good on all devices by using responsive techniques, which we’ll discuss further down.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="flex items-center mb-2 text-2xl font-semibold">
                    <Code className="mr-2" /> Styling Images with CSS
                </h2>
                <p className="mb-4">
                    Once your image is in place, CSS can be used to style and control its appearance on the page. Here are some common CSS properties and techniques used to style images:
                </p>
                <h3 className="flex items-center mb-2 text-xl font-semibold">Setting Image Width and Height</h3>
                <CodeBlock
                    code={codeArray[1].code}
                    language={codeArray[1].language}
                />
                <p className="mt-4">
                    - <strong>`width`</strong>: Sets the width of the image. Using `100%` makes the image as wide as its containing element.
                    <br />
                    - <strong>`height`</strong>: Setting `height: auto` maintains the aspect ratio of the image, preventing it from being distorted.
                </p>

                <h3 className="flex items-center mt-6 mb-2 text-xl font-semibold">Making Images Responsive</h3>
                <CodeBlock
                    code={codeArray[2].code}
                    language={codeArray[2].language}
                />
                <p className="mt-4">
                    This CSS rule ensures that the image scales down if the screen size is smaller than the image's natural width but doesn't scale up beyond its natural size, maintaining image quality.
                </p>

                <h3 className="flex items-center mt-6 mb-2 text-xl font-semibold">Adding Borders and Shapes</h3>
                <CodeBlock
                    code={codeArray[3].code}
                    language={codeArray[3].language}
                />
                <p className="mt-4">
                    - <strong>`border`</strong>: Adds a border around the image.
                    <br />
                    - <strong>`border-radius`</strong>: Controls the roundness of the image's corners. Using `50%` on a square image creates a perfect circle.
                </p>

                <h3 className="flex items-center mt-6 mb-2 text-xl font-semibold">CSS Filters</h3>
                <CodeBlock
                    code={codeArray[4].code}
                    language={codeArray[4].language}
                />
                <p className="mt-4">
                    This example would make the image appear in black and white.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="flex items-center mb-2 text-2xl font-semibold">
                    <ChevronRight className="mr-2" /> Advanced Techniques
                </h2>
                <h3 className="flex items-center mt-6 mb-2 text-xl font-semibold">Using Background Images</h3>
                <CodeBlock
                    code={codeArray[5].code}
                    language={codeArray[5].language}
                />
                <p className="mt-4">
                    - <strong>`background-image`</strong>: Specifies the image to use as the background.
                    <br />
                    - <strong>`background-size: cover`</strong>: Ensures the background image covers the entire area, cropping as necessary.
                    <br />
                    - <strong>`background-position: center`</strong>: Centers the image within the element.
                </p>

                <h3 className="flex items-center mt-6 mb-2 text-xl font-semibold">Lazy Loading Images</h3>
                <CodeBlock
                    code={codeArray[6].code}
                    language={codeArray[6].language}
                    />

                    <p className="mb-4"> The loading=“lazy” attribute tells the browser to load the image only when it's needed.</p>
            </section>
                    <section>
                <h2 className="flex items-center mb-2 text-2xl font-semibold">
                    <ChevronRight className="mr-2" /> Conclusion
                </h2>
                <p className="mb-4">
                    Understanding how to use and style images in HTML and CSS is a fundamental skill in web development. By following best practices such as using descriptive alt text, optimizing images for performance, and applying responsive design techniques, you can create websites that are both visually appealing and user-friendly. As you continue to learn and experiment with HTML and CSS, you'll discover more advanced ways to manipulate and present images, adding depth and creativity to your web projects.
                </p>
            </section>
        </div>
    );
};

export default HTMLImages;