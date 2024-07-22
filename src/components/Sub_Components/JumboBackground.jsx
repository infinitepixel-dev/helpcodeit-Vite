import { useEffect, useRef } from 'react'

import bgImg1 from '../../assets/cropped_header_bg_opt.webp'
import bgImg2 from '../../assets/cropped_header_bg_opt.avif'
import bgImg3 from '../../assets/cropped_header_bg_opt.jpg'
import './JumboBackground.css'

const JumboBackground = () => {
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

    return <div className="jumbo-background" ref={backgroundRef}></div>
}

export default JumboBackground
