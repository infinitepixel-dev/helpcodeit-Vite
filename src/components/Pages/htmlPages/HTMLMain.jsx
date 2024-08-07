import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Link as LinkIcon } from 'lucide-react';
import HTMLlogo from '@assets/HTMLlogo.svg';

const NavItem = ({ to, icon: Icon, label }) => (
  <Link
    to={to}
    className="flex items-center p-3 rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-blue-900"
  >
    <Icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

const HTMLMain = () => {
  const navItems = [
    { to: "/htmlPages/HistoryofHTML", icon: Code, label: "HTML History" },
    // { to: "/htmlPages/TextFormatting", icon: FileText, label: "Text Formatting" },
    { to: "/htmlPages/HTMLStructure", icon: Code, label: "Page Structure" },
    // { to: "/htmlPages/Lists", icon: List, label: "Lists" },
    // { to: "/htmlPages/Tables", icon: Table, label: "Tables" },
    // { to: "/htmlPages/Forms", icon: Form, label: "Forms" },
    // { to: "/htmlPages/Images", icon: Image, label: "Images" },
    // { to: "/htmlPages/Links", icon: LinkIcon, label: "Links" },
    // { to: "/htmlPages/Multimedia", icon: Video, label: "Audio and Video" },
    // { to: "/htmlPages/Semantics", icon: Tag, label: "Semantic HTML" },
    // { to: "/htmlPages/MetaTags", icon: Search, label: "Meta Tags" },
    // { to: "/htmlPages/Accessibility", icon: AlertTriangle, label: "Accessibility" },
    // { to: "/htmlPages/ResponsiveDesign", icon: Grid, label: "Responsive Design" },
    // { to: "/htmlPages/SEO", icon: Globe, label: "SEO Basics" },
    // { to: "/htmlPages/BestPractices", icon: Edit, label: "HTML Best Practices" },
  ];

  return (
    <div className="container">
        <div className=" flex flex-row justify-center mt-10">
                <h1 className="text-6xl mt-3 font-bold mb-6 text-center text-gray-800 dark:text-white me-4 ">HTML</h1>
            <img src={HTMLlogo} alt="HTML Logo" className="mb-3 w-20" />
        </div>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 my-5">
              HTML is the foundation of web development. Learn the basics and best practices for creating web pages.
            </p>
        <hr className="border-gray-400 dark:border-gray-300 my-8" />
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">HTML Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default HTMLMain;