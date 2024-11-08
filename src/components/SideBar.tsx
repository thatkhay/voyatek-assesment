import React from 'react'
import activities from '../images/RoadHorizon.svg'
import hotel from '../images/Buildings.svg'
import plane from '../images/AirplaneTilt.svg'
import student from '../images/Student.svg'
import visa from '../images/NewspaperClipping.svg'
import Immigration from '../images/SuitcaseRolling.svg'
import arrow from '../images/CaretDown.svg'
import medic from '../images/FirstAidKit.svg'
import vacation from '../images/Package.svg'

const SideBar = () => {
  return (
    <div className=' bg-white border w-[20%] flex flex-col items-start p-6'>
      <ul className='  flex flex-col items-start justify-evenly gap-10'>
        <li className='flex  items-center gap-1'>
          <img src={activities} alt="Activities" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Activities</p>
        </li>
        <li className='flex  items-center gap-1'>
          <img src={hotel} alt="Hotels" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Hotels</p>
        </li>
        <li className='flex  items-center gap-1'>
          <img src={plane} alt="Flights" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Flights</p>
        </li>
        <li className='flex  items-center gap-1'>
          <img src={student} alt="Study" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Study</p>
        </li>
        <li className='flex  items-center gap-1'>
          <img src={visa} alt="Visa" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Visa</p>
        </li>
        <li className='flex  items-center gap-1'>
          <img src={Immigration} alt="Immigration" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Immigration</p>
        </li>
        <li className='flex  items-center gap-1'>
          <img src={medic} alt="Medical" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Medical</p>
        </li>
        <li className='flex  items-center gap-1'>
          <img src={vacation} alt="Vacation Packages" className=' h-[18px] w-[25px]' />
          <p className=' text-sm'>Vacation Packages</p>
        </li>
        
        
      </ul>

      <div className=' flex items-center my-16 gap-3  bg-[#F0F2F5] rounded-sm p-3'>
        <div className=' flex items-center text-sm justify-center bg-blue-800 rounded-sm text-white h-[32px] w-[32px]'>
          GO
        </div>
        <p className='text-sm'>Personal Account</p>
        <div className='flex items-center flex-col gap-6 '>
          <img src={arrow} alt="" className='h-[1px] w-[1px]'/>
          <img src={arrow} alt=""  className='h-[1px] w-[1px]'/>
        </div>
      </div>

    </div>
  )
}

export default SideBar