const TermsOfService = () => {
    // get current date mm/dd/yyyy
    const date = new Date().toLocaleDateString()

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lgp-6 w-full max-w-3xl shadow-md">
                <h1 className="mb-6 text-center text-3xl font-bold">
                    Terms of Service
                </h1>
                <p className="mb-4 text-center text-sm">
                    Effective Date: {date}
                </p>

                <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
                <p className="mb-4">
                    Welcome to Help Code It. By using our website, you agree to
                    comply...
                </p>

                <h2 className="mb-4 text-2xl font-semibold">Use of Website</h2>
                <p className="mb-4">
                    You agree to use the website only for lawful purposes...
                </p>

                <h2 className="mb-4 text-2xl font-semibold">
                    Intellectual Property
                </h2>
                <p className="mb-4">
                    All content on this website is the intellectual property of
                    Help Code It...
                </p>

                <h2 className="mb-4 text-2xl font-semibold">
                    Limitation of Liability
                </h2>
                <p className="mb-4">
                    Help Code It is not liable for any damages arising...
                </p>

                <h2 className="mb-4 text-2xl font-semibold">
                    Changes to Terms
                </h2>
                <p className="mb-4">
                    We reserve the right to change these terms at any time...
                </p>

                <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions, contact us at
                    michaelvarnell@icloud.com.
                </p>
            </div>
        </div>
    )
}

export default TermsOfService
