import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import CodeBlock from '@subComponents/CodeBlock';

function Destructuring() {
    const codeRef = useRef(null);



    return (
        <div className="pb-14">
            <Helmet>
                <title>Destructuring Props in React</title>
                <meta name="description" content="Learn how to destructure props in React to make your code cleaner and more readable. Includes examples for function components and class components." />
                <meta name="keywords" content="React, destructuring props, JavaScript, function components, class components" />
            </Helmet>
            <div className="container px-4 mx-auto">
                <h1 className="my-5 text-6xl text-center">Destructuring Props in React</h1>
                <hr className="my-4"/>
                <section>
                    <h2 className="my-4 text-4xl">What is Destructuring?</h2>
                    <p>Destructuring is a JavaScript feature that allows you to unpack values from arrays or properties from objects into distinct variables. In React, destructuring props helps you extract specific properties from the props object, making your code simpler and easier to understand.</p>
                </section>
                <section>
                    <h2 className="my-4 text-4xl">Benefits of Destructuring Props</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Clarity:</strong> Destructuring makes it clear which props a component is using.</li>
                        <li><strong>Conciseness:</strong> It reduces the amount of code you need to write, avoiding repetitive <i>props.</i> references.</li>
                        <li><strong>Readability:</strong> Your code becomes more readable and easier to maintain.</li>
                        <li><strong>Avoiding Typos:</strong> Destructuring can help prevent typos by reducing the number of times you need to type <i>props.</i></li>
                    </ul>
                </section>
                <section>
                    <h2 className="my-4 text-4xl">Basic Destructuring in Function Components</h2>
                   <CodeBlock language="javascript" code={`import React from 'react';

function Greeting(props) {
  const { name } = props;
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`} />

                    <p>To destructure the <i>name</i> prop, you can modify the function parameter:</p>
                    <CodeBlock language="javascript" code={`import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`} />

                </section>
                <section>
                    <h2 className="my-4 text-4xl">Destructuring Multiple Props</h2>
                    <p>You can destructure multiple props in a single line:</p>
                    <CodeBlock language="javascript" code={`import React from 'react';

function UserCard(props) {
  const { name, email } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;`} />
                    <p>Destructure the <i>name</i> and <i>email</i> props:</p>
                   <CodeBlock language="javascript" code={`import React from 'react';

function UserCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;`} />

                </section>
                <section>
                    <h2 className="my-4 text-4xl">Destructuring in Class Components</h2>
                    <CodeBlock language="javascript" code={`import React, { Component } from 'react';

class UserProfile
  extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default UserProfile;`} />
                </section>
                <section>
                    <h2 className="my-4 text-4xl">Destructuring with Default Values</h2>
                    <p>You can also provide default values when destructuring props. This is useful when a prop might not be passed:</p>
                    <CodeBlock language="javascript" code={`import React from 'react';

function WelcomeMessage(props) {
  const { username = 'Guest' } = props;
  return <h1>Welcome, {username}!</h1>;
}

export default WelcomeMessage;`} />
                </section>
                <section>
                    <h2 className="my-4 text-4xl">Destructuring Nested Props</h2>
                    <p>If your props contain nested objects, you can destructure them as well:</p>
                    <CodeBlock language="javascript" code={`import React from 'react';

function Address(props) {
  const { user } = props;
  const { name, address } = user;
  const { city } = address;
  return (
    <div>
      <h3>{name}</h3>
      <p>{city}</p>
    </div>
  );
}

export default Address;`} />
                    <p>Destructure the nested <i>user</i> prop:</p>
                    <CodeBlock language="javascript" code={`import React from 'react';

function Address({ user: { name, address: { city } } }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{city}</p>
    </div>
  );
}

export default Address;`} />
                </section>
                <section>
                    <h2 className="my-4 text-4xl">Practical Examples</h2>
                    <h3 className="my-3 text-3xl">Example 1: Destructuring Props in a Functional Component</h3>
                    <CodeBlock language="javascript" code={`import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`} />
                    <h3 className="my-3 text-3xl">Example 2: Destructuring Props with Default Values</h3>
                    <CodeBlock language="javascript" code={`import React from 'react';

function WelcomeMessage({ username = 'Guest' }) {
  return <h1>Welcome, {username}!</h1>;
}

export default WelcomeMessage;`} />

                    <h3 className="my-3 text-3xl">Example 3: Destructuring Nested Props</h3>
                    <CodeBlock language="javascript" code={`import React from 'react';

function Address({ user: { name, address: { city } } }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{city}</p>
    </div>
  );
}

export default Address;`} />
                </section>
            </div>
        </div>
    );
}

export default Destructuring;
