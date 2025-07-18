import fetchDogDark from '../../../../../assets/fetchdog.svg'
import fetchDogLight from '../../../../../assets/fetchdog white.svg'

import FetchArray from '../CRUD_Operations/FetchArray'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../../../../ui/accordion'
import CRUD from '../CRUD_Operations/CRUD'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '../../../../ui/hover-card'

function Fetch() {
    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return (
        <div className="container">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 ">
                <div className="my-auto md:col-span-2">
                    <h1 className="my-10 text-center text-8xl ">Fetch</h1>
                    <h2 className="text-center text-5xl">
                        Using fetch to make API Calls Simple
                    </h2>
                </div>
                <div className="mx-auto sm:my-8">
                    <img
                        src={!isDark ? fetchDogDark : fetchDogLight}
                        alt="Dog Fetching"
                        className="my-auto"
                    />
                </div>
            </div>
            <hr className="border-1 my-2 border-black dark:border-white" />
            <h3 className="text-center text-2xl font-bold">
                Before we get into the code, let&apos;s talk about Fetch.
            </h3>
            <p className="py-2">
                Fetch is a modern replacement for XMLHttpRequest. It is a
                built-in JavaScript function that allows you to make network
                requests similar to XMLHttpRequest. Fetch is built into the
                global window object, and has a much cleaner and more modern
                syntax than XMLHttpRequest.
            </p>
            <p className="py-2">
                Fetch is a promise-based API, which means that it returns a
                promise. This makes it easier to work with than XMLHttpRequest,
                which uses event listeners to handle asynchronous requests.
            </p>
            <p className="py-2">
                Fetch is supported in all modern browsers, and is the
                recommended way to make network requests in JavaScript.
            </p>
            <p className="py-2">
                We use Async/Await to handle the promise returned by Fetch. This
                makes the code cleaner and easier to read and it also makes it
                easier to handle errors.
            </p>
            <p className="py-2">
                It makes it easier to follow the errors by using try/catch
                blocks. This is a much cleaner way to handle errors than using
                the .then() and .catch() methods.
            </p>
            <p className="py-2">
                Fetch is a great way to make network requests in JavaScript, and
                is the recommended way to make network requests in modern web
                applications.
            </p>
            <p>
                <HoverCard>
                    <HoverCardTrigger>
                        <span className="font-extrabold  text-blue-800 underline dark:text-blue-400">
                            Hover to learn more about why JSON.stringify and
                            JSON.parse are used in the examples below.
                        </span>
                    </HoverCardTrigger>
                    <HoverCardContent
                        className="m-5 w-2/12 border border-black bg-slate-200 px-10 font-extrabold shadow-lg"
                        customClass=" bg-slate-200  dark:bg-gray-700"
                    >
                        We use JSON.stringify to convert the data to a JSON
                        string before we send it to the server. This is a best
                        practice when working with Fetch, as it ensures that the
                        data is sent in the correct format. The server will
                        expect the data to be in JSON format, so it is important
                        to convert the data to a JSON string before sending it.
                        We also will use JSON.parse to convert the JSON string
                        back to an object when we receive the data from the
                        server. This is a best practice when working with Fetch,
                        as it ensures that the data is in the correct format
                        when we receive it from the server.
                    </HoverCardContent>
                </HoverCard>
            </p>
            <p className="py-3">
                Feel free to use the examples below as a template to make your
                own network requests using Fetch.
            </p>
            <div className="container">
                <Accordion type="single" collapsible>
                    {FetchArray.map((Object, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            {/* {console.log("Accordian object:",Object)} */}
                            <AccordionTrigger>
                                <h4 className="mb-4 mt-10 text-2xl font-bold">
                                    {Object.title}
                                </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <CRUD Object={Object} />
                            </AccordionContent>
                            <hr className="border-1 my-2 border-black dark:border-white" />
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
export default Fetch
