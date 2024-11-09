import React from 'react';

export interface Flight {
    id: string;
    logoUrl: string;
    name: string;
    departure: {
        end: string;
    };
    arrival: {
        end: string;
    };
    minPrice: {
        units: number;
        currencyCode: string;
    };
}

interface FlightItineraryProps {
    flight: Flight;
    onSelect: (flight: Flight) => void;
    isSelected: boolean;
}

const FlightItinerary: React.FC<FlightItineraryProps> = ({ flight, onSelect, isSelected }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold">Flight Itinerary</h2>
            <div className="flex items-center space-x-4">
                <img src={flight.logoUrl} alt="Logo" className="w-12 h-12 rounded-full" />
                <div className="text-sm">
                    <p className="font-semibold text-lg">{flight.name}</p>
                    <p className="text-gray-600">Departure: {flight.departure?.end}</p>
                    <p className="text-gray-600">Arrival: {flight.arrival?.end}</p>
                    <p className="text-gray-600">Price: {flight.minPrice?.units} {flight.minPrice?.currencyCode}</p>
                </div>
            </div>
            <button
                onClick={() => onSelect(flight)}
                className={`mt-4 py-2 px-4 rounded-md ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
                {isSelected ? 'Selected' : 'Select Flight'}
            </button>

        </div>
    );
};

export default FlightItinerary;
