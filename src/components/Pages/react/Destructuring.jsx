import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

function Destructuring() {
    const codeRef = useRef(null);

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, []);

    return (
        <div className="pb-14">
            <Helmet>
                <title>Destructuring Props in React</title>
                <meta name="description" content="Learn how to destructure props in React to make your code cleaner and more readable. Includes examples for function components and class components." />
                <meta name="keywords" content="React, destructuring props, JavaScript, function components, class components" />
            </Helmet>
            <div className="container mx-auto px-4">
                <h1 className="my-5 text-center text-6xl">Destructuring Props in React</h1>
                <hr className="my-4"/>
                <section>
                    <h2 className="text-4xl my-4">What is Destructuring?</h2>
                    <p>Destructuring is a JavaScript feature that allows you to unpack values from arrays or properties from objects into distinct variables. In React, destructuring props helps you extract specific properties from the props object, making your code simpler and easier to understand.</p>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Benefits of Destructuring Props</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Clarity:</strong> Destructuring makes it clear which props a component is using.</li>
                        <li><strong>Conciseness:</strong> It reduces the amount of code you need to write, avoiding repetitive <i>props.</i> references.</li>
                        <li><strong>Readability:</strong> Your code becomes more readable and easier to maintain.</li>
                        <li><strong>Avoiding Typos:</strong> Destructuring can help prevent typos by reducing the number of times you need to type <i>props.</i></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Basic Destructuring in Function Components</h2>
                    <pre><code className="language-jsx">
{`import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;`}
                    </code></pre>
                    <p>To destructure the <i>name</i> prop, you can modify the function parameter:</p>
                    <pre><code className="language-jsx">
{`import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`}
                    </code></pre>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Destructuring Multiple Props</h2>
                    <pre><code className="language-jsx">
{`import React from 'react';

function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default UserCard;`}
                    </code></pre>
                    <p>Destructure the <i>name</i> and <i>email</i> props:</p>
                    <pre><code className="language-jsx">
{`import React from 'react';

function UserCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;`}
                    </code></pre>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Destructuring in Class Components</h2>
                    <pre><code className="language-jsx">
{`import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default Profile;`}
                    </code></pre>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Destructuring with Default Values</h2>
                    <p>You can also provide default values when destructuring props. This is useful when a prop might not be passed:</p>
                    <pre><code className="language-jsx">
{`import React from 'react';

function User({ name = 'Guest', email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default User;`}
                    </code></pre>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Destructuring Nested Props</h2>
                    <pre><code className="language-jsx">
{`import React from 'react';

function Address({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.address.city}</p>
    </div>
  );
}

export default Address;`}
                    </code></pre>
                    <p>Destructure the nested <i>user</i> prop:</p>
                    <pre><code className="language-jsx">
{`import React from 'react';

function Address({ user: { name, address: { city } } }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{city}</p>
    </div>
  );
}

export default Address;`}
                    </code></pre>
                </section>
                <section>
                    <h2 className="text-4xl my-4">Practical Examples</h2>
                    <h3 className="text-3xl my-3">Example 1: Destructuring Props in a Functional Component</h3>
                    <pre><code className="language-jsx">
{`import React from 'react';

function Product({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
    </div>
  );
}

export default Product;`}
                    </code></pre>
                    <h3 className="text-3xl my-3">Example 2: Destructuring Props with Default Values</h3>
                    <pre><code className="language-jsx">
{`import React from 'react';

function WelcomeMessage({ username = 'Guest' }) {
  return <h1>Welcome, {username}!</h1>;
}

export default WelcomeMessage;`}
                    </code></pre>
                    <h3 className="text-3xl my-3">Example 3: Destructuring Nested Props</h3>
                    <pre><code className="language-jsx">
{`import React from 'react';

function OrderSummary({ order: { id, details: { product, quantity } } }) {
  return (
    <div>
      <h3>Order ID: {id}</h3>
      <p>Product: {product}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default OrderSummary;`}
                    </code></pre>
                </section>
            </div>
        </div>
    );
}

export default Destructuring;
