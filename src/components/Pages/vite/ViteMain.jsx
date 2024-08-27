import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera } from 'lucide-react';
import javascriptLogo from '@assets/JavaScriptLogo.svg';
import viteLogo from '@assets/ViteJSlogo.svg';

import reactLogo from '@assets/React.svg';
import { Link } from 'react-router-dom';

export default function JavaScriptMain() {

    const links = [
        {to: '/Vite-Vanilla' , label: 'Vite Vanilla JavaScript or TypeScript', icon: javascriptLogo},
        {to: '/Vite-React' , label: 'Vite React', icon: reactLogo}
    ]


    return (
        <div className="container">
            <Helmet>
                <title>Vite Guides | Help Code It</title>
                <meta
                    name="description"
                    content="Explore essential Vite topics including Vite Vanilla JavaScript and Vite React. Learn how to build and navigate Vite applications efficiently."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/ViteMain"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Vite, Vite Vanilla JavaScript, Vite React, front-end development, JavaScript, web development, Vite tutorial"
                />
            </Helmet>
            <div className="flex items-center justify-center">
                <div className="inline-flex align-middle">
                    <h1 className="my-5 text-center mukataFont text-7xl">
                        Getting Going with Vite
                    </h1>
                    <img src={viteLogo} alt="Vite Logo" className="w-24 h-24 mx-auto" />
                </div>
            </div>
            <hr className="mb-4 border-black border-1 dark:border-white"  />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-start">
                    {links.map((link, index) => (
                        <Link key={index} to={link.to} className="flex items-center p-3 transition-colors rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900">
                            <img src={link.icon} className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                            <span className="text-xl font-medium">{link.label}</span>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}
