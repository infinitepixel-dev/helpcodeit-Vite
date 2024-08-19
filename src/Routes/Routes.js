import path from 'path'
import { lazy } from 'react'

export const navItems = [
    { type: 'link', to: '/', label: 'Home' },
    {
        type: 'dropdown',
        label: 'Getting Started',
        items: [
            { to: '/fundamentals/Installs', label: 'Installs' },
            { to: '/MiscPages/RubberDucky', label: 'Rubber Ducky Method' },
            {
                to: '/fundamentals/VSCodeExtensions',
                label: 'VS Code Extensions',
            },
            {
                to: '/fundamentals/VSCodeHotkeysTable',
                label: 'VS Code Hotkeys',
            },
            {
                to: '/fundamentals/SettingUpPracticeEnvironment',
                label: 'Setting Up a Practice Environment',
            },
        ],
    },
    {
        type: 'dropdown',
        label: 'Meetings and Events',
        items: [
            { to: '/calendar', label: 'Event Calendar' },
            { to: '/schedule-meeting', label: 'Schedule a Meeting' },
        ],
    },
    {
        type: 'dropdown',
        label: 'Tools',
        items: [
            { to: '/data-generator', label: 'Data Generator' },
            {
                to: '/JavascriptPrincipals/APIResources',
                label: 'API Resources',
            },
            { to: '/useful-links', label: 'Useful Links' },
            { to: '/MediaRecommendations', label: 'Our Media Recommendations' },
        ],
    },
    {
        type: 'dropdown',
        label: 'Topics',
        items: [
            { to: '/htmlPages/htmlMain', label: 'HTML' },
            { to: '/cssPages/cssBasics', label: 'CSS' },
            { to: '/fundamentals/Bootstrap', label: 'Bootstrap' },
            { to: '/githubPages/GitHub', label: 'GitHub' },
            { to: '/markdown/MarkdownGuide', label: 'Markdown' },
            { to: '/javascript', label: 'JavaScript' },
            { to: '/ReactMain', label: 'React.js' },
        ],
    },
    { type: 'link', to: '/about', label: 'About' },
]

