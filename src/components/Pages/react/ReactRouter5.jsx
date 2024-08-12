import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'



const ReactRouter5 = () => {
  const installationCode = `npm install react-router-dom@5`;

  const basicSetupCode = `
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}`;

  const parameterizedRoutesCode = `
import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { id } = useParams();
  return <div>User ID: {id}</div>;
}

// In your route setup:
<Route path="/users/:id" component={UserProfile} />`;

  const programmaticNavigationCode = `
import React from 'react';
import { useHistory } from 'react-router-dom';

function NavigationExample() {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <button onClick={handleClick}>
      Go to Home
    </button>
  );
}`;

  const nestedRoutesCode = `
import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={\`\${url}/rendering\`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={\`\${url}/components\`}>Components</Link>
        </li>
      </ul>

      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={\`\${path}/:topicId\`}>
        <Topic />
      </Route>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}`;

return (
    <div className="max-w-4xl p-6 mx-auto">
      <Helmet>
        <title>React Router 5 Guide</title>
        <meta name="description" content="React Router 5 Guide" />
        <meta name="keywords" content="React Router 5, React Router 5 Guide, React Router 5 Tutorial" />
        <meta type="canonical" src="https://www.helpcodeit.com/ReactRouter5" />
        </Helmet>


      <h1 className="mb-6 text-3xl font-bold">React Router 5 Guide</h1>
        <p className="mb-4">If you are just getting started with React Router, it is highly encouraged that you use React Router 6, as it is the latest version and has many improvements over previous versions. However, if you are working on a project that uses React Router 5, this guide will help you get up to speed with the basics.</p>
        <p className="mb-4">React Router 6 is easier to implement and understand as a whole so if you are trying to decide, head on over to <Link to='/ReactRouter6' className="font-bold text-blue-500 hover:text-blue-700 hover:underline"> React Router 6</Link></p>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Installation</h2>
        <p className="mb-4">
          To get started with React Router 5, you first need to install it in your project.
          You can do this using npm (Node Package Manager) by running the following command in your terminal:
        </p>
        <CodeBlock code={installationCode} language="sh" />
        <p className="mt-4">
          This command installs React Router version 5, which is what we'll be using in this guide.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Basic Setup</h2>
        <p className="mb-4">
          Here's a basic example of how to set up React Router in your application:
        </p>
        <CodeBlock code={basicSetupCode} language="javascript" />
        <p className="mt-4">
          Let's break this down:
        </p>
        <ul className="mt-2 space-y-2 list-disc list-inside">
          <li>We import necessary components from 'react-router-dom'.</li>
          <li>The entire app is wrapped in a <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">Router</code> component.</li>
          <li>We create a navigation menu using <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">Link</code> components.</li>
          <li>The <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">Switch</code> component ensures only one route is rendered at a time.</li>
          <li>Each <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">Route</code> defines a path and the component to render for that path.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Parameterized Routes</h2>
        <p className="mb-4">
          Parameterized routes allow you to create dynamic paths in your application.
          Here's how you can create and use them:
        </p>
        <CodeBlock code={parameterizedRoutesCode} language="javascript" />
        <p className="mt-4">
          In this example:
        </p>
        <ul className="mt-2 space-y-2 list-disc list-inside">
          <li>We define a route with a parameter <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">:id</code>.</li>
          <li>In the <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">UserProfile</code> component, we use the <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">useParams</code> hook to access this parameter.</li>
          <li>This allows us to create dynamic routes like '/users/1', '/users/2', etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Programmatic Navigation</h2>
        <p className="mb-4">
          Sometimes you need to navigate to a different route programmatically (e.g., after form submission).
          Here's how you can do that:
        </p>
        <CodeBlock code={programmaticNavigationCode} language="javascript" />
        <p className="mt-4">
          This code demonstrates:
        </p>
        <ul className="mt-2 space-y-2 list-disc list-inside">
          <li>Using the <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">useHistory</code> hook to get access to the history object.</li>
          <li>Creating a function that uses <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">history.push()</code> to navigate to a new route.</li>
          <li>Attaching this function to a button's onClick event.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Nested Routes</h2>
        <p className="mb-4">
          React Router 5 allows you to create nested routes, which is useful for creating complex layouts. Here's an example:
        </p>
        <CodeBlock code={nestedRoutesCode} language="javascript" />
        <p className="mt-4">
          This example shows:
        </p>
        <ul className="mt-2 space-y-2 list-disc list-inside">
          <li>Using <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">useRouteMatch</code> to get the current <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">path</code> and <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">url</code>.</li>
          <li>Creating nested <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">Link</code> components that append to the current URL.</li>
          <li>Defining nested <code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">Route</code> components.</li>
          <li>Using a parameterized route for topics (<code className="px-1 text-white bg-gray-600 rounded dark:bg-gray-100 dark:text-black">:topicId</code>).</li>
        </ul>
      </section>

      <p className="mt-8 text-gray-600">
        This guide covers the basics of React Router 5. As you become more comfortable with these concepts,
        you can explore more advanced features in the official React Router documentation.
      </p>
    </div>
  );
};


export default ReactRouter5;