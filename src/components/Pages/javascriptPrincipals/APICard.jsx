



function APICard({data}) {
  console.log(data)
 if(data === undefined) {
  data = [];
  }

console.log("data in card", data);
  return (
    <div>
      {data.length === 0  && <h1 className="text-4xl text-center my-10 animate-pulse">No results found</h1>}
      {data && data.map((data, index) => {
        return (
        <div key={index} className="border border-gray-400 bg-blue-100 drop-shadow-xl p-4 m-4 dark:bg-slate-800 rounded-lg">
          <div className="flex">
          {data.API && <h2 className="text-4xl">{data.API}</h2>}
          {data.Category && <p className="ms-auto text-xl">Category: {data.Category}</p>}
          </div>
                   {data.Description && <p className="text-xl font-semibold">Description: {data.Description}</p>}
            <a
                href={data.URL}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
            >
                {data.URL}
            </a>
            <div className="flex justify-evenly">
                <p>API Key Required: {data["API Key Required"]}</p>
                <p>HTTPS Support: {data["HTTPS Support"]}</p>
                <p>CORS Support: {data["CORS Support"].replace(/\|/g, '')}</p>
            </div>
        </div>
        )
        }
        )}
    </div>
    );
}

export default APICard;