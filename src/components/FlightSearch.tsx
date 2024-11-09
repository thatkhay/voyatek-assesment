import React, { useState } from 'react';
import axios from 'axios';

type FlightSearchParams = {
    fromId: string;
    toId: string;
    departDate: string;
    returnDate?: string;
    pageNo?: number;
    adults?: number;
    children?: number;
    sort?: 'BEST' | 'CHEAPEST' | 'FASTEST';
    cabinClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';
    currency_code?: string;
};

const FlightSearch: React.FC = () => {
    const [searchParams, setSearchParams] = useState<FlightSearchParams>({
        fromId: 'BOM.AIRPORT',
        toId: 'DEL.AIRPORT',
        departDate: new Date().toISOString().split('T')[0],
        pageNo: 1,
        adults: 1,
        children: 0,
        sort: 'BEST',
        cabinClass: 'ECONOMY',
        currency_code: 'AED',
    });

    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: name === 'adults' || name === 'children' || name === 'pageNo' ? Number(value) : value,
        }));
    };

    const handleSearch = async () => {
        setLoading(true);
        setError('');

        try {
            // Primary API call
            const primaryResponse = await axios.get(`${process.env.REACT_APP_API_URL}`, {
                headers: {
                    'X-Rapidapi-Key': process.env.REACT_APP_API_KEY!,
                    'X-Rapidapi-Host': 'booking-com15.p.rapidapi.com',
                },
                params: searchParams,
            });

            const primaryResult = primaryResponse.data;
            const airlines = primaryResult.data?.aggregation?.airlines || [];

            // Secondary API call for additional flight times
            const secondaryResponse = await axios.get(`${process.env.REACT_APP_API_URL}`, {
                headers: {
                    'X-Rapidapi-Key': process.env.REACT_APP_API_KEY!,
                    'X-Rapidapi-Host': 'booking-com15.p.rapidapi.com',
                },
                params: {
                    from: searchParams.fromId,
                    to: searchParams.toId,
                    departDate: searchParams.departDate,
                },
            });

            const secondaryResult = secondaryResponse.data;
            const flights = secondaryResult.flightTimes || [];

            // Combine results from both APIs
            setResults(
                airlines.map((airline: any, index: number) => ({
                    ...airline,
                    departure: flights[index]?.departure || '',
                    arrival: flights[index]?.arrival || '',
                }))
            );

            if (!airlines.length) {
                setError('No flights found for the selected criteria.');
            }
        } catch (error: any) {
            setError(`Error fetching flight data: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-[65%] mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Flight Search</h1>
            
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
                <input
                    type="text"
                    name="fromId"
                    placeholder="From (e.g., BOM.AIRPORT)"
                    value={searchParams.fromId}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="toId"
                    placeholder="To (e.g., DEL.AIRPORT)"
                    value={searchParams.toId}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="date"
                    name="departDate"
                    value={searchParams.departDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="date"
                    name="returnDate"
                    value={searchParams.returnDate || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    name="adults"
                    placeholder="Adults"
                    value={searchParams.adults}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={1}
                />
                <input
                    type="number"
                    name="children"
                    placeholder="Children"
                    value={searchParams.children}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={0}
                />
                <select
                    name="sort"
                    value={searchParams.sort}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="BEST">Best</option>
                    <option value="CHEAPEST">Cheapest</option>
                    <option value="FASTEST">Fastest</option>
                </select>
                <select
                    name="cabinClass"
                    value={searchParams.cabinClass}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="ECONOMY">Economy</option>
                    <option value="PREMIUM_ECONOMY">Premium Economy</option>
                    <option value="BUSINESS">Business</option>
                    <option value="FIRST">First</option>
                </select>
            </div>

            <div className="text-center">
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full md:w-auto py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {loading ? 'Searching...' : 'Search Flights'}
                </button>
            </div>

            {error && <p className="mt-4 text-center text-red-600">{error}</p>}

            <div className="mt-6">
                {loading ? (
                    <div className="flex justify-center items-center space-x-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
                        <span>Loading...</span>
                    </div>
                ) : results.length > 0 ? (
                    results.map((flight, index) => (
                        <div key={index} className="border p-4 rounded-lg mb-4 bg-gray-50 shadow-md">
                            <div className="flex items-center space-x-4">
                                <img src={flight.logoUrl} alt="logo" className="w-12 h-12 rounded-full" />
                                <div className="text-sm">
                                    <p className="font-semibold text-lg">{flight.name}</p>
                                    <p className="text-gray-600">{flight.departure.end} - {flight.arrival.end}</p>
                                </div>
                            </div>
                            <p className="mt-2">Price: {flight.minPrice?.units} {flight.minPrice?.currencyCode}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p className="mt-4 text-center text-gray-600">No flights found</p>
                )}
            </div>
        </div>
    );
};

export default FlightSearch;
