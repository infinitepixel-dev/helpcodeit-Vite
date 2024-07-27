import { useState, useRef } from 'react'
import propTypes from 'prop-types'
import ClipboardCopyIcon from '@assets/clipboard-copy.svg'
import ClipboardCopyCheckedIcon from '@assets/clipboard-copy-checked.svg'
import styles from './CopyButton.module.css'
import { gsap } from 'gsap'

const CopyButton = ({ textToCopy, position }) => {
    const [copied, setCopied] = useState(false)
    const iconRef = useRef(null)

    const animateIconChange = () => {
        // Fade out the original icon
        gsap.to(iconRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.25,
            ease: 'back.in',
            onComplete: () => {
                setCopied(true)
                // Fade in the checked icon
                gsap.fromTo(
                    iconRef.current,
                    { scale: 0.5 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'back.out',
                        delay: 0.1, // Add a slight delay before starting the fade in
                    }
                )
            },
        })
    }

    const animateIconRevert = () => {
        // Fade out the checked icon
        gsap.to(iconRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.25,
            ease: 'back.in',
            onComplete: () => {
                setCopied(false)
                // Immediately switch the icon back without waiting for gsap's onComplete
                // Fade in the original icon
                gsap.fromTo(
                    iconRef.current,
                    { scale: 0.5, opacity: 0 }, // Start from an invisible state
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'back.out',
                        delay: 0.1, // Ensure there's a slight delay before starting the fade in
                    }
                )
            },
        })
    }

    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                animateIconChange()
                // Reset icon after some time with smooth transition back
                setTimeout(() => animateIconRevert(), 2000) // Use animateIconRevert for smooth transition back
            })
            .catch((err) => console.error('Failed to copy text: ', err))
    }

    return (
        <button
            onClick={() => copyToClipboard(textToCopy)}
            className={`copy-btn absolute m-1 ${position}`}
            aria-label='Copy to clipboard'

        >
            {copied ? (
                <img
                    src={ClipboardCopyCheckedIcon}
                    className={styles['copy-btn-checked']}
                    ref={iconRef}
                />
            ) : (
                <img
                    src={ClipboardCopyIcon}
                    className={styles['copy-btn']}
                    ref={iconRef}
                />
            )}
        </button>
    )
}

CopyButton.propTypes = {
    textToCopy: propTypes.string.isRequired,
}

export default CopyButton
