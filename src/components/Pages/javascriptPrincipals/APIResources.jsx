import { useState, useEffect } from 'react'
import APICard from './APICard'
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react'
import { Helmet } from 'react-helmet'

function APIResources() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)
    const [skip, setSkip] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const URL = 'https://backend.michaelvarnell.com:3005/api/list'

    useEffect(() => {
        getData({ page: 1, limit })
    }, [limit])

    const getData = async ({ page, limit }) => {
        const response = await fetch(`${URL}?page=${page}&limit=${limit}`)
        const result = await response.json()
        setData(result.data)
        setTotalPages(result.totalPages)
    }

    const onPageChange = (newPage) => {
        setPage(newPage)
        getData({ page: newPage, limit })
        window.scrollTo(0, 0)
    }

    const skipToPage = (e) => {
        e.preventDefault()
        console.log('skip', skip)
        let newPage = Number(skip)
        if (newPage > totalPages || newPage < 1) {
            alert('Invalid page number')
            return
        }
        setPage(newPage)
        getData({ page: newPage, limit })
        window.scrollTo(0, 0)
    }

    const searchURL = 'https://backend.michaelvarnell.com:3005/api/search'
    const submitSearch = async (e) => {
        e.preventDefault()
        console.log('searchTerm', searchTerm)
        const response = await fetch(`${searchURL}?search=${searchTerm}`)
        const result = await response.json()
        setData(result)
        setTotalPages(result.totalPages)
    }

    return (
        <div className="container mb-24">
            {data ? (
                <>
                    <Helmet>
                        <title>API Resources Database</title>
                        <meta
                            name="description"
                            content="A list of APIs to help you build your next project"
                        />
                        <meta
                            name="keywords"
                            content="API, APIs, API Resources, API List, API Directory, Free APIs, Public APIs, API Database"
                        />
                    </Helmet>
                    <h1 className="mt-5 text-center text-5xl font-semibold">
                        API Resources Database
                    </h1>
                    <h2 className="mb-10 text-center text-xl font-semibold">
                        A list of APIs to help you build your next project
                    </h2>
                    <p>
                        These are compiled from several lists we have found
                        around the internet. The information in some cases might
                        be out of date. If you find one that is offline, or no
                        longer accurate feel free to inform us with this simple
                        google form:{' '}
                        <a
                            href="https://forms.gle/CAFh21NCgeADNRsZ9"
                            className="text-blue-500 hover:font-semibold hover:text-blue-700 hover:underline"
                            target="_blank"
                            referrerPolicy="no-referrer"
                            rel="noreferrer"
                        >
                            API FORM
                        </a>{' '}
                    </p>{' '}
                    <br />
                    <p className="italic">
                        Note: Some APIs may require an API key, or have usage
                        limits. Please check the API documentation for more
                        information. If the API&apos;s don&apos;t show up, you
                        can email us at michaelvarnell@icloud.com to let us
                        know, and I will restart the server.
                    </p>
                    <p>
                        If you are a developer and have a list of API&apos;s
                        that you want to add to the database, feel free to also
                        email me with a CSV of the API&apos;s and we will
                        compile them into the database!
                    </p>
                    <hr className="mb-10 border border-gray-200" />
                    <div className="my-4 flex items-center justify-center space-x-2">
                        <form className="flex items-center justify-center space-x-2">
                            <label
                                className="text-lg font-semibold"
                                htmlFor="search"
                            >
                                Search:{' '}
                            </label>
                            <input
                                type="text"
                                id="search"
                                placeholder="Search for APIs"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="rounded-md border border-gray-300 px-2 py-1 text-black"
                            />
                            <button
                                className="rounded-md bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600"
                                onClick={(e) => submitSearch(e)}
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <APICard data={data} />
                    <form className="mb-4 flex justify-center">
                        <label>
                            Show per page:{' '}
                            <select
                                className="ms-2 text-black"
                                value={limit}
                                onChange={(e) =>
                                    setLimit(Number(e.target.value))
                                }
                            >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </label>
                        <label className="ms-4">
                            Skip to page:{' '}
                            <input
                                type="text"
                                placeholder={page}
                                onChange={(e) => setSkip(e.target.value)}
                                className="ms-2 w-14 rounded-md border border-gray-300 text-black"
                            />
                            <button
                                onClick={(e) => skipToPage(e)}
                                className="ms-2 rounded-md bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600"
                            >
                                Go
                            </button>
                        </label>
                    </form>
                    <div className="my-4 flex items-center justify-center space-x-2">
                        <button
                            onClick={() => onPageChange(1)}
                            className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <ChevronsLeft className="mr-1 h-4 w-4" />
                            First
                        </button>
                        <button
                            onClick={() => onPageChange(page - 1)}
                            disabled={page === 1}
                            className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <ChevronLeft className="mr-1 h-4 w-4" />
                            Previous
                        </button>
                        <p className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                            Page {page} of {totalPages}
                        </p>
                        <button
                            onClick={() => onPageChange(page + 1)}
                            disabled={page === totalPages}
                            className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Next
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
                        <button
                            onClick={() => onPageChange(totalPages)}
                            className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Last
                            <ChevronsRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default APIResources
