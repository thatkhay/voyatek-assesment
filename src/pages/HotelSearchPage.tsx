import React from 'react'
import FlightSearch from '../components/FlightSearch'
import SideBar from '../components/SideBar'

const HotelSearchPage = () => {
    return (
        <div className=' flex bg-[#F0F2F5] w-full p-6'>
            <SideBar />
            <FlightSearch />

        </div>
    )
}

export default HotelSearchPage