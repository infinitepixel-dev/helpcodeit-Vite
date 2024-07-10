import { Link } from 'react-router-dom'
import logo from '../../assets/helpcodeitlogo.svg'
import MainCards from '../Sub_Components/MainCards'
import EventAlert from '../Sub_Components/EventAlert'

function HomePage({ theme }) {
    let event = {
        title: 'Git and GitHub Workshop',
        date: 'Saturday, July 20th',
        time: '12:00 PM pst | 1:00 PM mst | 2:00 PM cst | 3:00 PM est',
        link: 'https://calendly.com/michaelvarnell/git-and-github-basics',
    }
    return (
        <div>
            <EventAlert event={event} />
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
            <div className="justify-center">
                <h2 className="mt-5 text-center text-5xl font-bold">
                    Get expert coding help and tutoring - Book a session now!
                </h2>
                <Link to="/schedule-meeting">
                    <div className="mx-auto text-lg my-4 w-fit rounded-full bg-blue-700 px-4 py-2 font-bold text-white hover:bg-red-700 ">
                        Explore Meeting Options
                    </div>
                </Link>
            </div>
            <div className=" text-white dark:bg-neutral-900">
                <MainCards />
            </div>
        </div>
    )
}

export default HomePage
