import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Help Code It</title>
                <meta name="description" content="Privacy Policy for Help Code It - Learn about how we protect your information and use data." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-3xl p-6 rounded-lg shadow-md">
                    <h1 className="mb-6 text-3xl font-bold text-center">
                        Privacy Policy
                    </h1>
                    <p className="mb-4 text-sm text-center">
                        Effective Date: 8/13/2024
                    </p>

                    <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
                    <p className="mb-4">
                        At Help Code It, we are committed to protecting your
                        privacy...
                    </p>

                    <h2 className="mb-4 text-2xl font-semibold">
                        Information We Collect
                    </h2>
                    <p className="mb-4">
                        We may collect the following information...
                    </p>

                    <h2 className="mb-4 text-2xl font-semibold">
                        How We Use Your Information
                    </h2>
                    <p className="mb-4">Your information is used to...</p>

                    <h2 className="mb-4 text-2xl font-semibold">
                        How We Protect Your Information
                    </h2>
                    <p className="mb-4">We implement security measures...</p>

                    <h2 className="mb-4 text-2xl font-semibold">
                        Third-Party Services
                    </h2>
                    <p className="mb-4">
                        We may share your information with third-party services...
                    </p>

                    <h2 className="mb-4 text-2xl font-semibold">
                        Changes to This Privacy Policy
                    </h2>
                    <p className="mb-4">We may update this Privacy Policy...</p>

                    <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions, contact us at [Your Contact
                        Information].
                    </p>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
