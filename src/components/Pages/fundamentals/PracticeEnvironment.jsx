function PracticeEnvironment() {
    return (
        <div className="container">
            <h1 className="text-center text-5xl">
                How to Setup a Practice Environment in VS Code{' '}
            </h1>
            <p class="text-pretty pb-12 text-center text-xl">
                This video will show you how to set up a practice environment in
                VS Code step by step. At the end you should know how to get the
                site setup, and start coding so that you can play around with
                all the new things you're learning!
            </p>
            <div className="flex justify-center">
                <iframe
                    class="youtube-video"
                    src="https://www.youtube.com/embed/b4g3-xmam_g?si=4oaulklOImNklQf1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    )
}
export default PracticeEnvironment
