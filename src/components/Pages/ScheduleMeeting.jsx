//import { Link } from 'react-router-dom'
import michael from '@assets/michael.jpeg'
// import EventAlert from '../Sub_Components/EventAlert'
import { Helmet } from 'react-helmet-async'

import { Link } from 'react-router-dom'

const ScheduleMeeting = () => {


    return (
        <div className="min-h-screen mb-10">
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

            {/* {event.ISOdate < new Date().toISOString() && <EventAlert event={event} />} */}
            <div className="container p-2 px-4 mx-auto pb-100 sm:p-8">
                <div className="flex flex-wrap items-center mt-5">
                    <div className="w-full">
                        <h1 className="mb-4 text-3xl font-bold text-center">
                            Book a Meeting with Michael Varnell
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-center">
                            Elevate your software development skills with
                            personalized guidance from an experienced
                            professional. Choose the meeting option that best
                            fits your needs and schedule.
                        </p>
                    </div>
                </div>

                <div className="grid justify-center mt-10">
                    <Link
                        to="/calendar"
                        className="inline-flex items-center px-6 py-3 mx-auto mb-5 text-base font-bold text-white bg-blue-700 border border-gray-300 shadow-md border-1 w-fit rounded-3xl dark:border-none"
                    >
                        See the Event Calendar for Special Workshops!
                    </Link>
                </div>
                <div className="mt-2">
                    <h2 className="pb-4 mb-8 text-2xl font-bold text-center border-b-2 border-black dark:border-white">
                        Available Meeting Options
                    </h2>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-evenly ">
                        {[
                            {
                                title: '30-Minute Session',
                                duration: '30 minutes',
                                price: '$14.99',
                                description:
                                    'Perfect for quick problem-solving or specific questions.',
                                link: 'https://calendly.com/michaelvarnell/30min',
                                isAfterHours: false,
                            },
                            {
                                title: '60 Minute Session',
                                duration: '1 hour',
                                price: '$24.99',
                                description:
                                    'Dive deeper into complex topics or get extended support on your projects.',
                                link: 'https://calendly.com/michaelvarnell/1-hour-session',
                                isAfterHours: false,
                            },
                            // {
                            //     title: 'After-Hours Quick Consultation',
                            //     duration: '30 minutes',
                            //     price: '$29.99',
                            //     description:
                            //         'Flexible evening sessions for urgent matters or busy schedules.',
                            //     link: 'https://calendly.com/michaelvarnell/30-min-after-hours',
                            //     isAfterHours: true,
                            // },
                            // {
                            //     title: 'Extended After-Hours Collaboration',
                            //     duration: '1 hour',
                            //     price: '$49.99',
                            //     description:
                            //         'Comprehensive evening sessions for urgent matters or busy schedules. 1 hour of in-depth problem-solving and guidance.',
                            //     link: 'https://calendly.com/michaelvarnell/1-hour-session-after-hours',
                            //     isAfterHours: true,
                            // },
                        ].map((meeting, index) => (
                            <div
                                key={index}
                                className="flex flex-col transition-transform bg-white rounded-lg shadow-lg justify-items-center hover:scale-105"
                                aria-label={`${meeting.title}, ${meeting.duration}, ${meeting.price}, ${meeting.description}`}
                            >
                                <div
                                    className={`p-6 ${meeting.isAfterHours ? 'bg-indigo-800' : 'bg-blue-600'} flex-grow text-white rounded-t-md`}
                                >
                                    <h3 className="mb-2 text-2xl font-bold">
                                        {meeting.title}
                                    </h3>
                                    <p className="text-base">
                                        {meeting.duration}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-between flex-grow p-6">
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
                                        className="block w-full px-4 py-2 mt-4 font-bold text-center text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
                                        aria-label={`Book now for ${meeting.title}`}
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                        <div className="mx-auto">
                            <p className="mt-8 text-center ">If you need an after hours appointment, please use our contact form on the contact page and we will try to accomidate it.</p>
                        </div>
                </div>
                <div className="p-8 mt-16 bg-gray-100 rounded-lg">
                    <h2 className="mb-4 text-2xl font-bold text-gray-700">
                        About <br />{' '}
                        <span className="text-3xl">Michael Varnell</span>
                    </h2>
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 text-xl md:col-span-2">
                            <p className="mb-4 text-gray-700">
                                Michael is a skilled Software Developer with
                                expertise in modern Front End technologies,
                                including React.js, JavaScript, TypeScript, and
                                Responsive Web Design. He holds a Management
                                Information Systems degree from the University
                                of Central Arkansas, where he focused on web
                                development.
                            </p>
                            <p className="mb-4 text-gray-700">
                                Currently enhancing his skills in backend
                                technologies, Michael&apos;s capabilities also
                                encompass UI/UX design and API integration,
                                enabling him to craft engaging and cutting-edge
                                web experiences.
                            </p>
                            <p className="text-gray-700">
                                As an educator, Michael is deeply committed to
                                guiding students through the intricacies of
                                front-end development, inspiring them to
                                discover innovative solutions in their projects.
                            </p>
                        </div>
                        <div>
                            <img
                                src={michael}
                                alt="Michael Varnell"
                                width={300}
                                className="mx-auto rounded-lg shadow-2xl sm:hidden md:block"
                                aria-label="Photo of Michael Varnell"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleMeeting
