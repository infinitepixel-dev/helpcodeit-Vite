import { Link } from "react-router-dom";

function JSCRUDMain() {
  return (
    <div className='text-xl container'>
      <h1 className='text-center text-6xl my-10'>CRUD Operations with API's</h1>
      <div className='grid grid-cols-2 justify-center'>
        <Link to='/javascriptPrincipals/CRUD-AJAX' className='text-3xl mx-auto'>
          <p>AJAX/Axios</p>
        </Link>
        <Link
          to='/javascriptPrincipals/CRUD-Fetch'
          className='text-3xl mx-auto'
        >
          <p>Fetch</p>
        </Link>
      </div>
      <hr className='border border-black dark:border-white my-5' />
      <p>
        <span className='font-bold text-2xl'>
          CRUD stands for Create, Read, Update, and Delete.
        </span>{" "}
        These are the four basic operations that are used to manage data. In
        this section, we will be using an API to perform these operations.
      </p>
      <p>
        API stands for Application Programming Interface this is fancy speak for
        a set of rules that allow our site to communicate with a program that
        will get data for us. It allows you to access the functionality of
        another application or service without having to build it from scratch.
      </p>
      <p>
        When we 'call' the API for our CRUD operations we will have different
        methods we can use to do it. You can see different methods by clicking
        on the links below the title at the top of the page.
      </p>
      <p>
        The methods we will be using are AJAX/Axios and Fetch. These are two
        different ways to call the API and perform CRUD operations.
      </p>
      <p>
        There are tons of free API's out there that you can use to practice
        below are links to some of our favorite places to look for API's. Feel
        free to look through these sites and find an API that you would like to
        use to practice your CRUD operations.
      </p>
      <div className='border-4 bg-slate-300 border-black rounded-3xl p-5 pt-0 mt-4 shadow-lg mb-5 dark:border-white dark:bg-slate-600'>
        <h2 className='text-center mt-5 font-semibold mb-5 text-4xl'>
          Example Repositories and Useful Links
        </h2>
        <ul className='pb-4'>
          <li className='list-none my-3'>
            <a
              href='https://github.com/movarnell/Fetch-Example-with-delete--get--post.git'
              target='_blank'
              className='no-underline font-bold hover:underline'
              style={{ fontSize: "1.4rem" }}
            >
              GitHub Repository: Fetch Example with delete, get, post
            </a>
          </li>
          <li className='list-none my-3'>
            <a
              href='https://github.com/movarnell/apiplay'
              target='_blank'
              className='no-underline font-bold hover:underline'
              style={{ fontSize: "1.4rem" }}
            >
              GitHub Repository: API Play
            </a>{" "}
            This one uses a weather API to pull weather data and display it.
          </li>
          <li className='list-none my-3'>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
              target='_blank'
              className='no-underline font-bold hover:underline'
              style={{ fontSize: "1.4rem" }}
            >
              MDN: Using Fetch
            </a>{" "}
            This is the Mozilla Documentation on the using fetch
          </li>
          <li className='list-none my-3'>
            <a
              href='https://www.rapidapi.com'
              target='_blank'
              className='no-underline font-bold hover:underline'
              style={{ fontSize: "1.4rem" }}
            >
              Rapid API
            </a>{" "}
            This is a great place to find APIs to use in your projects.
          </li>
          <li className='list-none my-3'>
            <a
              href='https://www.mockapi.io'
              target='_blank'
              className='no-underline font-bold hover:underline'
              style={{ fontSize: "1.4rem" }}
            >
              MockAPI.io
            </a>{" "}
            Free API to use to build out projects. Cheap yearly price for
            advanced features.
          </li>
          <li className='list-none my-3'>
            <a
              href='https://github.com/public-apis-dev/public-apis'
              target='_blank'
              className='no-underline font-bold hover:underline'
              style={{ fontSize: "1.4rem" }}
            >
              GitHub: Public API's Dev
            </a>{" "}
            This is a list of public use API's that you can use in your
            projects.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default JSCRUDMain;
