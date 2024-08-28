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

const TypescriptNavigation = () => {
  const navItems = [
    { to: "/typescriptPages/WhatIsTypeScript", icon: BookOpen, label: "What is TypeScript?" },


  ];

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">TypeScript Topics</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TypescriptNavigation;