function Footer() {
    return (

        <div className="fixed bottom-0 w-full mt-5">

            <footer className="bg-gray-200 p-5 dark:bg-gray-800">
                <div className="flex justify-center space-x-4">
                    {/* copywrite Michael Varnell statement */}
                    <p className="text-lg font-bold">
                        &copy; 2024{' '}
                        <a
                            href="https://michaelvarnell.com"
                            target="_blank"
                            className="underline hover:text-blue-500"
                        >
                            Michael Varnell
                        </a>{' '}
                        & Matthew Cox
                    </p>
                </div>
            </footer>
        </div>
    )
}
export default Footer
