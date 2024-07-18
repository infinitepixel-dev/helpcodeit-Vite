
import React, { lazy } from 'react';
import War from '../components/Pages/javascriptPrincipals/War.jsx'
import ScheduleMeeting from '../components/Pages/ScheduleMeeting.jsx'

// Lazy loading components
const HomePage = lazy(() => import('../components/Pages/HomePage'))
const About = lazy(() => import('../components/Pages/About'))
const DataGenerator = lazy(
    () => import('../components/Sub_Components/DataGenerator')
)
const JavascriptMainPage = lazy(
    () => import('../components/Pages/JavascriptMainPage')
)
const PracticeProblems = lazy(
    () => import('../components/Pages/javascriptPrincipals/PracticeProblems')
)
const DeclaringVariables = lazy(
    () => import('../components/Pages/javascriptPrincipals/DeclaringVariables')
)
const CodePractice = lazy(
    () => import('../components/Sub_Components/Code_Practice')
)
const StandardFunctions = lazy(
    () => import('../components/Pages/javascriptPrincipals/StandardFunctions')
)
const Loops = lazy(
    () => import('../components/Pages/javascriptPrincipals/Loops')
)
const JSObjects = lazy(
    () => import('../components/Pages/javascriptPrincipals/JSObjects')
)
const ArrowFunctions = lazy(
    () => import('../components/Pages/javascriptPrincipals/ArrowFunctions')
)
const ArrayMethods = lazy(
    () => import('../components/Pages/javascriptPrincipals/ArrayMethods')
)
const StringMethods = lazy(
    () => import('../components/Pages/javascriptPrincipals/StringMethods')
)
const PackagesAndPackageJson = lazy(
    () =>
        import('../components/Pages/javascriptPrincipals/PackagesAndPackageJson')
)
const Bootstrap = lazy(
    () => import('../components/Pages/fundamentals/Bootstrap')
)
const JSCRUDMain = lazy(
    () => import('../components/Pages/javascriptPrincipals/JSCRUDMain')
)
const AJAX = lazy(
    () => import('../components/Pages/javascriptPrincipals/CRUD/AJAX')
)
const Fetch = lazy(
    () =>
        import(
            '../components/Pages/javascriptPrincipals/CRUD/CRUD_Operations/Fetch'
        )
)
const GitHub = lazy(() => import('../components/Pages/fundamentals/GitHub'))
const GitHubCheatsheet = lazy(
    () => import('../components/Pages/fundamentals/GitHubCheatsheet')
)
const Installs = lazy(() => import('../components/Pages/fundamentals/Installs'))
const PracticeEnvironment = lazy(
    () => import('../components/Pages/fundamentals/PracticeEnvironment')
)
const StringConcatenation = lazy(
    () => import('../components/Pages/javascriptPrincipals/StringConcatenation')
)
const UnitTestingMochaChai = lazy(
    () => import('../components/Pages/javascriptPrincipals/UnitTestingMochaChai')
)
const VSCodeExtensions = lazy(
    () => import('../components/Pages/fundamentals/VSCodeExtensions')
)
const ReactMain = lazy(() => import('../components/Pages/react/ReactMain'))
const ReactComponents = lazy(
    () => import('../components/Pages/react/ReactComponents')
)
const ReactRouter6 = lazy(() => import('../components/Pages/react/ReactRouter6'))
const VSCodeHotkeysTable = lazy(
    () => import('../components/Pages/fundamentals/VSCodeHotkeysTable')
)
const MenuApp = lazy(
    () => import('../components/Pages/javascriptPrincipals/MenuApp')
)
const PropsAndState = lazy(
    () => import('../components/Pages/react/PropsAndState')
)
const PlanningReactApps = lazy(
    () => import('../components/Pages/react/PlanningReactApps')
)

const routes = {
    // Home
    home: { path: '/', component: HomePage, props: { theme: theme } },
    about: { path: '/about', component: About, props: {} },
    scheduleMeeting: { path: '/schedule-meeting', component: ScheduleMeeting, props: {} },
    dataGenerator: { path: '/data-generator', component: DataGenerator, props: {} },

    // Fundamentals
    gitHub: { path: '/fundamentals/GitHub', component: GitHub, props: {} },
    vsCodeHotkeysTable: { path: '/fundamentals/VSCodeHotkeysTable', component: VSCodeHotkeysTable, props: {} },
    bootstrap: { path: '/fundamentals/Bootstrap', component: Bootstrap, props: {} },
    installs: { path: '/fundamentals/Installs', component: Installs, props: {} },
    vsCodeExtensions: { path: '/fundamentals/VSCodeExtensions', component: VSCodeExtensions, props: {} },
    settingUpPracticeEnvironment: { path: '/fundamentals/SettingUpPracticeEnvironment', component: PracticeEnvironment, props: {} },
    gitHubCheatsheet: { path: '/fundamentals/GitHubCheatsheet', component: GitHubCheatsheet, props: {} },

    // JavaScript
    javascriptMain: { path: '/javascript', component: JavascriptMainPage, props: {} },
    practiceProblems: { path: '/javascriptPrincipals/PracticeProblems', component: PracticeProblems, props: {} },
    declaringVariables: { path: '/javascriptPrincipals/DeclaringVariables', component: DeclaringVariables, props: {} },
    stringConcatenation: { path: '/javascriptPrincipals/StringConcatenation', component: StringConcatenation, props: {} },
    standardFunctions: { path: '/javascriptPrincipals/StandardFunctions', component: StandardFunctions, props: {} },
    unitTestingMochaChai: { path: '/javascriptPrincipals/UnitTestingMochaChai', component: UnitTestingMochaChai, props: {} },
    loops: { path: '/javascriptPrincipals/Loops', component: Loops, props: {} },
    codePractice: { path: '/code_practice', component: CodePractice, props: {} },
    objects: { path: '/javascriptPrincipals/Objects', component: JSObjects, props: {} },
    arrowFunctions: { path: '/javascriptPrincipals/ArrowFunctions', component: ArrowFunctions, props: {} },
    arrayMethods: { path: '/javascriptPrincipals/ArrayMethods', component: ArrayMethods, props: {} },
    stringMethods: { path: '/javascriptPrincipals/StringMethods', component: StringMethods, props: {} },
    packagesAndPackageJson: { path: '/javascriptPrincipals/PackagesAndPackageJson', component: PackagesAndPackageJson, props: {} },
    crudMain: { path: '/javascriptPrincipals/CRUD-Main', component: JSCRUDMain, props: {} },
    crudAjax: { path: '/javascriptPrincipals/CRUD-AJAX', component: AJAX, props: {} },
    crudFetch: { path: '/javascriptPrincipals/CRUD-Fetch', component: Fetch, props: {} },
    menuApp: { path: '/javascriptPrincipals/MenuApp', component: MenuApp, props: {} },
    warGameTutorial: { path: '/javascriptPrincipals/WarGameTutorial', component: War, props: {} },

    // React
    reactMain: { path: '/ReactMain', component: ReactMain, props: {} },
    reactComponents: { path: '/ReactComponents', component: ReactComponents, props: {} },
    reactRouter: { path: '/ReactRouter6', component: ReactRouter6, props: {} },
    propsAndState: { path: '/PropsAndState', component: PropsAndState, props: {} },
    planningApps: { path: '/PlanningReactApps', component: PlanningReactApps, props: {} },

    // Default
    default: { path: '*', component: HomePage, props: { theme: theme } },
};

export default routes;