import React from 'react'
import Button from './Button'

const NoActivity = () => {
    return (
        <div className="relative  flex items-center justify-center h-[400px] border-t-[2.5rem] border-b-[30px] border-l-8 border-r-8 border-blue-700 w-full mt-6">
            <div className="absolute top-[-2rem] left-6 transform -translate-x-1/2 text-white  font-bold text-sm">
                Activities
            </div>

            <div className='flex items-center flex-col'>
                 <p>No Request Yet</p>
                <Button variant='primary' size='medium' onClick={ () =>  'clicked'}>
                    Add Activities
                </Button>
            </div>
        </div>

    )
}

export default NoActivity