import reactlogo from '../../../assets/React.svg'
import { Link } from 'react-router-dom'

export default function reactmain() {
    return (
        <div className="container">
            <div className="flex items-center justify-center">
                <div>
                    <img
                        src={reactlogo}
                        alt="react logo"
                        className="me-4 ms-auto"
                        width="50px"
                    />
                </div>
                <div>
                    <h1 className="mukataFont my-5 text-center text-7xl">
                        React Topics
                    </h1>
                </div>
            </div>
            <hr className="mx-auto w-10/12 border-2 border-black dark:border-white" />
            <div className="row col-span-1 md:col-span-2">
                <div className="col my-4">
                    <Link
                        className="text-xl hover:text-blue-600"
                        to="/ReactComponents"
                    >
                        React Component Basics
                    </Link>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
