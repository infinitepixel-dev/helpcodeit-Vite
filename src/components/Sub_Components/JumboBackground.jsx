import { useEffect, useRef } from 'react'

import bgImg1 from '@assets/cropped_header_bg_opt.webp'
import bgImg2 from '@assets/cropped_header_bg_opt.avif'
import bgImg3 from '@assets/cropped_header_bg_opt.jpg'
import '@components/Sub_Components/JumboBackground.css'
import LogoImage from './LogoImage'

const JumboBackground = () => {
    const backgroundRef = useRef(null)

    useEffect(() => {
        const backgroundElement = backgroundRef.current

        const setBackgroundImage = (src) => {
            if (backgroundElement) {
                backgroundElement.style.backgroundImage = `url('${src}')`
            }
        }

        const testImageSupport = (src, callback) => {
            const img = new Image()
            img.src = src
            img.onload = () => callback(true)
            img.onerror = () => callback(false)
        }

        // Test WebP support first
        testImageSupport(bgImg1, (webpSupported) => {
            if (webpSupported) {
                setBackgroundImage(bgImg1)
            } else {
                // Test AVIF support if WebP fails
                testImageSupport(bgImg2, (avifSupported) => {
                    if (avifSupported) {
                        setBackgroundImage(bgImg2)
                    } else {
                        // Fallback to JPG
                        setBackgroundImage(bgImg3)
                    }
                })
            }
        })
    }, [])

    return (
        <div className="jumbo-background grid grid-cols-2" ref={backgroundRef}>
            <div className="col-span-2 my-9 place-content-center text-center text-white sm:col-span-2 md:col-span-1">
                <LogoImage
                    classNameValue="mx-auto place-content-center h-64 w-64 rounded-xl"
                    altValue="Help code it logo"
                />
                <h1 className="hero-text mx-auto mb-0 text-pretty font-extrabold">
                    Resources for <br /> beginning developers
                </h1>
            </div>
            <div className=""></div>
        </div>
    )
}

export default JumboBackground
