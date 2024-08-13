import { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { PodcastIcon } from 'lucide-react'

const YouTubeLiveStream = ({ apiKey, channelId }) => {
    const [liveVideoId, setLiveVideoId] = useState('')

    useEffect(() => {
        const fetchLiveStream = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
                )

                // console.log('YT API response: ', response)

                const data = await response.json()
                console.log('YT API Data:', data)

                if (data.items && data.items.length > 0) {
                    setLiveVideoId(data.items[0].id.videoId)
                }
            } catch (error) {
                console.error('Error fetching live stream data:', error)
            }
        }

        fetchLiveStream()
    }, [apiKey, channelId])

    if (!liveVideoId) {
        return (
            <div className="mt-5 text-center text-rose-500">
                No live stream currently ongoing.
                <span className="ml-2 inline-flex items-center ">
                    <PodcastIcon />
                </span>
            </div>
        )
    }

    return (
        <div>
            <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${liveVideoId}`}
                title="YouTube Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

YouTubeLiveStream.propTypes = {
    apiKey: propTypes.string.isRequired,
    channelId: propTypes.string.isRequired,
}

export default YouTubeLiveStream
