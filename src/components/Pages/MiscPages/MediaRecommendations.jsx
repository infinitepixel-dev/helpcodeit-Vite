import React from 'react';

const podcasts = [
    {
        title: 'Syntax',
        link: 'https://syntax.fm/',
        description: 'A Tasty Treats Podcast for Web Developers. These episodes are often a mix of fun and informative. There are times you will want to watch via youtube to see the code examples.',
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
];

const PodcastCard = ({ podcast }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={podcast.img} alt={podcast.title} className="w-full object-cover" />
    <div className="p-4">
      <h2 className="text-xl text-gray-600 font-semibold mb-2">{podcast.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{podcast.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {podcast.category || 'Uncategorized'}
        </span>
        <a
          href={podcast.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          Listen
        </a>
      </div>
    </div>
  </div>
);

const MediaRecommendations = () => (
  <div className="container mx-auto px-4 py-8 mb-14">
    <h1 className="text-3xl font-bold text-center mb-8">Our Recommended Software Development and Tech Podcasts</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {podcasts.map((podcast, index) => (
        <PodcastCard key={index} podcast={podcast} />
      ))}
    </div>
  </div>
);

export default MediaRecommendations;