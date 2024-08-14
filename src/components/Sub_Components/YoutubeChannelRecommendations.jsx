// import { Youtube } from 'lucide-react';

const channels = [
    {
        name: 'Help Code It',
        url: 'https://www.youtube.com/@HelpCodeIt',
        subscribers: '44',
        category: 'Web Development',
        imgURL: 'https://yt3.googleusercontent.com/GBhEftXng7rbt9BpZpE64xb0lxT0Ri8TOnqWG13a9AYjQWkrkrmbMftdh3_3xvAQSU-yESjXyQo=s160-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'Web Dev Simplified',
        url: 'https://www.youtube.com/c/WebDevSimplified',
        subscribers: '1.59M',
        category: 'Web Development',
        imgURL: 'https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'Visual Studio Code',
        url: 'https://www.youtube.com/@code',
        subscribers: '508k',
        category: 'Programming',
        imgURL: 'https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s160-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'GitHub',
        url: 'https://www.youtube.com/c/GitHub',
        subscribers: '396k',
        category: 'Programming',
        imgURL: 'https://yt3.googleusercontent.com/TIjqoYX2wtDSGIzj928euK_ehQh4p_EymUlDbh14ZDrJ4quntQbsURWO4yr6bzYpUX7rjIFxyw=s160-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/c/Freecodecamp',
        subscribers: '9.77M',
        category: 'Web Development',
        imgURL: 'https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s160-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'Traversy Media',
        url: 'https://www.youtube.com/c/traversymedia',
        subscribers: '2.26M',
        category: 'Web Development',
        imgURL: 'https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s160-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'Theo - t3.gg',
        url: 'https://www.youtube.com/@t3dotgg',
        subscribers: '313k',
        category: 'Web Development',
        imgURL: 'https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s160-c-k-c0x00ffffff-no-rj',
    },
    {
        name: 'Programming with Mosh',
        url: 'https://www.youtube.com/c/programmingwithmosh',
        subscribers: '4.04M',
        category: 'Programming',
        imgURL: 'https://yt3.googleusercontent.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s160-c-k-c0x00ffffff-no-rj',
    },
]

const YouTubeChannels = () => {
    return (
        <div className="container p-6 mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-center">
                YouTube Channels We Love
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {channels.map((channel, index) => (
                    <div
                        key={index}
                        className="grid justify-center overflow-hidden text-black transition-shadow duration-300 bg-white border border-gray-300 shadow-md rounded-xl hover:shadow-lg"
                    >
                        <img
                            src={channel.imgURL}
                            alt={channel.name}
                            className="w-screen rounded-md "
                        />
                        <div className="p-4">
                            <div className="flex items-center mb-2">
                                <h3 className="text-xl font-semibold">
                                    {channel.name}
                                </h3>
                            </div>
                            <p className="mb-2">{channel.category}</p>
                            <p className="text-sm font-bold">
                                {channel.subscribers} subscribers
                            </p>
                        </div>
                        <div className="px-4 py-2">
                            <a
                                href={channel.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 bg-red-600 rounded hover:bg-red-700">
                                    Subscribe
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default YouTubeChannels
