import logo from '../../assets/helpcodeitlogo.svg'
import MainCards from '../Sub_Components/MainCards'

// eslint-disable-next-line react/prop-types, no-unused-vars
function HomePage({ theme }) {
    return (
        <div>
            {/* SECTION Jumbotron */}
            <div className="text-white jumbo-background hero-text bg-neutral-800">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 md:col-span-1">
                            <img
                                src={logo}
                                alt="Help Code It logo"
                                className="p-1 mx-auto mt-5 hero-logo"
                            />

                            <p className="mx-auto font-extrabold text-center hero-text">
                                Resources for beginning developers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* !SECTION end Jumbotron */}
            <div className="text-white dark:bg-neutral-900">
                <MainCards />
            </div>
        </div>
    )
}

export default HomePage
