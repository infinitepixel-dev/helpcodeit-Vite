import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MainCards from '../Sub_Components/MainCards'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'
import { ArrowUpRight } from 'lucide-react'
import heroImage from '@assets/ImpostorSyndromeIllustration.webp'

import {
    parseISO,
    // formatDistanceToNow,
    differenceInDays,
    isAfter,
} from 'date-fns'
import EventCard from '@subComponents/EventCard'
import { CalendarSearch, Youtube } from 'lucide-react'
import './HomePage.css'
//import AlertMessage from '@subComponents/AlertMessage'
import events from '@subComponents/Events'
// import discord from "@assets/discord.svg"

import PostList from './PostList'
import YouTubeLiveStream from '@subComponents/YouTubeLiveStream'
import { BlogContext } from '@subComponents/BlogAPI' // Correct import
import BlogPostLists from '../Sub_Components/BlogViews/BlogPostLists'

function HomePage() {
    const [isX, setIsX] = useState(true)

    const handleMouseEnter = () => {
        setIsX(false)
    }

    const handleMouseLeave = () => {
        setIsX(true)
    }
    const context = useContext(BlogContext) // Use BlogContext, not BlogProvider

    if (!context) {
        console.error(
            'BlogContext is undefined. Make sure the component is wrapped with BlogProvider.'
        )
        return null
    }

    const { posts } = context

    //NOTE -------END BLOG API CALL
    const { VITE_YT_API_KEY_MV, VITE_YT_CHANNEL_ID_MV } = import.meta.env
    let filteredEvents = events.filter((event) =>
        isAfter(parseISO(event.ISOdate), new Date())
    )
    // console.log(filteredEvents)
    let { message, AlertDate, daysUntilEvent, currentDate } = ''
    if (filteredEvents.length > 0) {
        AlertDate = parseISO(filteredEvents[0].ISOdate)
        // console.log(filteredEvents[0]);

        currentDate = new Date()
        // console.log(isAfter(AlertDate, currentDate));
        // console.log(AlertDate);

        daysUntilEvent = differenceInDays(AlertDate, currentDate)
        // console.log(daysUntilEvent);

        message = `Our next event is ${filteredEvents[0].title} in ${daysUntilEvent} day${daysUntilEvent > 1 ? 's' : ''}. The cost is $${filteredEvents[0].cost} and registration is open.`
        daysUntilEvent === 0
            ? (message = `Our next event is ${filteredEvents[0].title} today. The cost is $${filteredEvents[0].cost} and registration is open till 5 minutes before.`)
            : null
    } else {
        console.log('No upcoming events.')
    }
    currentDate = new Date()
    // console.log(message)

    let limitedToOne = posts[0] ? posts[1] : null
    console.log('LimitedToOne: ', limitedToOne)
    console.log('Posts: ', posts)

    return (
        <div>
            <Helmet>
                <title>Help Code It | Resources for Beginning Developers</title>
                <meta
                    name="description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.helpcodeit.com/" />
                <meta
                    property="og:title"
                    content="Help Code It | Resources for Beginning Developers"
                />
                <meta
                    property="og:description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />
                <meta
                    property="og:image"
                    content="https://www.helpcodeit.com/assets/helpcodeitlogo.CsyqkzOG.svg"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.helpcodeit.com/"
                />
                <meta
                    property="twitter:title"
                    content="Help Code It | Resources for Beginning Developers"
                />
                <meta
                    property="twitter:description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />
                <meta
                    property="twitter:image"
                    content="https://www.helpcodeit.com/assets/helpcodeitlogo.CsyqkzOG.svg"
                />

                <link rel="canonical" href="https://www.helpcodeit.com" />
            </Helmet>
         {/* SECTION Hero */}

            <div className="container">
                <div
                    className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-2"
                    data-label="Hero Section"
                >
                    <div className="flex align-middle justify-center">
                        <div className="p-14">
                            <img
                                src={heroImage}
                                alt="Hero Image"
                                className="h-full w-full rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="my-auto w-3/4">
                        <div className="|">
                            <p className="roboto-font text-sm text-gray-500  dark:text-gray-200">
                                Learning Coding Just Got Easier
                            </p>
                            <h1 className="barlow-semi-condensed-medium mb-2 text-balance text-5xl">
                                Everyone Gets Impostor Syndrome
                            </h1>
                            <p className="barlow-semi-condensed-regular">
                            Don't let challenging topics slow you down! Schedule a meeting with one of our experienced Software Engineers for personalized support. Sometimes, all you need is a little guidance to spark your progress. Click below to get started and take that next step forward!
                            </p>
                            <div className="my-3">
                                <p className="barlow-semi-condensed-semibold">Michael Varnell</p>
                                <p className="barlow-semi-condensed-regular">Software Engineer</p>
                            </div>
                            <hr className="border-1 border-gray-300 w-2/3" />
                            <div className="flex flex-row">
                                <Link
                                    to="/schedule-meeting"
                                    className="barlow-semi-condensed-semibold mb-8 mt-3 flex items-center text-lg text-blue-500 hover:text-blue-800 dark:text-blue-300 hover:dark:text-blue-500"
                                >
                                    Schedule a Session Now{' '}
                                    <ArrowUpRight className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* !SECTION Hero */}
{/* SECTION Content */}
            <div className="container ">
<hr className="border-1 border-gray-300 " />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    
                    <div className="space-y-6 mt-8">
                    <div className="grid justify-end">
                            <BlogPostLists posts={posts} />
                        </div>
                        <div className="rounded-xl bg-blue-950 mx-2 p-3">
                            <h2 className="text-white text-2xl barlow-semi-condensed-regular text-center">Social Media</h2>
                            <div className="overflow-hidden rounded-xl">
                                <YouTubeLiveStream
                                    apiKey={VITE_YT_API_KEY_MV}
                                    channelId={VITE_YT_CHANNEL_ID_MV}
                                />
                            </div>
                            <div> 
                                <div className="grid justify-center gap-2">
                                    <div>
                                        <a
                                            href="https://www.youtube.com/@HelpCodeIt"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex transform items-center rounded-full bg-red-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
                                        >
                                            <Youtube
                                                size={24}
                                                className="mr-3"
                                            />
                                            Visit our YouTube Channel
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="https://discord.gg/sDtKwcuK3J"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full transform items-center rounded-full bg-indigo-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg"
                                        >
                                            <svg
                                                className="mr-3 h-6 w-6 fill-current"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                            </svg>
                                            Join our Discord Server
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="https://x.com/HelpCodeIt"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full transform items-center rounded-full bg-black px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-lg"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <svg
                                                className="mr-3 h-6 w-6 fill-current transition-all duration-300"
                                                role="img"
                                                viewBox={
                                                    isX
                                                        ? '0 0 300 300'
                                                        : '0 0 24 24'
                                                }
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{
                                                    transform: isX
                                                        ? 'scale(1)'
                                                        : 'scale(1.3)', // Scale the Twitter logo to match the X logo
                                                    transition:
                                                        'transform 0.3s ease-in-out',
                                                }}
                                            >
                                                {isX ? (
                                                    // X Logo SVG
                                                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                                                ) : (
                                                    // Twitter Logo SVG (with scale adjustment)
                                                    <path d="M24 4.557a9.805 9.805 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.866 9.866 0 01-3.127 1.195A4.918 4.918 0 0016.616 3a4.92 4.92 0 00-4.92 4.92c0 .385.043.76.127 1.122A13.979 13.979 0 011.675 3.149a4.92 4.92 0 001.523 6.57 4.9 4.9 0 01-2.228-.616v.062a4.921 4.921 0 003.946 4.83 4.898 4.898 0 01-2.224.085 4.921 4.921 0 004.604 3.421A9.866 9.866 0 010 21.539a13.951 13.951 0 007.548 2.209c9.057 0 14.01-7.506 14.01-14.01 0-.214-.005-.427-.014-.639A10.025 10.025 0 0024 4.557z" />
                                                )}
                                            </svg>
                                            {isX
                                                ? 'Follow us @HelpCodeIt'
                                                : 'Follow us @HelpCodeIt'}
                                        </a>
                                    </div>
                                </div>
                            </div>{' '}
                        </div>

                        
                    </div>
                    <EventCard limit={1} />
                </div>
            </div>
{/* !SECTION Content */}
        </div>
    )
}

export default HomePage
