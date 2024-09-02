//AdminSidebar.jsx

/*
A sidebar component for the admin dashboard
*/

import { useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'

//INFO Animation Libraries
import { gsap } from 'gsap'

//INFO Icons
import { FaTimes, FaPlus, FaUsers, FaHome } from 'react-icons/fa'

//INFO Assets
import PowerByInfinitePixel from '../widgets/PowerByInfinitePixel'

const AdminSidebar = ({ showSidebar, setShowSidebar }) => {
    const navigate = useNavigate()

    const closeSidebar = () => {
        gsap.to('.admin-sidebar', {
            x: '-100%',
            duration: 0.5,
            ease: 'power3.inOut',
        })
        setTimeout(() => setShowSidebar(false), 500)
    }

    return (
        <div
            className={`admin-sidebar fixed left-0 top-0 z-50 h-full transform bg-gray-800 bg-opacity-95 text-white ${
                showSidebar ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
            <div className="flex items-center justify-between p-4">
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <button onClick={closeSidebar}>
                    <FaTimes className="text-2xl" />
                </button>
            </div>
            <ul className="ml-4 mt-8 space-y-4">
                <li>
                    <button
                        className="flex items-center space-x-2 text-lg hover:text-gray-300"
                        onClick={() => {
                            closeSidebar()
                            navigate('/dashboard')
                        }}
                    >
                        <FaHome />
                        <span>Dashboard</span>
                    </button>
                </li>
                <li>
                    <button
                        className="flex items-center space-x-2 text-lg hover:text-gray-300"
                        onClick={() => {
                            closeSidebar()
                            navigate('/add-product')
                        }}
                    >
                        <FaPlus />
                        <span>Add Product</span>
                    </button>
                </li>
                <li>
                    <button
                        className="flex items-center space-x-2 text-lg hover:text-gray-300"
                        onClick={() => {
                            closeSidebar()
                            navigate('/users-manager')
                        }}
                    >
                        <FaUsers />
                        <span>Users Manager</span>
                    </button>
                </li>
                {/* Add more admin components here */}
            </ul>

            {/* display powerby at the bottom center of the menu */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
                <PowerByInfinitePixel />
            </div>
        </div>
    )
}

AdminSidebar.propTypes = {
    showSidebar: propTypes.bool.isRequired,
    setShowSidebar: propTypes.func.isRequired,
}

export default AdminSidebar
