import { Helmet } from 'react-helmet-async'
import propTypes from 'prop-types'
import YoutubeChannelRecommendations from '@subComponents/YoutubeChannelRecommendations'

const podcasts = [
    {
        title: 'Syntax',
        link: 'https://syntax.fm/',
        description:
            'A Tasty Treats Podcast for Web Developers. These episodes are often a mix of fun and informative. There are times you will want to watch via youtube to see the code examples.',
        img: 'https://begin.com/_public/blog/post-assets/syntaxfm-0bcdedfdb4.png',
        category: 'Web Development',
    },
    {
        title: 'Stack Overflow Podcast',
        link: 'https://stackoverflow.blog/podcast/',
        description:
            'The Stack Overflow podcast is a frank and funny conversation about what it means to work in software and how code is reshaping our world.',
        img: 'https://i.scdn.co/image/ab6765630000ba8a493e8f09033e2ed1d79ee18a',
        category: 'General Software Development',
    },
    {
        title: 'CodingBlocks.net',
        link: 'https://www.codingblocks.net/',
        description:
            'A podcast covering software development topics, tools, techniques, and technologies.',
        img: 'https://yt3.googleusercontent.com/ytc/AIdro_k0M7dRCveUDbdL1b3StjYryAc9nhCDv5krMuqC_jmwp0E=s900-c-k-c0x00ffffff-no-rj',
        category: 'General Software Development',
    },
    {
        title: 'The Changelog',
        link: 'https://changelog.com/podcast',
        description:
            'Conversations with the hackers, leaders, and innovators of software development.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdTAubNFmgOt1XvvOS9jD1pZDsJeKUB5EkQ&s',
        category: 'General Software Development',
    },
    {
        title: 'Frontend Happy Hour',
        link: 'https://frontendhappyhour.com/',
        description:
            'A podcast featuring a panel of Software Engineers from Netflix, Evernote, Atlassian & LinkedIn talking over drinks about all things Front End development.',
        img: 'https://i.scdn.co/image/ab6765630000ba8a144f9e61e8a815833a1def11',
    },
    {
        title: 'This Week in Tech',
        link: 'https://twit.tv/shows/this-week-in-tech',
        description:
            'A weekly roundtable discussion about current technology events. Really we could recommend all the TWIT.tv podcasts, as they are all great.',
        img: 'https://elroy.twit.tv/sites/default/files/styles/twit_album_art_300x300/public/images/shows/this_week_in_tech/album_art/twit_2022albumart_standard_2048.jpg',
        category: 'General Tech',
    },
    {
        title: 'The AI Daily Brief',
        link: 'https://podcasts.apple.com/us/podcast/the-ai-daily-brief-formerly-the-ai-breakdown/id1680633614',
        description:
            'A daily podcast that covers the latest news in artificial intelligence.',
        img: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/41472609/675e9452d5e46741.jpg',
        category: 'AI',
    },
    {
        title: 'Hard Fork',
        link: 'https://www.nytimes.com/column/hard-fork',
        description:
            'The New York Times puts on this podcast that covers some of the latest cultural topics in tech.',
        img: 'https://static01.nyt.com/images/2022/09/28/podcasts/hard-fork-album-art/hard-fork-album-art-thumbLarge-v2.png',
        category: 'General Tech',
    },
    {
        title: 'React Native Radio',
        link: 'https://reactnativeradio.com',
        description:
            'Exploring React Native together. Panel discussions, interviews, and more.',
        img: 'https://image.simplecastcdn.com/images/fd1212b1-7d08-4c5a-8506-00188a4c6528/3d1668b3-dc87-4f65-bac4-fad750892e95/640x640/rnr-cover-art.jpg',
        category: 'React Native',
    },
    {
        title: 'CodePen Radio',
        link: 'https://blog.codepen.io/radio/',
        description:
            "A podcast all about what it's like running a small web software business. The good, the bad, and the ugly.",
        img: 'https://i.scdn.co/image/ab67656300005f1f8963b91871a29dae311761ae',
        category: 'Web Development',
    },
    {
        title: 'Shop Talk',
        link: 'https://shoptalkshow.com',
        description:
            'A weekly podcast about building websites from Dave Rupert and Chris Coyier. Please subscribe where you prefer.',
        img: 'https://shoptalkshow.com/wp-content/themes/shoptalk6/images/logo.png',
        category: 'Web Development',
    },
    {
        title: 'React Podcast',
        link: 'https://reactpodcast.com',
        description: 'Conversations about React with your favorite developers.',
        img: 'https://image.simplecastcdn.com/images/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/20f97d0b-6dab-4005-a995-0ab8fc2cf31c/640x640/1550288890-artwork.jpg',
        category: 'React',
    },
    {
        title: 'The CSS Podcast',
        link: 'https://thecsspodcast.libsyn.com',
        description:
            'Follow Una Kravets and Adam Argyle, Developer Advocates from Google, who gleefully breakdown complex aspects of CSS into digestible episodes covering everything from accessibility to z-index.',
        img: 'https://images.libsyn.com/p/assets/b/a/f/2/baf27719094b3d2fe55e3c100dce7605/unnamed_22.png?h=500&auto=compress',
        category: 'CSS',
    },
]

const PodcastCard = ({ podcast }) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
        <Helmet>
            <title>Media Recommendations | Help Code It</title>

            <meta
                name="description"
                content="Check out our recommended software development and tech podcasts. These podcasts cover a wide range of topics and are great for developers of all levels."
            />
            <meta
                property="og:title"
                content="Media Recommendations | Help Code It"
            />
            <meta
                name="keywords"
                content="Podcasts, Software Development, Tech Podcasts, Coding Podcasts"
            />
            <meta
                rel="canonical"
                href="https://www.helpcodeit.com/media-recommendations"
            />
        </Helmet>
        <img
            src={podcast.img}
            alt={podcast.title}
            className="w-full object-cover"
        />
        <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold text-gray-600">
                {podcast.title}
            </h2>
            <p className="mb-2 text-sm text-gray-600">{podcast.description}</p>
            <div className="flex items-center justify-between">
                <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                    {podcast.category || 'Uncategorized'}
                </span>
                <a
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 transition-colors duration-300 hover:text-blue-700"
                >
                    Listen
                </a>
            </div>
        </div>
    </div>
)

const MediaRecommendations = () => (
    <div className="container mx-auto mb-14 px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
            Our Recommended Youtube Developer Channels
        </h1>
        <YoutubeChannelRecommendations />
        <h1 className="mb-8 text-center text-3xl font-bold">
            Our Recommended Software Development and Tech Podcasts
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {podcasts.map((podcast, index) => (
                <PodcastCard key={index} podcast={podcast} />
            ))}
        </div>
    </div>
)

PodcastCard.propTypes = {
    podcast: propTypes.object,
}

export default MediaRecommendations
