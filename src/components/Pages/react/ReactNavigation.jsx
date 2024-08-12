import React from 'react';
import reactLogo from '@assets/React.svg';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Route, Zap, Layers, GitBranch } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label }) => (
  <Link
    to={to}
    className="flex items-center p-4 transition-colors rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900"
  >
    <Icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
    <span className="text-lg font-bold">{label}</span>
  </Link>
);

const ReactNavigation = ({ reactLogo }) => {
  const navItems = [
    { to: "/ReactEvolution", icon: GitBranch, label: "The Evolution of React: OOP to Function Based" },
    { to: "/ReactComponents", icon: Code, label: "React Component Basics" },
    { to: "/ReactRouter6", icon: Route, label: "React Router 6+" },
    { to: "/PropsAndState", icon: Zap, label: "Understanding Props and State" },
    { to: '/OptimisticUpdatesExplainer', icon: Layers, label: 'Optimistic Updates in React' },
    { to: "/Destructuring", icon: Layers, label: "Destructuring Props in React" },
    { to: "/PlanningReactApps", icon: BookOpen, label: "Planning and Organizing React Apps" },
    { to: "/ReactHooks", icon: Zap, label: "React Hooks" },
  ];

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">React Topics</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </div>
  </div>
  );
};

export default ReactNavigation;