import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function PackagesAndPackageJson() {
    const codeRef = useRef(null)

    useEffect(() => {
        // Apply syntax highlighting to all code elements
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, [])

    const packageJson = `{
    "name": "my-project",
    "version": "1.0.0",
    "description": "My project description",
    "main": "index.js",
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "bootstrap": "^5.1.0",
    }
    }`

  return (
    <div>
      <div className="container">
        <h1 className="text-8xl mukataFont mt-6 text-center">
          &apos;package.json&apos; <br />& &apos;npm init&apos;
        </h1>
        <h2 className="text-4xl mukataFont mt-6 text-center">
          What are they for and how do you use them?
        </h2>
        <hr className="border-2 border-black dark:border-white my-4" />
        <div className="text-xl">
          <p className="my-4">
            The &apos;package.json&apos; file is a file that is used to give
            information to npm that allows it to identify the project as well as
            handle the project&apos;s dependencies. It can also contain other
            metadata such as a project description, the version of the project
            in a particular distribution, and the license under which the
            project is distributed.
          </p>
          <p className="my-4">
            The &apos;npm init&apos; command is used to create a new
            &apos;package.json&apos; file. It will guide you through a series of
            questions, and then write a &apos;package.json&apos; file for you
            based on your answers.
          </p>
          <p className="my-4">
            Here is an example of a &apos;package.json&apos; file:
          </p>
          <div className="flex justify-center">
            <pre className="m-4">
              <code ref={codeRef} className="language-json">
                {packageJson}
              </code>
            </pre>
          </div>
          <p className="mb-4">
            This is a basic example of a project&apos;s &apos;package.json&apos;
            file with bootstrap as a dependency. If you ever have a bad install
            or need to reinstall your dependencies, you can use the
            &apos;package.json&apos; file to reinstall all of your dependencies.
          </p>
          <p>
            You don&apos;t even need to know what dependencies are, or what they
            do, to use the &apos;package.json&apos; file to your advantage.
            It&apos;s a great tool to have in your toolbelt. To fix issues you
            can delete the &apos;node_modules&apos; folder and run &apos;npm
            install&apos; to reinstall all of your dependencies.
          </p>
          <p className="my-4">
            The &apos;package.json&apos; file is also used to specify the
            versions of a package that your project depends on. This is done
            using the &apos;dependencies&apos; property. For example, if you
            want to use bootstrap in your project, you can specify the version
            of bootstrap that your project depends on in the
            &apos;dependencies&apos; property.
          </p>
          <hr className="border-1 border-black dark:border-white my-4" />

          <h2 className="text-4xl mukataFont mt-6 text-center">
            What are dependencies?
          </h2>
          <p className="my-4">
            Dependencies are the packages that your project depends on in order
            to work. In the example above, the project depends on
            &apos;bootstrap&apos; to work. The &apos;dependencies&apos; property
            is used to list the packages that the project depends on.
          </p>
          <hr className="border-1 border-black dark:border-white my-4" />

          <h2 className="text-4xl mukataFont mt-6 text-center">
            What are devDependencies?
          </h2>
          <p className="my-4">
            devDependencies are the packages that are only needed for
            development and testing. They are not needed for the project to
            work. They are used to list the packages that the project depends on
            for development and testing.
          </p>
          <hr className="border-1 border-black dark:border-white my-4" />

          <h2 className="text-4xl mukataFont mt-6 text-center">
            What is the &apos;package-lock.json&apos; file?
          </h2>
          <p className="my-4 mb-24">
            The &apos;package-lock.json&apos; file is a file that is used to
            lock the version of the project&apos;s dependencies. It is used to
            ensure that the same version of the project&apos;s dependencies are
            installed on all machines. It is used to prevent the project&apos;s
            dependencies from being updated to a different version on different
            machines unintentionally.
          </p>
        </div>
      </div>
    </div>
  );
}
export default PackagesAndPackageJson
