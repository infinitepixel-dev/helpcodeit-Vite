import { LogIn } from 'react-feather'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
    //v4
    const generateSessionId = () => {
        // Generate a random session ID using window.crypto
        const array = new Uint8Array(16)
        window.crypto.getRandomValues(array)
        return Array.from(array, (byte) =>
            ('0' + byte.toString(16)).slice(-2)
        ).join('')
    }

    const handleGoogleLogin = () => {
        // Generate a unique session ID
        const sessionId = generateSessionId()

        // Store the session ID in local storage
        localStorage.setItem('sessionId', sessionId)

        // Get the current website's URL
        const currentUrl = window.location.origin
        console.log('Current URL:', currentUrl)

        // Redirect to your Node server's Google login endpoint with the session ID and redirect URL as query parameters
        window.location.href = `https://vps.infinitepixel.dev:3025/auth/google?sessionId=${sessionId}&redirect_url=${encodeURIComponent(currentUrl)}`
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

//v1
// const handleGoogleLogin = () => {
//     // Redirect to your Node server's Google login endpoint
//     window.location.href = 'http://localhost:3025/auth/google'
// }

//v2
// const handleGoogleLogin = () => {
//     // Get the current website's URL
//     const currentUrl = window.location.origin
//     console.log('Current URL:', currentUrl)

//     // Redirect to your Node server's Google login endpoint with the current URL as a query parameter
//     window.location.href = `https://vps.infinitepixel.dev:3025/auth/google?redirect_url=${encodeURIComponent(currentUrl)}`
// }

//v3
// const handleGoogleLogin = () => {
//     // Get the current website's URL
//     const currentUrl = window.location.origin
//     console.log('Current URL:', currentUrl)

//     // Redirect to your Node server's Google login endpoint with the current URL as a query parameter
//     window.location.href = `https://vps.infinitepixel.dev:3025/auth/google?redirect_url=${encodeURIComponent(currentUrl)}`
// }
