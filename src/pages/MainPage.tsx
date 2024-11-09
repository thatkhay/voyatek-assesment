import React from 'react'
import SideBar from '../components/SideBar'
import banner from '../images/banner.svg'
import leftArrow from '../images/ArrowLeft.svg'
import calender from '../images/CalendarBlank.svg'
import rightArrow from '../images/ArrowRight.svg'
import icon from '../images/UserPlus.svg'
import menu from '../images/DotsThree.svg'
import one from '../images/one.svg'
import Button from '../components/Button'
import Noflights from '../components/Noflights'
import NoHotels from '../components/NoHotels'
import NoActivity from '../components/NoActivity'
const MainPage = () => {


  const handleClick = () => {
    return 'clicked'
  }

  return (
    <div className='bg-[#F0F2F5] flex items-start p-6 gap-6'>
      <SideBar />
      <div className=' w-full p-6 bg-white'>
        <div className="relative w-full">
          <img src={banner} alt="banner" className="w-full" />
          <div className='p-4 bg-transparent flex items-center justify-center absolute top-0 left-0 m-4 bg-[#E7F0FF]'>
            <img
              src={leftArrow}
              alt="leftArrow"
              className=" w-5 h-5 "
            />
          </div>

        </div>

        <div className=' w-full flex justify-between mt-4  '>
          <div className='flex items-center bg-[#FEF4E6] p-2 h-5 justify-between w-[20%]'>
            <img src={calender} alt="calender" />
            <p className=' text-[#7A4504] text-sm'>21 March 2024</p>
            <img src={rightArrow} alt="rightArrow " />
            <p className=' text-[#7A4504] text-sm'>21 April 2024</p>
          </div>
          <div className='flex items-center'>
            <div className=' h-[46px] w-[160px] bg-[#E7F0FF] rounded-sm flex items-center justify-center'>
              <img src={icon} alt="icon" />
            </div>
            <img src={menu} alt="menu" />
          </div>
        </div>

        <section className=' flex flex-col items-start '>
          <p className=' font-bold text-[1.5rem] '>Bahamas Family Trip</p>
          <div className='  w-full flex items-start'>
          <div className='  w-full '>
            <div className=' flex justify-between w-[80%] '>
              <div className=' text-sm flex gap-1  text-[#647995] '>
                <p >New York,  United States of America </p> <span>|</span> <span>Solo Trip</span>
              </div>


            </div>
            <div className=' flex items-center gap-1 mt-3'>
              <div className='p-3 bg-[#000031] text-white rounded-md'>
                <p className='my-2'>Activities</p>
                <p className='mb-8'>Build, personalize, and optimize your <br />itineraries with our trip planner.</p>
                <div className=' w-full flex items-center justify-center'>
                  <Button variant='primary' size='large' onClick={handleClick}>
                    Add Activities
                  </Button>
                </div>
              </div>
              <div className='p-3 bg-[#E7F0FF] rounded-md' >
                <p className='my-2'>Hotels</p>
                <p className='mb-8'>Build, personalize, and optimize your <br /> itineraries with our trip planner.</p>
                <div className=' w-full flex items-center justify-center'>
                  <Button variant='primary' size='large' onClick={handleClick}>
                    Add Hotels
                  </Button>
                </div>

              </div>
              <div className='p-3 bg-[#0D6EFD] text-white rounded-md'>
                <p className='my-2'>Flights</p>
                <p className='mb-8'>Build, personalize, and optimize your <br /> itineraries with our trip planner.</p>
                <div className=' flex items-center justify-center'>
                  <Button variant='secondary' size='large' onClick={handleClick}>
                    Add Flights
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
          <img src={one} alt="one" className='mr-7' />
          </div>
        </section>
        <section className=' flex flex-col'>
          <div className=' flex flex-col items-start mt-12'>
            <p className=' text-xl font-bold text-start'>Trip itineraries</p>
            <p className=' text-sm text-start'>Your trip itineraries are placed here</p>
          </div>
<Noflights/>
<NoHotels/>
<NoActivity/>
        </section>

      </div>
    </div>
  )
}

export default MainPage