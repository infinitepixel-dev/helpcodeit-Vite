import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';

export default function TanstackQuery() {
  const useEffectExample = `
import React, { useState, useEffect } from 'react';

function UserData() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
    </div>
  );
}`;

  const tanstackQueryExample = `
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchUserData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function UserData() {
  const { data, isLoading, error } = useQuery(['userData'], fetchUserData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
}`;

  const customHookExample = `
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
}

function UserData() {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
}`;

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-5xl font-bold text-center roboto-font text-balance">Tanstack Query vs useEffect for API Data Fetching</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Why Tanstack Query?</h2>
        <p className="mb-4">
          Tanstack Query (formerly React Query) offers several advantages over using useEffect for API data fetching:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li>Automatic caching and refetching</li>
          <li>Built-in loading and error states</li>
          <li>Easier pagination and infinite scrolling</li>
          <li>Optimistic updates</li>
          <li>Automatic background refetching</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">useEffect Approach</h2>
        <p className="mb-4">
          This example demonstrates how to fetch data using the useEffect hook. It shows the basic structure of managing loading states, error handling, and data storage using React's built-in hooks:
        </p>
        <CodeBlock code={useEffectExample} language="javascript" />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Tanstack Query Approach</h2>
        <p className="mb-4">
          First, you need to install Tanstack Query. You can do this by running the following command in your project directory:
        </p>
        <CodeBlock code="npm install @tanstack/react-query" language="bash" />
        <p className="my-4">
          Here's how you can achieve the same result using Tanstack Query. Notice how it simplifies state management and provides a more declarative approach to data fetching:
        </p>
        <CodeBlock code={tanstackQueryExample} language="javascript" />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Custom Hook Approach (Without Tanstack Query)</h2>
        <p className="mb-4">
          If you prefer not to use Tanstack Query, you can create a custom hook to achieve similar functionality. This example shows how to encapsulate the data fetching logic in a reusable hook:
        </p>
        <CodeBlock code={customHookExample} language="javascript" />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Comparison</h2>
        <p className="mb-4">Let's compare these three approaches to help beginners understand their merits and intended purposes:</p>

        <h3 className="mb-2 text-xl font-semibold">1. useEffect Approach</h3>
        <p className="mb-4">
          <strong>Merits:</strong>
          <ul className="mb-2 ml-4 list-disc list-inside">
            <li>Simple and straightforward for beginners</li>
            <li>Uses built-in React hooks, no additional libraries needed</li>
            <li>Good for learning how React works with side effects</li>
          </ul>
          <strong>Intended purpose:</strong> Best for simple, one-off data fetching in small applications or when learning React basics.
        </p>

        <h3 className="mb-2 text-xl font-semibold">2. Tanstack Query Approach</h3>
        <p className="mb-4">
          <strong>Merits:</strong>
          <ul className="mb-2 ml-4 list-disc list-inside">
            <li>Automatic caching and background refetching</li>
            <li>Built-in loading and error states</li>
            <li>Optimized for performance in larger applications</li>
            <li>Reduces boilerplate code</li>
          </ul>
          <strong>Intended purpose:</strong> Ideal for medium to large applications with complex data fetching needs, or when you need advanced features like caching and synchronization out of the box.
        </p>

        <h3 className="mb-2 text-xl font-semibold">3. Custom Hook Approach</h3>
        <p className="mb-4">
          <strong>Merits:</strong>
          <ul className="mb-2 ml-4 list-disc list-inside">
            <li>Reusable across components</li>
            <li>More control over implementation than Tanstack Query</li>
            <li>Can be tailored to specific project needs</li>
            <li>No additional library dependencies</li>
          </ul>
          <strong>Intended purpose:</strong> Great for small to medium-sized applications where you want more reusability than the useEffect approach, but don't need the full feature set of Tanstack Query.
        </p>

        <p className="mt-4">
          For beginners, starting with the useEffect approach is a good way to understand how data fetching works in React. As you build more complex applications, you might find the custom hook approach helpful for organizing your code better. When you're working on larger projects or need advanced features, Tanstack Query can significantly simplify your data management.
        </p>
      </section>
    </div>
  );
}

TanstackQuery.meta = {
  title: 'Tanstack Query vs useEffect | Help Code It',
  description: 'Learn why Tanstack Query is better than useEffect for API data fetching in React applications.',
  'og:title': 'Tanstack Query vs useEffect for React Data Fetching',
  'og:description': 'Discover the advantages of using Tanstack Query over useEffect for API data fetching in React apps.',
  'og:image': 'https://www.helpcodeit.com/images/tanstack-query.png',
  'og:url': 'https://www.helpcodeit.com/TanstackQuery',
  'twitter:title': 'Tanstack Query vs useEffect for React Data Fetching',
  'twitter:description': 'Learn why Tanstack Query is superior to useEffect for API data fetching in React applications.',
  'twitter:image': 'https://www.helpcodeit.com/images/tanstack-query.png',
  path: '/TanstackQuery',
  layout: 'default',
  requiresAuth: false,
  roles: [],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'React', path: '/ReactMain' },
    { name: 'Tanstack Query', path: '/TanstackQuery' },
  ],
};
