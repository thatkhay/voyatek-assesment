import React, { useState, useEffect } from 'react';
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

type Flight = {
    id: string;
    name: string;
    logoUrl: string;
    departure: string;
    arrival: string;
    minPrice: { units: number; currencyCode: string };
    selected: boolean;
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

    const [results, setResults] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedFlights, setSelectedFlights] = useState<Flight[]>([]);
    const [airline , setAirline] = useState<any[]>([])
    const [fligts , setFlights] = useState<any[]>([])
    // const [selectedFlights, setSelectedFlights] = useState<{ [key: string]: boolean }>({});

    // useEffect(() => {
    //     // Retrieve selected flights from localStorage when the component mounts
    //     const savedSelectedFlights = localStorage.getItem('selectedFlights');
    //     if (savedSelectedFlights) {
    //         setSelectedFlights(JSON.parse(savedSelectedFlights));
    //     }
    // }, []);

    // useEffect(() => {
    //     // Store selected flights in localStorage whenever the selectedFlights state changes
    //     if (Object.keys(selectedFlights).length > 0) {
    //         localStorage.setItem('selectedFlights', JSON.stringify(selectedFlights));
    //     }
    // }, [selectedFlights]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: name === 'adults' || name === 'children' || name === 'pageNo' ? Number(value) : value,
        }));
    };

const handleSearch = async () => {
    setLoading(true);
    setError(''); // Clear previous errors

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}`, {
            headers: {
                'X-Rapidapi-Key': process.env.REACT_APP_API_KEY!,
                'X-Rapidapi-Host': 'booking-com15.p.rapidapi.com',
            },
            params: searchParams,
        });

        const resultData = response.data;
        console.log(resultData); // Debugging

        if (resultData?.data?.aggregation?.airlines && resultData?.data?.aggregation?.flightTimes?.[0]) {
            const { airlines } = resultData.data.aggregation;
            const { flightTimes } = resultData.data.aggregation;

            const formattedFlights = airlines.map((airline: any, ind: number) => ({
                ...airline,
                arrival: flightTimes[0]?.arrival?.[ind] || null,  // Safe access with fallback
                departure: flightTimes[0]?.departure?.[ind] || null,  // Safe access with fallback
            }));
            
            console.log(formattedFlights); // Debugging
            setFlights(formattedFlights);

        } else {
            setError('No flights found. Try changing your search criteria.');
        }
    } catch (error: any) {
        setError(`Error fetching flight data: ${error.message}`);
    } finally {
        setLoading(false);
    }
};





    const handleFlightSelect = (id: number) => {
       
    };
    // const isFlightSelected = (flight: Flight) => !!selectedFlights[flight.id];

    console.log( fligts);
    console.log( airline);
  

    return (
        <div className="w-[65%] mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Flight Search</h1>

            {/* Search form inputs */}
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
                ) :
                 fligts.length > 0 ? (
                    fligts.map((flight, ind) => (
                        <div
                            key={ind}
                            onClick={() => handleFlightSelect(flight)}
                            className={`border p-4 rounded-lg mb-4 shadow-md cursor-pointer 
                               `
                            }
                        >
                            <div className="flex items-center space-x-4">
                                <img src={flight?.logoUrl} alt="logo" className="w-12 h-12 rounded-full" />
                                <div className="text-sm">
                                    <p className="font-semibold text-lg">{flight?.name}</p>
                                    <p className="text-gray-600">
                                        {/* {flight?.depature?.end} - {flight?.arrival?.start} */}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-2">
                                Price: {flight?.minPrice?.units} {flight?.minPrice?.currencyCode}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No flights found. Try changing your search criteria.</p>
                )}
            </div>







{/* 
            {Object.keys(selectedFlights).length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Selected Flights</h3>
                    {Object.keys(selectedFlights)
                        .filter((flightId: any) => selectedFlights[flightId])
                        .map((flightId) => {
                            const flight = results.find((f) => f.id === flightId);
                            return (
                                <div
                                    key={flightId}
                                    className="border p-4 rounded-lg mb-4 shadow-md bg-blue-100"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img src={flight?.logoUrl} alt="logo" className="w-12 h-12 rounded-full" />
                                        <div className="text-sm">
                                            <p className="font-semibold text-lg">{flight?.name}</p>
                                            <p className="text-gray-600">
                                                {flight?.departure} - {flight?.arrival}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-2">
                                        Price: {flight?.minPrice?.units} {flight?.minPrice?.currencyCode}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            )} */}
        </div>
    );
};

export default FlightSearch;
