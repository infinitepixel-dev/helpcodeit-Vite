import { Link } from 'react-router-dom'
import logo from '../../assets/helpcodeitlogo.svg'
import MainCards from '../Sub_Components/MainCards'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'
import EventCard from '../Sub_Components/EventCard'
import { CalendarSearch } from 'lucide-react';

function HomePage() {


    return (
        <div>

            <Helmet>
                <title>Help Code It | Resources for Beginning Developers</title>
                <meta
                    name="description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />
                <meta
                    property="og:title"
                    content="Help Code It | Resources for Beginning Developers"
                />
                <meta
                    property="og:description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Book a session now!"
                />
                <meta property="og:image" content={logo} />
                <meta property="og:url" content="https://helpcodeit.com" />

                <link rel="canonical" href="https://helpcodeit.com" />
            </Helmet>
            {/* {event.ISOdate > new Date().toISOString() && <EventAlert event={event} />} */}
            {/* SECTION Jumbotron */}
            <div className="jumbo-background hero-text bg-neutral-800 text-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 md:col-span-1">
                            <img
                                src={logo}
                                alt="Help Code It logo"
                                className="hero-logo mx-auto mt-5 p-1"
                            />

                            <p className="hero-text mx-auto text-center font-extrabold">
                                Resources for beginning developers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* !SECTION end Jumbotron */}
            <div className="container">
                <div className="grid lg:grid-cols-2 md:grid-cols-auto">
                    <div className="mx-5">
                        <EventCard />
                    </div>
                  <div className='my-auto mx-5'>
                      <h2 className="text-3xl font-bold text-center mb-6 ">
                        Get expert coding help and tutoring
                        </h2>
                        <div className="bg-white text-black shadow-lg rounded-lg p-8 max-w-2xl mx-auto my-8">
                        <h2 className="text-3xl font-bold text-center mb-6">
                        Book a session now!
                      </h2>
                      <p className="text-center mb-6">
                        Elevate your software development skills with personalized guidance from an experienced professional. Choose the meeting option that best fits your needs and schedule.
                        </p>
                      <Link to="/schedule-meeting" className="block">
                        <button className="w-fit mx-auto flex bg-blue-700 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                          Explore Meeting Options
                          <CalendarSearch size={24} className="ml-2 my-auto"  />
                        </button>
                      </Link>
                      </div>
                  </div>
                </div>
            </div>

            <div className=" text-white  pb-10">
                <MainCards />
            </div>
        </div>
    )
}

export default HomePage
