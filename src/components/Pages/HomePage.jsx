import { useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BlogContext } from '@subComponents/BlogAPI'
import events from '@subComponents/Events'
import BlogPostLists from '@subComponents/BlogViews/BlogPostLists'
import YouTubeLiveStream from '@subComponents/YouTubeLiveStream'
import EventModal from '@subComponents/EventModal/eventModal'
import CookieConsent from '@subComponents/CookieConsent/CookieConsent'
import heroImage from '@assets/ImpostorSyndromeIllustration.webp'
import { Youtube } from 'lucide-react'
import { parseISO, differenceInDays, isAfter } from 'date-fns'

import './HomePage.css'

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { posts } = useContext(BlogContext) || {}

    const { VITE_YT_API_KEY_MV, VITE_YT_CHANNEL_ID_MV } = import.meta.env

    const filteredEvents = events.filter((event) =>
        isAfter(parseISO(event.ISOdate), new Date())
    )

    useEffect(() => {
        const hasSeenModal = document.cookie
            .split('; ')
            .find((row) => row.startsWith('seenModal='))
        if (!hasSeenModal && filteredEvents.length > 0) {
            setIsModalOpen(true)
        }
    }, [filteredEvents.length])

    const handleCloseModal = () => {
        setIsModalOpen(false)
        document.cookie = 'seenModal=true; max-age=31536000; path=/'
    }

    if (!posts) {
        console.error(
            'BlogContext is undefined. Make sure HomePage is wrapped in BlogProvider.'
        )
        return null
    }

    // Event Message
    const getEventMessage = () => {
        if (filteredEvents.length === 0) return null

        const nextEvent = filteredEvents[0]
        const alertDate = parseISO(nextEvent.ISOdate)
        const currentDate = new Date()
        const daysUntilEvent = differenceInDays(alertDate, currentDate)

        if (daysUntilEvent === 0) {
            return `Our next event is ${nextEvent.title} today. The cost is $${nextEvent.cost} and registration is open till 5 minutes before.`
        } else {
            return `Our next event is ${nextEvent.title} in ${daysUntilEvent} day${daysUntilEvent > 1 ? 's' : ''}. The cost is $${nextEvent.cost} and registration is open.`
        }
    }

    const eventMessage = getEventMessage()

    return (
        <div>
            {/* Modal */}
            {filteredEvents.length > 0 && filteredEvents[0].show && (
                <EventModal
                    eventObject={filteredEvents[0]}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}

            {/* Cookie Consent */}
            <CookieConsent />

            {/* SEO */}
            <Helmet>
                <title>Help Code It | Resources for Beginning Developers</title>
                <meta
                    name="description"
                    content="Get expert coding help and tutoring for beginning developers. Join our Git and GitHub Workshop and explore our resources. Reference, examples, and more!"
                />
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

            {/* Hero Section */}
            <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
                {/* Empty Spacer Div (optional, depending on layout intention) */}
                <div className="p-8 md:p-16"></div>

                {/* Hero Content */}
                <div className="grid grid-rows-[auto,auto,auto,auto,auto] place-items-center p-8 text-center md:col-span-10 md:p-16">
                    {/* Small Upper Text */}
                    <p className="mb-2 text-sm font-medium uppercase tracking-wide text-indigo-500">
                        Learning Coding Just Got Easier
                    </p>

                    {/* Main Heading */}
                    <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
                        Everyone Gets Impostor Syndrome
                    </h1>

                    {/* Body Paragraph */}
                    <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Don't let challenging topics slow you down! Sometimes,
                        all you need is a little guidance to spark your
                        progress.
                    </p>
                    <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        At Help Code It, we empower developers of all skill
                        levels to thrive. Whether you're just starting or
                        looking to refine your skills, our expert-led tutorials,
                        tips, and resources make coding accessible, fun, and
                        effective. Join our vibrant community and unlock the
                        potential to build, grow, and succeed in your coding
                        journey. Start learning today – let's code your future
                        together!
                    </p>
                </div>
            </section>
            <section className="mb-12 flex justify-center gap-8 md:grid-cols-12">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/b4g3-xmam_g?si=TA-RbApT5eVMDgVT"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>

            <section className="bg-gradient-to-bl from-slate-200 via-slate-100 to-slate-50 py-12 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="mb-6 text-4xl font-extrabold text-gray-900">
                        Welcome to Your Coding Journey!
                    </h2>
                    <p className="mb-8 text-xl text-gray-700">
                        Ready to start learning? Here are some essential
                        resources to get you going.
                    </p>

                    {/* Card Layout for different learning steps */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Installations */}
                        <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-blue-500">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Step 1: Install Tools
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Learn how to set up your development environment
                                and essential tools.
                            </p>
                            <Link
                                to="/fundamentals/Installs"
                                className="inline-block font-bold text-blue-600"
                            >
                                Get Started with Installs
                            </Link>
                        </div>

                        {/* File Understanding */}
                        <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-blue-500">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Step 2: Understand Files
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Familiarize yourself with the file structures
                                and organization of your projects.
                            </p>
                            <Link
                                to="/fundamentals/Files"
                                className="inline-block font-bold text-blue-600"
                            >
                                Learn About Files
                            </Link>
                        </div>

                        {/* Naming Conventions */}
                        <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-blue-500">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Step 3: Naming Conventions
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Naming your variables and files consistently is
                                key to maintainable code.
                            </p>
                            <Link
                                to="/fundamentals/NamingConventions"
                                className="inline-block font-bold text-blue-600"
                            >
                                Learn Naming Conventions
                            </Link>
                        </div>

                        {/* VS Code Extensions */}
                        <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-blue-500">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Step 4: VS Code Extensions
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Discover useful VS Code extensions that will
                                boost your productivity.
                            </p>
                            <Link
                                to="/fundamentals/VSCodeExtensions"
                                className="inline-block font-bold text-blue-600"
                            >
                                Install VS Code Extensions
                            </Link>
                        </div>

                        {/* Practice Environment Setup */}
                        <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-blue-500">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Step 5: Set Up Your Environment
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Ensure your practice environment is ready for
                                the best learning experience.
                            </p>
                            <Link
                                to="/fundamentals/SettingUpPracticeEnvironment"
                                className="inline-block font-bold text-blue-600"
                            >
                                Set Up Practice Environment
                            </Link>
                        </div>

                        {/* Rubber Ducky Method */}
                        <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-blue-500">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Bonus: The Rubber Ducky Method
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Ever feel stuck? Try explaining the problem out
                                loud to a rubber duck.
                            </p>
                            <Link
                                to="/MiscPages/RubberDucky"
                                className="inline-block font-bold text-blue-600"
                            >
                                Learn About the Rubber Ducky Method
                            </Link>
                        </div>
                    </div>

                    {/* Next Step Prompt */}
                    <div className="mt-12">
                        <h4 className="mb-4 text-3xl font-semibold text-gray-800">
                            Ready to Dive Deeper?
                        </h4>
                        <p className="text-lg text-gray-600">
                            Once you're set up, explore our full range of topics
                            from HTML to JavaScript, React, and more.
                        </p>
                        <Link
                            to="/fundamentals/WebDesignPrincipals"
                            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            Start with Web Design Principles
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mt-16">
                <hr className="border-1 mb-8 border-gray-300" />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Blog Posts */}
                    <div>
                        <BlogPostLists posts={posts} />
                    </div>

                    {/* YouTube Section */}
                    <div className="mx-2 mb-10 mt-10 rounded-xl bg-blue-950 p-4">
                        <h2 className="mb-4 text-center text-2xl text-white">
                            Social Media
                        </h2>
                        <div className="mb-6 overflow-hidden rounded-xl">
                            <YouTubeLiveStream
                                apiKey={VITE_YT_API_KEY_MV}
                                channelId={VITE_YT_CHANNEL_ID_MV}
                            />
                        </div>

                        <div className="mb-4 grid gap-4">
                            <a
                                href="https://www.youtube.com/@HelpCodeIt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hhover:shadow-blue-500 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-red-700"
                            >
                                <Youtube size={24} className="mr-3" />
                                Visit our YouTube Channel
                            </a>

                            <a
                                href="https://discord.gg/sDtKwcuK3J"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hhover:shadow-blue-500 inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-700"
                            >
                                Join us on Discord
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
