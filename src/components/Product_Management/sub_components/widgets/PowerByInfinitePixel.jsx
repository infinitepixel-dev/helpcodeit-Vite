//PowerByInfinitePixel.jsx
import ip_logo from '../../assets/images/ip_logo.png'

function PowerByInfinitePixel() {
    return (
        <>
            <span className="text-xs">Power By: Infinite Pixel</span>
            <a
                //TODO uncomment this line one the website is live
                // href="https://infinitepixel.dev"
                target="_blank"
                rel="noreferrer"
            >
                <img src={ip_logo} alt="Infinite Pixel LLC Logo" />
            </a>
        </>
    )
}

export default PowerByInfinitePixel
