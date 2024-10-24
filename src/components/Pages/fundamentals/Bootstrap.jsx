import bootstrapLogo from '@assets/Bootstrap logo.svg'
import CodeBlock from '@subComponents/CodeBlock'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Bootstrap() {




    const bootstrapLinking = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- NOTE - Below is the link that makes the styles from bootstrap show up -->
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">
</head>
<body>


<!-- NOTE - below is the link that makes any animations or movement happen -->
    <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>`

    return (
        <div className="mb-28">
            <Helmet>
                <title>Linking Up Bootstrap | Help Code It</title>
                <meta
                    name="description"
                    content="Learn how to link up Bootstrap to your project. Get started with the official Bootstrap website and tutorials. Explore Bootswatch for custom themes and more."
                />
                <link

                    rel="canonical"
                    href="https://www.helpcodeit.com/fundamentals/Bootstrap"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Bootstrap, Bootstrap linking, Bootstrap tutorial, web development, front-end development, CSS framework, Bootswatch"
                />
            </Helmet>
            <div className="container">
                <h1 className="my-8 text-6xl text-center">
                    Linking Up Bootstrap
                </h1>

                <div>
                    <p>
                        Bootstrap is a free and open-source CSS framework
                        directed at responsive, mobile-first front-end web
                        development. It contains CSS- and JavaScript-based
                        design templates for typography, forms, buttons,
                        navigation, and other interface components.
                    </p>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <div className="pt-3 md:col-span-2">
                            <iframe
                                class="youtube-video"
                                src="https://www.youtube.com/embed/BIwXINKz7iI?si=bWl2F9i5w2nbX_3m"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="grid grid-cols-1 p-3 m-4 mx-auto my-auto text-center bg-white rounded-xl dark:bg-purple-600">
                            <div className="flex items-center mx-auto mb-2">
                                <img
                                    src={bootstrapLogo}
                                    alt="Bootstrap logo"
                                    width="40px"
                                    className="me-1 block rounded bg-white px-0.5 py-0.5"
                                />
                                <h3 className="text-2xl font-bold">
                                    Useful Bootstrap Links
                                </h3>
                            </div>
                            <hr className="mb-2" />
                            <ul>
                                <li className="m-3 my-4">
                                    <a
                                        href="https://getbootstrap.com/"
                                        target="_blank"
                                        className="px-4 py-2 font-bold text-white bg-purple-500 border border-white rounded hover:bg-purple-700"
                                    >
                                        Bootstrap Official Website
                                    </a>
                                </li>
                                <li className="m-3 my-5">
                                    <a
                                        href="https://www.w3schools.com/bootstrap5/index.php"
                                        target="_blank"
                                        className="px-4 py-2 font-bold text-white bg-purple-500 border border-white rounded hover:bg-purple-700"
                                    >
                                        W3Schools Bootstrap Tutorial
                                    </a>
                                </li>
                                <li className="mt-4 mb-1 ">
                                    <a
                                        href="https://www.bootswatch.com"
                                        target="_blank"
                                        className="px-4 py-2 font-bold text-white bg-purple-500 border border-white rounded hover:bg-purple-700"
                                    >
                                        Bootswatch
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="mt-10 mb-2">
                                With Bootstrap you have to setup your project
                                more than you would in a basic HTML site. You
                                need to link the Bootstrap stylesheet, and the
                                javascript file in order to use the pre-made
                                components.
                            </p>
                            <p className="my-2">
                                Step 1: You will need to run 'npm init -y' in
                                your folder to get your package.json file. If
                                you would like to read more about this file and
                                what it does check out this page:{' '}
                                <Link
                                    to="/javascriptPrincipals/PackagesAndPackageJson"
                                    className="text-blue-400 underline hover:text-blue-700"
                                >
                                    package.json and npm init
                                </Link>
                                .
                            </p>
                            <p>
                                Step 2: You will need to run 'npm install
                                bootstrap' in your terminal to install the
                                bootstrap package.
                            </p>
                            <p className="my-2">
                                Step 3: Link the bootstrap stylesheet and
                                javascript file in your html file. Below is an
                                example of how to do that.
                            </p>
                        </div>
                        <h2 className="pt-10 text-3xl">
                            Example of setting up the links in the HTML
                            document:
                        </h2>
                        <div>
                            
                                <CodeBlock code={bootstrapLinking} language={'html'} />
                            
                        </div>
                        <div>
                            <p className="mt-5">
                                Now that everything is linked up you can go to
                                the{' '}
                                <a
                                    href="http://www.getbootstrap.com"
                                    target="_blank"
                                    className="text-blue-400 underline hover:text-blue-700"
                                >
                                    Bootstrap documentation
                                </a>{' '}
                                and start using the components. To use them just
                                copy the code and if you have questions about
                                the class names you can apply search in the
                                documentation.
                            </p>
                            <p className="mt-3">
                                TIP: You can link your CSS Stylesheet just after
                                the bootstrap link to override any styles that
                                you want to change. This makes everything
                                customizable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bootstrap
