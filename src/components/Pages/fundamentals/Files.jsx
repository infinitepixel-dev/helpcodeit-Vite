import { FileText, FileCode, FileImage, FileAudio, FileVideo} from 'lucide-react';
import file from '@assets/fileImage.webp';
import TextWithImage from '@subComponents/TextwithImage';
export default function Files() {
  const fileTypes = [
    {
      extension: '.txt',
      purpose: 'Text Files',
      description: 'Basic text documents that store plain text without any formatting, styling, or special effects. Widely used for notes, documentation, and simple data storage.',
      example: 'notes.txt',
      icon: <FileText className="w-5 h-5 text-gray-500" />
    },
    {
      extension: '.html',
      purpose: 'HTML Files',
      description: 'HyperText Markup Language files that form the foundation of web pages. Contains the structure and content of web pages, including text, images, links, and other elements.',
      example: 'index.html',
      icon: <FileCode className="w-5 h-5 text-orange-500" />
    },
    {
      extension: '.css',
      purpose: 'CSS Files',
      description: 'Cascading Style Sheets that define the visual appearance and layout of web pages. Controls colors, fonts, spacing, and responsive design features for HTML documents.',
      example: 'styles.css',
      icon: <FileCode className="w-5 h-5 text-blue-500" />
    },
    {
      extension: '.js',
      purpose: 'JavaScript Files',
      description: 'Contains executable JavaScript code used for web development, including functions, variables, and logic. Essential for creating interactive and dynamic web applications.',
      example: 'app.js',
      icon: <FileCode className="w-5 h-5 text-yellow-500" />
    },
    {
      extension: '.json',
      purpose: 'JSON Files',
      description: 'JavaScript Object Notation format used for storing and exchanging structured data. Easy for both humans to read and machines to parse, making it popular for APIs and configuration files.',
      example: 'data.json',
      icon: <FileCode className="w-5 h-5 text-yellow-600" />
    },
    {
      extension: '.jpg/.jpeg',
      purpose: 'Image Files',
      description: 'Compressed digital image format ideal for photographs and complex images with many colors. Offers a good balance between image quality and file size, making it perfect for web use.',
      example: 'photo.jpg',
      icon: <FileImage className="w-5 h-5 text-green-500" />
    },
    {
        extension: '.pdf',
        purpose: 'PDF Files',
        description: 'Portable Document Format files that preserve the layout and formatting of documents, including text, images, and fonts. Widely used for sharing documents with consistent formatting across different platforms.',
        example: 'report.pdf',
        icon: <FileText className="w-5 h-5 text-red-500" />
    },
    {
        extension: '.jsx/.tsx',
        purpose: 'React Files/React TypeScript Files',
        description: 'JavaScript/TypeScript files specifically for React applications, combining HTML-like syntax (JSX) with JavaScript/TypeScript. Used for building modern, component-based user interfaces.',
        example: 'App.jsx, App.tsx',
        icon: <FileCode className="w-5 h-5 text-yellow-500" />
      },
      {
        extension: '.ts',
        purpose: 'TypeScript Files',
        description: 'Enhanced JavaScript files with added type safety and object-oriented features. Provides better tooling and error detection for large-scale JavaScript applications.',
        example: 'app.ts',
        icon: <FileCode className="w-5 h-5 text-yellow-500" />
      },
    {
        extension: '.docx',
        purpose: 'Word Processing Files',
        description: 'Files created using Microsoft Word, containing formatted text, images, and other elements. Widely used for creating documents, reports, and other types of content.',
        example: 'document.docx',
        icon: <FileText className="w-5 h-5 text-blue-300" />
    },
    {
      extension: '.mp3',
      purpose: 'Audio Files',
      description: 'Popular compressed audio format that significantly reduces file size while maintaining good sound quality. Widely used for music, podcasts, and other audio content distribution.',
      example: 'song.mp3',
      icon: <FileAudio className="w-5 h-5 text-purple-500" />
    },
    {
      extension: '.mp4',
      purpose: 'Video Files',
      description: 'Versatile digital video format that supports high-quality video and audio compression. Commonly used for sharing videos online, streaming content, and storing digital recordings.',
      example: 'video.mp4',
      icon: <FileVideo className="w-5 h-5 text-red-500" />
    },
    {
      extension: '.csv',
      purpose: 'CSV Files',
      description: 'Comma-Separated Values files that store tabular data in plain text. Widely used for importing and exporting spreadsheet data, databases, and large datasets for data analysis.',
      example: 'data.csv',
      icon: <FileText className="w-5 h-5 text-blue-500" />
    },
    {
      extension: '.md',
      purpose: 'Markdown Files',
      description: 'Text files using Markdown syntax for easy-to-write and easy-to-read formatting. Popular for documentation, README files, and content that needs to be converted to HTML.',
      example: 'README.md',
      icon: <FileText className="w-5 h-5 text-blue-500" />
    },
    {
      extension: '.py',
      purpose: 'Python Files',
      description: 'Source code files containing Python programming language scripts and applications. Used for web development, data science, automation, artificial intelligence, and general-purpose programming.',
      example: 'script.py',
      icon: <FileCode className="w-5 h-5 text-yellow-500" />
    },
    {
      extension: '.java',
      purpose: 'Java Files',
      description: 'Source code files for Java programming language, known for its "Write Once, Run Anywhere" capability. Used for enterprise software, Android apps, and cross-platform applications.',
      example: 'Main.java',
      icon: <FileCode className="w-5 h-5 text-yellow-500" />
    },

  ];

  const paragraphs = [
    "A file is a collection of data stored on a computer's hard drive. The data is stored in a specific format that determines how the data is interpreted and displayed. A file extension is the suffix at the end of a file name that indicates the file's type and format. For example, .txt is the file extension for a text file.",
    "File extensions are important because they help the computer understand how to open and display the file. For example, if you have a file with a .txt extension, the computer will know to open it with a text editor. If you have a file with a .jpg extension, the computer will know to open it with an image viewer.",
    "In the table below, you will see a list of common file types and their extensions. The table is not exhaustive, but it will give you a good idea of what file types are out there and what they are used for."
  ];

  return (
    <div className="container">
    <TextWithImage
      title="Understanding Files and Extensions"
      subtitle="What is a file? What is a file extension?"
      image={file}
      imageAlt="file"
      paragraphs={paragraphs}
    />
        <div className="p-6">
          <div className="overflow-x-auto shadow-lg rounded-lg mb-14">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-600"></th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-600">Extension</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-600">Purpose</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-600">Description</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-600">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fileTypes.map((file, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">{file.icon}</td>
                    <td className="px-6 py-4 font-mono text-base text-gray-800">{file.extension}</td>
                    <td className="px-6 py-4 text-base text-gray-800">{file.purpose}</td>
                    <td className="px-6 py-4 text-base text-gray-600">{file.description}</td>
                    <td className="px-6 py-4 font-mono font-bold text-base text-gray-800">{file.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}
