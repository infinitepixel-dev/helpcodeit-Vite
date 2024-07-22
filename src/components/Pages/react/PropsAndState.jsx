import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const PropsAndStateGuide = () => {
    const codeRef = useRef(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const animationDelay = `${index * 0.2}s`
                        entry.target.style.animationDelay = animationDelay
                        entry.target.classList.add('animate-fadeIn')
                    } else {
                        entry.target.style.animationDelay = '0s'
                        entry.target.classList.remove('animate-fadeIn')
                    }
                })
            },
            { rootMargin: '0px', threshold: 0.1 }
        )

        const elements = document.querySelectorAll('.observeMe')
        elements.forEach((el) => observer.observe(el))

        return () => elements.forEach((el) => observer.unobserve(el))
    }, [])

    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const primitivePropsExample = `
function UserProfile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Is Admin: {props.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Usage
<UserProfile name="Alice" age={30} isAdmin={true} />
  `

    const objectPropsExample = `
function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price:{product.price}</p>
      <p>Category:{product.category}</p>
    </div>
  );
}

// Usage
const product = { name: 'Laptop', price: 999.99, category: 'Electronics' };
<ProductCard product={product} />
  `

    const functionPropsExample = `
function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

// Usage
function handleClick() {
  alert('Button clicked!');
}
<Button label="Click me" onClick={handleClick} />
  `

    const childrenPropsExample = `
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>This is the content of the card.</p>
  <button>Learn More</button>
</Card>
  `

    const classComponentStateExample = `
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
  `

    const functionalComponentStateExample = `
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
  `

    const complexStateExample = `
function UserForm() {
  const [user, setUser] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
    </form>
  );
}
  `

    return (
        <div className="roboto-font container mx-auto p-2 px-4 text-xl sm:p-8">
            <Helmet>
                <title>
                    Comprehensive Guide to Props and State in React | Help Code
                    It
                </title>
                <meta
                    name="description"
                    content="An in-depth exploration of Props and State in React. Learn about different types of props, how to use state in class and functional components, and best practices for both."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/react/props-and-state-guide"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="React, props, state, components, web development, JavaScript, useState, this.state"
                />
            </Helmet>

            <div className="flex flex-col">
                <div className="observeMe">
                    <h1 className="my-20 text-center text-5xl">
                        Comprehensive Guide to Props and State in React
                    </h1>
                    <hr className="border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <h2 className="mt-10 text-4xl">Introduction</h2>
                    <p className="mb-10 text-2xl">
                        Props and State are fundamental concepts in React that
                        govern how data is managed and passed between
                        components. While they serve different purposes,
                        understanding both is crucial for building dynamic and
                        interactive React applications.
                    </p>
                    <hr className="mb-10 border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <h2 className="mt-10 text-4xl">Part 1: Props in React</h2>
                    <p className="mb-10 text-2xl">
                        Props (short for properties) are a way to pass data from
                        parent to child components in React. They are read-only
                        and help make your components reusable and dynamic.
                    </p>

                    <h3 className="mt-5 text-3xl">Types of Props</h3>

                    <h4 className="mt-5 text-2xl">1. Primitive Props</h4>
                    <p className="mb-5 text-xl">
                        These include strings, numbers, and booleans.
                    </p>
                    <pre className="my-5">
                        <code ref={codeRef} className="language-javascript">
                            {primitivePropsExample}
                        </code>
                    </pre>

                    <h4 className="mt-5 text-2xl">2. Object Props</h4>
                    <p className="mb-5 text-xl">
                        Passing entire objects as props is useful for grouping
                        related data.
                    </p>
                    <pre className="my-5">
                        <code ref={codeRef} className="language-javascript">
                            {objectPropsExample}
                        </code>
                    </pre>

                    <h4 className="mt-5 text-2xl">3. Function Props</h4>
                    <p className="mb-5 text-xl">
                        Functions can be passed as props, allowing child
                        components to communicate with their parents.
                    </p>
                    <pre className="my-5">
                        <code ref={codeRef} className="language-javascript">
                            {functionPropsExample}
                        </code>
                    </pre>

                    <h4 className="mt-5 text-2xl">4. Children Props</h4>
                    <p className="mb-5 text-xl">
                        The special 'children' prop allows for component
                        composition.
                    </p>
                    <pre className="my-5">
                        <code ref={codeRef} className="language-javascript">
                            {childrenPropsExample}
                        </code>
                    </pre>

                    <h3 className="mt-10 text-3xl">Best Practices for Props</h3>
                    <ul className="mb-10 list-disc pl-5 text-xl">
                        <li>Use descriptive names for props</li>
                        <li>Provide default values for optional props</li>
                        <li>Use PropTypes or TypeScript for type checking</li>
                        <li>
                            Treat props as read-only; never modify them directly
                        </li>
                        <li>
                            Use the spread operator for passing multiple props
                        </li>
                    </ul>

                    <hr className="mb-10 border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <h2 className="mt-10 text-4xl">Part 2: State in React</h2>
                    <p className="mb-10 text-2xl">
                        State is a way for a component to maintain and update
                        its own data. Unlike props, state can be changed using
                        setState (in class components) or useState (in
                        functional components).
                    </p>

                    <h3 className="mt-5 text-3xl">State in Class Components</h3>
                    <p className="mb-5 text-xl">
                        In class components, state is defined in the constructor
                        and updated using this.setState().
                    </p>
                    <pre className="my-5">
                        <code ref={codeRef} className="language-javascript">
                            {classComponentStateExample}
                        </code>
                    </pre>

                    <h3 className="mt-10 text-3xl">
                        State in Functional Components
                    </h3>
                    <p className="mb-5 text-xl">
                        In functional components, we use the useState hook to
                        manage state.
                    </p>
                    <pre className="my-5">
                        <code ref={codeRef} className="language-javascript">
                            {functionalComponentStateExample}
                        </code>
                    </pre>

                    <h3 className="mt-10 text-3xl">Complex State Management</h3>
                    <p className="mb-5 text-xl">
                        For more complex state, you can use objects or multiple
                        state variables.
                    </p>
                    <pre className="my-5">
                        <code ref={codeRef} className="language-javascript">
                            {complexStateExample}
                        </code>
                    </pre>

                    <h3 className="mt-10 text-3xl">Best Practices for State</h3>
                    <ul className="mb-10 list-disc pl-5 text-xl">
                        <li>Keep state as local as possible</li>
                        <li>
                            Don't update state directly; always use setState or
                            the state updater function
                        </li>
                        <li>
                            State updates may be asynchronous; don't rely on
                            their values for calculating the next state
                        </li>
                        <li>
                            Lift state up to common ancestors when multiple
                            components need to share state
                        </li>
                        <li>Use the useReducer hook for complex state logic</li>
                    </ul>

                    <hr className="mb-10 border-2 border-black dark:border-white" />
                </div>

                <div className="observeMe">
                    <h2 className="mt-10 text-4xl">
                        Props vs State: Key Differences
                    </h2>
                    <ul className="mb-10 list-disc pl-5 text-xl">
                        <li>
                            Props are passed from parent to child; state is
                            managed within a component
                        </li>
                        <li>Props are read-only; state can be updated</li>
                        <li>
                            Props can be used to configure a component; state
                            represents mutable data that changes over time
                        </li>
                        <li>
                            Changes in props come from outside the component;
                            changes in state are made inside the component
                        </li>
                        <li>
                            Props help with component reusability; state is for
                            handling user interactions and dynamic data
                        </li>
                    </ul>
                </div>

                <div className="observeMe">
                    <h2 className="mt-10 text-4xl">
                        Live Example: State in Action
                    </h2>
                    <p className="mb-5 text-2xl">
                        Here's a live example of state. Click the button to
                        increment the count:
                    </p>
                    <div className="mb-10 rounded-lg border-2 border-gray-300 p-5">
                        <p className="mb-3 text-3xl">Count: {count}</p>
                        <button
                            onClick={() =>
                                setCount((prevCount) => prevCount + 1)
                            }
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            aria-label='Increment count by 1'
                        >
                            Increment
                        </button>
                    </div>
                </div>

                <div className="observeMe">
                    <h2 className="mt-10 text-4xl">Conclusion</h2>
                    <p className="mb-10 mt-5 text-2xl">
                        Understanding the differences and use cases for props
                        and state is crucial for building efficient React
                        applications. Props allow you to create reusable,
                        configurable components, while state enables you to
                        create dynamic, interactive UIs. By mastering both
                        concepts, you'll be well-equipped to tackle complex
                        React projects.
                    </p>
                </div>

                <div className="pb-10 text-center text-2xl text-red-500 dark:text-white">
                    <Link to="/ReactMain">Back to React Main Page</Link>
                </div>
            </div>
        </div>
    )
}

export default PropsAndStateGuide
