import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Noflights = () => {
    return (
        <div className="relative flex items-center justify-center h-[400px] border-t-[2.5rem] border-b-[30px]  border-l-8 border-r-8 border-[#E7F0FF] w-full mt-6">
            <div className="absolute top-[-2rem] left-6 transform -translate-x-1/2  font-bold text-sm">
               Flghts
            </div>
            <div className='flex items-center flex-col'>
                 <p>No Request Yet</p>
                 <Link to='/flight-search'>
                 <Button variant='primary' size='medium' onClick={ () =>  'clicked'}>
                    Add Flight
                </Button>
                 </Link>
                
            </div>
        </div>

    )
}

export default Noflights