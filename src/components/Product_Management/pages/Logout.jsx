import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import { LogOut } from 'react-feather'
import { FaGoogle } from 'react-icons/fa'

const Logout = () => {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)

    const handleLogout = async () => {
        try {
            const response = await fetch(
                'https://vps.infinitepixel.dev:3025/logout',
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (response.ok) {
                logout() // Clear the user from AuthContext and localStorage
                navigate('/login') // Redirect to login
            } else {
                console.error('Logout failed')
            }
        } catch (error) {
            console.error('Logout failed', error)
        }
    }

    return (
        <div className="flex items-center justify-end">
            <div>
                <button
                    className="rounded-lg bg-red-600 px-4 py-2 text-white transition duration-300 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
                    onClick={handleLogout}
                    aria-label="Log out of Google account"
                >
                    <span className="flex items-center gap-2">
                        <FaGoogle aria-hidden="true" />
                        <span>Logout</span>
                        <LogOut aria-hidden="true" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Logout
