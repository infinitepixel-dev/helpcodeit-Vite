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
        <CodeBlock code={useEffectExample} language="javascript" />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Tanstack Query Approach</h2>
        <CodeBlock code={tanstackQueryExample} language="javascript" />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Custom Hook Approach (Without Tanstack Query)</h2>
        <p className="mb-4">
          If you prefer not to use Tanstack Query, you can create a custom hook to achieve similar functionality:
        </p>
        <CodeBlock code={customHookExample} language="javascript" />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Comparison</h2>
        <p>
          1. The useEffect approach is simple but requires manual state management and doesn't handle caching or background refetching.
        </p>
        <p>
          2. The Tanstack Query approach provides built-in caching, background refetching, and easier management of loading and error states.
        </p>
        <p>
          3. The custom hook approach offers a middle ground, providing better reusability than the useEffect approach while still allowing
          full control over the implementation. However, it lacks the advanced features of Tanstack Query like automatic caching and background updates.
        </p>
        <p>
          While the custom hook approach can be suitable for simpler applications, Tanstack Query shines in more complex scenarios
          where you need advanced caching, synchronization, and data management features out of the box.
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
