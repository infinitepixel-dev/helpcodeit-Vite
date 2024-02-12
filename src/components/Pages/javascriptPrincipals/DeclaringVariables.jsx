

export default function DeclaringVariables() {
  return (
    <div className='container mx-auto mukataFont'>
                <div className='flex flex-wrap mt-20'>
                    <h1 className='text-6xl font-bold text-center w-full'>
                        Understanding Variables in JavaScript
                    </h1>

                    <section>
                        <h2 className='text-4xl'>What is a Variable?</h2>
                        <p className='text-lg font-bold'>
                            A variable is like a box where we can keep things. In programming,
                            we use variables to store information like numbers, words, or more
                            complex stuff. We can change the information in the box, and we can use the information in the box to do things. This makes variables very useful!
                        </p>
                    </section>

                    <iframe
                        className='youtube-video my-20'
                        src='https://www.youtube.com/embed/BNETE_JL0cw?si=NgSGO9PYtzWBQTWF'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowfullscreen
                    ></iframe>
                </div>

                <section>
                    <h2>Using &apos;var&apos;</h2>
                    <p className="text-lg">
                        The &apos;var&apos; way to make a variable is the old way. We
                        don&apos;t use it anymore, but you might still see it. The scope of
                        var is global so it is usable inside and out of functions and
                        conditionals, which can create issues. Here&apos;s an example:
                    </p>
                    <pre>
                        <code className='javascript'>
                            var myName = &apos;Alice&apos;;
                        </code>
                    </pre>
                </section>

                <section>
                    <h2>Using &apos;let&apos;</h2>
                    <p>
                        &apos;let&apos; is the new way to make a variable that you can change
                        later. Here&apos;s an example:
                    </p>
                    <pre>
                        <code className='javascript'>
                            let myAge = 10; myAge = 11; // You can change it!
                        </code>
                    </pre>
                </section>

                <section>
                    <h2>Using &apos;const&apos;</h2>
                    <p>
                        If you want to make a variable that never changes, use
                        &apos;const&apos;. Here&apos;s how:
                    </p>
                    <pre>
                        <code className='javascript'>
                            const mySchool = &apos;Cool School&apos;;
                        </code>
                    </pre>
                </section>

                <section className="pb-32">
                    <h2>Summary</h2>
                    <p>
                        Use &apos;var&apos; if you see old code, &apos;let&apos; if you want
                        to change the variable, and &apos;const&apos; if you never want it to
                        change. Happy coding!
                    </p>
                </section>
            </div>
  );
}
