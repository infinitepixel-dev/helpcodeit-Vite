import { useContext, useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Youtube } from 'lucide-react'
import { parseISO, differenceInDays, isAfter } from 'date-fns'
import { gsap } from 'gsap'

//INFO sub Components
import { BlogContext } from '@subComponents/BlogAPI'
import events from '@subComponents/Events'
import BlogPostLists from '@subComponents/BlogViews/BlogPostLists'
import YouTubeLiveStream from '@subComponents/YouTubeLiveStream'
import EventModal from '@subComponents/EventModal/eventModal'
import CookieConsent from '@subComponents/CookieConsent/CookieConsent'

import './HomePage.css'

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { posts } = useContext(BlogContext) || {}
    const { VITE_YT_API_KEY_MV, VITE_YT_CHANNEL_ID_MV } = import.meta.env

    const heroRef = useRef(null)
    const videoRef = useRef(null)
    const postVideoTextRef = useRef(null)
    const cardSectionRef = useRef(null)

    const filteredEvents = events.filter((event) =>
        isAfter(parseISO(event.ISOdate), new Date())
    )

    useEffect(() => {
        const hasSeenModal = document.cookie
            .split('; ')
            .find((row) => row.startsWith('seenModal='))
        if (!hasSeenModal && filteredEvents.length > 0) setIsModalOpen(true)
    }, [filteredEvents.length])

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
        })
        gsap.from(videoRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out',
        })
        gsap.from(postVideoTextRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 1,
            ease: 'power3.out',
        })
        gsap.from(cardSectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1.5,
            ease: 'power3.out',
        })
    }, [])

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

    return (
        <div>
            {filteredEvents.length > 0 && filteredEvents[0].show && (
                <EventModal
                    eventObject={filteredEvents[0]}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}

            <CookieConsent />

            <Helmet>
                <title>Help Code It | Resources for Beginning Developers</title>
                <link rel="canonical" href="https://www.helpcodeit.com" />
            </Helmet>

            <section className="grid grid-cols-1 gap-8 bg-gradient-to-b from-slate-600 to-slate-900 md:grid-cols-12">
                <div className="p-8 md:p-16" />
                <div
                    ref={heroRef}
                    className="grid place-items-center p-8 text-center md:col-span-10 md:p-16"
                >
                    <p className="mb-2 text-sm font-medium uppercase tracking-wide text-indigo-300">
                        Learning Coding Just Got Easier
                    </p>
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                        Everyone Gets Impostor Syndrome
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Don't let challenging topics slow you down! Sometimes,
                        all you need is a little guidance to spark your
                        progress.
                    </p>
                    <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        At Help Code It, we empower developers of all skill
                        levels to thrive. Start learning today – let's code your
                        future together!
                    </p>

                    {/* Text Below Video */}
                    <div
                        ref={postVideoTextRef}
                        className="mt-8 max-w-2xl text-center text-gray-200 dark:text-gray-400"
                    >
                        <h2 className="mb-4 text-3xl font-bold">
                            Get Inspired. Get Started.
                        </h2>
                        <p className="text-lg">
                            Learning to code isn't just about memorizing syntax
                            — it's about building real skills, solving real
                            problems, and changing your future.
                        </p>
                        <p className="mt-4 text-lg">
                            Embrace the journey. Embrace the challenge. Every
                            great developer started exactly where you are.
                        </p>
                    </div>
                </div>
            </section>

            <section
                ref={cardSectionRef}
                className="bg-gradient-to-bl from-slate-200 via-slate-100 to-slate-50 py-12 text-center"
            >
                <div className="container mx-auto max-w-screen-lg px-4">
                    <h2 className="mb-6 text-4xl font-extrabold text-gray-900">
                        Welcome to Your Coding Journey!
                    </h2>
                    <p className="mb-8 text-xl text-gray-700">
                        Ready to start learning? Here are some essential
                        resources to get you going.
                    </p>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Install Tools',
                                desc: 'Set up your development environment.',
                                link: '/fundamentals/Installs',
                            },
                            {
                                title: 'Understand Files',
                                desc: 'Familiarize with project structures.',
                                link: '/fundamentals/Files',
                            },
                            {
                                title: 'Naming Conventions',
                                desc: 'Consistent naming is key.',
                                link: '/fundamentals/NamingConventions',
                            },
                            {
                                title: 'VS Code Extensions',
                                desc: 'Boost productivity with extensions.',
                                link: '/fundamentals/VSCodeExtensions',
                            },
                            {
                                title: 'Set Up Practice Environment',
                                desc: 'Ready your practice setup.',
                                link: '/fundamentals/SettingUpPracticeEnvironment',
                            },
                            {
                                title: 'The Rubber Ducky Method',
                                desc: 'Explain problems to "debug".',
                                link: '/MiscPages/RubberDucky',
                            },
                        ].map(({ title, desc, link }, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-blue-500"
                            >
                                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                    {title}
                                </h3>
                                <p className="mb-4 text-gray-600">{desc}</p>
                                <Link
                                    to={link}
                                    className="inline-block font-bold text-blue-600"
                                >
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <h4 className="mb-4 text-3xl font-semibold text-gray-800">
                            Ready to Dive Deeper?
                        </h4>
                        <p className="text-lg text-gray-600">
                            Explore topics from HTML to JavaScript, React, and
                            more.
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

            <section className="container mx-auto mt-16 max-w-screen-lg px-4">
                <hr className="border-1 mb-8 border-gray-300" />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <BlogPostLists posts={posts} />
                    </div>
                    <div className="mx-2 mb-10 mt-10 rounded-lg bg-slate-800 p-4 shadow-lg">
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
                                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-red-700"
                            >
                                <Youtube size={24} className="mr-3" /> Visit our
                                YouTube Channel
                            </a>
                            <a
                                href="https://discord.gg/sDtKwcuK3J"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-700"
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
