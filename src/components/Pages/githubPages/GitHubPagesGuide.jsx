import React from 'react';
import { Helmet } from 'react-helmet-async';
import CodeBlock from '@subComponents/CodeBlock';

const GitHubPages = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <Helmet>
        <title>GitHub Pages Guide - Deploy Your Website for Free</title>
        <meta name="description" content="Learn how to deploy your website for free using GitHub Pages. This guide covers setup, configuration, and best practices for hosting static websites." />
        <link rel="canonical" href="https://www.helpcodeit.com/gitHubPages/GitHubPages" />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold">GitHub Pages: Deploy Your Website for Free</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">What is GitHub Pages?</h2>
        <p>GitHub Pages is a free hosting service provided by GitHub that allows you to publish static websites directly from your GitHub repository. It's an excellent option for hosting personal websites, project documentation, or small web applications.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Setting Up GitHub Pages</h2>
        <ol className="space-y-4 list-decimal list-inside">
          <li>Create a new repository or use an existing one on GitHub.</li>
          <li>Go to the repository settings and scroll down to the "GitHub Pages" section.</li>
          <li>Under "Source", select the branch you want to use for GitHub Pages (usually "main" or "master").</li>
          <li>Optionally, choose a theme for your site using the "Theme Chooser".</li>
          <li>Your site will be published at https://username.github.io/repository-name/</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Configuring Your Site</h2>
        <p className="mb-4">To configure your GitHub Pages site, you can create a file named <code className="px-2 py-1 bg-gray-200 rounded">_config.yml</code> in the root of your repository. Here's an example configuration:</p>
        <CodeBlock
          language="yaml"
          code={`theme: jekyll-theme-minimal
title: My Awesome Website
description: Welcome to my GitHub Pages site!
`}
        />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Creating Content</h2>
        <p>You can create content for your site using Markdown files. For example, create an <code className="px-2 py-1 bg-gray-200 rounded">index.md</code> file in your repository:</p>
        <CodeBlock
          language="markdown"
          code={`# Welcome to My Site

This is my GitHub Pages website. Here's what you'll find:

- [About Me](about.md)
- [My Projects](projects.md)
- [Contact](contact.md)
`}
        />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Custom Domain</h2>
        <p className="mb-4">To use a custom domain with GitHub Pages:</p>
        <ol className="space-y-2 list-decimal list-inside">
          <li>Add a file named <code className="px-2 py-1 bg-gray-200 rounded">CNAME</code> to your repository with your domain name:</li>
          <CodeBlock
            language="plaintext"
            code="www.yourdomain.com"
          />
          <li>Update your domain's DNS settings to point to GitHub's servers.</li>
          <li>In your repository settings, enter your custom domain in the "Custom domain" field under the GitHub Pages section.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Best Practices</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>Keep your site's source files in the main branch and use a separate <code className="px-2 py-1 bg-gray-200 rounded">gh-pages</code> branch for the built site.</li>
          <li>Use a static site generator like Jekyll (built-in support) or Hugo for more complex sites.</li>
          <li>Optimize images and minimize CSS/JavaScript for faster loading times.</li>
          <li>Use relative links for internal navigation to ensure compatibility with project pages.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Conclusion</h2>
        <p>GitHub Pages provides a simple and free way to host static websites directly from your GitHub repository. With easy setup and integration with your existing GitHub workflow, it's an excellent choice for personal projects, documentation, and small web applications.</p>
      </section>
    </div>
  );
};

export default GitHubPages;