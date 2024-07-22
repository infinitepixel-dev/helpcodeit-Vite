import { useEffect, useRef } from 'react'
import propTypes from 'prop-types'

import bgImg1 from '../../assets/helpcodeitlogo_opt.webp'
import bgImg2 from '../../assets/helpcodeitlogo_opt.avif'
import bgImg3 from '../../assets/helpcodeitlogo_opt.jpg'

const LogoImage = ({ classNameValue, altValue }) => {
    console.log('ClassNameValue: ', classNameValue)
    console.log('AltValue: ', altValue)
    const backgroundRef = useRef(null)

    useEffect(() => {
        const backgroundElement = backgroundRef.current
        const sources = [
            { type: 'image/webp', srcset: bgImg1 },
            { type: 'image/avif', srcset: bgImg2 },
        ]
        let fallbackImage = bgImg3

        const setImage = (src) => {
            if (backgroundElement) {
                backgroundElement.style.backgroundImage = `url('${src}')`
            }
        }

        sources.forEach((source) => {
            const testImage = new Image()
            testImage.src = source.srcset
            testImage.onload = function () {
                if (testImage.complete && testImage.naturalWidth !== 0) {
                    setImage(source.srcset)
                }
            }
        })

        // Fallback to jpg if none of the sources load
        setImage(fallbackImage)
    }, [])
    // console.log('bg ref: ', backgroundRef)
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
            alt={altValue}
        ></div>
    )
}

LogoImage.propTypes = {
    classNameValue: propTypes.string,
    altValue: propTypes.string,
}

export default LogoImage
