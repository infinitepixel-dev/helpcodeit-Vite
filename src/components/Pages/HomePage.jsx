
import { useContext, useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
const LogoImage = React.lazy(() => import('../Sub_Components/LogoImage.jsx'))
import MainCards from '../Sub_Components/MainCards'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'
import {
    parseISO,
    // formatDistanceToNow,
    differenceInDays,
    isAfter,
} from 'date-fns'
import EventCard from '../Sub_Components/EventCard'
import { CalendarSearch, Youtube } from 'lucide-react'
import JumboBackground from '../Sub_Components/JumboBackground'
import './HomePage.css'
import AlertMessage from '@subComponents/AlertMessage'
import events from '@subComponents/Events'
// import discord from "@assets/discord.svg"


import PostList from './PostList'
import YouTubeLiveStream from '@subComponents/YouTubeLiveStream'

import BlogPost from './BlogPost'

//env YT Credentials

function HomePage() {
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
        // console.log(message);
    } else {
        console.log('No upcoming events.')
    }
    currentDate = new Date()
    // console.log(message)
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
                <meta property="author" content="Help Code It" />
                <meta
                    property="og:description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />

                <meta property="og:image" content={LogoImage} />
                <meta property="twitter:image" content={LogoImage} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.helpcodeit.com/"
                />
                <meta property="twitter:title" content="Help Code It" />
                <meta
                    property="twitter:description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />
            </Helmet>
            {new Date(filteredEvents[0].ISOdate) > currentDate && filteredEvents[0].show ? (
                <AlertMessage
                    message={message}
                    type={
                        daysUntilEvent > 2
                            ? 'info'
                            : daysUntilEvent > 1
                              ? 'warning'
                              : 'error'
                    }
                    duration={25000}
                    onClose={() => console.log('closed')}
                />
            ) : null}
            {/* {event.ISOdate > new Date().toISOString() && <EventAlert event={event} />}
            {/* SECTION Jumbotron */}

            <div className="text-white hero-text bg-neutral-800">
                <div className="relative grid-cols-2">
                    <JumboBackground />
                </div>
            </div>



            <div className='container'>
                    <div className="grid grid-cols-1 mx-8 mt-5 overflow-hidden bg-gray-800 shadow-md lg:grid-cols-3 rounded-xl">
                <div>
                    <div>
                        <YouTubeLiveStream
                            apiKey={VITE_YT_API_KEY_MV}
                            channelId={VITE_YT_CHANNEL_ID_MV}
                        />
                        </div>
                          <div className="px-2 py-4 space-y-6">
                            <div className="grid justify-center gap-2">
                              <div>
                                  <a
                                                      href="https://www.youtube.com/@HelpCodeIt"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-flex items-center px-6 py-3 font-bold text-white transition-all duration-300 transform bg-red-600 rounded-full hover:bg-red-700 hover:shadow-lg hover:-translate-y-1"
                                  >
                                                      <Youtube size={24} className="mr-3" />
                                                      Visit our YouTube Channel
                                  </a>
                              </div>
                              <div>
                                  <a
                                                      href="https://discord.gg/sDtKwcuK3J"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-flex items-center w-full px-6 py-3 font-bold text-white transition-all duration-300 transform bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1"
                                  >
                                                      <svg className="w-6 h-6 mr-3 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                                      </svg>
                                                      Join our Discord Server
                                  </a>
                              </div>
                              <div>
      <a
        href="https://x.com/HelpCodeIt"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center w-full px-6 py-3 font-bold text-white transition-all duration-300 transform bg-black rounded-full hover:bg-blue-400 hover:shadow-lg hover:-translate-y-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          className="w-6 h-6 mr-3 transition-all duration-300 fill-current"
          role="img"
          viewBox={isX ? "0 0 300 300" : "0 0 24 24"}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isX ? "scale(1)" : "scale(1.3)", // Scale the Twitter logo to match the X logo
            transition: "transform 0.3s ease-in-out",
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
        {isX ? "Follow us @HelpCodeIt" : "Follow us @HelpCodeIt"}
      </a>
    </div>
                        </div>


                          </div>
                </div>
                        <div className='col-span-1 md:col-span-2'><PostList posts={posts} limit={1} /></div>
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

                        <h2 className="mb-3 text-4xl font-bold text-center">
                            Get expert coding help and tutoring
                        </h2>

                        <div className="max-w-2xl p-8 mx-auto mt-3 mb-8 rounded-lg">
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
                                    className="flex px-6 py-3 mx-auto font-bold text-white transition duration-300 bg-blue-700 rounded-full w-fit hover:bg-red-700"
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