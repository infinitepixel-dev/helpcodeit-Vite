
import initialSetup from '../../assets/Getting Started.svg';
import arrayMethods from '../../assets/Array Methods.svg';
import practiceEnv from '../../assets/Practice Environment Title.svg';
import codeproblems from '../../assets/codeproblemscardtitle.png';


import { Link } from 'react-router-dom'

export default function MainCards() {

    const cardData = [
        {
            id: 1,
            imageSrc: codeproblems,
            customCSS: {
                image: 'border-black bg-stone-400 dark:bg-stone-500',
                letsGoBtn: 'bg-red-900',
            },
            title: 'Code Problems',
            description: 'Free coding problems to help level up your skills, and practice those fundamentals.',
            actionText: "Let's Go",
            link: 'https://codeproblems.michaelvarnell.com',
            external: true,
        },
        {
            id: 2,
            imageSrc: initialSetup,
            customCSS: {
                image: 'border-black bg-green-200 dark:bg-green-500',
                letsGoBtn: 'bg-orange-800',
            },
            title: 'Initial Setup',
            description: 'This page will help you setup your computer to begin programming',
            actionText: "Let's Go",
            link: '/fundamentals/Installs',
            external: false,
        },
        {
            id: 3,
            imageSrc: arrayMethods,
            customCSS: {
                image: 'border-black bg-blue-700 dark:bg-blue-950',
                letsGoBtn: 'bg-pink-800',
            },
            title: 'Need to see the available options?',
            description: 'This page contains a table with all the array methods, with explanations and examples.',
            actionText: 'See the Table',
            link: '/javascriptPrincipals/ArrayMethods',
            external: false,
        },
        { id: 4,
            imageSrc: practiceEnv,
            customCSS: {
                image: 'border-black bg-yellow-500 dark:bg-yellow-600',
                letsGoBtn: 'bg-yellow-800',
            },
            title: 'Want a place to code?',
            description: 'This page has a video to walk you through getting a project started to get off the ground coding in Javascript.',
            actionText: 'See Video',
            link: '/fundamentals/SettingUpPracticeEnvironment',
            external: false,
        },
    ];

    return (
        <div className=" grid gap-14 justify-center rounded-2xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 container ">
            {cardData.map((card, index) => (
                <div key={index} className='h-80 dark:bg-gray-800 rounded-3xl border border-gray-300 dark:border-gray-700 grid  align-middle shadow-xl'>
                    <img src={card.imageSrc} alt={card.title} className={` mx-auto w-full border-b dark:border-white rounded-b rounded-3xl ${card.customCSS.image}`} />
                    <h2 className="text-center text-black dark:text-white text-2xl font-bold">{card.title}</h2>
                    <p className="text-center text-black dark:text-white">{card.description}</p>
                    <div className="mt-auto mb-5 ">
                        <Link to={card.link} className={`block py-2 px-4 w-fit mx-auto rounded-full font-bold  ${card.customCSS.letsGoBtn}`}>
                            {card.actionText}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
