import logo from "../../assets/helpcodeitlogo.svg";
import MainCards from "../MainCards";

function HomePage() {
  return (
    <div>
      {/* SECTION Jumbotron */}
      <div className='bg-gray-900 text-white jumbo-background hero-text'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap pb-1 mb-3'>
            <div className='w-full md:w-1/2 lg:w-1/3 pb-4'>
              <img
                src={logo}
                alt='Help Code It logo'
                className='mt-5 p-1 hero-logo'
              />

              <p className='hero-text font-extrabold'>
                Resources for beginning developers
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-2/3'>
            {/* NOTE this is a spacer*/}
          </div>
        </div>
        {/* !SECTION end Jumbotron */}
      </div>
      <div className='w-full min-h-screen dark:bg-black text-white'>
      <MainCards />
      </div>
    </div>
  );
}

export default HomePage;
