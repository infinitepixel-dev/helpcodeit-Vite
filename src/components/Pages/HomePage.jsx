import { useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
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
                                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
                            >
                                <Youtube size={24} className="mr-3" />
                                Visit our YouTube Channel
                            </a>

                            <a
                                href="https://discord.gg/sDtKwcuK3J"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg"
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
