import { LogIn } from 'react-feather'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
    const handleGoogleLogin = () => {
        // Redirect to your Node server's Google login endpoint
        window.location.href = 'http://66.128.253.47:3025/auth/google'
    }

    return (
        <div className="flex items-center justify-end">
            <div>
                <button
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={handleGoogleLogin}
                    aria-label="Login with Google"
                >
                    <span className="flex items-center gap-2">
                        <FaGoogle aria-hidden="true" />
                        <span>Login</span>
                        <LogIn aria-hidden="true" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Login
