import React from 'react'
import { Helmet } from 'react-helmet-async'
import vscodelogo from '@assets/visual-studio-code.svg'
import imagePreview from '@assets/imagepreviewextension.jpeg'
import autoprefixer from 'autoprefixer'

const ExtensionCard = ({
    title,
    author,
    description,
    iconUrl,
    link,
    languages,
}) => (
    <div className="border-1 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:border-none dark:bg-gray-800">
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
        >
            <div className="p-6">
                {iconUrl && (
                    <img
                        src={iconUrl}
                        alt={`${title} Icon`}
                        className="mx-auto mb-4 h-24 w-24 rounded-md"
                    />
                )}
                <h3 className="mb-2 text-center text-2xl font-semibold">
                    {title}
                </h3>
                <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
                    By {author}
                </p>
                <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
                    {description}
                </p>
                {languages && (
                    <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        Works for: {languages}
                    </p>
                )}
            </div>
        </a>
    </div>
)

const SettingItem = ({ title, description }) => (
    <li className="mb-4">
        <h4 className="mb-1 text-lg font-semibold">{title}</h4>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </li>
)

function VSCodeExtensions() {
    const extensions = [
        {
            title: 'Git Reminder',
            author: 'Nicolas Hedger',
            description:
                "Git Reminder is a Visual Studio Code extension that reminds you to commit and push your changes at regular intervals. It's a simple way to avoid losing your work and keep your repository up to date.",
            iconUrl:
                'https://nhedger.gallerycdn.vsassets.io/extensions/nhedger/git-reminder/2024.3.241749/1708796988472/Microsoft.VisualStudio.Services.Icons.Default',
            link: 'https://marketplace.visualstudio.com/items?itemName=nhedger.git-reminder',
        },
        {
            title: 'Live Server',
            author: 'Ritwick Dey',
            description:
                'See your changes in real-time without refreshing. Essential for immediate feedback during development.',
            iconUrl:
                'https://ritwickdey.github.io/vscode-live-server/images/icon.png',
            link: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
        },
        {
            title: 'Prettier',
            author: 'Prettier',
            description:
                'Format your code with a click. Highly customizable and can format on save. Works with various languages and frameworks.',
            iconUrl:
                'https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/10.1.0/1690819498575/Microsoft.VisualStudio.Services.Icons.Default',
            link: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
            languages:
                'JavaScript · TypeScript · Flow · JSX · JSON · CSS · SCSS · Less · HTML · Vue · Angular · HANDLEBARS · Ember · Glimmer · GraphQL · Markdown · YAML',
        },
        {
            title: 'Comment Anchors',
            author: 'Exodius Studios',
            description:
                'Create anchors in your comments for easy navigation, especially useful in large files.',
            iconUrl:
                'https://exodiusstudios.gallerycdn.vsassets.io/extensions/exodiusstudios/comment-anchors/1.10.4/1705659936841/Microsoft.VisualStudio.Services.Icons.Default',
            link: 'https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors',
        },
        {
            title: 'Auto Rename Tag',
            author: 'Jun Han',
            description:
                'Automatically rename paired HTML/XML tags. Saves time and reduces errors.',
            iconUrl:
                'https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-rename-tag/0.1.10/1644319230173/Microsoft.VisualStudio.Services.Icons.Default',
            link: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag',
        },
        {
            title: 'Blockman - Highlight Nested Code Blocks',
            author: 'leodevbro',
            description:
                'Highlights nested code blocks for better readability. Great for quickly identifying code structure.',
            iconUrl:
                'https://leodevbro.gallerycdn.vsassets.io/extensions/leodevbro/blockman/1.7.8/1727990799033/Microsoft.VisualStudio.Services.Icons.Default',
            link: 'https://marketplace.visualstudio.com/items?itemName=leodevbro.blockman',
        },
        {
            title: 'Template String Converter',
            author: 'meganrogge',
            description:
                'Convert strings to template literals and vice versa. Saves time and makes your code cleaner.',
            iconUrl:
                'https://meganrogge.gallerycdn.vsassets.io/extensions/meganrogge/template-string-converter/0.6.1/1681403288998/Microsoft.VisualStudio.Services.Icons.Default',
            link: 'https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter',
        },
        {
            title: 'Image Preview',
            author: 'Kiss Tamás',
            description:
                'Preview images in your project without opening them. Great for quickly checking images.',
            iconUrl: imagePreview,
            link: 'https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview',
        },
        {
            title: 'Version Lens',
            Author: 'pflannery',
            description:
                'Shows the latest version of your dependencies in package.json. Makes it easy to update your packages.',
            iconUrl:
                'https://pflannery.gallerycdn.vsassets.io/extensions/pflannery/vscode-versionlens/1.14.2/1718202353384/Microsoft.VisualStudio.Services.Icons.Default',
            link: 'https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens',
        },
    ]

    const obsoleteExtensions = [
        {
            title: '- Auto Close Tag',
            description:
                "Search for 'auto close tags' in settings. Automatically closes tags in HTML.",
        },
        {
            title: '- Bracket Pair Colorizer',
            description:
                "Search for 'bracket pair colorizer' in settings. Colorizes brackets for better visibility.",
        },
        {
            title: '- Indent Rainbow',
            description:
                "Search for 'indent rainbow' in settings. Colorizes indents for clearer code structure.",
        },
    ]

    return (
        <div className="container mx-auto max-w-6xl px-4 py-12">
            <Helmet>
                <title>VS Code Extensions | Help Code It</title>
                <meta
                    name="description"
                    content="Explore our recommended Visual Studio Code extensions for web development. Prettier, Live Server, and Comment Anchors are essential for efficient coding."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/VSCodeExtensions"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Visual Studio Code, VS Code extensions, Prettier, Live Server, Comment Anchors, web development, front-end development"
                />
            </Helmet>

            <header className="mb-12 flex items-center justify-center">
                <img
                    src={vscodelogo}
                    alt="VS Code Logo"
                    className="mr-6 h-20 w-20"
                />
                <div>
                    <h1 className="mb-2 text-4xl font-bold">
                        VS Code Extensions
                    </h1>
                    <h2 className="text-xl text-gray-600 dark:text-gray-400">
                        Our Recommended Extensions
                    </h2>
                </div>
            </header>

            <section className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {extensions.map((ext, index) => (
                    <ExtensionCard key={index} {...ext} />
                ))}
            </section>

            <section className="mb-16 rounded-lg bg-gray-100 p-8 dark:bg-gray-900">
                <h2 className="mb-6 text-center text-3xl font-semibold">
                    New VS Code Settings
                </h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                    VS Code has updated its settings, making some extensions
                    obsolete. Here are the settings that replace previously
                    recommended extensions:
                </p>
                <ul className="list-none">
                    {obsoleteExtensions.map((item, index) => (
                        <SettingItem key={index} {...item} />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default VSCodeExtensions
