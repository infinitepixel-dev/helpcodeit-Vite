import logo from "../../assets/helpcodeitlogo.svg";
import MainCards from "../MainCards";

function HomePage() {
  return (
    <div>
      {/* SECTION Jumbotron */}
      <div className='bg-neutral-800 text-white jumbo-background hero-text'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-3'>
            <div className='col-span-3 md:col-span-1'>
              <img
                src={logo}
                alt='Help Code It logo'
                className='mt-5 p-1 hero-logo mx-auto'
              />

              <p className='hero-text font-extrabold mx-auto text-center'>
                Resources for beginning developers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* !SECTION end Jumbotron */}
      <div className='w-full min-h-screen dark:bg-neutral-900 text-white'>
        <MainCards />
      </div>
    </div>
  );
}

export default HomePage;
