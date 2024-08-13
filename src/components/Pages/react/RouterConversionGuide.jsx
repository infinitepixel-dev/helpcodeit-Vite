import CodeBlock from '@/components/Sub_Components/CodeBlock';
import React from 'react';

const RouterConversionGuide = () => {

  const browserRouterCode = `import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <YourRoutes />
    </BrowserRouter>
  );
}`;

const installCode = `npm install react-router-dom@latest`;
const routesCode =`// React Router 5
import { Switch, Route } from 'react-router-dom';

function YourRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
// Reaact Router 6
import { Routes, Route } from 'react-router-dom';

function YourRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}`;

const routeExample = `// React Router 5
<Route path="/about" component={About} />

// React Router 6
<Route path="/about" element={<About />} />`;

const useHistoryCode = `// React Router 5
import { useHistory } from 'react-router-dom';

function MyComponent() {
  let history = useHistory();
  const navigateHome = () => {
    history.push('/');
  };
}

// React Router 6
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  let navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
}`;


  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center">Convert React Router 5 to React Router 6</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Installation</h2>
        <p className="mb-2">
          The first step is to install React Router 6. If you already have React Router 5 installed, you'll need to
          update it:
        </p>
       <CodeBlock code={installCode} language={"sh"} />
        <p className="mt-2">
          This will install the latest version of React Router, which includes all the features of React Router 6.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Switch to `BrowserRouter`</h2>
        <p className="mb-2">
          In React Router 6, `BrowserRouter` is still used as the top-level component to enable routing. No change is
          needed if you already use it.
        </p>
        <p className="mb-2">
        This part remains the same in React Router 6 but we do recommend pushing it to the main.jsx or index.jsx file.
        </p>
        <p className="mb-2">
          Example:
        </p>
      <CodeBlock code={browserRouterCode} language={"javascript"} />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Changes to `Switch`</h2>
        <p className="mb-2">
          The `Switch` component has been replaced by `Routes` in React Router 6. This change is necessary because
          `Routes` adds additional functionality, like route ranking.
        </p>
        <p className="mb-2">
          Example:
        </p>
        <CodeBlock code={routesCode} language={"javascript"} />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Route Changes</h2>
        <p className="mb-2">
          In React Router 6, the `component` prop is replaced with the `element` prop, and you need to pass JSX directly
          to it. This is one of the more common changes you'll need to make when converting from React Router 5 to React.
        </p>
        <p className="mb-2">
          Example:
        </p>
        <CodeBlock code={routeExample} language={"javascript"} />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. `useHistory` to `useNavigate`</h2>
        <p className="mb-2">
          In React Router 6, `useHistory` has been replaced with `useNavigate`. This new hook provides a simpler and
          more intuitive way to navigate programmatically. You can use it in the same way as `useHistory`, but with a more descriptive name.
        </p>
        <p className="mb-2">
          Example:
        </p>
        <CodeBlock code={useHistoryCode} language={"javascript"} />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">That's It!</h2>
        <p>
          These are the key changes you need to be aware of when migrating from React Router 5 to React Router 6. By
          following these steps, you can take advantage of the new features and improvements in React Router 6 as well as keep your codebase up to date. React Router 6 is far easier to use and more intuitive than its predecessor, so the effort to migrate is well worth it.
        </p>
      </section>
    </div>
  );
};

export default RouterConversionGuide;
