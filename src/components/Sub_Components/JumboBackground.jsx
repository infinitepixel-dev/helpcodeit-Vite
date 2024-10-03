import '@components/Sub_Components/JumboBackground.css'
import LogoImage from './LogoImage'

import bgImg1 from '@assets/cropped_header_bg_opt.webp?url'
import bgImg2 from '@assets/cropped_header_bg_opt.avif?url'
import bgImg3 from '@assets/cropped_header_bg_opt.jpg?url'

const JumboBackground = () => {
    return (
        <div
            className="jumbo-background relative grid items-center justify-center p-4 md:justify-start "
            style={{
                backgroundImage: `url(${bgImg3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Layer the picture element for modern formats */}
            <picture className="absolute inset-0 h-full w-full">
                <source srcSet={bgImg2} type="image/avif" />
                <source srcSet={bgImg1} type="image/webp" />
                <img
                    src={bgImg3}
                    alt="Help Code It Background"
                    className="background-img absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                    style={{ zIndex: -1 }} // Keep the image behind the content
                />
            </picture>

            {/* Main content area using responsive grid */}
            <div className="z-10 grid w-full grid-cols-1 items-center px-10 md:grid-cols-2">
                {/* Logo Section with responsive margin adjustment */}
                <div className="justify-self-center md:ml-20 md:justify-self-start lg:ml-40">
                    <LogoImage
                        classNameValue="h-64 w-64"
                        altValue="Help code it logo"
                        style={{
                            borderRadius: '10px',
                            objectFit: 'contain',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    />
                </div>

                {/* Text Section */}
                <div className="text-center text-white md:ml-8 md:text-left ">
                    <h1 className="hero-text mb-0 text-pretty font-extrabold">
                        Resources for <br /> beginning developers
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default JumboBackground
