import React from 'react'
//import { Link } from 'react-router-dom'
import michael from '../../assets/michael.jpeg'
import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'

const ScheduleMeeting = () => {
    let event = {
        title: 'Git and GitHub Workshop',
        date: 'Saturday, July 20th',
        time: '12:00 PM pst | 1:00 PM mst | 2:00 PM cst | 3:00 PM est',
        link: 'https://calendly.com/michaelvarnell/git-and-github-basics',
    }
    return (
        <div className="mb-10 min-h-screen">
            <Helmet>
                <title>
                    Book a Meeting with Michael Varnell | Help Code It
                </title>
                <meta
                    name="description"
                    content="Book a meeting with Michael Varnell to elevate your software development skills. Choose from various meeting options for personalized guidance in front-end development, Git, GitHub, and more."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/schedule-meeting"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="schedule meeting, coding help, coding tutoring, Michael Varnell, Git workshop, GitHub workshop, front-end development, coding sessions"
                />
            </Helmet>
            <EventAlert event={event} />
            <div className="pb-100 container mx-auto p-2 px-4 sm:p-8">
                <div className="mt-5 flex flex-wrap items-center">
                    <div className="w-full">
                        <h1 className="mb-4 text-center text-3xl font-bold">
                            Book a Meeting with Michael Varnell
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-center">
                            Elevate your software development skills with
                            personalized guidance from an experienced
                            professional. Choose the meeting option that best
                            fits your needs and schedule.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="mb-8 border-b-2 border-black pb-4 text-center text-2xl font-bold dark:border-white">
                        Available Meeting Options
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: '30-Minute Focus Session',
                                duration: '30 minutes',
                                price: '$14.99',
                                description:
                                    'Perfect for quick problem-solving or specific questions.',
                                link: 'https://calendly.com/michaelvarnell/30min',
                                isAfterHours: false,
                            },
                            {
                                title: 'In-Depth Development Hour',
                                duration: '1 hour',
                                price: '$24.99',
                                description:
                                    'Dive deeper into complex topics or get extended support on your projects.',
                                link: 'https://calendly.com/michaelvarnell/1-hour-session',
                                isAfterHours: false,
                            },
                            {
                                title: 'After-Hours Quick Consultation',
                                duration: '30 minutes',
                                price: '$29.99',
                                description:
                                    'Flexible evening sessions for urgent matters or busy schedules.',
                                link: 'https://calendly.com/michaelvarnell/30-min-after-hours',
                                isAfterHours: true,
                            },
                            {
                                title: 'Extended After-Hours Collaboration',
                                duration: '1 hour',
                                price: '$49.99',
                                description:
                                    'Comprehensive evening sessions for in-depth problem-solving and guidance.',
                                link: 'https://calendly.com/michaelvarnell/1-hour-session-after-hours',
                                isAfterHours: true,
                            },
                        ].map((meeting, index) => (
                            <div
                                key={index}
                                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
                            >
                                <div
                                    className={`p-6 ${meeting.isAfterHours ? 'bg-indigo-800' : 'bg-blue-600'} flex-grow text-white`}
                                >
                                    <h3 className="mb-2 text-2xl font-bold">
                                        {meeting.title}
                                    </h3>
                                    <p className="text-base">
                                        {meeting.duration}
                                    </p>
                                </div>
                                <div className="flex flex-grow flex-col justify-between p-6">
                                    <div>
                                        <p className="mb-4 text-3xl font-bold text-black">
                                            {meeting.price}
                                        </p>
                                        <p className="mb-6 font-semibold text-gray-600">
                                            {meeting.description}
                                        </p>
                                    </div>
                                    <a
                                        href={meeting.link}
                                        className="mt-4 block w-full rounded bg-blue-600 px-4 py-2 text-center font-bold text-white transition duration-300 hover:bg-blue-700"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 rounded-lg bg-gray-100 p-8">
                    <h2 className="mb-4 text-2xl font-bold text-gray-700">
                        About Michael Varnell
                    </h2>
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 text-xl md:col-span-2 ">
                            <p className="mb-4 text-gray-700">
                                Michael Varnell is a skilled Software Developer
                                with expertise in modern Front End technologies,
                                including React.js, JavaScript, TypeScript, and
                                Responsive Web Design. He holds a Management
                                Information Systems degree from the University
                                of Central Arkansas, where he focused on web
                                development.
                            </p>
                            <p className="mb-4 text-gray-700">
                                Currently enhancing his skills in backend
                                technologies, Michael's capabilities also
                                encompass UI/UX design and API integration,
                                enabling him to craft engaging and cutting-edge
                                web experiences.
                            </p>
                            <p className="text-gray-700">
                                As an educator at Promineo Tech, Michael is
                                deeply committed to guiding students through the
                                intricacies of front-end development, inspiring
                                them to discover innovative solutions in their
                                projects.
                            </p>
                        </div>
                        <div>
                            <img
                                src={michael}
                                alt="Michael"
                                width={300}
                                className="mx-auto rounded-lg shadow-2xl  sm:hidden md:block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleMeeting
