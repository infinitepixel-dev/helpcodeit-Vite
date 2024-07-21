import { lazy } from 'react';

const routes = [
  //INFO: MISC Pages
  { path: '*', componentPath: '../components/Pages/HomePage', key: 'default' },
  { path: '/', componentPath: '../components/Pages/HomePage', key: 'home' },
  { path: '/about', componentPath: '../components/Pages/About', key: 'about' },
  { path: '/schedule-meeting', componentPath: '../components/Pages/ScheduleMeeting', key: 'scheduleMeeting' },
  //INFO: JAVASCRIPT Pages
  { path: '/data-generator', componentPath: '../components/Sub_Components/DataGenerator', key: 'dataGenerator' },
  { path: '/javascript', componentPath: '../components/Pages/JavascriptMainPage', key: 'javascriptMain' },
  { path: '/javascriptPrincipals/PracticeProblems', componentPath: '../components/Pages/javascriptPrincipals/PracticeProblems', key: 'practiceProblems' },
  { path: '/javascriptPrincipals/DeclaringVariables', componentPath: '../components/Pages/javascriptPrincipals/DeclaringVariables', key: 'declaringVariables' },
  { path: '/javascriptPrincipals/StringConcatenation', componentPath: '../components/Pages/javascriptPrincipals/StringConcatenation', key: 'stringConcatenation' },
  { path: '/javascriptPrincipals/StandardFunctions', componentPath: '../components/Pages/javascriptPrincipals/StandardFunctions', key: 'standardFunctions' },
  { path: '/javascriptPrincipals/UnitTestingMochaChai', componentPath: '../components/Pages/javascriptPrincipals/UnitTestingMochaChai', key: 'unitTestingMochaChai' },
  { path: '/javascriptPrincipals/Loops', componentPath: '../components/Pages/javascriptPrincipals/Loops', key: 'loops' },
  { path: '/code_practice', componentPath: '../components/Sub_Components/Code_Practice', key: 'codePractice' },
  { path: '/javascriptPrincipals/Objects', componentPath: '../components/Pages/javascriptPrincipals/JSObjects', key: 'objects' },
  { path: '/javascriptPrincipals/ArrowFunctions', componentPath: '../components/Pages/javascriptPrincipals/ArrowFunctions', key: 'arrowFunctions' },
  { path: '/javascriptPrincipals/ArrayMethods', componentPath: '../components/Pages/javascriptPrincipals/ArrayMethods', key: 'arrayMethods' },
  { path: '/javascriptPrincipals/StringMethods', componentPath: '../components/Pages/javascriptPrincipals/StringMethods', key: 'stringMethods' },
  { path: '/javascriptPrincipals/PackagesAndPackageJson', componentPath: '../components/Pages/javascriptPrincipals/PackagesAndPackageJson', key: 'packagesAndPackageJson' },
  { path: '/javascriptPrincipals/CRUD-Main', componentPath: '../components/Pages/javascriptPrincipals/JSCRUDMain', key: 'crudMain' },
  { path: '/javascriptPrincipals/CRUD-AJAX', componentPath: '../components/Pages/javascriptPrincipals/CRUD/AJAX', key: 'crudAjax' },
  { path: '/javascriptPrincipals/CRUD-Fetch', componentPath: '../components/Pages/javascriptPrincipals/CRUD/CRUD_Operations/Fetch', key: 'crudFetch' },
  { path: '/javascriptPrincipals/MenuApp', componentPath: '../components/Pages/javascriptPrincipals/MenuApp', key: 'menuApp' },
  { path: '/javascriptPrincipals/WarGameTutorial', componentPath: '../components/Pages/javascriptPrincipals/War', key: 'warGameTutorial' },
  { path: '/javascriptPrincipals/JSONServer', componentPath: '../components/Pages/javascriptPrincipals/JSONServer', key: 'JSONServer'},
 //INFO: FUNDAMENTALS Pages
  { path: '/fundamentals/GitHub', componentPath: '../components/Pages/fundamentals/GitHub', key: 'gitHub' },
  { path: '/fundamentals/VSCodeHotkeysTable', componentPath: '../components/Pages/fundamentals/VSCodeHotkeysTable', key: 'vsCodeHotkeysTable' },
  { path: '/fundamentals/Bootstrap', componentPath: '../components/Pages/fundamentals/Bootstrap', key: 'bootstrap' },
  { path: '/fundamentals/Installs', componentPath: '../components/Pages/fundamentals/Installs', key: 'installs' },
  { path: '/fundamentals/VSCodeExtensions', componentPath: '../components/Pages/fundamentals/VSCodeExtensions', key: 'vsCodeExtensions' },
  { path: '/fundamentals/SettingUpPracticeEnvironment', componentPath: '../components/Pages/fundamentals/PracticeEnvironment', key: 'settingUpPracticeEnvironment' },
  { path: '/fundamentals/GitHubCheatsheet', componentPath: '../components/Pages/fundamentals/GitHubCheatsheet', key: 'gitHubCheatsheet' },
  { path: '/fundamentals/GitHubBranching', componentPath: '../components/Pages/fundamentals/GitHubBranching', key: 'gitHubBranching' },
  //INFO:  REACT Pages
  { path: '/ReactMain', componentPath: '../components/Pages/react/ReactMain', key: 'reactMain' },
  { path: '/ReactComponents', componentPath: '../components/Pages/react/ReactComponents', key: 'reactComponents' },
  { path: '/ReactRouter6', componentPath: '../components/Pages/react/ReactRouter6', key: 'reactRouter' },
  { path: '/PropsAndState', componentPath: '../components/Pages/react/PropsAndState', key: 'propsAndState' },
  { path: '/PlanningReactApps', componentPath: '../components/Pages/react/PlanningReactApps', key: 'planningApps' },
  { path: '/ReactHooks', componentPath: '../components/Pages/react/ReactHooks', key: 'reactHooks' },
];

// const components = {};
// const routes = {};

// routeDefinitions.forEach(route => {
//   components[route.key] = lazy(() => import(
//     /* @vite-ignore */
//     `${route.componentPath}`
// ));
//   routes[route.key] = { path: route.path, component: components[route.key] };
// });

const components = {};
routes.forEach(route => {
  components[route.key] = lazy(() => import(/* @vite-ignore */ route.componentPath));
});

const routesWithComponents = routes.map(route => ({
  ...route,
  component: components[route.key],
}));

export default routesWithComponents;