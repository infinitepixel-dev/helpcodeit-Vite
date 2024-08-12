import { Link } from 'react-router-dom'
import LogoImage from '../Sub_Components/LogoImage'
import MainCards from '../Sub_Components/MainCards'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'
import { parseISO, formatDistanceToNow, differenceInDays, isAfter } from 'date-fns';
import EventCard from '../Sub_Components/EventCard'
import { CalendarSearch } from 'lucide-react'
import JumboBackground from '../Sub_Components/JumboBackground'
import './HomePage.css'
import AlertMessage from '@subComponents/AlertMessage'
import events from '@subComponents/Events'


function HomePage() {
    let filteredEvents = events.filter((event) => isAfter(parseISO(event.ISOdate), new Date()));
    console.log(filteredEvents);
    let {message, AlertDate, daysUntilEvent, currentDate} = '';
    if (filteredEvents.length > 0) {
        AlertDate = parseISO(filteredEvents[0].ISOdate);
        console.log(filteredEvents[0]);

        currentDate = new Date();
        console.log(isAfter(AlertDate, currentDate));
        console.log(AlertDate);

        daysUntilEvent = differenceInDays(AlertDate, currentDate);
        console.log(daysUntilEvent);

        message = `Our next event is ${filteredEvents[0].title} in ${daysUntilEvent} days. The cost is $${filteredEvents[0].cost} and registration is open.`;
        console.log(message);
    } else {
        console.log('No upcoming events.');
    }
    currentDate = new Date();
    console.log(message)
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




<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.helpcodeit.com/" />
<meta property="og:title" content="Help Code It" />
<meta property="og:description" content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!" />
<meta property="og:image" content="@assets/helpcodeitsociallogo.png" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.helpcodeit.com/" />
<meta property="twitter:title" content="Help Code It" />
<meta property="twitter:description" content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!" />
<meta property="twitter:image" content="@assets/helpcodeitsociallogo.png" />


            </Helmet>
            {new Date(filteredEvents[0].ISOdate) > currentDate ? <AlertMessage message={message} type={daysUntilEvent > 2 ? "info": daysUntilEvent > 1 ? "warning" : "error"} duration={25000} onClose={() => console.log('closed')} />: null}
            {/* {event.ISOdate > new Date().toISOString() && <EventAlert event={event} />} */}
            {/* SECTION Jumbotron */}

            <div className="text-white bg-neutral-800 hero-text">
                <div className="relative grid-cols-2">
                    <JumboBackground />
                </div>
            </div>
            {/* !SECTION end Jumbotron */}
            <div className="container">
                <div className="grid md:grid-cols-1 lg:grid-cols-2">
                    <div className="mx-auto mb-3">
                        <h2 className="mt-6 text-3xl font-bold text-center">
                            Upcoming Event
                        </h2>
                        <EventCard limit={1} />
                    </div>
                    <div className="clearfix my-auto">
                        <h2 className="mb-6 text-3xl font-bold text-center">
                            Get expert coding help and tutoring
                        </h2>
                        <div className="max-w-2xl p-8 mx-auto my-8 rounded-lg">
                            <h2 className="mb-6 text-3xl font-bold text-center">
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
                                    className="flex px-6 py-3 mx-auto font-bold text-white transition duration-300 bg-blue-700 rounded-full hover:bg-red-700 w-fit"
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
