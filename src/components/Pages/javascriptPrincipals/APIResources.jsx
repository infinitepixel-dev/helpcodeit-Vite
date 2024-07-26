import React, { useState, useEffect } from "react";
import APICard from "./APICard";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

function APIResources() {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const URL = "https://backend.michaelvarnell.com:3005/api/list";

    useEffect(() => {
        getData({ page: 1, limit });
    }, [limit]);

    const getData = async ({ page, limit }) => {
        const response = await fetch(`${URL}?page=${page}&limit=${limit}`);
        const result = await response.json();
        setData(result);
        setTotalPages(result.totalPages);
    };

    const onPageChange = (newPage) => {
        setPage(newPage);
        getData({ page: newPage, limit });
        window.scrollTo(0, 0);
    };

    return (
        <div className="container mb-24">
            {data ? (
                <>
                <h1 className="text-5xl font-semibold text-center mt-5">API Resources</h1>
                <h2 className="text-xl font-semibold text-center mb-10">A list of APIs to help you build your next project</h2>
                    <APICard data={data} />
                    <form className="flex justify-center mb-4">
                        <label>
                            Show per page: {" "}
                            <select className="text-black ms-2" value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </label>
                    </form>
                    <div className="flex items-center justify-center space-x-2 my-4">
                        <button
                            onClick={() => onPageChange(1)}
                            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
                        >
                            <ChevronsLeft className="w-4 h-4 mr-1" />
                            First
                        </button>
                        <button
                            onClick={() => onPageChange(page - 1)}
                            disabled={page === 1}
                            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Previous
                        </button>
                        <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
                            Page {page} of {totalPages}
                        </p>
                        <button
                            onClick={() => onPageChange(page + 1)}
                            disabled={page === totalPages}
                            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                        <button
                            onClick={() => onPageChange(totalPages)}
                            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
                        >
                            Last
                            <ChevronsRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default APIResources;