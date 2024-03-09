import PropTypes from 'prop-types'

// Single Card Component
function Card({
    imageSrc,
    customCSS,
    title,
    description,
    actionHref,
    actionText,
    styles,
}) {
    Card.propTypes = {
        imageSrc: PropTypes.string,
        customCSS: PropTypes.object,
        title: PropTypes.string,
        description: PropTypes.string,
        actionHref: PropTypes.string,
        actionText: PropTypes.string,
        styles: PropTypes.object,
    }

    return (
        <>
            {/* Grid Start */}
            <div className={`${styles.mainCardBody}`}>
                <div
                    className={`grid grid-rows-4 place-items-center ${styles.mainCardBorder} `}
                >
                    {/* Grid Row 1: Card Image */}
                    <img
                        src={imageSrc}
                        alt={title}
                        className={` lg:object-fit row-auto h-full w-full ${
                            customCSS.image ? customCSS.image : ''
                        }`}
                    />

                    {/* Grid Row 2: Card Title */}
                    <h5 className={`row-auto  ${styles.mainCardTitle}`}>
                        {title}
                    </h5>

                    {/* Grid Row 3: Card Description */}
                    <p
                        className={`row-auto px-5 ${styles.mainCardDescription}`}
                    >
                        {description}
                    </p>

                    {/* Grid Row 4: Card Action - Button */}
                    <div className="row-auto  flex w-2/3 items-center justify-center">
                        <a
                            href={actionHref}
                            className={`my-y h-auto w-full rounded-xl border border-black  p-2 text-center text-3xl font-bold text-white transition duration-300 ease-in-out hover:opacity-50 ${
                                customCSS.letsGoBtn
                                    ? customCSS.letsGoBtn
                                    : 'bg-blue-500'
                            }`}
                        >
                            {actionText}
                        </a>
                    </div>
                </div>
            </div>
            {/* Grid End */}
        </>
    )
}

export default Card
