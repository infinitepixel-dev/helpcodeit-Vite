import { createContext, useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

// Create a context for dark mode
const DarkModeContext = createContext()

// Create a custom hook to use the dark mode context
export const useDarkMode = () => {
    return useContext(DarkModeContext)
}

// Create a provider component for the dark mode context
export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    useEffect(() => {
        const handleDarkModeChange = (e) => {
            setIsDarkMode(e.matches)
        }

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', handleDarkModeChange)

        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', handleDarkModeChange)
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <DarkModeContext.Provider value={isDarkMode}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider

//Props Validation
DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
