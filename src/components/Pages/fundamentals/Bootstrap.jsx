import bootstrapLogo from "../../../assets/bootstrap logo.svg";

function Bootstrap() {
  return (
    <div>
      <div className='container'>
        <h1 className='text-center text-6xl my-8'>Linking Up Bootstrap</h1>

        <div>
          <p>
            Bootstrap is a free and open-source CSS framework directed at
            responsive, mobile-first front-end web development. It contains CSS-
            and JavaScript-based design templates for typography, forms,
            buttons, navigation, and other interface components.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='pt-3 md:col-span-2'>
              <iframe
                class='youtube-video'
                src='https://www.youtube.com/embed/BIwXINKz7iI?si=bWl2F9i5w2nbX_3m'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
            <div className='grid grid-cols-1 p-3 m-4 mx-auto my-auto text-center bg-white rounded-xl text-black'>
              <div className='flex items-center mx-auto mb-2'>
                <img
                  src={bootstrapLogo}
                  alt='Bootstrap logo'
                  width='40px'
                  className='block my-auto me-1'
                />
                <h3 className='text-2xl font-bold'>Useful Bootstrap Links</h3>
              </div>
              <hr className='mb-2' />
              <ul>
                <li className='m-3'>
                  <a
                    href='https://getbootstrap.com/'
                    target='_blank'
                    className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Bootstrap Official Website
                  </a>
                </li>
                <li className='m-3'>
                  <a
                    href='https://www.w3schools.com/bootstrap5/index.php'
                    target='_blank'
                    className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                  >
                    W3Schools Bootstrap Tutorial
                  </a>
                </li>
                <li className='m-3'>
                  <a
                    href='https://www.bootswatch.com'
                    target='_blank'
                    className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Bootswatch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bootstrap;
