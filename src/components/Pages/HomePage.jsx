import { Link } from 'react-router-dom'
import LogoImage from '../Sub_Components/LogoImage'
import MainCards from '../Sub_Components/MainCards'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'
import { parseISO, formatRelative } from 'date-fns'
import EventCard from '../Sub_Components/EventCard'
import { CalendarSearch } from 'lucide-react'
import JumboBackground from '../Sub_Components/JumboBackground'
import './HomePage.css'
import AlertMessage from '@subComponents/AlertMessage'

function HomePage() {
    let AlertDate = new Date("2024-08-17T18:00:00.000Z");
    let currentDate = new Date();

    // Calculate the difference in days
    let timeDifference = AlertDate - currentDate;
    let daysUntilEvent = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let message = `Our next workshop API Basics is in ${daysUntilEvent} days. Saturday August 17th, 2024 at 4:00 PM pst | 5:00 PM mst | 6:00 PM cst | 7:00 PM est. Register now!`;

    if (daysUntilEvent < 1) {
        message = `Our next workshop API Basics is today! Saturday August 17th, 2024 at 4:00 PM pst | 5:00 PM mst | 6:00 PM cst | 7:00 PM est. Register now!`;
    }

    console.log(`The event is in ${daysUntilEvent} days.`);


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
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />
                <meta property="og:image" content={LogoImage} />
                <meta property="og:url" content="https://www.helpcodeit.com" />

                <link rel="canonical" href="https://www.helpcodeit.com" />
            </Helmet>
            {AlertDate > currentDate ? <AlertMessage message={message} type="success" duration={25000} onClose={() => console.log('closed')} />: null}
            {/* {event.ISOdate > new Date().toISOString() && <EventAlert event={event} />} */}
            {/* SECTION Jumbotron */}

            <div className="bg-neutral-800 text-white hero-text">
                <div className="relative grid-cols-2">
                    <JumboBackground />
                </div>
            </div>
            {/* !SECTION end Jumbotron */}
            <div className="container">
                <div className="grid md:grid-cols-1 lg:grid-cols-2">
                    <div className="mx-auto mb-3">
                        <h2 className="mt-6 font-bold text-3xl text-center">
                            Upcoming Event
                        </h2>
                        <EventCard limit={1} />
                    </div>
                    <div className="clearfix my-auto">
                        <h2 className="mb-6 font-bold text-3xl text-center">
                            Get expert coding help and tutoring
                        </h2>
                        <div className="mx-auto my-8 p-8 rounded-lg max-w-2xl">
                            <h2 className="mb-6 font-bold text-3xl text-center">
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
                                    className="flex bg-blue-700 hover:bg-red-700 mx-auto px-6 py-3 rounded-full w-fit font-bold text-white transition duration-300"
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
