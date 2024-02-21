import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { AJAXArray, AXIOSArray } from './CRUD_Operations/AJAXArray'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../../../ui/accordion'
import CRUD from './CRUD_Operations/CRUD'

function AJAX() {
    return (
        <div className="container text-lg">
            <h1 className="my-10 text-center text-6xl">
                Using AJAX, Axios and jQuery for CRUD Operations
            </h1>
            <h3 className="text-center text-2xl font-bold">
                In this page we will show first how to use AJAX and then how to
                use Axios to perform CRUD operations with an API.
            </h3>
            <h3 className="text-center text-2xl font-bold">
                We will also show how to use jQuery to perform CRUD operations
                with an API.
            </h3>
            <hr className="border-1 my-2 border-black dark:border-white" />
            <div className="">
                <h4 className="pt-14 text-center text-4xl font-bold">AJAX</h4>
                <p>
                    AJAX is a technique for creating fast and dynamic web pages.
                    AJAX allows web pages to be updated asynchronously by
                    exchanging small amounts of data with the server behind the
                    scenes. This means that it is possible to update parts of a
                    web page, without reloading the whole page.
                </p>
                <p>
                    In the context we are using it here, we will be using AJAX
                    to perform CRUD operations with an API.
                </p>
                <p>
                    Using AJAX to perform CRUD operations with an API is very
                    simple. Below are examples of how to use AJAX to perform
                    CRUD operations with an API. Feel free to copy and paste the
                    code into your own project. These are setup as a template
                    for you to use.
                </p>

                <div className="container">
                    <Accordion type="single" collapsible>
                        {AJAXArray.map((AJAXitem, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                            >
                                <AccordionTrigger>
                                    <h4 className="mb-4 mt-10 text-2xl font-bold">
                                        {AJAXitem.title}
                                    </h4>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <CRUD AJAXitem={AJAXitem} hljs={hljs} />
                                </AccordionContent>
                                <hr className="border-1 my-2 border-black dark:border-white" />
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="container">
                    <Accordion type="single" collapsible>
                        {AXIOSArray.map((AXIOSitem, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                            >
                                <AccordionTrigger>
                                    <h4 className="mb-4 mt-10 text-2xl font-bold">
                                        {AXIOSitem.title}
                                    </h4>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <CRUD AJAXitem={AXIOSitem} hljs={hljs} />
                                </AccordionContent>
                                <hr className="border-1 my-2 border-black dark:border-white" />
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
export default AJAX
