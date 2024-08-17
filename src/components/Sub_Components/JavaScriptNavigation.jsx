import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, ArrowRight, Package, Repeat, Grid, FileText, Zap, Database, Layout, GitBranch } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label }) => (
  <Link
    to={to}
    className="flex items-center p-3 transition-colors rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900"
  >
    <Icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

const JavaScriptNavigation = () => {
  const navItems = [
    { to: "/javascriptPrincipals/PracticeProblems", icon: BookOpen, label: "Free Practice Problems" },
    { to: "/javascriptPrincipals/DeclaringVariables", icon: Code, label: "Declaring Variables" },
    { to: "/javascriptPrincipals/StandardFunctions", icon: ArrowRight, label: "Standard Functions" },
    { to: "/javascriptPrincipals/ArrowFunctions", icon: ArrowRight, label: "Arrow Functions" },
    { to: "/javascriptPrincipals/ArrayMethods", icon: Grid, label: "Array Methods" },
    { to: "/javascriptPrincipals/StringMethods", icon: FileText, label: "String Methods" },
    { to: "/javascriptPrincipals/PackagesAndPackageJson", icon: Package, label: "npm init and package.json" },
    { to: "/javascriptPrincipals/Objects", icon: Layout, label: "Objects" },
    { to: "/javascriptPrincipals/Loops", icon: Repeat, label: "Loops" },
    { to: "/javascriptPrincipals/ConditionalLesson", icon: Code, label: "Conditionals" },
    { to: "/javascriptPrincipals/StringConcatenation", icon: FileText, label: "String Concatenation" },
    { to: "/javascriptPrincipals/UnitTestingMochaChai", icon: Zap, label: "Unit Testing with Mocha & Chai" },
    { to: '/javascriptPrincipals/AsyncAwait', icon: Database, label: "Async/Await" },
    { to: "/javascriptPrincipals/CRUD-Main", icon: Database, label: "C.R.U.D. Operations with APIs" },
    { to: "/javascriptPrincipals/MenuApp", icon: Layout, label: "Menu App OOP diagram" },
    { to: "/javascriptPrincipals/WarGameTutorial", icon: Zap, label: "War Game" },
    { to: "/javascriptPrincipals/JSONServer", icon: Database, label: "JSON Server" },
    { to: "/javascriptPrincipals/CallbacksAndPromises", icon: GitBranch, label: "Callbacks and Promises" },
    { to: "/javascriptPrincipals/UnitTestingGuide", icon: Zap, label: "Unit Testing Guide" },

  ];

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">JavaScript Topics</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default JavaScriptNavigation;