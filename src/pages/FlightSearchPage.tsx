import React from 'react'
import FlightSearch from '../components/FlightSearch'
import SideBar from '../components/SideBar'

const FlightSearchPage = () => {
    return (
        <div className=' flex bg-[#F0F2F5] w-full p-6 items-start'>
            <SideBar />
            <FlightSearch />

        </div>
    )
}

export default FlightSearchPage