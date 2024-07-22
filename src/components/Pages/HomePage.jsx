import { Link } from 'react-router-dom'
import LogoImage from '../Sub_Components/LogoImage'
import MainCards from '../Sub_Components/MainCards'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'
import EventCard from '../Sub_Components/EventCard'
import { CalendarSearch } from 'lucide-react'
import JumboBackground from '../Sub_Components/JumboBackground'
import './HomePage.css'

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

                <meta property="og:image" content={LogoImage} />
                <meta property="og:url" content="https://helpcodeit.com" />

                <link rel="canonical" href="https://helpcodeit.com" />
            </Helmet>
            {/* {event.ISOdate > new Date().toISOString() && <EventAlert event={event} />} */}
            {/* SECTION Jumbotron */}

            <div className="hero-text bg-neutral-800 text-white">
                <div className="relative">
                    <JumboBackground />
                    <div className="absolute inset-0 flex items-center">
                        <div className="logo-container text-center text-white">
                            <LogoImage />
                            <h1 className="hero-text mx-auto mb-2 text-center font-extrabold">
                                Resources for beginning developers
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* !SECTION end Jumbotron */}
            <div className="container">
                <div className="md:grid-cols-auto grid lg:grid-cols-2">
                    <div className="mx-5">
                        <EventCard />
                    </div>
                    <div className="mx-5 my-auto">
                        <h2 className="mb-6 text-center text-3xl font-bold ">
                            Get expert coding help and tutoring
                        </h2>
                        <div className="mx-auto my-8 max-w-2xl rounded-lg bg-white p-8 text-black shadow-lg">
                            <h2 className="mb-6 text-center text-3xl font-bold">
                                Book a session now!
                            </h2>
                            <p className="mb-6 text-center">
                                Elevate your software development skills with
                                personalized guidance from an experienced
                                professional. Choose the meeting option that
                                best fits your needs and schedule.
                            </p>
                            <Link to="/schedule-meeting" className="block">
                                <button
                                aria-label='explore meeting options button'
                                className="mx-auto flex w-fit rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition duration-300 hover:bg-red-700">
                                    Explore Meeting Options
                                    <CalendarSearch
                                        size={24}
                                        className="my-auto ml-2"
                                        aria-label='calendar search icon'
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" pb-10  text-white">
                <MainCards />
            </div>
        </div>
    )
}

export default HomePage
