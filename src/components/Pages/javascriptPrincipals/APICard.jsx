import propTypes from 'prop-types'

function APICard({ data }) {
    console.log(data)
    if (data === undefined) {
        data = []
    }

    console.log('data in card', data)
    return (
        <div>
            {data.length === 0 && (
                <h1 className="my-10 animate-pulse text-center text-4xl">
                    No results found
                </h1>
            )}
            {data &&
                data.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="m-4 rounded-lg border border-gray-400 bg-blue-100 p-4 drop-shadow-xl dark:bg-slate-800"
                        >
                            <div className="flex">
                                {data.API && (
                                    <h2 className="text-4xl">{data.API}</h2>
                                )}
                                {data.Category && (
                                    <p className="ms-auto text-xl">
                                        Category: {data.Category}
                                    </p>
                                )}
                            </div>
                            {data.Description && (
                                <p className="text-xl font-semibold">
                                    Description: {data.Description}
                                </p>
                            )}
                            <a
                                href={data.URL}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {data.URL}
                            </a>
                            <div className="flex justify-evenly">
                                <p>
                                    API Key Required: {data['API Key Required']}
                                </p>
                                <p>HTTPS Support: {data['HTTPS Support']}</p>
                                <p>
                                    CORS Support:{' '}
                                    {data['CORS Support'].replace(/\|/g, '')}
                                </p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

APICard.propTypes = {
    data: propTypes.array,
}

export default APICard
