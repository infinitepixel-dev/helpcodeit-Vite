import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Youtube } from 'lucide-react'
import { parseISO, isAfter } from 'date-fns'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import events from '@subComponents/Events'
import YouTubeLiveStream from '@subComponents/YouTubeLiveStream'
import EventModal from '@subComponents/EventModal/eventModal'
import CookieConsent from '@subComponents/CookieConsent/CookieConsent'

import './HomePage.css'
gsap.registerPlugin(ScrollTrigger)

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)

    const heroRef = useRef(null)
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

    const handleCloseModal = () => {
        setIsModalOpen(false)
        document.cookie = 'seenModal=true; max-age=31536000; path=/'
    }

    useEffect(() => {
        const maintenanceTimer = setTimeout(() => {
            setShowMaintenanceModal(true)
        }, 2000)

        return () => clearTimeout(maintenanceTimer)
    }, [])

    const closeMaintenanceModal = () => setShowMaintenanceModal(false)

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top 80%',
                once: true,
            },
        })

        gsap.from('.fade-in-card', {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: cardSectionRef.current,
                start: 'top 80%',
                once: true,
            },
        })
    }, [])

    return (
        <div>
            {filteredEvents.length > 0 && filteredEvents[0].show && (
                <EventModal
                    eventObject={filteredEvents[0]}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}

            {showMaintenanceModal && (
                <div className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="max-w-md rounded-xl bg-white p-6 text-center shadow-lg">
                        <h2 className="mb-4 text-xl font-bold text-gray-800">
                            Scheduled Maintenance Notice
                        </h2>
                        <p className="mb-4 text-gray-700">
                            We’re working hard behind the scenes to enhance your
                            learning experience! Our team is dedicated to
                            bringing you the best tools and resources to support
                            your coding journey. Thank you for your patience as
                            we make improvements—feel free to continue exploring
                            the site while we work to make it even better!
                        </p>
                        <p className="text-sm text-gray-500">
                            — The HelpCodeIt Team
                        </p>
                        <button
                            onClick={closeMaintenanceModal}
                            className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <CookieConsent />

            <Helmet>
                <title>Help Code It | Resources for Beginning Developers</title>
                <link rel="canonical" href="https://www.helpcodeit.com" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative grid grid-cols-1 overflow-hidden bg-gradient-to-bl from-slate-100 via-slate-200 to-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-800/70 to-slate-500/70 [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]"></div>
                <div className="p-8 md:p-8" />

                <div
                    ref={heroRef}
                    className="relative z-10 mx-auto max-w-4xl space-y-10 p-4 text-center md:p-20"
                >
                    <p className="text-xl font-semibold tracking-wider text-blue-200 uppercase">
                        100% Free Coding Resources
                    </p>

                    <h1 className="text-4xl font-bold text-white md:text-5xl">
                        Learn to Code. Build Your Future. For Free.
                    </h1>

                    <p className="mx-auto max-w-3xl text-lg text-slate-200">
                        Whether you're a total beginner or looking to level up,
                        Help Code It offers clear, step-by-step guidance,
                        real-world projects, and a supportive community—at no
                        cost to you.
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-blue-200">
                                Why Learn with Us?
                            </h2>
                            <ul className="list-inside list-disc space-y-3 text-slate-200">
                                <li>Beginner-friendly tutorials and guides</li>
                                <li>Real-world coding challenges & projects</li>
                                <li>Active community via YouTube & Discord</li>
                                <li>Motivation and mindset coaching</li>
                                <li>Fresh content and updates—always free</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-blue-200">
                                What You'll Gain
                            </h2>
                            <ul className="list-inside list-disc space-y-3 text-slate-200">
                                <li>Confidence in your coding abilities</li>
                                <li>A portfolio of real-world projects</li>
                                <li>
                                    Support from a passionate learning community
                                </li>
                                <li>
                                    Resources to keep learning at your own pace
                                </li>
                                <li>
                                    A clear roadmap to becoming a skilled
                                    developer
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link
                        to="/resources"
                        className="inline-block rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105 hover:bg-blue-700"
                    >
                        Start Learning Now
                    </Link>

                    <p className="mt-4 text-2xl font-semibold text-blue-950 uppercase">
                        No fees. No signups. Just free learning, forever!
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section
                ref={cardSectionRef}
                className="relative bg-gradient-to-bl from-slate-200 via-slate-100 to-slate-50 py-16 text-center"
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
                                className="fade-in-card rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-blue-500"
                            >
                                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                    {title}
                                </h3>
                                <p className="mb-4 text-gray-600">{desc}</p>
                                <Link
                                    to={link}
                                    className="inline-block font-bold text-blue-600 hover:underline"
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
                            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-transform hover:scale-105 hover:bg-blue-700"
                        >
                            Start with Web Design Principles
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
