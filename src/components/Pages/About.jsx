import matthew from '@assets/Matthew.png'
import daniel from '@assets/Daniel.jpg'
import michael from '@assets/michael.jpeg'
import { Helmet } from 'react-helmet-async'

function About() {
    const team = [
        {
            name: 'Michael Varnell',
            img: michael,
            alt: 'Michael Varnell',
            bio: `Michael Varnell is a Software Developer specializing in Front End technologies like React, JavaScript, and TypeScript. With a background in MIS from the University of Central Arkansas, he is passionate about teaching and mentoring new developers at Promineo Tech.`,
        },
        {
            name: 'Daniel Cox',
            img: daniel,
            alt: 'Daniel Cox',
            bio: `Daniel is a Front-End Software Developer with 16 years of SaaS industry experience. He specializes in React, Tailwind CSS, GSAP, and UX/UI design, building intuitive, high-performance applications. Daniel also has working knowledge of backend technologies like MySQL and Next.js, enabling full-stack collaboration.`,
        },
        {
            name: 'Matthew Cox',
            img: matthew,
            alt: 'Matthew Cox',
            bio: `Matthew is a Full Stack Developer skilled in Node.js, JavaScript, Python, and more. He combines technical mastery with a love for music, gaming, kayaking, and electronics, continuously blending creativity with innovation in both code and life.`,
        },
    ]

    return (
        <div>
            <Helmet>
                <title>About Us | Help Code It</title>
                <meta
                    name="description"
                    content="Learn about Help Code It, a website dedicated to teaching JavaScript and web development. Meet the team: Michael Varnell and Matthew Cox, experienced developers committed to education and mentorship."
                />
                <link rel="canonical" href="https://www.helpcodeit.com/about" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Help Code It, about us, JavaScript, web development, Michael Varnell, Matthew Cox, Daniel Cox, coding education, coding mentorship, React, Node.js, software development"
                />
            </Helmet>

            <div className="container mx-auto px-4 py-12 text-lg font-semibold">
                <h1 className="mb-12 text-center text-5xl font-bold">
                    About Us
                </h1>

                <div className="mx-auto mb-16 max-w-3xl text-center text-blue-950">
                    <p className="mb-4">
                        Help Code It is a platform dedicated to teaching
                        JavaScript and web development technologies. Built with
                        React, our mission is to fill the educational gaps that
                        often exist for beginner coders, simplifying complex
                        concepts with clear, easy-to-understand resources.
                    </p>
                    <p>
                        Our team of experienced developers shares a deep passion
                        for education, mentorship, and innovation — empowering
                        the next generation of coders to excel.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={member.img}
                                alt={member.alt}
                                className="mb-6 h-48 w-48 rounded-full object-cover"
                                aria-label={`Photo of ${member.name}`}
                            />
                            <h2 className="mb-4 text-2xl font-bold text-blue-950">
                                {member.name}
                            </h2>
                            <p className="text-center text-base font-normal text-blue-950">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
