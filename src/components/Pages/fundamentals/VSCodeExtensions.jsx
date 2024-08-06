import React from 'react';
import { Helmet } from 'react-helmet-async';
import vscodelogo from '@assets/visual-studio-code.svg';
import imagePreview from '@assets/imagepreviewextension.jpeg';

const ExtensionCard = ({ title, author, description, iconUrl, link, languages }) => (
  <div className="bg-white dark:bg-gray-800 dark:border-none border border-1 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="p-6">

        {iconUrl && <img src={iconUrl} alt={`${title} Icon`} className="w-24 h-24 mx-auto mb-4 rounded-md" />}
        <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-4">By {author}</p>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4">{description}</p>
        {languages && (
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
            Works for: {languages}
          </p>
        )}
      </div>
    </a>
  </div>
);

const SettingItem = ({ title, description }) => (
  <li className="mb-4">
    <h4 className="font-semibold text-lg mb-1">{title}</h4>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </li>
);

function VSCodeExtensions() {
  const extensions = [
    {
      title: "Prettier",
      author: "Prettier",
      description: "Format your code with a click. Highly customizable and can format on save. Works with various languages and frameworks.",
      iconUrl: "https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/10.1.0/1690819498575/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
      languages: "JavaScript · TypeScript · Flow · JSX · JSON · CSS · SCSS · Less · HTML · Vue · Angular · HANDLEBARS · Ember · Glimmer · GraphQL · Markdown · YAML"
    },
    {
      title: "Live Server",
      author: "Ritwick Dey",
      description: "See your changes in real-time without refreshing. Essential for immediate feedback during development.",
      iconUrl: "https://ritwickdey.github.io/vscode-live-server/images/icon.png",
      link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
    },
    {
      title: "Comment Anchors",
      author: "Exodius Studios",
      description: "Create anchors in your comments for easy navigation, especially useful in large files.",
      iconUrl: "https://exodiusstudios.gallerycdn.vsassets.io/extensions/exodiusstudios/comment-anchors/1.10.4/1705659936841/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors"
    },
    {
      title: "Inline Fold",
      author: "Mohammed Alamri",
      description: "Fold code blocks inline, making it easier to read and navigate through your code. This really helps with CSS!",
      iconUrl: "https://raw.githubusercontent.com/moalamri/vscode-inline-fold/master/res/icon.png",
      link: "https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold"
    },
    {
      title: "Template String Converter",
      author: "meganrogge",
      description: "Convert strings to template literals and vice versa. Saves time and makes your code cleaner.",
      iconUrl: "https://meganrogge.gallerycdn.vsassets.io/extensions/meganrogge/template-string-converter/0.6.1/1681403288998/Microsoft.VisualStudio.Services.Icons.Default",
      link: "https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter"
    },
    {
      title: "Image Preview",
      author: "Kiss Tamás",
      description: "Preview images in your project without opening them. Great for quickly checking images.",
      iconUrl: imagePreview,
      link: "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview"
    }
  ];

  const obsoleteExtensions = [
    { title: "- Auto Close Tag", description: "Search for 'auto close tags' in settings. Automatically closes tags in HTML." },
    { title: "- Auto Rename Tag", description: "Search for 'auto rename tags' in settings. Automatically renames tags in HTML." },
    { title: "- Bracket Pair Colorizer", description: "Search for 'bracket pair colorizer' in settings. Colorizes brackets for better visibility." },
    { title: "- Indent Rainbow", description: "Search for 'indent rainbow' in settings. Colorizes indents for clearer code structure." }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Helmet>
        <title>VS Code Extensions | Help Code It</title>
        <meta
          name="description"
          content="Explore our recommended Visual Studio Code extensions for web development. Prettier, Live Server, and Comment Anchors are essential for efficient coding."
        />
        <link rel="canonical" href="https://www.helpcodeit.com/VSCodeExtensions" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Visual Studio Code, VS Code extensions, Prettier, Live Server, Comment Anchors, web development, front-end development"
        />
      </Helmet>

      <header className="flex items-center justify-center mb-12">
        <img src={vscodelogo} alt="VS Code Logo" className="w-20 h-20 mr-6" />
        <div>
          <h1 className="text-4xl font-bold mb-2">VS Code Extensions</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400">Our Recommended Extensions</h2>
        </div>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {extensions.map((ext, index) => (
          <ExtensionCard key={index} {...ext} />
        ))}
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">New VS Code Settings</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          VS Code has updated its settings, making some extensions obsolete. Here are the settings that replace previously recommended extensions:
        </p>
        <ul className="list-none">
          {obsoleteExtensions.map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default VSCodeExtensions;