export const componentRoutes = [
    //INFO: HTML Pages
    {
        path: '/htmlPages/HTMLMain',
        componentPath: '../components/Pages/htmlPages/HTMLMain.jsx',
        key: 'htmlMain',
    },
    {
        path: '/htmlPages/HistoryofHTML',
        componentPath: '../components/Pages/htmlPages/HistoryofHTML.jsx',
        key: 'historyofHTML',
    },
    {
        path: '/htmlPages/HTMLStructure',
        componentPath: '../components/Pages/htmlPages/HTMLStructure.jsx',
        key: 'htmlStructure',
    },
    {
        path: '/htmlPages/AccessibilityChecklist',
        componentPath: '../components/Pages/htmlPages/AccessibilityChecklist.jsx',
        key: 'accessibilityChecklist',
    },
    {
        path: '/htmlPages/HTMLLists',
        componentPath: '../components/Pages/htmlPages/HTMLLists.jsx',
        key: 'htmlLists',
    },
    {
        path: '/htmlPages/Tables',
        componentPath: '../components/Pages/htmlPages/HTMLTables.jsx',
        key: 'htmlTables'
    },
    {
        path: '/htmlPages/Forms',
        componentPath: '../components/Pages/htmlPages/Forms.jsx',
        key: 'htmlForms',
    },
    { path: '/htmlPages/HTMLImages', componentPath: '../components/Pages/htmlPages/HTMLImages.jsx', key: 'htmlImages' },
    { path: '/htmlPages/GuideToMetaTags', componentPath: '../components/Pages/htmlPages/GuideToMetaTags.jsx', key: 'guideToMetaTags' },

    //INFO: CSS Pages.

    {
        path: '/cssPages/cssBasics',
        componentPath: '../components/Pages/cssPages/cssBasics.jsx',
        key: 'cssBasics',
    },
    //INFO: MISC Pages
    {
        path: '*',
        componentPath: '../components/Pages/NotFound404.jsx',
        key: 'default',
    },
    {
        path: '/',
        componentPath: '../components/Pages/HomePage.jsx',
        key: 'home',
    },
    {
        path: '/about',
        componentPath: '../components/Pages/About.jsx',
        key: 'about',
    },

    {
        path: '/schedule-meeting',
        componentPath: '../components/Pages/ScheduleMeeting.jsx',
        key: 'scheduleMeeting',
    },

    {
        path: '/useful-links',
        componentPath: '../components/Pages/fundamentals/UsefulLinks.jsx',
        key: 'usefulLinks',
    },
    {
        path: '/calendar',
        componentPath: '../components/Sub_Components/Calendar.jsx',
        key: 'calendar',
    },
    {
        path: '/MediaRecommendations',
        componentPath: '../components/Pages/MiscPages/MediaRecommendations.jsx',
        key: 'mediaRecommendations',
    },
    {
        path: '/footer',
        componentPath: '../components/Sub_Components/Footer.jsx',
        key: 'footer',
    },
    {
        path: '/PrivacyPolicy',
        componentPath: '../components/Pages/PrivacyPolicy.jsx',
        key: 'privacyPolicy',
    },
    {
        path: '/TermsOfService',
        componentPath: '../components/Pages/TermsOfService.jsx',
        key: 'termsOfService',
    },
    //INFO: JAVASCRIPT Pages
    {
        path: '/data-generator',
        componentPath: '../components/Sub_Components/DataGenerator.jsx',
        key: 'dataGenerator',
    },
    {
        path: '/javascript',
        componentPath: '../components/Pages/javascriptPrincipals/JavascriptMainPage.jsx',
        key: 'javascriptMain',
    },
    { path: '/javascriptPrincipals/AsyncAwait', componentPath: '../components/Pages/javascriptPrincipals/AsyncAwait.jsx', key: 'asyncAwait' },
    {
        path: '/javascriptPrincipals/PracticeProblems',
        componentPath:
            '../components/Pages/javascriptPrincipals/PracticeProblems.jsx',
        key: 'practiceProblems',
    },
    {
        path: '/javascriptPrincipals/DeclaringVariables',
        componentPath:
            '../components/Pages/javascriptPrincipals/DeclaringVariables.jsx',
        key: 'declaringVariables',
    },
    {
        path: '/javascriptPrincipals/StringConcatenation',
        componentPath:
            '../components/Pages/javascriptPrincipals/StringConcatenation.jsx',
        key: 'stringConcatenation',
    },
    {
        path: '/javascriptPrincipals/StandardFunctions',
        componentPath:
            '../components/Pages/javascriptPrincipals/StandardFunctions.jsx',
        key: 'standardFunctions',
    },
    {
        path: '/javascriptPrincipals/UnitTestingMochaChai',
        componentPath:
            '../components/Pages/javascriptPrincipals/UnitTestingMochaChai.jsx',
        key: 'unitTestingMochaChai',
    },
    {
        path: '/javascriptPrincipals/Loops',
        componentPath: '../components/Pages/javascriptPrincipals/Loops.jsx',
        key: 'loops',
    },
    {
        path: '/code_practice',
        componentPath: '../components/Sub_Components/Code_Practice.jsx',
        key: 'codePractice',
    },
    {
        path: '/javascriptPrincipals/Objects',
        componentPath: '../components/Pages/javascriptPrincipals/JSObjects.jsx',
        key: 'objects',
    },
    {
        path: '/javascriptPrincipals/ArrowFunctions',
        componentPath:
            '../components/Pages/javascriptPrincipals/ArrowFunctions.jsx',
        key: 'arrowFunctions',
    },
    {
        path: '/javascriptPrincipals/ArrayMethods',
        componentPath:
            '../components/Pages/javascriptPrincipals/ArrayMethods.jsx',
        key: 'arrayMethods',
    },
    {
        path: '/javascriptPrincipals/StringMethods',
        componentPath:
            '../components/Pages/javascriptPrincipals/StringMethods.jsx',
        key: 'stringMethods',
    },
    {
        path: '/javascriptPrincipals/PackagesAndPackageJson',
        componentPath:
            '../components/Pages/javascriptPrincipals/PackagesAndPackageJson.jsx',
        key: 'packagesAndPackageJson',
    },
    {
        path: '/javascriptPrincipals/CRUD-Main',
        componentPath:
            '../components/Pages/javascriptPrincipals/JSCRUDMain.jsx',
        key: 'crudMain',
    },
    {
        path: '/javascriptPrincipals/CRUD-AJAX',
        componentPath: '../components/Pages/javascriptPrincipals/CRUD/AJAX.jsx',
        key: 'crudAjax',
    },
    {
        path: '/javascriptPrincipals/CRUD-Fetch',
        componentPath:
            '../components/Pages/javascriptPrincipals/CRUD/CRUD_Operations/Fetch.jsx',
        key: 'crudFetch',
    },
    {
        path: '/javascriptPrincipals/MenuApp',
        componentPath: '../components/Pages/javascriptPrincipals/MenuApp.jsx',
        key: 'menuApp',
    },
    {
        path: '/javascriptPrincipals/WarGameTutorial',
        componentPath: '../components/Pages/javascriptPrincipals/War.jsx',
        key: 'warGameTutorial',
    },
    {
        path: '/javascriptPrincipals/JSONServer',
        componentPath:
            '../components/Pages/javascriptPrincipals/JSONServer.jsx',
        key: 'JSONServer',
    },
    {
        path: '/javascriptPrincipals/APIResources',
        componentPath:
            '../components/Pages/javascriptPrincipals/APIResources.jsx',
        key: 'APIResources',
    },
    {
        path: '/javascriptPrincipals/CallbacksAndPromises',
        componentPath:
            '../components/Pages/javascriptPrincipals/CallbacksAndPromises.jsx',
        key: 'callbacksAndPromises',
    },
    {
        path: '/javascriptPrincipals/UnitTestingGuide',
        componentPath:
            '../components/Pages/javascriptPrincipals/UnitTestingGuide.jsx',
        key: 'unitTestingGuide',
    },
    {
        path: '/javascriptPrincipals/ConditionalLesson',
        componentPath:
            '../components/Pages/javascriptPrincipals/ConditionalLesson.jsx',
        key: 'conditionalLesson',
    },
    {
        path: '/MiscPages/RubberDucky',
        componentPath: '../components/Pages/MiscPages/RubberDucky.jsx',
        key: 'RubberDucky',
    },
    //INFO GitHub Pages
    {
        path: '/githubPages/GitHub',
        componentPath: '../components/Pages/githubPages/GitHub.jsx',
        key: 'gitHub',
    },
    {
        path: '/githubPages/GitHubCheatsheet',
        componentPath: '../components/Pages/githubPages/GitHubCheatsheet.jsx',
        key: 'gitHubCheatsheet',
    },
    {
        path: '/githubPages/GitHubBranching',
        componentPath: '../components/Pages/githubPages/GitHubBranching.jsx',
        key: 'gitHubBranching',
    },
    {
        path: '/githubPages/ChangingGitHubCredentials',
        componentPath:
            '../components/Pages/githubPages/ChangingGitHubCredentials.jsx',
        key: 'changingGitHubCredentials',
    },
    {
        path: '/githubPages/AddARepository',
        componentPath: '../components/Pages/githubPages/AddARepository.jsx',
        key: 'addARepository',
    },
    {
        path: '/githubPages/push',
        componentPath: '../components/Pages/githubPages/PushingUpdates.jsx',
        key: 'pushingUpdates',
    },
    {
        path: '/githubPages/GitHubAuthentication',
        componentPath:
            '../components/Pages/githubPages/GitHubAuthentication.jsx',
        key: 'gitHubAuthentication',
    },
    {
        path: '/githubPages/GitHubPagesGuide',
        componentPath: '../components/Pages/githubPages/GitHubPagesGuide.jsx',
        key: 'gitHubPagesGuide',
    },
    {
        path: '/githubPages/GitProbAndAnswers',
        componentPath:
            '../components/Pages/githubPages/GitProbAndAnswers.jsx',
        key: 'gitProbAndAnswers',
    },
    //INFO: Markdown Pages
    {
        path: '/markdown/MarkdownGuide',
        componentPath: '../components/Pages/markdown/MarkdownGuide.jsx',
        key: 'markdownGuide',
    },
    //INFO: FUNDAMENTALS Pages
    {
        path: '/fundamentals/VSCodeHotkeysTable',
        componentPath:
            '../components/Pages/fundamentals/VSCodeHotkeysTable.jsx',
        key: 'vsCodeHotkeysTable',
    },
    {
        path: '/fundamentals/Bootstrap',
        componentPath: '../components/Pages/fundamentals/Bootstrap.jsx',
        key: 'bootstrap',
    },
    {
        path: '/fundamentals/Installs',
        componentPath: '../components/Pages/fundamentals/Installs.jsx',
        key: 'installs',
    },
    {
        path: '/fundamentals/VSCodeExtensions',
        componentPath: '../components/Pages/fundamentals/VSCodeExtensions.jsx',
        key: 'vsCodeExtensions',
    },
    {
        path: '/fundamentals/SettingUpPracticeEnvironment',
        componentPath:
            '../components/Pages/fundamentals/PracticeEnvironment.jsx',
        key: 'settingUpPracticeEnvironment',
    },
    //INFO:  REACT Pages
    {
        path: '/ReactMain',
        componentPath: '../components/Pages/react/ReactMain.jsx',
        key: 'reactMain',
    },
    {
        path: '/OptimisticUpdatesExplainer',
        componentPath:
            '../components/Pages/react/OptimisticUpdatesExplainer.jsx',
        key: 'optimisticUpdates',
    },
    {
        path: '/ReactComponents',
        componentPath: '../components/Pages/react/ReactComponents.jsx',
        key: 'reactComponents',
    },
    {
        path: '/ReactRouter6',
        componentPath: '../components/Pages/react/ReactRouter6.jsx',
        key: 'reactRouter',
    },
    {
        path: '/ReactRouter5',
        componentPath: '../components/Pages/react/ReactRouter5.jsx',
        key: 'reactRouter5',
    },
    {
        path: '/RouterConversionGuide', componentPath: '../components/Pages/react/RouterConversionGuide.jsx', key: 'routerConversionGuide'
    },
    {
        path: '/PropsAndState',
        componentPath: '../components/Pages/react/PropsAndState.jsx',
        key: 'propsAndState',
    },
    {
        path: '/PlanningReactApps',
        componentPath: '../components/Pages/react/PlanningReactApps.jsx',
        key: 'planningApps',
    },
    {
        path: '/ReactHooks',
        componentPath: '../components/Pages/react/ReactHooks.jsx',
        key: 'reactHooks',
    },
]

let RoutesWithComponents = componentRoutes

if (typeof window !== 'undefined') {
    // Vite-specific logic for dynamic imports
    const componentMap = import.meta.glob('../components/Pages/**/*.{jsx,js}')
    const subComponentMap = import.meta.glob(
        '../components/Sub_Components/**/*.{jsx,js}'
    )
    /* console.log('Component Map:', { ...componentMap, ...subComponentMap }) */

    // Initialize the components object
    const components = {}

    // Adjust componentPath if necessary to match the keys in componentMap
    componentRoutes.forEach((route) => {
        const importPath = route.componentPath
        if (componentMap[importPath]) {
            components[route.key] = lazy(componentMap[importPath])
        } else if (subComponentMap[importPath]) {
            components[route.key] = lazy(subComponentMap[importPath])
        } else {
            console.warn(`Component for path ${importPath} not found.`)
        }
    })

    // Create RoutesWithComponents array
    RoutesWithComponents = componentRoutes.map((route) => ({
        ...route,
        component: components[route.key],
    }))
}

export default RoutesWithComponents
