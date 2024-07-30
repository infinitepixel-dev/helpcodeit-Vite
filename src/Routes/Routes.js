import { lazy } from 'react';

export const componentRoutes = [
  //INFO: MISC Pages
  { path: '*', componentPath: '../components/Pages/HomePage.jsx', key: 'default' },
  { path: '/', componentPath: '../components/Pages/HomePage.jsx', key: 'home' },
  { path: '/about', componentPath: '../components/Pages/About.jsx', key: 'about' },
  { path: '/schedule-meeting', componentPath: '../components/Pages/ScheduleMeeting.jsx', key: 'scheduleMeeting' },
  { path: './APITable', componentPath: '../components/Pages/javascriptPrincipals/APITable.jsx', key: 'APITable'},
  //INFO: JAVASCRIPT Pages
  { path: '/data-generator', componentPath: '../components/Sub_Components/DataGenerator.jsx', key: 'dataGenerator' },
  { path: '/javascript', componentPath: '../components/Pages/JavascriptMainPage.jsx', key: 'javascriptMain' },
  { path: '/javascriptPrincipals/PracticeProblems', componentPath: '../components/Pages/javascriptPrincipals/PracticeProblems.jsx', key: 'practiceProblems' },
  { path: '/javascriptPrincipals/DeclaringVariables', componentPath: '../components/Pages/javascriptPrincipals/DeclaringVariables.jsx', key: 'declaringVariables' },
  { path: '/javascriptPrincipals/StringConcatenation', componentPath: '../components/Pages/javascriptPrincipals/StringConcatenation.jsx', key: 'stringConcatenation' },
  { path: '/javascriptPrincipals/StandardFunctions', componentPath: '../components/Pages/javascriptPrincipals/StandardFunctions.jsx', key: 'standardFunctions' },
  { path: '/javascriptPrincipals/UnitTestingMochaChai', componentPath: '../components/Pages/javascriptPrincipals/UnitTestingMochaChai.jsx', key: 'unitTestingMochaChai' },
  { path: '/javascriptPrincipals/Loops', componentPath: '../components/Pages/javascriptPrincipals/Loops.jsx', key: 'loops' },
  { path: '/code_practice', componentPath: '../components/Sub_Components/Code_Practice.jsx', key: 'codePractice' },
  { path: '/javascriptPrincipals/Objects', componentPath: '../components/Pages/javascriptPrincipals/JSObjects.jsx', key: 'objects' },
  { path: '/javascriptPrincipals/ArrowFunctions', componentPath: '../components/Pages/javascriptPrincipals/ArrowFunctions.jsx', key: 'arrowFunctions' },
  { path: '/javascriptPrincipals/ArrayMethods', componentPath: '../components/Pages/javascriptPrincipals/ArrayMethods.jsx', key: 'arrayMethods' },
  { path: '/javascriptPrincipals/StringMethods', componentPath: '../components/Pages/javascriptPrincipals/StringMethods.jsx', key: 'stringMethods' },
  { path: '/javascriptPrincipals/PackagesAndPackageJson', componentPath: '../components/Pages/javascriptPrincipals/PackagesAndPackageJson.jsx', key: 'packagesAndPackageJson' },
  { path: '/javascriptPrincipals/CRUD-Main', componentPath: '../components/Pages/javascriptPrincipals/JSCRUDMain.jsx', key: 'crudMain' },
  { path: '/javascriptPrincipals/CRUD-AJAX', componentPath: '../components/Pages/javascriptPrincipals/CRUD/AJAX.jsx', key: 'crudAjax' },
  { path: '/javascriptPrincipals/CRUD-Fetch', componentPath: '../components/Pages/javascriptPrincipals/CRUD/CRUD_Operations/Fetch.jsx', key: 'crudFetch' },
  { path: '/javascriptPrincipals/MenuApp', componentPath: '../components/Pages/javascriptPrincipals/MenuApp.jsx', key: 'menuApp' },
  { path: '/javascriptPrincipals/WarGameTutorial', componentPath: '../components/Pages/javascriptPrincipals/War.jsx', key: 'warGameTutorial' },
  { path: '/javascriptPrincipals/JSONServer', componentPath: '../components/Pages/javascriptPrincipals/JSONServer.jsx', key: 'JSONServer'},
  { path: '/javascriptPrincipals/APIResources', componentPath: '../components/Pages/javascriptPrincipals/APIResources.jsx', key: 'APIResources' },
  { path: '/javascriptPrincipals/CallbacksAndPromises', componentPath: '../components/Pages/javascriptPrincipals/CallbacksAndPromises.jsx', key: 'callbacksAndPromises' },
  { path: '/MiscPages/RubberDucky', componentPath: '../components/Pages/MiscPages/RubberDucky.jsx', key: 'RubberDucky' },
  //INFO GitHub Pages
  { path: '/githubPages/GitHub', componentPath: '../components/Pages/githubPages/GitHub.jsx', key: 'gitHub' },
  { path: '/githubPages/GitHubCheatsheet', componentPath: '../components/Pages/githubPages/GitHubCheatsheet.jsx', key: 'gitHubCheatsheet' },
  { path: '/githubPages/GitHubBranching', componentPath: '../components/Pages/githubPages/GitHubBranching.jsx', key: 'gitHubBranching' },
  { path: '/githubPages/ChangingGitHubCredentials', componentPath: '../components/Pages/githubPages/ChangingGitHubCredentials.jsx', key: 'changingGitHubCredentials' },
  { path: '/githubPages/AddARepository', componentPath: '../components/Pages/githubPages/AddARepository.jsx', key: 'addARepository' },
  { path: '/githubPages/push', componentPath: '../components/Pages/githubPages/PushingUpdates.jsx', key: 'pushingUpdates' },
 //INFO: FUNDAMENTALS Pages
  { path: '/fundamentals/VSCodeHotkeysTable', componentPath: '../components/Pages/fundamentals/VSCodeHotkeysTable.jsx', key: 'vsCodeHotkeysTable' },
  { path: '/fundamentals/Bootstrap', componentPath: '../components/Pages/fundamentals/Bootstrap.jsx', key: 'bootstrap' },
  { path: '/fundamentals/Installs', componentPath: '../components/Pages/fundamentals/Installs.jsx', key: 'installs' },
  { path: '/fundamentals/VSCodeExtensions', componentPath: '../components/Pages/fundamentals/VSCodeExtensions.jsx', key: 'vsCodeExtensions' },
  { path: '/fundamentals/SettingUpPracticeEnvironment', componentPath: '../components/Pages/fundamentals/PracticeEnvironment.jsx', key: 'settingUpPracticeEnvironment' },
  //INFO:  REACT Pages
  { path: '/ReactMain', componentPath: '../components/Pages/react/ReactMain.jsx', key: 'reactMain' },
  { path: '/ReactComponents', componentPath: '../components/Pages/react/ReactComponents.jsx', key: 'reactComponents' },
  { path: '/ReactRouter6', componentPath: '../components/Pages/react/ReactRouter6.jsx', key: 'reactRouter' },
  { path: '/PropsAndState', componentPath: '../components/Pages/react/PropsAndState.jsx', key: 'propsAndState' },
  { path: '/PlanningReactApps', componentPath: '../components/Pages/react/PlanningReactApps.jsx', key: 'planningApps' },
  { path: '/ReactHooks', componentPath: '../components/Pages/react/ReactHooks.jsx', key: 'reactHooks' },
];


let RoutesWithComponents = componentRoutes;

if (typeof window !== 'undefined') {
  // Vite-specific logic for dynamic imports
  const componentMap = import.meta.glob('../components/Pages/**/*.{jsx,js}');
  const subComponentMap = import.meta.glob('../components/Sub_Components/**/*.{jsx,js}');
  console.log('Component Map:', { ...componentMap, ...subComponentMap });

  // Initialize the components object
  const components = {};

  // Adjust componentPath if necessary to match the keys in componentMap
  componentRoutes.forEach(route => {
    const importPath = route.componentPath;
    if (componentMap[importPath]) {
      components[route.key] = lazy(componentMap[importPath]);
    } else if (subComponentMap[importPath]) {
      components[route.key] = lazy(subComponentMap[importPath]);
    } else {
      console.warn(`Component for path ${importPath} not found.`);
    }
  });

  // Create RoutesWithComponents array
  RoutesWithComponents = componentRoutes.map(route => ({
    ...route,
    component: components[route.key],
  }));
}

export default RoutesWithComponents;