import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Book, Layout, Box, Type, PaintBucket, Layers, Code, Zap } from 'lucide-react';

// Assume you have a CSS logo imported similarly to how ReactLogo is imported
import cssLogo from '@assets/css.svg';

const NavItem = ({ to, icon: Icon, label }) => (
  <Link
    to={to}
    className="flex items-center p-4 transition-colors rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900"
  >
    <Icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
    <span className="text-lg font-bold">{label}</span>
  </Link>
);

const CSSNavigation = () => {
  const navItems = [
    { to: "/cssPages/CSSBasics", icon: Book, label: "CSS Fundamentals" },
    { to: "/cssPages/CSSLayoutTechniques", icon: Layout, label: "CSS Layout Techniques" },
    { to: "/cssPages/CSSTypography", icon: Type, label: "Typography in CSS" },
    { to: "/cssPages/CSSColors", icon: PaintBucket, label: "Working with Colors and Gradients" },
    // { to: "/CSSBoxModel", icon: Box, label: "The CSS Box Model" },
    // { to: "/CSSFlexbox", icon: Layout, label: "Flexbox Layout" },
    // { to: "/CSSGrid", icon: Layers, label: "CSS Grid Layout" },
    { to: "/cssPages/CSSResponsive", icon: Zap, label: "Responsive Design with CSS" },
    // { to: "/CSSAnimations", icon: Code, label: "CSS Animations and Transitions" },
  ];

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">CSS Topics</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const CSSMain = () => {
  return (
    <div className="container">
      <Helmet>
        <title>CSS Topics | Help Code It</title>
        <meta
          name="description"
          content="Explore essential CSS topics including layout techniques, the box model, typography, and more. Learn how to style web pages efficiently and create responsive designs."
        />
        <link
          rel="canonical"
          href="https://www.helpcodeit.com/CSSMain"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="CSS, Cascading Style Sheets, web design, front-end development, layout, typography, responsive design, CSS tutorial"
        />
      </Helmet>
      <div className="flex items-center justify-center">
        <div>
          <h1 className="my-5 text-center mukataFont text-7xl">
          <span className='font-bold text-8xl'>C</span>ascading <span className='font-bold text-8xl'>S</span>tyle <span className='font-bold text-8xl'>S</span>heets
          </h1>
        </div>
        <div>
          <img
            src={cssLogo}
            alt="CSS logo"
            className="me-4 ms-auto"
            width="90px"
          />
        </div>
      </div>
      <hr className="mb-4 border-black border-1 dark:border-white" />
      <CSSNavigation />
    </div>
  );
};

export default CSSMain;