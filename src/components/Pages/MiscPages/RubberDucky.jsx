import rubberDucky from '@assets/RubberDucky.webp'
import devDuck from '@assets/rubberduckdeveloper.webp'

const RubberDucky = () => {
    return (
        <div className="container mx-auto px-12 py-8">
            <div className="flex flex-wrap   ">
                <h1 className="mx-auto mb-6 items-center text-pretty text-6xl font-bold">
                    The <br /> Rubber Ducky <br /> Method
                </h1>
                <img
                    src={rubberDucky}
                    alt="Rubber Ducky"
                    className="mx-auto rounded-full border-8 border-red-800"
                    width="200rem"
                />
                <hr className="my-8 ms-10 w-full border-t-2 border-gray-800 dark:border-gray-300" />
            </div>

            <div className="space-y-6">
                <section>
                    <h2 className="mb-3 text-2xl font-semibold">
                        What is the Rubber Ducky Method?
                    </h2>
                    <p className="text-lg">
                        The Rubber Ducky Method is a simple yet effective
                        technique for debugging and reviewing code. It is widely
                        used, and taught by many in the tech industry and has
                        even become a tradition. It involves explaining your
                        code, line by line, to an inanimate object –
                        traditionally, a rubber duck.
                    </p>
                    <p className="text-lg">
                        The method&apos;s full origins may never be known, but
                        the book &apos;The Pragmatic Programmer&apos; by Andrew
                        Hunt and David Thomas is where most of us learned about
                        it. The book is an excellent read, that goes beyond just
                        the coding parts of software engineering. Last we saw it
                        was in its 20th edition, with the first one printed in
                        1999.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-2 md:col-span-1">
                        <section>
                            <h2 className="mb-3 text-2xl font-semibold">
                                How it Works
                            </h2>
                            <ol className="list-inside list-decimal space-y-2">
                                <li>Get a rubber duck (or any object)</li>
                                <li>Place it next to your computer</li>
                                <li>
                                    Explain your code to the duck, line by line
                                </li>
                                <li>
                                    As you explain, you&apos;ll often realize
                                    the solution to your problem!
                                </li>
                            </ol>
                        </section>
                        <section>
                            <h2 className="mb-3 text-2xl font-semibold">
                                Why it&apos;s Effective
                            </h2>
                            <ul className="list-inside list-disc space-y-2">
                                <li>
                                    Forces you to articulate your thought
                                    process
                                </li>
                                <li>
                                    Helps identify logical errors or gaps in
                                    your reasoning
                                </li>
                                <li>
                                    Encourages thorough understanding of your
                                    own code
                                </li>
                                <li>
                                    Can reveal overlooked assumptions or edge
                                    cases
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div>
                        <img
                            src={devDuck}
                            alt="developer holding a rubber duck"
                            className="hidden rounded-lg md:block "
                        />
                    </div>
                </div>

                <section>
                    <h2 className="mb-3 text-2xl font-semibold">
                        Tips for Success
                    </h2>
                    <div className="rounded-lg border border-zinc-700 bg-slate-300 p-4 dark:border-gray-200 dark:bg-gray-700 dark:text-white">
                        <ul className="list-none space-y-2">
                            <li>
                                🦆 When the code gets tough, and everything
                                looks right, take a break!
                            </li>
                            <li>
                                🦆 Don&apos;t skip any details, no matter how
                                obvious they seem, it&apos;s a duck, he/she
                                doesn&apos;t know JavaScript!
                            </li>
                            <li>
                                🦆 Be patient and thorough in your explanation,
                                otherwise the duck may never learn to code.
                            </li>
                            <li>
                                🦆 If you&apos;re stuck, try explaining the
                                problem to the duck, but from a different angle.
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-semibold">Remember</h2>
                    <p className="text-lg italic">
                        &quot;If it looks like a duck, swims like a duck, and
                        quacks like a duck, then it probably is a duck.&quot;
                    </p>
                    <p className="mt-2 text-base">
                        But in this case, it&apos;s a rubber duck helping you
                        solve coding problems!
                    </p>
                </section>
            </div>

            <hr className="my-8 ms-10 w-full border-t-2 border-gray-800 dark:border-gray-300" />
            <h2 className="text-4xl">Where to get a duck...</h2>
            <ul>
                <li className="text-2xl">
                    <a href="https://ducksinthewindow.com/">
                        Duck&apos;s in the Window
                    </a>{' '}
                    - This is the coolest site to get a duck at!
                </li>
                <li className="text-2xl">
                    <a href="https://www.walmart.com/search/?query=rubber%20duck">
                        Walmart
                    </a>
                </li>
                <li className="text-2xl">
                    <a href="https://www.amazon.com/s?k=rubber+duck&ref=nb_sb_noss_2">
                        Amazon
                    </a>
                </li>
            </ul>

            <footer className="mt-8 text-center">
                <p className="text-sm">
                    Now comes the fun part! Go forth and adopt your duck 🐥
                </p>
            </footer>
        </div>
    )
}

export default RubberDucky
