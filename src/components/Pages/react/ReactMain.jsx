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
            <hr className=" border-1 mb-4 border-black dark:border-white" />
            <div className="flex flex-col items-center">
                <Link
                    className="text-2xl font-bold hover:text-blue-600"
                    to="/ReactComponents"
                >
                    React Component Basics
                </Link>
                <br />
                <Link
                    className="text-2xl font-bold hover:text-blue-600"
                    to="/ReactRouter6"
                >
                    React Router 6+
                </Link>
            </div>
        </div>
    )
}
