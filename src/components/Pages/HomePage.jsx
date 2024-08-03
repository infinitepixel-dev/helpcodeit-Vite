import { Link } from 'react-router-dom'
import LogoImage from '../Sub_Components/LogoImage'
import MainCards from '../Sub_Components/MainCards'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'
import EventCard from '../Sub_Components/EventCard'
import { CalendarSearch } from 'lucide-react'
import JumboBackground from '../Sub_Components/JumboBackground'
import './HomePage.css'
import AlertMessage from '@subComponents/AlertMessage'

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
                <meta property="og:url" content="https://www.helpcodeit.com" />

                <link rel="canonical" href="https://www.helpcodeit.com" />
            </Helmet>
            <AlertMessage message="'Getting Started with Tailwind CSS Workshop' was moved to Saturday Aug 10th from  this Saturday August 3rd. Sign ups are live for the new date!" type="error" duration={25000} onClose={() => console.log('closed')} />
            {/* {event.ISOdate > new Date().toISOString() && <EventAlert event={event} />} */}
            {/* SECTION Jumbotron */}

            <div className="hero-text bg-neutral-800 text-white">
                <div className=" relative grid-cols-2">
                    <JumboBackground />
                </div>
            </div>
            {/* !SECTION end Jumbotron */}
            <div className="container">
                <div className="md:grid-cols-auto grid lg:grid-cols-2">
                    <div className="mx-5 mb-3">
                        <h2 className="mt-6 text-center text-3xl font-bold">Upcoming Event</h2>
                        <EventCard limit={1}/>
                    </div>
                    <div className="mx-5 my-auto ">
                        <h2 className="mb-6 text-center text-3xl font-bold ">
                            Get expert coding help and tutoring
                        </h2>
                        <div className="mx-auto my-8 max-w-2xl rounded-lg bg-white p-8 text-black shadow-lg dark:border-none border border-1 border-gray-300">
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
                                    aria-label="explore meeting options button"
                                    className="mx-auto flex w-fit rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition duration-300 hover:bg-red-700"
                                >
                                    Explore Meeting Options
                                    <CalendarSearch
                                        size={24}
                                        className="my-auto ml-2"
                                        aria-label="calendar search icon"
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-10 text-white">
                <MainCards />
            </div>
        </div>
    )
}

export default HomePage
