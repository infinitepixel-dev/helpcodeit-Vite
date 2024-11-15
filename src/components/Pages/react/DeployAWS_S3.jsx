import { AlertTriangle } from 'lucide-react';

export default function DeployAWS_S3() {
    return (
        <div className="max-w-4xl mx-auto ">
            <div className="">
                <h2 className="pb-4 mb-6 text-3xl font-bold border-b">
                    Deploying a React App to AWS S3
                </h2>
                <div className="space-y-6">
                    <ol className="space-y-6 list-none counter-reset-item">
                        {[
                            {
                                title: "Build Your React App",
                                content: (
                                    <>
                                        <p className="mb-4">Follow these steps to create a production-ready version of your app:</p>
                                        <ol className="pl-6 space-y-2 list-decimal">
                                            <li>Open your terminal</li>
                                            <li>Navigate to your project directory using <code className="px-3">cd your-project-name</code></li>
                                            <li>Make sure all your changes are saved</li>
                                            <li>Run the build command: <code className="px-3">npm run build</code></li>
                                        </ol>
                                        <p className="mt-4">This will create a <code className="px-3">build</code> folder containing optimized files ready for deployment. If you see any errors, make sure all your dependencies are installed by running <code className="px-3">npm install</code> first.</p>
                                    </>
                                )
                            },
                            {
                                title: "Create an AWS Account (if needed)",
                                content: (
                                    <>
                                        <p className="mb-4">Before creating an S3 bucket, you need an AWS account:</p>
                                        <ol className="pl-6 space-y-2 list-decimal">
                                            <li>Visit <a href="https://aws.amazon.com" className="text-blue-500 hover:text-blue-700">aws.amazon.com</a></li>
                                            <li>Click "Create an AWS Account"</li>
                                            <li>Follow the sign-up process</li>
                                            <li>You'll need to provide:
                                                <ul className="pl-6 mt-2 list-disc">
                                                    <li>Email address</li>
                                                    <li>Credit card information (required but you'll stay in free tier)</li>
                                                    <li>Phone number for verification</li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <div className="p-4 mt-4 border border-yellow-200 rounded-md bg-yellow-50">
                                                                                        <p className="flex items-center gap-2 text-yellow-800">
                                                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                                Note: AWS offers a free tier for new accounts, but always monitor your usage to avoid unexpected charges.
                                            </p>
                                        </div>
                                    </>
                                )
                            },
                            {
                                title: "Create an S3 Bucket",
                                content: (
                                    <div className="space-y-4">
                                        <p>Follow these detailed steps to create your S3 bucket:</p>
                                        <ol className="pl-6 space-y-3 list-decimal">
                                            <li>Log in to the <a href="https://aws.amazon.com/console/" className="text-blue-500 hover:text-blue-700">AWS Management Console</a></li>
                                            <li>Type "S3" in the search bar at the top and click on "S3" under Services</li>
                                            <li>Click the blue "Create bucket" button</li>
                                            <li>For Bucket name:
                                                <ul className="pl-6 mt-2 list-disc">
                                                    <li>Choose a globally unique name (e.g., "my-react-app-123")</li>
                                                    <li>Use only lowercase letters, numbers, dots, and hyphens</li>
                                                </ul>
                                            </li>
                                            <li>Select your closest AWS Region to minimize latency</li>
                                            <li>Under "Block Public Access settings":
                                                <ul className="pl-6 mt-2 list-disc">
                                                    <li>Uncheck "Block all public access"</li>
                                                    <li>Acknowledge the warning by checking the box</li>
                                                </ul>
                                            </li>
                                            <li>Leave other settings as default</li>
                                            <li>Click "Create bucket" at the bottom</li>
                                        </ol>
                                        <div className="p-4 border border-blue-200 rounded-md bg-blue-50">
                                            <p className="text-blue-800">Tip: Save your bucket name somewhere - you'll need it later!</p>
                                        </div>
                                    </div>
                                )
                            }
                            // Additional steps will follow...
                        ].map((item, index) => (
                            <li key={index} className="relative pl-12 before:content-[counter(list-item)] before:counter-increment-item before:absolute before:left-0 before:top-0 before:flex before:items-center before:justify-center before:w-8 before:h-8 before:bg-blue-100 before:text-blue-600 before:rounded-full before:font-bold">
                                <h3 className="mb-4 text-xl font-semibold ">{item.title}</h3>
                                <div className="leading-relaxed ">
                                    {item.content}
                                </div>
                            </li>
                        ))}
                    </ol>
                    <div className="p-4 mt-8 border border-gray-200 rounded-lg bg-gray-50">
                        <p className="text-gray-700">
                            Need help? Check out the complete guide on{" "}
                            <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html"
                               className="font-medium text-blue-600 hover:text-blue-800">
                                AWS S3 Static Website Hosting
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}