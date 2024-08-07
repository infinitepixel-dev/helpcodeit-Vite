import React from 'react';




const UsefulLinksTable = ({ links }) => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr className='border border-b-black border-b-2'>
            <th className="px-4 py-2 text-left text-gray-600 font-bold">Title</th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold">Description</th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold">Link</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 hover:bg-blue-100' : 'bg-white hover:bg-blue-100' }>
              <td className="px-4 py-2 border-b font-semibold text-gray-600">{link.title}</td>
              <td className="px-4 py-2 border-b text-gray-600">{link.description}</td>
              <td className="px-4 py-2 border-b text-gray-600">
                <a
                  href={link.url}
                  className="text-blue-500 hover:text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsefulLinksTable;