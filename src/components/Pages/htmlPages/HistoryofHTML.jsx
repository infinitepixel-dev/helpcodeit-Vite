import History from '@assets/oldHTML.webp'

const HistoryofHTML = () => {
    return (
        <div>
            <div class="mx-auto mt-8 container   p-8">
                <h1 class="mb-4 text-balance text-center text-5xl font-bold">
                    A Lighthearted History of HTML
                </h1>
                    <div>
                        <p class="xs:col-span-2 mb-4 text-xl"><img
                        src={History}
                        alt="History of HTML"
                        class="mx-auto ms-3 rounded-lg w-2/5 float-right hidden sm:block"
                    />
                            Alright, let's talk about HTML, the unsung hero of the
                            web. Picture it: the early '90s. The internet was this
                            wild, untamed frontier, and along came HTML to bring
                            some order to the chaos. HTML, or{' '}
                            <strong>HyperText Markup Language</strong> if you want
                            to get fancy, is basically the foundation of every web
                            page you’ve ever visited. Think of it as the skeleton
                            that gives structure to the body of the web.
                        </p>
                                        <p class="mb-4 text-xl">
                        So, where did HTML come from, and why does it even exist?
                        Let's rewind to the time when dial-up internet was the
                        latest and greatest, and people were still figuring out what
                        the heck "surfing the web" meant. Tim Berners-Lee, a British
                        scientist working at CERN (you know, the folks with the
                        giant particle accelerator), was tinkering with ways to
                        share information with colleagues. In 1991, he cooked up
                        HTML as a simple way to structure and link documents so
                        people could easily navigate this new thing called the World
                        Wide Web.
                                        </p>
                    </div>


                <div className="my-5 rounded-lg border border-gray-300 bg-slate-200 p-1 text-center text-xl text-black shadow-md">
                    <span className="font-bold">
                        Why was the HTML developer always calm?
                    </span>{' '}
                    <br />
                    Because they had good tags!
                </div>

                <p class="mb-4 text-xl">
                    HTML was a game-changer. Before HTML, sharing information
                    online was like trying to get your grandma to text &ndash;
                    it just wasn't happening smoothly. HTML made it easy to
                    create links, so you could jump from one document to another
                    with a simple click. Imagine trying to research something
                    without hyperlinks &ndash; you'd be opening and closing
                    documents like a maniac. HTML brought order and simplicity.
                </p>

                <p class="mb-4 text-xl">
                    HTML's magic lies in its tags. These little pieces of code
                    tell your browser how to display content. For instance, if
                    you want a headline, you wrap your text in{' '}
                    <code className="border-none shadow-none">&lt;h1&gt;</code>{' '}
                    tags, like this:{' '}
                    <code className="border-none shadow-none">
                        &lt;h1&gt;Welcome to My Website!&lt;/h1&gt;
                    </code>
                    . Want a paragraph? Just slap some{' '}
                    <code className="border-none shadow-none">&lt;p&gt;</code>{' '}
                    tags around your text:{' '}
                    <code className="border-none shadow-none">
                        &lt;p&gt;This is a paragraph, nice and neat.&lt;/p&gt;
                    </code>
                    . It’s like teaching your browser to read your mind &ndash;
                    or at least your code.
                </p>

                <p class="mb-4 text-xl">
                    Now, HTML isn't a programming language. It doesn't do logic
                    or calculations. It’s more like a language for giving your
                    content structure and style. It tells the browser, "Hey,
                    this part is a heading, that part is a paragraph, and this
                    bit over here? Yeah, that's a list." Speaking of lists, HTML
                    loves lists. You can have ordered lists (
                    <code className="border-none shadow-none">&lt;ol&gt;</code>)
                    for when things need to be in a specific order, and
                    unordered lists (
                    <code className="border-none shadow-none">&lt;ul&gt;</code>)
                    for everything else. It's as easy as{' '}
                    <code className="border-none shadow-none">&lt;li&gt;</code>{' '}
                    this and{' '}
                    <code className="border-none shadow-none">&lt;li&gt;</code>{' '}
                    that.
                </p>

                <p class="mb-4 text-xl">
                    Let's not forget about links, the backbone of the web. With
                    HTML, you can create links using the{' '}
                    <code className="border-none shadow-none">&lt;a&gt;</code>{' '}
                    tag, short for "anchor." It's like saying, "Hey, browser,
                    anchor this text to another location." You just need an{' '}
                    <code className="border-none shadow-none">href</code>{' '}
                    attribute to specify the destination. So,{' '}
                    <code className="border-none shadow-none">
                        &lt;a href="https://example.com"&gt;Click me!&lt;/a&gt;
                    </code>{' '}
                    creates a link that’ll whisk you away to Example.com when
                    clicked. Magical, right?
                </p>

                <div className="my-5 rounded-lg border border-gray-300 bg-slate-200 p-1 text-center text-xl text-black shadow-md">
                    <span className="font-bold">
                        Why did the HTML break up with the CSS?
                    </span>{' '}
                    <br />
                    Because it heard the CSS was cheating with JavaScript.
                </div>
                <p class="mb-4 text-xl">
                    Images are another biggie. Imagine the web without cat
                    memes! HTML makes adding images a breeze with the{' '}
                    <code className="border-none shadow-none">&lt;img&gt;</code>{' '}
                    tag. You just tell it where to find the image using the{' '}
                    <code className="border-none shadow-none">src</code>{' '}
                    attribute, like so:{' '}
                    <code className="border-none shadow-none">
                        &lt;img src="cat-meme.jpg" alt="A hilarious cat
                        meme"&gt;
                    </code>
                    . The <code className="border-none shadow-none">alt</code>{' '}
                    attribute is there for accessibility, describing the image
                    for people who can’t see it.
                </p>

                <p class="mb-4 text-xl">
                    As the web grew, so did HTML. Early versions were pretty
                    basic, but over time, HTML evolved to handle more complex
                    layouts and multimedia. HTML5, the latest and greatest
                    version, brought a ton of new features to the table. Video
                    and audio tags, for instance, mean you can embed media
                    directly into your web pages without relying on pesky
                    plugins. Want to embed a video? Just use{' '}
                    <code className="border-none shadow-none">
                        &lt;video src="video.mp4" controls&gt;&lt;/video&gt;
                    </code>
                    , and boom &ndash; instant streaming.
                </p>

                <p class="mb-4 text-xl">
                    HTML also introduced semantic elements in HTML5, which are
                    tags that describe the purpose of the content. Instead of
                    using a bunch of{' '}
                    <code className="border-none shadow-none">&lt;div&gt;</code>{' '}
                    tags and hoping for the best, you now have tags like{' '}
                    <code className="border-none shadow-none">
                        &lt;header&gt;
                    </code>
                    ,{' '}
                    <code className="border-none shadow-none">
                        &lt;footer&gt;
                    </code>
                    ,{' '}
                    <code className="border-none shadow-none">
                        &lt;article&gt;
                    </code>
                    , and{' '}
                    <code className="border-none shadow-none">
                        &lt;section&gt;
                    </code>
                    . These help browsers and screen readers understand the
                    structure of your page, making the web a more accessible and
                    organized place.
                </p>

                <div className="my-5 rounded-lg border border-gray-300 bg-slate-200 p-1 text-center text-xl text-black shadow-md">
                    <span className="font-bold">
                        Why did the &lt;div&gt; tag break up with the
                        &lt;span&gt; tag?
                    </span>{' '}
                    <br />
                    Because it needed more space.
                </div>
                <p class="mb-4 text-xl">
                    Now, let’s address the elephant in the room: HTML alone
                    doesn't make your web pages look pretty. For that, you need
                    CSS (Cascading Style Sheets), HTML's stylish sidekick. While
                    HTML structures the content, CSS handles the design &ndash;
                    colors, fonts, layout, all the eye candy. Together, they’re
                    the dynamic duo of web design, like Batman and Robin, but
                    for the internet.
                </p>

                <p class="mb-4 text-xl">
                    Learning HTML is like learning to ride a bike. At first, you
                    might wobble a bit, and maybe even fall off, but once you
                    get the hang of it, you'll be zooming around the web,
                    creating pages like a pro. Start with the basics: headings,
                    paragraphs, links, and images. Experiment with lists and
                    tables. Then, move on to forms, where you can create
                    interactive elements like text boxes and buttons.
                </p>

                <p class="mb-4 text-xl">
                    One of the best things about HTML is that it's incredibly
                    forgiving. Miss a closing tag? Your page will probably still
                    work. Mess up an attribute? The browser might just shrug and
                    move on. It's like the cool teacher who lets you retake
                    tests until you get it right. But don’t get too sloppy
                    &ndash; good HTML is clean HTML, and a well-structured page
                    is easier to style and maintain.
                </p>

                <div className="my-5 rounded-lg border border-gray-300 bg-slate-200 p-1 text-center text-xl text-black shadow-md">
                    <span className="font-bold">
                        What did the HTML say to the CSS?
                    </span>{' '}
                    <br />
                    "You're looking stylish today!"
                </div>
                <p class="mb-4 text-xl">
                    So, why should you care about HTML? Because it’s the
                    foundation of everything you see on the web. Whether you're
                    browsing social media, shopping online, or reading the
                    latest news, HTML is at the heart of it all. Understanding
                    HTML gives you the power to create your own corner of the
                    internet, from simple personal blogs to complex, interactive
                    web applications.
                </p>

                <p class="text-xl ">
                    In conclusion, HTML is the bedrock of web development. Born
                    from the need to share information easily, it has grown and
                    evolved alongside the web itself. It's straightforward,
                    forgiving, and incredibly powerful in its simplicity. So,
                    grab your keyboard, fire up your favorite text editor, and
                    start exploring the world of HTML. Who knows? You might just
                    build the next great website &ndash; or at least a killer
                    page about your favorite hobbies.{' '}
                </p>
                <p className="satisfyFont mb-14 mt-4 text-center text-5xl font-bold">
                    Happy coding!
                </p>
            </div>
        </div>
    )
}

export default HistoryofHTML
