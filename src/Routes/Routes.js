
import { lazy } from 'react';


// Lazy loading components
const HomePage = lazy(() => import('../components/Pages/HomePage'))
const ScheduleMeeting = lazy(() => import('../components/Pages/ScheduleMeeting'))
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

    const War = lazy(() => import('../components/Pages/javascriptPrincipals/War'))
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
    home: { path: '/', component: HomePage },
    about: { path: '/about', component: About },
    scheduleMeeting: { path: '/schedule-meeting', component: ScheduleMeeting },
    dataGenerator: { path: '/data-generator', component: DataGenerator },

    // Fundamentals
    gitHub: { path: '/fundamentals/GitHub', component: GitHub },
    vsCodeHotkeysTable: { path: '/fundamentals/VSCodeHotkeysTable', component: VSCodeHotkeysTable },
    bootstrap: { path: '/fundamentals/Bootstrap', component: Bootstrap },
    installs: { path: '/fundamentals/Installs', component: Installs },
    vsCodeExtensions: { path: '/fundamentals/VSCodeExtensions', component: VSCodeExtensions },
    settingUpPracticeEnvironment: { path: '/fundamentals/SettingUpPracticeEnvironment', component: PracticeEnvironment },
    gitHubCheatsheet: { path: '/fundamentals/GitHubCheatsheet', component: GitHubCheatsheet },

    // JavaScript
    javascriptMain: { path: '/javascript', component: JavascriptMainPage },
    practiceProblems: { path: '/javascriptPrincipals/PracticeProblems', component: PracticeProblems },
    declaringVariables: { path: '/javascriptPrincipals/DeclaringVariables', component: DeclaringVariables },
    stringConcatenation: { path: '/javascriptPrincipals/StringConcatenation', component: StringConcatenation },
    standardFunctions: { path: '/javascriptPrincipals/StandardFunctions', component: StandardFunctions },
    unitTestingMochaChai: { path: '/javascriptPrincipals/UnitTestingMochaChai', component: UnitTestingMochaChai },
    loops: { path: '/javascriptPrincipals/Loops', component: Loops },
    codePractice: { path: '/code_practice', component: CodePractice },
    objects: { path: '/javascriptPrincipals/Objects', component: JSObjects },
    arrowFunctions: { path: '/javascriptPrincipals/ArrowFunctions', component: ArrowFunctions },
    arrayMethods: { path: '/javascriptPrincipals/ArrayMethods', component: ArrayMethods },
    stringMethods: { path: '/javascriptPrincipals/StringMethods', component: StringMethods },
    packagesAndPackageJson: { path: '/javascriptPrincipals/PackagesAndPackageJson', component: PackagesAndPackageJson },
    crudMain: { path: '/javascriptPrincipals/CRUD-Main', component: JSCRUDMain },
    crudAjax: { path: '/javascriptPrincipals/CRUD-AJAX', component: AJAX },
    crudFetch: { path: '/javascriptPrincipals/CRUD-Fetch', component: Fetch },
    menuApp: { path: '/javascriptPrincipals/MenuApp', component: MenuApp },
    warGameTutorial: { path: '/javascriptPrincipals/WarGameTutorial', component: War },

    // React
    reactMain: { path: '/ReactMain', component: ReactMain },
    reactComponents: { path: '/ReactComponents', component: ReactComponents },
    reactRouter: { path: '/ReactRouter6', component: ReactRouter6 },
    propsAndState: { path: '/PropsAndState', component: PropsAndState },
    planningApps: { path: '/PlanningReactApps', component: PlanningReactApps },

    // Default
    default: { path: '*', component: HomePage },
};

export default routes;