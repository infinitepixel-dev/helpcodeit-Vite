import logo from '../../assets/helpcodeitlogo.svg'
import MainCards from '../Sub_Components/MainCards'

function HomePage({ theme }) {
    return (
        <div>
            {/* SECTION Jumbotron */}
            <div className="jumbo-background hero-text bg-neutral-800 text-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 md:col-span-1">
                            <img
                                src={logo}
                                alt="Help Code It logo"
                                className="hero-logo mx-auto mt-5 p-1"
                            />

                            <p className="hero-text mx-auto text-center font-extrabold">
                                Resources for beginning developers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* !SECTION end Jumbotron */}
            <div className="justify-center">
                <h2 className="mt-5 text-center text-5xl font-bold">
                    Want a 30 minute meeting?
                </h2>
                <p className="text-center">
                    Michael offers 30 minute meetings to help you with your coding
                    journey. The cost is just $15.
                </p>
                <div className="my-5 animate-bounce text-center hover:animate-none">
                    <a
                        href="https://calendly.com/michaelvarnell/30min"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="rounded-full bg-blue-700 px-4 py-2 font-bold text-white hover:bg-green-500 ">
                            Book a meeting
                        </button>
                    </a>
                </div>
            </div>
            <div className=" text-white dark:bg-neutral-900">
                <MainCards />
            </div>
        </div>
    )
}

export default HomePage
