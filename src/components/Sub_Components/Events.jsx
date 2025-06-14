// This is an array of events that will be upcoming.

const events = [
    {
        title: 'Git and GitHub for Beginners Workshop',
        date: 'Saturday August 31st, 2024 (was rescheduled from Aug 24th)',
        time: '3:00 PM pst | 4:00 PM mst | 5:00 PM cst | 6:00 PM est',
        link: 'https://calendly.com/michaelvarnell/git-and-github-basics',
        ISOdate: '2024-08-31T22:00:00.000Z',
        description: `This class will cover Git and GitHub Basics. This will have an overview of how to setup and use Git with GitHub, and will also cover branching, common terminology, pull requests, issues, and other basics.The highlight of this class will be the hands-on practice of using Git and GitHub to collaborate on a example project.`,
        cost: '10',
        show: true,
        youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden"><iframe  src="https://www.youtube.com/embed/k-HrTJiyoAM?si=bAdqUk3pcVrsQ5X5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="top-0 left-0 absolute w-full h-full" allowfullscreen></iframe> `,
    },
    {
        title: 'Boost Learning with AI: 30-Minute Prompt Mastery',
        date: 'Wednesday August 21st, 2024',
        time: '6:00 PM pst | 7:00 PM mst | 8:00 PM cst | 9:00 PM est',
        link: 'https://calendly.com/michaelvarnell/prompting-for-learning',
        ISOdate: '2024-08-22T01:00:00.000Z',
        description: `Unlock the full potential of AI in your learning journey! Join us for a 30-minute, power-packed session where you'll discover the art of crafting effective prompts to get the most insightful and educational responses from AI. Whether you're new to AI or looking to refine your skills, this short course will equip you with practical techniques to enhance your learning experience. Don't miss this opportunity to learn how to ask the right questions and make AI your best study partner!`,
        cost: '4.99',
        show: true,
        youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden"><iframe  src="https://www.youtube.com/embed/j8JeKCCet00?si=lYzEsCYP4X31T5lp" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="top-0 left-0 absolute w-full h-full"
            ></iframe></div>`,
    },
    {
        title: 'Getting Started with Tailwind CSS Workshop',
        date: 'Saturday August 10th, 2024 (was moved from Aug 3rd)',
        time: '3:00 PM pst | 4:00 PM mst | 5:00 PM cst | 6:00 PM est',
        link: 'https://calendly.com/michaelvarnell/beginner-tailwindcss',
        ISOdate: '2024-08-10T22:00:00.000Z',
        description: `Join us for a comprehensive introduction to Tailwind CSS! We'll guide you through the essentials of setting up and learning Tailwind, from understanding core classes to discovering new ones. Learn how to leverage free components effectively, navigate common pitfalls, and enhance your web design skills. Don't miss this opportunity to boost your frontend development expertise with Tailwind CSS! IF THERE ARE ANY ISSUES WITH SIGN UP PLEASE EMAIL US AT michaelvarnell@icloud.com!`,
        cost: '10',
        show: true,
        youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/huuKfJkmTDw?si=xdEt2FvIq3fP0yzH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="top-0 left-0 absolute w-full h-full"
            ></iframe>
          </div>
        `,
    },
    {
        title: 'API Basics Workshop',
        date: 'Saturday August 17th, 2024',
        time: '4:00 PM pst | 5:00 PM mst | 6:00 PM cst | 7:00 PM est',
        link: 'https://calendly.com/michaelvarnell/api-basics-workshop',
        ISOdate: '2024-08-17T23:00:00.000Z',
        description: `Unlock the power of APIs! Join our hands-on workshop where you'll learn how to set up a mock API and master the fundamentals of JavaScript's fetch function. Plus, we'll dive into real API documentation and guide you step-by-step as we implement it live together. Don't miss out on this practical, skill-building experience!`,
        cost: '10',
        show: false,
        youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden"><iframe  src="https://www.youtube.com/embed/dn_wq5QT7cY?si=3o94vRiJFpIYHp53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="top-0 left-0 absolute w-full h-full" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`,
    },
    {
        title: 'Getting Started with Tailwind CSS Workshop',
        date: 'Tuesday August 20th, 2024',
        time: '6:00 PM pst | 7:00 PM mst | 8:00 PM cst | 9:00 PM est',
        link: 'https://calendly.com/michaelvarnell/beginner-tailwindcss',
        ISOdate: '2024-08-21T01:00:00Z',
        description: `WEEKDAY: Join us for a comprehensive introduction to Tailwind CSS! We'll guide you through the essentials of setting up and learning Tailwind, from understanding core classes to discovering new ones. Learn how to leverage free components effectively, navigate common pitfalls, and enhance your web design skills. Don't miss this opportunity to boost your frontend development expertise with Tailwind CSS!`,
        cost: '10',
        show: false,
        youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden">
        <iframe  src="https://www.youtube.com/embed/Mfyh1jjqsfU?si=46zt2bY9khenrkPN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="top-0 left-0 absolute w-full h-full" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>`,
    },
    {
      title: "Git and GitHub for Beginners Workshop",
      date: "Saturday September 28th, 2024",
      time: "3:00 PM pst | 4:00 PM mst | 5:00 PM cst | 6:00 PM est",
      link: "https://calendly.com/michaelvarnell/git-and-github-basics",
      ISOdate: "2024-09-28T22:00:00.000Z",
      description: `This class will cover Git and GitHub Basics. This will have an overview of how to setup and use Git with GitHub, and will also cover branching, common terminology, pull requests, issues, and other basics.The highlight of this class will be the hands-on practice of using Git and GitHub to collaborate on a example project.`,
      cost: "10",
      show: true,
      youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden"><iframe  src="https://www.youtube.com/embed/k-HrTJiyoAM?si=bAdqUk3pcVrsQ5X5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="top-0 left-0 absolute w-full h-full" allowfullscreen></iframe> `,
    },
    {
      title: "Git and Github Collaboration for Beginners Workshop",
      date: "Saturday October 26th, 2024",
      time: "3:00 PM pst | 4:00 PM mst | 5:00 PM cst | 6:00 PM est",
      link: "https://calendly.com/michaelvarnell/git-and-github-basics",
      ISOdate: "2024-10-26T22:00:00.000Z",
      description: `This class will cover Git and GitHub Collaboration Basics. This will have an overview of how to setup and use Git with GitHub, and will also cover branching, common terminology, pull requests, issues, and other basics. The highlight of this class will be the hands-on practice of using Git and GitHub to collaborate on a example project.`,
      cost: "10",
      show: false,
      youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden"><iframe  src="https://www.youtube.com/embed/k-HrTJiyoAM?si=bAdqUk3pcVrsQ5X5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="top-0 left-0 absolute w-full h-full" allowfullscreen></iframe> `,
    },
    {
      title: "Git and Github Collaboration for Beginners Workshop",
      date: "Saturday November 23, 2024",
      time: "3:00 PM pst | 4:00 PM mst | 5:00 PM cst | 6:00 PM est",
      link: "https://calendly.com/michaelvarnell/git-and-github-basics",
      ISOdate: "2024-11-23T22:00:00.000Z",
      description: `This class will cover Git and GitHub Collaboration Basics. This will have an overview of how to setup and use Git with GitHub, and will also cover branching, common terminology, pull requests, issues, and other basics. The highlight of this class will be the hands-on practice of using Git and GitHub to collaborate on a example project.`,
      cost: "10",
      show: true,
      youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden"><iframe  src="https://www.youtube.com/embed/k-HrTJiyoAM?si=bAdqUk3pcVrsQ5X5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="top-0 left-0 absolute w-full h-full" allowfullscreen></iframe> `,
    },
    {
      title: "Git and Github Collaboration for Beginners Workshop",
      date: "Saturday January 4, 2025",
      time: "2:00 PM pst | 3:00 PM mst | 4:00 PM cst | 5:00 PM est",
      link: "https://calendly.com/michaelvarnell/git-and-github-basics",
      ISOdate: "2025-01-04T22:00:00.000Z",
      description: `This class will cover Git and GitHub Collaboration Basics. This will have an overview of how to setup and use Git with GitHub, and will also cover branching, common terminology, pull requests, issues, and other basics. The highlight of this class will be the hands-on practice of using Git and GitHub to collaborate on a example project.`,
      cost: "10",
      show: true,
      youtubeEmbed: `<div class="relative pb-[56.25%] overflow-hidden"><iframe  src="https://www.youtube.com/embed/k-HrTJiyoAM?si=bAdqUk3pcVrsQ5X5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="top-0 left-0 absolute w-full h-full" allowfullscreen></iframe> `,
    }
]

// Sort events by ISOdate
events.sort((a, b) => new Date(a.ISOdate) - new Date(b.ISOdate))
// console.log('Events: ', events)
export default events
