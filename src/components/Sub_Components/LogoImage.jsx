import { useEffect, useRef } from 'react'
import propTypes from 'prop-types'

import bgImg1 from '../../assets/helpcodeitlogo_opt.webp'
import bgImg2 from '../../assets/helpcodeitlogo_opt.avif'
import bgImg3 from '../../assets/helpcodeitlogo_opt.jpg'

const LogoImage = ({ classNameValue, altValue }) => {
    const backgroundRef = useRef(null)

    useEffect(() => {
        const backgroundElement = backgroundRef.current

        const setImage = (src) => {
            if (backgroundElement) {
                backgroundElement.style.backgroundImage = `url('${src}')`
            }
        }

        const handleImageLoad = (src) => {
            const testImage = new Image()
            testImage.src = src
            testImage.onload = function () {
                if (testImage.complete && testImage.naturalWidth !== 0) {
                    setImage(src)
                }
            }
        }

        const sources = [
            { type: 'image/webp', srcset: bgImg1 },
            { type: 'image/avif', srcset: bgImg2 },
        ]

        sources.forEach((source) => handleImageLoad(source.srcset))

        // Fallback to jpg if none of the sources load
        setImage(bgImg3)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        sources.forEach((source) =>
                            handleImageLoad(source.srcset)
                        )
                        observer.unobserve(backgroundElement)
                    }
                })
            },
            { threshold: 0.1 }
        )

        observer.observe(backgroundElement)

        return () => {
            if (backgroundElement) observer.unobserve(backgroundElement)
        }
    }, [])

    return (
        <div
            className={classNameValue}
            style={{
                objectFit: 'contain',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            ref={backgroundRef}
            aria-label={altValue}
        ></div>
    )
}

LogoImage.propTypes = {
    classNameValue: propTypes.string,
    altValue: propTypes.string,
}

export default LogoImage
