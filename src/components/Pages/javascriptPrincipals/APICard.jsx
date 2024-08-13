import PropTypes from 'prop-types';

function APICard({ data = [] }) {
    console.log('Data:', data);

    return (
        <div>
            {data.length === 0 ? (
                <h1 className="my-10 text-4xl text-center text-gray-700 animate-pulse dark:text-gray-300">
                    No results found
                </h1>
            ) : (
                data.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 m-4 transition-transform duration-300 ease-in-out border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
                    >
                        <div className="flex items-center justify-between">
                            {item.API && (
                                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                                    {item.API}
                                </h2>
                            )}
                            {item.Category && (
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Category: {item.Category}
                                </p>
                            )}
                        </div>
                        {item.Description && (
                            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                                {item.Description}
                            </p>
                        )}
                        <a
                            href={item.URL}
                            target="_blank"
                            rel="noreferrer"
                            className="block mt-4 text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-500"
                        >
                            {item.URL}
                        </a>
                        <div className="flex justify-around mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                            <p>
                                API Key Required:
                                <span className="font-semibold text-indigo-700 dark:text-indigo-300">{item['API Key Required']}</span>
                            </p>
                            <p>
                                HTTPS Support:
                                <span className="font-semibold text-indigo-700 dark:text-indigo-300">{item['HTTPS Support']}</span>
                            </p>
                            <p>
                                CORS Support:
                                <span className="font-semibold text-indigo-700 dark:text-indigo-300">{item['CORS Support'].replace(/\|/g, '')}</span>
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

APICard.propTypes = {
    data: PropTypes.array,
};

export default APICard;