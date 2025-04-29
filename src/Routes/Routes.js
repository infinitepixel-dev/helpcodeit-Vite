import { lazy } from 'react';

export const navItems = [
  { type: 'link', to: '/', label: 'Home' },
  {
    type: 'dropdown',
    label: 'Getting Started',
    items: [
      { to: '/fundamentals/installs', label: 'Installs' },
      { to: '/fundamentals/files', label: 'Understanding Files' },
      { to: '/miscpages/rubberducky', label: 'Rubber Ducky Method' },
      { to: '/fundamentals/namingconventions', label: 'Naming Conventions' },
      { to: '/fundamentals/vscodeextensions', label: 'VS Code Extensions' },
      { to: '/fundamentals/vscodehotkeystable', label: 'VS Code Hotkeys' },
      { to: '/fundamentals/settinguppracticeenvironment', label: 'Setting Up a Practice Environment' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Tools',
    items: [
      { to: 'https://codeproblems.michaelvarnell.com', label: 'Practice Code Problems' },
      { to: '/data-generator', label: 'Data Generator' },
      { to: '/javascriptprincipals/apiresources', label: 'API Resources' },
      { to: '/useful-links', label: 'Useful Links' },
      { to: '/mediarecommendations', label: 'Our Media Recommendations' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Topics',
    items: [
      { to: '/fundamentals/webdesignprincipals', label: 'Web Design Principals' },
      { to: '/htmlpages/htmlmain', label: 'HTML' },
      { to: '/csspages/cssmain', label: 'CSS' },
      { to: '/fundamentals/bootstrap', label: 'Bootstrap' },
      { to: '/githubpages/github', label: 'GitHub' },
      { to: '/markdown/markdownguide', label: 'Markdown' },
      { to: '/vitemain', label: 'Vite Guides' },
      { to: '/typescriptpages/typescriptmain', label: 'TypeScript' },
      { to: '/javascript', label: 'JavaScript' },
      { to: '/reactmain', label: 'React.js' },
    ],
  },
  { type: 'link', to: '/about', label: 'About' },
  { type: 'link', to: '/contact', label: 'Contact' },
];

export const componentRoutes = [
  { path: '/', componentPath: '../components/Pages/HomePage.jsx', key: 'home' },
  { path: '/about', componentPath: '../components/Pages/About.jsx', key: 'about' },
  { path: '/contact', componentPath: '../components/Pages/Contact.jsx', key: 'contact' },
  { path: '/fundamentals/installs', componentPath: '../components/Pages/fundamentals/Installs.jsx', key: 'installs' },
  { path: '/fundamentals/files', componentPath: '../components/Pages/fundamentals/Files.jsx', key: 'files' },
  { path: '/miscpages/rubberducky', componentPath: '../components/Pages/MiscPages/RubberDucky.jsx', key: 'rubberducky' },
  { path: '/fundamentals/namingconventions', componentPath: '../components/Pages/fundamentals/NamingConventions.jsx', key: 'namingconventions' },
  { path: '/fundamentals/vscodeextensions', componentPath: '../components/Pages/fundamentals/VSCodeExtensions.jsx', key: 'vscodeextensions' },
  { path: '/fundamentals/vscodehotkeystable', componentPath: '../components/Pages/fundamentals/VSCodeHotkeysTable.jsx', key: 'vscodehotkeystable' },
  { path: '/fundamentals/settinguppracticeenvironment', componentPath: '../components/Pages/fundamentals/PracticeEnvironment.jsx', key: 'settinguppracticeenvironment' },
  { path: '/fundamentals/webdesignprincipals', componentPath: '../components/Pages/fundamentals/WebDesignPrincipals.jsx', key: 'webdesignprincipals' },
  { path: '/htmlpages/htmlmain', componentPath: '../components/Pages/htmlPages/HTMLMain.jsx', key: 'htmlmain' },
  { path: '/csspages/cssmain', componentPath: '../components/Pages/cssPages/CSSMain.jsx', key: 'cssmain' },
  { path: '/fundamentals/bootstrap', componentPath: '../components/Pages/fundamentals/Bootstrap.jsx', key: 'bootstrap' },
  { path: '/githubpages/github', componentPath: '../components/Pages/githubPages/GitHub.jsx', key: 'github' },
  { path: '/markdown/markdownguide', componentPath: '../components/Pages/markdown/MarkdownGuide.jsx', key: 'markdownguide' },
  { path: '/vitemain', componentPath: '../components/Pages/vite/ViteMain.jsx', key: 'vitemain' },
  { path: '/typescriptpages/typescriptmain', componentPath: '../components/Pages/typescriptPages/TypeScriptMain.jsx', key: 'typescriptmain' },
  { path: '/javascript', componentPath: '../components/Pages/javascriptPrincipals/JavascriptMainPage.jsx', key: 'javascript' },
  { path: '/reactmain', componentPath: '../components/Pages/react/ReactMain.jsx', key: 'reactmain' },
  { path: '/data-generator', componentPath: '../components/Sub_Components/DataGenerator.jsx', key: 'datagenerator' },
  { path: '/useful-links', componentPath: '../components/Pages/fundamentals/UsefulLinks.jsx', key: 'usefullinks' },
  { path: '/mediarecommendations', componentPath: '../components/Pages/MiscPages/MediaRecommendations.jsx', key: 'mediarecommendations' },
  { path: '/javascriptprincipals/apiresources', componentPath: '../components/Pages/javascriptPrincipals/APIResources.jsx', key: 'apiresources' },
];

let RoutesWithComponents = componentRoutes;

if (typeof window !== 'undefined') {
  const componentMap = import.meta.glob('../components/Pages/**/*.{jsx,js}');
  const subComponentMap = import.meta.glob('../components/Sub_Components/**/*.{jsx,js}');

  const components = {};

  componentRoutes.forEach((route) => {
    const importPath = route.componentPath;
    if (componentMap[importPath]) {
      components[route.key] = lazy(componentMap[importPath]);
    } else if (subComponentMap[importPath]) {
      components[route.key] = lazy(subComponentMap[importPath]);
    }
  });

  RoutesWithComponents = componentRoutes.map((route) => ({
    ...route,
    component: components[route.key],
  }));
}

export default RoutesWithComponents;
