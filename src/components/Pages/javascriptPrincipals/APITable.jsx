function APITable(){

    return (
        <div>
            <div class="container mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-4">API List</h1>
        <table class="min-w-full bg-white border">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">Category</th>
                    <th class="py-2 px-4 border-b">API</th>
                    <th class="py-2 px-4 border-b">URL</th>
                    <th class="py-2 px-4 border-b">Description</th>
                    <th class="py-2 px-4 border-b">API Key Required</th>
                    <th class="py-2 px-4 border-b">HTTPS Support</th>
                    <th class="py-2 px-4 border-b">CORS Support</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Abstract IP Geolocation</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.abstractapi.com/ip-geolocation-api" class="text-blue-500">https://www.abstractapi.com/ip-geolocation-api</a></td>
                    <td class="py-2 px-4 border-b">Geolocate website visitors from their IPs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Pets & Animals</td>
                    <td class="py-2 px-4 border-b">AdoptAPet</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.adoptapet.com/public/apis/pet_list.html" class="text-blue-500">https://www.adoptapet.com/public/apis/pet_list.html</a></td>
                    <td class="py-2 px-4 border-b">Resource to help get pets adopted</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Pets & Animals</td>
                    <td class="py-2 px-4 border-b">Animal Crossing: New Horizons</td>
                    <td class="py-2 px-4 border-b"><a href="http://acnhapi.com/" class="text-blue-500">http://acnhapi.com/</a></td>
                    <td class="py-2 px-4 border-b">API for critters, fossils, art, music, furniture and villagers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Health</td>
                    <td class="py-2 px-4 border-b">Azure DevOps Health</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.microsoft.com/en-us/rest/api/resourcehealth" class="text-blue-500">https://docs.microsoft.com/en-us/rest/api/resourcehealth</a></td>
                    <td class="py-2 px-4 border-b">Resource health helps you diagnose and get support when an Azure issue impacts your resources</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Bank Data API</td>
                    <td class="py-2 px-4 border-b"><a href="https://apilayer.com/marketplace/bank_data-api" class="text-blue-500">https://apilayer.com/marketplace/bank_data-api</a></td>
                    <td class="py-2 px-4 border-b">Instant IBAN and SWIFT number validation across the globe</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Bank Negara Malaysia Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://apikijangportal.bnm.gov.my/" class="text-blue-500">https://apikijangportal.bnm.gov.my/</a></td>
                    <td class="py-2 px-4 border-b">Malaysia Central Bank Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">BigDataCloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.bigdatacloud.com/ip-geolocation-apis" class="text-blue-500">https://www.bigdatacloud.com/ip-geolocation-apis</a></td>
                    <td class="py-2 px-4 border-b">Provides fast and accurate IP geolocation APIs along with security checks and confidence area</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Bing Maps</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.microsoft.com/maps/" class="text-blue-500">https://www.microsoft.com/maps/</a></td>
                    <td class="py-2 px-4 border-b">Create/customize digital maps based on Bing Maps data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Brazil Central Bank Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://dadosabertos.bcb.gov.br/" class="text-blue-500">https://dadosabertos.bcb.gov.br/</a></td>
                    <td class="py-2 px-4 border-b">Brazil Central Bank Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Brazilian Chamber of Deputies Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://dadosabertos.camara.leg.br/swagger/api.html" class="text-blue-500">https://dadosabertos.camara.leg.br/swagger/api.html</a></td>
                    <td class="py-2 px-4 border-b">Provides legislative information in Apis XML and JSON, as well as files in various formats</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Jobs</td>
                    <td class="py-2 px-4 border-b">Careerjet</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.careerjet.com/partners/api/" class="text-blue-500">https://www.careerjet.com/partners/api/</a></td>
                    <td class="py-2 px-4 border-b">Job search engine</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Chuck Norris Database</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.icndb.com/api/" class="text-blue-500">http://www.icndb.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Jokes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">City, Nantes Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.nantesmetropole.fr/pages/home/" class="text-blue-500">https://data.nantesmetropole.fr/pages/home/</a></td>
                    <td class="py-2 px-4 border-b">NantesFR City Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">City, New York Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.cityofnewyork.us/" class="text-blue-500">https://opendata.cityofnewyork.us/</a></td>
                    <td class="py-2 px-4 border-b">New York US City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">City, Prague Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="http://opendata.praha.eu/en" class="text-blue-500">http://opendata.praha.eu/en</a></td>
                    <td class="py-2 px-4 border-b">PragueCZ City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">City, Toronto Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://open.toronto.ca/" class="text-blue-500">https://open.toronto.ca/</a></td>
                    <td class="py-2 px-4 border-b">Toronto CA City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Cloudmersive Document and Data Conversion</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloudmersive.com/convert-api" class="text-blue-500">https://cloudmersive.com/convert-api</a></td>
                    <td class="py-2 px-4 border-b">HTML/URL to PDF/PNG, Office documents to PDF, image conversion</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">CollegeFootballData.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://collegefootballdata.com" class="text-blue-500">https://collegefootballdata.com</a></td>
                    <td class="py-2 px-4 border-b">Unofficial detailed American college football statistics, records, and results API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Covid-19 Live Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/mathdroid/covid-19-api" class="text-blue-500">https://github.com/mathdroid/covid-19-api</a></td>
                    <td class="py-2 px-4 border-b">Global and countrywise data of Covid 19 daily Summary, confirmed cases, recovered and deaths</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Crossref Metadata Search</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/CrossRef/rest-api-doc" class="text-blue-500">https://github.com/CrossRef/rest-api-doc</a></td>
                    <td class="py-2 px-4 border-b">Books & Articles Metadata</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Dangerous Discord Database</td>
                    <td class="py-2 px-4 border-b"><a href="https://discord.riverside.rocks/docs/index.php" class="text-blue-500">https://discord.riverside.rocks/docs/index.php</a></td>
                    <td class="py-2 px-4 border-b">Database of malicious Discord accounts</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Danish data service Energi</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.energidataservice.dk/" class="text-blue-500">https://www.energidataservice.dk/</a></td>
                    <td class="py-2 px-4 border-b">Open energy data from Energinet to society</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Data USA</td>
                    <td class="py-2 px-4 border-b"><a href="https://datausa.io/about/api/" class="text-blue-500">https://datausa.io/about/api/</a></td>
                    <td class="py-2 px-4 border-b">US Public Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Data.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.data.gov/" class="text-blue-500">https://api.data.gov/</a></td>
                    <td class="py-2 px-4 border-b">US Government Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Data.parliament.uk</td>
                    <td class="py-2 px-4 border-b"><a href="https://explore.data.parliament.uk/?learnmore=Members" class="text-blue-500">https://explore.data.parliament.uk/?learnmore=Members</a></td>
                    <td class="py-2 px-4 border-b">Contains live datasets including information about petitions, bills, MP votes, attendance and more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Databricks</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.databricks.com/dev-tools/api/latest/index.html" class="text-blue-500">https://docs.databricks.com/dev-tools/api/latest/index.html</a></td>
                    <td class="py-2 px-4 border-b">Service to manage your databricks account,clusters, notebooks, jobs and workspaces</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Dataflow Kit COVID-19</td>
                    <td class="py-2 px-4 border-b"><a href="https://covid-19.dataflowkit.com" class="text-blue-500">https://covid-19.dataflowkit.com</a></td>
                    <td class="py-2 px-4 border-b">COVID-19 live statistics into sites per hour</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Datamuse</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.datamuse.com/api/" class="text-blue-500">https://www.datamuse.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Word-finding query engine</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Jobs</td>
                    <td class="py-2 px-4 border-b">DevITjobs UK</td>
                    <td class="py-2 px-4 border-b"><a href="https://devitjobs.uk/job_feed.xml" class="text-blue-500">https://devitjobs.uk/job_feed.xml</a></td>
                    <td class="py-2 px-4 border-b">Jobs with GraphQL</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">District of Columbia Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="http://opendata.dc.gov/pages/using-apis" class="text-blue-500">http://opendata.dc.gov/pages/using-apis</a></td>
                    <td class="py-2 px-4 border-b">Contains D.C. government public datasets, including crime, GIS, financial data, and so on</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Dungeons and Dragons</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.dnd5eapi.co/docs/" class="text-blue-500">https://www.dnd5eapi.co/docs/</a></td>
                    <td class="py-2 px-4 border-b">Reference for 5th edition spells, classes, monsters, and more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Dungeons and Dragons Alternate</td>
                    <td class="py-2 px-4 border-b"><a href="https://open5e.com/" class="text-blue-500">https://open5e.com/</a></td>
                    <td class="py-2 px-4 border-b">Includes all monsters and spells from the SRD System Reference Document as well as a search API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">Edamam nutrition</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.edamam.com/edamam-docs-nutrition-api" class="text-blue-500">https://developer.edamam.com/edamam-docs-nutrition-api</a></td>
                    <td class="py-2 px-4 border-b">Nutrition Analysis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">Edamam recipes</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.edamam.com/edamam-docs-recipe-api" class="text-blue-500">https://developer.edamam.com/edamam-docs-recipe-api</a></td>
                    <td class="py-2 px-4 border-b">Recipe Search</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">Food Standards Agency</td>
                    <td class="py-2 px-4 border-b"><a href="http://ratings.food.gov.uk/open-data/en-GB" class="text-blue-500">http://ratings.food.gov.uk/open-data/en-GB</a></td>
                    <td class="py-2 px-4 border-b">UK food hygiene rating data API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">FoodData Central</td>
                    <td class="py-2 px-4 border-b"><a href="https://fdc.nal.usda.gov/" class="text-blue-500">https://fdc.nal.usda.gov/</a></td>
                    <td class="py-2 px-4 border-b">National Nutrient Database for Standard Reference</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">Foodish</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/surhud004/Foodish#readme" class="text-blue-500">https://github.com/surhud004/Foodish#readme</a></td>
                    <td class="py-2 px-4 border-b">Random pictures of food dishes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Football-Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.football-data.org" class="text-blue-500">https://www.football-data.org</a></td>
                    <td class="py-2 px-4 border-b">Football data with matches info, players, teams, and competitions</td>
                    <td class="py-2 px-4 border-b">`X-Mashape-Key`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">FreeGeoIP</td>
                    <td class="py-2 px-4 border-b"><a href="https://freegeoip.app/" class="text-blue-500">https://freegeoip.app/</a></td>
                    <td class="py-2 px-4 border-b">Free geo ip information, no registration required. 15k/hour rate limit</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Gazette Data, UK</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.thegazette.co.uk/data" class="text-blue-500">https://www.thegazette.co.uk/data</a></td>
                    <td class="py-2 px-4 border-b">UK official public record API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">GeoApi</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.gouv.fr/api/geoapi.html" class="text-blue-500">https://api.gouv.fr/api/geoapi.html</a></td>
                    <td class="py-2 px-4 border-b">French geographical data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">GeoDB Cities</td>
                    <td class="py-2 px-4 border-b"><a href="http://geodb-cities-api.wirefreethought.com/" class="text-blue-500">http://geodb-cities-api.wirefreethought.com/</a></td>
                    <td class="py-2 px-4 border-b">Get global city, region, and country data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">GeoDataSource</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.geodatasource.com/web-service" class="text-blue-500">https://www.geodatasource.com/web-service</a></td>
                    <td class="py-2 px-4 border-b">Geocoding of city name by using latitude and longitude coordinates</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">GeoJS</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.geojs.io/" class="text-blue-500">https://www.geojs.io/</a></td>
                    <td class="py-2 px-4 border-b">IP geolocation with ChatOps integration</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">GeoNames</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.geonames.org/export/web-services.html" class="text-blue-500">http://www.geonames.org/export/web-services.html</a></td>
                    <td class="py-2 px-4 border-b">Place names and other geographical data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Geoapify</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.geoapify.com/api/geocoding-api/" class="text-blue-500">https://www.geoapify.com/api/geocoding-api/</a></td>
                    <td class="py-2 px-4 border-b">Forward and reverse geocoding, address autocomplete</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Geocod.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.geocod.io/" class="text-blue-500">https://www.geocod.io/</a></td>
                    <td class="py-2 px-4 border-b">Address geocoding / reverse geocoding in bulk</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Geocode.xyz</td>
                    <td class="py-2 px-4 border-b"><a href="https://geocode.xyz/api" class="text-blue-500">https://geocode.xyz/api</a></td>
                    <td class="py-2 px-4 border-b">Provides worldwide forward/reverse geocoding, batch geocoding and geoparsing</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Geocodify.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://geocodify.com/" class="text-blue-500">https://geocodify.com/</a></td>
                    <td class="py-2 px-4 border-b">Worldwide geocoding, geoparsing and autocomplete for addresses</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Geodata.gov.gr</td>
                    <td class="py-2 px-4 border-b"><a href="https://geodata.gov.gr/en/" class="text-blue-500">https://geodata.gov.gr/en/</a></td>
                    <td class="py-2 px-4 border-b">Open geospatial data and API service for Greece</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">GeographQL</td>
                    <td class="py-2 px-4 border-b"><a href="https://geographql.netlify.app" class="text-blue-500">https://geographql.netlify.app</a></td>
                    <td class="py-2 px-4 border-b">A Country, State, and City GraphQL API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Geokeo</td>
                    <td class="py-2 px-4 border-b"><a href="https://geokeo.com" class="text-blue-500">https://geokeo.com</a></td>
                    <td class="py-2 px-4 border-b">Geokeo geocoding service- with 2500 free api requests daily</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Google Analytics</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/analytics/" class="text-blue-500">https://developers.google.com/analytics/</a></td>
                    <td class="py-2 px-4 border-b">Collect, configure and analyze your data to reach the right audience</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Google Maps</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/maps/" class="text-blue-500">https://developers.google.com/maps/</a></td>
                    <td class="py-2 px-4 border-b">Create/customize digital maps based on Google Maps data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Google Maps</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.notion.com" class="text-blue-500">https://developers.notion.com</a></td>
                    <td class="py-2 px-4 border-b">Create/customize digital maps based on Google Maps data</td>
                    <td class="py-2 px-4 border-b">`apiKey` </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Jobs</td>
                    <td class="py-2 px-4 border-b">GraphQL Jobs</td>
                    <td class="py-2 px-4 border-b"><a href="https://graphql.jobs/docs/api/" class="text-blue-500">https://graphql.jobs/docs/api/</a></td>
                    <td class="py-2 px-4 border-b">Jobs with GraphQL</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">HERE Maps</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.here.com" class="text-blue-500">https://developer.here.com</a></td>
                    <td class="py-2 px-4 border-b">Create/customize digital maps based on HERE Maps data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Health</td>
                    <td class="py-2 px-4 border-b">Healthcare.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.healthcare.gov/developers/" class="text-blue-500">https://www.healthcare.gov/developers/</a></td>
                    <td class="py-2 px-4 border-b">Educational content about the US Health Insurance Marketplace</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Hong Kong GeoData Store</td>
                    <td class="py-2 px-4 border-b"><a href="https://geodata.gov.hk/gs/" class="text-blue-500">https://geodata.gov.hk/gs/</a></td>
                    <td class="py-2 px-4 border-b">API for accessing geo-data of Hong Kong</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Humanitarian Data Exchange</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.humdata.org/" class="text-blue-500">https://data.humdata.org/</a></td>
                    <td class="py-2 px-4 border-b">Humanitarian Data Exchange HDX is open platform for sharing data across crises and organisations</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">IP2Location</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ip2location.com/web-service/ip2location" class="text-blue-500">https://www.ip2location.com/web-service/ip2location</a></td>
                    <td class="py-2 px-4 border-b">IP geolocation web service to get more than 55 parameters</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">IPGEO</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.techniknews.net/ipgeo/" class="text-blue-500">https://api.techniknews.net/ipgeo/</a></td>
                    <td class="py-2 px-4 border-b">Unlimited free IP Address API with useful information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Istanbul İBB Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.ibb.gov.tr" class="text-blue-500">https://data.ibb.gov.tr</a></td>
                    <td class="py-2 px-4 border-b">Data sets from the İstanbul Metropolitan Municipality İBB</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Jobs</td>
                    <td class="py-2 px-4 border-b">Jobs2Careers</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.jobs2careers.com/api/spec.pdf" class="text-blue-500">http://api.jobs2careers.com/api/spec.pdf</a></td>
                    <td class="py-2 px-4 border-b">Job aggregator</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Kakao Maps</td>
                    <td class="py-2 px-4 border-b"><a href="https://apis.map.kakao.com" class="text-blue-500">https://apis.map.kakao.com</a></td>
                    <td class="py-2 px-4 border-b">Kakao Maps provide multiple APIs for Korean maps</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Land Transport Authority DataMall, Singapore</td>
                    <td class="py-2 px-4 border-b"><a href="https://datamall.lta.gov.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf" class="text-blue-500">https://datamall.lta.gov.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf</a></td>
                    <td class="py-2 px-4 border-b">Singapore transport information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Social & Reviews</td>
                    <td class="py-2 px-4 border-b">LinkPreview</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.linkpreview.net" class="text-blue-500">https://www.linkpreview.net</a></td>
                    <td class="py-2 px-4 border-b">Get JSON formatted summary with title, description and preview image for any requested URL</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">LocationIQ</td>
                    <td class="py-2 px-4 border-b"><a href="https://locationiq.org/docs/" class="text-blue-500">https://locationiq.org/docs/</a></td>
                    <td class="py-2 px-4 border-b">Provides forward/reverse geocoding and batch geocoding</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Longdo Map</td>
                    <td class="py-2 px-4 border-b"><a href="https://map.longdo.com/docs/" class="text-blue-500">https://map.longdo.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Interactive map with detailed places and information portal in Thailand</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">MalDatabase</td>
                    <td class="py-2 px-4 border-b"><a href="https://maldatabase.com/api-doc.html" class="text-blue-500">https://maldatabase.com/api-doc.html</a></td>
                    <td class="py-2 px-4 border-b">Provide malware datasets and threat intelligence feeds</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">MapQuest</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.mapquest.com/" class="text-blue-500">https://developer.mapquest.com/</a></td>
                    <td class="py-2 px-4 border-b">To access tools and resources to map the world</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Mapbox</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.mapbox.com/" class="text-blue-500">https://docs.mapbox.com/</a></td>
                    <td class="py-2 px-4 border-b">Create/customize beautiful digital maps</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Materials Platform for Data Science</td>
                    <td class="py-2 px-4 border-b"><a href="https://mpds.io" class="text-blue-500">https://mpds.io</a></td>
                    <td class="py-2 px-4 border-b">Curated experimental data for materials science</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">NBA Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/api-sports/api/api-nba/" class="text-blue-500">https://rapidapi.com/api-sports/api/api-nba/</a></td>
                    <td class="py-2 px-4 border-b">All NBA Stats DATA, Games, Livescore, Standings, Statistics</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Nasdaq Data Link</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.data.nasdaq.com/" class="text-blue-500">https://docs.data.nasdaq.com/</a></td>
                    <td class="py-2 px-4 border-b">Stock market data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">National Vulnerability Database</td>
                    <td class="py-2 px-4 border-b"><a href="https://nvd.nist.gov/vuln/Data-Feeds/JSON-feed-changelog" class="text-blue-500">https://nvd.nist.gov/vuln/Data-Feeds/JSON-feed-changelog</a></td>
                    <td class="py-2 px-4 border-b">U.S. National Vulnerability Database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">NewsData</td>
                    <td class="py-2 px-4 border-b"><a href="https://newsdata.io/docs" class="text-blue-500">https://newsdata.io/docs</a></td>
                    <td class="py-2 px-4 border-b">News data API for live-breaking news and headlines from reputed  news sources</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">Nutritionix</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.nutritionix.com/" class="text-blue-500">https://developer.nutritionix.com/</a></td>
                    <td class="py-2 px-4 border-b">Worlds largest verified nutrition database</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">One Map, Singapore</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.onemap.gov.sg/docs/" class="text-blue-500">https://www.onemap.gov.sg/docs/</a></td>
                    <td class="py-2 px-4 border-b">Singapore Land Authority REST API services for Singapore addresses</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Open Charge Map</td>
                    <td class="py-2 px-4 border-b"><a href="https://openchargemap.org/site/develop/api" class="text-blue-500">https://openchargemap.org/site/develop/api</a></td>
                    <td class="py-2 px-4 border-b">Global public registry of electric vehicle charging locations</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Open Data Minneapolis</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.minneapolismn.gov/" class="text-blue-500">https://opendata.minneapolismn.gov/</a></td>
                    <td class="py-2 px-4 border-b">Spatial GIS and non-spatial city data for Minneapolis</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Open Data NHS Scotland</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.opendata.nhs.scot" class="text-blue-500">https://www.opendata.nhs.scot</a></td>
                    <td class="py-2 px-4 border-b">Medical reference data and statistics by Public Health Scotland</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Health</td>
                    <td class="py-2 px-4 border-b">Open Disease</td>
                    <td class="py-2 px-4 border-b"><a href="https://disease.sh/" class="text-blue-500">https://disease.sh/</a></td>
                    <td class="py-2 px-4 border-b">API for Current cases and more stuff about COVID-19 and Influenza</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">Open Food Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://world.openfoodfacts.org/data" class="text-blue-500">https://world.openfoodfacts.org/data</a></td>
                    <td class="py-2 px-4 border-b">Food Products Database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Open Movie Database</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.omdbapi.com/" class="text-blue-500">http://www.omdbapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Movie information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Open Topo Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.opentopodata.org" class="text-blue-500">https://www.opentopodata.org</a></td>
                    <td class="py-2 px-4 border-b">Elevation and ocean depth for a latitude and longitude</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">OpenStreetMap</td>
                    <td class="py-2 px-4 border-b"><a href="http://wiki.openstreetmap.org/wiki/API" class="text-blue-500">http://wiki.openstreetmap.org/wiki/API</a></td>
                    <td class="py-2 px-4 border-b">Navigation, geolocation and geographical data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">OpenWeatherMap</td>
                    <td class="py-2 px-4 border-b"><a href="https://openweathermap.org/api" class="text-blue-500">https://openweathermap.org/api</a></td>
                    <td class="py-2 px-4 border-b">Weather</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Health</td>
                    <td class="py-2 px-4 border-b">Orion Health</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.orionhealth.io/" class="text-blue-500">https://developer.orionhealth.io/</a></td>
                    <td class="py-2 px-4 border-b">Medical platform which allows the development of applications for different healthcare scenarios</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">PM2.5 Open Data Portal</td>
                    <td class="py-2 px-4 border-b"><a href="https://pm25.lass-net.org/#apis" class="text-blue-500">https://pm25.lass-net.org/#apis</a></td>
                    <td class="py-2 px-4 border-b">Open low-cost PM2.5 sensor data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Patents</td>
                    <td class="py-2 px-4 border-b">PatentsView</td>
                    <td class="py-2 px-4 border-b"><a href="https://patentsview.org/apis/purpose" class="text-blue-500">https://patentsview.org/apis/purpose</a></td>
                    <td class="py-2 px-4 border-b">API is intended to explore and visualize trends/patterns across the US innovation landscape</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Pets & Animals</td>
                    <td class="py-2 px-4 border-b">Petfinder</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.petfinder.com/developers/" class="text-blue-500">https://www.petfinder.com/developers/</a></td>
                    <td class="py-2 px-4 border-b">Petfinder is dedicated to helping pets find homes, another resource to get pets adopted</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Pinball Map</td>
                    <td class="py-2 px-4 border-b"><a href="https://pinballmap.com/api/v1/docs" class="text-blue-500">https://pinballmap.com/api/v1/docs</a></td>
                    <td class="py-2 px-4 border-b">A crowdsourced map of public pinball machines</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">PostcodeData.nl</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.postcodedata.nl/v1/postcode/?postcode=1211EP&streetnumber=60&ref=domeinnaam.nl&type=json" class="text-blue-500">http://api.postcodedata.nl/v1/postcode/?postcode=1211EP&streetnumber=60&ref=domeinnaam.nl&type=json</a></td>
                    <td class="py-2 px-4 border-b">Provide geolocation data based on postcode for Dutch addresses</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Random Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://random-data-api.com" class="text-blue-500">https://random-data-api.com</a></td>
                    <td class="py-2 px-4 border-b">Random data generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Recreation Information Database</td>
                    <td class="py-2 px-4 border-b"><a href="https://ridb.recreation.gov/" class="text-blue-500">https://ridb.recreation.gov/</a></td>
                    <td class="py-2 px-4 border-b">Recreational areas, federal lands, historic sites, museums, and other attractions/resourcesUS</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Rwanda Locations</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/victorkarangwa4/api/rwanda" class="text-blue-500">https://rapidapi.com/victorkarangwa4/api/rwanda</a></td>
                    <td class="py-2 px-4 border-b">Rwanda Provences, Districts, Cities, Capital City, Sector, cells, villages and streets</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">SEC EDGAR Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.sec.gov/edgar/sec-api-documentation" class="text-blue-500">https://www.sec.gov/edgar/sec-api-documentation</a></td>
                    <td class="py-2 px-4 border-b">API to access annual reports of public US companies</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Sport Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://sportdataapi.com" class="text-blue-500">https://sportdataapi.com</a></td>
                    <td class="py-2 px-4 border-b">Get sports data from all over the world</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Sport List & Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.decathlon.com/products/sports" class="text-blue-500">https://developers.decathlon.com/products/sports</a></td>
                    <td class="py-2 px-4 border-b">List of and resources related to sports</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">StockData</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.StockData.org" class="text-blue-500">https://www.StockData.org</a></td>
                    <td class="py-2 px-4 border-b">Real-Time, Intraday & Historical Market Data, News and Sentiment API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Tax Data API</td>
                    <td class="py-2 px-4 border-b"><a href="https://apilayer.com/marketplace/tax_data-api" class="text-blue-500">https://apilayer.com/marketplace/tax_data-api</a></td>
                    <td class="py-2 px-4 border-b">Instant VAT number and tax validation across the globe</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unkown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Food & Drink</td>
                    <td class="py-2 px-4 border-b">TheMealDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.themealdb.com/api.php" class="text-blue-500">https://www.themealdb.com/api.php</a></td>
                    <td class="py-2 px-4 border-b">Meal Recipes</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Twelve Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://twelvedata.com/" class="text-blue-500">https://twelvedata.com/</a></td>
                    <td class="py-2 px-4 border-b">Stock market data real-time & historical</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">UPC database</td>
                    <td class="py-2 px-4 border-b"><a href="https://upcdatabase.org/api" class="text-blue-500">https://upcdatabase.org/api</a></td>
                    <td class="py-2 px-4 border-b">More than 1.5 million barcode numbers from all around the world</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">US Presidential Election Data by TogaTech</td>
                    <td class="py-2 px-4 border-b"><a href="https://uselection.togatech.org/api/" class="text-blue-500">https://uselection.togatech.org/api/</a></td>
                    <td class="py-2 px-4 border-b">Basic candidate data and live electoral vote counts for top two parties in US presidential election</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Jobs</td>
                    <td class="py-2 px-4 border-b">USAJOBS</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.usajobs.gov/" class="text-blue-500">https://developer.usajobs.gov/</a></td>
                    <td class="py-2 px-4 border-b">US government job board</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Uebermaps</td>
                    <td class="py-2 px-4 border-b"><a href="https://uebermaps.com/api/v2" class="text-blue-500">https://uebermaps.com/api/v2</a></td>
                    <td class="py-2 px-4 border-b">Discover and share maps with friends</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Umeå Open Data</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.umea.se/api/" class="text-blue-500">https://opendata.umea.se/api/</a></td>
                    <td class="py-2 px-4 border-b">Open data of the city Umeå in northen Sweden</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Watchdata</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.watchdata.io" class="text-blue-500">https://docs.watchdata.io</a></td>
                    <td class="py-2 px-4 border-b">Provide simple and reliable API access to Ethereum blockchain</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Jobs</td>
                    <td class="py-2 px-4 border-b">WhatJobs</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.whatjobs.com/affiliates" class="text-blue-500">https://www.whatjobs.com/affiliates</a></td>
                    <td class="py-2 px-4 border-b">Job search engine</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">Wikidata</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.wikidata.org/w/api.php?action=help" class="text-blue-500">https://www.wikidata.org/w/api.php?action=help</a></td>
                    <td class="py-2 px-4 border-b">Collaboratively edited knowledge base operated by the Wikimedia Foundation</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Media & Knowledge</td>
                    <td class="py-2 px-4 border-b">Wikipedia</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mediawiki.org/wiki/API:Main_page" class="text-blue-500">https://www.mediawiki.org/wiki/API:Main_page</a></td>
                    <td class="py-2 px-4 border-b">Mediawiki Encyclopedia</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">Yandex.Maps Geocoder</td>
                    <td class="py-2 px-4 border-b"><a href="https://yandex.com/dev/maps/geocoder" class="text-blue-500">https://yandex.com/dev/maps/geocoder</a></td>
                    <td class="py-2 px-4 border-b">Use geocoding to get an object's coordinates from its address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Pets & Animals</td>
                    <td class="py-2 px-4 border-b">Zoo Animals</td>
                    <td class="py-2 px-4 border-b"><a href="https://zoo-animal-api.herokuapp.com/" class="text-blue-500">https://zoo-animal-api.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Facts and pictures of zoo animals</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Data & Analytics</td>
                    <td class="py-2 px-4 border-b">adresse.data.gouv.fr</td>
                    <td class="py-2 px-4 border-b"><a href="https://adresse.data.gouv.fr" class="text-blue-500">https://adresse.data.gouv.fr</a></td>
                    <td class="py-2 px-4 border-b">Address database of France, geocoding and reverse</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Media & Knowledge</td>
                    <td class="py-2 px-4 border-b">apilayer mediastack</td>
                    <td class="py-2 px-4 border-b"><a href="https://mediastack.com/" class="text-blue-500">https://mediastack.com/</a></td>
                    <td class="py-2 px-4 border-b">Free, Simple REST API for Live News & Blog Articles</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">geoPlugin</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.geoplugin.com" class="text-blue-500">https://www.geoplugin.com</a></td>
                    <td class="py-2 px-4 border-b">IP geolocation and currency conversion</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">ipgeolocation</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipgeolocation.io/" class="text-blue-500">https://ipgeolocation.io/</a></td>
                    <td class="py-2 px-4 border-b">IP Geolocation AP with free plan 30k requests per month</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">keycdn IP Location Finder</td>
                    <td class="py-2 px-4 border-b"><a href="https://tools.keycdn.com/geo" class="text-blue-500">https://tools.keycdn.com/geo</a></td>
                    <td class="py-2 px-4 border-b">Get the IP geolocation data through the simple REST API. All the responses are JSON encoded</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Geolocation & Maps</td>
                    <td class="py-2 px-4 border-b">openSenseMap</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.opensensemap.org/" class="text-blue-500">https://api.opensensemap.org/</a></td>
                    <td class="py-2 px-4 border-b">Data from Personal Weather Stations called senseBoxes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">0x</td>
                    <td class="py-2 px-4 border-b"><a href="https://0x.org/api" class="text-blue-500">https://0x.org/api</a></td>
                    <td class="py-2 px-4 border-b">API for querying token and pool stats across various liquidity pools</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">18F</td>
                    <td class="py-2 px-4 border-b"><a href="http://18f.github.io/API-All-the-X/" class="text-blue-500">http://18f.github.io/API-All-the-X/</a></td>
                    <td class="py-2 px-4 border-b">Unofficial US Federal Government API Development</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">1Forge</td>
                    <td class="py-2 px-4 border-b"><a href="https://1forge.com/forex-data-api/api-documentation" class="text-blue-500">https://1forge.com/forex-data-api/api-documentation</a></td>
                    <td class="py-2 px-4 border-b">Forex currency market data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">1inch</td>
                    <td class="py-2 px-4 border-b"><a href="https://1inch.io/api/" class="text-blue-500">https://1inch.io/api/</a></td>
                    <td class="py-2 px-4 border-b">API for querying decentralize exchange</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">1pt</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/1pt-co/api/blob/main/README.md" class="text-blue-500">https://github.com/1pt-co/api/blob/main/README.md</a></td>
                    <td class="py-2 px-4 border-b">A simple URL shortener</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">24 Pull Requests</td>
                    <td class="py-2 px-4 border-b"><a href="https://24pullrequests.com/api" class="text-blue-500">https://24pullrequests.com/api</a></td>
                    <td class="py-2 px-4 border-b">Project to promote open source collaboration during December</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">4chan</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/4chan/4chan-API" class="text-blue-500">https://github.com/4chan/4chan-API</a></td>
                    <td class="py-2 px-4 border-b">Simple image-based bulletin board dedicated to a variety of topics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">7Timer!</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.7timer.info/doc.php?lang=en" class="text-blue-500">http://www.7timer.info/doc.php?lang=en</a></td>
                    <td class="py-2 px-4 border-b">Weather, especially for Astroweather</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">7digital</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.7digital.com/reference" class="text-blue-500">https://docs.7digital.com/reference</a></td>
                    <td class="py-2 px-4 border-b">Api of Music store 7digital</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">A Bíblia Digital</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.abibliadigital.com.br/en" class="text-blue-500">https://www.abibliadigital.com.br/en</a></td>
                    <td class="py-2 px-4 border-b">Do not worry about managing the multiple versions of the Bible</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ADS-B Exchange</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.adsbexchange.com/data/" class="text-blue-500">https://www.adsbexchange.com/data/</a></td>
                    <td class="py-2 px-4 border-b">Access real-time and historical data of any and all airborne aircraft</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AI For Thai</td>
                    <td class="py-2 px-4 border-b"><a href="https://aiforthai.in.th/index.php" class="text-blue-500">https://aiforthai.in.th/index.php</a></td>
                    <td class="py-2 px-4 border-b">Free Various Thai AI API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AI Mastering</td>
                    <td class="py-2 px-4 border-b"><a href="https://aimastering.com/api_docs/" class="text-blue-500">https://aimastering.com/api_docs/</a></td>
                    <td class="py-2 px-4 border-b">Automated Music Mastering</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AIS Hub</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.aishub.net/api" class="text-blue-500">http://www.aishub.net/api</a></td>
                    <td class="py-2 px-4 border-b">Real-time data of any marine and inland vessel equipped with AIS tracking system</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">API Grátis</td>
                    <td class="py-2 px-4 border-b"><a href="https://apigratis.com.br/" class="text-blue-500">https://apigratis.com.br/</a></td>
                    <td class="py-2 px-4 border-b">Multiples services and public APIs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">API Setu</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.apisetu.gov.in/" class="text-blue-500">https://www.apisetu.gov.in/</a></td>
                    <td class="py-2 px-4 border-b">An Indian Government platform that provides a lot of APIS for KYC, business, education & employment</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">API-FOOTBALL</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.api-football.com/documentation-v3" class="text-blue-500">https://www.api-football.com/documentation-v3</a></td>
                    <td class="py-2 px-4 border-b">Get information about Football Leagues & Cups</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">APITemplate.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://apitemplate.io" class="text-blue-500">https://apitemplate.io</a></td>
                    <td class="py-2 px-4 border-b">Dynamically generate images and PDFs from templates with a simple API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">APIXU</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.apixu.com/doc/request.aspx" class="text-blue-500">https://www.apixu.com/doc/request.aspx</a></td>
                    <td class="py-2 px-4 border-b">Weather</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">APIs.guru</td>
                    <td class="py-2 px-4 border-b"><a href="https://apis.guru/api-doc/" class="text-blue-500">https://apis.guru/api-doc/</a></td>
                    <td class="py-2 px-4 border-b">Wikipedia for Web APIs, OpenAPI/Swagger specs for public APIs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AQICN</td>
                    <td class="py-2 px-4 border-b"><a href="https://aqicn.org/api/" class="text-blue-500">https://aqicn.org/api/</a></td>
                    <td class="py-2 px-4 border-b">Air Quality Index Data for over 1000 cities</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AZ511</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.az511.com/developers/doc" class="text-blue-500">https://www.az511.com/developers/doc</a></td>
                    <td class="py-2 px-4 border-b">Access traffic data from the ADOT API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Abstract Email Validation</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.abstractapi.com/email-verification-validation-api" class="text-blue-500">https://www.abstractapi.com/email-verification-validation-api</a></td>
                    <td class="py-2 px-4 border-b">Validate email addresses for deliverability and spam</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Abstract Phone Validation</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.abstractapi.com/phone-validation-api" class="text-blue-500">https://www.abstractapi.com/phone-validation-api</a></td>
                    <td class="py-2 px-4 border-b">Validate phone numbers globally</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Abstract Public Holidays</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.abstractapi.com/holidays-api" class="text-blue-500">https://www.abstractapi.com/holidays-api</a></td>
                    <td class="py-2 px-4 border-b">Data on national, regional, and religious holidays via API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Abstract Screenshot</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.abstractapi.com/website-screenshot-api" class="text-blue-500">https://www.abstractapi.com/website-screenshot-api</a></td>
                    <td class="py-2 px-4 border-b">Take programmatic screenshots of web pages from any website</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Abstract VAT Validation</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.abstractapi.com/vat-validation-rates-api" class="text-blue-500">https://www.abstractapi.com/vat-validation-rates-api</a></td>
                    <td class="py-2 px-4 border-b">Validate VAT numbers and calculate VAT rates</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AbuseIPDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.abuseipdb.com/" class="text-blue-500">https://docs.abuseipdb.com/</a></td>
                    <td class="py-2 px-4 border-b">IP/domain/URL reputation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AccuWeather</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.accuweather.com/apis" class="text-blue-500">https://developer.accuweather.com/apis</a></td>
                    <td class="py-2 px-4 border-b">Weather and forecast data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Actinia Grass GIS</td>
                    <td class="py-2 px-4 border-b"><a href="https://actinia.mundialis.de/api_docs/" class="text-blue-500">https://actinia.mundialis.de/api_docs/</a></td>
                    <td class="py-2 px-4 border-b">Actinia is an open source REST API for geographical data that uses GRASS GIS</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Advice Slip</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.adviceslip.com/" class="text-blue-500">http://api.adviceslip.com/</a></td>
                    <td class="py-2 px-4 border-b">Generate random advice slips</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Adzuna</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.adzuna.com/overview" class="text-blue-500">https://developer.adzuna.com/overview</a></td>
                    <td class="py-2 px-4 border-b">Job board aggregator</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Aemet</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.aemet.es/centrodedescargas/inicio" class="text-blue-500">https://opendata.aemet.es/centrodedescargas/inicio</a></td>
                    <td class="py-2 px-4 border-b">Weather and forecast data from Spain</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Aftership</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.aftership.com/reference/quick-start" class="text-blue-500">https://developers.aftership.com/reference/quick-start</a></td>
                    <td class="py-2 px-4 border-b">API to update, manage and track shipment efficiently</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Age of Empires II</td>
                    <td class="py-2 px-4 border-b"><a href="https://age-of-empires-2-api.herokuapp.com" class="text-blue-500">https://age-of-empires-2-api.herokuapp.com</a></td>
                    <td class="py-2 px-4 border-b">Get information about Age of Empires II resources</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Agify.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://agify.io" class="text-blue-500">https://agify.io</a></td>
                    <td class="py-2 px-4 border-b">Estimates the age from a first name</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Airtable</td>
                    <td class="py-2 px-4 border-b"><a href="https://airtable.com/api" class="text-blue-500">https://airtable.com/api</a></td>
                    <td class="py-2 px-4 border-b">Integrate with Airtable</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Airtel IP</td>
                    <td class="py-2 px-4 border-b"><a href="https://sys.airtel.lv/ip2country/1.1.1.1/?full=true" class="text-blue-500">https://sys.airtel.lv/ip2country/1.1.1.1/?full=true</a></td>
                    <td class="py-2 px-4 border-b">IP Geolocation API. Collecting data from multiple sources</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Alchemy Ethereum</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.alchemy.com/alchemy/" class="text-blue-500">https://docs.alchemy.com/alchemy/</a></td>
                    <td class="py-2 px-4 border-b">Ethereum Node-as-a-Service Provider</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Aletheia</td>
                    <td class="py-2 px-4 border-b"><a href="https://aletheiaapi.com/" class="text-blue-500">https://aletheiaapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Insider trading data, earnings call analysis, financial statements, and more</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AlienVault Open Threat Exchange OTX</td>
                    <td class="py-2 px-4 border-b"><a href="https://otx.alienvault.com/api" class="text-blue-500">https://otx.alienvault.com/api</a></td>
                    <td class="py-2 px-4 border-b">IP/domain/URL reputation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Alpaca</td>
                    <td class="py-2 px-4 border-b"><a href="https://alpaca.markets/docs/api-documentation/api-v2/market-data/alpaca-data-api-v2/" class="text-blue-500">https://alpaca.markets/docs/api-documentation/api-v2/market-data/alpaca-data-api-v2/</a></td>
                    <td class="py-2 px-4 border-b">Realtime and historical market data on all US equities and ETFs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Alpha Vantage</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.alphavantage.co/" class="text-blue-500">https://www.alphavantage.co/</a></td>
                    <td class="py-2 px-4 border-b">Realtime and historical stock data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Amadeus for Developers</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.amadeus.com/self-service" class="text-blue-500">https://developers.amadeus.com/self-service</a></td>
                    <td class="py-2 px-4 border-b">Travel Search - Limited usage</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Amdoren</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.amdoren.com/currency-api/" class="text-blue-500">https://www.amdoren.com/currency-api/</a></td>
                    <td class="py-2 px-4 border-b">Free currency API with over 150 currencies</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AmiiboAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://amiiboapi.com/" class="text-blue-500">https://amiiboapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Nintendo Amiibo Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Améthyste</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.amethyste.moe/" class="text-blue-500">https://api.amethyste.moe/</a></td>
                    <td class="py-2 px-4 border-b">Generate images for Discord users</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">An API of Ice And Fire</td>
                    <td class="py-2 px-4 border-b"><a href="https://anapioficeandfire.com/" class="text-blue-500">https://anapioficeandfire.com/</a></td>
                    <td class="py-2 px-4 border-b">Game Of Thrones API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AniAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://aniapi.com/docs/" class="text-blue-500">https://aniapi.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Anime discovery, streaming & syncing with trackers</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AniDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://wiki.anidb.net/HTTP_API_Definition" class="text-blue-500">https://wiki.anidb.net/HTTP_API_Definition</a></td>
                    <td class="py-2 px-4 border-b">Anime Database</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AniList</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/AniList/ApiV2-GraphQL-Docs" class="text-blue-500">https://github.com/AniList/ApiV2-GraphQL-Docs</a></td>
                    <td class="py-2 px-4 border-b">Anime discovery & tracking</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AnimeChan</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/RocktimSaikia/anime-chan" class="text-blue-500">https://github.com/RocktimSaikia/anime-chan</a></td>
                    <td class="py-2 px-4 border-b">Anime quotes over 10k+</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AnimeFacts</td>
                    <td class="py-2 px-4 border-b"><a href="https://chandan-02.github.io/anime-facts-rest-api/" class="text-blue-500">https://chandan-02.github.io/anime-facts-rest-api/</a></td>
                    <td class="py-2 px-4 border-b">Anime Facts over 100+</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AnimeNewsNetwork</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.animenewsnetwork.com/encyclopedia/api.php" class="text-blue-500">https://www.animenewsnetwork.com/encyclopedia/api.php</a></td>
                    <td class="py-2 px-4 border-b">Anime industry news</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AnonFiles</td>
                    <td class="py-2 px-4 border-b"><a href="https://anonfiles.com/docs/api" class="text-blue-500">https://anonfiles.com/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Upload and share your files anonymously</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Apache Superset</td>
                    <td class="py-2 px-4 border-b"><a href="https://superset.apache.org/docs/api" class="text-blue-500">https://superset.apache.org/docs/api</a></td>
                    <td class="py-2 px-4 border-b">API to manage your BI dashboards and data sources on Superset</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Api2Convert</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.api2convert.com/" class="text-blue-500">https://www.api2convert.com/</a></td>
                    <td class="py-2 px-4 border-b">Online File Conversion API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ApiFlash</td>
                    <td class="py-2 px-4 border-b"><a href="https://apiflash.com/" class="text-blue-500">https://apiflash.com/</a></td>
                    <td class="py-2 px-4 border-b">Chrome based screenshot API for developers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ApiMedic</td>
                    <td class="py-2 px-4 border-b"><a href="https://apimedic.com/" class="text-blue-500">https://apimedic.com/</a></td>
                    <td class="py-2 px-4 border-b">ApiMedic offers a medical symptom checker API primarily for patients</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ApicAgent</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.apicagent.com" class="text-blue-500">https://www.apicagent.com</a></td>
                    <td class="py-2 px-4 border-b">Extract device details from user-agent string</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Apiip</td>
                    <td class="py-2 px-4 border-b"><a href="https://apiip.net/" class="text-blue-500">https://apiip.net/</a></td>
                    <td class="py-2 px-4 border-b">Get location information by IP address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Application Environment Verification</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/fingerprintjs/aev" class="text-blue-500">https://github.com/fingerprintjs/aev</a></td>
                    <td class="py-2 px-4 border-b">Android library and API to verify the safety of user devices, detect rooted devices and other risks</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Arbeitnow</td>
                    <td class="py-2 px-4 border-b"><a href="https://documenter.getpostman.com/view/18545278/UVJbJdKh" class="text-blue-500">https://documenter.getpostman.com/view/18545278/UVJbJdKh</a></td>
                    <td class="py-2 px-4 border-b">API for Job board aggregator in Europe / Remote</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Arbeitsamt</td>
                    <td class="py-2 px-4 border-b"><a href="https://jobsuche.api.bund.dev/" class="text-blue-500">https://jobsuche.api.bund.dev/</a></td>
                    <td class="py-2 px-4 border-b">API for the "Arbeitsamt", which is a german Job board aggregator</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Archive.org</td>
                    <td class="py-2 px-4 border-b"><a href="https://archive.readme.io/docs" class="text-blue-500">https://archive.readme.io/docs</a></td>
                    <td class="py-2 px-4 border-b">The Internet Archive</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Art Institute of Chicago</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.artic.edu/docs/" class="text-blue-500">https://api.artic.edu/docs/</a></td>
                    <td class="py-2 px-4 border-b">Art</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Asana</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.asana.com/docs" class="text-blue-500">https://developers.asana.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Programmatic access to all data in your asana system</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Associated Press</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.ap.org/" class="text-blue-500">https://developer.ap.org/</a></td>
                    <td class="py-2 px-4 border-b">Search for news and metadata from Associated Press</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Audiomack</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.audiomack.com/data-api/docs" class="text-blue-500">https://www.audiomack.com/data-api/docs</a></td>
                    <td class="py-2 px-4 border-b">Api of the streaming music hub Audiomack</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Auth0</td>
                    <td class="py-2 px-4 border-b"><a href="https://auth0.com" class="text-blue-500">https://auth0.com</a></td>
                    <td class="py-2 px-4 border-b">Easy to implement, adaptable authentication and authorization platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Autochess VNG</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/didadadida93/autochess-vng-api" class="text-blue-500">https://github.com/didadadida93/autochess-vng-api</a></td>
                    <td class="py-2 px-4 border-b">Rest Api for Autochess VNG</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AviationAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.aviationapi.com" class="text-blue-500">https://docs.aviationapi.com</a></td>
                    <td class="py-2 px-4 border-b">FAA Aeronautical Charts and Publications, Airport Information, and Airport Weather</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">AviationWeather</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.aviationweather.gov/dataserver" class="text-blue-500">https://www.aviationweather.gov/dataserver</a></td>
                    <td class="py-2 px-4 border-b">NOAA aviation weather forecasts and observations</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Axolotl</td>
                    <td class="py-2 px-4 border-b"><a href="https://theaxolotlapi.netlify.app/" class="text-blue-500">https://theaxolotlapi.netlify.app/</a></td>
                    <td class="py-2 px-4 border-b">Collection of axolotl pictures and facts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Aylien Text Analysis</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.aylien.com/textapi/#getting-started" class="text-blue-500">https://docs.aylien.com/textapi/#getting-started</a></td>
                    <td class="py-2 px-4 border-b">A collection of information retrieval and natural language APIs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ayrshare</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ayrshare.com" class="text-blue-500">https://www.ayrshare.com</a></td>
                    <td class="py-2 px-4 border-b">Social media APIs to post, get analytics, and manage multiple users social media accounts</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Azure DevOps</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.microsoft.com/en-us/rest/api/azure/devops" class="text-blue-500">https://docs.microsoft.com/en-us/rest/api/azure/devops</a></td>
                    <td class="py-2 px-4 border-b">The Azure DevOps basic components of a REST API request/response pair</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BC Ferries</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.bcferriesapi.ca" class="text-blue-500">https://www.bcferriesapi.ca</a></td>
                    <td class="py-2 px-4 border-b">Sailing times and capacities for BC Ferries</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BCLaws</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.bclaws.gov.bc.ca/civix/template/complete/api/index.html" class="text-blue-500">https://www.bclaws.gov.bc.ca/civix/template/complete/api/index.html</a></td>
                    <td class="py-2 px-4 border-b">Access to the laws of British Columbia</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BIC-Boxtech</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.bic-boxtech.org/" class="text-blue-500">https://docs.bic-boxtech.org/</a></td>
                    <td class="py-2 px-4 border-b">Container technical detail for the global container fleet</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bacon Ipsum</td>
                    <td class="py-2 px-4 border-b"><a href="https://baconipsum.com/json-api/" class="text-blue-500">https://baconipsum.com/json-api/</a></td>
                    <td class="py-2 px-4 border-b">A Meatier Lorem Ipsum Generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BaconMockup</td>
                    <td class="py-2 px-4 border-b"><a href="https://baconmockup.com/" class="text-blue-500">https://baconmockup.com/</a></td>
                    <td class="py-2 px-4 border-b">Resizable bacon placeholder images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Banco do Brasil</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.bb.com.br/home" class="text-blue-500">https://developers.bb.com.br/home</a></td>
                    <td class="py-2 px-4 border-b">All Banco do Brasil financial transaction APIs</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bandcamp</td>
                    <td class="py-2 px-4 border-b"><a href="https://bandcamp.com/developer" class="text-blue-500">https://bandcamp.com/developer</a></td>
                    <td class="py-2 px-4 border-b">API of Music store Bandcamp</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bandsintown</td>
                    <td class="py-2 px-4 border-b"><a href="https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0" class="text-blue-500">https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0</a></td>
                    <td class="py-2 px-4 border-b">Music Events</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bank of Russia</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cbr.ru/development/SXML/" class="text-blue-500">https://www.cbr.ru/development/SXML/</a></td>
                    <td class="py-2 px-4 border-b">Exchange rates and currency conversion</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Barter.VG</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/bartervg/barter.vg/wiki" class="text-blue-500">https://github.com/bartervg/barter.vg/wiki</a></td>
                    <td class="py-2 px-4 border-b">Provides information about Game, DLC, Bundles, Giveaways, Trading</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Base</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.base-api.io/" class="text-blue-500">https://www.base-api.io/</a></td>
                    <td class="py-2 px-4 border-b">Building quick backends</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Battle.net</td>
                    <td class="py-2 px-4 border-b"><a href="https://develop.battle.net/documentation/guides/getting-started" class="text-blue-500">https://develop.battle.net/documentation/guides/getting-started</a></td>
                    <td class="py-2 px-4 border-b">Diablo III, Hearthstone, StarCraft II and World of Warcraft game data APIs</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Battuta</td>
                    <td class="py-2 px-4 border-b"><a href="http://battuta.medunes.net" class="text-blue-500">http://battuta.medunes.net</a></td>
                    <td class="py-2 px-4 border-b">A country/region/city in-cascade location API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bay Area Rapid Transit</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.bart.gov" class="text-blue-500">http://api.bart.gov</a></td>
                    <td class="py-2 px-4 border-b">Stations and predicted arrivals for BART</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BayFiles</td>
                    <td class="py-2 px-4 border-b"><a href="https://bayfiles.com/docs/api" class="text-blue-500">https://bayfiles.com/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Upload and share your files</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Beeceptor</td>
                    <td class="py-2 px-4 border-b"><a href="https://beeceptor.com/" class="text-blue-500">https://beeceptor.com/</a></td>
                    <td class="py-2 px-4 border-b">Build a mock Rest API endpoint in seconds</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Best Buy</td>
                    <td class="py-2 px-4 border-b"><a href="https://bestbuyapis.github.io/api-documentation/#overview" class="text-blue-500">https://bestbuyapis.github.io/api-documentation/#overview</a></td>
                    <td class="py-2 px-4 border-b">Products, Buying Options, Categories, Recommendations, Stores and Commerce</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bhagavad Gita</td>
                    <td class="py-2 px-4 border-b"><a href="https://bhagavadgita.io/api" class="text-blue-500">https://bhagavadgita.io/api</a></td>
                    <td class="py-2 px-4 border-b">Bhagavad Gita text</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bhagavad Gita</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.bhagavadgitaapi.in" class="text-blue-500">https://docs.bhagavadgitaapi.in</a></td>
                    <td class="py-2 px-4 border-b">Open Source Shrimad Bhagavad Gita API including 21+ authors translation in Sanskrit/English/Hindi</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bhagavad Gita telugu</td>
                    <td class="py-2 px-4 border-b"><a href="https://gita-api.vercel.app" class="text-blue-500">https://gita-api.vercel.app</a></td>
                    <td class="py-2 px-4 border-b">Bhagavad Gita API in telugu and odia languages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bible-api</td>
                    <td class="py-2 px-4 border-b"><a href="https://bible-api.com/" class="text-blue-500">https://bible-api.com/</a></td>
                    <td class="py-2 px-4 border-b">Free Bible API with multiple languages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Billplz</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.billplz.com/api" class="text-blue-500">https://www.billplz.com/api</a></td>
                    <td class="py-2 px-4 border-b">Payment platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Binance</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/binance/binance-spot-api-docs" class="text-blue-500">https://github.com/binance/binance-spot-api-docs</a></td>
                    <td class="py-2 px-4 border-b">Exchange for Trading Cryptocurrencies based in China</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BinaryEdge</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.binaryedge.io/api-v2.html" class="text-blue-500">https://docs.binaryedge.io/api-v2.html</a></td>
                    <td class="py-2 px-4 border-b">Provide access to BinaryEdge 40fy scanning platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Binlist</td>
                    <td class="py-2 px-4 border-b"><a href="https://binlist.net/" class="text-blue-500">https://binlist.net/</a></td>
                    <td class="py-2 px-4 border-b">Public access to a database of IIN/BIN information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Biriyani As A Service</td>
                    <td class="py-2 px-4 border-b"><a href="https://biriyani.anoram.com/" class="text-blue-500">https://biriyani.anoram.com/</a></td>
                    <td class="py-2 px-4 border-b">Biriyani images placeholder</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BitWarden</td>
                    <td class="py-2 px-4 border-b"><a href="https://bitwarden.com/help/api/" class="text-blue-500">https://bitwarden.com/help/api/</a></td>
                    <td class="py-2 px-4 border-b">Best open-source password manager</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bitbucket</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.atlassian.com/bitbucket/api/2/reference/" class="text-blue-500">https://developer.atlassian.com/bitbucket/api/2/reference/</a></td>
                    <td class="py-2 px-4 border-b">Bitbucket API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bitcambio</td>
                    <td class="py-2 px-4 border-b"><a href="https://nova.bitcambio.com.br/api/v3/docs#a-public" class="text-blue-500">https://nova.bitcambio.com.br/api/v3/docs#a-public</a></td>
                    <td class="py-2 px-4 border-b">Get the list of all traded assets in the exchange</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BitcoinAverage</td>
                    <td class="py-2 px-4 border-b"><a href="https://apiv2.bitcoinaverage.com/" class="text-blue-500">https://apiv2.bitcoinaverage.com/</a></td>
                    <td class="py-2 px-4 border-b">Digital Asset Price Data for the blockchain industry</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BitcoinCharts</td>
                    <td class="py-2 px-4 border-b"><a href="https://bitcoincharts.com/about/exchanges/" class="text-blue-500">https://bitcoincharts.com/about/exchanges/</a></td>
                    <td class="py-2 px-4 border-b">Financial and Technical Data related to the Bitcoin Network</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bitfinex</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.bitfinex.com/docs" class="text-blue-500">https://docs.bitfinex.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency Trading Platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bitly</td>
                    <td class="py-2 px-4 border-b"><a href="http://dev.bitly.com/get_started.html" class="text-blue-500">http://dev.bitly.com/get_started.html</a></td>
                    <td class="py-2 px-4 border-b">URL shortener and link management</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bitmex</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.bitmex.com/app/apiOverview" class="text-blue-500">https://www.bitmex.com/app/apiOverview</a></td>
                    <td class="py-2 px-4 border-b">Real-Time Cryptocurrency derivatives trading platform based in Hong Kong</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bitquery</td>
                    <td class="py-2 px-4 border-b"><a href="https://graphql.bitquery.io/ide" class="text-blue-500">https://graphql.bitquery.io/ide</a></td>
                    <td class="py-2 px-4 border-b">Onchain GraphQL APIs & DEX APIs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bitrise</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-docs.bitrise.io/" class="text-blue-500">https://api-docs.bitrise.io/</a></td>
                    <td class="py-2 px-4 border-b">Build tool and processes integrations to create efficient development pipelines</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bittrex</td>
                    <td class="py-2 px-4 border-b"><a href="https://bittrex.github.io/api/v3" class="text-blue-500">https://bittrex.github.io/api/v3</a></td>
                    <td class="py-2 px-4 border-b">Next Generation Crypto Trading Platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BlaBlaCar</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev.blablacar.com" class="text-blue-500">https://dev.blablacar.com</a></td>
                    <td class="py-2 px-4 border-b">Search car sharing trips</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Black History Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.blackhistoryapi.io/docs" class="text-blue-500">https://www.blackhistoryapi.io/docs</a></td>
                    <td class="py-2 px-4 border-b">Contribute or search one of the largest black history fact databases on the web</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Blague.xyz</td>
                    <td class="py-2 px-4 border-b"><a href="https://blague.xyz/" class="text-blue-500">https://blague.xyz/</a></td>
                    <td class="py-2 px-4 border-b">La plus grande API de Blagues FR/The biggest FR jokes API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Blitapp</td>
                    <td class="py-2 px-4 border-b"><a href="https://blitapp.com/api/" class="text-blue-500">https://blitapp.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Schedule screenshots of web pages and sync them to your cloud</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Block</td>
                    <td class="py-2 px-4 border-b"><a href="https://block.io/docs/basic" class="text-blue-500">https://block.io/docs/basic</a></td>
                    <td class="py-2 px-4 border-b">Bitcoin Payment, Wallet & Transaction Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Blockchain</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.blockchain.com/api" class="text-blue-500">https://www.blockchain.com/api</a></td>
                    <td class="py-2 px-4 border-b">Bitcoin Payment, Wallet & Transaction Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Blogger</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/blogger/" class="text-blue-500">https://developers.google.com/blogger/</a></td>
                    <td class="py-2 px-4 border-b">The Blogger APIs allows client applications to view and update Blogger content</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Blynk-Cloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://blynkapi.docs.apiary.io/#" class="text-blue-500">https://blynkapi.docs.apiary.io/#</a></td>
                    <td class="py-2 px-4 border-b">Control IoT Devices from Blynk IoT Cloud</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Board Game Geek</td>
                    <td class="py-2 px-4 border-b"><a href="https://boardgamegeek.com/wiki/page/BGG_XML_API2" class="text-blue-500">https://boardgamegeek.com/wiki/page/BGG_XML_API2</a></td>
                    <td class="py-2 px-4 border-b">Board games, RPG and videogames</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bob's Burgers</td>
                    <td class="py-2 px-4 border-b"><a href="https://bobs-burgers-api-ui.herokuapp.com" class="text-blue-500">https://bobs-burgers-api-ui.herokuapp.com</a></td>
                    <td class="py-2 px-4 border-b">Bob's Burgers API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Boleto.Cloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://boleto.cloud/" class="text-blue-500">https://boleto.cloud/</a></td>
                    <td class="py-2 px-4 border-b">A api to generate boletos in Brazil</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bored</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.boredapi.com/" class="text-blue-500">https://www.boredapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Find random activities to fight boredom</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Boston MBTA Transit</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mbta.com/developers/v3-api" class="text-blue-500">https://www.mbta.com/developers/v3-api</a></td>
                    <td class="py-2 px-4 border-b">Stations and predicted arrivals for MBTA</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Botd</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/fingerprintjs/botd" class="text-blue-500">https://github.com/fingerprintjs/botd</a></td>
                    <td class="py-2 px-4 border-b">Botd is a browser library for JavaScript bot detection</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BotsArchive</td>
                    <td class="py-2 px-4 border-b"><a href="https://botsarchive.com/docs.html" class="text-blue-500">https://botsarchive.com/docs.html</a></td>
                    <td class="py-2 px-4 border-b">JSON formatted details about Telegram Bots available in database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Box</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.box.com/" class="text-blue-500">https://developer.box.com/</a></td>
                    <td class="py-2 px-4 border-b">File Sharing and Storage</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Brainshop.ai</td>
                    <td class="py-2 px-4 border-b"><a href="https://brainshop.ai/" class="text-blue-500">https://brainshop.ai/</a></td>
                    <td class="py-2 px-4 border-b">Make A Free A.I Brain</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Brave NewCoin</td>
                    <td class="py-2 px-4 border-b"><a href="https://bravenewcoin.com/developers" class="text-blue-500">https://bravenewcoin.com/developers</a></td>
                    <td class="py-2 px-4 border-b">Real-time and historic crypto data from more than 200+ exchanges</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Brawl Stars</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.brawlstars.com" class="text-blue-500">https://developer.brawlstars.com</a></td>
                    <td class="py-2 px-4 border-b">Brawl Stars Game Information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Brazil</td>
                    <td class="py-2 px-4 border-b"><a href="https://brasilapi.com.br/" class="text-blue-500">https://brasilapi.com.br/</a></td>
                    <td class="py-2 px-4 border-b">Community driven API for Brazil Public Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Brazil Receita WS</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.receitaws.com.br/" class="text-blue-500">https://www.receitaws.com.br/</a></td>
                    <td class="py-2 px-4 border-b">Consult companies by CNPJ for Brazilian companies</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Brazilian Vehicles and Prices</td>
                    <td class="py-2 px-4 border-b"><a href="https://deividfortuna.github.io/fipe/" class="text-blue-500">https://deividfortuna.github.io/fipe/</a></td>
                    <td class="py-2 px-4 border-b">Vehicles information from Fundação Instituto de Pesquisas Econômicas - Fipe</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Breaking Bad</td>
                    <td class="py-2 px-4 border-b"><a href="https://breakingbadapi.com/documentation" class="text-blue-500">https://breakingbadapi.com/documentation</a></td>
                    <td class="py-2 px-4 border-b">Breaking Bad API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Breaking Bad Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/shevabam/breaking-bad-quotes" class="text-blue-500">https://github.com/shevabam/breaking-bad-quotes</a></td>
                    <td class="py-2 px-4 border-b">Some Breaking Bad quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BreezoMeter Pollen</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.breezometer.com/api-documentation/pollen-api/v2/" class="text-blue-500">https://docs.breezometer.com/api-documentation/pollen-api/v2/</a></td>
                    <td class="py-2 px-4 border-b">Daily Forecast pollen conditions data for a specific location</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">British National Bibliography</td>
                    <td class="py-2 px-4 border-b"><a href="http://bnb.data.bl.uk/" class="text-blue-500">http://bnb.data.bl.uk/</a></td>
                    <td class="py-2 px-4 border-b">Books</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Browshot</td>
                    <td class="py-2 px-4 border-b"><a href="https://browshot.com/api/documentation" class="text-blue-500">https://browshot.com/api/documentation</a></td>
                    <td class="py-2 px-4 border-b">Easily make screenshots of web pages in any screen size, as any device</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bruzu</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.bruzu.com" class="text-blue-500">https://docs.bruzu.com</a></td>
                    <td class="py-2 px-4 border-b">Image generation with query string</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">BtcTurk</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.btcturk.com/" class="text-blue-500">https://docs.btcturk.com/</a></td>
                    <td class="py-2 px-4 border-b">Real-time cryptocurrency data, graphs and API that allows buy&sell</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Buddy</td>
                    <td class="py-2 px-4 border-b"><a href="https://buddy.works/docs/api/getting-started/overview" class="text-blue-500">https://buddy.works/docs/api/getting-started/overview</a></td>
                    <td class="py-2 px-4 border-b">The fastest continuous integration and continuous delivery platform</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bugcrowd</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.bugcrowd.com/api/getting-started/" class="text-blue-500">https://docs.bugcrowd.com/api/getting-started/</a></td>
                    <td class="py-2 px-4 border-b">Bugcrowd API for interacting and tracking the reported issues programmatically</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bugsnax</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.bugsnaxapi.com/" class="text-blue-500">https://www.bugsnaxapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Get information about Bugsnax</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Bybit</td>
                    <td class="py-2 px-4 border-b"><a href="https://bybit-exchange.github.io/docs/linear/#t-introduction" class="text-blue-500">https://bybit-exchange.github.io/docs/linear/#t-introduction</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency data feed and algorithmic trading</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CAPEsandbox</td>
                    <td class="py-2 px-4 border-b"><a href="https://capev2.readthedocs.io/en/latest/usage/api.html" class="text-blue-500">https://capev2.readthedocs.io/en/latest/usage/api.html</a></td>
                    <td class="py-2 px-4 border-b">Malware execution and analysis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CARTO</td>
                    <td class="py-2 px-4 border-b"><a href="https://carto.com/" class="text-blue-500">https://carto.com/</a></td>
                    <td class="py-2 px-4 border-b">Location Information Prediction</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CDNJS</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.cdnjs.com/libraries/jquery" class="text-blue-500">https://api.cdnjs.com/libraries/jquery</a></td>
                    <td class="py-2 px-4 border-b">Library info on CDNJS</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CMS.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.cms.gov/provider-data/" class="text-blue-500">https://data.cms.gov/provider-data/</a></td>
                    <td class="py-2 px-4 border-b">Access to the data from the CMS - medicare.gov</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CO2 Offset</td>
                    <td class="py-2 px-4 border-b"><a href="https://co2offset.io/api.html" class="text-blue-500">https://co2offset.io/api.html</a></td>
                    <td class="py-2 px-4 border-b">API calculates and validates the carbon footprint</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CORE</td>
                    <td class="py-2 px-4 border-b"><a href="https://core.ac.uk/services#api" class="text-blue-500">https://core.ac.uk/services#api</a></td>
                    <td class="py-2 px-4 border-b">Access the world's Open Access research papers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CORS Proxy</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/burhanuday/cors-proxy" class="text-blue-500">https://github.com/burhanuday/cors-proxy</a></td>
                    <td class="py-2 px-4 border-b">Get around the dreaded CORS error by using this proxy as a middle man</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">COVID-19 Tracker Canada</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.covid19tracker.ca/docs/1.0/overview" class="text-blue-500">https://api.covid19tracker.ca/docs/1.0/overview</a></td>
                    <td class="py-2 px-4 border-b">Details on Covid-19 cases across Canada</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">COVID-19 Tracker Sri Lanka</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.hpb.health.gov.lk/en/api-documentation" class="text-blue-500">https://www.hpb.health.gov.lk/en/api-documentation</a></td>
                    <td class="py-2 px-4 border-b">Provides situation of the COVID-19 patients reported in Sri Lanka</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">COVID-ID</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.covid19.go.id/public/api/prov.json" class="text-blue-500">https://data.covid19.go.id/public/api/prov.json</a></td>
                    <td class="py-2 px-4 border-b">Indonesian government Covid data per province</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CRXcavator</td>
                    <td class="py-2 px-4 border-b"><a href="https://crxcavator.io/apidocs" class="text-blue-500">https://crxcavator.io/apidocs</a></td>
                    <td class="py-2 px-4 border-b">Chrome extension risk scoring</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CTS</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.cts-strasbourg.eu/" class="text-blue-500">https://api.cts-strasbourg.eu/</a></td>
                    <td class="py-2 px-4 border-b">CTS Realtime API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Calendarific</td>
                    <td class="py-2 px-4 border-b"><a href="https://calendarific.com/" class="text-blue-500">https://calendarific.com/</a></td>
                    <td class="py-2 px-4 border-b">Worldwide Holidays</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Callook.info</td>
                    <td class="py-2 px-4 border-b"><a href="https://callook.info" class="text-blue-500">https://callook.info</a></td>
                    <td class="py-2 px-4 border-b">United States ham radio callsigns</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Canadian Football League CFL</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.cfl.ca/" class="text-blue-500">http://api.cfl.ca/</a></td>
                    <td class="py-2 px-4 border-b">Official JSON API providing real-time league, team and player statistics about the CFL</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Carbon Interface</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.carboninterface.com/" class="text-blue-500">https://docs.carboninterface.com/</a></td>
                    <td class="py-2 px-4 border-b">API to calculate carbon C02 emissions estimates for common C02 emitting activities</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cartes.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/M-Media-Group/Cartes.io/wiki/API" class="text-blue-500">https://github.com/M-Media-Group/Cartes.io/wiki/API</a></td>
                    <td class="py-2 px-4 border-b">Create maps and markers for anything</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cat Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://alexwohlbruck.github.io/cat-facts/" class="text-blue-500">https://alexwohlbruck.github.io/cat-facts/</a></td>
                    <td class="py-2 px-4 border-b">Daily cat facts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cataas</td>
                    <td class="py-2 px-4 border-b"><a href="https://cataas.com/" class="text-blue-500">https://cataas.com/</a></td>
                    <td class="py-2 px-4 border-b">Cat as a service cats pictures and gifs</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Catalogopolis</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.catalogopolis.xyz/docs/" class="text-blue-500">https://api.catalogopolis.xyz/docs/</a></td>
                    <td class="py-2 px-4 border-b">Doctor Who API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Catboy</td>
                    <td class="py-2 px-4 border-b"><a href="https://catboys.com/api" class="text-blue-500">https://catboys.com/api</a></td>
                    <td class="py-2 px-4 border-b">Neko images, funny GIFs & more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Catch The Show</td>
                    <td class="py-2 px-4 border-b"><a href="https://catchtheshow.herokuapp.com/api/documentation" class="text-blue-500">https://catchtheshow.herokuapp.com/api/documentation</a></td>
                    <td class="py-2 px-4 border-b">REST API for next-episode.net</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cats</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.thecatapi.com/" class="text-blue-500">https://docs.thecatapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Pictures of cats from Tumblr</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Census.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.census.gov/data/developers/data-sets.html" class="text-blue-500">https://www.census.gov/data/developers/data-sets.html</a></td>
                    <td class="py-2 px-4 border-b">The US Census Bureau provides various APIs and data sets on demographics and businesses</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Censys</td>
                    <td class="py-2 px-4 border-b"><a href="https://search.censys.io/api" class="text-blue-500">https://search.censys.io/api</a></td>
                    <td class="py-2 px-4 border-b">Search engine for Internet connected host and devices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cep.la</td>
                    <td class="py-2 px-4 border-b"><a href="http://cep.la/" class="text-blue-500">http://cep.la/</a></td>
                    <td class="py-2 px-4 border-b">Brazil RESTful API to find information about streets, zip codes, neighborhoods, cities and states</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Chainlink</td>
                    <td class="py-2 px-4 border-b"><a href="https://chain.link/developer-resources" class="text-blue-500">https://chain.link/developer-resources</a></td>
                    <td class="py-2 px-4 border-b">Build hybrid smart contracts with Chainlink</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Chainpoint</td>
                    <td class="py-2 px-4 border-b"><a href="https://tierion.com/chainpoint/" class="text-blue-500">https://tierion.com/chainpoint/</a></td>
                    <td class="py-2 px-4 border-b">Chainpoint is a global network for anchoring data to the Bitcoin blockchain</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Changelogs.md</td>
                    <td class="py-2 px-4 border-b"><a href="https://changelogs.md" class="text-blue-500">https://changelogs.md</a></td>
                    <td class="py-2 px-4 border-b">Structured changelog metadata from open source projects</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Charity Search</td>
                    <td class="py-2 px-4 border-b"><a href="http://charityapi.orghunter.com/" class="text-blue-500">http://charityapi.orghunter.com/</a></td>
                    <td class="py-2 px-4 border-b">Non-profit charity data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CheapShark</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cheapshark.com/api" class="text-blue-500">https://www.cheapshark.com/api</a></td>
                    <td class="py-2 px-4 border-b">Steam/PC Game Prices and Deals</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Checkiday - National Holiday API</td>
                    <td class="py-2 px-4 border-b"><a href="https://apilayer.com/marketplace/checkiday-api" class="text-blue-500">https://apilayer.com/marketplace/checkiday-api</a></td>
                    <td class="py-2 px-4 border-b">Industry-leading Holiday API. Over 5,000 holidays and thousands of descriptions. Trusted by the World’s leading companies</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CheetahO</td>
                    <td class="py-2 px-4 border-b"><a href="https://cheetaho.com/docs/getting-started/" class="text-blue-500">https://cheetaho.com/docs/getting-started/</a></td>
                    <td class="py-2 px-4 border-b">Photo optimization and resize</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Chess.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.chess.com/news/view/published-data-api" class="text-blue-500">https://www.chess.com/news/view/published-data-api</a></td>
                    <td class="py-2 px-4 border-b">Chess.com read-only REST API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Chinese Character Web</td>
                    <td class="py-2 px-4 border-b"><a href="http://ccdb.hemiola.com/" class="text-blue-500">http://ccdb.hemiola.com/</a></td>
                    <td class="py-2 px-4 border-b">Chinese character definitions and pronunciations</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Chinese Text Project</td>
                    <td class="py-2 px-4 border-b"><a href="https://ctext.org/tools/api" class="text-blue-500">https://ctext.org/tools/api</a></td>
                    <td class="py-2 px-4 border-b">Online open-access digital library for pre-modern Chinese texts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Chomp</td>
                    <td class="py-2 px-4 border-b"><a href="https://chompthis.com/api/" class="text-blue-500">https://chompthis.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Data about various grocery products and foods</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Chronicling America</td>
                    <td class="py-2 px-4 border-b"><a href="http://chroniclingamerica.loc.gov/about/api/" class="text-blue-500">http://chroniclingamerica.loc.gov/about/api/</a></td>
                    <td class="py-2 px-4 border-b">Provides access to millions of pages of historic US newspapers from the Library of Congress</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Church Calendar</td>
                    <td class="py-2 px-4 border-b"><a href="http://calapi.inadiutorium.cz/" class="text-blue-500">http://calapi.inadiutorium.cz/</a></td>
                    <td class="py-2 px-4 border-b">Catholic liturgical calendar</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ciprand</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/polarspetroll/ciprand" class="text-blue-500">https://github.com/polarspetroll/ciprand</a></td>
                    <td class="py-2 px-4 border-b">Secure random string generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CircleCI</td>
                    <td class="py-2 px-4 border-b"><a href="https://circleci.com/docs/api/v1-reference/" class="text-blue-500">https://circleci.com/docs/api/v1-reference/</a></td>
                    <td class="py-2 px-4 border-b">Automate the software development process using continuous integration and continuous delivery</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cisco Spark</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.ciscospark.com" class="text-blue-500">https://developer.ciscospark.com</a></td>
                    <td class="py-2 px-4 border-b">Team Collaboration Software</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Citi</td>
                    <td class="py-2 px-4 border-b"><a href="https://sandbox.developerhub.citi.com/api-catalog-list" class="text-blue-500">https://sandbox.developerhub.citi.com/api-catalog-list</a></td>
                    <td class="py-2 px-4 border-b">All Citigroup account and statement data APIs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">City Bikes</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.citybik.es/v2/" class="text-blue-500">https://api.citybik.es/v2/</a></td>
                    <td class="py-2 px-4 border-b">City Bikes around the world</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">City, Berlin</td>
                    <td class="py-2 px-4 border-b"><a href="https://daten.berlin.de/" class="text-blue-500">https://daten.berlin.de/</a></td>
                    <td class="py-2 px-4 border-b">BerlinDE City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">City, Gdańsk</td>
                    <td class="py-2 px-4 border-b"><a href="https://ckan.multimediagdansk.pl/en" class="text-blue-500">https://ckan.multimediagdansk.pl/en</a></td>
                    <td class="py-2 px-4 border-b">Gdańsk PL City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">City, Gdynia</td>
                    <td class="py-2 px-4 border-b"><a href="http://otwartedane.gdynia.pl/en/api_doc.html" class="text-blue-500">http://otwartedane.gdynia.pl/en/api_doc.html</a></td>
                    <td class="py-2 px-4 border-b">Gdynia PL City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">City, Helsinki</td>
                    <td class="py-2 px-4 border-b"><a href="https://hri.fi/en_gb/" class="text-blue-500">https://hri.fi/en_gb/</a></td>
                    <td class="py-2 px-4 border-b">HelsinkiFI City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">City, Lviv</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.city-adm.lviv.ua/" class="text-blue-500">https://opendata.city-adm.lviv.ua/</a></td>
                    <td class="py-2 px-4 border-b">LvivUA City Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CitySDK</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.citysdk.eu/citysdk-toolkit/" class="text-blue-500">http://www.citysdk.eu/citysdk-toolkit/</a></td>
                    <td class="py-2 px-4 border-b">Open APIs for select European cities</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Clarifai</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.clarifai.com/api-guide/api-overview" class="text-blue-500">https://docs.clarifai.com/api-guide/api-overview</a></td>
                    <td class="py-2 px-4 border-b">Computer Vision</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Clash Royale</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.clashroyale.com" class="text-blue-500">https://developer.clashroyale.com</a></td>
                    <td class="py-2 px-4 border-b">Clash Royale Game Information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Clash of Clans</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.clashofclans.com" class="text-blue-500">https://developer.clashofclans.com</a></td>
                    <td class="py-2 px-4 border-b">Clash of Clans Game Information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Classify</td>
                    <td class="py-2 px-4 border-b"><a href="https://classify-web.herokuapp.com/#/api" class="text-blue-500">https://classify-web.herokuapp.com/#/api</a></td>
                    <td class="py-2 px-4 border-b">Encrypting & decrypting text messages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CleanURI</td>
                    <td class="py-2 px-4 border-b"><a href="https://cleanuri.com/docs" class="text-blue-500">https://cleanuri.com/docs</a></td>
                    <td class="py-2 px-4 border-b">URL shortener service</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Clearbit Logo</td>
                    <td class="py-2 px-4 border-b"><a href="https://clearbit.com/docs#logo-api" class="text-blue-500">https://clearbit.com/docs#logo-api</a></td>
                    <td class="py-2 px-4 border-b">Search for company logos and embed them in your projects</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ClickMeter</td>
                    <td class="py-2 px-4 border-b"><a href="https://support.clickmeter.com/hc/en-us/categories/201474986" class="text-blue-500">https://support.clickmeter.com/hc/en-us/categories/201474986</a></td>
                    <td class="py-2 px-4 border-b">Monitor, compare and optimize your marketing links</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ClickUp</td>
                    <td class="py-2 px-4 border-b"><a href="https://clickup.com/api" class="text-blue-500">https://clickup.com/api</a></td>
                    <td class="py-2 px-4 border-b">ClickUp is a robust, cloud-based project management tool for boosting productivity</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Clico</td>
                    <td class="py-2 px-4 border-b"><a href="https://cli.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config" class="text-blue-500">https://cli.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config</a></td>
                    <td class="py-2 px-4 border-b">URL shortener service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Climatiq</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.climatiq.io" class="text-blue-500">https://docs.climatiq.io</a></td>
                    <td class="py-2 px-4 border-b">Calculate the environmental footprint created by a broad range of emission-generating activities</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Clockify</td>
                    <td class="py-2 px-4 border-b"><a href="https://clockify.me/developers-api " class="text-blue-500">https://clockify.me/developers-api </a></td>
                    <td class="py-2 px-4 border-b">Clockify's REST-based API can be used to push/pull data to/from it & integrate it with other systems</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CloudConvert</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloudconvert.com/api/v2" class="text-blue-500">https://cloudconvert.com/api/v2</a></td>
                    <td class="py-2 px-4 border-b">Online file converter for audio, video, document, ebook, archive, image, spreadsheet, presentation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cloudbet</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cloudbet.com/api/" class="text-blue-500">https://www.cloudbet.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Official Cloudbet API provides real-time sports odds and betting API to place bets programmatically</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cloudflare Trace</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/fawazahmed0/cloudflare-trace-api" class="text-blue-500">https://github.com/fawazahmed0/cloudflare-trace-api</a></td>
                    <td class="py-2 px-4 border-b">Get IP Address, Timestamp, User Agent, Country Code, IATA, HTTP Version, TLS/SSL Version & More</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cloudmersive</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cloudmersive.com/image-recognition-and-processing-api" class="text-blue-500">https://www.cloudmersive.com/image-recognition-and-processing-api</a></td>
                    <td class="py-2 px-4 border-b">Image captioning, face recognition, NSFW classification</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cloudmersive Natural Language Processing</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cloudmersive.com/nlp-api" class="text-blue-500">https://www.cloudmersive.com/nlp-api</a></td>
                    <td class="py-2 px-4 border-b">Natural language processing and text analysis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cloudmersive Validate</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloudmersive.com/validate-api" class="text-blue-500">https://cloudmersive.com/validate-api</a></td>
                    <td class="py-2 px-4 border-b">Validate email addresses, phone numbers, VAT numbers and domain names</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cloudmersive Validate</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloudmersive.com/phone-number-validation-API" class="text-blue-500">https://cloudmersive.com/phone-number-validation-API</a></td>
                    <td class="py-2 px-4 border-b">Validate international phone numbers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cloverly</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cloverly.com/carbon-offset-documentation" class="text-blue-500">https://www.cloverly.com/carbon-offset-documentation</a></td>
                    <td class="py-2 px-4 border-b">API calculates the impact of common carbon-intensive activities in real time</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Code Detection API</td>
                    <td class="py-2 px-4 border-b"><a href="https://codedetectionapi.runtime.dev" class="text-blue-500">https://codedetectionapi.runtime.dev</a></td>
                    <td class="py-2 px-4 border-b">Detect, label, format and enrich the code in your app or in your data pipeline</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Code.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://code.gov" class="text-blue-500">https://code.gov</a></td>
                    <td class="py-2 px-4 border-b">The primary platform for Open Source and code sharing for the U.S. Federal Government</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Code::Stats</td>
                    <td class="py-2 px-4 border-b"><a href="https://codestats.net/api-docs" class="text-blue-500">https://codestats.net/api-docs</a></td>
                    <td class="py-2 px-4 border-b">Automatic time tracking for programmers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Codeforces</td>
                    <td class="py-2 px-4 border-b"><a href="https://codeforces.com/apiHelp" class="text-blue-500">https://codeforces.com/apiHelp</a></td>
                    <td class="py-2 px-4 border-b">Get access to Codeforces data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Codeship</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.cloudbees.com/docs/cloudbees-codeship/latest/api-overview/" class="text-blue-500">https://docs.cloudbees.com/docs/cloudbees-codeship/latest/api-overview/</a></td>
                    <td class="py-2 px-4 border-b">Codeship is a Continuous Integration Platform in the cloud</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Codex</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Jaagrav/CodeX" class="text-blue-500">https://github.com/Jaagrav/CodeX</a></td>
                    <td class="py-2 px-4 border-b">Online Compiler for Various Languages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coffee</td>
                    <td class="py-2 px-4 border-b"><a href="https://coffee.alexflipnote.dev/" class="text-blue-500">https://coffee.alexflipnote.dev/</a></td>
                    <td class="py-2 px-4 border-b">Random pictures of coffee</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.coinapi.io/" class="text-blue-500">https://docs.coinapi.io/</a></td>
                    <td class="py-2 px-4 border-b">All Currency Exchanges integrate under a single api</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinCap</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.coincap.io/" class="text-blue-500">https://docs.coincap.io/</a></td>
                    <td class="py-2 px-4 border-b">Real time Cryptocurrency prices through a RESTful API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinDCX</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.coindcx.com/" class="text-blue-500">https://docs.coindcx.com/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency Trading Platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinDesk</td>
                    <td class="py-2 px-4 border-b"><a href="https://old.coindesk.com/coindesk-api/" class="text-blue-500">https://old.coindesk.com/coindesk-api/</a></td>
                    <td class="py-2 px-4 border-b">CoinDesk's Bitcoin Price Index BPI in multiple currencies</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinGecko</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.coingecko.com/api" class="text-blue-500">http://www.coingecko.com/api</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency Price, Market, and Developer/Social Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinMarketCap</td>
                    <td class="py-2 px-4 border-b"><a href="https://coinmarketcap.com/api/" class="text-blue-500">https://coinmarketcap.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Prices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinRanking</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.coinranking.com/api/documentation" class="text-blue-500">https://developers.coinranking.com/api/documentation</a></td>
                    <td class="py-2 px-4 border-b">Live Cryptocurrency data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CoinStats</td>
                    <td class="py-2 px-4 border-b"><a href="https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest" class="text-blue-500">https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest</a></td>
                    <td class="py-2 px-4 border-b">Crypto Tracker</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coinbase</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.coinbase.com" class="text-blue-500">https://developers.coinbase.com</a></td>
                    <td class="py-2 px-4 border-b">Bitcoin, Bitcoin Cash, Litecoin and Ethereum Prices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coinbase Pro</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.pro.coinbase.com/#api" class="text-blue-500">https://docs.pro.coinbase.com/#api</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency Trading Platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coinigy</td>
                    <td class="py-2 px-4 border-b"><a href="https://coinigy.docs.apiary.io" class="text-blue-500">https://coinigy.docs.apiary.io</a></td>
                    <td class="py-2 px-4 border-b">Interacting with Coinigy Accounts and Exchange Directly</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coinlib</td>
                    <td class="py-2 px-4 border-b"><a href="https://coinlib.io/apidocs" class="text-blue-500">https://coinlib.io/apidocs</a></td>
                    <td class="py-2 px-4 border-b">Crypto Currency Prices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coinlore</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.coinlore.com/cryptocurrency-data-api" class="text-blue-500">https://www.coinlore.com/cryptocurrency-data-api</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies prices, volume and more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coinpaprika</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.coinpaprika.com" class="text-blue-500">https://api.coinpaprika.com</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies prices, volume and more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coinremitter</td>
                    <td class="py-2 px-4 border-b"><a href="https://coinremitter.com/docs" class="text-blue-500">https://coinremitter.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Payment & Prices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CollegeScoreCard.ed.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://collegescorecard.ed.gov/data/" class="text-blue-500">https://collegescorecard.ed.gov/data/</a></td>
                    <td class="py-2 px-4 border-b">Data on higher education institutions in the United States</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Collins</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.collinsdictionary.com/api/v1/documentation/html/" class="text-blue-500">https://api.collinsdictionary.com/api/v1/documentation/html/</a></td>
                    <td class="py-2 px-4 border-b">Bilingual Dictionary and Thesaurus Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Colorado Information Marketplace</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.colorado.gov/" class="text-blue-500">https://data.colorado.gov/</a></td>
                    <td class="py-2 px-4 border-b">Colorado State Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ColorfulClouds</td>
                    <td class="py-2 px-4 border-b"><a href="https://open.caiyunapp.com/ColorfulClouds_Weather_API" class="text-blue-500">https://open.caiyunapp.com/ColorfulClouds_Weather_API</a></td>
                    <td class="py-2 px-4 border-b">Weather</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Colormind</td>
                    <td class="py-2 px-4 border-b"><a href="http://colormind.io/api-access/" class="text-blue-500">http://colormind.io/api-access/</a></td>
                    <td class="py-2 px-4 border-b">Color scheme generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ColourLovers</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.colourlovers.com/api" class="text-blue-500">http://www.colourlovers.com/api</a></td>
                    <td class="py-2 px-4 border-b">Get various patterns, palettes and images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Comic Vine</td>
                    <td class="py-2 px-4 border-b"><a href="https://comicvine.gamespot.com/api/documentation" class="text-blue-500">https://comicvine.gamespot.com/api/documentation</a></td>
                    <td class="py-2 px-4 border-b">Comics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Community Transit</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/transitland/transitland-datastore/blob/master/README.md#api-endpoints" class="text-blue-500">https://github.com/transitland/transitland-datastore/blob/master/README.md#api-endpoints</a></td>
                    <td class="py-2 px-4 border-b">Transitland API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Compare Flight Prices</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/obryan-software-obryan-software-default/api/compare-flight-prices/" class="text-blue-500">https://rapidapi.com/obryan-software-obryan-software-default/api/compare-flight-prices/</a></td>
                    <td class="py-2 px-4 border-b">API for comparing flight prices across platforms</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Complete Criminal Checks</td>
                    <td class="py-2 px-4 border-b"><a href="https://completecriminalchecks.com/Developers" class="text-blue-500">https://completecriminalchecks.com/Developers</a></td>
                    <td class="py-2 px-4 border-b">Provides data of offenders from all U.S. States and Pureto Rico</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Contentful Images</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.contentful.com/developers/docs/references/images-api/" class="text-blue-500">https://www.contentful.com/developers/docs/references/images-api/</a></td>
                    <td class="py-2 px-4 border-b">Used to retrieve and apply transformations to images</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cooper Hewitt</td>
                    <td class="py-2 px-4 border-b"><a href="https://collection.cooperhewitt.org/api" class="text-blue-500">https://collection.cooperhewitt.org/api</a></td>
                    <td class="py-2 px-4 border-b">Smithsonian Design Museum</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coronavirus</td>
                    <td class="py-2 px-4 border-b"><a href="https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme" class="text-blue-500">https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme</a></td>
                    <td class="py-2 px-4 border-b">HTTP API for Latest Covid-19 Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Coronavirus in the UK</td>
                    <td class="py-2 px-4 border-b"><a href="https://coronavirus.data.gov.uk/details/developers-guide" class="text-blue-500">https://coronavirus.data.gov.uk/details/developers-guide</a></td>
                    <td class="py-2 px-4 border-b">UK Government coronavirus data, including deaths and cases by region</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Corporate Buzz Words</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/sameerkumar18/corporate-bs-generator-api" class="text-blue-500">https://github.com/sameerkumar18/corporate-bs-generator-api</a></td>
                    <td class="py-2 px-4 border-b">REST API for Corporate Buzz Words</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Correios</td>
                    <td class="py-2 px-4 border-b"><a href="https://cws.correios.com.br/ajuda" class="text-blue-500">https://cws.correios.com.br/ajuda</a></td>
                    <td class="py-2 px-4 border-b">Integration to provide information and prepare shipments using Correio's services</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CountAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://countapi.xyz" class="text-blue-500">https://countapi.xyz</a></td>
                    <td class="py-2 px-4 border-b">Free and simple counting service. You can use it to track page hits and specific events</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Countly</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.count.ly/reference" class="text-blue-500">https://api.count.ly/reference</a></td>
                    <td class="py-2 px-4 border-b">Countly web analytics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Country</td>
                    <td class="py-2 px-4 border-b"><a href="http://country.is/" class="text-blue-500">http://country.is/</a></td>
                    <td class="py-2 px-4 border-b">Get your visitor's country from their IP</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CountryStateCity</td>
                    <td class="py-2 px-4 border-b"><a href="https://countrystatecity.in/" class="text-blue-500">https://countrystatecity.in/</a></td>
                    <td class="py-2 px-4 border-b">World countries, states, regions, provinces, cities & towns in JSON, SQL, XML, YAML, & CSV format</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covalent</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.covalenthq.com/docs/api/" class="text-blue-500">https://www.covalenthq.com/docs/api/</a></td>
                    <td class="py-2 px-4 border-b">Multi-blockchain data aggregator platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid Tracking Project</td>
                    <td class="py-2 px-4 border-b"><a href="https://covidtracking.com/data/api/version-2" class="text-blue-500">https://covidtracking.com/data/api/version-2</a></td>
                    <td class="py-2 px-4 border-b">Covid-19  data for the US</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid-19</td>
                    <td class="py-2 px-4 border-b"><a href="https://covid19api.com/" class="text-blue-500">https://covid19api.com/</a></td>
                    <td class="py-2 px-4 border-b">Covid 19 spread, infection and recovery</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid-19</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/M-Media-Group/Covid-19-API" class="text-blue-500">https://github.com/M-Media-Group/Covid-19-API</a></td>
                    <td class="py-2 px-4 border-b">Covid 19 cases, deaths and recovery per country</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid-19 Datenhub</td>
                    <td class="py-2 px-4 border-b"><a href="https://npgeo-corona-npgeo-de.hub.arcgis.com" class="text-blue-500">https://npgeo-corona-npgeo-de.hub.arcgis.com</a></td>
                    <td class="py-2 px-4 border-b">Maps, datasets, applications and more in the context of COVID-19</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid-19 Government Response</td>
                    <td class="py-2 px-4 border-b"><a href="https://covidtracker.bsg.ox.ac.uk" class="text-blue-500">https://covidtracker.bsg.ox.ac.uk</a></td>
                    <td class="py-2 px-4 border-b">Government measures tracker to fight against the Covid-19 pandemic</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid-19 India</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.covid19india.org/" class="text-blue-500">https://data.covid19india.org/</a></td>
                    <td class="py-2 px-4 border-b">Covid 19 statistics state and district wise about cases, vaccinations, recovery within India</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid-19 JHU CSSE</td>
                    <td class="py-2 px-4 border-b"><a href="https://nuttaphat.com/covid19-api/" class="text-blue-500">https://nuttaphat.com/covid19-api/</a></td>
                    <td class="py-2 px-4 border-b">Open-source API for exploring Covid19 cases based on JHU CSSE</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Covid-19 Philippines</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Simperfy/Covid-19-API-Philippines-DOH" class="text-blue-500">https://github.com/Simperfy/Covid-19-API-Philippines-DOH</a></td>
                    <td class="py-2 px-4 border-b">Unofficial Covid-19 Web API for Philippines from data collected by DOH</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Crafatar</td>
                    <td class="py-2 px-4 border-b"><a href="https://crafatar.com" class="text-blue-500">https://crafatar.com</a></td>
                    <td class="py-2 px-4 border-b">API for Minecraft skins and faces</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CraftMyPDF</td>
                    <td class="py-2 px-4 border-b"><a href="https://craftmypdf.com" class="text-blue-500">https://craftmypdf.com</a></td>
                    <td class="py-2 px-4 border-b">Generate PDF documents from templates with a drop-and-drop editor and a simple API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Creative Commons Catalog</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.creativecommons.engineering/" class="text-blue-500">https://api.creativecommons.engineering/</a></td>
                    <td class="py-2 px-4 border-b">Search among openly licensed and public domain works</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cross Universe</td>
                    <td class="py-2 px-4 border-b"><a href="https://crossuniverse.psychpsyo.com/apiDocs.html" class="text-blue-500">https://crossuniverse.psychpsyo.com/apiDocs.html</a></td>
                    <td class="py-2 px-4 border-b">Cross Universe Card Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CryptAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.cryptapi.io/" class="text-blue-500">https://docs.cryptapi.io/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency Payment Processor</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CryptingUp</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cryptingup.com/apidoc/#introduction" class="text-blue-500">https://www.cryptingup.com/apidoc/#introduction</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CryptoCompare</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cryptocompare.com/api#" class="text-blue-500">https://www.cryptocompare.com/api#</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Comparison</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CryptoMarket</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.exchange.cryptomkt.com/" class="text-blue-500">https://api.exchange.cryptomkt.com/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Trading platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cryptonator</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cryptonator.com/api/" class="text-blue-500">https://www.cryptonator.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Exchange Rates</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Currency-api</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/fawazahmed0/currency-api#readme" class="text-blue-500">https://github.com/fawazahmed0/currency-api#readme</a></td>
                    <td class="py-2 px-4 border-b">Free Currency Exchange Rates API with 150+ Currencies & No Rate Limits</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CurrencyFreaks</td>
                    <td class="py-2 px-4 border-b"><a href="https://currencyfreaks.com/" class="text-blue-500">https://currencyfreaks.com/</a></td>
                    <td class="py-2 px-4 border-b">Provides current and historical currency exchange rates with free plan 1K requests/month</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">CurrencyScoop</td>
                    <td class="py-2 px-4 border-b"><a href="https://currencyscoop.com/api-documentation" class="text-blue-500">https://currencyscoop.com/api-documentation</a></td>
                    <td class="py-2 px-4 border-b">Real-time and historical currency rates JSON API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Currencylayer</td>
                    <td class="py-2 px-4 border-b"><a href="https://currencylayer.com/documentation" class="text-blue-500">https://currencylayer.com/documentation</a></td>
                    <td class="py-2 px-4 border-b">Exchange rates and currency conversion</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Currents</td>
                    <td class="py-2 px-4 border-b"><a href="https://currentsapi.services/" class="text-blue-500">https://currentsapi.services/</a></td>
                    <td class="py-2 px-4 border-b">Latest news published in various news sources, blogs and forums</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Cutt.ly</td>
                    <td class="py-2 px-4 border-b"><a href="https://cutt.ly/api-documentation/cuttly-links-api" class="text-blue-500">https://cutt.ly/api-documentation/cuttly-links-api</a></td>
                    <td class="py-2 px-4 border-b">URL shortener service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Czech Namedays Calendar</td>
                    <td class="py-2 px-4 border-b"><a href="https://svatky.adresa.info" class="text-blue-500">https://svatky.adresa.info</a></td>
                    <td class="py-2 px-4 border-b">Lookup for a name and returns nameday date</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Czech National Bank</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.xml" class="text-blue-500">https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.xml</a></td>
                    <td class="py-2 px-4 border-b">A collection of exchange rates</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Czech Television</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.ceskatelevize.cz/xml/tv-program/" class="text-blue-500">http://www.ceskatelevize.cz/xml/tv-program/</a></td>
                    <td class="py-2 px-4 border-b">TV programme of Czech TV</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dagpi</td>
                    <td class="py-2 px-4 border-b"><a href="https://dagpi.xyz" class="text-blue-500">https://dagpi.xyz</a></td>
                    <td class="py-2 px-4 border-b">Image manipulation and processing</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dailymotion</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.dailymotion.com/" class="text-blue-500">https://developer.dailymotion.com/</a></td>
                    <td class="py-2 px-4 border-b">Dailymotion Developer API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Danbooru Anime</td>
                    <td class="py-2 px-4 border-b"><a href="https://danbooru.donmai.us/wiki_pages/help:api" class="text-blue-500">https://danbooru.donmai.us/wiki_pages/help:api</a></td>
                    <td class="py-2 px-4 border-b">Thousands of anime artist database to find good anime art</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Deck of Cards</td>
                    <td class="py-2 px-4 border-b"><a href="http://deckofcardsapi.com/" class="text-blue-500">http://deckofcardsapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Deck of Cards</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Deepcode</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.deepcode.ai" class="text-blue-500">https://www.deepcode.ai</a></td>
                    <td class="py-2 px-4 border-b">AI for code review</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Deezer</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.deezer.com/api" class="text-blue-500">https://developers.deezer.com/api</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dehash.lt</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Dehash-lt/api" class="text-blue-500">https://github.com/Dehash-lt/api</a></td>
                    <td class="py-2 px-4 border-b">Hash decryption MD5, SHA1, SHA3, SHA256, SHA384, SHA512</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Destiny The Game</td>
                    <td class="py-2 px-4 border-b"><a href="https://bungie-net.github.io/multi/index.html" class="text-blue-500">https://bungie-net.github.io/multi/index.html</a></td>
                    <td class="py-2 px-4 border-b">Bungie Platform API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Detect Language</td>
                    <td class="py-2 px-4 border-b"><a href="https://detectlanguage.com/" class="text-blue-500">https://detectlanguage.com/</a></td>
                    <td class="py-2 px-4 border-b">Detects text language</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Deutscher Bundestag DIP</td>
                    <td class="py-2 px-4 border-b"><a href="https://dip.bundestag.de/documents/informationsblatt_zur_dip_api_v01.pdf" class="text-blue-500">https://dip.bundestag.de/documents/informationsblatt_zur_dip_api_v01.pdf</a></td>
                    <td class="py-2 px-4 border-b">This API provides read access to DIP entities e.g. activities, persons, printed material</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dev.to</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.forem.com/api" class="text-blue-500">https://developers.forem.com/api</a></td>
                    <td class="py-2 px-4 border-b">Access Forem articles, users and other resources via API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dialogflow</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloud.google.com/dialogflow/docs/" class="text-blue-500">https://cloud.google.com/dialogflow/docs/</a></td>
                    <td class="py-2 px-4 border-b">Natural Language Processing</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dicebear Avatars</td>
                    <td class="py-2 px-4 border-b"><a href="https://avatars.dicebear.com/" class="text-blue-500">https://avatars.dicebear.com/</a></td>
                    <td class="py-2 px-4 border-b">Generate random pixel-art avatars</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dictum</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/fisenkodv/dictum" class="text-blue-500">https://github.com/fisenkodv/dictum</a></td>
                    <td class="py-2 px-4 border-b">API to get access to the collection of the most inspiring expressions of mankind</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Digi-Key</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.digikey.com/en/resources/api-solutions" class="text-blue-500">https://www.digikey.com/en/resources/api-solutions</a></td>
                    <td class="py-2 px-4 border-b">Retrieve price and inventory of electronic components as well as place orders</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Digimon Information</td>
                    <td class="py-2 px-4 border-b"><a href="https://digimon-api.vercel.app/" class="text-blue-500">https://digimon-api.vercel.app/</a></td>
                    <td class="py-2 px-4 border-b">Provides information about digimon creatures</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Digimon TCG</td>
                    <td class="py-2 px-4 border-b"><a href="https://documenter.getpostman.com/view/14059948/TzecB4fH" class="text-blue-500">https://documenter.getpostman.com/view/14059948/TzecB4fH</a></td>
                    <td class="py-2 px-4 border-b">Search for Digimon cards in digimoncard.io</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">DigitalOcean Status</td>
                    <td class="py-2 px-4 border-b"><a href="https://status.digitalocean.com/api" class="text-blue-500">https://status.digitalocean.com/api</a></td>
                    <td class="py-2 px-4 border-b">Status of all DigitalOcean services</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Discogs</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.discogs.com/developers/" class="text-blue-500">https://www.discogs.com/developers/</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Discord</td>
                    <td class="py-2 px-4 border-b"><a href="https://discord.com/developers/docs/intro" class="text-blue-500">https://discord.com/developers/docs/intro</a></td>
                    <td class="py-2 px-4 border-b">Make bots for Discord, integrate Discord onto an external platform</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Disify</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.disify.com/" class="text-blue-500">https://www.disify.com/</a></td>
                    <td class="py-2 px-4 border-b">Validate and detect disposable and temporary email addresses</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Disney</td>
                    <td class="py-2 px-4 border-b"><a href="https://disneyapi.dev" class="text-blue-500">https://disneyapi.dev</a></td>
                    <td class="py-2 px-4 border-b">Information of Disney characters</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Disqus</td>
                    <td class="py-2 px-4 border-b"><a href="https://disqus.com/api/docs/auth/" class="text-blue-500">https://disqus.com/api/docs/auth/</a></td>
                    <td class="py-2 px-4 border-b">Communicate with Disqus data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Docker Hub</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.docker.com/docker-hub/api/latest/" class="text-blue-500">https://docs.docker.com/docker-hub/api/latest/</a></td>
                    <td class="py-2 px-4 border-b">Interact with Docker Hub</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dog Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://dukengn.github.io/Dog-facts-API/" class="text-blue-500">https://dukengn.github.io/Dog-facts-API/</a></td>
                    <td class="py-2 px-4 border-b">Random dog facts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dog Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://kinduff.github.io/dog-api/" class="text-blue-500">https://kinduff.github.io/dog-api/</a></td>
                    <td class="py-2 px-4 border-b">Random facts of Dogs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Doge-Meme</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.doge-meme.lol/docs" class="text-blue-500">https://api.doge-meme.lol/docs</a></td>
                    <td class="py-2 px-4 border-b">Top meme posts from r/dogecoin which include 'Meme' flair</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dogs</td>
                    <td class="py-2 px-4 border-b"><a href="https://dog.ceo/dog-api/" class="text-blue-500">https://dog.ceo/dog-api/</a></td>
                    <td class="py-2 px-4 border-b">Based on the Stanford Dogs Dataset</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">DomainDb Info</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.domainsdb.info/" class="text-blue-500">https://api.domainsdb.info/</a></td>
                    <td class="py-2 px-4 border-b">Domain name search to find all domains containing particular words/phrases/etc</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Domainsdb.info</td>
                    <td class="py-2 px-4 border-b"><a href="https://domainsdb.info/" class="text-blue-500">https://domainsdb.info/</a></td>
                    <td class="py-2 px-4 border-b">Registered Domain Names Search</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dota 2</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.opendota.com/" class="text-blue-500">https://docs.opendota.com/</a></td>
                    <td class="py-2 px-4 border-b">Provides information about Player stats , Match stats, Rankings for Dota 2</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dribbble</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.dribbble.com" class="text-blue-500">https://developer.dribbble.com</a></td>
                    <td class="py-2 px-4 border-b">Discover the world’s top designers & creatives</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Drivet URL Shortener</td>
                    <td class="py-2 px-4 border-b"><a href="https://wiki.drivet.xyz/en/url-shortener/add-links" class="text-blue-500">https://wiki.drivet.xyz/en/url-shortener/add-links</a></td>
                    <td class="py-2 px-4 border-b">Shorten a long URL easily and fast</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">DropMail</td>
                    <td class="py-2 px-4 border-b"><a href="https://dropmail.me/api/#live-demo" class="text-blue-500">https://dropmail.me/api/#live-demo</a></td>
                    <td class="py-2 px-4 border-b">GraphQL API for creating and managing ephemeral e-mail inboxes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dropbox</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.dropbox.com/developers" class="text-blue-500">https://www.dropbox.com/developers</a></td>
                    <td class="py-2 px-4 border-b">File Sharing and Storage</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Drupal.org</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.drupal.org/drupalorg/docs/api" class="text-blue-500">https://www.drupal.org/drupalorg/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Drupal.org</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ducks Unlimited</td>
                    <td class="py-2 px-4 border-b"><a href="https://gis.ducks.org/datasets/du-university-chapters/api" class="text-blue-500">https://gis.ducks.org/datasets/du-university-chapters/api</a></td>
                    <td class="py-2 px-4 border-b">API explorer that gives a query URL with a JSON response of locations and cities</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dummy Products</td>
                    <td class="py-2 px-4 border-b"><a href="https://dummyproducts-api.herokuapp.com/" class="text-blue-500">https://dummyproducts-api.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">An api to fetch dummy e-commerce products JSON data with placeholder images</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Dune</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/ywalia01/dune-api" class="text-blue-500">https://github.com/ywalia01/dune-api</a></td>
                    <td class="py-2 px-4 border-b">A simple API which provides you with book, character, movie and quotes JSON data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Duply</td>
                    <td class="py-2 px-4 border-b"><a href="https://duply.co/docs#getting-started-api" class="text-blue-500">https://duply.co/docs#getting-started-api</a></td>
                    <td class="py-2 px-4 border-b">Generate, Edit, Scale and Manage Images and Videos Smarter & Faster</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">DynaPictures</td>
                    <td class="py-2 px-4 border-b"><a href="https://dynapictures.com/docs/" class="text-blue-500">https://dynapictures.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Generate Hundreds of Personalized Images in Minutes</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ELI</td>
                    <td class="py-2 px-4 border-b"><a href="https://nlp.insightera.co.th/docs/v1.0" class="text-blue-500">https://nlp.insightera.co.th/docs/v1.0</a></td>
                    <td class="py-2 px-4 border-b">Natural Language Processing Tools for Thai Language</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">EPA</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.epa.gov/developers/data-data-products#apis" class="text-blue-500">https://www.epa.gov/developers/data-data-products#apis</a></td>
                    <td class="py-2 px-4 border-b">Web services and data sets from the US Environmental Protection Agency</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">EPO</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.epo.org/" class="text-blue-500">https://developers.epo.org/</a></td>
                    <td class="py-2 px-4 border-b">European patent search system api</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">EVA</td>
                    <td class="py-2 px-4 border-b"><a href="https://eva.pingutil.com/" class="text-blue-500">https://eva.pingutil.com/</a></td>
                    <td class="py-2 px-4 border-b">Validate email addresses</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">EXMO</td>
                    <td class="py-2 px-4 border-b"><a href="https://documenter.getpostman.com/view/10287440/SzYXWKPi" class="text-blue-500">https://documenter.getpostman.com/view/10287440/SzYXWKPi</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies exchange based in UK</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">EXUDE-API</td>
                    <td class="py-2 px-4 border-b"><a href="http://uttesh.com/exude-api/" class="text-blue-500">http://uttesh.com/exude-api/</a></td>
                    <td class="py-2 px-4 border-b">Used for the primary ways for filtering the stopping, stemming words from the text data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Econdb</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.econdb.com/api/" class="text-blue-500">https://www.econdb.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Global macroeconomic data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Economia.Awesome</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.awesomeapi.com.br/api-de-moedas" class="text-blue-500">https://docs.awesomeapi.com.br/api-de-moedas</a></td>
                    <td class="py-2 px-4 border-b">Portuguese free currency prices and conversion with no rate limits</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">EmailRep</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.emailrep.io/" class="text-blue-500">https://docs.emailrep.io/</a></td>
                    <td class="py-2 px-4 border-b">Email address threat and risk prediction</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">EmojiHub</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/cheatsnake/emojihub" class="text-blue-500">https://github.com/cheatsnake/emojihub</a></td>
                    <td class="py-2 px-4 border-b">Get emojis by categories and groups</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">English Random Words</td>
                    <td class="py-2 px-4 border-b"><a href="https://random-words-api.vercel.app/word" class="text-blue-500">https://random-words-api.vercel.app/word</a></td>
                    <td class="py-2 px-4 border-b">Generate English Random Words with Pronunciation</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Enigma Public</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.enigma.com/docs" class="text-blue-500">https://developers.enigma.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Broadest collection of public data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ergast F1</td>
                    <td class="py-2 px-4 border-b"><a href="http://ergast.com/mrd/" class="text-blue-500">http://ergast.com/mrd/</a></td>
                    <td class="py-2 px-4 border-b">F1 data from the beginning of the world championships in 1950</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Escape</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/polarspetroll/EscapeAPI" class="text-blue-500">https://github.com/polarspetroll/EscapeAPI</a></td>
                    <td class="py-2 px-4 border-b">An API for escaping different kind of queries</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Etherscan</td>
                    <td class="py-2 px-4 border-b"><a href="https://etherscan.io/apis" class="text-blue-500">https://etherscan.io/apis</a></td>
                    <td class="py-2 px-4 border-b">Ethereum explorer API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ethplorer</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API" class="text-blue-500">https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API</a></td>
                    <td class="py-2 px-4 border-b">Ethereum tokens, balances, addresses, history of transactions, contracts, and custom structures</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Etsy</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.etsy.com/developers/documentation/getting_started/api_basics" class="text-blue-500">https://www.etsy.com/developers/documentation/getting_started/api_basics</a></td>
                    <td class="py-2 px-4 border-b">Manage shop and interact with listings</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Europeana</td>
                    <td class="py-2 px-4 border-b"><a href="https://pro.europeana.eu/resources/apis/search" class="text-blue-500">https://pro.europeana.eu/resources/apis/search</a></td>
                    <td class="py-2 px-4 border-b">European Museum and Galleries content</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Euskalmet</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.euskadi.eus/api-euskalmet/-/api-de-euskalmet/" class="text-blue-500">https://opendata.euskadi.eus/api-euskalmet/-/api-de-euskalmet/</a></td>
                    <td class="py-2 px-4 border-b">Meteorological data of the Basque Country</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Eve Online</td>
                    <td class="py-2 px-4 border-b"><a href="https://esi.evetech.net/ui" class="text-blue-500">https://esi.evetech.net/ui</a></td>
                    <td class="py-2 px-4 border-b">Third-Party Developer Documentation</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Eventbrite</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.eventbrite.com/platform/api/" class="text-blue-500">https://www.eventbrite.com/platform/api/</a></td>
                    <td class="py-2 px-4 border-b">Find events</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Evil Insult Generator</td>
                    <td class="py-2 px-4 border-b"><a href="https://evilinsult.com/api" class="text-blue-500">https://evilinsult.com/api</a></td>
                    <td class="py-2 px-4 border-b">Evil Insults</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ExchangeRate-API</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.exchangerate-api.com" class="text-blue-500">https://www.exchangerate-api.com</a></td>
                    <td class="py-2 px-4 border-b">Free currency conversion</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Exchangerate.host</td>
                    <td class="py-2 px-4 border-b"><a href="https://exchangerate.host" class="text-blue-500">https://exchangerate.host</a></td>
                    <td class="py-2 px-4 border-b">Free foreign exchange & crypto rates API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Exchangeratesapi.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://exchangeratesapi.io" class="text-blue-500">https://exchangeratesapi.io</a></td>
                    <td class="py-2 px-4 border-b">Exchange rates with currency conversion</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Excuser</td>
                    <td class="py-2 px-4 border-b"><a href="https://excuser.herokuapp.com/" class="text-blue-500">https://excuser.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Get random excuses for various situations</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ExtendsClass JSON Storage</td>
                    <td class="py-2 px-4 border-b"><a href="https://extendsclass.com/json-storage.html" class="text-blue-500">https://extendsclass.com/json-storage.html</a></td>
                    <td class="py-2 px-4 border-b">A simple JSON store API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FBI Wanted</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.fbi.gov/wanted/api" class="text-blue-500">https://www.fbi.gov/wanted/api</a></td>
                    <td class="py-2 px-4 border-b">Access information on the FBI Wanted program</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FEC</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.open.fec.gov/developers/" class="text-blue-500">https://api.open.fec.gov/developers/</a></td>
                    <td class="py-2 px-4 border-b">Information on campaign donations in federal elections</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FFXIV Collect</td>
                    <td class="py-2 px-4 border-b"><a href="https://ffxivcollect.com/" class="text-blue-500">https://ffxivcollect.com/</a></td>
                    <td class="py-2 px-4 border-b">Final Fantasy XIV data on collectables</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FIFA Ultimate Team</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.easports.com/fifa/ultimate-team/api/fut/item" class="text-blue-500">https://www.easports.com/fifa/ultimate-team/api/fut/item</a></td>
                    <td class="py-2 px-4 border-b">FIFA Ultimate Team items API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FOAAS</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.foaas.com/" class="text-blue-500">http://www.foaas.com/</a></td>
                    <td class="py-2 px-4 border-b">Fuck Off As A Service</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FRED</td>
                    <td class="py-2 px-4 border-b"><a href="https://fred.stlouisfed.org/docs/api/fred/" class="text-blue-500">https://fred.stlouisfed.org/docs/api/fred/</a></td>
                    <td class="py-2 px-4 border-b">Economic data from the Federal Reserve Bank of St. Louis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FTX</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.ftx.com/" class="text-blue-500">https://docs.ftx.com/</a></td>
                    <td class="py-2 px-4 border-b">Complete REST, websocket, and FTX APIs to suit your algorithmic trading needs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Facebook</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.facebook.com/" class="text-blue-500">https://developers.facebook.com/</a></td>
                    <td class="py-2 px-4 border-b">Facebook Login, Share on FB, Social Plugins, Analytics and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FakeJSON</td>
                    <td class="py-2 px-4 border-b"><a href="https://fakejson.com" class="text-blue-500">https://fakejson.com</a></td>
                    <td class="py-2 px-4 border-b">Service to generate test and fake data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FakeStoreAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://fakestoreapi.com/" class="text-blue-500">https://fakestoreapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Fake store rest API for your e-commerce or shopping website prototype</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FakerAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://fakerapi.it/en" class="text-blue-500">https://fakerapi.it/en</a></td>
                    <td class="py-2 px-4 border-b">APIs collection to get fake data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FavQs.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://favqs.com/api" class="text-blue-500">https://favqs.com/api</a></td>
                    <td class="py-2 px-4 border-b">FavQs allows you to collect, discover and share your favorite quotes</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fed Treasury</td>
                    <td class="py-2 px-4 border-b"><a href="https://fiscaldata.treasury.gov/api-documentation/" class="text-blue-500">https://fiscaldata.treasury.gov/api-documentation/</a></td>
                    <td class="py-2 px-4 border-b">U.S. Department of the Treasury Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Federal Register</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.federalregister.gov/reader-aids/developer-resources/rest-api" class="text-blue-500">https://www.federalregister.gov/reader-aids/developer-resources/rest-api</a></td>
                    <td class="py-2 px-4 border-b">The Daily Journal of the United States Government</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Feedbin</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/feedbin/feedbin-api" class="text-blue-500">https://github.com/feedbin/feedbin-api</a></td>
                    <td class="py-2 px-4 border-b">RSS reader</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Festivo Public Holidays</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.getfestivo.com/docs/products/public-holidays-api/intro" class="text-blue-500">https://docs.getfestivo.com/docs/products/public-holidays-api/intro</a></td>
                    <td class="py-2 px-4 border-b">Fastest and most advanced public holiday and observance service on the market</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">File.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.file.io" class="text-blue-500">https://www.file.io</a></td>
                    <td class="py-2 px-4 border-b">Super simple file sharing, convenient, anonymous and secure</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Filestack</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.filestack.com" class="text-blue-500">https://www.filestack.com</a></td>
                    <td class="py-2 px-4 border-b">Filestack File Uploader & File Upload API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FilterLists</td>
                    <td class="py-2 px-4 border-b"><a href="https://filterlists.com" class="text-blue-500">https://filterlists.com</a></td>
                    <td class="py-2 px-4 border-b">Lists of filters for adblockers and firewalls</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Finage</td>
                    <td class="py-2 px-4 border-b"><a href="https://finage.co.uk" class="text-blue-500">https://finage.co.uk</a></td>
                    <td class="py-2 px-4 border-b">Finage is a stock, currency, cryptocurrency, indices, and ETFs real-time & historical data provider</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Final Fantasy XIV</td>
                    <td class="py-2 px-4 border-b"><a href="https://xivapi.com/" class="text-blue-500">https://xivapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Final Fantasy XIV Game data API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Final Space</td>
                    <td class="py-2 px-4 border-b"><a href="https://finalspaceapi.com/docs/" class="text-blue-500">https://finalspaceapi.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Final Space API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Financial Modeling Prep</td>
                    <td class="py-2 px-4 border-b"><a href="https://site.financialmodelingprep.com/developer/docs" class="text-blue-500">https://site.financialmodelingprep.com/developer/docs</a></td>
                    <td class="py-2 px-4 border-b">Realtime and historical stock data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Findwork</td>
                    <td class="py-2 px-4 border-b"><a href="https://findwork.dev/developers/" class="text-blue-500">https://findwork.dev/developers/</a></td>
                    <td class="py-2 px-4 border-b">Job board</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FingerprintJS Pro</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev.fingerprintjs.com/docs" class="text-blue-500">https://dev.fingerprintjs.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Fraud detection API offering highly accurate browser fingerprinting</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Finnhub</td>
                    <td class="py-2 px-4 border-b"><a href="https://finnhub.io/docs/api" class="text-blue-500">https://finnhub.io/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Real-Time RESTful APIs and Websocket for Stocks, Currencies, and Crypto</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FishWatch</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.fishwatch.gov/developers" class="text-blue-500">https://www.fishwatch.gov/developers</a></td>
                    <td class="py-2 px-4 border-b">Information and pictures about individual fish species</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fitbit</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev.fitbit.com/" class="text-blue-500">https://dev.fitbit.com/</a></td>
                    <td class="py-2 px-4 border-b">Fitbit Information</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fixer</td>
                    <td class="py-2 px-4 border-b"><a href="https://fixer.io/" class="text-blue-500">https://fixer.io/</a></td>
                    <td class="py-2 px-4 border-b">Fixer is a simple and lightweight API for current and historical foreign exchange forex rates.</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Flickr</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.flickr.com/services/api/" class="text-blue-500">https://www.flickr.com/services/api/</a></td>
                    <td class="py-2 px-4 border-b">Flickr Services</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Flipkart Marketplace</td>
                    <td class="py-2 px-4 border-b"><a href="https://seller.flipkart.com/api-docs/FMSAPI.html" class="text-blue-500">https://seller.flipkart.com/api-docs/FMSAPI.html</a></td>
                    <td class="py-2 px-4 border-b">Product listing management, Order Fulfilment in the Flipkart Marketplace</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Flowdash</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.flowdash.com/docs/api-introduction" class="text-blue-500">https://docs.flowdash.com/docs/api-introduction</a></td>
                    <td class="py-2 px-4 border-b">Automate business workflows</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Football</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/GiulianoCrescimbeni/api/football98/" class="text-blue-500">https://rapidapi.com/GiulianoCrescimbeni/api/football98/</a></td>
                    <td class="py-2 px-4 border-b">A simple Open Source Football API to get squads’ stats, best scorers and more</td>
                    <td class="py-2 px-4 border-b">`X-Mashape-Key`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Football Soccer Videos</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.scorebat.com/video-api/" class="text-blue-500">https://www.scorebat.com/video-api/</a></td>
                    <td class="py-2 px-4 border-b">Embed codes for goals and highlights from Premier League, Bundesliga, Serie A and many more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Football Standings</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/azharimm/football-standings-api" class="text-blue-500">https://github.com/azharimm/football-standings-api</a></td>
                    <td class="py-2 px-4 border-b">Display football standings e.g epl, la liga, serie a etc. The data is based on espn site</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Foreca</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.foreca.com" class="text-blue-500">https://developer.foreca.com</a></td>
                    <td class="py-2 px-4 border-b">Weather</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Forismatic</td>
                    <td class="py-2 px-4 border-b"><a href="http://forismatic.com/en/api/" class="text-blue-500">http://forismatic.com/en/api/</a></td>
                    <td class="py-2 px-4 border-b">Inspirational Quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fortnite</td>
                    <td class="py-2 px-4 border-b"><a href="https://fortnitetracker.com/site-api" class="text-blue-500">https://fortnitetracker.com/site-api</a></td>
                    <td class="py-2 px-4 border-b">Fortnite Stats</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Forza</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.forza-api.tk" class="text-blue-500">https://docs.forza-api.tk</a></td>
                    <td class="py-2 px-4 border-b">Show random image of car from Forza</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Foursquare</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.foursquare.com/" class="text-blue-500">https://developer.foursquare.com/</a></td>
                    <td class="py-2 px-4 border-b">Interact with Foursquare users and places geolocation-based checkins, photos, tips, events, etc</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Frankfurter</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.frankfurter.app/docs" class="text-blue-500">https://www.frankfurter.app/docs</a></td>
                    <td class="py-2 px-4 border-b">Exchange rates, currency conversion and time series</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FraudLabs Pro</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.fraudlabspro.com/developer/api/screen-order" class="text-blue-500">https://www.fraudlabspro.com/developer/api/screen-order</a></td>
                    <td class="py-2 px-4 border-b">Screen order information using AI to detect frauds</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Free Dictionary</td>
                    <td class="py-2 px-4 border-b"><a href="https://dictionaryapi.dev/" class="text-blue-500">https://dictionaryapi.dev/</a></td>
                    <td class="py-2 px-4 border-b">Definitions, phonetics, pronounciations, parts of speech, examples, synonyms</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Free Url Shortener</td>
                    <td class="py-2 px-4 border-b"><a href="https://ulvis.net/developer.html" class="text-blue-500">https://ulvis.net/developer.html</a></td>
                    <td class="py-2 px-4 border-b">Free URL Shortener offers a powerful API to interact with other sites</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FreeForexAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://freeforexapi.com/Home/Api" class="text-blue-500">https://freeforexapi.com/Home/Api</a></td>
                    <td class="py-2 px-4 border-b">Real-time foreign exchange rates for major currency pairs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FreeToGame</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.freetogame.com/api-doc" class="text-blue-500">https://www.freetogame.com/api-doc</a></td>
                    <td class="py-2 px-4 border-b">Free-To-Play Games Database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Freelancer</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.freelancer.com" class="text-blue-500">https://developers.freelancer.com</a></td>
                    <td class="py-2 px-4 border-b">Hire freelancers to get work done</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Freesound</td>
                    <td class="py-2 px-4 border-b"><a href="https://freesound.org/docs/api/" class="text-blue-500">https://freesound.org/docs/api/</a></td>
                    <td class="py-2 px-4 border-b">Music Samples</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">French Address Search</td>
                    <td class="py-2 px-4 border-b"><a href="https://geo.api.gouv.fr/adresse" class="text-blue-500">https://geo.api.gouv.fr/adresse</a></td>
                    <td class="py-2 px-4 border-b">Address search via the French Government</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Front Accounting APIs</td>
                    <td class="py-2 px-4 border-b"><a href="https://frontaccounting.com/fawiki/index.php?n=Devel.SimpleAPIModule" class="text-blue-500">https://frontaccounting.com/fawiki/index.php?n=Devel.SimpleAPIModule</a></td>
                    <td class="py-2 px-4 border-b">Front accounting is multilingual and multicurrency software for small businesses</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fruityvice</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.fruityvice.com" class="text-blue-500">https://www.fruityvice.com</a></td>
                    <td class="py-2 px-4 border-b">Data about all kinds of fruit</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fuck Off as a Service</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.foaas.com" class="text-blue-500">https://www.foaas.com</a></td>
                    <td class="py-2 px-4 border-b">Asks someone to fuck off</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Full Contact</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.fullcontact.com/" class="text-blue-500">https://docs.fullcontact.com/</a></td>
                    <td class="py-2 px-4 border-b">Get Social Media profiles and contact Information</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FullHunt</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-docs.fullhunt.io/#introduction" class="text-blue-500">https://api-docs.fullhunt.io/#introduction</a></td>
                    <td class="py-2 px-4 border-b">Searchable attack surface database of the entire internet</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fun Fact</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.aakhilv.me" class="text-blue-500">https://api.aakhilv.me</a></td>
                    <td class="py-2 px-4 border-b">A simple HTTPS api that can randomly select and return a fact from the FFA database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Fun Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://asli-fun-fact-api.herokuapp.com/" class="text-blue-500">https://asli-fun-fact-api.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Random Fun Facts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">FunTranslations</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.funtranslations.com/" class="text-blue-500">https://api.funtranslations.com/</a></td>
                    <td class="py-2 px-4 border-b">Translate Text into funny languages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GBIF</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.gbif.org/developer/summary" class="text-blue-500">https://www.gbif.org/developer/summary</a></td>
                    <td class="py-2 px-4 border-b">Global Biodiversity Information Facility</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GDBrowser</td>
                    <td class="py-2 px-4 border-b"><a href="https://gdbrowser.com/api" class="text-blue-500">https://gdbrowser.com/api</a></td>
                    <td class="py-2 px-4 border-b">Easy way to use the Geometry Dash Servers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GENESIS</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.destatis.de/EN/Service/OpenData/api-webservice.html" class="text-blue-500">https://www.destatis.de/EN/Service/OpenData/api-webservice.html</a></td>
                    <td class="py-2 px-4 border-b">Federal Statistical Office Germany</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GETPing</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.getping.info" class="text-blue-500">https://www.getping.info</a></td>
                    <td class="py-2 px-4 border-b">Trigger an email notification with a simple GET request</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GNews</td>
                    <td class="py-2 px-4 border-b"><a href="https://gnews.io/" class="text-blue-500">https://gnews.io/</a></td>
                    <td class="py-2 px-4 border-b">Search for news from various sources</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GW2Spidy</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/rubensayshi/gw2spidy/wiki" class="text-blue-500">https://github.com/rubensayshi/gw2spidy/wiki</a></td>
                    <td class="py-2 px-4 border-b">GW2Spidy API, Items data on the Guild Wars 2 Trade Market</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gaana</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/cyberboysumanjay/GaanaAPI" class="text-blue-500">https://github.com/cyberboysumanjay/GaanaAPI</a></td>
                    <td class="py-2 px-4 border-b">API to retrieve song information from Gaana</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Game of Thrones Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://gameofthronesquotes.xyz/" class="text-blue-500">https://gameofthronesquotes.xyz/</a></td>
                    <td class="py-2 px-4 border-b">Some Game of Thrones quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GamerPower</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.gamerpower.com/api-read" class="text-blue-500">https://www.gamerpower.com/api-read</a></td>
                    <td class="py-2 px-4 border-b">Game Giveaways Tracker</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ganjoor</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.ganjoor.net" class="text-blue-500">https://api.ganjoor.net</a></td>
                    <td class="py-2 px-4 border-b">Classic Persian poetry works including access to related manuscripts, recitations and music tracks</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gateio</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.gate.io/api2" class="text-blue-500">https://www.gate.io/api2</a></td>
                    <td class="py-2 px-4 border-b">API provides spot, margin and futures trading operations</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Geek-Jokes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/sameerkumar18/geek-joke-api" class="text-blue-500">https://github.com/sameerkumar18/geek-joke-api</a></td>
                    <td class="py-2 px-4 border-b">Fetch a random geeky/programming related joke for use in all sorts of applications</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GeekFlare</td>
                    <td class="py-2 px-4 border-b"><a href="https://apidocs.geekflare.com/docs/geekflare-api" class="text-blue-500">https://apidocs.geekflare.com/docs/geekflare-api</a></td>
                    <td class="py-2 px-4 border-b">Provide numerous capabilities for important testing and monitoring methods for websites</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gemini</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.gemini.com/rest-api/" class="text-blue-500">https://docs.gemini.com/rest-api/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Exchange</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Genderize.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://genderize.io" class="text-blue-500">https://genderize.io</a></td>
                    <td class="py-2 px-4 border-b">Estimates a gender from a first name</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GeneradorDNI</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.generadordni.es" class="text-blue-500">https://api.generadordni.es</a></td>
                    <td class="py-2 px-4 border-b">Data generator API. Profiles, vehicles, banks and cards, etc</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Genius</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.genius.com/" class="text-blue-500">https://docs.genius.com/</a></td>
                    <td class="py-2 px-4 border-b">Crowdsourced lyrics and music knowledge</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Genrenator</td>
                    <td class="py-2 px-4 border-b"><a href="https://binaryjazz.us/genrenator-api/" class="text-blue-500">https://binaryjazz.us/genrenator-api/</a></td>
                    <td class="py-2 px-4 border-b">Music genre generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Genshin Impact</td>
                    <td class="py-2 px-4 border-b"><a href="https://genshin.dev" class="text-blue-500">https://genshin.dev</a></td>
                    <td class="py-2 px-4 border-b">Genshin Impact game data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GetOTP</td>
                    <td class="py-2 px-4 border-b"><a href="https://otp.dev/en/docs/" class="text-blue-500">https://otp.dev/en/docs/</a></td>
                    <td class="py-2 px-4 border-b">Implement OTP flow quickly</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Getty Images</td>
                    <td class="py-2 px-4 border-b"><a href="http://developers.gettyimages.com/en/" class="text-blue-500">http://developers.gettyimages.com/en/</a></td>
                    <td class="py-2 px-4 border-b">Build applications using the world's most powerful imagery</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gfycat</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.gfycat.com/api/" class="text-blue-500">https://developers.gfycat.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Jiffier GIFs</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ghost</td>
                    <td class="py-2 px-4 border-b"><a href="https://ghost.org/" class="text-blue-500">https://ghost.org/</a></td>
                    <td class="py-2 px-4 border-b">Get Published content into your Website, App or other embedded media</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Giant Bomb</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.giantbomb.com/api/documentation" class="text-blue-500">https://www.giantbomb.com/api/documentation</a></td>
                    <td class="py-2 px-4 border-b">Video Games</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Giphy</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.giphy.com/docs/" class="text-blue-500">https://developers.giphy.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Get all your gifs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Git.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.blog/2011-11-10-git-io-github-url-shortener/" class="text-blue-500">https://github.blog/2011-11-10-git-io-github-url-shortener/</a></td>
                    <td class="py-2 px-4 border-b">Git.io URL shortener</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GitGuardian</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.gitguardian.com/doc" class="text-blue-500">https://api.gitguardian.com/doc</a></td>
                    <td class="py-2 px-4 border-b">Scan files for secrets API Keys, database credentials</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GitHub</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.github.com/en/free-pro-team@latest/rest" class="text-blue-500">https://docs.github.com/en/free-pro-team@latest/rest</a></td>
                    <td class="py-2 px-4 border-b">Make use of GitHub repositories, code and user info programmatically</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GitHub Contribution Chart Generator</td>
                    <td class="py-2 px-4 border-b"><a href="https://github-contributions.vercel.app" class="text-blue-500">https://github-contributions.vercel.app</a></td>
                    <td class="py-2 px-4 border-b">Create an image of your GitHub contributions</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GitHub ReadMe Stats</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/anuraghazra/github-readme-stats" class="text-blue-500">https://github.com/anuraghazra/github-readme-stats</a></td>
                    <td class="py-2 px-4 border-b">Add dynamically generated statistics to your GitHub profile ReadMe</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gitlab</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.gitlab.com/ee/api/" class="text-blue-500">https://docs.gitlab.com/ee/api/</a></td>
                    <td class="py-2 px-4 border-b">Automate GitLab interaction programmatically</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gitter</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.gitter.im/docs/welcome" class="text-blue-500">https://developer.gitter.im/docs/welcome</a></td>
                    <td class="py-2 px-4 border-b">Chat for Developers</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Glitterly</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.glitterly.app" class="text-blue-500">https://developers.glitterly.app</a></td>
                    <td class="py-2 px-4 border-b">Image generation API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gmail</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/gmail/api/" class="text-blue-500">https://developers.google.com/gmail/api/</a></td>
                    <td class="py-2 px-4 border-b">Flexible, RESTful access to the user's inbox</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GoFile</td>
                    <td class="py-2 px-4 border-b"><a href="https://gofile.io/api" class="text-blue-500">https://gofile.io/api</a></td>
                    <td class="py-2 px-4 border-b">Unlimited size file uploads for free</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GoTiny</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/robvanbakel/gotiny-api" class="text-blue-500">https://github.com/robvanbakel/gotiny-api</a></td>
                    <td class="py-2 px-4 border-b">A lightweight URL shortener, focused on ease-of-use for the developer and end-user</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Books</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/books/" class="text-blue-500">https://developers.google.com/books/</a></td>
                    <td class="py-2 px-4 border-b">Books</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Calendar</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/google-apps/calendar/" class="text-blue-500">https://developers.google.com/google-apps/calendar/</a></td>
                    <td class="py-2 px-4 border-b">Display, create and modify Google calendar events</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Cloud Natural</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloud.google.com/natural-language/docs/" class="text-blue-500">https://cloud.google.com/natural-language/docs/</a></td>
                    <td class="py-2 px-4 border-b">Natural language understanding technology, including sentiment, entity and syntax analysis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Docs</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/docs/api/reference/rest" class="text-blue-500">https://developers.google.com/docs/api/reference/rest</a></td>
                    <td class="py-2 px-4 border-b">API to read, write, and format Google Docs documents</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Drive</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/drive/" class="text-blue-500">https://developers.google.com/drive/</a></td>
                    <td class="py-2 px-4 border-b">File Sharing and Storage</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Earth Engine</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/earth-engine/" class="text-blue-500">https://developers.google.com/earth-engine/</a></td>
                    <td class="py-2 px-4 border-b">A cloud-based platform for planetary-scale environmental data analysis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Firebase</td>
                    <td class="py-2 px-4 border-b"><a href="https://firebase.google.com/docs" class="text-blue-500">https://firebase.google.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Google's mobile application development platform that helps build, improve, and grow app</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Fonts</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/fonts/docs/developer_api" class="text-blue-500">https://developers.google.com/fonts/docs/developer_api</a></td>
                    <td class="py-2 px-4 border-b">Metadata for all families served by Google Fonts</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Keep</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/keep/api/reference/rest" class="text-blue-500">https://developers.google.com/keep/api/reference/rest</a></td>
                    <td class="py-2 px-4 border-b">API to read, write, and format Google Keep notes</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Photos</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/photos" class="text-blue-500">https://developers.google.com/photos</a></td>
                    <td class="py-2 px-4 border-b">Integrate Google Photos with your apps or devices</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Safe Browsing</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/safe-browsing/" class="text-blue-500">https://developers.google.com/safe-browsing/</a></td>
                    <td class="py-2 px-4 border-b">Google Link/Domain Flagging</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Sheets</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/sheets/api/reference/rest" class="text-blue-500">https://developers.google.com/sheets/api/reference/rest</a></td>
                    <td class="py-2 px-4 border-b">API to read, write, and format Google Sheets data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Google Slides</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/slides/api/reference/rest" class="text-blue-500">https://developers.google.com/slides/api/reference/rest</a></td>
                    <td class="py-2 px-4 border-b">API to read, write, and format Google Slides presentations</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gorest</td>
                    <td class="py-2 px-4 border-b"><a href="https://gorest.co.in/" class="text-blue-500">https://gorest.co.in/</a></td>
                    <td class="py-2 px-4 border-b">Online REST API for Testing and Prototyping</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Grab</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.grab.com/docs/" class="text-blue-500">https://developer.grab.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Track deliveries, ride fares, payments and loyalty points</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Graph Countries</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/lennertVanSever/graphcountries" class="text-blue-500">https://github.com/lennertVanSever/graphcountries</a></td>
                    <td class="py-2 px-4 border-b">Country-related data like currencies, languages, flags, regions+subregions and bordering countries</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GraphHopper</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.graphhopper.com/" class="text-blue-500">https://docs.graphhopper.com/</a></td>
                    <td class="py-2 px-4 border-b">A-to-B routing with turn-by-turn instructions</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GraphQL Pokemon</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/favware/graphql-pokemon" class="text-blue-500">https://github.com/favware/graphql-pokemon</a></td>
                    <td class="py-2 px-4 border-b">GraphQL powered Pokemon API. Supports generations 1 through 8</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Graphs for Coronavirus</td>
                    <td class="py-2 px-4 border-b"><a href="https://corona.dnsforfamily.com/api.txt" class="text-blue-500">https://corona.dnsforfamily.com/api.txt</a></td>
                    <td class="py-2 px-4 border-b">Each Country separately and Worldwide Graphs for Coronavirus. Daily updates</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GreyNoise</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.greynoise.io/reference/get_v3-community-ip" class="text-blue-500">https://docs.greynoise.io/reference/get_v3-community-ip</a></td>
                    <td class="py-2 px-4 border-b">Query IPs in the GreyNoise dataset and retrieve a subset of the full IP context data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GrünstromIndex</td>
                    <td class="py-2 px-4 border-b"><a href="https://gruenstromindex.de/" class="text-blue-500">https://gruenstromindex.de/</a></td>
                    <td class="py-2 px-4 border-b">Green Power Index for Germany Grünstromindex/GSI</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Guerrilla Mail</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.guerrillamail.com/GuerrillaMailAPI.html" class="text-blue-500">https://www.guerrillamail.com/GuerrillaMailAPI.html</a></td>
                    <td class="py-2 px-4 border-b">Disposable temporary Email addresses</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Guild Wars 2</td>
                    <td class="py-2 px-4 border-b"><a href="https://wiki.guildwars2.com/wiki/API:Main" class="text-blue-500">https://wiki.guildwars2.com/wiki/API:Main</a></td>
                    <td class="py-2 px-4 border-b">Guild Wars 2 Game Information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gun Policy</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.gunpolicy.org/api" class="text-blue-500">https://www.gunpolicy.org/api</a></td>
                    <td class="py-2 px-4 border-b">International firearm injury prevention and policy</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">GurbaniNow</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/GurbaniNow/api" class="text-blue-500">https://github.com/GurbaniNow/api</a></td>
                    <td class="py-2 px-4 border-b">Fast and Accurate Gurbani RESTful API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gutendex</td>
                    <td class="py-2 px-4 border-b"><a href="https://gutendex.com/" class="text-blue-500">https://gutendex.com/</a></td>
                    <td class="py-2 px-4 border-b">Web-API for fetching data from Project Gutenberg Books Library</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Gyazo</td>
                    <td class="py-2 px-4 border-b"><a href="https://gyazo.com/api/docs" class="text-blue-500">https://gyazo.com/api/docs</a></td>
                    <td class="py-2 px-4 border-b">Save & Share screen captures instantly</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HG Weather</td>
                    <td class="py-2 px-4 border-b"><a href="https://hgbrasil.com/status/weather" class="text-blue-500">https://hgbrasil.com/status/weather</a></td>
                    <td class="py-2 px-4 border-b">Provides weather forecast data for cities in Brazil</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HTTP Cat</td>
                    <td class="py-2 px-4 border-b"><a href="https://http.cat/" class="text-blue-500">https://http.cat/</a></td>
                    <td class="py-2 px-4 border-b">Cat for every HTTP Status</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HTTP Cat</td>
                    <td class="py-2 px-4 border-b"><a href="https://http.cat/" class="text-blue-500">https://http.cat/</a></td>
                    <td class="py-2 px-4 border-b">Cat for every HTTP Status</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HTTP Dog</td>
                    <td class="py-2 px-4 border-b"><a href="https://http.dog/" class="text-blue-500">https://http.dog/</a></td>
                    <td class="py-2 px-4 border-b">Dogs for every HTTP response status code</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HTTP2.Pro</td>
                    <td class="py-2 px-4 border-b"><a href="https://http2.pro/doc/api" class="text-blue-500">https://http2.pro/doc/api</a></td>
                    <td class="py-2 px-4 border-b">Test endpoints for client and server HTTP/2 protocol support</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HackerNews</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/HackerNews/API" class="text-blue-500">https://github.com/HackerNews/API</a></td>
                    <td class="py-2 px-4 border-b">Social news for CS and entrepreneurship</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HackerOne</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.hackerone.com/" class="text-blue-500">https://api.hackerone.com/</a></td>
                    <td class="py-2 px-4 border-b">The industry’s first hacker API that helps increase productivity towards creative bug bounty hunting</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hackerearth</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.hackerearth.com/docs/wiki/developers/v4/" class="text-blue-500">https://www.hackerearth.com/docs/wiki/developers/v4/</a></td>
                    <td class="py-2 px-4 border-b">For compiling and running code in several languages</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Halo</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.haloapi.com/" class="text-blue-500">https://developer.haloapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Halo 5 and Halo Wars 2 Information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Harry Potter Charactes</td>
                    <td class="py-2 px-4 border-b"><a href="https://hp-api.herokuapp.com/" class="text-blue-500">https://hp-api.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Harry Potter Characters Data with with imagery</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Harvard Art Museums</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/harvardartmuseums/api-docs" class="text-blue-500">https://github.com/harvardartmuseums/api-docs</a></td>
                    <td class="py-2 px-4 border-b">Art</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hashable</td>
                    <td class="py-2 px-4 border-b"><a href="https://hashable.space/pages/api/" class="text-blue-500">https://hashable.space/pages/api/</a></td>
                    <td class="py-2 px-4 border-b">A REST API to access high level cryptographic functions and methods</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hashnode</td>
                    <td class="py-2 px-4 border-b"><a href="https://hashnode.com" class="text-blue-500">https://hashnode.com</a></td>
                    <td class="py-2 px-4 border-b">A blogging platform built for developers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hasura</td>
                    <td class="py-2 px-4 border-b"><a href="https://hasura.io/opensource/" class="text-blue-500">https://hasura.io/opensource/</a></td>
                    <td class="py-2 px-4 border-b">GraphQL and REST API Engine with built in Authorization</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HaveIBeenPwned</td>
                    <td class="py-2 px-4 border-b"><a href="https://haveibeenpwned.com/API/v3" class="text-blue-500">https://haveibeenpwned.com/API/v3</a></td>
                    <td class="py-2 px-4 border-b">Passwords which have previously been exposed in data breaches</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hearthstone</td>
                    <td class="py-2 px-4 border-b"><a href="http://hearthstoneapi.com/" class="text-blue-500">http://hearthstoneapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Hearthstone Cards Information</td>
                    <td class="py-2 px-4 border-b">`X-Mashape-Key`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hebrew Calendar</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.hebcal.com/home/developer-apis" class="text-blue-500">https://www.hebcal.com/home/developer-apis</a></td>
                    <td class="py-2 px-4 border-b">Convert between Gregorian and Hebrew, fetch Shabbat and Holiday times, etc</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Helipaddy sites</td>
                    <td class="py-2 px-4 border-b"><a href="https://helipaddy.com/api/" class="text-blue-500">https://helipaddy.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Helicopter and passenger drone landing site directory, Helipaddy data and much more</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Helium</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.helium.com/api/blockchain/introduction/" class="text-blue-500">https://docs.helium.com/api/blockchain/introduction/</a></td>
                    <td class="py-2 px-4 border-b">Helium is a global, distributed network of Hotspots that create public, long-range wireless coverage</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">HelloSalut</td>
                    <td class="py-2 px-4 border-b"><a href="https://fourtonfish.com/project/hellosalut-api/" class="text-blue-500">https://fourtonfish.com/project/hellosalut-api/</a></td>
                    <td class="py-2 px-4 border-b">Get hello translation following user language</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Heroku</td>
                    <td class="py-2 px-4 border-b"><a href="https://devcenter.heroku.com/articles/platform-api-reference/" class="text-blue-500">https://devcenter.heroku.com/articles/platform-api-reference/</a></td>
                    <td class="py-2 px-4 border-b">REST API to programmatically create apps, provision add-ons and perform other task on Heroku</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hirak Exchange Rates</td>
                    <td class="py-2 px-4 border-b"><a href="https://rates.hirak.site/" class="text-blue-500">https://rates.hirak.site/</a></td>
                    <td class="py-2 px-4 border-b">Exchange rates between 162 currency & 300 crypto currency update each 5 min, accurate, no limits</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hirak FaceAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://faceapi.hirak.site/" class="text-blue-500">https://faceapi.hirak.site/</a></td>
                    <td class="py-2 px-4 border-b">Face detection, face recognition with age estimation/gender estimation, accurate, no quota limits</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hirak IP to Country</td>
                    <td class="py-2 px-4 border-b"><a href="https://iplocation.hirak.site/" class="text-blue-500">https://iplocation.hirak.site/</a></td>
                    <td class="py-2 px-4 border-b">Ip to location with country code, currency code & currency name, fast response, unlimited requests</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hirak OCR</td>
                    <td class="py-2 px-4 border-b"><a href="https://ocr.hirak.site/" class="text-blue-500">https://ocr.hirak.site/</a></td>
                    <td class="py-2 px-4 border-b">Image to text -text recognition- from image more than 100 language, accurate, unlimited requests</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hirak Translation</td>
                    <td class="py-2 px-4 border-b"><a href="https://translate.hirak.site/" class="text-blue-500">https://translate.hirak.site/</a></td>
                    <td class="py-2 px-4 border-b">Translate between 21 of most used languages, accurate, unlimited requests</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Holidays</td>
                    <td class="py-2 px-4 border-b"><a href="https://holidayapi.com/" class="text-blue-500">https://holidayapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Historical data regarding holidays</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hong Kong Obervatory</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.hko.gov.hk/en/abouthko/opendata_intro.htm" class="text-blue-500">https://www.hko.gov.hk/en/abouthko/opendata_intro.htm</a></td>
                    <td class="py-2 px-4 border-b">Provide weather information, earthquake information, and climate data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Host.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://host.io" class="text-blue-500">https://host.io</a></td>
                    <td class="py-2 px-4 border-b">Domains Data API for Developers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hotstoks</td>
                    <td class="py-2 px-4 border-b"><a href="https://hotstoks.com?utm_source=public-apis" class="text-blue-500">https://hotstoks.com?utm_source=public-apis</a></td>
                    <td class="py-2 px-4 border-b">Stock market data powered by SQL</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Html2PDF</td>
                    <td class="py-2 px-4 border-b"><a href="https://html2pdf.app/" class="text-blue-500">https://html2pdf.app/</a></td>
                    <td class="py-2 px-4 border-b">HTML/URL to PDF</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Httpbin</td>
                    <td class="py-2 px-4 border-b"><a href="https://httpbin.org/" class="text-blue-500">https://httpbin.org/</a></td>
                    <td class="py-2 px-4 border-b">A Simple HTTP Request & Response Service</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Httpbin Cloudflare</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloudflare-quic.com/b/" class="text-blue-500">https://cloudflare-quic.com/b/</a></td>
                    <td class="py-2 px-4 border-b">A Simple HTTP Request & Response Service with HTTP/3 Support by Cloudflare</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Humble Bundle</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/Ziggoto/api/humble-bundle" class="text-blue-500">https://rapidapi.com/Ziggoto/api/humble-bundle</a></td>
                    <td class="py-2 px-4 border-b">Humble Bundle's current bundles</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Humor</td>
                    <td class="py-2 px-4 border-b"><a href="https://humorapi.com" class="text-blue-500">https://humorapi.com</a></td>
                    <td class="py-2 px-4 border-b">Humor, Jokes, and Memes</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hunter</td>
                    <td class="py-2 px-4 border-b"><a href="https://hunter.io/api" class="text-blue-500">https://hunter.io/api</a></td>
                    <td class="py-2 px-4 border-b">API for domain search, professional email finder, author finder and email verifier</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Huobi</td>
                    <td class="py-2 px-4 border-b"><a href="https://huobiapi.github.io/docs/spot/v1/en/" class="text-blue-500">https://huobiapi.github.io/docs/spot/v1/en/</a></td>
                    <td class="py-2 px-4 border-b">Seychelles based cryptocurrency exchange</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hypixel</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.hypixel.net/" class="text-blue-500">https://api.hypixel.net/</a></td>
                    <td class="py-2 px-4 border-b">Hypixel player stats</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hyrule Compendium</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/gadhagod/Hyrule-Compendium-API" class="text-blue-500">https://github.com/gadhagod/Hyrule-Compendium-API</a></td>
                    <td class="py-2 px-4 border-b">Data on all interactive items from The Legend of Zelda: BOTW</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Hytale</td>
                    <td class="py-2 px-4 border-b"><a href="https://hytale-api.com/" class="text-blue-500">https://hytale-api.com/</a></td>
                    <td class="py-2 px-4 border-b">Hytale blog posts and jobs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IBGE</td>
                    <td class="py-2 px-4 border-b"><a href="https://servicodados.ibge.gov.br/api/docs/" class="text-blue-500">https://servicodados.ibge.gov.br/api/docs/</a></td>
                    <td class="py-2 px-4 border-b">Aggregate services of IBGE Brazilian Institute of Geography and Statistics</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IBM Text to Speech</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloud.ibm.com/docs/text-to-speech/getting-started.html" class="text-blue-500">https://cloud.ibm.com/docs/text-to-speech/getting-started.html</a></td>
                    <td class="py-2 px-4 border-b">Convert text to speech</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IEX Cloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://iexcloud.io/docs/api/" class="text-blue-500">https://iexcloud.io/docs/api/</a></td>
                    <td class="py-2 px-4 border-b">Realtime & Historical Stock and Market Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IFTTT</td>
                    <td class="py-2 px-4 border-b"><a href="https://platform.ifttt.com/docs/connect_api" class="text-blue-500">https://platform.ifttt.com/docs/connect_api</a></td>
                    <td class="py-2 px-4 border-b">IFTTT Connect API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IG</td>
                    <td class="py-2 px-4 border-b"><a href="https://labs.ig.com/gettingstarted" class="text-blue-500">https://labs.ig.com/gettingstarted</a></td>
                    <td class="py-2 px-4 border-b">Spreadbetting and CFD Market Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IGDB.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-docs.igdb.com" class="text-blue-500">https://api-docs.igdb.com</a></td>
                    <td class="py-2 px-4 border-b">Video Game Database</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IMDb-API</td>
                    <td class="py-2 px-4 border-b"><a href="https://imdb-api.com/" class="text-blue-500">https://imdb-api.com/</a></td>
                    <td class="py-2 px-4 border-b">API for receiving movie, serial and cast information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IMDbOT</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/SpEcHiDe/IMDbOT" class="text-blue-500">https://github.com/SpEcHiDe/IMDbOT</a></td>
                    <td class="py-2 px-4 border-b">Unofficial IMDb Movie / Series Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">INEI</td>
                    <td class="py-2 px-4 border-b"><a href="http://iinei.inei.gob.pe/microdatos/" class="text-blue-500">http://iinei.inei.gob.pe/microdatos/</a></td>
                    <td class="py-2 px-4 border-b">Peruvian Statistical Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">INFURA Ethereum</td>
                    <td class="py-2 px-4 border-b"><a href="https://infura.io/product/ethereum" class="text-blue-500">https://infura.io/product/ethereum</a></td>
                    <td class="py-2 px-4 border-b">Interaction with the Ethereum mainnet and several testnets</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IP 2 Country</td>
                    <td class="py-2 px-4 border-b"><a href="https://ip2country.info" class="text-blue-500">https://ip2country.info</a></td>
                    <td class="py-2 px-4 border-b">Map an IP to a country</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IP Address Details</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipinfo.io/" class="text-blue-500">https://ipinfo.io/</a></td>
                    <td class="py-2 px-4 border-b">Find geolocation with ip address</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IP Stack</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipstack.com/" class="text-blue-500">https://ipstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Locate and Identify Website Visitors by IP Address</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IP Vigilante</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ipvigilante.com/" class="text-blue-500">https://www.ipvigilante.com/</a></td>
                    <td class="py-2 px-4 border-b">Free IP Geolocation API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IP2Proxy</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ip2location.com/web-service/ip2proxy" class="text-blue-500">https://www.ip2location.com/web-service/ip2proxy</a></td>
                    <td class="py-2 px-4 border-b">Detect proxy and VPN using IP address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IP2WHOIS Information Lookup</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ip2whois.com/" class="text-blue-500">https://www.ip2whois.com/</a></td>
                    <td class="py-2 px-4 border-b">WHOIS domain name lookup</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IPInfoDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ipinfodb.com/api" class="text-blue-500">https://www.ipinfodb.com/api</a></td>
                    <td class="py-2 px-4 border-b">Free Geolocation tools and APIs for country, region, city and time zone lookup by IP address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IPS Online</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.identity.ps/docs" class="text-blue-500">https://docs.identity.ps/docs</a></td>
                    <td class="py-2 px-4 border-b">Face and License Plate Anonymization</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IPify</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ipify.org/" class="text-blue-500">https://www.ipify.org/</a></td>
                    <td class="py-2 px-4 border-b">A simple IP Address API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IPinfo</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipinfo.io/developers" class="text-blue-500">https://ipinfo.io/developers</a></td>
                    <td class="py-2 px-4 border-b">Another simple IP Address API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IQAir</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.iqair.com/air-pollution-data-api" class="text-blue-500">https://www.iqair.com/air-pollution-data-api</a></td>
                    <td class="py-2 px-4 border-b">Air quality and weather data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ISRO</td>
                    <td class="py-2 px-4 border-b"><a href="https://isro.vercel.app" class="text-blue-500">https://isro.vercel.app</a></td>
                    <td class="py-2 px-4 border-b">ISRO Space Crafts Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ITIS</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.itis.gov/ws_description.html" class="text-blue-500">https://www.itis.gov/ws_description.html</a></td>
                    <td class="py-2 px-4 border-b">Integrated Taxonomic Information System</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">IUCN</td>
                    <td class="py-2 px-4 border-b"><a href="http://apiv3.iucnredlist.org/api/v3/docs" class="text-blue-500">http://apiv3.iucnredlist.org/api/v3/docs</a></td>
                    <td class="py-2 px-4 border-b">IUCN Red List of Threatened Species</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Icanhazepoch</td>
                    <td class="py-2 px-4 border-b"><a href="https://icanhazepoch.com" class="text-blue-500">https://icanhazepoch.com</a></td>
                    <td class="py-2 px-4 border-b">Get Epoch time</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Icanhazip</td>
                    <td class="py-2 px-4 border-b"><a href="https://major.io/icanhazip-com-faq/" class="text-blue-500">https://major.io/icanhazip-com-faq/</a></td>
                    <td class="py-2 px-4 border-b">IP Address API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Icelandic APIs</td>
                    <td class="py-2 px-4 border-b"><a href="http://docs.apis.is/" class="text-blue-500">http://docs.apis.is/</a></td>
                    <td class="py-2 px-4 border-b">Open APIs that deliver services in or regarding Iceland</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Icon Horse</td>
                    <td class="py-2 px-4 border-b"><a href="https://icon.horse" class="text-blue-500">https://icon.horse</a></td>
                    <td class="py-2 px-4 border-b">Favicons for any website, with fallbacks</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Iconfinder</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.iconfinder.com" class="text-blue-500">https://developer.iconfinder.com</a></td>
                    <td class="py-2 px-4 border-b">Icons</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Icons8</td>
                    <td class="py-2 px-4 border-b"><a href="https://img.icons8.com/" class="text-blue-500">https://img.icons8.com/</a></td>
                    <td class="py-2 px-4 border-b">Icons find "search icon" hyperlink in page</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Image Upload</td>
                    <td class="py-2 px-4 border-b"><a href="https://apilayer.com/marketplace/image_upload-api" class="text-blue-500">https://apilayer.com/marketplace/image_upload-api</a></td>
                    <td class="py-2 px-4 border-b">Image Optimization</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Image-Charts</td>
                    <td class="py-2 px-4 border-b"><a href="https://documentation.image-charts.com/" class="text-blue-500">https://documentation.image-charts.com/</a></td>
                    <td class="py-2 px-4 border-b">Generate charts, QR codes and graph images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Imagga</td>
                    <td class="py-2 px-4 border-b"><a href="https://imagga.com/" class="text-blue-500">https://imagga.com/</a></td>
                    <td class="py-2 px-4 border-b">Image Recognition Solutions like Tagging, Visual Search, NSFW moderation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Imgbb</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.imgbb.com/" class="text-blue-500">https://api.imgbb.com/</a></td>
                    <td class="py-2 px-4 border-b">Simple and quick private image sharing</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Imgflip</td>
                    <td class="py-2 px-4 border-b"><a href="https://imgflip.com/api" class="text-blue-500">https://imgflip.com/api</a></td>
                    <td class="py-2 px-4 border-b">Gets an array of popular memes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Imgur</td>
                    <td class="py-2 px-4 border-b"><a href="https://apidocs.imgur.com/" class="text-blue-500">https://apidocs.imgur.com/</a></td>
                    <td class="py-2 px-4 border-b">Images</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Impala Hotel Bookings</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.impala.travel/docs/booking-api/" class="text-blue-500">https://docs.impala.travel/docs/booking-api/</a></td>
                    <td class="py-2 px-4 border-b">Hotel content, rates and room bookings</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ImprovMX</td>
                    <td class="py-2 px-4 border-b"><a href="https://improvmx.com/api" class="text-blue-500">https://improvmx.com/api</a></td>
                    <td class="py-2 px-4 border-b">API for free email forwarding service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Imsea</td>
                    <td class="py-2 px-4 border-b"><a href="https://imsea.herokuapp.com/" class="text-blue-500">https://imsea.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Free image search</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Indian Mutual Fund</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mfapi.in/" class="text-blue-500">https://www.mfapi.in/</a></td>
                    <td class="py-2 px-4 border-b">Get complete history of India Mutual Funds Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Indodax</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/btcid/indodax-official-api-docs" class="text-blue-500">https://github.com/btcid/indodax-official-api-docs</a></td>
                    <td class="py-2 px-4 border-b">Trade your Bitcoin and other assets with rupiah</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Indonesia Dictionary</td>
                    <td class="py-2 px-4 border-b"><a href="https://new-kbbi-api.herokuapp.com/" class="text-blue-500">https://new-kbbi-api.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Indonesia dictionary many words</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Inferdo</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/user/inferdo" class="text-blue-500">https://rapidapi.com/user/inferdo</a></td>
                    <td class="py-2 px-4 border-b">Computer Vision services like Facial detection, Image labeling, NSFW classification</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Infermedica</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.infermedica.com/docs/" class="text-blue-500">https://developer.infermedica.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">NLP based symptom checker and patient triage API for health diagnosis from text</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Inshorts News</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/cyberboysumanjay/Inshorts-News-API" class="text-blue-500">https://github.com/cyberboysumanjay/Inshorts-News-API</a></td>
                    <td class="py-2 px-4 border-b">Provides news from inshorts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Inspiration</td>
                    <td class="py-2 px-4 border-b"><a href="https://inspiration.goprogram.ai/docs/" class="text-blue-500">https://inspiration.goprogram.ai/docs/</a></td>
                    <td class="py-2 px-4 border-b">Motivational and Inspirational quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Instagram</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.instagram.com/developer/" class="text-blue-500">https://www.instagram.com/developer/</a></td>
                    <td class="py-2 px-4 border-b">Instagram Login, Share on Instagram, Social Plugins and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Instatus</td>
                    <td class="py-2 px-4 border-b"><a href="https://instatus.com/help/api" class="text-blue-500">https://instatus.com/help/api</a></td>
                    <td class="py-2 px-4 border-b">Post to and update maintenance and incidents on your status page through an HTTP REST API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Intelligence X</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/IntelligenceX/SDK/blob/master/Intelligence%20X%20API.pdf" class="text-blue-500">https://github.com/IntelligenceX/SDK/blob/master/Intelligence%20X%20API.pdf</a></td>
                    <td class="py-2 px-4 border-b">Perform OSINT via Intelligence X</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Interpol Red Notices</td>
                    <td class="py-2 px-4 border-b"><a href="https://interpol.api.bund.dev/" class="text-blue-500">https://interpol.api.bund.dev/</a></td>
                    <td class="py-2 px-4 border-b">Access and search Interpol Red Notices</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Intrinio</td>
                    <td class="py-2 px-4 border-b"><a href="https://intrinio.com/" class="text-blue-500">https://intrinio.com/</a></td>
                    <td class="py-2 px-4 border-b">A wide selection of financial data feeds</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Irisnet</td>
                    <td class="py-2 px-4 border-b"><a href="https://irisnet.de/api/" class="text-blue-500">https://irisnet.de/api/</a></td>
                    <td class="py-2 px-4 border-b">Realtime content moderation API that blocks or blurs unwanted images in real-time</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ItsThisForThat</td>
                    <td class="py-2 px-4 border-b"><a href="https://itsthisforthat.com/api.php" class="text-blue-500">https://itsthisforthat.com/api.php</a></td>
                    <td class="py-2 px-4 border-b">Generate Random startup ideas</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Izi</td>
                    <td class="py-2 px-4 border-b"><a href="http://api-docs.izi.travel/" class="text-blue-500">http://api-docs.izi.travel/</a></td>
                    <td class="py-2 px-4 border-b">Audio guide for travellers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JCDecaux Bike</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.jcdecaux.com/" class="text-blue-500">https://developer.jcdecaux.com/</a></td>
                    <td class="py-2 px-4 border-b">JCDecaux's self-service bicycles</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JIRA</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.atlassian.com/server/jira/platform/rest-apis/" class="text-blue-500">https://developer.atlassian.com/server/jira/platform/rest-apis/</a></td>
                    <td class="py-2 px-4 border-b">JIRA is a proprietary issue tracking product that allows bug tracking and agile project management</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JSON 2 JSONP</td>
                    <td class="py-2 px-4 border-b"><a href="https://json2jsonp.com/" class="text-blue-500">https://json2jsonp.com/</a></td>
                    <td class="py-2 px-4 border-b">Convert JSON to JSONP on-the-fly for easy cross-domain data requests using client-side JavaScript</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JSON2Video</td>
                    <td class="py-2 px-4 border-b"><a href="https://json2video.com" class="text-blue-500">https://json2video.com</a></td>
                    <td class="py-2 px-4 border-b">Create and edit videos programmatically: watermarks,resizing,slideshows,voice-over,text animations</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JSONPlaceholder</td>
                    <td class="py-2 px-4 border-b"><a href="http://jsonplaceholder.typicode.com/" class="text-blue-500">http://jsonplaceholder.typicode.com/</a></td>
                    <td class="py-2 px-4 border-b">Fake data for testing and prototyping</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JSONbin.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://jsonbin.io" class="text-blue-500">https://jsonbin.io</a></td>
                    <td class="py-2 px-4 border-b">Free JSON storage service. Ideal for small scale Web apps, Websites and Mobile apps</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Jamendo</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.jamendo.com/v3.0/docs" class="text-blue-500">https://developer.jamendo.com/v3.0/docs</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Jikan</td>
                    <td class="py-2 px-4 border-b"><a href="https://jikan.moe" class="text-blue-500">https://jikan.moe</a></td>
                    <td class="py-2 px-4 border-b">Unofficial MyAnimeList API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JioSaavn</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/cyberboysumanjay/JioSaavnAPI" class="text-blue-500">https://github.com/cyberboysumanjay/JioSaavnAPI</a></td>
                    <td class="py-2 px-4 border-b">API to retrieve song information, album meta data and many more from JioSaavn</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">JokeAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://sv443.net/jokeapi/v2/" class="text-blue-500">https://sv443.net/jokeapi/v2/</a></td>
                    <td class="py-2 px-4 border-b">Programming, Miscellaneous and Dark Jokes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Jokes One</td>
                    <td class="py-2 px-4 border-b"><a href="https://jokes.one/api/joke/" class="text-blue-500">https://jokes.one/api/joke/</a></td>
                    <td class="py-2 px-4 border-b">Joke of the day and large category of jokes accessible via REST API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Jooble</td>
                    <td class="py-2 px-4 border-b"><a href="https://jooble.org/api/about" class="text-blue-500">https://jooble.org/api/about</a></td>
                    <td class="py-2 px-4 border-b">Job search engine</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Joshua Project</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.joshuaproject.net/" class="text-blue-500">https://api.joshuaproject.net/</a></td>
                    <td class="py-2 px-4 border-b">People groups of the world with the fewest followers of Christ</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Jservice</td>
                    <td class="py-2 px-4 border-b"><a href="http://jservice.io" class="text-blue-500">http://jservice.io</a></td>
                    <td class="py-2 px-4 border-b">Jeopardy Question Database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Judge0 CE</td>
                    <td class="py-2 px-4 border-b"><a href="https://ce.judge0.com/" class="text-blue-500">https://ce.judge0.com/</a></td>
                    <td class="py-2 px-4 border-b">Online code execution system</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Juju</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.juju.com/publisher/spec/" class="text-blue-500">http://www.juju.com/publisher/spec/</a></td>
                    <td class="py-2 px-4 border-b">Job search engine</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">KKBOX</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.kkbox.com" class="text-blue-500">https://developer.kkbox.com</a></td>
                    <td class="py-2 px-4 border-b">Get music libraries, playlists, charts, and perform out of KKBOX's platform</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">KONTESTS</td>
                    <td class="py-2 px-4 border-b"><a href="https://kontests.net/api" class="text-blue-500">https://kontests.net/api</a></td>
                    <td class="py-2 px-4 border-b">For upcoming and ongoing competitive coding contests</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">KSoft.Si Lyrics</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.ksoft.si/api/lyrics-api" class="text-blue-500">https://docs.ksoft.si/api/lyrics-api</a></td>
                    <td class="py-2 px-4 border-b">API to get lyrics for songs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kaggle</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.kaggle.com/docs/api" class="text-blue-500">https://www.kaggle.com/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Create and interact with Datasets, Notebooks, and connect with Kaggle</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kakao</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.kakao.com/" class="text-blue-500">https://developers.kakao.com/</a></td>
                    <td class="py-2 px-4 border-b">Kakao Login, Share on KakaoTalk, Social Plugins and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Keen IO</td>
                    <td class="py-2 px-4 border-b"><a href="https://keen.io/" class="text-blue-500">https://keen.io/</a></td>
                    <td class="py-2 px-4 border-b">Data Analytics</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kelley Blue Book</td>
                    <td class="py-2 px-4 border-b"><a href="http://developer.kbb.com/#!/data/1-Default" class="text-blue-500">http://developer.kbb.com/#!/data/1-Default</a></td>
                    <td class="py-2 px-4 border-b">Vehicle info, pricing, configuration, plus much more</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kickbox</td>
                    <td class="py-2 px-4 border-b"><a href="https://open.kickbox.com/" class="text-blue-500">https://open.kickbox.com/</a></td>
                    <td class="py-2 px-4 border-b">Email verification API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kitsu</td>
                    <td class="py-2 px-4 border-b"><a href="https://kitsu.docs.apiary.io/" class="text-blue-500">https://kitsu.docs.apiary.io/</a></td>
                    <td class="py-2 px-4 border-b">Anime discovery platform</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Klarna</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.klarna.com/klarna-payments/api/payments-api/" class="text-blue-500">https://docs.klarna.com/klarna-payments/api/payments-api/</a></td>
                    <td class="py-2 px-4 border-b">Klarna payment and shopping service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kraken</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.kraken.com/rest/" class="text-blue-500">https://docs.kraken.com/rest/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Exchange</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kroger</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.kroger.com/reference" class="text-blue-500">https://developer.kroger.com/reference</a></td>
                    <td class="py-2 px-4 border-b">Supermarket Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kroki</td>
                    <td class="py-2 px-4 border-b"><a href="https://kroki.io" class="text-blue-500">https://kroki.io</a></td>
                    <td class="py-2 px-4 border-b">Creates diagrams from textual descriptions</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">KuCoin</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.kucoin.com/" class="text-blue-500">https://docs.kucoin.com/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency Trading Platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Kutt</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.kutt.it/" class="text-blue-500">https://docs.kutt.it/</a></td>
                    <td class="py-2 px-4 border-b">Free Modern URL Shortener</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">LAPIS</td>
                    <td class="py-2 px-4 border-b"><a href="https://cov-spectrum.ethz.ch/public" class="text-blue-500">https://cov-spectrum.ethz.ch/public</a></td>
                    <td class="py-2 px-4 border-b">SARS-CoV-2 genomic sequences from public sources</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">LCBO</td>
                    <td class="py-2 px-4 border-b"><a href="https://lcboapi.com/" class="text-blue-500">https://lcboapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Alcohol</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lanyard</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Phineas/lanyard" class="text-blue-500">https://github.com/Phineas/lanyard</a></td>
                    <td class="py-2 px-4 border-b">Retrieve your presence on Discord through an HTTP REST API or WebSocket</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">LastFm</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.last.fm/api" class="text-blue-500">https://www.last.fm/api</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Launch Library 2</td>
                    <td class="py-2 px-4 border-b"><a href="https://thespacedevs.com/llapi" class="text-blue-500">https://thespacedevs.com/llapi</a></td>
                    <td class="py-2 px-4 border-b">Spaceflight launches and events database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lazada</td>
                    <td class="py-2 px-4 border-b"><a href="https://open.lazada.com/doc/doc.htm" class="text-blue-500">https://open.lazada.com/doc/doc.htm</a></td>
                    <td class="py-2 px-4 border-b">Retrieve product ratings and seller performance metrics</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">LectServe</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.lectserve.com" class="text-blue-500">http://www.lectserve.com</a></td>
                    <td class="py-2 px-4 border-b">Protestant liturgical calendar</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lecto Translation</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/lecto-lecto-default/api/lecto-translation/" class="text-blue-500">https://rapidapi.com/lecto-lecto-default/api/lecto-translation/</a></td>
                    <td class="py-2 px-4 border-b">Translation API with free tier and reasonable prices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lexigram</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.lexigram.io/" class="text-blue-500">https://docs.lexigram.io/</a></td>
                    <td class="py-2 px-4 border-b">NLP that extracts mentions of clinical concepts from text, gives access to clinical ontology</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">LibreTranslate</td>
                    <td class="py-2 px-4 border-b"><a href="https://libretranslate.com/docs" class="text-blue-500">https://libretranslate.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Translation tool with 17 available languages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">License-API</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/cmccandless/license-api/blob/master/README.md" class="text-blue-500">https://github.com/cmccandless/license-api/blob/master/README.md</a></td>
                    <td class="py-2 px-4 border-b">Unofficial REST API for choosealicense.com</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lichess</td>
                    <td class="py-2 px-4 border-b"><a href="https://lichess.org/api" class="text-blue-500">https://lichess.org/api</a></td>
                    <td class="py-2 px-4 border-b">Access to all data of users, games, puzzles and etc on Lichess</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Line</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.line.biz/" class="text-blue-500">https://developers.line.biz/</a></td>
                    <td class="py-2 px-4 border-b">Line Login, Share on Line, Social Plugins and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lingua Robot</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.linguarobot.io" class="text-blue-500">https://www.linguarobot.io</a></td>
                    <td class="py-2 px-4 border-b">Word definitions, pronunciations, synonyms, antonyms and others</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">LinkedIn</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.microsoft.com/en-us/linkedin/?context=linkedin/context" class="text-blue-500">https://docs.microsoft.com/en-us/linkedin/?context=linkedin/context</a></td>
                    <td class="py-2 px-4 border-b">The foundation of all digital integrations with LinkedIn</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lob.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://lob.com/" class="text-blue-500">https://lob.com/</a></td>
                    <td class="py-2 px-4 border-b">US Address Verification</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Localbitcoins</td>
                    <td class="py-2 px-4 border-b"><a href="https://localbitcoins.com/api-docs/" class="text-blue-500">https://localbitcoins.com/api-docs/</a></td>
                    <td class="py-2 px-4 border-b">P2P platform to buy and sell Bitcoins</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">LoginRadius</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.loginradius.com/docs/" class="text-blue-500">https://www.loginradius.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Managed User Authentication Service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Logs.to</td>
                    <td class="py-2 px-4 border-b"><a href="https://logs.to/" class="text-blue-500">https://logs.to/</a></td>
                    <td class="py-2 px-4 border-b">Generate logs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lordicon</td>
                    <td class="py-2 px-4 border-b"><a href="https://lordicon.com/" class="text-blue-500">https://lordicon.com/</a></td>
                    <td class="py-2 px-4 border-b">Icons with predone Animations</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lorem Picsum</td>
                    <td class="py-2 px-4 border-b"><a href="https://picsum.photos/" class="text-blue-500">https://picsum.photos/</a></td>
                    <td class="py-2 px-4 border-b">Images from Unsplash</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Loripsum</td>
                    <td class="py-2 px-4 border-b"><a href="http://loripsum.net/" class="text-blue-500">http://loripsum.net/</a></td>
                    <td class="py-2 px-4 border-b">The "lorem ipsum" generator that doesn't suck</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lowy Asia Power Index</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/0x0is1/lowy-index-api-docs" class="text-blue-500">https://github.com/0x0is1/lowy-index-api-docs</a></td>
                    <td class="py-2 px-4 border-b">Get measure resources and influence to rank the relative power of states in Asia</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lua Decompiler</td>
                    <td class="py-2 px-4 border-b"><a href="https://lua-decompiler.ferib.dev/" class="text-blue-500">https://lua-decompiler.ferib.dev/</a></td>
                    <td class="py-2 px-4 border-b">Online Lua 5.1 Decompiler</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Luchtmeetnet</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-docs.luchtmeetnet.nl/" class="text-blue-500">https://api-docs.luchtmeetnet.nl/</a></td>
                    <td class="py-2 px-4 border-b">Predicted and actual air quality components for The Netherlands RIVM</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lucifer Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/shadowoff09/lucifer-quotes" class="text-blue-500">https://github.com/shadowoff09/lucifer-quotes</a></td>
                    <td class="py-2 px-4 border-b">Returns Lucifer quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Lyrics.ovh</td>
                    <td class="py-2 px-4 border-b"><a href="https://lyricsovh.docs.apiary.io" class="text-blue-500">https://lyricsovh.docs.apiary.io</a></td>
                    <td class="py-2 px-4 border-b">Simple API to retrieve the lyrics of a song</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MAC address vendor lookup</td>
                    <td class="py-2 px-4 border-b"><a href="https://macaddress.io/api" class="text-blue-500">https://macaddress.io/api</a></td>
                    <td class="py-2 px-4 border-b">Retrieve vendor details and other information regarding a given MAC address or an OUI</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MCU Countdown</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/DiljotSG/MCU-Countdown" class="text-blue-500">https://github.com/DiljotSG/MCU-Countdown</a></td>
                    <td class="py-2 px-4 border-b">A Countdown to the next MCU Film</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MLB Records and Stats</td>
                    <td class="py-2 px-4 border-b"><a href="https://appac.github.io/mlb-data-api-docs/" class="text-blue-500">https://appac.github.io/mlb-data-api-docs/</a></td>
                    <td class="py-2 px-4 border-b">Current and historical MLB statistics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MMO Games</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mmobomb.com/api" class="text-blue-500">https://www.mmobomb.com/api</a></td>
                    <td class="py-2 px-4 border-b">MMO Games Database, News and Giveaways</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MY IP</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.myip.com/api-docs/" class="text-blue-500">https://www.myip.com/api-docs/</a></td>
                    <td class="py-2 px-4 border-b">Get IP address information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Machinetutors</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.machinetutors.com/portfolio/MT_api.html" class="text-blue-500">https://www.machinetutors.com/portfolio/MT_api.html</a></td>
                    <td class="py-2 px-4 border-b">AI Solutions: Video/Image Classification & Tagging, NSFW, Icon/Image/Audio Search, NLP</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Magic The Gathering</td>
                    <td class="py-2 px-4 border-b"><a href="http://magicthegathering.io/" class="text-blue-500">http://magicthegathering.io/</a></td>
                    <td class="py-2 px-4 border-b">Magic The Gathering Game Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MailCheck.ai</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mailcheck.ai/#documentation" class="text-blue-500">https://www.mailcheck.ai/#documentation</a></td>
                    <td class="py-2 px-4 border-b">Prevent users to sign up with temporary email addresses</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MailboxValidator</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mailboxvalidator.com/api-email-free" class="text-blue-500">https://www.mailboxvalidator.com/api-email-free</a></td>
                    <td class="py-2 px-4 border-b">Validate email address to improve deliverability</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mailchimp</td>
                    <td class="py-2 px-4 border-b"><a href="https://mailchimp.com/developer/" class="text-blue-500">https://mailchimp.com/developer/</a></td>
                    <td class="py-2 px-4 border-b">Send marketing campaigns and transactional mails</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mailsac</td>
                    <td class="py-2 px-4 border-b"><a href="https://mailsac.com/docs/api" class="text-blue-500">https://mailsac.com/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Disposable Email</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mailtrap</td>
                    <td class="py-2 px-4 border-b"><a href="https://mailtrap.docs.apiary.io/#" class="text-blue-500">https://mailtrap.docs.apiary.io/#</a></td>
                    <td class="py-2 px-4 border-b">A service for the safe testing of emails sent from the development and staging environments</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Makeup</td>
                    <td class="py-2 px-4 border-b"><a href="http://makeup-api.herokuapp.com/" class="text-blue-500">http://makeup-api.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Makeup Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MalShare</td>
                    <td class="py-2 px-4 border-b"><a href="https://malshare.com/doc.php" class="text-blue-500">https://malshare.com/doc.php</a></td>
                    <td class="py-2 px-4 border-b">Malware Archive / file sourcing</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MalwareBazaar</td>
                    <td class="py-2 px-4 border-b"><a href="https://bazaar.abuse.ch/api/" class="text-blue-500">https://bazaar.abuse.ch/api/</a></td>
                    <td class="py-2 px-4 border-b">Collect and share malware samples</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MangaDex</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.mangadex.org/docs.html" class="text-blue-500">https://api.mangadex.org/docs.html</a></td>
                    <td class="py-2 px-4 border-b">Manga Database and Community</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mangapi</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/pierre.carcellermeunier/api/mangapi3/" class="text-blue-500">https://rapidapi.com/pierre.carcellermeunier/api/mangapi3/</a></td>
                    <td class="py-2 px-4 border-b">Translate manga pages from one language to another</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mario Kart Tour</td>
                    <td class="py-2 px-4 border-b"><a href="https://mario-kart-tour-api.herokuapp.com/" class="text-blue-500">https://mario-kart-tour-api.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">API for Drivers, Karts, Gliders and Courses</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MarketAux</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.marketaux.com/" class="text-blue-500">https://www.marketaux.com/</a></td>
                    <td class="py-2 px-4 border-b">Live stock market news with tagged tickers + sentiment and stats JSON API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Marketstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://marketstack.com/" class="text-blue-500">https://marketstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Free, easy-to-use REST API interface delivering worldwide stock market data in JSON format</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Marvel</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.marvel.com" class="text-blue-500">https://developer.marvel.com</a></td>
                    <td class="py-2 px-4 border-b">Marvel Comics</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mattermost</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.mattermost.com/" class="text-blue-500">https://api.mattermost.com/</a></td>
                    <td class="py-2 px-4 border-b">An open source platform for developer collaboration</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Medium</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Medium/medium-api-docs" class="text-blue-500">https://github.com/Medium/medium-api-docs</a></td>
                    <td class="py-2 px-4 border-b">Community of readers and writers offering unique perspectives on ideas</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Meetup.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.meetup.com/api/guide" class="text-blue-500">https://www.meetup.com/api/guide</a></td>
                    <td class="py-2 px-4 border-b">Data about Meetups from Meetup.com</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Meme Maker</td>
                    <td class="py-2 px-4 border-b"><a href="https://mememaker.github.io/API/" class="text-blue-500">https://mememaker.github.io/API/</a></td>
                    <td class="py-2 px-4 border-b">REST API for create your own meme</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mempool</td>
                    <td class="py-2 px-4 border-b"><a href="https://mempool.space/api" class="text-blue-500">https://mempool.space/api</a></td>
                    <td class="py-2 px-4 border-b">Bitcoin API Service focusing on the transaction fee</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MeowFacts</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/wh-iterabb-it/meowfacts" class="text-blue-500">https://github.com/wh-iterabb-it/meowfacts</a></td>
                    <td class="py-2 px-4 border-b">Get random cat facts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MercadoBitcoin</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mercadobitcoin.com.br/api-doc/" class="text-blue-500">https://www.mercadobitcoin.com.br/api-doc/</a></td>
                    <td class="py-2 px-4 border-b">Brazilian Cryptocurrency Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MercadoPago</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mercadopago.com.br/developers/es/reference" class="text-blue-500">https://www.mercadopago.com.br/developers/es/reference</a></td>
                    <td class="py-2 px-4 border-b">Mercado Pago API reference - all the information you need to develop your integrations</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mercadolibre</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.mercadolibre.cl/es_ar/api-docs-es" class="text-blue-500">https://developers.mercadolibre.cl/es_ar/api-docs-es</a></td>
                    <td class="py-2 px-4 border-b">Manage sales, ads, products, services and Shops</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mercedes-Benz</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.mercedes-benz.com/apis" class="text-blue-500">https://developer.mercedes-benz.com/apis</a></td>
                    <td class="py-2 px-4 border-b">Telematics data, remotely access vehicle functions, car configurator, locate service dealers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mercury</td>
                    <td class="py-2 px-4 border-b"><a href="https://mercury.postlight.com/web-parser/" class="text-blue-500">https://mercury.postlight.com/web-parser/</a></td>
                    <td class="py-2 px-4 border-b">Web parser</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Merriam-Webster</td>
                    <td class="py-2 px-4 border-b"><a href="https://dictionaryapi.com/" class="text-blue-500">https://dictionaryapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Dictionary and Thesaurus Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Messari</td>
                    <td class="py-2 px-4 border-b"><a href="https://messari.io/api" class="text-blue-500">https://messari.io/api</a></td>
                    <td class="py-2 px-4 border-b">Provides API endpoints for thousands of crypto assets</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MessengerX.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://messengerx.rtfd.io" class="text-blue-500">https://messengerx.rtfd.io</a></td>
                    <td class="py-2 px-4 border-b">A FREE API for developers to build and monetize personalized ML based chat apps</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MetaWeather</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.metaweather.com/api/" class="text-blue-500">https://www.metaweather.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Weather</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Metabase</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.metabase.com/" class="text-blue-500">https://www.metabase.com/</a></td>
                    <td class="py-2 px-4 border-b">An open source Business Intelligence server to share data and analytics inside your company</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Metacert</td>
                    <td class="py-2 px-4 border-b"><a href="https://metacert.com/" class="text-blue-500">https://metacert.com/</a></td>
                    <td class="py-2 px-4 border-b">Metacert Link Flagging</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Metaphorsum</td>
                    <td class="py-2 px-4 border-b"><a href="http://metaphorpsum.com/" class="text-blue-500">http://metaphorpsum.com/</a></td>
                    <td class="py-2 px-4 border-b">Generate demo paragraphs giving number of words and sentences</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Meteorologisk Institutt</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.met.no/weatherapi/documentation" class="text-blue-500">https://api.met.no/weatherapi/documentation</a></td>
                    <td class="py-2 px-4 border-b">Weather and climate data</td>
                    <td class="py-2 px-4 border-b">`User-Agent`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Metro Lisboa</td>
                    <td class="py-2 px-4 border-b"><a href="http://app.metrolisboa.pt/status/getLinhas.php" class="text-blue-500">http://app.metrolisboa.pt/status/getLinhas.php</a></td>
                    <td class="py-2 px-4 border-b">Delays in subway lines</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Metropolitan Museum of Art</td>
                    <td class="py-2 px-4 border-b"><a href="https://metmuseum.github.io/" class="text-blue-500">https://metmuseum.github.io/</a></td>
                    <td class="py-2 px-4 border-b">Met Museum of Art</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mexico</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/IcaliaLabs/sepomex" class="text-blue-500">https://github.com/IcaliaLabs/sepomex</a></td>
                    <td class="py-2 px-4 border-b">Mexico RESTful zip codes API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mgnet.me</td>
                    <td class="py-2 px-4 border-b"><a href="http://mgnet.me/api.html" class="text-blue-500">http://mgnet.me/api.html</a></td>
                    <td class="py-2 px-4 border-b">Torrent URL shorten API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Micro DB</td>
                    <td class="py-2 px-4 border-b"><a href="https://m3o.com/db" class="text-blue-500">https://m3o.com/db</a></td>
                    <td class="py-2 px-4 border-b">Simple database service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Micro User Service</td>
                    <td class="py-2 px-4 border-b"><a href="https://m3o.com/user" class="text-blue-500">https://m3o.com/user</a></td>
                    <td class="py-2 px-4 border-b">User management and authentication</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Micro Weather</td>
                    <td class="py-2 px-4 border-b"><a href="https://m3o.com/weather/api" class="text-blue-500">https://m3o.com/weather/api</a></td>
                    <td class="py-2 px-4 border-b">Real time weather forecasts and historic data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MicroENV</td>
                    <td class="py-2 px-4 border-b"><a href="https://microenv.com/" class="text-blue-500">https://microenv.com/</a></td>
                    <td class="py-2 px-4 border-b">Fake Rest API for developers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Microlink.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://microlink.io" class="text-blue-500">https://microlink.io</a></td>
                    <td class="py-2 px-4 border-b">Extract structured data from any website</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Microsoft Graph</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.microsoft.com/en-us/graph/api/overview" class="text-blue-500">https://docs.microsoft.com/en-us/graph/api/overview</a></td>
                    <td class="py-2 px-4 border-b">Access the data and intelligence in Microsoft 365, Windows 10, and Enterprise Mobility</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Microsoft Security Response Center MSRC</td>
                    <td class="py-2 px-4 border-b"><a href="https://msrc.microsoft.com/report/developer" class="text-blue-500">https://msrc.microsoft.com/report/developer</a></td>
                    <td class="py-2 px-4 border-b">Programmatic interfaces to engage with the Microsoft Security Response Center MSRC</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Minecraft Server Status</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.mcsrvstat.us" class="text-blue-500">https://api.mcsrvstat.us</a></td>
                    <td class="py-2 px-4 border-b">API to get Information about a Minecraft Server</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Minor Planet Center</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.asterank.com/mpc" class="text-blue-500">http://www.asterank.com/mpc</a></td>
                    <td class="py-2 px-4 border-b">Asterank.com Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mintlify</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.mintlify.com" class="text-blue-500">https://docs.mintlify.com</a></td>
                    <td class="py-2 px-4 border-b">For programmatically generating documentation for code</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mixcloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mixcloud.com/developers/" class="text-blue-500">https://www.mixcloud.com/developers/</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mockaroo</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mockaroo.com/docs" class="text-blue-500">https://www.mockaroo.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Generate fake data to JSON, CSV, TXT, SQL and XML</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mocky</td>
                    <td class="py-2 px-4 border-b"><a href="https://designer.mocky.io/" class="text-blue-500">https://designer.mocky.io/</a></td>
                    <td class="py-2 px-4 border-b">Mock user defined test JSON for REST API endpoints</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mojang</td>
                    <td class="py-2 px-4 border-b"><a href="https://wiki.vg/Mojang_API" class="text-blue-500">https://wiki.vg/Mojang_API</a></td>
                    <td class="py-2 px-4 border-b">Mojang / Minecraft API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MojoAuth</td>
                    <td class="py-2 px-4 border-b"><a href="https://mojoauth.com" class="text-blue-500">https://mojoauth.com</a></td>
                    <td class="py-2 px-4 border-b">Secure and modern passwordless authentication platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Monday</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.developer.monday.com/docs" class="text-blue-500">https://api.developer.monday.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Programmatically access and update data inside a monday.com account</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mono</td>
                    <td class="py-2 px-4 border-b"><a href="https://mono.co/" class="text-blue-500">https://mono.co/</a></td>
                    <td class="py-2 px-4 border-b">Connect with users’ bank accounts and access transaction data in Africa</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Monster Hunter World</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.mhw-db.com/" class="text-blue-500">https://docs.mhw-db.com/</a></td>
                    <td class="py-2 px-4 border-b">Monster Hunter World data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Moov</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.moov.io/api/" class="text-blue-500">https://docs.moov.io/api/</a></td>
                    <td class="py-2 px-4 border-b">The Moov API makes it simple for platforms to send, receive, and store money</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Motivational Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://nodejs-quoteapp.herokuapp.com/" class="text-blue-500">https://nodejs-quoteapp.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Random Motivational Quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Movebank</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/movebank/movebank-api-doc" class="text-blue-500">https://github.com/movebank/movebank-api-doc</a></td>
                    <td class="py-2 px-4 border-b">Movement and Migration data of animals</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Movie Quote</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/F4R4N/movie-quote/" class="text-blue-500">https://github.com/F4R4N/movie-quote/</a></td>
                    <td class="py-2 px-4 border-b">Random Movie and Series Quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mozilla http scanner</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md" class="text-blue-500">https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md</a></td>
                    <td class="py-2 px-4 border-b">Mozilla observatory http scanner</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Mozilla tls scanner</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/mozilla/tls-observatory#api-endpoints" class="text-blue-500">https://github.com/mozilla/tls-observatory#api-endpoints</a></td>
                    <td class="py-2 px-4 border-b">Mozilla observatory tls scanner</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MusicBrainz</td>
                    <td class="py-2 px-4 border-b"><a href="https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2" class="text-blue-500">https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Musixmatch</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.musixmatch.com/" class="text-blue-500">https://developer.musixmatch.com/</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MyAnimeList</td>
                    <td class="py-2 px-4 border-b"><a href="https://myanimelist.net/clubs.php?cid=13727" class="text-blue-500">https://myanimelist.net/clubs.php?cid=13727</a></td>
                    <td class="py-2 px-4 border-b">Anime and Manga Database and Community</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">MyVaccination</td>
                    <td class="py-2 px-4 border-b"><a href="https://documenter.getpostman.com/view/16605343/Tzm8GG7u" class="text-blue-500">https://documenter.getpostman.com/view/16605343/Tzm8GG7u</a></td>
                    <td class="py-2 px-4 border-b">Vaccination data for Malaysia</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NASA</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.nasa.gov" class="text-blue-500">https://api.nasa.gov</a></td>
                    <td class="py-2 px-4 border-b">NASA data, including imagery</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NASA ADS</td>
                    <td class="py-2 px-4 border-b"><a href="https://ui.adsabs.harvard.edu/help/api/api-docs.html" class="text-blue-500">https://ui.adsabs.harvard.edu/help/api/api-docs.html</a></td>
                    <td class="py-2 px-4 border-b">NASA Astrophysics Data System</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NAVER</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.naver.com/main/" class="text-blue-500">https://developers.naver.com/main/</a></td>
                    <td class="py-2 px-4 border-b">NAVER Login, Share on NAVER, Social Plugins and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NBA Stats</td>
                    <td class="py-2 px-4 border-b"><a href="https://any-api.com/nba_com/nba_com/docs/API_Description" class="text-blue-500">https://any-api.com/nba_com/nba_com/docs/API_Description</a></td>
                    <td class="py-2 px-4 border-b">Current and historical NBA Statistics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NHL Records and Stats</td>
                    <td class="py-2 px-4 border-b"><a href="https://gitlab.com/dword4/nhlapi" class="text-blue-500">https://gitlab.com/dword4/nhlapi</a></td>
                    <td class="py-2 px-4 border-b">NHL historical data and statistics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NHTSA</td>
                    <td class="py-2 px-4 border-b"><a href="https://vpic.nhtsa.dot.gov/api/" class="text-blue-500">https://vpic.nhtsa.dot.gov/api/</a></td>
                    <td class="py-2 px-4 border-b">NHTSA Product Information Catalog and Vehicle Listing</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NLP Cloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://nlpcloud.io" class="text-blue-500">https://nlpcloud.io</a></td>
                    <td class="py-2 px-4 border-b">NLP API using spaCy and transformers for NER, sentiments, classification, summarization, and more</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NPPES</td>
                    <td class="py-2 px-4 border-b"><a href="https://npiregistry.cms.hhs.gov/registry/help-api" class="text-blue-500">https://npiregistry.cms.hhs.gov/registry/help-api</a></td>
                    <td class="py-2 px-4 border-b">National Plan & Provider Enumeration System, info on healthcare providers registered in US</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NPR One</td>
                    <td class="py-2 px-4 border-b"><a href="http://dev.npr.org/api/" class="text-blue-500">http://dev.npr.org/api/</a></td>
                    <td class="py-2 px-4 border-b">Personalized news listening experience from NPR</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NaMoMemes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/theIYD/NaMoMemes" class="text-blue-500">https://github.com/theIYD/NaMoMemes</a></td>
                    <td class="py-2 px-4 border-b">Memes on Narendra Modi</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nager.Date</td>
                    <td class="py-2 px-4 border-b"><a href="https://date.nager.at" class="text-blue-500">https://date.nager.at</a></td>
                    <td class="py-2 px-4 border-b">Public holidays for more than 90 countries</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Namedays Calendar</td>
                    <td class="py-2 px-4 border-b"><a href="https://nameday.abalin.net" class="text-blue-500">https://nameday.abalin.net</a></td>
                    <td class="py-2 px-4 border-b">Provides namedays for multiple countries</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Napster</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.napster.com/api/v2.2" class="text-blue-500">https://developer.napster.com/api/v2.2</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">National Bank of Poland</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.nbp.pl/en.html" class="text-blue-500">http://api.nbp.pl/en.html</a></td>
                    <td class="py-2 px-4 border-b">A collection of currency exchange rates data in XML and JSON</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">National Grid ESO</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.nationalgrideso.com/" class="text-blue-500">https://data.nationalgrideso.com/</a></td>
                    <td class="py-2 px-4 border-b">Open data from Great Britain’s Electricity System Operator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">National Park Service, US</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.nps.gov/subjects/developer/" class="text-blue-500">https://www.nps.gov/subjects/developer/</a></td>
                    <td class="py-2 px-4 border-b">Data from the US National Park Service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nationalize.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://nationalize.io" class="text-blue-500">https://nationalize.io</a></td>
                    <td class="py-2 px-4 border-b">Estimate the nationality of a first name</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Navitia</td>
                    <td class="py-2 px-4 border-b"><a href="https://doc.navitia.io/" class="text-blue-500">https://doc.navitia.io/</a></td>
                    <td class="py-2 px-4 border-b">The open API for building cool stuff with transport data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NekosBest</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.nekos.best" class="text-blue-500">https://docs.nekos.best</a></td>
                    <td class="py-2 px-4 border-b">Neko Images & Anime roleplaying GIFs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Netlify</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.netlify.com/api/get-started/" class="text-blue-500">https://docs.netlify.com/api/get-started/</a></td>
                    <td class="py-2 px-4 border-b">Netlify is a hosting service for the programmable web</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NetworkCalc</td>
                    <td class="py-2 px-4 border-b"><a href="https://networkcalc.com/api/docs" class="text-blue-500">https://networkcalc.com/api/docs</a></td>
                    <td class="py-2 px-4 border-b">Network calculators, including subnets, DNS, binary, and security tools</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">New York Times</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.nytimes.com/" class="text-blue-500">https://developer.nytimes.com/</a></td>
                    <td class="py-2 px-4 border-b">The New York Times Developer Network</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">News</td>
                    <td class="py-2 px-4 border-b"><a href="https://newsapi.org/" class="text-blue-500">https://newsapi.org/</a></td>
                    <td class="py-2 px-4 border-b">Headlines currently published on a range of news sources and blogs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NewsX</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/machaao-inc-machaao-inc-default/api/newsx/" class="text-blue-500">https://rapidapi.com/machaao-inc-machaao-inc-default/api/newsx/</a></td>
                    <td class="py-2 px-4 border-b">Get or Search Latest Breaking News with ML Powered Summaries 🤖</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Newton</td>
                    <td class="py-2 px-4 border-b"><a href="https://newton.vercel.app" class="text-blue-500">https://newton.vercel.app</a></td>
                    <td class="py-2 px-4 border-b">Symbolic and Arithmetic Math Calculator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nexchange</td>
                    <td class="py-2 px-4 border-b"><a href="https://nexchange2.docs.apiary.io/" class="text-blue-500">https://nexchange2.docs.apiary.io/</a></td>
                    <td class="py-2 px-4 border-b">Automated cryptocurrency exchange service</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NoPhishy</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/Amiichu/api/exerra-phishing-check/" class="text-blue-500">https://rapidapi.com/Amiichu/api/exerra-phishing-check/</a></td>
                    <td class="py-2 px-4 border-b">Check links to see if they're known phishing attempts</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nobel Prize</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.nobelprize.org/about/developer-zone-2/" class="text-blue-500">https://www.nobelprize.org/about/developer-zone-2/</a></td>
                    <td class="py-2 px-4 border-b">Open data about nobel prizes and events</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Noctua</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.noctuasky.com/api/v1/swaggerdoc/" class="text-blue-500">https://api.noctuasky.com/api/v1/swaggerdoc/</a></td>
                    <td class="py-2 px-4 border-b">REST API used to access NoctuaSky features</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nomics</td>
                    <td class="py-2 px-4 border-b"><a href="https://nomics.com/docs/" class="text-blue-500">https://nomics.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Historical and realtime cryptocurrency prices and market data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nominatim</td>
                    <td class="py-2 px-4 border-b"><a href="https://nominatim.org/release-docs/latest/api/Overview/" class="text-blue-500">https://nominatim.org/release-docs/latest/api/Overview/</a></td>
                    <td class="py-2 px-4 border-b">Provides worldwide forward / reverse geocoding</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Non-Working Days</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/gadael/icsdb" class="text-blue-500">https://github.com/gadael/icsdb</a></td>
                    <td class="py-2 px-4 border-b">Database of ICS files for non working days</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Non-Working Days</td>
                    <td class="py-2 px-4 border-b"><a href="https://isdayoff.ru" class="text-blue-500">https://isdayoff.ru</a></td>
                    <td class="py-2 px-4 border-b">Simple REST API for checking working, non-working or short days for Russia, CIS, USA and other</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nordigen</td>
                    <td class="py-2 px-4 border-b"><a href="https://nordigen.com/en/account_information_documenation/integration/quickstart_guide/" class="text-blue-500">https://nordigen.com/en/account_information_documenation/integration/quickstart_guide/</a></td>
                    <td class="py-2 px-4 border-b">Connect to bank accounts using official bank APIs and get raw transaction data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Notion</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.notion.com" class="text-blue-500">https://developers.notion.com</a></td>
                    <td class="py-2 px-4 border-b">Integrate with Notion</td>
                    <td class="py-2 px-4 border-b">`apiKey` </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Notion</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.notion.com/docs/getting-started" class="text-blue-500">https://developers.notion.com/docs/getting-started</a></td>
                    <td class="py-2 px-4 border-b">Integrate with Notion</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Noun Project</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.thenounproject.com/index.html" class="text-blue-500">http://api.thenounproject.com/index.html</a></td>
                    <td class="py-2 px-4 border-b">Icons</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">NovaDax</td>
                    <td class="py-2 px-4 border-b"><a href="https://doc.novadax.com/en-US/#introduction" class="text-blue-500">https://doc.novadax.com/en-US/#introduction</a></td>
                    <td class="py-2 px-4 border-b">NovaDAX API to access all market data, trading management endpoints</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Nownodes</td>
                    <td class="py-2 px-4 border-b"><a href="https://nownodes.io/" class="text-blue-500">https://nownodes.io/</a></td>
                    <td class="py-2 px-4 border-b">Blockchain-as-a-service solution that provides high-quality connection via API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Numbers</td>
                    <td class="py-2 px-4 border-b"><a href="https://math.tools/api/numbers/" class="text-blue-500">https://math.tools/api/numbers/</a></td>
                    <td class="py-2 px-4 border-b">Number of the day, random number, number facts and anything else you want to do with numbers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Numbers</td>
                    <td class="py-2 px-4 border-b"><a href="http://numbersapi.com" class="text-blue-500">http://numbersapi.com</a></td>
                    <td class="py-2 px-4 border-b">Facts about numbers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Numverify</td>
                    <td class="py-2 px-4 border-b"><a href="https://numverify.com/" class="text-blue-500">https://numverify.com/</a></td>
                    <td class="py-2 px-4 border-b">Global Phone Number Validation & Lookup JSON API</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ODWeather</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.oceandrivers.com/static/docs.html" class="text-blue-500">http://api.oceandrivers.com/static/docs.html</a></td>
                    <td class="py-2 px-4 border-b">Weather and weather webcams</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OKEx</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.okex.com/docs/" class="text-blue-500">https://www.okex.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency exchange based in Seychelles</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OLX Poland</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.olx.pl/api/doc#section/" class="text-blue-500">https://developer.olx.pl/api/doc#section/</a></td>
                    <td class="py-2 px-4 border-b">Integrate with local sites by posting, managing adverts and communicating with OLX users</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ORB Intelligence</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.orb-intelligence.com/docs/" class="text-blue-500">https://api.orb-intelligence.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Company lookup</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ObjectCut</td>
                    <td class="py-2 px-4 border-b"><a href="https://objectcut.com/" class="text-blue-500">https://objectcut.com/</a></td>
                    <td class="py-2 px-4 border-b">Image Background removal</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ocean Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://oceanfacts.herokuapp.com/" class="text-blue-500">https://oceanfacts.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Facts pertaining to the physical science of Oceanography</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Octopart</td>
                    <td class="py-2 px-4 border-b"><a href="https://octopart.com/api/v4/reference" class="text-blue-500">https://octopart.com/api/v4/reference</a></td>
                    <td class="py-2 px-4 border-b">Electronic part data for manufacturing, design, and sourcing</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Oddsmagnet</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.oddsmagnet.com" class="text-blue-500">https://data.oddsmagnet.com</a></td>
                    <td class="py-2 px-4 border-b">Odds history from multiple UK bookmakers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Oikolab</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.oikolab.com" class="text-blue-500">https://docs.oikolab.com</a></td>
                    <td class="py-2 px-4 border-b">70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OnWater</td>
                    <td class="py-2 px-4 border-b"><a href="https://onwater.io/" class="text-blue-500">https://onwater.io/</a></td>
                    <td class="py-2 px-4 border-b">Determine if a lat/lon is on water or land</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OneDrive</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.microsoft.com/onedrive" class="text-blue-500">https://developer.microsoft.com/onedrive</a></td>
                    <td class="py-2 px-4 border-b">File Sharing and Storage</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OneSignal</td>
                    <td class="py-2 px-4 border-b"><a href="https://documentation.onesignal.com/docs/onesignal-api" class="text-blue-500">https://documentation.onesignal.com/docs/onesignal-api</a></td>
                    <td class="py-2 px-4 border-b">Self-serve customer engagement solution for Push Notifications, Email, SMS & In-App</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Brewery DB</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.openbrewerydb.org" class="text-blue-500">https://www.openbrewerydb.org</a></td>
                    <td class="py-2 px-4 border-b">Breweries, Cideries and Craft Beer Bottle Shops</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Collective</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.opencollective.com/help/developers/api" class="text-blue-500">https://docs.opencollective.com/help/developers/api</a></td>
                    <td class="py-2 px-4 border-b">Get Open Collective data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, ACT</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.act.gov.au/" class="text-blue-500">https://www.data.act.gov.au/</a></td>
                    <td class="py-2 px-4 border-b">Australian Capital Territory Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Argentina</td>
                    <td class="py-2 px-4 border-b"><a href="https://datos.gob.ar/" class="text-blue-500">https://datos.gob.ar/</a></td>
                    <td class="py-2 px-4 border-b">Argentina Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Australia</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.gov.au/" class="text-blue-500">https://www.data.gov.au/</a></td>
                    <td class="py-2 px-4 border-b">Australian Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Austria</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.gv.at/" class="text-blue-500">https://www.data.gv.at/</a></td>
                    <td class="py-2 px-4 border-b">Austria Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Belgium</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.be/" class="text-blue-500">https://data.gov.be/</a></td>
                    <td class="py-2 px-4 border-b">Belgium Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Canada</td>
                    <td class="py-2 px-4 border-b"><a href="http://open.canada.ca/en" class="text-blue-500">http://open.canada.ca/en</a></td>
                    <td class="py-2 px-4 border-b">Canadian Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Colombia</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.dane.gov.co/" class="text-blue-500">https://www.dane.gov.co/</a></td>
                    <td class="py-2 px-4 border-b">Colombia Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Cyprus</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.cy/?language=en" class="text-blue-500">https://data.gov.cy/?language=en</a></td>
                    <td class="py-2 px-4 border-b">Cyprus Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Czech Republic</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.cz/english/" class="text-blue-500">https://data.gov.cz/english/</a></td>
                    <td class="py-2 px-4 border-b">Czech Republic Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Denmark</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.opendata.dk/" class="text-blue-500">https://www.opendata.dk/</a></td>
                    <td class="py-2 px-4 border-b">Denmark Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Estonia</td>
                    <td class="py-2 px-4 border-b"><a href="https://avaandmed.eesti.ee/instructions/opendata-dataset-api" class="text-blue-500">https://avaandmed.eesti.ee/instructions/opendata-dataset-api</a></td>
                    <td class="py-2 px-4 border-b">Estonia Government Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Finland</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.avoindata.fi/en" class="text-blue-500">https://www.avoindata.fi/en</a></td>
                    <td class="py-2 px-4 border-b">Finland Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, France</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.gouv.fr/" class="text-blue-500">https://www.data.gouv.fr/</a></td>
                    <td class="py-2 px-4 border-b">French Government Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Germany</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.govdata.de/daten/-/details/govdata-metadatenkatalog" class="text-blue-500">https://www.govdata.de/daten/-/details/govdata-metadatenkatalog</a></td>
                    <td class="py-2 px-4 border-b">Germany Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Greece</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.gr/" class="text-blue-500">https://data.gov.gr/</a></td>
                    <td class="py-2 px-4 border-b">Greece Government Open Data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, India</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.in/" class="text-blue-500">https://data.gov.in/</a></td>
                    <td class="py-2 px-4 border-b">Indian Government Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Ireland</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.ie/pages/developers" class="text-blue-500">https://data.gov.ie/pages/developers</a></td>
                    <td class="py-2 px-4 border-b">Ireland Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Italy</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.dati.gov.it/" class="text-blue-500">https://www.dati.gov.it/</a></td>
                    <td class="py-2 px-4 border-b">Italy Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Korea</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.go.kr/" class="text-blue-500">https://www.data.go.kr/</a></td>
                    <td class="py-2 px-4 border-b">Korea Government Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Lithuania</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.lt/public/api/1" class="text-blue-500">https://data.gov.lt/public/api/1</a></td>
                    <td class="py-2 px-4 border-b">Lithuania Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Luxembourg</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.public.lu" class="text-blue-500">https://data.public.lu</a></td>
                    <td class="py-2 px-4 border-b">Luxembourgish Government Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Mexico</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.inegi.org.mx/datos/" class="text-blue-500">https://www.inegi.org.mx/datos/</a></td>
                    <td class="py-2 px-4 border-b">Mexican Statistical Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Mexico</td>
                    <td class="py-2 px-4 border-b"><a href="https://datos.gob.mx/" class="text-blue-500">https://datos.gob.mx/</a></td>
                    <td class="py-2 px-4 border-b">Mexico Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Netherlands</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.overheid.nl/en/ondersteuning/data-publiceren/api" class="text-blue-500">https://data.overheid.nl/en/ondersteuning/data-publiceren/api</a></td>
                    <td class="py-2 px-4 border-b">Netherlands Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, New South Wales</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.nsw.gov.au/" class="text-blue-500">https://api.nsw.gov.au/</a></td>
                    <td class="py-2 px-4 border-b">New South Wales Government Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, New Zealand</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.govt.nz/" class="text-blue-500">https://www.data.govt.nz/</a></td>
                    <td class="py-2 px-4 border-b">New Zealand Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Norway</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.norge.no/dataservices" class="text-blue-500">https://data.norge.no/dataservices</a></td>
                    <td class="py-2 px-4 border-b">Norwegian Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Peru</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.datosabiertos.gob.pe/" class="text-blue-500">https://www.datosabiertos.gob.pe/</a></td>
                    <td class="py-2 px-4 border-b">Peru Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Poland</td>
                    <td class="py-2 px-4 border-b"><a href="https://dane.gov.pl/en" class="text-blue-500">https://dane.gov.pl/en</a></td>
                    <td class="py-2 px-4 border-b">Poland Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Portugal</td>
                    <td class="py-2 px-4 border-b"><a href="https://dados.gov.pt/en/docapi/" class="text-blue-500">https://dados.gov.pt/en/docapi/</a></td>
                    <td class="py-2 px-4 border-b">Portugal Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Queensland Government</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.qld.gov.au/" class="text-blue-500">https://www.data.qld.gov.au/</a></td>
                    <td class="py-2 px-4 border-b">Queensland Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Romania</td>
                    <td class="py-2 px-4 border-b"><a href="http://data.gov.ro/" class="text-blue-500">http://data.gov.ro/</a></td>
                    <td class="py-2 px-4 border-b">Romania Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Saudi Arabia</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.sa" class="text-blue-500">https://data.gov.sa</a></td>
                    <td class="py-2 px-4 border-b">Saudi Arabia Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Singapore</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.sg/developer" class="text-blue-500">https://data.gov.sg/developer</a></td>
                    <td class="py-2 px-4 border-b">Singapore Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Slovakia</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.sk/en/" class="text-blue-500">https://data.gov.sk/en/</a></td>
                    <td class="py-2 px-4 border-b">Slovakia Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Slovenia</td>
                    <td class="py-2 px-4 border-b"><a href="https://podatki.gov.si/" class="text-blue-500">https://podatki.gov.si/</a></td>
                    <td class="py-2 px-4 border-b">Slovenia Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, South Australian Government</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.sa.gov.au/" class="text-blue-500">https://data.sa.gov.au/</a></td>
                    <td class="py-2 px-4 border-b">South Australian Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Spain</td>
                    <td class="py-2 px-4 border-b"><a href="https://datos.gob.es/en" class="text-blue-500">https://datos.gob.es/en</a></td>
                    <td class="py-2 px-4 border-b">Spain Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Sweden</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.dataportal.se/en/dataservice/91_29789/api-for-the-statistical-database" class="text-blue-500">https://www.dataportal.se/en/dataservice/91_29789/api-for-the-statistical-database</a></td>
                    <td class="py-2 px-4 border-b">Sweden Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Switzerland</td>
                    <td class="py-2 px-4 border-b"><a href="https://handbook.opendata.swiss/de/content/nutzen/api-nutzen.html" class="text-blue-500">https://handbook.opendata.swiss/de/content/nutzen/api-nutzen.html</a></td>
                    <td class="py-2 px-4 border-b">Switzerland Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Taiwan</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.tw/" class="text-blue-500">https://data.gov.tw/</a></td>
                    <td class="py-2 px-4 border-b">Taiwan Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Thailand</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.go.th/" class="text-blue-500">https://data.go.th/</a></td>
                    <td class="py-2 px-4 border-b">Thailand Government Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, UK</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.gov.uk/" class="text-blue-500">https://data.gov.uk/</a></td>
                    <td class="py-2 px-4 border-b">UK Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, USA</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.gov/" class="text-blue-500">https://www.data.gov/</a></td>
                    <td class="py-2 px-4 border-b">United States Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, Victoria State Government</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.data.vic.gov.au/" class="text-blue-500">https://www.data.vic.gov.au/</a></td>
                    <td class="py-2 px-4 border-b">Victoria State Government Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Government, West Australia</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.wa.gov.au/" class="text-blue-500">https://data.wa.gov.au/</a></td>
                    <td class="py-2 px-4 border-b">West Australia Open Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Library</td>
                    <td class="py-2 px-4 border-b"><a href="https://openlibrary.org/developers/api" class="text-blue-500">https://openlibrary.org/developers/api</a></td>
                    <td class="py-2 px-4 border-b">Books, book covers and related data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Notify</td>
                    <td class="py-2 px-4 border-b"><a href="http://open-notify.org/Open-Notify-API/" class="text-blue-500">http://open-notify.org/Open-Notify-API/</a></td>
                    <td class="py-2 px-4 border-b">ISS astronauts, current location, etc</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Page Rank</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.domcop.com/openpagerank/" class="text-blue-500">https://www.domcop.com/openpagerank/</a></td>
                    <td class="py-2 px-4 border-b">API for calculating and comparing metrics of different websites using Page Rank algorithm</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Science Framework</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.osf.io" class="text-blue-500">https://developer.osf.io</a></td>
                    <td class="py-2 px-4 border-b">Repository and archive for study designs, research materials, data, manuscripts, etc</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Skills</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview" class="text-blue-500">https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview</a></td>
                    <td class="py-2 px-4 border-b">Job titles, skills and related jobs data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open Trivia</td>
                    <td class="py-2 px-4 border-b"><a href="https://opentdb.com/api_config.php" class="text-blue-500">https://opentdb.com/api_config.php</a></td>
                    <td class="py-2 px-4 border-b">Trivia Questions</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Open-Meteo</td>
                    <td class="py-2 px-4 border-b"><a href="https://open-meteo.com/" class="text-blue-500">https://open-meteo.com/</a></td>
                    <td class="py-2 px-4 border-b">Global weather forecast API for non-commercial use</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenAPIHub</td>
                    <td class="py-2 px-4 border-b"><a href="https://hub.openapihub.com/" class="text-blue-500">https://hub.openapihub.com/</a></td>
                    <td class="py-2 px-4 border-b">The All-in-one API Platform</td>
                    <td class="py-2 px-4 border-b">`X-Mashape-Key`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenAQ</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.openaq.org/" class="text-blue-500">https://docs.openaq.org/</a></td>
                    <td class="py-2 px-4 border-b">Open air quality data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenCage</td>
                    <td class="py-2 px-4 border-b"><a href="https://opencagedata.com" class="text-blue-500">https://opencagedata.com</a></td>
                    <td class="py-2 px-4 border-b">Forward and reverse geocoding using open data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenCorporates</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.opencorporates.com/documentation/API-Reference" class="text-blue-500">http://api.opencorporates.com/documentation/API-Reference</a></td>
                    <td class="py-2 px-4 border-b">Data on corporate entities and directors in many countries</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenFIGI</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.openfigi.com/api" class="text-blue-500">https://www.openfigi.com/api</a></td>
                    <td class="py-2 px-4 border-b">Equity, index, futures, options symbology from Bloomberg LP</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenGraphr</td>
                    <td class="py-2 px-4 border-b"><a href="https://opengraphr.com/docs/1.0/overview" class="text-blue-500">https://opengraphr.com/docs/1.0/overview</a></td>
                    <td class="py-2 px-4 border-b">Really simple API to retrieve Open Graph data from an URL</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenLigaDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.openligadb.de" class="text-blue-500">https://www.openligadb.de</a></td>
                    <td class="py-2 px-4 border-b">Crowd sourced sports league results</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenSanctions</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.opensanctions.org/docs/api/" class="text-blue-500">https://www.opensanctions.org/docs/api/</a></td>
                    <td class="py-2 px-4 border-b">Data on international sanctions, crime and politically exposed persons</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenSky Network</td>
                    <td class="py-2 px-4 border-b"><a href="https://opensky-network.org/apidoc/index.html" class="text-blue-500">https://opensky-network.org/apidoc/index.html</a></td>
                    <td class="py-2 px-4 border-b">Free real-time ADS-B aviation data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenUV</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.openuv.io" class="text-blue-500">https://www.openuv.io</a></td>
                    <td class="py-2 px-4 border-b">Real-time UV Index Forecast</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OpenVisionAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://openvisionapi.com" class="text-blue-500">https://openvisionapi.com</a></td>
                    <td class="py-2 px-4 border-b">Open source computer vision API based on open source models</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Openwhyd</td>
                    <td class="py-2 px-4 border-b"><a href="https://openwhyd.github.io/openwhyd/API" class="text-blue-500">https://openwhyd.github.io/openwhyd/API</a></td>
                    <td class="py-2 px-4 border-b">Download curated playlists of streaming tracks YouTube, SoundCloud, etc...</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Owen Wilson Wow</td>
                    <td class="py-2 px-4 border-b"><a href="https://owen-wilson-wow-api.herokuapp.com" class="text-blue-500">https://owen-wilson-wow-api.herokuapp.com</a></td>
                    <td class="py-2 px-4 border-b">API for actor Owen Wilson's "wow" exclamations in movies</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">OwlBot</td>
                    <td class="py-2 px-4 border-b"><a href="https://owlbot.info/" class="text-blue-500">https://owlbot.info/</a></td>
                    <td class="py-2 px-4 border-b">Definitions with example sentence and photo if available</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Oxford</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.oxforddictionaries.com/" class="text-blue-500">https://developer.oxforddictionaries.com/</a></td>
                    <td class="py-2 px-4 border-b">Dictionary Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PHP-Noise</td>
                    <td class="py-2 px-4 border-b"><a href="https://php-noise.com/" class="text-blue-500">https://php-noise.com/</a></td>
                    <td class="py-2 px-4 border-b">Noise Background Image Generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PM25.in</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.pm25.in/api_doc" class="text-blue-500">http://www.pm25.in/api_doc</a></td>
                    <td class="py-2 px-4 border-b">Air quality of China</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PRC Exam Schedule</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.whenisthenextboardexam.com/docs/" class="text-blue-500">https://api.whenisthenextboardexam.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Unofficial Philippine Professional Regulation Commission's examination schedule</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PUBG</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.pubg.com/" class="text-blue-500">https://developer.pubg.com/</a></td>
                    <td class="py-2 px-4 border-b">Access in-game PUBG data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PVWatts</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.nrel.gov/docs/solar/pvwatts/v6/" class="text-blue-500">https://developer.nrel.gov/docs/solar/pvwatts/v6/</a></td>
                    <td class="py-2 px-4 border-b">Energy production photovoltaic PV energy systems</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PageCDN</td>
                    <td class="py-2 px-4 border-b"><a href="https://pagecdn.com/docs/public-api" class="text-blue-500">https://pagecdn.com/docs/public-api</a></td>
                    <td class="py-2 px-4 border-b">Public API for javascript, css and font libraries on PageCDN</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PandaDoc</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.pandadoc.com" class="text-blue-500">https://developers.pandadoc.com</a></td>
                    <td class="py-2 px-4 border-b">DocGen and eSignatures API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PandaScore</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.pandascore.co/" class="text-blue-500">https://developers.pandascore.co/</a></td>
                    <td class="py-2 px-4 border-b">E-sports games and results</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pantry</td>
                    <td class="py-2 px-4 border-b"><a href="https://getpantry.cloud/" class="text-blue-500">https://getpantry.cloud/</a></td>
                    <td class="py-2 px-4 border-b">Free JSON storage for small projects</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Passwordinator</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/fawazsullia/password-generator/" class="text-blue-500">https://github.com/fawazsullia/password-generator/</a></td>
                    <td class="py-2 px-4 border-b">Generate random passwords of varying complexities</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pastebin</td>
                    <td class="py-2 px-4 border-b"><a href="https://pastebin.com/doc_api" class="text-blue-500">https://pastebin.com/doc_api</a></td>
                    <td class="py-2 px-4 border-b">Plain Text Storage</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Path of Exile</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.pathofexile.com/developer/docs" class="text-blue-500">https://www.pathofexile.com/developer/docs</a></td>
                    <td class="py-2 px-4 border-b">Path of Exile Game Information</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PeakMetrics</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/peakmetrics-peakmetrics-default/api/peakmetrics-news" class="text-blue-500">https://rapidapi.com/peakmetrics-peakmetrics-default/api/peakmetrics-news</a></td>
                    <td class="py-2 px-4 border-b">News articles and public datasets</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Penguin Publishing</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.penguinrandomhouse.biz/webservices/rest/" class="text-blue-500">http://www.penguinrandomhouse.biz/webservices/rest/</a></td>
                    <td class="py-2 px-4 border-b">Books, book covers and related data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Perspective</td>
                    <td class="py-2 px-4 border-b"><a href="https://perspectiveapi.com" class="text-blue-500">https://perspectiveapi.com</a></td>
                    <td class="py-2 px-4 border-b">NLP API to return probability that if text is toxic, obscene, insulting or threatening</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pexels</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.pexels.com/api/" class="text-blue-500">https://www.pexels.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Free Stock Photos and Videos</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PhishStats</td>
                    <td class="py-2 px-4 border-b"><a href="https://phishstats.info/" class="text-blue-500">https://phishstats.info/</a></td>
                    <td class="py-2 px-4 border-b">Phishing database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Phisherman</td>
                    <td class="py-2 px-4 border-b"><a href="https://phisherman.gg/" class="text-blue-500">https://phisherman.gg/</a></td>
                    <td class="py-2 px-4 border-b">IP/domain/URL reputation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Phishin</td>
                    <td class="py-2 px-4 border-b"><a href="https://phish.in/api-docs" class="text-blue-500">https://phish.in/api-docs</a></td>
                    <td class="py-2 px-4 border-b">A web-based archive of legal live audio recordings of the improvisational rock band Phish</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Phone Specification</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/azharimm/phone-specs-api" class="text-blue-500">https://github.com/azharimm/phone-specs-api</a></td>
                    <td class="py-2 px-4 border-b">Rest Api for Phone specifications</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PhotoRoom</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.photoroom.com/api/" class="text-blue-500">https://www.photoroom.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Remove background from images</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pinata</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.pinata.cloud/" class="text-blue-500">https://docs.pinata.cloud/</a></td>
                    <td class="py-2 px-4 border-b">IPFS Pinning Services API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pinterest</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.pinterest.com/" class="text-blue-500">https://developers.pinterest.com/</a></td>
                    <td class="py-2 px-4 border-b">The world's catalog of ideas</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pixabay</td>
                    <td class="py-2 px-4 border-b"><a href="https://pixabay.com/sk/service/about/api/" class="text-blue-500">https://pixabay.com/sk/service/about/api/</a></td>
                    <td class="py-2 px-4 border-b">Photography</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pixel Encounter</td>
                    <td class="py-2 px-4 border-b"><a href="https://pixelencounter.com/api" class="text-blue-500">https://pixelencounter.com/api</a></td>
                    <td class="py-2 px-4 border-b">SVG Icon Generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pixela</td>
                    <td class="py-2 px-4 border-b"><a href="https://pixe.la" class="text-blue-500">https://pixe.la</a></td>
                    <td class="py-2 px-4 border-b">API for recording and tracking habits or effort, routines</td>
                    <td class="py-2 px-4 border-b">`X-Mashape-Key`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PlaceBear</td>
                    <td class="py-2 px-4 border-b"><a href="https://placebear.com/" class="text-blue-500">https://placebear.com/</a></td>
                    <td class="py-2 px-4 border-b">Placeholder bear pictures</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PlaceDog</td>
                    <td class="py-2 px-4 border-b"><a href="https://place.dog" class="text-blue-500">https://place.dog</a></td>
                    <td class="py-2 px-4 border-b">Placeholder Dog pictures</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PlaceKeanu</td>
                    <td class="py-2 px-4 border-b"><a href="https://placekeanu.com/" class="text-blue-500">https://placekeanu.com/</a></td>
                    <td class="py-2 px-4 border-b">Resizable Keanu Reeves placeholder images with grayscale and young Keanu options</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PlaceKitten</td>
                    <td class="py-2 px-4 border-b"><a href="https://placekitten.com/" class="text-blue-500">https://placekitten.com/</a></td>
                    <td class="py-2 px-4 border-b">Placeholder Kitten pictures</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Plaid</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.plaid.com/docs" class="text-blue-500">https://www.plaid.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Connect with user's bank accounts and access transaction data	</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">YES</td>
                    <td class="py-2 px-4 border-b"></td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Plaid</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.plaid.com/docs" class="text-blue-500">https://www.plaid.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Connect with user's bank accounts and access transaction data	</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PlayerDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://playerdb.co/" class="text-blue-500">https://playerdb.co/</a></td>
                    <td class="py-2 px-4 border-b">Query Minecraft, Steam and XBox Accounts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pocket</td>
                    <td class="py-2 px-4 border-b"><a href="https://getpocket.com/developer/" class="text-blue-500">https://getpocket.com/developer/</a></td>
                    <td class="py-2 px-4 border-b">Bookmarking service</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Podio</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.podio.com" class="text-blue-500">https://developers.podio.com</a></td>
                    <td class="py-2 px-4 border-b">File sharing and productivity</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PoetryDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/thundercomb/poetrydb#readme" class="text-blue-500">https://github.com/thundercomb/poetrydb#readme</a></td>
                    <td class="py-2 px-4 border-b">Enables you to get instant data from our vast poetry collection</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PokéAPI GraphQL</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/mazipan/graphql-pokeapi" class="text-blue-500">https://github.com/mazipan/graphql-pokeapi</a></td>
                    <td class="py-2 px-4 border-b">The Unofficial GraphQL for PokeAPI</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pokéapi</td>
                    <td class="py-2 px-4 border-b"><a href="https://pokeapi.co" class="text-blue-500">https://pokeapi.co</a></td>
                    <td class="py-2 px-4 border-b">Pokémon Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pokémon TCG</td>
                    <td class="py-2 px-4 border-b"><a href="https://pokemontcg.io" class="text-blue-500">https://pokemontcg.io</a></td>
                    <td class="py-2 px-4 border-b">Pokémon TCG Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Poloniex</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.poloniex.com" class="text-blue-500">https://docs.poloniex.com</a></td>
                    <td class="py-2 px-4 border-b">US based digital asset exchange</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Polygon</td>
                    <td class="py-2 px-4 border-b"><a href="https://polygon.io/" class="text-blue-500">https://polygon.io/</a></td>
                    <td class="py-2 px-4 border-b">Historical stock market data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Portfolio Optimizer</td>
                    <td class="py-2 px-4 border-b"><a href="https://portfoliooptimizer.io/" class="text-blue-500">https://portfoliooptimizer.io/</a></td>
                    <td class="py-2 px-4 border-b">Portfolio analysis and optimization</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PostNord</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.postnord.com/api" class="text-blue-500">https://developer.postnord.com/api</a></td>
                    <td class="py-2 px-4 border-b">Provides information about parcels in transport for Sweden and Denmark</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PostalPinCode</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.postalpincode.in/Api-Details" class="text-blue-500">http://www.postalpincode.in/Api-Details</a></td>
                    <td class="py-2 px-4 border-b">API for getting Pincode details in India</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Postali</td>
                    <td class="py-2 px-4 border-b"><a href="https://postali.app/api" class="text-blue-500">https://postali.app/api</a></td>
                    <td class="py-2 px-4 border-b">Mexico Zip Codes API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Postcodes.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://postcodes.io" class="text-blue-500">https://postcodes.io</a></td>
                    <td class="py-2 px-4 border-b">Postcode lookup & Geolocation for the UK</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Postman</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a" class="text-blue-500">https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a</a></td>
                    <td class="py-2 px-4 border-b">Tool for testing APIs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Postman Echo</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.postman-echo.com" class="text-blue-500">https://www.postman-echo.com</a></td>
                    <td class="py-2 px-4 border-b">Test api server to receive and return value from HTTP method</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Postmon</td>
                    <td class="py-2 px-4 border-b"><a href="http://postmon.com.br" class="text-blue-500">http://postmon.com.br</a></td>
                    <td class="py-2 px-4 border-b">An API to query Brazilian ZIP codes and orders easily, quickly and free</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Premier League Standings</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/heisenbug/api/premier-league-live-scores/" class="text-blue-500">https://rapidapi.com/heisenbug/api/premier-league-live-scores/</a></td>
                    <td class="py-2 px-4 border-b">All Current Premier League Standings and Statistics</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PrexView</td>
                    <td class="py-2 px-4 border-b"><a href="https://prexview.com" class="text-blue-500">https://prexview.com</a></td>
                    <td class="py-2 px-4 border-b">Data from XML or JSON to PDF, HTML or Image</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Privacy.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://privacy.com/developer/docs" class="text-blue-500">https://privacy.com/developer/docs</a></td>
                    <td class="py-2 px-4 border-b">Generate merchant-specific and one-time use credit card numbers that link back to your bank</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Product Hunt</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.producthunt.com/v2/docs" class="text-blue-500">https://api.producthunt.com/v2/docs</a></td>
                    <td class="py-2 px-4 border-b">The best new products in tech</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Programming Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/skolakoda/programming-quotes-api" class="text-blue-500">https://github.com/skolakoda/programming-quotes-api</a></td>
                    <td class="py-2 px-4 border-b">Programming Quotes API for open source projects</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ProxyCrawl</td>
                    <td class="py-2 px-4 border-b"><a href="https://proxycrawl.com" class="text-blue-500">https://proxycrawl.com</a></td>
                    <td class="py-2 px-4 border-b">Scraping and crawling anticaptcha service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ProxyKingdom</td>
                    <td class="py-2 px-4 border-b"><a href="https://proxykingdom.com" class="text-blue-500">https://proxykingdom.com</a></td>
                    <td class="py-2 px-4 border-b">Rotating Proxy API that produces a working proxy on every request</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Psychonauts</td>
                    <td class="py-2 px-4 border-b"><a href="https://psychonauts-api.netlify.app/" class="text-blue-500">https://psychonauts-api.netlify.app/</a></td>
                    <td class="py-2 px-4 border-b">Psychonauts World Characters Information and PSI Powers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pulsedive</td>
                    <td class="py-2 px-4 border-b"><a href="https://pulsedive.com/api/" class="text-blue-500">https://pulsedive.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Scan, search and collect threat intelligence data in real-time</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PunkAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://punkapi.com/" class="text-blue-500">https://punkapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Brewdog Beer Recipes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">PurgoMalum</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.purgomalum.com" class="text-blue-500">http://www.purgomalum.com</a></td>
                    <td class="py-2 px-4 border-b">Content validator against profanity & obscenity</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Purple Air</td>
                    <td class="py-2 px-4 border-b"><a href="https://www2.purpleair.com/" class="text-blue-500">https://www2.purpleair.com/</a></td>
                    <td class="py-2 px-4 border-b">Real Time Air Quality Monitoring</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Pusher Beams</td>
                    <td class="py-2 px-4 border-b"><a href="https://pusher.com/beams" class="text-blue-500">https://pusher.com/beams</a></td>
                    <td class="py-2 px-4 border-b">Push notifications for Android & iOS</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Puyo Nexus</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/deltadex7/puyodb-api-deno" class="text-blue-500">https://github.com/deltadex7/puyodb-api-deno</a></td>
                    <td class="py-2 px-4 border-b">Puyo Puyo information from Puyo Nexus Wiki</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">QR code</td>
                    <td class="py-2 px-4 border-b"><a href="http://goqr.me/api/" class="text-blue-500">http://goqr.me/api/</a></td>
                    <td class="py-2 px-4 border-b">Generate and decode / read QR code graphics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">QR code</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.qrtag.net/api/" class="text-blue-500">https://www.qrtag.net/api/</a></td>
                    <td class="py-2 px-4 border-b">Create an easy to read QR code and URL shortener</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">QWeather</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev.qweather.com/en/" class="text-blue-500">https://dev.qweather.com/en/</a></td>
                    <td class="py-2 px-4 border-b">Location-based weather data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Qrcode Monkey</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.qrcode-monkey.com/qr-code-api-with-logo/" class="text-blue-500">https://www.qrcode-monkey.com/qr-code-api-with-logo/</a></td>
                    <td class="py-2 px-4 border-b">Integrate custom and unique looking QR codes into your system or workflow</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quarantine</td>
                    <td class="py-2 px-4 border-b"><a href="https://quarantine.country/coronavirus/api/" class="text-blue-500">https://quarantine.country/coronavirus/api/</a></td>
                    <td class="py-2 px-4 border-b">Coronavirus API with free COVID-19 live updates</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Queimadas INPE</td>
                    <td class="py-2 px-4 border-b"><a href="https://queimadas.dgi.inpe.br/queimadas/dados-abertos/" class="text-blue-500">https://queimadas.dgi.inpe.br/queimadas/dados-abertos/</a></td>
                    <td class="py-2 px-4 border-b">Access to heat focus data probable wildfire</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">QuickChart</td>
                    <td class="py-2 px-4 border-b"><a href="https://quickchart.io/" class="text-blue-500">https://quickchart.io/</a></td>
                    <td class="py-2 px-4 border-b">Generate chart and graph images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">QuickMocker</td>
                    <td class="py-2 px-4 border-b"><a href="https://quickmocker.com" class="text-blue-500">https://quickmocker.com</a></td>
                    <td class="py-2 px-4 border-b">API mocking tool to generate contextual, fake or random data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quip</td>
                    <td class="py-2 px-4 border-b"><a href="https://quip.com/dev/automation/documentation" class="text-blue-500">https://quip.com/dev/automation/documentation</a></td>
                    <td class="py-2 px-4 border-b">File Sharing and Storage for groups</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quotable Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/lukePeavey/quotable" class="text-blue-500">https://github.com/lukePeavey/quotable</a></td>
                    <td class="py-2 px-4 border-b">Quotable is a free, open source quotations API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quote Garden</td>
                    <td class="py-2 px-4 border-b"><a href="https://pprathameshmore.github.io/QuoteGarden/" class="text-blue-500">https://pprathameshmore.github.io/QuoteGarden/</a></td>
                    <td class="py-2 px-4 border-b">REST API for more than 5000 famous quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quotes on Design</td>
                    <td class="py-2 px-4 border-b"><a href="https://quotesondesign.com/api/" class="text-blue-500">https://quotesondesign.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Inspirational Quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quran</td>
                    <td class="py-2 px-4 border-b"><a href="https://quran.api-docs.io/" class="text-blue-500">https://quran.api-docs.io/</a></td>
                    <td class="py-2 px-4 border-b">RESTful Quran API with multiple languages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quran Cloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://alquran.cloud/api" class="text-blue-500">https://alquran.cloud/api</a></td>
                    <td class="py-2 px-4 border-b">A RESTful Quran API to retrieve an Ayah, Surah, Juz or the entire Holy Quran</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Quran-api</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/fawazahmed0/quran-api#readme" class="text-blue-500">https://github.com/fawazahmed0/quran-api#readme</a></td>
                    <td class="py-2 px-4 border-b">Free Quran API Service with 90+ different languages and 400+ translations</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RAWG.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://rawg.io/apidocs" class="text-blue-500">https://rawg.io/apidocs</a></td>
                    <td class="py-2 px-4 border-b">500,000+ games for 50 platforms including mobiles</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">REFUGE Restrooms</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.refugerestrooms.org/api/docs/#!/restrooms" class="text-blue-500">https://www.refugerestrooms.org/api/docs/#!/restrooms</a></td>
                    <td class="py-2 px-4 border-b">Provides safe restroom access for transgender, intersex and gender nonconforming individuals</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">REST Countries</td>
                    <td class="py-2 px-4 border-b"><a href="https://restcountries.com" class="text-blue-500">https://restcountries.com</a></td>
                    <td class="py-2 px-4 border-b">Get information about countries via a RESTful API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RPS 101</td>
                    <td class="py-2 px-4 border-b"><a href="https://rps101.pythonanywhere.com/api" class="text-blue-500">https://rps101.pythonanywhere.com/api</a></td>
                    <td class="py-2 px-4 border-b">Rock, Paper, Scissors with 101 objects</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RSS feed to JSON</td>
                    <td class="py-2 px-4 border-b"><a href="https://rss-to-json-serverless-api.vercel.app" class="text-blue-500">https://rss-to-json-serverless-api.vercel.app</a></td>
                    <td class="py-2 px-4 border-b">Returns RSS feed in JSON format using feed URL</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Radio Browser</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.radio-browser.info/" class="text-blue-500">https://api.radio-browser.info/</a></td>
                    <td class="py-2 px-4 border-b">List of internet radio stations</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Raider</td>
                    <td class="py-2 px-4 border-b"><a href="https://raider.io/api" class="text-blue-500">https://raider.io/api</a></td>
                    <td class="py-2 px-4 border-b">Provides detailed character and guild rankings for Raiding and Mythic+ content in World of Warcraft</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Railway Transport for France</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.digital.sncf.com/startup/api" class="text-blue-500">https://www.digital.sncf.com/startup/api</a></td>
                    <td class="py-2 px-4 border-b">SNCF public API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RainViewer</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.rainviewer.com/api.html" class="text-blue-500">https://www.rainviewer.com/api.html</a></td>
                    <td class="py-2 px-4 border-b">Radar data collected from different websites across the Internet</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Random Stuff</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-docs.pgamerx.com/" class="text-blue-500">https://api-docs.pgamerx.com/</a></td>
                    <td class="py-2 px-4 border-b">Can be used to get AI Response, jokes, memes, and much more at lightning-fast speed</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Random Useless Facts</td>
                    <td class="py-2 px-4 border-b"><a href="https://uselessfacts.jsph.pl/" class="text-blue-500">https://uselessfacts.jsph.pl/</a></td>
                    <td class="py-2 px-4 border-b">Get useless, but true facts</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RandomDog</td>
                    <td class="py-2 px-4 border-b"><a href="https://random.dog/woof.json" class="text-blue-500">https://random.dog/woof.json</a></td>
                    <td class="py-2 px-4 border-b">Random pictures of dogs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RandomDuck</td>
                    <td class="py-2 px-4 border-b"><a href="https://random-d.uk/api" class="text-blue-500">https://random-d.uk/api</a></td>
                    <td class="py-2 px-4 border-b">Random pictures of ducks</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RandomFox</td>
                    <td class="py-2 px-4 border-b"><a href="https://randomfox.ca/floof/" class="text-blue-500">https://randomfox.ca/floof/</a></td>
                    <td class="py-2 px-4 border-b">Random pictures of foxes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RandomUser</td>
                    <td class="py-2 px-4 border-b"><a href="https://randomuser.me" class="text-blue-500">https://randomuser.me</a></td>
                    <td class="py-2 px-4 border-b">Generates and list user data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Randommer</td>
                    <td class="py-2 px-4 border-b"><a href="https://randommer.io/randommer-api" class="text-blue-500">https://randommer.io/randommer-api</a></td>
                    <td class="py-2 px-4 border-b">Random data generator</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Rappi</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev-portal.rappi.com/" class="text-blue-500">https://dev-portal.rappi.com/</a></td>
                    <td class="py-2 px-4 border-b">Manage orders from Rappi's app</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Razorpay IFSC</td>
                    <td class="py-2 px-4 border-b"><a href="https://razorpay.com/docs/" class="text-blue-500">https://razorpay.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Indian Financial Systems Code Bank Branch Codes</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ReSmush.it</td>
                    <td class="py-2 px-4 border-b"><a href="https://resmush.it/api" class="text-blue-500">https://resmush.it/api</a></td>
                    <td class="py-2 px-4 border-b">Photo optimization</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Readme typing SVG</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/DenverCoder1/readme-typing-svg" class="text-blue-500">https://github.com/DenverCoder1/readme-typing-svg</a></td>
                    <td class="py-2 px-4 border-b">Customizable typing and deleting text SVG</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Real Time Finance</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Real-time-finance/finance-websocket-API/" class="text-blue-500">https://github.com/Real-time-finance/finance-websocket-API/</a></td>
                    <td class="py-2 px-4 border-b">Websocket API to access realtime stock data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Rebrandly</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.rebrandly.com/v1/docs" class="text-blue-500">https://developers.rebrandly.com/v1/docs</a></td>
                    <td class="py-2 px-4 border-b">Custom URL shortener for sharing branded links</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Redash</td>
                    <td class="py-2 px-4 border-b"><a href="https://redash.io/help/user-guide/integrations-and-api/api" class="text-blue-500">https://redash.io/help/user-guide/integrations-and-api/api</a></td>
                    <td class="py-2 px-4 border-b">Access your queries and dashboards on Redash</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Reddit</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.reddit.com/dev/api" class="text-blue-500">https://www.reddit.com/dev/api</a></td>
                    <td class="py-2 px-4 border-b">Homepage of the internet</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Reed</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.reed.co.uk/developers" class="text-blue-500">https://www.reed.co.uk/developers</a></td>
                    <td class="py-2 px-4 border-b">Job board aggregator</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Rejax</td>
                    <td class="py-2 px-4 border-b"><a href="https://rejax.io/" class="text-blue-500">https://rejax.io/</a></td>
                    <td class="py-2 px-4 border-b">Reverse AJAX service to notify clients</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Remote Calc</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/elizabethadegbaju/remotecalc" class="text-blue-500">https://github.com/elizabethadegbaju/remotecalc</a></td>
                    <td class="py-2 px-4 border-b">Decodes base64 encoding and parses it to return a solution to the calculation in JSON</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Remove.bg</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.remove.bg/api" class="text-blue-500">https://www.remove.bg/api</a></td>
                    <td class="py-2 px-4 border-b">Image Background removal</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Represent by Open North</td>
                    <td class="py-2 px-4 border-b"><a href="https://represent.opennorth.ca/" class="text-blue-500">https://represent.opennorth.ca/</a></td>
                    <td class="py-2 px-4 border-b">Find Canadian Government Representatives</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ReqRes</td>
                    <td class="py-2 px-4 border-b"><a href="https://reqres.in/ " class="text-blue-500">https://reqres.in/ </a></td>
                    <td class="py-2 px-4 border-b">A hosted REST-API ready to respond to your AJAX requests</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RescueGroups</td>
                    <td class="py-2 px-4 border-b"><a href="https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home" class="text-blue-500">https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home</a></td>
                    <td class="py-2 px-4 border-b">Adoption</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Restpack</td>
                    <td class="py-2 px-4 border-b"><a href="https://restpack.io/" class="text-blue-500">https://restpack.io/</a></td>
                    <td class="py-2 px-4 border-b">Provides screenshot, HTML to PDF and content extraction APIs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Revolt</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.revolt.chat/api/" class="text-blue-500">https://developers.revolt.chat/api/</a></td>
                    <td class="py-2 px-4 border-b">Revolt open source Discord alternative</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Rick and Morty</td>
                    <td class="py-2 px-4 border-b"><a href="https://rickandmortyapi.com" class="text-blue-500">https://rickandmortyapi.com</a></td>
                    <td class="py-2 px-4 border-b">All the Rick and Morty information, including images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Rig Veda</td>
                    <td class="py-2 px-4 border-b"><a href="https://aninditabasu.github.io/indica/html/rv.html" class="text-blue-500">https://aninditabasu.github.io/indica/html/rv.html</a></td>
                    <td class="py-2 px-4 border-b">Gods and poets, their categories, and the verse meters, with the mandal and sukta number</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Rijksmuseum</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.rijksmuseum.nl/object-metadata/api/" class="text-blue-500">https://data.rijksmuseum.nl/object-metadata/api/</a></td>
                    <td class="py-2 px-4 border-b">RijksMuseum Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Riot Games</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.riotgames.com/" class="text-blue-500">https://developer.riotgames.com/</a></td>
                    <td class="py-2 px-4 border-b">League of Legends Game Information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RoadGoat Cities</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.roadgoat.com/business/cities-api" class="text-blue-500">https://www.roadgoat.com/business/cities-api</a></td>
                    <td class="py-2 px-4 border-b">Cities content & photos API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RoboHash</td>
                    <td class="py-2 px-4 border-b"><a href="https://robohash.org/" class="text-blue-500">https://robohash.org/</a></td>
                    <td class="py-2 px-4 border-b">Generate random robot/alien avatars</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Roboflow Universe</td>
                    <td class="py-2 px-4 border-b"><a href="https://universe.roboflow.com" class="text-blue-500">https://universe.roboflow.com</a></td>
                    <td class="py-2 px-4 border-b">Pre-trained computer vision models</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ron Swanson Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api" class="text-blue-500">https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api</a></td>
                    <td class="py-2 px-4 border-b">Television</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">RuneScape</td>
                    <td class="py-2 px-4 border-b"><a href="https://runescape.wiki/w/Application_programming_interface" class="text-blue-500">https://runescape.wiki/w/Application_programming_interface</a></td>
                    <td class="py-2 px-4 border-b">RuneScape and OSRS RPGs information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Russian Calendar</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/egno/work-calendar" class="text-blue-500">https://github.com/egno/work-calendar</a></td>
                    <td class="py-2 px-4 border-b">Check if a date is a Russian holiday or not</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Rustybeer</td>
                    <td class="py-2 px-4 border-b"><a href="https://rustybeer.herokuapp.com/" class="text-blue-500">https://rustybeer.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Beer brewing tools</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SAWO Labs</td>
                    <td class="py-2 px-4 border-b"><a href="https://sawolabs.com" class="text-blue-500">https://sawolabs.com</a></td>
                    <td class="py-2 px-4 border-b">Simplify login and improve user experience by integrating passwordless authentication in your app</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SHARE</td>
                    <td class="py-2 px-4 border-b"><a href="https://share.osf.io/api/v2/" class="text-blue-500">https://share.osf.io/api/v2/</a></td>
                    <td class="py-2 px-4 border-b">A free, open, dataset about research and scholarly activities</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SHOUTCLOUD</td>
                    <td class="py-2 px-4 border-b"><a href="http://shoutcloud.io/" class="text-blue-500">http://shoutcloud.io/</a></td>
                    <td class="py-2 px-4 border-b">ALL-CAPS AS A SERVICE</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SLF</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/slftool/slftool.github.io/blob/master/API.md" class="text-blue-500">https://github.com/slftool/slftool.github.io/blob/master/API.md</a></td>
                    <td class="py-2 px-4 border-b">German city, country, river, database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">STAPI</td>
                    <td class="py-2 px-4 border-b"><a href="http://stapi.co" class="text-blue-500">http://stapi.co</a></td>
                    <td class="py-2 px-4 border-b">Information on all things Star Trek</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SWAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://swapi.dev/" class="text-blue-500">https://swapi.dev/</a></td>
                    <td class="py-2 px-4 border-b">All the Star Wars data you've ever wanted</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SWAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.swapi.tech" class="text-blue-500">https://www.swapi.tech</a></td>
                    <td class="py-2 px-4 border-b">All things Star Wars</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SWAPI GraphQL</td>
                    <td class="py-2 px-4 border-b"><a href="https://graphql.org/swapi-graphql" class="text-blue-500">https://graphql.org/swapi-graphql</a></td>
                    <td class="py-2 px-4 border-b">Star Wars GraphQL API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sabre for Developers</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.sabre.com/guides/travel-agency/quickstart/getting-started-in-travel" class="text-blue-500">https://developer.sabre.com/guides/travel-agency/quickstart/getting-started-in-travel</a></td>
                    <td class="py-2 px-4 border-b">Travel Search - Limited usage</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Saidit</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.saidit.net/dev/api" class="text-blue-500">https://www.saidit.net/dev/api</a></td>
                    <td class="py-2 px-4 border-b">Open Source Reddit Clone</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sakura CardCaptor</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/JessVel/sakura-card-captor-api" class="text-blue-500">https://github.com/JessVel/sakura-card-captor-api</a></td>
                    <td class="py-2 px-4 border-b">Sakura CardCaptor Cards Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SavePage.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.savepage.io" class="text-blue-500">https://www.savepage.io</a></td>
                    <td class="py-2 px-4 border-b">A free, RESTful API used to screenshot any desktop, or mobile website</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Scanii</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.scanii.com/" class="text-blue-500">https://docs.scanii.com/</a></td>
                    <td class="py-2 px-4 border-b">Simple REST API that can scan submitted documents/files for the presence of threats</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Schiphol Airport</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.schiphol.nl/" class="text-blue-500">https://developer.schiphol.nl/</a></td>
                    <td class="py-2 px-4 border-b">Schiphol</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Scoop.it</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.scoop.it/dev" class="text-blue-500">http://www.scoop.it/dev</a></td>
                    <td class="py-2 px-4 border-b">Content Curation Service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ScrapeNinja</td>
                    <td class="py-2 px-4 border-b"><a href="https://scrapeninja.net" class="text-blue-500">https://scrapeninja.net</a></td>
                    <td class="py-2 px-4 border-b">Scraping API with Chrome fingerprint and residential proxies</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ScraperApi</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.scraperapi.com" class="text-blue-500">https://www.scraperapi.com</a></td>
                    <td class="py-2 px-4 border-b">Easily build scalable web scrapers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ScrapingAnt</td>
                    <td class="py-2 px-4 border-b"><a href="https://scrapingant.com" class="text-blue-500">https://scrapingant.com</a></td>
                    <td class="py-2 px-4 border-b">Headless Chrome scraping with a simple API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ScrapingDog</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.scrapingdog.com/" class="text-blue-500">https://www.scrapingdog.com/</a></td>
                    <td class="py-2 px-4 border-b">Proxy API for Web scraping</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ScreenshotAPI.net</td>
                    <td class="py-2 px-4 border-b"><a href="https://screenshotapi.net/" class="text-blue-500">https://screenshotapi.net/</a></td>
                    <td class="py-2 px-4 border-b">Create pixel-perfect website screenshots</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Scryfall</td>
                    <td class="py-2 px-4 border-b"><a href="https://scryfall.com/docs/api" class="text-blue-500">https://scryfall.com/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Magic: The Gathering database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SeatGeek</td>
                    <td class="py-2 px-4 border-b"><a href="https://platform.seatgeek.com/" class="text-blue-500">https://platform.seatgeek.com/</a></td>
                    <td class="py-2 px-4 border-b">Search events, venues and performers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SecurityTrails</td>
                    <td class="py-2 px-4 border-b"><a href="https://securitytrails.com/corp/apidocs" class="text-blue-500">https://securitytrails.com/corp/apidocs</a></td>
                    <td class="py-2 px-4 border-b">Domain and IP related information such as current and historical WHOIS and DNS records</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Semantria</td>
                    <td class="py-2 px-4 border-b"><a href="https://semantria.readme.io/docs" class="text-blue-500">https://semantria.readme.io/docs</a></td>
                    <td class="py-2 px-4 border-b">Text Analytics with sentiment analysis, categorization & named entity extraction</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sendgrid</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.sendgrid.com/api-reference/" class="text-blue-500">https://docs.sendgrid.com/api-reference/</a></td>
                    <td class="py-2 px-4 border-b">A cloud-based SMTP provider that allows you to send emails without having to maintain email servers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sendinblue</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.sendinblue.com/docs" class="text-blue-500">https://developers.sendinblue.com/docs</a></td>
                    <td class="py-2 px-4 border-b">A service that provides solutions relating to marketing and/or transactional email and/or SMS</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sentiment Analysis</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.meaningcloud.com/developer/sentiment-analysis" class="text-blue-500">https://www.meaningcloud.com/developer/sentiment-analysis</a></td>
                    <td class="py-2 px-4 border-b">Multilingual sentiment analysis of texts from different sources</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Serialif Color</td>
                    <td class="py-2 px-4 border-b"><a href="https://color.serialif.com/" class="text-blue-500">https://color.serialif.com/</a></td>
                    <td class="py-2 px-4 border-b">Color conversion, complementary, grayscale and contrasted text</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sheetsu</td>
                    <td class="py-2 px-4 border-b"><a href="https://sheetsu.com/" class="text-blue-500">https://sheetsu.com/</a></td>
                    <td class="py-2 px-4 border-b">Easy google sheets integration</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Shibe.Online</td>
                    <td class="py-2 px-4 border-b"><a href="http://shibe.online/" class="text-blue-500">http://shibe.online/</a></td>
                    <td class="py-2 px-4 border-b">Random pictures of Shiba Inu, cats or birds</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Shields</td>
                    <td class="py-2 px-4 border-b"><a href="https://shields.io/" class="text-blue-500">https://shields.io/</a></td>
                    <td class="py-2 px-4 border-b">Concise, consistent, and legible badges in SVG and raster format</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Shikimori</td>
                    <td class="py-2 px-4 border-b"><a href="https://shikimori.one/api/doc" class="text-blue-500">https://shikimori.one/api/doc</a></td>
                    <td class="py-2 px-4 border-b">Anime discovery, tracking, forum, rates</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Shodan</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.shodan.io/" class="text-blue-500">https://developer.shodan.io/</a></td>
                    <td class="py-2 px-4 border-b">Search engine for Internet connected devices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Shopee</td>
                    <td class="py-2 px-4 border-b"><a href="https://open.shopee.com/documents?version=1" class="text-blue-500">https://open.shopee.com/documents?version=1</a></td>
                    <td class="py-2 px-4 border-b">Shopee's official API for integration of various services from Shopee</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Short Link</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/FayasNoushad/Short-Link-API" class="text-blue-500">https://github.com/FayasNoushad/Short-Link-API</a></td>
                    <td class="py-2 px-4 border-b">Short URLs support so many domains</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Shrtcode</td>
                    <td class="py-2 px-4 border-b"><a href="https://shrtco.de/docs" class="text-blue-500">https://shrtco.de/docs</a></td>
                    <td class="py-2 px-4 border-b">URl Shortener with multiple Domains</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Shrtlnk</td>
                    <td class="py-2 px-4 border-b"><a href="https://shrtlnk.dev/developer" class="text-blue-500">https://shrtlnk.dev/developer</a></td>
                    <td class="py-2 px-4 border-b">Simple and efficient short link creation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Simkl</td>
                    <td class="py-2 px-4 border-b"><a href="https://simkl.docs.apiary.io" class="text-blue-500">https://simkl.docs.apiary.io</a></td>
                    <td class="py-2 px-4 border-b">Movie, TV and Anime data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sirv</td>
                    <td class="py-2 px-4 border-b"><a href="https://apidocs.sirv.com/" class="text-blue-500">https://apidocs.sirv.com/</a></td>
                    <td class="py-2 px-4 border-b">Image management solutions like optimization, manipulation, hosting</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SkyBiometry</td>
                    <td class="py-2 px-4 border-b"><a href="https://skybiometry.com/documentation/" class="text-blue-500">https://skybiometry.com/documentation/</a></td>
                    <td class="py-2 px-4 border-b">Face Detection, Face Recognition and Face Grouping</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Slack</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.slack.com/" class="text-blue-500">https://api.slack.com/</a></td>
                    <td class="py-2 px-4 border-b">Team Instant Messaging</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Smart Image Enhancement API</td>
                    <td class="py-2 px-4 border-b"><a href="https://apilayer.com/marketplace/image_enhancement-api" class="text-blue-500">https://apilayer.com/marketplace/image_enhancement-api</a></td>
                    <td class="py-2 px-4 border-b">Performs image upscaling by adding detail to images through multiple super-resolution algorithms</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SmartAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://smartapi.angelbroking.com/" class="text-blue-500">https://smartapi.angelbroking.com/</a></td>
                    <td class="py-2 px-4 border-b">Gain access to set of 'SmartAPI' and create end-to-end broking services</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Smartcar</td>
                    <td class="py-2 px-4 border-b"><a href="https://smartcar.com/docs/" class="text-blue-500">https://smartcar.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Lock and unlock vehicles and get data like odometer reading and location. Works on most new cars</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Smartsheet</td>
                    <td class="py-2 px-4 border-b"><a href="https://smartsheet.redoc.ly/" class="text-blue-500">https://smartsheet.redoc.ly/</a></td>
                    <td class="py-2 px-4 border-b">Allows you to programmatically access and Smartsheet data and account information</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Socrata</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev.socrata.com/" class="text-blue-500">https://dev.socrata.com/</a></td>
                    <td class="py-2 px-4 border-b">Access to Open Data from Governments, Non-profits and NGOs around the world</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Solana JSON RPC</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.solana.com/developing/clients/jsonrpc-api" class="text-blue-500">https://docs.solana.com/developing/clients/jsonrpc-api</a></td>
                    <td class="py-2 px-4 border-b">Provides various endpoints to interact with the Solana Blockchain</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sonar</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Cgboal/SonarSearch" class="text-blue-500">https://github.com/Cgboal/SonarSearch</a></td>
                    <td class="py-2 px-4 border-b">Project Sonar DNS Enumeration API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SonarQube</td>
                    <td class="py-2 px-4 border-b"><a href="https://sonarcloud.io/web_api" class="text-blue-500">https://sonarcloud.io/web_api</a></td>
                    <td class="py-2 px-4 border-b">SonarQube REST APIs to detect bugs, code smells & security vulnerabilities</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Songkick</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.songkick.com/developer/" class="text-blue-500">https://www.songkick.com/developer/</a></td>
                    <td class="py-2 px-4 border-b">Music Events</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Songlink / Odesli</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.notion.so/API-d0ebe08a5e304a55928405eb682f6741" class="text-blue-500">https://www.notion.so/API-d0ebe08a5e304a55928405eb682f6741</a></td>
                    <td class="py-2 px-4 border-b">Get all the services on which a song is available</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Songsterr</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.songsterr.com/a/wa/api/" class="text-blue-500">https://www.songsterr.com/a/wa/api/</a></td>
                    <td class="py-2 px-4 border-b">Provides guitar, bass and drums tabs and chords</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SoundCloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.soundcloud.com/docs/api/guide" class="text-blue-500">https://developers.soundcloud.com/docs/api/guide</a></td>
                    <td class="py-2 px-4 border-b">With SoundCloud API you can build applications that will give more power to control your content</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SpaceTradersAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://spacetraders.io?rel=pub-apis" class="text-blue-500">https://spacetraders.io?rel=pub-apis</a></td>
                    <td class="py-2 px-4 border-b">A playable inter-galactic space trading MMOAPI</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SpaceX</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.spacex.land/graphql/" class="text-blue-500">https://api.spacex.land/graphql/</a></td>
                    <td class="py-2 px-4 border-b">GraphQL, Company, Ships, launchpad and launch data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SpaceX</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/r-spacex/SpaceX-API" class="text-blue-500">https://github.com/r-spacex/SpaceX-API</a></td>
                    <td class="py-2 px-4 border-b">Company, vehicle, launchpad and launch data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Spaceflight News</td>
                    <td class="py-2 px-4 border-b"><a href="https://spaceflightnewsapi.net" class="text-blue-500">https://spaceflightnewsapi.net</a></td>
                    <td class="py-2 px-4 border-b">Spaceflight related news 🚀</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Spanish random names</td>
                    <td class="py-2 px-4 border-b"><a href="https://random-names-api.herokuapp.com/public" class="text-blue-500">https://random-names-api.herokuapp.com/public</a></td>
                    <td class="py-2 px-4 border-b">Generate spanish names with gender randomly</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Spanish random words</td>
                    <td class="py-2 px-4 border-b"><a href="https://palabras-aleatorias-public-api.herokuapp.com" class="text-blue-500">https://palabras-aleatorias-public-api.herokuapp.com</a></td>
                    <td class="py-2 px-4 border-b">Generate spanish words randomly</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Spoonacular</td>
                    <td class="py-2 px-4 border-b"><a href="https://spoonacular.com/food-api" class="text-blue-500">https://spoonacular.com/food-api</a></td>
                    <td class="py-2 px-4 border-b">Recipes, Food Products, and Meal Planning</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sport Places</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.decathlon.com/products/sport-places" class="text-blue-500">https://developers.decathlon.com/products/sport-places</a></td>
                    <td class="py-2 px-4 border-b">Crowd-source sports places around the world</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sport Vision</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.decathlon.com/products/sport-vision" class="text-blue-500">https://developers.decathlon.com/products/sport-vision</a></td>
                    <td class="py-2 px-4 border-b">Identify sport, brands and gear in an image. Also does image sports captioning</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sportmonks Cricket</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.sportmonks.com/cricket/" class="text-blue-500">https://docs.sportmonks.com/cricket/</a></td>
                    <td class="py-2 px-4 border-b">Live cricket score, player statistics and fantasy API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sportmonks Football</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.sportmonks.com/football/" class="text-blue-500">https://docs.sportmonks.com/football/</a></td>
                    <td class="py-2 px-4 border-b">Football score/schedule, news API, tv channels, stats, history, display standing e.g. epl, la liga</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sportmonks Football</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.sportmonks.com/football/" class="text-blue-500">https://docs.sportmonks.com/football/</a></td>
                    <td class="py-2 px-4 border-b">Football score/schedule, news api, tv channels, stats, history, display standing e.g. epl, la liga</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SpotSense</td>
                    <td class="py-2 px-4 border-b"><a href="https://spotsense.io/" class="text-blue-500">https://spotsense.io/</a></td>
                    <td class="py-2 px-4 border-b">Add location based interactions to your mobile app</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Spotify</td>
                    <td class="py-2 px-4 border-b"><a href="https://beta.developer.spotify.com/documentation/web-api/" class="text-blue-500">https://beta.developer.spotify.com/documentation/web-api/</a></td>
                    <td class="py-2 px-4 border-b">View Spotify music catalog, manage users' libraries, get recommendations and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Spyse</td>
                    <td class="py-2 px-4 border-b"><a href="https://spyse-dev.readme.io/reference/quick-start" class="text-blue-500">https://spyse-dev.readme.io/reference/quick-start</a></td>
                    <td class="py-2 px-4 border-b">Access data on all Internet assets and build powerful attack surface management applications</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Square</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.squareup.com/reference/square" class="text-blue-500">https://developer.squareup.com/reference/square</a></td>
                    <td class="py-2 px-4 border-b">Easy way to take payments, manage refunds, and help customers checkout online</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Squiggle</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.squiggle.com.au" class="text-blue-500">https://api.squiggle.com.au</a></td>
                    <td class="py-2 px-4 border-b">Fixtures, results and predictions for Australian Football League matches</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Srp Energy</td>
                    <td class="py-2 px-4 border-b"><a href="https://srpenergy-api-client-python.readthedocs.io/en/latest/api.html" class="text-blue-500">https://srpenergy-api-client-python.readthedocs.io/en/latest/api.html</a></td>
                    <td class="py-2 px-4 border-b">Hourly usage energy report for Srp customers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">StackExchange</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.stackexchange.com/" class="text-blue-500">https://api.stackexchange.com/</a></td>
                    <td class="py-2 px-4 border-b">Q&A forum for developers</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Statically</td>
                    <td class="py-2 px-4 border-b"><a href="https://statically.io/" class="text-blue-500">https://statically.io/</a></td>
                    <td class="py-2 px-4 border-b">A free CDN for developers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Steam</td>
                    <td class="py-2 px-4 border-b"><a href="https://steamapi.xpaw.me/" class="text-blue-500">https://steamapi.xpaw.me/</a></td>
                    <td class="py-2 px-4 border-b">Steam Web API documentation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Steam</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Revadike/InternalSteamWebAPI/wiki" class="text-blue-500">https://github.com/Revadike/InternalSteamWebAPI/wiki</a></td>
                    <td class="py-2 px-4 border-b">Internal Steam Web API documentation</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Steem</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.steem.io/" class="text-blue-500">https://developers.steem.io/</a></td>
                    <td class="py-2 px-4 border-b">Blockchain-based blogging and social media website</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Stoicism Quote</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/tlcheah2/stoic-quote-lambda-public-api" class="text-blue-500">https://github.com/tlcheah2/stoic-quote-lambda-public-api</a></td>
                    <td class="py-2 px-4 border-b">Quotes about Stoicism</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Storj</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.storj.io/dcs/" class="text-blue-500">https://docs.storj.io/dcs/</a></td>
                    <td class="py-2 px-4 border-b">Decentralized Open-Source Cloud Storage</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Storm Glass</td>
                    <td class="py-2 px-4 border-b"><a href="https://stormglass.io/" class="text-blue-500">https://stormglass.io/</a></td>
                    <td class="py-2 px-4 border-b">Global marine weather from multiple sources</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Stranger Things Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/shadowoff09/strangerthings-quotes" class="text-blue-500">https://github.com/shadowoff09/strangerthings-quotes</a></td>
                    <td class="py-2 px-4 border-b">Returns Stranger Things quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Strava</td>
                    <td class="py-2 px-4 border-b"><a href="https://strava.github.io/api/" class="text-blue-500">https://strava.github.io/api/</a></td>
                    <td class="py-2 px-4 border-b">Connect with athletes, activities and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Stream</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.stream.cz/graphiql" class="text-blue-500">https://api.stream.cz/graphiql</a></td>
                    <td class="py-2 px-4 border-b">Czech internet television, films, series and online videos for free</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Stromberg Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.stromberg-api.de/" class="text-blue-500">https://www.stromberg-api.de/</a></td>
                    <td class="py-2 px-4 border-b">Returns Stromberg quotes and more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Studio Ghibli</td>
                    <td class="py-2 px-4 border-b"><a href="https://ghibliapi.herokuapp.com" class="text-blue-500">https://ghibliapi.herokuapp.com</a></td>
                    <td class="py-2 px-4 border-b">Resources from Studio Ghibli films</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Stytch</td>
                    <td class="py-2 px-4 border-b"><a href="https://stytch.com/" class="text-blue-500">https://stytch.com/</a></td>
                    <td class="py-2 px-4 border-b">User infrastructure for modern applications</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Styvio</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.Styvio.com" class="text-blue-500">https://www.Styvio.com</a></td>
                    <td class="py-2 px-4 border-b">Realtime and historical stock data and current stock sentiment</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Sunrise and Sunset</td>
                    <td class="py-2 px-4 border-b"><a href="https://sunrise-sunset.org/api" class="text-blue-500">https://sunrise-sunset.org/api</a></td>
                    <td class="py-2 px-4 border-b">Sunset and sunrise times for a given latitude and longitude</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SuperHeroes</td>
                    <td class="py-2 px-4 border-b"><a href="https://superheroapi.com" class="text-blue-500">https://superheroapi.com</a></td>
                    <td class="py-2 px-4 border-b">All SuperHeroes and Villains data from all universes under a single API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Supportivekoala</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.supportivekoala.com/" class="text-blue-500">https://developers.supportivekoala.com/</a></td>
                    <td class="py-2 px-4 border-b">Autogenerate images with template</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SuredBits</td>
                    <td class="py-2 px-4 border-b"><a href="https://suredbits.com/api/" class="text-blue-500">https://suredbits.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Query sports data, including teams, players, games, scores and statistics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">SwiftKanban</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.digite.com/knowledge-base/swiftkanban/article/api-for-swift-kanban-web-services/#restapi" class="text-blue-500">https://www.digite.com/knowledge-base/swiftkanban/article/api-for-swift-kanban-web-services/#restapi</a></td>
                    <td class="py-2 px-4 border-b">Kanban software, Visualize Work, Increase Organizations Lead Time, Throughput & Productivity</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Synonyms</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.synonyms.com/synonyms_api.php" class="text-blue-500">https://www.synonyms.com/synonyms_api.php</a></td>
                    <td class="py-2 px-4 border-b">Synonyms, thesaurus and antonyms information for any given word</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Systembolaget</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-portal.systembolaget.se" class="text-blue-500">https://api-portal.systembolaget.se</a></td>
                    <td class="py-2 px-4 border-b">Govornment owned liqour store in Sweden</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TCGdex</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.tcgdex.net/docs" class="text-blue-500">https://www.tcgdex.net/docs</a></td>
                    <td class="py-2 px-4 border-b">Multi languages Pokémon TCG Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TETR.IO</td>
                    <td class="py-2 px-4 border-b"><a href="https://tetr.io/about/api/" class="text-blue-500">https://tetr.io/about/api/</a></td>
                    <td class="py-2 px-4 border-b">TETR.IO Tetra Channel API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TIPO</td>
                    <td class="py-2 px-4 border-b"><a href="https://tiponet.tipo.gov.tw/Gazette/OpenData/OD/OD05.aspx?QryDS=API00" class="text-blue-500">https://tiponet.tipo.gov.tw/Gazette/OpenData/OD/OD05.aspx?QryDS=API00</a></td>
                    <td class="py-2 px-4 border-b">Taiwan patent search system api</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TLE</td>
                    <td class="py-2 px-4 border-b"><a href="https://tle.ivanstanojevic.me/#/docs" class="text-blue-500">https://tle.ivanstanojevic.me/#/docs</a></td>
                    <td class="py-2 px-4 border-b">Satellite information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TMDb</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.themoviedb.org/documentation/api" class="text-blue-500">https://www.themoviedb.org/documentation/api</a></td>
                    <td class="py-2 px-4 border-b">Community-based movie data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TVDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://thetvdb.com/api-information" class="text-blue-500">https://thetvdb.com/api-information</a></td>
                    <td class="py-2 px-4 border-b">Television data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TVMaze</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.tvmaze.com/api" class="text-blue-500">http://www.tvmaze.com/api</a></td>
                    <td class="py-2 px-4 border-b">TV Show Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TacoFancy</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/evz/tacofancy-api" class="text-blue-500">https://github.com/evz/tacofancy-api</a></td>
                    <td class="py-2 px-4 border-b">Community-driven taco database</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TamTam</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev.tamtam.chat/" class="text-blue-500">https://dev.tamtam.chat/</a></td>
                    <td class="py-2 px-4 border-b">Bot API to interact with TamTam</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tankerkoenig</td>
                    <td class="py-2 px-4 border-b"><a href="https://creativecommons.tankerkoenig.de/swagger/" class="text-blue-500">https://creativecommons.tankerkoenig.de/swagger/</a></td>
                    <td class="py-2 px-4 border-b">German realtime gas/diesel prices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TasteDive</td>
                    <td class="py-2 px-4 border-b"><a href="https://tastedive.com/read/api" class="text-blue-500">https://tastedive.com/read/api</a></td>
                    <td class="py-2 px-4 border-b">Similar artist API also works for movies and TV shows</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tasty</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/apidojo/api/tasty/" class="text-blue-500">https://rapidapi.com/apidojo/api/tasty/</a></td>
                    <td class="py-2 px-4 border-b">API to query data about recipe, plan, ingredients</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tebex</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.tebex.io/plugin/" class="text-blue-500">https://docs.tebex.io/plugin/</a></td>
                    <td class="py-2 px-4 border-b">Tebex API for information about game purchases</td>
                    <td class="py-2 px-4 border-b">`X-Mashape-Key`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Technical Analysis</td>
                    <td class="py-2 px-4 border-b"><a href="https://technical-analysis-api.com" class="text-blue-500">https://technical-analysis-api.com</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency prices and technical analysis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Techy</td>
                    <td class="py-2 px-4 border-b"><a href="https://techy-api.vercel.app/" class="text-blue-500">https://techy-api.vercel.app/</a></td>
                    <td class="py-2 px-4 border-b">JSON and Plaintext API for tech-savvy sounding phrases</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Telegram Bot</td>
                    <td class="py-2 px-4 border-b"><a href="https://core.telegram.org/bots/api" class="text-blue-500">https://core.telegram.org/bots/api</a></td>
                    <td class="py-2 px-4 border-b">Simplified HTTP version of the MTProto API for bots</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Telegram MTProto</td>
                    <td class="py-2 px-4 border-b"><a href="https://core.telegram.org/api#getting-started" class="text-blue-500">https://core.telegram.org/api#getting-started</a></td>
                    <td class="py-2 px-4 border-b">Read and write Telegram data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Telegraph</td>
                    <td class="py-2 px-4 border-b"><a href="https://telegra.ph/api" class="text-blue-500">https://telegra.ph/api</a></td>
                    <td class="py-2 px-4 border-b">Create attractive blogs easily, to share</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Teleport</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.teleport.org/" class="text-blue-500">https://developers.teleport.org/</a></td>
                    <td class="py-2 px-4 border-b">Quality of Life Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Telize</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/fcambus/api/telize/" class="text-blue-500">https://rapidapi.com/fcambus/api/telize/</a></td>
                    <td class="py-2 px-4 border-b">Telize offers location information from any IP address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tenders in Hungary</td>
                    <td class="py-2 px-4 border-b"><a href="https://tenders.guru/hu/api" class="text-blue-500">https://tenders.guru/hu/api</a></td>
                    <td class="py-2 px-4 border-b">Get data for procurements in Hungary in JSON format</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tenders in Poland</td>
                    <td class="py-2 px-4 border-b"><a href="https://tenders.guru/pl/api" class="text-blue-500">https://tenders.guru/pl/api</a></td>
                    <td class="py-2 px-4 border-b">Get data for procurements in Poland in JSON format</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tenders in Romania</td>
                    <td class="py-2 px-4 border-b"><a href="https://tenders.guru/ro/api" class="text-blue-500">https://tenders.guru/ro/api</a></td>
                    <td class="py-2 px-4 border-b">Get data for procurements in Romania in JSON format</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tenders in Spain</td>
                    <td class="py-2 px-4 border-b"><a href="https://tenders.guru/es/api" class="text-blue-500">https://tenders.guru/es/api</a></td>
                    <td class="py-2 px-4 border-b">Get data for procurements in Spain in JSON format</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tenders in Ukraine</td>
                    <td class="py-2 px-4 border-b"><a href="https://tenders.guru/ua/api" class="text-blue-500">https://tenders.guru/ua/api</a></td>
                    <td class="py-2 px-4 border-b">Get data for procurements in Ukraine in JSON format</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Bible</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.api.bible" class="text-blue-500">https://docs.api.bible</a></td>
                    <td class="py-2 px-4 border-b">Everything you need from the Bible in one discoverable place</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Dog</td>
                    <td class="py-2 px-4 border-b"><a href="https://thedogapi.com/" class="text-blue-500">https://thedogapi.com/</a></td>
                    <td class="py-2 px-4 border-b">A public service all about Dogs, free to use when making your fancy new App, Website or Service</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Graph</td>
                    <td class="py-2 px-4 border-b"><a href="https://thegraph.com" class="text-blue-500">https://thegraph.com</a></td>
                    <td class="py-2 px-4 border-b">Indexing protocol for querying networks like Ethereum with GraphQL</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Guardian</td>
                    <td class="py-2 px-4 border-b"><a href="http://open-platform.theguardian.com/" class="text-blue-500">http://open-platform.theguardian.com/</a></td>
                    <td class="py-2 px-4 border-b">Access all the content the Guardian creates, categorised by tags and section</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Lord of the Rings</td>
                    <td class="py-2 px-4 border-b"><a href="https://the-one-api.dev/" class="text-blue-500">https://the-one-api.dev/</a></td>
                    <td class="py-2 px-4 border-b">The Lord of the Rings API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Muse</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.themuse.com/developers/api/v2" class="text-blue-500">https://www.themuse.com/developers/api/v2</a></td>
                    <td class="py-2 px-4 border-b">Job board and company profiles</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Null Pointer</td>
                    <td class="py-2 px-4 border-b"><a href="https://0x0.st" class="text-blue-500">https://0x0.st</a></td>
                    <td class="py-2 px-4 border-b">No-bullshit file hosting and URL shortening service</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Old Reader</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/theoldreader/api" class="text-blue-500">https://github.com/theoldreader/api</a></td>
                    <td class="py-2 px-4 border-b">RSS reader</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Report of the Week</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/andyklimczak/TheReportOfTheWeek-API" class="text-blue-500">https://github.com/andyklimczak/TheReportOfTheWeek-API</a></td>
                    <td class="py-2 px-4 border-b">Food & Drink Reviews</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">The Vampire Diaries</td>
                    <td class="py-2 px-4 border-b"><a href="https://vampire-diaries-api.netlify.app/" class="text-blue-500">https://vampire-diaries-api.netlify.app/</a></td>
                    <td class="py-2 px-4 border-b">TV Show Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TheAudioDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.theaudiodb.com/api_guide.php" class="text-blue-500">https://www.theaudiodb.com/api_guide.php</a></td>
                    <td class="py-2 px-4 border-b">Music</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TheCocktailDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.thecocktaildb.com/api.php" class="text-blue-500">https://www.thecocktaildb.com/api.php</a></td>
                    <td class="py-2 px-4 border-b">Cocktail Recipes</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TheNews</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.thenewsapi.com/" class="text-blue-500">https://www.thenewsapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Aggregated headlines, top story and live news JSON API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TheSportsDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.thesportsdb.com/api.php" class="text-blue-500">https://www.thesportsdb.com/api.php</a></td>
                    <td class="py-2 px-4 border-b">Crowd-Sourced Sports Data and Artwork</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">They Said So Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://theysaidso.com/api/" class="text-blue-500">https://theysaidso.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Quotes Trusted by many fortune brands around the world</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Thirukkural</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-thirukkural.web.app/" class="text-blue-500">https://api-thirukkural.web.app/</a></td>
                    <td class="py-2 px-4 border-b">1330 Thirukkural poems and explanation in Tamil and English</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">This Person Does not Exist</td>
                    <td class="py-2 px-4 border-b"><a href="https://thispersondoesnotexist.com" class="text-blue-500">https://thispersondoesnotexist.com</a></td>
                    <td class="py-2 px-4 border-b">Generates real-life faces of people who do not exist</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Threat Jammer</td>
                    <td class="py-2 px-4 border-b"><a href="https://threatjammer.com/docs/index" class="text-blue-500">https://threatjammer.com/docs/index</a></td>
                    <td class="py-2 px-4 border-b">Risk scoring service from curated threat intelligence data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ThronesApi</td>
                    <td class="py-2 px-4 border-b"><a href="https://thronesapi.com/" class="text-blue-500">https://thronesapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Game Of Thrones Characters Data with imagery</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ticketmaster</td>
                    <td class="py-2 px-4 border-b"><a href="http://developer.ticketmaster.com/products-and-docs/apis/getting-started/" class="text-blue-500">http://developer.ticketmaster.com/products-and-docs/apis/getting-started/</a></td>
                    <td class="py-2 px-4 border-b">Search events, attractions, or venues</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TikTok</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.tiktok.com/doc/login-kit-web" class="text-blue-500">https://developers.tiktok.com/doc/login-kit-web</a></td>
                    <td class="py-2 px-4 border-b">Fetches user info and user's video posts on TikTok platform</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Time Door</td>
                    <td class="py-2 px-4 border-b"><a href="https://timedoor.io" class="text-blue-500">https://timedoor.io</a></td>
                    <td class="py-2 px-4 border-b">A time series analysis API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Times Adder</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/FranP-code/API-Times-Adder" class="text-blue-500">https://github.com/FranP-code/API-Times-Adder</a></td>
                    <td class="py-2 px-4 border-b">With this API you can add each of the times introduced in the array sended</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TinyURL</td>
                    <td class="py-2 px-4 border-b"><a href="https://tinyurl.com/app/dev" class="text-blue-500">https://tinyurl.com/app/dev</a></td>
                    <td class="py-2 px-4 border-b">Shorten long URLs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tisane</td>
                    <td class="py-2 px-4 border-b"><a href="https://tisane.ai/" class="text-blue-500">https://tisane.ai/</a></td>
                    <td class="py-2 px-4 border-b">Text Analytics with focus on detection of abusive content and law enforcement applications</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Todoist</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.todoist.com" class="text-blue-500">https://developer.todoist.com</a></td>
                    <td class="py-2 px-4 border-b">Todo Lists</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tokopedia</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.tokopedia.com/openapi/guide/#/" class="text-blue-500">https://developer.tokopedia.com/openapi/guide/#/</a></td>
                    <td class="py-2 px-4 border-b">Tokopedia's Official API for integration of various services from Tokopedia</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TomTom</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.tomtom.com/" class="text-blue-500">https://developer.tomtom.com/</a></td>
                    <td class="py-2 px-4 border-b">Maps, Directions, Places and Traffic APIs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tomba email finder</td>
                    <td class="py-2 px-4 border-b"><a href="https://tomba.io/api" class="text-blue-500">https://tomba.io/api</a></td>
                    <td class="py-2 px-4 border-b">Email Finder for B2B sales and email marketing and email verifier</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tomorrow</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.tomorrow.io" class="text-blue-500">https://docs.tomorrow.io</a></td>
                    <td class="py-2 px-4 border-b">Weather API Powered by Proprietary Technology</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Toolcarton</td>
                    <td class="py-2 px-4 border-b"><a href="https://testimonialapi.toolcarton.com/" class="text-blue-500">https://testimonialapi.toolcarton.com/</a></td>
                    <td class="py-2 px-4 border-b">Generate random testimonial data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Trace Moe</td>
                    <td class="py-2 px-4 border-b"><a href="https://soruly.github.io/trace.moe-api/#/" class="text-blue-500">https://soruly.github.io/trace.moe-api/#/</a></td>
                    <td class="py-2 px-4 border-b">A useful tool to get the exact scene of an anime from a screenshot</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tradier</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.tradier.com" class="text-blue-500">https://developer.tradier.com</a></td>
                    <td class="py-2 px-4 border-b">US equity/option market data delayed, intraday, historical</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TrailerAddict</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.traileraddict.com/trailerapi" class="text-blue-500">https://www.traileraddict.com/trailerapi</a></td>
                    <td class="py-2 px-4 border-b">Easily embed trailers from TrailerAddict</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Traitify</td>
                    <td class="py-2 px-4 border-b"><a href="https://app.traitify.com/developer" class="text-blue-500">https://app.traitify.com/developer</a></td>
                    <td class="py-2 px-4 border-b">Assess, collect and analyze Personality</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Trakt</td>
                    <td class="py-2 px-4 border-b"><a href="https://trakt.docs.apiary.io/" class="text-blue-500">https://trakt.docs.apiary.io/</a></td>
                    <td class="py-2 px-4 border-b">Movie and TV Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">TransitLand</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.transit.land/documentation/datastore/api-endpoints.html" class="text-blue-500">https://www.transit.land/documentation/datastore/api-endpoints.html</a></td>
                    <td class="py-2 px-4 border-b">Transit Aggregation</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Atlanta, US</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.itsmarta.com/app-developer-resources.aspx" class="text-blue-500">http://www.itsmarta.com/app-developer-resources.aspx</a></td>
                    <td class="py-2 px-4 border-b">Marta</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Auckland, New Zealand</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev-portal.at.govt.nz/" class="text-blue-500">https://dev-portal.at.govt.nz/</a></td>
                    <td class="py-2 px-4 border-b">Auckland Transport</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Belgium</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.irail.be/" class="text-blue-500">https://docs.irail.be/</a></td>
                    <td class="py-2 px-4 border-b">The iRail API is a third-party API for Belgian public transport by train</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Berlin, Germany</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/derhuerst/vbb-rest/blob/3/docs/index.md" class="text-blue-500">https://github.com/derhuerst/vbb-rest/blob/3/docs/index.md</a></td>
                    <td class="py-2 px-4 border-b">Third-party VBB API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Bordeaux, France</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.bordeaux-metropole.fr/explore/" class="text-blue-500">https://opendata.bordeaux-metropole.fr/explore/</a></td>
                    <td class="py-2 px-4 border-b">Bordeaux Métropole public transport and more France</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Budapest, Hungary</td>
                    <td class="py-2 px-4 border-b"><a href="https://bkkfutar.docs.apiary.io" class="text-blue-500">https://bkkfutar.docs.apiary.io</a></td>
                    <td class="py-2 px-4 border-b">Budapest public transport API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Chicago, US</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.transitchicago.com/developers/" class="text-blue-500">http://www.transitchicago.com/developers/</a></td>
                    <td class="py-2 px-4 border-b">Chicago Transit Authority CTA</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Czech Republic</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.chaps.cz/eng/products/idos-internet" class="text-blue-500">https://www.chaps.cz/eng/products/idos-internet</a></td>
                    <td class="py-2 px-4 border-b">Czech transport API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Denver, US</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.rtd-denver.com/gtfs-developer-guide.shtml" class="text-blue-500">http://www.rtd-denver.com/gtfs-developer-guide.shtml</a></td>
                    <td class="py-2 px-4 border-b">RTD</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Finland</td>
                    <td class="py-2 px-4 border-b"><a href="https://digitransit.fi/en/developers/ " class="text-blue-500">https://digitransit.fi/en/developers/ </a></td>
                    <td class="py-2 px-4 border-b">Finnish transport API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Germany</td>
                    <td class="py-2 px-4 border-b"><a href="http://data.deutschebahn.com/dataset/api-fahrplan" class="text-blue-500">http://data.deutschebahn.com/dataset/api-fahrplan</a></td>
                    <td class="py-2 px-4 border-b">Deutsche Bahn DB API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Grenoble, France</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mobilites-m.fr/pages/opendata/OpenDataApi.html" class="text-blue-500">https://www.mobilites-m.fr/pages/opendata/OpenDataApi.html</a></td>
                    <td class="py-2 px-4 border-b">Grenoble public transport</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Hessen, Germany</td>
                    <td class="py-2 px-4 border-b"><a href="https://opendata.rmv.de/site/start.html" class="text-blue-500">https://opendata.rmv.de/site/start.html</a></td>
                    <td class="py-2 px-4 border-b">RMV API Public Transport in Hessen</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Honolulu, US</td>
                    <td class="py-2 px-4 border-b"><a href="http://hea.thebus.org/api_info.asp" class="text-blue-500">http://hea.thebus.org/api_info.asp</a></td>
                    <td class="py-2 px-4 border-b">Honolulu Transportation Information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Lisbon, Portugal</td>
                    <td class="py-2 px-4 border-b"><a href="https://emel.city-platform.com/opendata/" class="text-blue-500">https://emel.city-platform.com/opendata/</a></td>
                    <td class="py-2 px-4 border-b">Data about buses routes, parking and traffic</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for London, England</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.tfl.gov.uk" class="text-blue-500">https://api.tfl.gov.uk</a></td>
                    <td class="py-2 px-4 border-b">TfL API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Los Angeles, US</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.metro.net/api/" class="text-blue-500">https://developer.metro.net/api/</a></td>
                    <td class="py-2 px-4 border-b">Data about positions of Metro vehicles in real time and travel their routes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Manchester, England</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.tfgm.com/" class="text-blue-500">https://developer.tfgm.com/</a></td>
                    <td class="py-2 px-4 border-b">TfGM transport network data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Norway</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.entur.org/" class="text-blue-500">https://developer.entur.org/</a></td>
                    <td class="py-2 px-4 border-b">Transport APIs and dataset for Norway</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Ottawa, Canada</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.octranspo.com/en/plan-your-trip/travel-tools/developers" class="text-blue-500">https://www.octranspo.com/en/plan-your-trip/travel-tools/developers</a></td>
                    <td class="py-2 px-4 border-b">OC Transpo API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Paris, France</td>
                    <td class="py-2 px-4 border-b"><a href="http://data.ratp.fr/api/v1/console/datasets/1.0/search/" class="text-blue-500">http://data.ratp.fr/api/v1/console/datasets/1.0/search/</a></td>
                    <td class="py-2 px-4 border-b">RATP Open Data API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Philadelphia, US</td>
                    <td class="py-2 px-4 border-b"><a href="http://www3.septa.org/hackathon/" class="text-blue-500">http://www3.septa.org/hackathon/</a></td>
                    <td class="py-2 px-4 border-b">SEPTA APIs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Sao Paulo, Brazil</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/documentacao-api/" class="text-blue-500">http://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/documentacao-api/</a></td>
                    <td class="py-2 px-4 border-b">SPTrans</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Spain</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.renfe.com/api/1/util/snippet/api_info.html?resource_id=a2368cff-1562-4dde-8466-9635ea3a572a" class="text-blue-500">https://data.renfe.com/api/1/util/snippet/api_info.html?resource_id=a2368cff-1562-4dde-8466-9635ea3a572a</a></td>
                    <td class="py-2 px-4 border-b">Public trains of Spain</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Sweden</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.trafiklab.se/api" class="text-blue-500">https://www.trafiklab.se/api</a></td>
                    <td class="py-2 px-4 border-b">Public Transport consumer</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Switzerland</td>
                    <td class="py-2 px-4 border-b"><a href="https://opentransportdata.swiss/en/" class="text-blue-500">https://opentransportdata.swiss/en/</a></td>
                    <td class="py-2 px-4 border-b">Official Swiss Public Transport Open Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Switzerland</td>
                    <td class="py-2 px-4 border-b"><a href="https://transport.opendata.ch/" class="text-blue-500">https://transport.opendata.ch/</a></td>
                    <td class="py-2 px-4 border-b">Swiss public transport API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for The Netherlands</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.ns.nl/reisinformatie/ns-api" class="text-blue-500">http://www.ns.nl/reisinformatie/ns-api</a></td>
                    <td class="py-2 px-4 border-b">NS, only trains</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for The Netherlands</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/skywave/KV78Turbo-OVAPI/wiki" class="text-blue-500">https://github.com/skywave/KV78Turbo-OVAPI/wiki</a></td>
                    <td class="py-2 px-4 border-b">OVAPI, country-wide public transport</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Toronto, Canada</td>
                    <td class="py-2 px-4 border-b"><a href="https://myttc.ca/developers" class="text-blue-500">https://myttc.ca/developers</a></td>
                    <td class="py-2 px-4 border-b">TTC</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for UK</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.transportapi.com" class="text-blue-500">https://developer.transportapi.com</a></td>
                    <td class="py-2 px-4 border-b">Transport API and dataset for UK</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for United States</td>
                    <td class="py-2 px-4 border-b"><a href="https://retro.umoiq.com/xmlFeedDocs/NextBusXMLFeed.pdf" class="text-blue-500">https://retro.umoiq.com/xmlFeedDocs/NextBusXMLFeed.pdf</a></td>
                    <td class="py-2 px-4 border-b">NextBus API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Vancouver, Canada</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.translink.ca/" class="text-blue-500">https://developer.translink.ca/</a></td>
                    <td class="py-2 px-4 border-b">TransLink</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Transport for Washington, US</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.wmata.com/" class="text-blue-500">https://developer.wmata.com/</a></td>
                    <td class="py-2 px-4 border-b">Washington Metro transport API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Trash Nothing</td>
                    <td class="py-2 px-4 border-b"><a href="https://trashnothing.com/developer" class="text-blue-500">https://trashnothing.com/developer</a></td>
                    <td class="py-2 px-4 border-b">A freecycling community with thousands of free items posted every day</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Travis CI</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.travis-ci.com/api/" class="text-blue-500">https://docs.travis-ci.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Sync your GitHub projects with Travis CI to test your code in minutes</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tredict</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.tredict.com/blog/oauth_docs/" class="text-blue-500">https://www.tredict.com/blog/oauth_docs/</a></td>
                    <td class="py-2 px-4 border-b">Get and set activities, health data and more</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Trello</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.trello.com/" class="text-blue-500">https://developers.trello.com/</a></td>
                    <td class="py-2 px-4 border-b">Boards, lists and cards to help you organize and prioritize your projects</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tripadvisor</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer-tripadvisor.com/home/" class="text-blue-500">https://developer-tripadvisor.com/home/</a></td>
                    <td class="py-2 px-4 border-b">Rating content for a hotel, restaurant, attraction or destination</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tronald Dump</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.tronalddump.io/" class="text-blue-500">https://www.tronalddump.io/</a></td>
                    <td class="py-2 px-4 border-b">The dumbest things Donald Trump has ever said</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Trove</td>
                    <td class="py-2 px-4 border-b"><a href="https://trove.nla.gov.au/about/create-something/using-api" class="text-blue-500">https://trove.nla.gov.au/about/create-something/using-api</a></td>
                    <td class="py-2 px-4 border-b">Search through the National Library of Australia collection of 1000s of digitised newspapers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tumblr</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.tumblr.com/docs/en/api/v2" class="text-blue-500">https://www.tumblr.com/docs/en/api/v2</a></td>
                    <td class="py-2 px-4 border-b">Read and write Tumblr Data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Twitch</td>
                    <td class="py-2 px-4 border-b"><a href="https://dev.twitch.tv/docs" class="text-blue-500">https://dev.twitch.tv/docs</a></td>
                    <td class="py-2 px-4 border-b">Game Streaming API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Twitter</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.twitter.com/en/docs" class="text-blue-500">https://developer.twitter.com/en/docs</a></td>
                    <td class="py-2 px-4 border-b">Read and write Twitter data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Tyk</td>
                    <td class="py-2 px-4 border-b"><a href="https://tyk.io/open-source/" class="text-blue-500">https://tyk.io/open-source/</a></td>
                    <td class="py-2 px-4 border-b">Api and service management platform</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">UK Bank Holidays</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.gov.uk/bank-holidays.json" class="text-blue-500">https://www.gov.uk/bank-holidays.json</a></td>
                    <td class="py-2 px-4 border-b">Bank holidays in England and Wales, Scotland and Northern Ireland</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">UK Carbon Intensity</td>
                    <td class="py-2 px-4 border-b"><a href="https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v1-0-0" class="text-blue-500">https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v1-0-0</a></td>
                    <td class="py-2 px-4 border-b">The Official Carbon Intensity API for Great Britain developed by National Grid</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">UK Companies House</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.company-information.service.gov.uk/" class="text-blue-500">https://developer.company-information.service.gov.uk/</a></td>
                    <td class="py-2 px-4 border-b">UK Companies House Data from the UK government</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">UK Police</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.police.uk/docs/" class="text-blue-500">https://data.police.uk/docs/</a></td>
                    <td class="py-2 px-4 border-b">UK Police data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">UPS</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ups.com/upsdeveloperkit" class="text-blue-500">https://www.ups.com/upsdeveloperkit</a></td>
                    <td class="py-2 px-4 border-b">Shipment and Address information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">URLScan.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://urlscan.io/about-api/" class="text-blue-500">https://urlscan.io/about-api/</a></td>
                    <td class="py-2 px-4 border-b">Scan and Analyse URLs</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">URLhaus</td>
                    <td class="py-2 px-4 border-b"><a href="https://urlhaus-api.abuse.ch/" class="text-blue-500">https://urlhaus-api.abuse.ch/</a></td>
                    <td class="py-2 px-4 border-b">Bulk queries and Download Malware Samples</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">US Autocomplete</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.smarty.com/docs/cloud/us-autocomplete-pro-api" class="text-blue-500">https://www.smarty.com/docs/cloud/us-autocomplete-pro-api</a></td>
                    <td class="py-2 px-4 border-b">Enter address data quickly with real-time address suggestions</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">US Extract</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.smarty.com/products/apis/us-extract-api" class="text-blue-500">https://www.smarty.com/products/apis/us-extract-api</a></td>
                    <td class="py-2 px-4 border-b">Extract postal addresses from any text including emails</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">US Street Address</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.smarty.com/docs/cloud/us-street-api" class="text-blue-500">https://www.smarty.com/docs/cloud/us-street-api</a></td>
                    <td class="py-2 px-4 border-b">Validate and append data for any US postal address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">US Weather</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.weather.gov/documentation/services-web-api" class="text-blue-500">https://www.weather.gov/documentation/services-web-api</a></td>
                    <td class="py-2 px-4 border-b">US National Weather Service</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">US ZipCode</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.smarty.com/docs/cloud/us-zipcode-api" class="text-blue-500">https://www.smarty.com/docs/cloud/us-zipcode-api</a></td>
                    <td class="py-2 px-4 border-b">Validate and append data for any US ZipCode</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">USA.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.usa.gov/developer" class="text-blue-500">https://www.usa.gov/developer</a></td>
                    <td class="py-2 px-4 border-b">Authoritative information on U.S. programs, events, services and more</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">USAspending.gov</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.usaspending.gov/" class="text-blue-500">https://api.usaspending.gov/</a></td>
                    <td class="py-2 px-4 border-b">US federal spending data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">USGS Earthquake Hazards Program</td>
                    <td class="py-2 px-4 border-b"><a href="https://earthquake.usgs.gov/fdsnws/event/1/" class="text-blue-500">https://earthquake.usgs.gov/fdsnws/event/1/</a></td>
                    <td class="py-2 px-4 border-b">Earthquakes data real-time</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">USGS Water Services</td>
                    <td class="py-2 px-4 border-b"><a href="https://waterservices.usgs.gov/" class="text-blue-500">https://waterservices.usgs.gov/</a></td>
                    <td class="py-2 px-4 border-b">Water quality and level info for rivers and lakes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">USPTO</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.uspto.gov/learning-and-resources/open-data-and-mobility" class="text-blue-500">https://www.uspto.gov/learning-and-resources/open-data-and-mobility</a></td>
                    <td class="py-2 px-4 border-b">USA patent api services</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">UUID Generator</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.uuidtools.com/docs" class="text-blue-500">https://www.uuidtools.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Generate UUIDs</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Uber</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.uber.com/products" class="text-blue-500">https://developer.uber.com/products</a></td>
                    <td class="py-2 px-4 border-b">Uber ride requests and price estimation</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Udemyinstructor</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.udemy.com/developers/instructor/" class="text-blue-500">https://www.udemy.com/developers/instructor/</a></td>
                    <td class="py-2 px-4 border-b">API for instructors on Udemy</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Universalis</td>
                    <td class="py-2 px-4 border-b"><a href="https://universalis.app/docs/index.html" class="text-blue-500">https://universalis.app/docs/index.html</a></td>
                    <td class="py-2 px-4 border-b">Final Fantasy XIV market board data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Universities List</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/Hipo/university-domains-list" class="text-blue-500">https://github.com/Hipo/university-domains-list</a></td>
                    <td class="py-2 px-4 border-b">University names, countries and domains</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">University of Oslo</td>
                    <td class="py-2 px-4 border-b"><a href="https://data.uio.no/" class="text-blue-500">https://data.uio.no/</a></td>
                    <td class="py-2 px-4 border-b">Courses, lecture videos, detailed information for courses etc. for the University of Oslo Norway</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Unplugg</td>
                    <td class="py-2 px-4 border-b"><a href="https://unplu.gg/test_api.html" class="text-blue-500">https://unplu.gg/test_api.html</a></td>
                    <td class="py-2 px-4 border-b">Forecasting API for timeseries data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Unsplash</td>
                    <td class="py-2 px-4 border-b"><a href="https://unsplash.com/developers" class="text-blue-500">https://unsplash.com/developers</a></td>
                    <td class="py-2 px-4 border-b">Photography</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Untappd</td>
                    <td class="py-2 px-4 border-b"><a href="https://untappd.com/api/docs" class="text-blue-500">https://untappd.com/api/docs</a></td>
                    <td class="py-2 px-4 border-b">Social beer sharing</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Upwork</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.upwork.com/" class="text-blue-500">https://developers.upwork.com/</a></td>
                    <td class="py-2 px-4 border-b">Freelance job board and management system</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Urban Observatory</td>
                    <td class="py-2 px-4 border-b"><a href="https://urbanobservatory.ac.uk" class="text-blue-500">https://urbanobservatory.ac.uk</a></td>
                    <td class="py-2 px-4 border-b">The largest set of publicly available real time urban data in the UK</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">UrlBae</td>
                    <td class="py-2 px-4 border-b"><a href="https://urlbae.com/developers" class="text-blue-500">https://urlbae.com/developers</a></td>
                    <td class="py-2 px-4 border-b">Simple and efficient short link creation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Utah AGRC</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.mapserv.utah.gov" class="text-blue-500">https://api.mapserv.utah.gov</a></td>
                    <td class="py-2 px-4 border-b">Utah Web API for geocoding Utah addresses</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">VALR</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.valr.com/" class="text-blue-500">https://docs.valr.com/</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrency Exchange based in South Africa</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">VATComply.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.vatcomply.com/documentation" class="text-blue-500">https://www.vatcomply.com/documentation</a></td>
                    <td class="py-2 px-4 border-b">Exchange rates, geolocation and VAT number validation</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Vadivelu HTTP Codes</td>
                    <td class="py-2 px-4 border-b"><a href="https://vadivelu.anoram.com/" class="text-blue-500">https://vadivelu.anoram.com/</a></td>
                    <td class="py-2 px-4 border-b">On demand HTTP Codes with images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Vagalume</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.vagalume.com.br/docs/" class="text-blue-500">https://api.vagalume.com.br/docs/</a></td>
                    <td class="py-2 px-4 border-b">Crowdsourced lyrics and music knowledge</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Valorant non-official</td>
                    <td class="py-2 px-4 border-b"><a href="https://valorant-api.com" class="text-blue-500">https://valorant-api.com</a></td>
                    <td class="py-2 px-4 border-b">An extensive API containing data of most Valorant in-game items, assets and more</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Vector Express v2.0</td>
                    <td class="py-2 px-4 border-b"><a href="https://vector.express" class="text-blue-500">https://vector.express</a></td>
                    <td class="py-2 px-4 border-b">Free vector file converting API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Vedic Society</td>
                    <td class="py-2 px-4 border-b"><a href="https://aninditabasu.github.io/indica/html/vs.html" class="text-blue-500">https://aninditabasu.github.io/indica/html/vs.html</a></td>
                    <td class="py-2 px-4 border-b">Descriptions of all nouns names, places, animals, things from vedic literature</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Velib metropolis, Paris, France</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.velib-metropole.fr/donnees-open-data-gbfs-du-service-velib-metropole" class="text-blue-500">https://www.velib-metropole.fr/donnees-open-data-gbfs-du-service-velib-metropole</a></td>
                    <td class="py-2 px-4 border-b">Velib Open Data API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Verifier</td>
                    <td class="py-2 px-4 border-b"><a href="https://verifier.meetchopra.com/docs#/" class="text-blue-500">https://verifier.meetchopra.com/docs#/</a></td>
                    <td class="py-2 px-4 border-b">Verifies that a given email is real</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Veriphone</td>
                    <td class="py-2 px-4 border-b"><a href="https://veriphone.io" class="text-blue-500">https://veriphone.io</a></td>
                    <td class="py-2 px-4 border-b">Phone number validation & carrier lookup</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ViaCep</td>
                    <td class="py-2 px-4 border-b"><a href="https://viacep.com.br" class="text-blue-500">https://viacep.com.br</a></td>
                    <td class="py-2 px-4 border-b">Brazil RESTful zip codes API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Vimeo</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.vimeo.com/" class="text-blue-500">https://developer.vimeo.com/</a></td>
                    <td class="py-2 px-4 border-b">Vimeo Developer API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">VirusTotal</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.virustotal.com/en/documentation/public-api/" class="text-blue-500">https://www.virustotal.com/en/documentation/public-api/</a></td>
                    <td class="py-2 px-4 border-b">VirusTotal File/URL Analysis</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Virushee</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.virushee.com/" class="text-blue-500">https://api.virushee.com/</a></td>
                    <td class="py-2 px-4 border-b">Virushee file/data scanning</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Visual Crossing</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.visualcrossing.com/weather-api" class="text-blue-500">https://www.visualcrossing.com/weather-api</a></td>
                    <td class="py-2 px-4 border-b">Global historical and weather forecast data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">VulDB</td>
                    <td class="py-2 px-4 border-b"><a href="https://vuldb.com/?doc.api" class="text-blue-500">https://vuldb.com/?doc.api</a></td>
                    <td class="py-2 px-4 border-b">VulDB API allows to initiate queries for one or more items along with transactional bots</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Waifu.im</td>
                    <td class="py-2 px-4 border-b"><a href="https://waifu.im/docs" class="text-blue-500">https://waifu.im/docs</a></td>
                    <td class="py-2 px-4 border-b">Get waifu pictures from an archive of over 4000 images and multiple tags</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Waifu.pics</td>
                    <td class="py-2 px-4 border-b"><a href="https://waifu.pics/docs" class="text-blue-500">https://waifu.pics/docs</a></td>
                    <td class="py-2 px-4 border-b">Image sharing platform for anime images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WakaTime</td>
                    <td class="py-2 px-4 border-b"><a href="https://wakatime.com/developers" class="text-blue-500">https://wakatime.com/developers</a></td>
                    <td class="py-2 px-4 border-b">Automated time tracking leaderboards for programmers</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wallhaven</td>
                    <td class="py-2 px-4 border-b"><a href="https://wallhaven.cc/help/api" class="text-blue-500">https://wallhaven.cc/help/api</a></td>
                    <td class="py-2 px-4 border-b">Wallpapers</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WallstreetBets</td>
                    <td class="py-2 px-4 border-b"><a href="https://dashboard.nbshare.io/apps/reddit/api/" class="text-blue-500">https://dashboard.nbshare.io/apps/reddit/api/</a></td>
                    <td class="py-2 px-4 border-b">WallstreetBets Stock Comments Sentiment Analysis</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Walltime</td>
                    <td class="py-2 px-4 border-b"><a href="https://walltime.info/api.html" class="text-blue-500">https://walltime.info/api.html</a></td>
                    <td class="py-2 px-4 border-b">To retrieve Walltime's market info</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wandbox</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/melpon/wandbox/blob/master/kennel2/API.rst" class="text-blue-500">https://github.com/melpon/wandbox/blob/master/kennel2/API.rst</a></td>
                    <td class="py-2 px-4 border-b">Code compiler supporting 35+ languages mentioned at wandbox.org</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Warface non-official</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.wfstats.cf" class="text-blue-500">https://api.wfstats.cf</a></td>
                    <td class="py-2 px-4 border-b">Official API proxy with better data structure and more features</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wargaming.net</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.wargaming.net/" class="text-blue-500">https://developers.wargaming.net/</a></td>
                    <td class="py-2 px-4 border-b">Wargaming.net info and stats</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Warrant</td>
                    <td class="py-2 px-4 border-b"><a href="https://warrant.dev/" class="text-blue-500">https://warrant.dev/</a></td>
                    <td class="py-2 px-4 border-b">APIs for authorization and access control</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Watchmode</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.watchmode.com/" class="text-blue-500">https://api.watchmode.com/</a></td>
                    <td class="py-2 px-4 border-b">API for finding out the streaming availability of movies & shows</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Watson Natural Language Understanding</td>
                    <td class="py-2 px-4 border-b"><a href="https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding" class="text-blue-500">https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding</a></td>
                    <td class="py-2 px-4 border-b">Natural language processing for advanced text analysis</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WeCanTrack</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.wecantrack.com" class="text-blue-500">https://docs.wecantrack.com</a></td>
                    <td class="py-2 px-4 border-b">Automatically place subids in affiliate links to attribute affiliate conversions to click data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WeatherAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.weatherapi.com/" class="text-blue-500">https://www.weatherapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Weather API with other stuff like Astronomy and Geolocation API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Weatherbit</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.weatherbit.io/api" class="text-blue-500">https://www.weatherbit.io/api</a></td>
                    <td class="py-2 px-4 border-b">Weather</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Weatherstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://weatherstack.com/" class="text-blue-500">https://weatherstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Retrieve instant, accurate weather information for any location in the world in lightweight JSON format</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">nan</td>
                    <td class="py-2 px-4 border-b">nan</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Web Series Quotes Generator</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/yogeshwaran01/web-series-quotes" class="text-blue-500">https://github.com/yogeshwaran01/web-series-quotes</a></td>
                    <td class="py-2 px-4 border-b">API generates various Web Series Quote Images</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Web of Trust</td>
                    <td class="py-2 px-4 border-b"><a href="https://support.mywot.com/hc/en-us/sections/360004477734-API-" class="text-blue-500">https://support.mywot.com/hc/en-us/sections/360004477734-API-</a></td>
                    <td class="py-2 px-4 border-b">IP/domain/URL reputation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Web3 Storage</td>
                    <td class="py-2 px-4 border-b"><a href="https://web3.storage/" class="text-blue-500">https://web3.storage/</a></td>
                    <td class="py-2 px-4 border-b">File Sharing and Storage for Free with 1TB Space</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WebScraping.AI</td>
                    <td class="py-2 px-4 border-b"><a href="https://webscraping.ai/" class="text-blue-500">https://webscraping.ai/</a></td>
                    <td class="py-2 px-4 border-b">Web Scraping API with built-in proxies and JS rendering</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Webdam</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.damsuccess.com/hc/en-us/articles/202134055-REST-API" class="text-blue-500">https://www.damsuccess.com/hc/en-us/articles/202134055-REST-API</a></td>
                    <td class="py-2 px-4 border-b">Images</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Website Carbon</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.websitecarbon.com/" class="text-blue-500">https://api.websitecarbon.com/</a></td>
                    <td class="py-2 px-4 border-b">API to estimate the carbon footprint of loading web pages</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wger</td>
                    <td class="py-2 px-4 border-b"><a href="https://wger.de/en/software/api" class="text-blue-500">https://wger.de/en/software/api</a></td>
                    <td class="py-2 px-4 border-b">Workout manager data as exercises, muscles or equipment</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">What The Commit</td>
                    <td class="py-2 px-4 border-b"><a href="http://whatthecommit.com/index.txt" class="text-blue-500">http://whatthecommit.com/index.txt</a></td>
                    <td class="py-2 px-4 border-b">Random commit message generator</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">What's on the menu?</td>
                    <td class="py-2 px-4 border-b"><a href="http://nypl.github.io/menus-api/" class="text-blue-500">http://nypl.github.io/menus-api/</a></td>
                    <td class="py-2 px-4 border-b">NYPL human-transcribed historical menu collection</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">What3Words</td>
                    <td class="py-2 px-4 border-b"><a href="https://what3words.com" class="text-blue-500">https://what3words.com</a></td>
                    <td class="py-2 px-4 border-b">Three words as rememberable and unique coordinates worldwide</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WhatPulse</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.whatpulse.org/#web-api" class="text-blue-500">https://developer.whatpulse.org/#web-api</a></td>
                    <td class="py-2 px-4 border-b">Small application that measures your keyboard/mouse usage</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">When is next MCU film</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/DiljotSG/MCU-Countdown/blob/develop/docs/API.md" class="text-blue-500">https://github.com/DiljotSG/MCU-Countdown/blob/develop/docs/API.md</a></td>
                    <td class="py-2 px-4 border-b">Upcoming MCU film information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WhiskyHunter</td>
                    <td class="py-2 px-4 border-b"><a href="https://whiskyhunter.net/api/" class="text-blue-500">https://whiskyhunter.net/api/</a></td>
                    <td class="py-2 px-4 border-b">Past online whisky auctions statistical data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wiktionary</td>
                    <td class="py-2 px-4 border-b"><a href="https://en.wiktionary.org/w/api.php" class="text-blue-500">https://en.wiktionary.org/w/api.php</a></td>
                    <td class="py-2 px-4 border-b">Collaborative dictionary data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wizard World</td>
                    <td class="py-2 px-4 border-b"><a href="https://wizard-world-api.herokuapp.com/swagger/index.html" class="text-blue-500">https://wizard-world-api.herokuapp.com/swagger/index.html</a></td>
                    <td class="py-2 px-4 border-b">Get information from the Harry Potter universe</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WolframAlpha</td>
                    <td class="py-2 px-4 border-b"><a href="https://products.wolframalpha.com/api/" class="text-blue-500">https://products.wolframalpha.com/api/</a></td>
                    <td class="py-2 px-4 border-b">Provides specific answers to questions using data and algorithms</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wolne Lektury</td>
                    <td class="py-2 px-4 border-b"><a href="https://wolnelektury.pl/api/" class="text-blue-500">https://wolnelektury.pl/api/</a></td>
                    <td class="py-2 px-4 border-b">API for obtaining information about e-books available on the WolneLektury.pl website</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WooCommerce</td>
                    <td class="py-2 px-4 border-b"><a href="https://woocommerce.github.io/woocommerce-rest-api-docs/" class="text-blue-500">https://woocommerce.github.io/woocommerce-rest-api-docs/</a></td>
                    <td class="py-2 px-4 border-b">WooCommerce REST APIS to create, read, update, and delete data on wordpress website in JSON format</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Word Cloud</td>
                    <td class="py-2 px-4 border-b"><a href="https://wordcloudapi.com/" class="text-blue-500">https://wordcloudapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Easily create word clouds</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Wordnik</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.wordnik.com" class="text-blue-500">https://developer.wordnik.com</a></td>
                    <td class="py-2 px-4 border-b">Dictionary Data</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Words</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.wordsapi.com/docs/" class="text-blue-500">https://www.wordsapi.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">Definitions and synonyms for more than 150,000 words</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">World Bank</td>
                    <td class="py-2 px-4 border-b"><a href="https://datahelpdesk.worldbank.org/knowledgebase/topics/125589" class="text-blue-500">https://datahelpdesk.worldbank.org/knowledgebase/topics/125589</a></td>
                    <td class="py-2 px-4 border-b">World Data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">WorldCoinIndex</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.worldcoinindex.com/apiservice" class="text-blue-500">https://www.worldcoinindex.com/apiservice</a></td>
                    <td class="py-2 px-4 border-b">Cryptocurrencies Prices</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">YNAB</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.youneedabudget.com/" class="text-blue-500">https://api.youneedabudget.com/</a></td>
                    <td class="py-2 px-4 border-b">Budgeting & Planning</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Yahoo Finance</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.yahoofinanceapi.com/" class="text-blue-500">https://www.yahoofinanceapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Real time low latency Yahoo Finance API for stock market, crypto currencies, and currency exchange</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Yandex.Weather</td>
                    <td class="py-2 px-4 border-b"><a href="https://yandex.com/dev/weather/" class="text-blue-500">https://yandex.com/dev/weather/</a></td>
                    <td class="py-2 px-4 border-b">Assesses weather condition in specific locations</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Yelp</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.yelp.com/developers/documentation/v3" class="text-blue-500">https://www.yelp.com/developers/documentation/v3</a></td>
                    <td class="py-2 px-4 border-b">Find Local Business</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Yes No</td>
                    <td class="py-2 px-4 border-b"><a href="https://yesno.wtf/api" class="text-blue-500">https://yesno.wtf/api</a></td>
                    <td class="py-2 px-4 border-b">Generate yes or no randomly</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Yo Momma Jokes</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/beanboi7/yomomma-apiv2" class="text-blue-500">https://github.com/beanboi7/yomomma-apiv2</a></td>
                    <td class="py-2 px-4 border-b">REST API for Yo Momma Jokes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">YouTube</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.google.com/youtube/" class="text-blue-500">https://developers.google.com/youtube/</a></td>
                    <td class="py-2 px-4 border-b">Add YouTube functionality to your sites and apps</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Yu-Gi-Oh!</td>
                    <td class="py-2 px-4 border-b"><a href="https://db.ygoprodeck.com/api-guide/" class="text-blue-500">https://db.ygoprodeck.com/api-guide/</a></td>
                    <td class="py-2 px-4 border-b">Yu-Gi-Oh! TCG Information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ZMOK</td>
                    <td class="py-2 px-4 border-b"><a href="https://zmok.io" class="text-blue-500">https://zmok.io</a></td>
                    <td class="py-2 px-4 border-b">Ethereum JSON RPC API and Web3 provider</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Zen Quotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://zenquotes.io/" class="text-blue-500">https://zenquotes.io/</a></td>
                    <td class="py-2 px-4 border-b">Large collection of Zen quotes for inspiration</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ZenRows</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.zenrows.com/" class="text-blue-500">https://www.zenrows.com/</a></td>
                    <td class="py-2 px-4 border-b">Web Scraping API that bypasses anti-bot solutions while offering JS rendering, and rotating proxies</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Zestful</td>
                    <td class="py-2 px-4 border-b"><a href="https://zestfuldata.com/" class="text-blue-500">https://zestfuldata.com/</a></td>
                    <td class="py-2 px-4 border-b">Parse recipe ingredients</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ZipCodeAPI</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.zipcodeapi.com" class="text-blue-500">https://www.zipcodeapi.com</a></td>
                    <td class="py-2 px-4 border-b">US zip code distance, radius and location API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ZipRecruiter</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.ziprecruiter.com/publishers" class="text-blue-500">https://www.ziprecruiter.com/publishers</a></td>
                    <td class="py-2 px-4 border-b">Job search app and website</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Zippopotam.us</td>
                    <td class="py-2 px-4 border-b"><a href="http://www.zippopotam.us" class="text-blue-500">http://www.zippopotam.us</a></td>
                    <td class="py-2 px-4 border-b">Get information about place such as country, city, state, etc</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Ziptastic</td>
                    <td class="py-2 px-4 border-b"><a href="https://ziptasticapi.com/" class="text-blue-500">https://ziptasticapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Get the country, state, and city of any US zip-code</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Zoho Books</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.zoho.com/books/api/v3/" class="text-blue-500">https://www.zoho.com/books/api/v3/</a></td>
                    <td class="py-2 px-4 border-b">Online accounting software, built for your business</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">Zube</td>
                    <td class="py-2 px-4 border-b"><a href="https://zube.io/docs/api" class="text-blue-500">https://zube.io/docs/api</a></td>
                    <td class="py-2 px-4 border-b">Full stack project management</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">administrative-divisons-db</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/kamikazechaser/administrative-divisions-db" class="text-blue-500">https://github.com/kamikazechaser/administrative-divisions-db</a></td>
                    <td class="py-2 px-4 border-b">Get all administrative divisions of a country</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">airportsapi</td>
                    <td class="py-2 px-4 border-b"><a href="https://airport-web.appspot.com/api/docs/" class="text-blue-500">https://airport-web.appspot.com/api/docs/</a></td>
                    <td class="py-2 px-4 border-b">Get name and website-URL for airports by ICAO code</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer aviationstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://aviationstack.com/" class="text-blue-500">https://aviationstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Real-time Flight Status & Global Aviation Data API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer coinlayer</td>
                    <td class="py-2 px-4 border-b"><a href="https://coinlayer.com" class="text-blue-500">https://coinlayer.com</a></td>
                    <td class="py-2 px-4 border-b">Real-time Crypto Currency Exchange Rates</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer fixer.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://fixer.io" class="text-blue-500">https://fixer.io</a></td>
                    <td class="py-2 px-4 border-b">Exchange rates and currency conversion</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer ipstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipstack.com/" class="text-blue-500">https://ipstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Locate and identify website visitors by IP address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer languagelayer</td>
                    <td class="py-2 px-4 border-b"><a href="https://languagelayer.com/" class="text-blue-500">https://languagelayer.com/</a></td>
                    <td class="py-2 px-4 border-b">Language Detection JSON API supporting 173 languages</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer mailboxlayer</td>
                    <td class="py-2 px-4 border-b"><a href="https://mailboxlayer.com" class="text-blue-500">https://mailboxlayer.com</a></td>
                    <td class="py-2 px-4 border-b">Email address validation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer marketstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://marketstack.com/" class="text-blue-500">https://marketstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Real-Time, Intraday & Historical Market Data API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer numverify</td>
                    <td class="py-2 px-4 border-b"><a href="https://numverify.com" class="text-blue-500">https://numverify.com</a></td>
                    <td class="py-2 px-4 border-b">Phone number validation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer pdflayer</td>
                    <td class="py-2 px-4 border-b"><a href="https://pdflayer.com" class="text-blue-500">https://pdflayer.com</a></td>
                    <td class="py-2 px-4 border-b">HTML/URL to PDF</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer screenshotlayer</td>
                    <td class="py-2 px-4 border-b"><a href="https://screenshotlayer.com" class="text-blue-500">https://screenshotlayer.com</a></td>
                    <td class="py-2 px-4 border-b">URL 2 Image</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer userstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://userstack.com/" class="text-blue-500">https://userstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Secure User-Agent String Lookup JSON API</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">apilayer weatherstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://weatherstack.com/" class="text-blue-500">https://weatherstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Real-Time & Historical World Weather Data API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">arXiv</td>
                    <td class="py-2 px-4 border-b"><a href="https://arxiv.org/help/api/user-manual" class="text-blue-500">https://arxiv.org/help/api/user-manual</a></td>
                    <td class="py-2 px-4 border-b">Curated research-sharing platform: physics, mathematics, quantitative finance, and economics</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">arcsecond.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.arcsecond.io/" class="text-blue-500">https://api.arcsecond.io/</a></td>
                    <td class="py-2 px-4 border-b">Multiple astronomy data sources</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">aztro</td>
                    <td class="py-2 px-4 border-b"><a href="https://aztro.sameerkumar.website/" class="text-blue-500">https://aztro.sameerkumar.website/</a></td>
                    <td class="py-2 px-4 border-b">Daily horoscope info for yesterday, today, and tomorrow</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">balldontlie</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.balldontlie.io" class="text-blue-500">https://www.balldontlie.io</a></td>
                    <td class="py-2 px-4 border-b">Balldontlie provides access to stats data from the NBA</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">blockfrost Cardano</td>
                    <td class="py-2 px-4 border-b"><a href="https://blockfrost.io/" class="text-blue-500">https://blockfrost.io/</a></td>
                    <td class="py-2 px-4 border-b">Interaction with the Cardano mainnet and several testnets</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">bng2latlong</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.getthedata.com/bng2latlong" class="text-blue-500">https://www.getthedata.com/bng2latlong</a></td>
                    <td class="py-2 px-4 border-b">Convert British OSGB36 easting and northing British National Grid to WGS84 latitude and longitude</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">chucknorris.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://api.chucknorris.io" class="text-blue-500">https://api.chucknorris.io</a></td>
                    <td class="py-2 px-4 border-b">JSON API for hand curated Chuck Norris jokes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">dYdX</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.dydx.exchange/" class="text-blue-500">https://docs.dydx.exchange/</a></td>
                    <td class="py-2 px-4 border-b">Decentralized cryptocurrency exchange</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ddownload</td>
                    <td class="py-2 px-4 border-b"><a href="https://ddownload.com/api" class="text-blue-500">https://ddownload.com/api</a></td>
                    <td class="py-2 px-4 border-b">File Sharing and Storage</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">eBay</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.ebay.com/" class="text-blue-500">https://developer.ebay.com/</a></td>
                    <td class="py-2 px-4 border-b">Sell and Buy on eBay</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">eBird</td>
                    <td class="py-2 px-4 border-b"><a href="https://documenter.getpostman.com/view/664302/S1ENwy59" class="text-blue-500">https://documenter.getpostman.com/view/664302/S1ENwy59</a></td>
                    <td class="py-2 px-4 border-b">Retrieve recent or notable birding observations within a region</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">host-t.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://host-t.com" class="text-blue-500">https://host-t.com</a></td>
                    <td class="py-2 px-4 border-b">Basic DNS query via HTTP GET request</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">iDigBio</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/idigbio/idigbio-search-api/wiki" class="text-blue-500">https://github.com/idigbio/idigbio-search-api/wiki</a></td>
                    <td class="py-2 px-4 border-b">Access millions of museum specimens from organizations around the world</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">iLovePDF</td>
                    <td class="py-2 px-4 border-b"><a href="https://developer.ilovepdf.com/" class="text-blue-500">https://developer.ilovepdf.com/</a></td>
                    <td class="py-2 px-4 border-b">Convert, merge, split, extract text and add page numbers for PDFs. Free for 250 documents/month</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">iTunes Search</td>
                    <td class="py-2 px-4 border-b"><a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/" class="text-blue-500">https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/</a></td>
                    <td class="py-2 px-4 border-b">Software products</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">icanhazdadjoke</td>
                    <td class="py-2 px-4 border-b"><a href="https://icanhazdadjoke.com/api" class="text-blue-500">https://icanhazdadjoke.com/api</a></td>
                    <td class="py-2 px-4 border-b">The largest selection of dad jokes on the internet</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">icy.tools</td>
                    <td class="py-2 px-4 border-b"><a href="https://developers.icy.tools/" class="text-blue-500">https://developers.icy.tools/</a></td>
                    <td class="py-2 px-4 border-b">GraphQL based NFT API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">import.io</td>
                    <td class="py-2 px-4 border-b"><a href="http://api.docs.import.io/" class="text-blue-500">http://api.docs.import.io/</a></td>
                    <td class="py-2 px-4 border-b">Retrieve structured data from a website or RSS feed</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">inspirehep.net</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/inspirehep/rest-api-doc" class="text-blue-500">https://github.com/inspirehep/rest-api-doc</a></td>
                    <td class="py-2 px-4 border-b">High Energy Physics info. system</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ip-api</td>
                    <td class="py-2 px-4 border-b"><a href="https://ip-api.com/docs" class="text-blue-500">https://ip-api.com/docs</a></td>
                    <td class="py-2 px-4 border-b">Find location with IP address or domain</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ip-fast.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://ip-fast.com/docs/" class="text-blue-500">https://ip-fast.com/docs/</a></td>
                    <td class="py-2 px-4 border-b">IP address, country and city</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ipapi.co</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipapi.co/api/#introduction" class="text-blue-500">https://ipapi.co/api/#introduction</a></td>
                    <td class="py-2 px-4 border-b">Find IP address location information</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ipapi.com</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipapi.com/" class="text-blue-500">https://ipapi.com/</a></td>
                    <td class="py-2 px-4 border-b">Real-time Geolocation & Reverse IP Lookup REST API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ipfind.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipfind.io" class="text-blue-500">https://ipfind.io</a></td>
                    <td class="py-2 px-4 border-b">Geographic location of an IP address or any domain name along with some other useful information</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">ipstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://ipstack.com/" class="text-blue-500">https://ipstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Locate and identify website visitors by IP address</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">isEven humor</td>
                    <td class="py-2 px-4 border-b"><a href="https://isevenapi.xyz/" class="text-blue-500">https://isevenapi.xyz/</a></td>
                    <td class="py-2 px-4 border-b">Check if a number is even</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">jsDelivr</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/jsdelivr/data.jsdelivr.com" class="text-blue-500">https://github.com/jsdelivr/data.jsdelivr.com</a></td>
                    <td class="py-2 px-4 border-b">Package info and download stats on jsDelivr CDN</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">kanye.rest</td>
                    <td class="py-2 px-4 border-b"><a href="https://kanye.rest" class="text-blue-500">https://kanye.rest</a></td>
                    <td class="py-2 px-4 border-b">REST API for random Kanye West quotes</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">kimiquotes</td>
                    <td class="py-2 px-4 border-b"><a href="https://kimiquotes.herokuapp.com/doc" class="text-blue-500">https://kimiquotes.herokuapp.com/doc</a></td>
                    <td class="py-2 px-4 border-b">Team radio and interview quotes by Finnish F1 legend Kimi Räikkönen</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">mail.gw</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.mail.gw" class="text-blue-500">https://docs.mail.gw</a></td>
                    <td class="py-2 px-4 border-b">10 Minute Mail</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">mail.tm</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.mail.tm" class="text-blue-500">https://docs.mail.tm</a></td>
                    <td class="py-2 px-4 border-b">Temporary Email Service</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">mailjet</td>
                    <td class="py-2 px-4 border-b"><a href="https://www.mailjet.com/" class="text-blue-500">https://www.mailjet.com/</a></td>
                    <td class="py-2 px-4 border-b">Marketing email can be sent and mail templates made in MJML or HTML can be sent using API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">markerapi</td>
                    <td class="py-2 px-4 border-b"><a href="https://markerapi.com" class="text-blue-500">https://markerapi.com</a></td>
                    <td class="py-2 px-4 border-b">Trademark Search</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">mod.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://docs.mod.io" class="text-blue-500">https://docs.mod.io</a></td>
                    <td class="py-2 px-4 border-b">Cross Platform Mod API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">npm Registry</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md" class="text-blue-500">https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md</a></td>
                    <td class="py-2 px-4 border-b">Query information about your favorite Node.js libraries programatically</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">openAFRICA</td>
                    <td class="py-2 px-4 border-b"><a href="https://africaopendata.org/" class="text-blue-500">https://africaopendata.org/</a></td>
                    <td class="py-2 px-4 border-b">Large datasets repository of African open data</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">openFDA</td>
                    <td class="py-2 px-4 border-b"><a href="https://open.fda.gov" class="text-blue-500">https://open.fda.gov</a></td>
                    <td class="py-2 px-4 border-b">Public FDA data about drugs, devices and foods</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">openrouteservice.org</td>
                    <td class="py-2 px-4 border-b"><a href="https://openrouteservice.org/" class="text-blue-500">https://openrouteservice.org/</a></td>
                    <td class="py-2 px-4 border-b">Directions, POIs, isochrones, geocoding +reverse, elevation, and more</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">owo</td>
                    <td class="py-2 px-4 border-b"><a href="https://owo.vc/api" class="text-blue-500">https://owo.vc/api</a></td>
                    <td class="py-2 px-4 border-b">A simple link obfuscator/shortener</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">oyyi</td>
                    <td class="py-2 px-4 border-b"><a href="https://oyyi.xyz/docs/1.0" class="text-blue-500">https://oyyi.xyz/docs/1.0</a></td>
                    <td class="py-2 px-4 border-b">API for Fake Data, image/video conversion, optimization, pdf optimization and thumbnail generation</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">positionstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://positionstack.com/" class="text-blue-500">https://positionstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Forward & Reverse Batch Geocoding REST API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">quizapi.io</td>
                    <td class="py-2 px-4 border-b"><a href="https://quizapi.io/" class="text-blue-500">https://quizapi.io/</a></td>
                    <td class="py-2 px-4 border-b">Access to various kind of quiz questions</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">quoteclear</td>
                    <td class="py-2 px-4 border-b"><a href="https://quoteclear.web.app/" class="text-blue-500">https://quoteclear.web.app/</a></td>
                    <td class="py-2 px-4 border-b">Ever-growing list of James Clear quotes from the 3-2-1 Newsletter</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">scraperBox</td>
                    <td class="py-2 px-4 border-b"><a href="https://scraperbox.com/" class="text-blue-500">https://scraperbox.com/</a></td>
                    <td class="py-2 px-4 border-b">Undetectable web scraping API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">scrapestack</td>
                    <td class="py-2 px-4 border-b"><a href="https://scrapestack.com/" class="text-blue-500">https://scrapestack.com/</a></td>
                    <td class="py-2 px-4 border-b">Real-time, Scalable Proxy & Web Scraping REST API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">serpstack</td>
                    <td class="py-2 px-4 border-b"><a href="https://serpstack.com/" class="text-blue-500">https://serpstack.com/</a></td>
                    <td class="py-2 px-4 border-b">Real-Time & Accurate Google Search Results API</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">shutterstock</td>
                    <td class="py-2 px-4 border-b"><a href="https://api-reference.shutterstock.com/" class="text-blue-500">https://api-reference.shutterstock.com/</a></td>
                    <td class="py-2 px-4 border-b">Stock Photos and Videos</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">transport.rest</td>
                    <td class="py-2 px-4 border-b"><a href="https://transport.rest" class="text-blue-500">https://transport.rest</a></td>
                    <td class="py-2 px-4 border-b">Community maintained, developer-friendly public transport API</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">uNoGS</td>
                    <td class="py-2 px-4 border-b"><a href="https://rapidapi.com/unogs/api/unogsng" class="text-blue-500">https://rapidapi.com/unogs/api/unogsng</a></td>
                    <td class="py-2 px-4 border-b">Unofficial Netflix Online Global Search, Search all netflix regions in one place</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">vatlayer</td>
                    <td class="py-2 px-4 border-b"><a href="https://vatlayer.com/documentation" class="text-blue-500">https://vatlayer.com/documentation</a></td>
                    <td class="py-2 px-4 border-b">VAT number validation</td>
                    <td class="py-2 px-4 border-b">`apiKey`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown</td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">vk</td>
                    <td class="py-2 px-4 border-b"><a href="https://vk.com/dev/sites" class="text-blue-500">https://vk.com/dev/sites</a></td>
                    <td class="py-2 px-4 border-b">Read and write vk data</td>
                    <td class="py-2 px-4 border-b">`OAuth`</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">weather-api</td>
                    <td class="py-2 px-4 border-b"><a href="https://github.com/robertoduessmann/weather-api" class="text-blue-500">https://github.com/robertoduessmann/weather-api</a></td>
                    <td class="py-2 px-4 border-b">A RESTful free API to check the weather</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">xColors</td>
                    <td class="py-2 px-4 border-b"><a href="https://x-colors.herokuapp.com/" class="text-blue-500">https://x-colors.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Generate & convert colors</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">xMath</td>
                    <td class="py-2 px-4 border-b"><a href="https://x-math.herokuapp.com/" class="text-blue-500">https://x-math.herokuapp.com/</a></td>
                    <td class="py-2 px-4 border-b">Random mathematical expressions</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Yes </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">xeno-canto</td>
                    <td class="py-2 px-4 border-b"><a href="https://xeno-canto.org/explore/api" class="text-blue-500">https://xeno-canto.org/explore/api</a></td>
                    <td class="py-2 px-4 border-b">Bird recordings</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">Unknown </td>
                </tr>

                <tr>
                    <td class="py-2 px-4 border-b">Other</td>
                    <td class="py-2 px-4 border-b">xkcd</td>
                    <td class="py-2 px-4 border-b"><a href="https://xkcd.com/json.html" class="text-blue-500">https://xkcd.com/json.html</a></td>
                    <td class="py-2 px-4 border-b">Retrieve xkcd comics as JSON</td>
                    <td class="py-2 px-4 border-b">No</td>
                    <td class="py-2 px-4 border-b">Yes</td>
                    <td class="py-2 px-4 border-b">No </td>
                </tr>

            </tbody>
        </table>
    </div>
        </div>
    )
}

export default APITable;