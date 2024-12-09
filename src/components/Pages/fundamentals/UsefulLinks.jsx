import UsefulLinksTable from '@subComponents/UsefulLinksTable'
import { ArrowBigUp } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

function UsefulLinks() {
    const genlinks = [
        {
            title: 'MDN Web Docs',
            description: "Mozilla's documentation on web technologies",
            url: 'https://developer.mozilla.org/',
        },
        {
            title: 'W3Schools',
            description: 'Web development tutorials',
            url: 'https://www.w3schools.com/',
        },
        {
            title: 'Bootstrap Documentation',
            description: 'Official Bootstrap documentation',
            url: 'https://getbootstrap.com',
        },
        {
            title: 'React Documentation',
            description: 'Official React documentation',
            url: 'https://reactjs.org/docs/getting-started.html',
        },
        {
            title: 'React Bootstrap Documentation',
            description: 'Official React Bootstrap documentation',
            url: 'https://react-bootstrap.github.io/getting-started/introduction/',
        },
        {
            title: 'Tailwind CSS Documentation',
            description: 'Official Tailwind CSS documentation',
            url: 'https://tailwindcss.com/docs',
        },
        {
            title: 'ECMAScript Documentation',
            description: 'Official ECMAScript documentation',
            url: 'https://tc39.es/ecma262/',
        },
        {
            title: 'Vite Documentation',
            description: 'Official Vite documentation',
            url: 'https://vitejs.dev/guide/',
        },
        {
            title: 'Bootswatch Documentation',
            description: 'Official Bootswatch themes for Bootstrap',
            url: 'https://bootswatch.com/',
        },
        {
            title: 'React Router Documentation',
            description: 'Official React Router documentation',
            url: 'https://reactrouter.com/docs/en/v6',
        },
        {
            title: 'Redux Documentation',
            description: 'Official Redux documentation',
            url: 'https://redux.js.org/introduction/getting-started',
        },
        {
            title: 'JavaScript Info',
            description: 'In-depth modern JavaScript tutorials',
            url: 'https://javascript.info/',
        },
        {
            title: 'Stack Overflow',
            description: 'Community-driven Q&A for programming',
            url: 'https://stackoverflow.com/',
        },
    ]

    const cheatSheetLinks = [
        {
            title: 'Command Line Commands',
            description: 'List of common command line commands',
            url: 'https://www.git-tower.com/blog/command-line-cheat-sheet/',
        },
        {   title: 'Bash Cheatsheet and Quick Reference',
            description: 'More than a cheatsheet for Bash commands',
            url: 'https://devhints.io/bash',
        },
        {
            title: 'HTML Cheatsheet',
            description: 'Comprehensive HTML cheatsheet',
            url: 'https://htmlcheatsheet.com/',
        },
        {
            title: 'Emmet Cheatsheet',
            description: 'Emmet cheatsheet for faster coding',
            url: 'https://docs.emmet.io/cheat-sheet/',
        },
        {
            title: 'CSS Cheatsheet',
            description: 'Comprehensive CSS cheatsheet',
            url: 'https://htmlcheatsheet.com/css/',
        },
        {
            title: 'JavaScript Cheatsheet',
            description: 'HTML cheatsheet for JavaScript',
            url: 'https://htmlcheatsheet.com/js/',
        },
        {
            title: 'CSS Flexbox Guide',
            description: 'Guide to CSS Flexbox',
            url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        },
        {
            title: 'CSS Grid Guide',
            description: 'Complete guide to CSS Grid',
            url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        },
        {
            title: 'Bootstrap Cheatsheet',
            description: 'Comprehensive Bootstrap cheatsheet',
            url: 'https://bootstrap-cheatsheet.themeselection.com/#nav-tabs',
        },
        {
            title: 'Tailwind CSS Cheat Sheet',
            description: 'Cheatsheet for Tailwind CSS',
            url: 'https://nerdcave.com/tailwind-cheat-sheet',
        },
        {
            title: 'Node.js File System (fs) Module',
            description: 'Documentation for Node.js fs module',
            url: 'https://nodejs.org/api/fs.html',
        },
        {
            title: 'Eclipse Cheatsheet',
            description: 'Cheatsheet for Eclipse IDE',
            url: 'https://www.shortcutfoo.com/app/dojos/eclipse-win/cheatsheet',
        },
        {
            title: 'Swift 5.1 Cheatsheet',
            description: 'Cheatsheet for Swift 5.1',
            url: 'https://koenig-media.raywenderlich.com/uploads/2020/12/RW-Swift-5.1-Cheatsheet-1.0.pdf',
        },
        {
            title: 'Java Cheatsheet',
            description: 'Cheatsheet for Java programming',
            url: 'https://introcs.cs.princeton.edu/java/11cheatsheet/',
        },
        {
            title: 'PM2 Cheatsheet',
            description: 'Cheatsheet for PM2 process manager',
            url: 'https://devhints.io/pm2',
        },
    ]

    const mappingLinks = [
        {
            title: 'OpenFreeMap',
            description: 'OpenFreeMap official website',
            url: 'https://openfreemap.org/',
        },
        {
            title: 'MapLibre',
            description: 'MapLibre official website',
            url: 'https://maplibre.org/',
        },
        {
            title: 'OpenStreetMap',
            description: 'OpenStreetMap official website',
            url: 'https://www.openstreetmap.org',
        },
        {
            title: 'Google Maps JavaScript',
            description: 'Google Maps JavaScript documentation',
            url: 'https://developers.google.com/maps/do...',
        },
        {
            title: 'Google Maps Pricing',
            description: 'Google Maps pricing information',
            url: 'https://mapsplatform.google.com/pricing/',
        },
        {
            title: 'Mapbox',
            description: 'Mapbox official website',
            url: 'https://www.mapbox.com/',
        },
        {
            title: 'Mapbox Pricing',
            description: 'Mapbox pricing details',
            url: 'https://www.mapbox.com/pricing',
        },
        {
            title: 'MapTiler',
            description: 'MapTiler official website',
            url: 'https://www.maptiler.com/',
        },
        {
            title: 'MapTiler Server',
            description: 'MapTiler server information',
            url: 'https://www.maptiler.com/server/',
        },
        {
            title: 'Protomaps',
            description: 'Protomaps official website',
            url: 'https://protomaps.com/',
        },
        {
            title: 'Leaflet',
            description: 'Leaflet official website',
            url: 'https://leafletjs.com/',
        },
        {
            title: 'OpenLayers',
            description: 'OpenLayers official website',
            url: 'https://openlayers.org/',
        },
        {
            title: 'Raster Tile Providers',
            description:
                'Information on raster tile providers from OpenStreetMap',
            url: 'https://wiki.openstreetmap.org/Wiki/R...',
        },
        {
            title: 'Vector Tiles',
            description: 'Vector tiles documentation from OpenStreetMap',
            url: 'https://wiki.openstreetmap.org/wiki/V...',
        },
        {
            title: 'Maputnik Map Style Editor',
            description: 'Maputnik map style editor',
            url: 'https://maputnik.github.io/',
        },
        {
            title: 'React-MapLibre',
            description: 'React MapLibre component library',
            url: 'https://visg|.github.io/react-maplibre/',
        },
        {
            title: 'Vue-MapLibre-GL',
            description: 'Vue MapLibre GL component library',
            url: 'https://indoorequal.github.io/vue-map...',
        },
        {
            title: 'Svelte-MapLibre',
            description: 'Svelte MapLibre component library',
            url: 'https://github.com/dimfeld/svelte-map...',
        },
        {
            title: 'Awesome MapLibre',
            description: 'Awesome MapLibre resources on GitHub',
            url: 'https://github.com/maplibre/awesome-m...',
        },
        {
            title: 'OpenFreeMap Self Hosting',
            description: 'OpenFreeMap self hosting documentation',
            url: 'https://github.com/hyperknot/openfree...',
        },
    ]

    const codingGameLinks = [
        {
            title: 'CSS Diner',
            description: 'CSS selector game',
            url: 'https://flukeout.github.io/',
        },
        {
            title: 'CSS Battle',
            description: 'CSS code-golfing game',
            url: 'https://cssbattle.dev/',
        },
        {
            title: 'Flexbox Zombies',
            description: 'Learn Flexbox through a zombie game',
            url: 'https://mastery.games/flexboxzombies/',
        },
        {
            title: 'Flexbox Defense',
            description: 'Defend against enemies using Flexbox',
            url: 'http://www.flexboxdefense.com/',
        },
        {
            title: 'Flexbox Adventure',
            description: 'Adventure game for learning Flexbox',
            url: 'https://codingfantasy.com/games/flexboxadventure',
        },
        {
            title: 'Flexbox Froggy',
            description: 'Help Froggy by writing CSS Flexbox code',
            url: 'https://flexboxfroggy.com/',
        },
        {
            title: 'Code Golf',
            description: 'Competitive code-golfing platform',
            url: 'https://code.golf/',
        },
        {
            title: 'Elevator Saga',
            description: 'Elevator programming challenge',
            url: 'https://play.elevatorsaga.com/#challenge=4',
        },
        {
            title: 'CodingBat Python',
            description: 'Interactive Python practice problems',
            url: 'https://codingbat.com/python',
        },
    ]

    const gitLinks = [
        {
            title: 'GitPages Tutorial',
            description: 'Tutorial on using GitHub Pages',
            url: 'https://masheen88.github.io/GitPages_Tutorial/',
        },
        {
            title: 'Deploying Vite App to GitHub Pages',
            description: 'Guide to deploy Vite apps on GitHub Pages',
            url: 'https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane',
        },
        {
            title: 'VS Code GitHub',
            description: 'Using GitHub with Visual Studio Code',
            url: 'https://vscode.github.com/',
        },
        {
            title: 'Pro Git Book',
            description: 'Comprehensive guide to Git',
            url: 'https://git-scm.com/book/en/v2',
        },
        {
            title: 'GitHub Learning Lab',
            description: 'Interactive courses on GitHub',
            url: 'https://lab.github.com/',
        },
        {
            title: 'GitHub Docs',
            description: 'Official GitHub documentation',
            url: 'https://docs.github.com/',
        },
        {
            title: 'Git Cheat Sheet',
            description: 'Git commands cheat sheet',
            url: 'https://education.github.com/git-cheat-sheet-education.pdf',
        },
        {
            title: 'Git Tower Cheat Sheet',
            description: 'Advanced Git cheat sheet by Git Tower',
            url: 'https://www.git-tower.com/blog/git-cheat-sheet/',
        },
        {
            title: 'Atlassian Git Tutorials',
            description: 'Git tutorials by Atlassian',
            url: 'https://www.atlassian.com/git/tutorials',
        },
        {
            title: 'Learn Git Branching',
            description: 'Interactive Git branching tutorial',
            url: 'https://learngitbranching.js.org/',
        },
    ]

    const designResourcesLinks = [
        {
            title: 'Happy Hues',
            description: 'Color palette inspiration',
            url: 'https://www.happyhues.co/palettes/9',
        },
        {
            title: 'Lorem Ipsum Generator',
            description: 'Generate placeholder text',
            url: 'https://loremipsum.io/generator/?n=5&t=p',
        },
        {
            title: 'Omatsuri',
            description: 'Open source browser tools',
            url: 'https://omatsuri.app/',
        },
        {
            title: 'Keyframes',
            description: 'Create CSS keyframe animations',
            url: 'https://keyframes.app/',
        },
        {
            title: 'Cool Backgrounds',
            description: 'Generate cool backgrounds',
            url: 'https://coolbackgrounds.io/',
        },
        {
            title: 'Coolors',
            description: 'Color scheme generator',
            url: 'https://coolors.co/',
        },
        {
            title: 'Awesome Webcomponents',
            description: 'Curated list of web components',
            url: 'https://github.com/obetomuniz/awesome-webcomponents',
        },
        {
            title: 'HTML5 UP',
            description: 'Responsive HTML5 and CSS3 site templates',
            url: 'https://html5up.net/',
        },
        {
            title: 'Animate.css',
            description: 'CSS animations library',
            url: 'https://animate.style/',
        },
        {
            title: 'Super Useful CSS Resources',
            description: 'A collection of useful CSS resources',
            url: 'https://dev.to/lissy93/super-useful-css-resources-1ba3',
        },
        {
            title: 'Layout',
            description: 'CSS layout generator',
            url: 'https://layout.bradwoods.io/',
        },
        {
            title: 'Simple CSS',
            description: 'Simple CSS framework',
            url: 'https://simplecss.eu/',
        },
        {
            title: 'CSSmatic Box Shadow',
            description: 'CSS box shadow generator',
            url: 'https://www.cssmatic.com/box-shadow',
        },
        {
            title: 'Scrollbar Customizer',
            description: 'Customize CSS scrollbars',
            url: 'https://scrollbar.app/',
        },
        {
            title: 'Google Fonts',
            description: 'Free fonts from Google',
            url: 'https://fonts.google.com/',
        },
        {
            title: 'Feather Icons',
            description: 'Open source icons',
            url: 'https://feathericons.com/',
        },
        {
            title: 'Iconmonstr',
            description: 'Free icons',
            url: 'https://iconmonstr.com/',
        },
        {
            title: '3D Icons',
            description: 'Free 3D icons',
            url: 'https://3dicons.co/',
        },
        {
            title: 'Shapefest',
            description: 'Library of shapes',
            url: 'https://www.shapefest.com/#New',
        },
        {
            title: 'ManyPixels Gallery',
            description: 'Gallery of illustrations',
            url: 'https://www.manypixels.co/gallery/',
        },
        {
            title: 'Nerd Fonts',
            description: 'Developer targeted fonts',
            url: 'https://www.nerdfonts.com/',
        },
        {
            title: 'Pexels',
            description: 'Free stock photos',
            url: 'https://www.pexels.com/',
        },
        {
            title: 'Unsplash',
            description: 'Free high-resolution photos',
            url: 'https://unsplash.com/',
        },
        {
            title: 'The Noun Project',
            description: 'Icons for everything',
            url: 'https://thenounproject.com/',
        },
        {
            title: 'Undraw',
            description: 'Open-source illustrations',
            url: 'https://undraw.co/',
        },
        {
            title: 'SVG Porn',
            description:
                'Collection of High Quality corporate and tech related SVG logos',
            url: 'https://svgporn.com/',
        },
        {
            title: 'Typed.js',
            description: 'JavaScript typing animations',
            url: 'https://mattboldt.com/demos/typed-js/',
        },
        {
            title: 'AOS - Animate On Scroll Library',
            description: 'Animate elements on scroll',
            url: 'https://michalsnik.github.io/aos/',
        },
        {
            title: 'Open Game Art',
            description: 'Free game assets',
            url: 'https://opengameart.org/',
        },
        {
            title: 'Slider Revolution',
            description: 'WordPress slider plugin',
            url: 'https://www.sliderrevolution.com/',
        },
    ]

    const beginnerOpenSourceResources = [
        {
            title: 'Chingu',
            description: 'Collaborate on real projects with other developers',
            url: 'https://www.chingu.io/',
        },
        {
            title: 'First Timers Only',
            description: 'Encourages new contributors to open source projects',
            url: 'https://www.firsttimersonly.com/',
        },
        {
            title: 'Up for Grabs',
            description: 'Find projects looking for contributors',
            url: 'https://up-for-grabs.net/#/filters?date=1week&tags=javascript',
        },
    ]

    const uiTailwindResourcesLinks = [
        {
            title: 'FullCalendar',
            description: 'JavaScript event calendar',
            url: 'https://fullcalendar.io/',
        },
        {
            title: 'Tostify',
            description: 'Toast notifications and alerts',
            url: 'https://www.npmjs.com/package/react-toastify',
        },
        {
            title: 'Awesome ShadCN UI',
            description: 'Curated list of resources for ShadCN UI',
            url: 'https://github.com/birobirobiro/awesome-shadcn-ui',
        },
        {
            title: 'Aceternity UI',
            description: 'UI components library',
            url: 'https://ui.aceternity.com/',
        },
        {
            title: 'Material Tailwind',
            description: 'Material Design components for Tailwind CSS',
            url: 'https://www.material-tailwind.com/',
        },
        {
            title: 'Tailwind CSS Animated',
            description: 'Animated components for Tailwind CSS',
            url: 'https://www.tailwindcss-animated.com/',
        },
        {
            title: 'DaisyUI',
            description: 'Components for Tailwind CSS',
            url: 'https://daisyui.com/',
        },
        {
            title: 'ShadCN UI',
            description: 'ShadCN UI component library',
            url: 'https://ui.shadcn.com/',
        },
        {
            title: 'Headless UI',
            description: 'Completely unstyled, fully accessible UI components',
            url: 'https://headlessui.com/',
        },
    ]

    return (
        <div className="mb-14">
            <Helmet>
                <title>Useful Developer Links | Help Code It</title>
                <meta
                    name="description"
                    content="A collection of useful resources for web developers. Find cheatsheets, coding games, Git and GitHub resources, design resources, and more."
                />
                <meta
                    property="og:title"
                    content="Useful Links | Help Code IT"
                />
                <meta
                    property="og:description"
                    content="A collection of useful resources for web developers. Find cheatsheets, coding games, Git and GitHub resources, design resources, and more."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/useful-links"
                />
            </Helmet>

            <h1 className="my-8 text-3xl font-bold text-center">
                Useful Links
            </h1>
            <p className="mb-8 text-lg text-center">
                A collection of useful resources for web developers
            </p>
            <div className="">
                <ul className="flex flex-wrap justify-center space-x-4 text-lg">
                    <div className="grid grid-cols-2">
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#generalresources">General Resources</a>
                        </li>
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#cheatsheets">Cheatsheets</a>
                        </li>
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#codinggames">Coding Games</a>
                        </li>
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#git&github">Git and GitHub</a>
                        </li>
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#mapping">Mapping for Websites</a>
                        </li>
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#designresources">Design Resources</a>
                        </li>
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#opensource">
                                Beginner Open Source Resources
                            </a>
                        </li>
                        <li className="px-1 text-2xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                            <a href="#tailwind">Tailwind UI Resources</a>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="container mx-auto">
                <h1 className="my-8 text-3xl font-bold text-center">
                    General Resources
                </h1>
                <UsefulLinksTable links={genlinks} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>
                <h1
                    id="cheatsheets"
                    className="my-8 text-3xl font-bold text-center"
                >
                    Cheatsheets
                </h1>
                <UsefulLinksTable links={cheatSheetLinks} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>
                <h1
                    id="codinggames"
                    className="my-8 text-3xl font-bold text-center"
                >
                    Coding Games
                </h1>
                <UsefulLinksTable links={codingGameLinks} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>
                <h1
                    id="git&github"
                    className="my-8 text-3xl font-bold text-center"
                >
                    Git and GitHub
                </h1>
                <UsefulLinksTable links={gitLinks} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>
                <h1
                    id="designresources"
                    className="my-8 text-3xl font-bold text-center"
                >
                    Design Resources
                </h1>
                <UsefulLinksTable links={designResourcesLinks} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>
                <h1
                    id="opensource"
                    className="my-8 text-3xl font-bold text-center"
                >
                    Beginner Open Source Resources
                </h1>
                <UsefulLinksTable links={beginnerOpenSourceResources} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>
                <h1 id='mapping' className='my-8 text-3xl font-bold text-center'>Mapping for Websites</h1>
                <UsefulLinksTable links={mappingLinks} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>

                <h1
                    id="tailwind"
                    className="my-8 text-3xl font-bold text-center"
                >
                    UI Resources
                </h1>
                <UsefulLinksTable links={uiTailwindResourcesLinks} />
                <div className="grid justify-center">
                    <a
                        href="#top"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        Back to top
                        <ArrowBigUp className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default UsefulLinks
