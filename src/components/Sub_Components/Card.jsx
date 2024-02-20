import PropTypes from "prop-types";

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
  };

  return (
    <>
      {/* Grid Start */}
      <div className={`${styles.mainCardBody}`}>
        <div
          className={`grid grid-rows-4 pb-5 place-items-center ${styles.mainCardBorder}  gap-y-4`}
        >
          {/* Grid Row 1: Card Image */}
          <img
            src={imageSrc}
            alt={title}
            className={`row-span-1 w-full h-auto object-cover ${
              customCSS.image ? customCSS.image : ""
            }`}
          />

          {/* Grid Row 2: Card Title */}
          <h5 className={`row-span-1  ${styles.mainCardTitle}`}>{title}</h5>

          {/* Grid Row 3: Card Description */}
          <p className={`row-span-1 m-5 ${styles.mainCardDescription}`}>
            {description}
          </p>

          {/* Grid Row 4: Card Action - Button */}
          <div className="row-span-1  w-2/3 flex justify-center items-center">
            <a
              href={actionHref}
              className={`w-full h-auto text-3xl text-center text-white p-2  my-5 rounded-xl border border-black font-bold hover:opacity-50 transition duration-300 ease-in-out ${
                customCSS.letsGoBtn ? customCSS.letsGoBtn : "bg-blue-500"
              }`}
            >
              {actionText}
            </a>
          </div>
        </div>
      </div>
      {/* Grid End */}
    </>
  );
}

export default Card;
