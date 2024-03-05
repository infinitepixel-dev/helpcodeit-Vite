function Footer() {
    return (
        <div className="fixed bottom-0 w-full flex items-end">
        <div className="fixed bottom-0 mt-5 w-full">

            <footer className="bg-gray-200 p-5 dark:bg-gray-800">
                <div className="flex justify-center space-x-4">
                    {/* copywrite Michael Varnell statement */}
                    <p className="text-lg font-bold">
                        &copy; 2024{' '}
                        <a
                            href="https://michaelvarnell.com"
                            target="_blank"
                            className="underline hover:text-blue-500"
                            rel="noreferrer"
                        >
                            Michael Varnell
                        </a>{' '}
                        &
                        <a
                            href="https://www.linkedin.com/in/matthewthomascox/"
                            target="_blank"
                            className="underline hover:text-blue-500"
                            rel="noreferrer"
                        >
                            Matthew Cox
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    </div>
           
    )
}
export default Footer
