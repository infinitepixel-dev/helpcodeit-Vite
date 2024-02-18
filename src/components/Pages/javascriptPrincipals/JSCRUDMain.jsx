import { Link } from "react-router-dom";


function JSCRUDMain() {
  return (
    <div className='text-xl container'>
      <h1 className='text-center text-6xl my-10'>CRUD Operations with API's</h1>
      <div className='grid grid-cols-3 justify-center'>
        <Link to='/javascriptPrincipals/CRUD-AJAX' className='text-3xl mx-auto'>
          <p>AJAX/jQuery/Axios</p>
        </Link>
        <Link to='/javascriptPrincipals/CRUD-AJAX' className='text-3xl mx-auto'>
          <p>Fetch</p>
        </Link>
        <Link to='/javascriptPrincipals/CRUD-AJAX' className='text-3xl mx-auto'>
          <p>AJAX</p>
        </Link>
      </div>
      <hr className='border border-black dark:border-white my-5' />
      <p>
        CRUD stands for Create, Read, Update, and Delete. These are the four
        basic operations that are used to manage data. In this section, we will
        be using an API to perform these operations.
      </p>
      <p>
        API stands for Application Programming Interface. An API is a set of
        rules and protocols that allow different software applications to
        communicate with each other. It allows you to access the functionality
        of another application or service without having to build it from
        scratch.
      </p>
      <p>
        When we 'call' the API for our CRUD operations we will have different
        methods we can use to do it. You can see different methods by clicking
        on the links below the title of the page.
      </p>
    </div>
  );
}
export default JSCRUDMain;
