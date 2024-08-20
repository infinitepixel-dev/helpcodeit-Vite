import matthew from '@assets/Matthew.png'
import michael from '@assets/michael.jpeg'
import { Helmet } from 'react-helmet-async'

function About() {
    return (
        <div>
            <Helmet>
                <title>About Us | Help Code It</title>
                <meta
                    title="About Us | Help Code It"
                    name="description"
                    content="Learn about Help Code It, a website dedicated to teaching JavaScript and web development. Meet the team: Michael Varnell and Matthew Cox, experienced developers committed to education and mentorship."
                />
                <link rel="canonical" href="https://www.helpcodeit.com/about" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Help Code It, about us, JavaScript, web development, Michael Varnell, Matthew Cox, coding education, coding mentorship, React, Node.js, software development"
                />
            </Helmet>
            <div className="container text-lg font-semibold">
                <h1 className="my-5 text-center text-6xl">About</h1>
                <p className="my-1">
                    This is a website for learning JavaScript and other web
                    development technologies. It is a work in progress, and will
                    be updated regularly.
                </p>
                <p className="my-1">
                    The site is built with React and managed by Michael Varnell
                    and Matthew Cox. The content is intended to help beginning
                    coders with some of the tasks that are often more difficult
                    to understand due to jargon used in the industry and the
                    complexity of the tasks themselves. The intention is to fill
                    those gaps you run into in the basic coding education by
                    providing a resource that is easy to understand and use.
                </p>

                <div className="grid  grid-cols-1 pb-14 pt-8 md:grid-cols-2">
                    <div className="mx-auto">
                        <h2 className="my-4 text-center text-3xl">
                            Michael Varnell
                        </h2>
                        <img
                            src={michael}
                            alt="Michael Varnell"
                            width="300px"
                            className="mx-auto rounded"
                            aria-label="Photo of Michael Varnell"
                        />
                        <p className="text-pretty px-4 pt-5">
                            Michael Varnell is a skilled Software Developer with
                            expertise in modern Front End technologies,
                            including React.js, JavaScript, TypeScript, and
                            Responsive Web Design. He holds a Management
                            Information Systems degree from the University of
                            Central Arkansas, where he focused on web
                            development. Michael is currently enhancing his
                            skills by learning backend technologies. His
                            capabilities also encompass UI/UX design and API
                            integration, enabling him to craft engaging and
                            cutting-edge web experiences. In addition to his
                            technical acumen, Michael is deeply committed to
                            education and mentorship. He plays a vital role at
                            Promineo Tech, guiding students through the
                            intricacies of front-end development. His passion
                            for teaching extends beyond simply sharing technical
                            knowledge; he aims to inspire others to discover
                            innovative solutions in their projects.
                            Michael&apos;s career is a testament to his robust
                            technical skills and his dedication to promoting
                            growth and creativity in software development.
                        </p>
                        <div className="my-5  text-center ">
                            <a
                                href="https://calendly.com/michaelvarnell/30min"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button
                                    aria-label="Book a meeting with Michael button"
                                    className="animate-bounce rounded-full bg-blue-700 px-4 py-2 font-bold text-white hover:animate-none hover:bg-green-500"
                                >
                                    Book a meeting
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto my-auto">
                        <h2 className="my-4 text-center text-3xl">
                            Matthew Cox
                        </h2>
                        <img
                            src={matthew}
                            alt="Matthew Cox"
                            width="300px"
                            className="mx-auto rounded"
                            aria-label="Photo of Matthew Cox"
                        />
                        <p className="text-balance px-4 pt-5">
                            Matthew is a Full Stack Developer with a deep
                            expertise in a broad range of front-end and back-end
                            technologies. Leveraging a comprehensive skill set
                            that encompasses Node.js, HTML, CSS, JavaScript,
                            Python, Java, MySQL, and Spring Boot, he builds
                            robust, scalable digital solutions that drive
                            business growth and user engagement. He is deeply
                            passionate about education and innovation. He
                            dedicates a significant portion of his time to
                            teaching coding principles and advanced development
                            techniques, empowering aspiring developers to excel
                            in the tech industry. His approach to mentorship is
                            grounded in practical experience, offering learners
                            insights into real-world application development and
                            problem-solving strategies. Beyond the world of
                            coding and technology, Matthew harbors a profound
                            love for music, an enthusiasm that resonates through
                            his life as harmoniously as the code he writes. His
                            adventurous spirit is evident in his passion for
                            kayaking, where he finds tranquility and inspiration
                            amidst the ebb and flow of rivers and lakes. An avid
                            gamer, Matthew immerses himself in video games,
                            exploring virtual landscapes with the same curiosity
                            and determination that he applies to solving complex
                            programming challenges. This fascination with
                            digital worlds parallels his interest in
                            electronics, where he delights in tinkering with
                            gadgets and exploring the latest technological
                            advancements, continuously fueling his inventive
                            mind and broadening his understanding of the
                            interconnectedness of technology and daily life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
