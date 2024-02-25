import StringMethodsArray from "./MethodArrays/StringMethodsArray"
import MethodComponent from "./MethodComponent"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion"

function StringMethods() {
    return (
        <div>
            <div className="container">
                <h1 className="pb-2 pt-8 text-center text-6xl robotoSlab">
                    String Methods
                </h1>
                <h2 className="pb-5 text-center text-3xl">
                    Helping You Work With Strings...
                </h2>
                <hr className="border border-black dark:border-white" />
                <div className="my-7 text-center text-2xl">
                    <p>
                        Below is a list of string methods that are commonly used
                        in JavaScript.{' '}
                    </p>
                    <p>
                        {' '}
                        Click on the method to see an example of how to use it.{' '}
                    </p>
                </div>

                <div>
                    <ul>
                        {StringMethodsArray.map((StringItem, index) => (
                            <li key={index}>
                                <div className="container">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index + 1}`}
                                        >
                                            <AccordionTrigger>
                                                <h4 className="text-xl font-bold">
                                                    {StringItem.title}
                                                </h4>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div>
                                                    <MethodComponent
                                                        item={StringItem}
                                                    />
                                                </div>
                                            </AccordionContent>
                                            <hr className="border-1 border-black dark:border-white" />
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StringMethods
