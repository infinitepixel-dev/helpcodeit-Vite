import { Link } from 'react-router-dom'

function JSCRUDMain() {
    return (
        <div className="container text-xl">
            <Helmet>
                <title>CRUD Operations with APIs | Help Code It</title>
                <meta
                    name="description"
                    content="Learn how to perform CRUD (Create, Read, Update, Delete) operations with APIs using different methods like AJAX, Axios, and Fetch. Find useful resources and example repositories."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascriptPrincipals/CRUD-Main"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="CRUD operations, APIs, JavaScript CRUD, AJAX, Axios, Fetch API, coding tutorial, web development, API examples"
                />
            </Helmet>
            <h1 className="my-10 text-center text-6xl">
                CRUD Operations with API's
            </h1>
            <div className="grid grid-cols-2 justify-center">
                <Link
                    to="/javascriptPrincipals/CRUD-AJAX"
                    className="mx-auto text-3xl"
                >
                    <button className="rounded-xl bg-blue-700 p-2 text-white hover:bg-blue-500">
                        AJAX/Axios
                    </button>
                </Link>
                <Link
                    to="/javascriptPrincipals/CRUD-Fetch"
                    className="mx-auto text-3xl"
                >
                    <button className="rounded-xl bg-blue-700 p-2 text-white hover:bg-blue-500">
                        Fetch
                    </button>
                </Link>
            </div>
            <hr className="my-5 border border-black dark:border-white" />
            <p className="mb-4 text-center font-semibold">
                Above are links to see examples that you can use as templates.
            </p>
            <p>
                <span className="text-2xl font-bold">
                    CRUD stands for Create, Read, Update, and Delete.
                </span>{' '}
                These are the four basic operations that are used to manage
                data. In this section, we will be using an API to perform these
                operations.
            </p>
            <p>
                API stands for Application Programming Interface this is fancy
                speak for a set of rules that allow our site to communicate with
                a program that will get data for us. It allows you to access the
                functionality of another application or service without having
                to build it from scratch.
            </p>
            <p>
                When we 'call' the API for our CRUD operations we will have
                different methods we can use to do it. You can see different
                methods by clicking on the links below the title at the top of
                the page.
            </p>
            <p>
                The methods we will be using are AJAX/Axios and Fetch. These are
                two different ways to call the API and perform CRUD operations.
            </p>
            <p>
                There are tons of free API's out there that you can use to
                practice below are links to some of our favorite places to look
                for API's. Feel free to look through these sites and find an API
                that you would like to use to practice your CRUD operations.
            </p>
            <div className="mb-5 mt-4 rounded-3xl border-4 border-black bg-slate-300 p-5 pt-0 shadow-lg dark:border-white dark:bg-slate-600">
                <h2 className="mb-5 mt-5 text-center text-4xl font-semibold">
                    Example Repositories and Useful Links
                </h2>
                <ul className="pb-4">
                    <li className="my-3 list-none">
                        <a
                            href="https://github.com/movarnell/Fetch-Example-with-delete--get--post.git"
                            target="_blank"
                            className="font-bold no-underline hover:underline"
                            style={{ fontSize: '1.4rem' }}
                        >
                            GitHub Repository: Fetch Example with delete, get,
                            post
                        </a>
                    </li>
                    <li className="my-3 list-none">
                        <a
                            href="https://github.com/movarnell/apiplay"
                            target="_blank"
                            className="font-bold no-underline hover:underline"
                            style={{ fontSize: '1.4rem' }}
                        >
                            GitHub Repository: API Play
                        </a>{' '}
                        This one uses a weather API to pull weather data and
                        display it.
                    </li>
                    <li className="my-3 list-none">
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
                            target="_blank"
                            className="font-bold no-underline hover:underline"
                            style={{ fontSize: '1.4rem' }}
                        >
                            MDN: Using Fetch
                        </a>{' '}
                        This is the Mozilla Documentation on the using fetch
                    </li>
                    <li className="my-3 list-none">
                        <a
                            href="https://www.rapidapi.com"
                            target="_blank"
                            className="font-bold no-underline hover:underline"
                            style={{ fontSize: '1.4rem' }}
                        >
                            Rapid API
                        </a>{' '}
                        This is a great place to find APIs to use in your
                        projects.
                    </li>
                    <li className="my-3 list-none">
                        <a
                            href="https://www.mockapi.io"
                            target="_blank"
                            className="font-bold no-underline hover:underline"
                            style={{ fontSize: '1.4rem' }}
                        >
                            MockAPI.io
                        </a>{' '}
                        Free API to use to build out projects. Cheap yearly
                        price for advanced features.
                    </li>
                    <li className="my-3 list-none">
                        <a
                            href="https://github.com/public-apis-dev/public-apis"
                            target="_blank"
                            className="font-bold no-underline hover:underline"
                            style={{ fontSize: '1.4rem' }}
                        >
                            GitHub: Public API's Dev
                        </a>{' '}
                        This is a list of public use API's that you can use in
                        your projects.
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default JSCRUDMain
