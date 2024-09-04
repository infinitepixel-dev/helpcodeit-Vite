import CodeBlock from "@subComponents/CodeBlock";



const CSSAnimationsIntro = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <h1 className="mb-4 text-2xl font-semibold">Introduction to CSS Animations</h1>
      <p className="mb-4">
        CSS animations allow you to add visual effects to HTML elements without needing to rely on JavaScript. With animations, you can change the style of an element over time, such as moving it, changing its size, rotating it, or fading it in or out. These animations can enhance the user experience by making web pages feel more dynamic and interactive.
      </p>

      <h2 className="mb-2 text-xl font-semibold">Key Concepts</h2>
      <ol className="pl-5 mb-4 list-decimal">
        <li className="mb-2">
          <strong>Keyframes:</strong><br />
          Keyframes define the start and end points of an animation, along with possible intermediate waypoints. They are created using the <code className="px-1 bg-gray-200 rounded">{"@keyframes"}</code> rule, where you specify what should happen at specific points during the animation.
        </li>
        <li className="mb-2">
          <strong>Animation Properties:</strong><br />
          <ul className="pl-5 list-disc">
            <li><strong>animation-name</strong>: Specifies the name of the <code className="px-1 bg-gray-200 rounded">{"@keyframes"}</code> animation.</li>
            <li><strong>animation-duration</strong>: Defines how long the animation should take to complete one cycle.</li>
            <li><strong>animation-timing-function</strong>: Controls the speed of the animation (e.g., ease, linear, ease-in, ease-out).</li>
            <li><strong>animation-delay</strong>: Specifies a delay before the animation starts.</li>
            <li><strong>animation-iteration-count</strong>: Defines how many times the animation should repeat (e.g., <code className="px-1 bg-gray-200 rounded">infinite</code> for continuous repetition).</li>
            <li><strong>animation-direction</strong>: Determines whether the animation should reverse direction on each cycle (<code className="px-1 bg-gray-200 rounded">normal</code>, <code className="px-1 bg-gray-200 rounded">reverse</code>, <code className="px-1 bg-gray-200 rounded">alternate</code>).</li>
            <li><strong>animation-fill-mode</strong>: Dictates what styles should be applied to the element before the animation starts and after it ends.</li>
          </ul>
        </li>
      </ol>

      <h2 className="mb-2 text-xl font-semibold">Basic Example</h2>
      <p className="mb-4">Let’s look at a simple example of a CSS animation that changes the color of a box from red to blue.</p>

      <CodeBlock
        code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation Example</title>
    <style>
        /* Define the animation keyframes */
        @keyframes colorChange {
            0% { background-color: red; }
            100% { background-color: blue; }
        }

        /* Apply the animation to the element */
        .animated-box {
            width: 100px;
            height: 100px;
            background-color: red;
            animation-name: colorChange;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
        }
    </style>
</head>
<body>
    <div class="animated-box"></div>
</body>
</html>`}
        language="html"
      />

      <h2 className="mb-2 text-xl font-semibold">How It Works</h2>
      <ul className="pl-5 mb-4 list-disc">
        <li><strong>Keyframes:</strong> The <code className="px-1 bg-gray-200 rounded">@keyframes colorChange</code> defines an animation that starts with a red background at 0% (the beginning) and ends with a blue background at 100% (the end).</li>
        <li><strong>Animation Properties:</strong>
          <ul className="pl-5 list-disc">
            <li>The <code className="px-1 bg-gray-200 rounded">animation-name: colorChange;</code> links the defined keyframes to the <code className="px-1 bg-gray-200 rounded">.animated-box</code> element.</li>
            <li><code className="px-1 bg-gray-200 rounded">animation-duration: 2s;</code> sets the animation to run over 2 seconds.</li>
            <li><code className="px-1 bg-gray-200 rounded">animation-timing-function: ease-in-out;</code> makes the animation speed up at the start and slow down at the end.</li>
            <li><code className="px-1 bg-gray-200 rounded">animation-iteration-count: infinite;</code> ensures the animation will keep repeating indefinitely.</li>
          </ul>
        </li>
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Advanced Animations</h2>
      <p className="mb-4">You can create more complex animations by:</p>
      <ul className="pl-5 mb-4 list-disc">
        <li>Using multiple keyframes (e.g., 0%, 50%, 100%) to define more steps.</li>
        <li>Combining multiple animations on a single element using the <code className="px-1 bg-gray-200 rounded">animation</code> shorthand property.</li>
        <li>Adjusting the animation’s direction and fill mode for different effects.</li>
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Shorthand Property</h2>
      <p className="mb-4">You can use the <code className="px-1 bg-gray-200 rounded">animation</code> shorthand to define all the animation properties in one line:</p>

      <CodeBlock
        code={`.animated-box {
    animation: colorChange 2s ease-in-out infinite;
}`}
        language="css"
      />

      <h2 className="mb-2 text-xl font-semibold">Conclusion</h2>
      <p>
        CSS animations are a powerful tool for creating engaging and dynamic web content. By mastering keyframes and animation properties, you can enhance the user experience on your website with smooth, visually appealing effects. Start experimenting with different animations to see how they can transform your designs!
      </p>
    </div>
  );
};

export default CSSAnimationsIntro;