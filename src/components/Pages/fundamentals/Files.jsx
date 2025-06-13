import {
    FileText,
    FileCode,
    FileImage,
    FileAudio,
    FileVideo,
} from 'lucide-react'
import file from '@assets/fileImage.webp'
import TextWithImage from '@subComponents/TextwithImage'

export default function Files() {
    const fileTypes = [
        {
            extension: '.txt',
            purpose: 'Text Files',
            description:
                'Basic text documents that store plain text without any formatting. Used for notes, documentation, and simple data storage.',
            example: 'notes.txt',
            icon: <FileText className="h-5 w-5 text-gray-500" />,
        },
        {
            extension: '.html',
            purpose: 'HTML Files',
            description:
                'HTML files form the foundation of web pages. Contains text, images, links, and other structural content.',
            example: 'index.html',
            icon: <FileCode className="h-5 w-5 text-orange-500" />,
        },
        {
            extension: '.css',
            purpose: 'CSS Files',
            description:
                'Style sheets that define the visual appearance of HTML content, including layout, colors, and responsiveness.',
            example: 'styles.css',
            icon: <FileCode className="h-5 w-5 text-blue-500" />,
        },
        {
            extension: '.js',
            purpose: 'JavaScript Files',
            description:
                'Executable JS code for dynamic and interactive web content. Powers functionality in modern web apps.',
            example: 'app.js',
            icon: <FileCode className="h-5 w-5 text-yellow-500" />,
        },
        {
            extension: '.json',
            purpose: 'JSON Files',
            description:
                'Lightweight data-interchange format, readable by humans and easily parsed by machines.',
            example: 'data.json',
            icon: <FileCode className="h-5 w-5 text-yellow-600" />,
        },
        {
            extension: '.jpg/.jpeg',
            purpose: 'Image Files',
            description:
                'Compressed image format ideal for photographs and rich visuals. Common on websites and social media.',
            example: 'photo.jpg',
            icon: <FileImage className="h-5 w-5 text-green-500" />,
        },
        {
            extension: '.pdf',
            purpose: 'PDF Files',
            description:
                'Portable format preserving document layout. Ideal for forms, manuals, and shared documents.',
            example: 'report.pdf',
            icon: <FileText className="h-5 w-5 text-red-500" />,
        },
        {
            extension: '.jsx/.tsx',
            purpose: 'React Files',
            description:
                'JSX and TSX are used in React apps for UI components, mixing HTML-like syntax with JS/TS logic.',
            example: 'App.jsx, App.tsx',
            icon: <FileCode className="h-5 w-5 text-yellow-500" />,
        },
        {
            extension: '.ts',
            purpose: 'TypeScript Files',
            description:
                'JS with added type safety and tooling support, ideal for scalable front-end and back-end development.',
            example: 'app.ts',
            icon: <FileCode className="h-5 w-5 text-yellow-500" />,
        },
        {
            extension: '.docx',
            purpose: 'Word Documents',
            description:
                'Microsoft Word files used for reports, letters, and formatted text documents.',
            example: 'document.docx',
            icon: <FileText className="h-5 w-5 text-blue-400" />,
        },
        {
            extension: '.mp3',
            purpose: 'Audio Files',
            description:
                'Compressed format for music, podcasts, and other audio. Supports streaming and storage.',
            example: 'song.mp3',
            icon: <FileAudio className="h-5 w-5 text-purple-500" />,
        },
        {
            extension: '.mp4',
            purpose: 'Video Files',
            description:
                'Standard video format for high-quality visuals and sound. Compatible with most devices.',
            example: 'video.mp4',
            icon: <FileVideo className="h-5 w-5 text-red-500" />,
        },
        {
            extension: '.csv',
            purpose: 'CSV Files',
            description:
                'Plain-text spreadsheet data, easily imported into Excel or databases.',
            example: 'data.csv',
            icon: <FileText className="h-5 w-5 text-blue-500" />,
        },
        {
            extension: '.md',
            purpose: 'Markdown Files',
            description:
                'Lightweight markup for formatting text. Used in docs and static site generators.',
            example: 'README.md',
            icon: <FileText className="h-5 w-5 text-blue-500" />,
        },
        {
            extension: '.py',
            purpose: 'Python Files',
            description:
                'Python scripts used in automation, AI, data science, and back-end services.',
            example: 'script.py',
            icon: <FileCode className="h-5 w-5 text-yellow-500" />,
        },
        {
            extension: '.java',
            purpose: 'Java Files',
            description:
                'Cross-platform applications, Android apps, and enterprise software run on Java source files.',
            example: 'Main.java',
            icon: <FileCode className="h-5 w-5 text-yellow-500" />,
        },
    ]

    const paragraphs = [
        'A file is a digital container that holds data, structured in specific formats. Its extension—like `.txt` or `.jpg`—tells your device how to open it.',
        'Extensions help your system match files to the correct app. For example, `.txt` opens in a text editor, while `.jpg` opens in an image viewer.',
        'Below is a helpful guide to common file types and their uses. It’s not exhaustive, but it covers the most widely recognized ones.',
    ]

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TextWithImage
                title="Understanding Files and Extensions"
                subtitle="What is a file? What is a file extension?"
                image={file}
                imageAlt="file"
                paragraphs={paragraphs}
            />

            <div className="mt-12 overflow-x-auto rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
                <table className="min-w-full bg-white text-sm sm:text-base dark:bg-gray-900">
                    <thead className="bg-gray-100 text-left text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                        <tr>
                            <th className="px-4 py-3 font-medium"></th>
                            <th className="px-4 py-3 font-medium">Extension</th>
                            <th className="px-4 py-3 font-medium">Purpose</th>
                            <th className="px-4 py-3 font-medium">
                                Description
                            </th>
                            <th className="px-4 py-3 font-medium">Example</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {fileTypes.map((file, index) => (
                            <tr
                                key={index}
                                className="transition hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <td className="px-4 py-3">{file.icon}</td>
                                <td className="px-4 py-3 font-mono text-gray-800 dark:text-gray-100">
                                    {file.extension}
                                </td>
                                <td className="px-4 py-3 text-gray-800 dark:text-gray-100">
                                    {file.purpose}
                                </td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                    {file.description}
                                </td>
                                <td className="px-4 py-3 font-mono font-bold text-gray-900 dark:text-white">
                                    {file.example}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
