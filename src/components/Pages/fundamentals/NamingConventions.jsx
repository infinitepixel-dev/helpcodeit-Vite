
import React from 'react';
import { FileText, Code, Link, Database, Tag, Folder, AlertTriangle, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import NamingConventionImage from '@assets/NamingConventions.webp'

const NamingConventions = () => {
  return (
    <div className="container p-6 mx-auto rounded-lg shadow-lg bg-background text-foreground">
      <h1 className="flex items-center justify-center mb-8 text-6xl font-bold text-center text-primary">

        A Beginner's Guide to File Naming Conventions
      </h1>

      <p className="px-10 mb-8 text-2xl leading-relaxed">
      <img src={NamingConventionImage} alt="Naming Conventions" className="hidden float-right h-auto mb-8 ps-10 md:block w-60" />
        When it comes to software development, the way you name your files can have a significant impact on your project's organization, readability, and maintainability. This guide will explore various naming strategies and conventions that beginner developers should consider, helping you to create a more structured and efficient codebase.
      </p>

      <table className="w-full mb-12 border-collapse table-auto">
        <thead>
          <tr className="bg-secondary text-secondary-foreground">
            <th className="p-3 text-left border">Convention</th>
            <th className="p-3 text-left border">Description</th>
            <th className="p-3 text-left border">When to Use</th>
            <th className="p-3 text-left border">Best Practices</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t hover:bg-muted">
            <td className="flex items-center p-3 font-semibold border">
              <FileText className="w-5 h-5 mr-2 text-primary" />
              Descriptive Naming
            </td>
            <td className="p-3 border">Using clear, meaningful names that convey the purpose of the file.</td>
            <td className="p-3 border">Ideal for scripts and modules where functionality is encapsulated in a single term.</td>
            <td className="p-3 border">
              <ul className="pl-5 list-disc">
                <li>Use full words instead of abbreviations.</li>
                <li>Be specific about the file's purpose or content.</li>
                <li>Avoid generic names like <code className="px-1 py-0.5 rounded bg-muted">temp.js</code> or <code className="px-1 py-0.5 rounded bg-muted">file1.js</code>.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t hover:bg-muted">
            <td className="flex items-center p-3 font-semibold border">
              <Code className="w-5 h-5 mr-2 text-primary" />
              Camel Case
            </td>
            <td className="p-3 border">A style where the first letter of each word is capitalized except for the first word (e.g., <code className="px-1 py-0.5 rounded bg-muted">userProfile.js</code>).</td>
            <td className="p-3 border">Commonly used in JavaScript and CSS files to improve readability.</td>
            <td className="p-3 border">
              <ul className="pl-5 list-disc">
                <li>Keep the name concise while maintaining clarity.</li>
                <li>Use camel case consistently throughout your project.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t hover:bg-muted">
            <td className="flex items-center p-3 font-semibold border">
              <Link className="w-5 h-5 mr-2 text-primary" />
              Kebab Case
            </td>
            <td className="p-3 border">Uses hyphens to separate words (e.g., <code className="px-1 py-0.5 rounded bg-muted">user-profile.js</code>).</td>
            <td className="p-3 border">Preferred for URLs and static assets in web projects.</td>
            <td className="p-3 border">
              <ul className="pl-5 list-disc">
                <li>Use lowercase letters to ensure consistency.</li>
                <li>Avoid using special characters or spaces.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t hover:bg-muted">
            <td className="flex items-center p-3 font-semibold border">
              <Database className="w-5 h-5 mr-2 text-primary" />
              Snake Case
            </td>
            <td className="p-3 border">Uses underscores to separate words (e.g., <code className="px-1 py-0.5 rounded bg-muted">user_profile.js</code>).</td>
            <td className="p-3 border">Frequently found in Python and Ruby files, also useful for database tables.</td>
            <td className="p-3 border">
              <ul className="pl-5 list-disc">
                <li>Stick to lowercase letters for uniformity.</li>
                <li>Use in back-end code or collaborative environments that favor it.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t hover:bg-muted">
            <td className="flex items-center p-3 font-semibold border">
              <Tag className="w-5 h-5 mr-2 text-primary" />
              Versioning
            </td>
            <td className="p-3 border">Includes version numbers in file names (e.g., <code className="px-1 py-0.5 rounded bg-muted">data_v1.json</code>).</td>
            <td className="p-3 border">Useful for projects with frequent revisions, like API specifications or design assets.</td>
            <td className="p-3 border">
              <ul className="pl-5 list-disc">
                <li>Increment version numbers systematically (e.g., <code className="px-1 py-0.5 rounded bg-muted">v1</code>, <code className="px-1 py-0.5 rounded bg-muted">v2</code>).</li>
                <li>Maintain a changelog to track changes associated with each version.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t hover:bg-muted">
            <td className="flex items-center p-3 font-semibold border">
              <Folder className="w-5 h-5 mr-2 text-primary" />
              Prefixes and Suffixes
            </td>
            <td className="p-3 border">Adds prefixes or suffixes to provide additional context (e.g., <code className="px-1 py-0.5 rounded bg-muted">test_userProfile.js</code>).</td>
            <td className="p-3 border">Helps distinguish between different types of files in larger projects.</td>
            <td className="p-3 border">
              <ul className="pl-5 list-disc">
                <li>Use common prefixes/suffixes to indicate file type (e.g., <code className="px-1 py-0.5 rounded bg-muted">test_</code>, <code className="px-1 py-0.5 rounded bg-muted">utils_</code>).</li>
                <li>Be consistent across your project for easy identification.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t hover:bg-muted">
            <td className="flex items-center p-3 font-semibold border">
              <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
              Avoiding Special Characters and Spaces
            </td>
            <td className="p-3 border">Refrains from using special characters or spaces in file names.</td>
            <td className="p-3 border">Essential for any programming environment, especially when sharing files across different operating systems.</td>
            <td className="p-3 border">
              <ul className="pl-5 list-disc">
                <li>Stick to letters, numbers, hyphens, and underscores.</li>
                <li>Use only lowercase letters for consistency and compatibility.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <FileText className="w-6 h-6 mr-2" />
          1. Descriptive Naming
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Descriptive naming involves using clear, meaningful names that convey the purpose of the file. For instance, instead of naming a file <code className="px-1 py-0.5 rounded bg-muted">script.js</code>, you could name it <code className="px-1 py-0.5 rounded bg-muted">user-authentication.js</code>.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> This approach is especially useful for scripts and modules where the functionality can be encapsulated in a single term. Descriptive names help you and your team quickly identify the role of each file within the project.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Use full words instead of abbreviations (e.g., <code className="px-1 py-0.5 rounded bg-muted">calculateTotal.js</code> instead of <code className="px-1 py-0.5 rounded bg-muted">calcTot.js</code>).</li>
          <li>Be specific about the file's purpose or content.</li>
          <li>Avoid generic names like <code className="px-1 py-0.5 rounded bg-muted">temp.js</code> or <code className="px-1 py-0.5 rounded bg-muted">file1.js</code>.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <Code className="w-6 h-6 mr-2" />
          2. Camel Case
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Camel case is a style of writing where the first letter of each word is capitalized except for the first word. For example, <code className="px-1 py-0.5 rounded bg-muted">userProfile.js</code> or <code className="px-1 py-0.5 rounded bg-muted">shoppingCart.css</code>.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> This convention is commonly used in JavaScript and CSS files. It helps improve readability by visually separating different words in a file name.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Keep the name concise while maintaining clarity.</li>
          <li>Use camel case consistently throughout your project to avoid confusion.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <Link className="w-6 h-6 mr-2" />
          3. Kebab Case
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Kebab case uses hyphens to separate words, like <code className="px-1 py-0.5 rounded bg-muted">user-profile.js</code> or <code className="px-1 py-0.5 rounded bg-muted">shopping-cart.css</code>.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> Kebab case is often used in URLs and is a preferred style for naming files in web projects, particularly for CSS or static assets.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Use lowercase letters to ensure consistency, as some systems may be case-sensitive.</li>
          <li>Avoid using special characters or spaces, as they can complicate file access.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <Database className="w-6 h-6 mr-2" />
          4. Snake Case
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Snake case uses underscores to separate words, such as <code className="px-1 py-0.5 rounded bg-muted">user_profile.js</code> or <code className="px-1 py-0.5 rounded bg-muted">shopping_cart.css</code>.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> This naming convention is frequently found in Python and Ruby files. It's also useful for database tables and variable names.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Stick to lowercase letters to prevent confusion and maintain uniformity.</li>
          <li>Use this convention when working on back-end code or when collaborating in environments that favor it.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <Tag className="w-6 h-6 mr-2" />
          5. Versioning in File Names
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Including version numbers in your file names can help keep track of changes and iterations. For example, <code className="px-1 py-0.5 rounded bg-muted">data_v1.json</code>, <code className="px-1 py-0.5 rounded bg-muted">data_v2.json</code>.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> This strategy is particularly useful in projects where files undergo frequent revisions, like API specifications or design assets.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Increment version numbers systematically (e.g., <code className="px-1 py-0.5 rounded bg-muted">v1</code>, <code className="px-1 py-0.5 rounded bg-muted">v2</code>, etc.) for major updates and consider using decimal points for minor updates (e.g., <code className="px-1 py-0.5 rounded bg-muted">v1.1</code>, <code className="px-1 py-0.5 rounded bg-muted">v1.2</code>).</li>
          <li>Maintain a changelog or documentation to keep track of changes associated with each version.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <Folder className="w-6 h-6 mr-2" />
          6. Prefixes and Suffixes
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Adding prefixes or suffixes can provide additional context about a file's role. For example, <code className="px-1 py-0.5 rounded bg-muted">test_userProfile.js</code> for test files or <code className="px-1 py-0.5 rounded bg-muted">styles_main.css</code> for main style sheets.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> This convention is helpful in distinguishing between different types of files, especially in larger projects.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Use common prefixes/suffixes to indicate file type (e.g., <code className="px-1 py-0.5 rounded bg-muted">test_</code>, <code className="px-1 py-0.5 rounded bg-muted">utils_</code>, <code className="px-1 py-0.5 rounded bg-muted">data_</code>).</li>
          <li>Be consistent across your project so that others can easily identify file types.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <Folder className="w-6 h-6 mr-2" />
          7. Grouping Related Files
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Organizing files into directories based on functionality or feature sets can improve project navigation. For instance, you might have a <code className="px-1 py-0.5 rounded bg-muted">components/</code> folder containing all UI components.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> This strategy is particularly effective in larger applications, where files can quickly become overwhelming.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Create a clear folder structure that reflects the functionality of the files within.</li>
          <li>Use meaningful folder names to indicate their content, such as <code className="px-1 py-0.5 rounded bg-muted">assets/</code>, <code className="px-1 py-0.5 rounded bg-muted">services/</code>, or <code className="px-1 py-0.5 rounded bg-muted">hooks/</code>.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <AlertTriangle className="w-6 h-6 mr-2" />
          8. Avoiding Special Characters and Spaces
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>What It Is:</strong> Refraining from using special characters or spaces in file names can prevent potential issues with file access and portability.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>When to Use It:</strong> This approach is essential in any programming environment, especially when files may be shared across different operating systems.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Best Practices:</strong>
        </p>
        <ul className="pl-5 mb-6 list-disc">
          <li>Stick to letters, numbers, hyphens, and underscores.</li>
          <li>Consider using only lowercase letters for consistency and compatibility.</li>
        </ul>
      </section>

      <section className="p-6 mt-12 rounded-lg bg-muted">
        <h2 className="flex items-center mb-4 text-3xl font-semibold text-primary">
          <Info className="w-6 h-6 mr-2" />
          Conclusion
        </h2>
        <p className="leading-relaxed">
          Naming files may seem like a small detail, but it plays a crucial role in the organization and readability of your codebase. By following these conventions, beginner developers can create a more structured and efficient working environment. Remember that consistency is key; choose a naming convention that works for your project and stick with it to improve collaboration and maintenance in the long run.
        </p>
      </section>
    </div>
  );
};

export default NamingConventions;