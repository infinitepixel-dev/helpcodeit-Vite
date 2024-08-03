import React, { useEffect } from 'react';
import 'highlight.js/styles/github.css';
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import {ArrowDownUp, Clapperboard, FlaskConical} from 'lucide-react';
import graphic from '@assets/testingIllustration.webp';


const UnitTestingGuide = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
        <img src={graphic} alt="Unit Testing Illustration" className="w-2/3 mx-auto rounded-lg shadow-lg mb-8" />
      <h1 className="text-7xl font-bold mb-4 text-center">Unit Testing Guide</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Understanding Unit Tests</h2>
        <p className="mb-4">
          Unit tests are automated tests designed to verify the correctness of a specific section of code, usually a function or method. These tests help in detecting bugs at an early stage, improving code quality, and making future changes easier. Unit tests are written using various testing frameworks that cater to different programming languages and scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Planning Unit Tests</h2>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Define the Scope</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Identify Testable Units:</strong> Break down your application into the smallest testable parts, typically individual functions or methods.</li>
          <li><strong>Focus on Critical Code:</strong> Prioritize parts of the codebase with complex logic or those prone to errors.</li>
        </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Understand Requirements</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Review Specifications:</strong> Understand the functional and non-functional requirements of the unit.</li>
          <li><strong>Analyze Expected Behavior:</strong> Know what the code should do, including normal operations, edge cases, and error conditions.</li>
        </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Create a Test Plan</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>List Test Cases:</strong> Categorize test cases into positive tests, negative tests, edge cases, and performance tests.</li>
          <li><strong>Define Inputs and Outputs:</strong> Determine the input data and the expected output for each test case.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Writing Unit Tests</h2>
        <p className="mb-4"> Unit tests follow a structured approach to ensure comprehensive coverage and effective validation of the code. Here are some key steps to writing unit tests:</p>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Setup Your Environment:</strong> Choose a testing framework and set up your development environment.</li>
            <li><strong>Write Test Cases:</strong> Create test cases for positive, negative, edge cases, and performance scenarios.</li>
            <li><strong>Use Mocks and Stubs:</strong> Simulate dependencies and external systems using mocks and stubs.</li>
            <li><strong>Run Tests Frequently:</strong> Execute tests regularly, ideally in a CI/CD pipeline.</li>
        </ul>
        <p className="mb-4">Let's dive deeper into each of these steps:</p>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Setup Your Environment</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Choose a Framework:</strong> Select a unit testing framework suitable for your programming language (e.g., Jest for JavaScript, JUnit for Java, NUnit for .NET).</li>
          <li><strong>Install Dependencies:</strong> Set up your development environment with necessary dependencies and tools.</li>
        </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Write Test Cases</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Positive Tests:</strong> Validate that the unit functions correctly with valid input. These tests confirm the primary functionality.</li>
          <li><strong>Negative Tests:</strong> Check how the unit handles invalid input, ensuring the code can manage errors gracefully.</li>
          <li><strong>Edge Cases:</strong> Test the boundaries of input values, such as minimum and maximum limits, empty inputs, and special characters.</li>
          <li><strong>Performance Tests:</strong> Measure the unit’s performance under various conditions, particularly for functions handling large datasets or frequent calls.</li>
        </ul>

        <pre>
          <code className="language-javascript">
{`
import { expect } from 'jest';

function add(a, b) {
  return a + b;
}

// Positive Test Cases
test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds -1 + 1 to equal 0', () => {
  expect(add(-1, 1)).toBe(0);
});

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('adds 100 + 200 to equal 300', () => {
  expect(add(100, 200)).toBe(300);
});

// Negative Test Cases
test('throws error when adding a string and a number', () => {
  expect(() => add('a', 2)).toThrow();
});

test('throws error when adding null and undefined', () => {
  expect(() => add(null, undefined)).toThrow();
});

// Edge Test Cases
test('adds MAX_SAFE_INTEGER + 1 to equal MAX_SAFE_INTEGER + 1', () => {
  expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
});

test('adds MIN_SAFE_INTEGER - 1 to equal MIN_SAFE_INTEGER - 1', () => {
  expect(add(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
});

test('adds 0 + 0 to equal 0 (edge case)', () => {
  expect(add(0, 0)).toBe(0);
});

test('adds -Infinity + Infinity to be NaN', () => {
  expect(add(-Infinity, Infinity)).toBeNaN();
});

// Performance Test Case
test('performance of add function with 1,000,000 iterations', () => {
  console.time('Performance Test');
  for (let i = 0; i < 1000000; i++) {
    add(i, i + 1);
  }
  console.timeEnd('Performance Test');
});
`}
          </code>
        </pre>
        <p className='italic'> **Often times you will see the above code surrounded by Describe blocks. This is a way to group tests together. This is purely optional but can help with organization.</p>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Use Mocks and Stubs</h3>
        <p className="mb-4">
          <strong>Mocks:</strong> Simulate dependencies to isolate the unit under test. This is useful for functions interacting with databases, APIs, or other external systems.
          <br />
          <strong>Stubs:</strong> Provide predefined responses to method calls, ensuring the test environment remains controlled and predictable.
        </p>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Run Tests Frequently</h3>
        <p className="mb-4">
          <strong>Continuous Testing:</strong> Execute tests regularly, especially after making changes to the code. This practice helps catch regressions early.
          <br />
          <strong>Continuous Integration (CI):</strong> Integrate your tests into a CI pipeline to automate testing with every code commit, ensuring constant feedback.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Common Testing Frameworks and Libraries</h2>
        <h3 className="text-2xl mt-12 font-semibold mb-1">JavaScript/TypeScript</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Jest:</strong> A comprehensive testing framework with a focus on simplicity. Ideal for testing React applications.</li>
          <li><strong>Mocha:</strong> A flexible framework that works well with other libraries like Chai for assertions.</li>
          <li><strong>Sinon:</strong> Provides powerful spies, stubs, and mocks for JavaScript testing.</li>
        </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Java</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>JUnit:</strong> The standard framework for unit testing in Java. Suitable for testing business logic and data manipulation functions.</li>
          <li><strong>Mockito:</strong> A popular mocking framework that integrates well with JUnit, useful for testing service layers and DAO (Data Access Object) layers.</li>
        </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">.NET</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>NUnit:</strong> A widely-used framework for .NET applications. Good for testing ASP.NET applications and backend services.</li>
          <li><strong>Moq:</strong> A mocking library for .NET that pairs well with NUnit or MSTest for isolating unit tests.</li>
        </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Python</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>unittest:</strong> The built-in Python testing framework. Ideal for testing core Python applications and libraries.</li>
          <li><strong>pytest:</strong> An advanced framework offering powerful features like fixtures and parameterized tests.</li>
          <li><strong>mock:</strong> A library to create mock objects for testing interactions between components.</li>
        </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Ruby</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>RSpec:</strong> A behavior-driven development (BDD) framework for Ruby. Excellent for testing Rails applications.</li>
          <li><strong>Minitest:</strong> A lightweight testing library that is part of the Ruby standard library.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Best Practices for Unit Testing</h2>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Keep Tests Independent</h3>
      <p className="mb-4">
        Ensuring that your tests are independent is crucial for maintaining a reliable and maintainable test suite. Independent tests help you quickly identify the root cause of a failure and prevent cascading failures that can obscure the real issue. Here are two key practices to keep your tests independent:
      </p>

      <h4 className="text-xl font-semibold mt-4 mb-2">Isolated Tests</h4>
      <p className="mb-4">
        Each test should run independently without relying on the state or outcome of other tests. This means that:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Tests should not share any state or data. If a test modifies some data, it should be reset to its original state before the next test runs.</li>
        <li>Setup and teardown processes should be used to prepare the environment for each test, ensuring that each test starts from a known state.</li>
        <li>Mocks and stubs should be used to isolate the unit under test, preventing interactions with external systems or shared resources.</li>
      </ul>

      <h4 className="text-xl font-semibold mt-4 mb-2">Avoid Shared States</h4>
      <p className="mb-4">
        Shared states or dependencies can lead to flaky tests, which are tests that sometimes pass and sometimes fail without any changes to the code. To avoid this:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Ensure that tests do not rely on external states or configurations that can change over time.</li>
        <li>Use dependency injection to provide test-specific configurations or data, rather than relying on global state.</li>
        <li>Isolate each test's environment by using containers or virtualization if necessary, especially for complex systems.</li>
      </ul>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Make Tests Readable</h3>
        <p className="mb-4">
          <strong>Descriptive Names:</strong> Use clear and descriptive names for test cases to indicate their purpose.
          <br />
          <strong>Comments and Documentation:</strong> Write comments to explain the intent and logic of complex tests.
        </p>

        <div className="dark:bg-slate-700 bg-gray-100 rounded-2xl border border-gray-400 p-3 mt-12">
            <h3 className="text-2xl font-semibold mb-1">Follow the Arrange-Act-Assert (AAA) Pattern</h3>
                  <p className="mb-4">
            The Arrange-Act-Assert (AAA) pattern is a structured approach to writing unit tests that improves readability and maintainability. By clearly separating each phase of the test, you can better understand what the test is doing and why it might be failing. Here’s a detailed breakdown of each phase:
                  </p>

                  <div className="flex items-center">
              <ArrowDownUp /><h4 className="text-xl font-semibold mt-4 mb-2 ms-2">Arrange</h4>
                  </div>
                  <p className="mb-4">
            <strong>Set up the necessary conditions and inputs for the test:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-4">
            <li>Initialize any objects or variables needed for the test.</li>
            <li>Prepare the test environment, including any required mock objects or test data.</li>
            <li>Ensure that the system is in a known state before performing the action being tested.</li>
                  </ul>
            <div className="flex items-center">
                <Clapperboard /><h4 className="text-xl font-semibold mt-4 mb-2 ms-2">Act</h4>
            </div>
                  <p className="mb-4">
            <strong>Execute the code being tested:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-4">
            <li>Perform the action that you want to test, such as calling a function or method.</li>
            <li>This phase should be concise and only include the execution of the code under test.</li>
                  </ul>
            <div className="flex items-center">
                <FlaskConical /><h4 className="text-xl font-semibold mt-4 mb-2 ms-2">Assert</h4>
            </div>

                  <p className="mb-4">
            <strong>Verify the output against the expected result:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-4">
            <li>Check the result of the action to ensure it matches the expected outcome.</li>
            <li>Use specific assertions to provide clear and informative feedback when a test fails.</li>
            <li>Ensure that all relevant aspects of the result are verified, including return values, state changes, and side effects.</li>
                  </ul>
        </div>

        <h3 className="text-2xl mt-12 font-semibold mb-1">Test Coverage</h3>
        <p className="mb-4">
          <strong>High Coverage:</strong> Aim for high test coverage but prioritize meaningful tests over simply increasing the number.
          <br />
          <strong>Critical Paths:</strong> Ensure critical paths and edge cases are well-covered to prevent significant issues.
        </p>
        <h3 className="text-2xl mt-12 font-semibold mb-1">Maintain Tests</h3>
    <p className="mb-4">
      <strong>Regular Updates:</strong> Update tests as the codebase evolves. Remove obsolete tests and add new ones for new features.
      <br />
      <strong>Efficient Test Suite:</strong> Keep the test suite fast and efficient to encourage frequent execution.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold mb-2">Resources for Learning Unit Testing</h2>

    <h3 className="text-2xl mt-12 font-semibold mb-1">Documentation and Official Guides</h3>
    <p className="mb-4">
      <strong>Framework Documentation:</strong> Start with the official documentation of the unit testing framework you are using. It provides the basics, advanced features, and examples.
      <br />
      <strong>Language-Specific Guides:</strong> Explore guides and tutorials specific to your programming language.
    </p>


    <h3 className="text-2xl mt-12 font-semibold mb-1">Books</h3>
    <p className="mb-4">
      <strong>"Test-Driven Development by Example" by Kent Beck:</strong> A classic book on TDD and unit testing principles.
      <br />
      <strong>"The Art of Unit Testing" by Roy Osherove:</strong> An in-depth guide on writing effective unit tests.
    </p>

    <h3 className="text-2xl mt-12 font-semibold mb-1">Blogs and Community Sites</h3>
    <p className="mb-4">
      <strong>Medium and Dev.to:</strong> These platforms host numerous articles and tutorials on unit testing best practices.
      <br />
      <strong>Stack Overflow:</strong> A valuable resource for troubleshooting and learning from the community.
    </p>

    <h3 className="text-2xl mt-12 font-semibold mb-1">Conferences and Meetups</h3>
    <p className="mb-4">
      <strong>Developer Conferences:</strong> Attend conferences like PyCon, JSConf, and JavaOne to learn from experts and network with peers.
      <br />
      <strong>Local Meetups:</strong> Join local developer meetups and workshops to share knowledge and experiences.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-semibold mb-2">Thinking Through Unit Tests</h2>

    <h3 className="text-2xl mt-12 font-semibold mb-1">Identify the Purpose</h3>
    <p className="mb-4">
      <strong>What to Test:</strong> Determine what aspects of the unit need verification—business logic, data transformation, or interactions with other components.
      <br />
      <strong>Why to Test:</strong> Understand the importance of testing this unit—risk mitigation, ensuring correctness, or facilitating future changes.
    </p>

    <h3 className="text-2xl mt-12 font-semibold mb-1">Designing Test Cases</h3>
    <p className="mb-4">
      <strong>Happy Path:</strong> Start with the most common use case where everything works as expected.
      <br />
      <strong>Alternative Paths:</strong> Consider alternative flows and conditions that the unit should handle.
      <br />
      <strong>Edge Cases:</strong> Identify boundary conditions and unusual scenarios that might cause failures.
    </p>

    <h3 className="text-2xl mt-12 font-semibold mb-1">Prioritizing Tests</h3>
    <p className="mb-4">
      <strong>Risk-Based Testing:</strong> Prioritize tests based on the risk and impact of failures. Critical functionalities should be tested thoroughly.
      <br />
      <strong>Time and Resources:</strong> Balance the depth of testing with available time and resources. Focus on high-value tests first.
    </p>

    <h3 className="text-2xl mt-12 font-semibold mb-1">Refactoring and Maintaining Tests</h3>
    <p className="mb-4">
      <strong>Refactor Code:</strong> Refactor both code and tests to keep them clean and maintainable.
      <br />
      <strong>Update Tests:</strong> Regularly update tests to reflect changes in requirements and codebase. Remove obsolete tests to avoid clutter.
    </p>
  </section>
</div>
);
}

export default UnitTestingGuide;