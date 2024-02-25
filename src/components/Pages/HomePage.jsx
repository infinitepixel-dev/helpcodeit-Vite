import logo from '../../assets/helpcodeitlogo.svg'
import MainCards from '../Sub_Components/MainCards'

function HomePage({theme}) {
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
            <div className="min-h-screen text-white dark:bg-neutral-900">
                <MainCards />
            </div>
        </div>
    )
}

export default HomePage
