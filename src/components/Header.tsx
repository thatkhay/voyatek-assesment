import React from 'react';
import logo from '../images/GO ICON WHITE 1.svg'
import search from '../images/MagnifyingGlass.svg'
import home from '../images/House.svg'
import dashboard from '../images/ChartPieSlice.svg'
import wallet from '../images/Wallet.svg'
import list from '../images/ListChecks.svg'
import hand from '../images/HandCoins.svg'
import bell from '../images/Bell.svg'
import baseket from '../images/Basket.svg'
import create from '../images/PlusSquare.svg'
import Button from './Button';
const Header: React.FC = () => {


    const handleClick = () => {
        return 'clicked'
    }


    return (
        <header className=" flex items-center p-4  justify-between">
            <div className=' flex items-center gap-8 px-4  w-[40%] justify-start'>
                <div className=' bg-blue-600 flex items-center justify-center h-[40px] w-[42px] rounded-md '>
                    <img src={logo} alt="logo" />
                </div>

                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className=" h-[40px] pl-8 pr-2 w-[400px] bg-[#F0F2F5] rounded-sm text-black"
                    />
                    <img
                        src={search}
                        alt="search"
                        className="absolute left-2 h-4 w-4"
                    />
                </div>

            </div>

            <div className=' flex items-center   w-[60%] '>
                <div className=' flex items-center justify-between  w-[50%] px-4 p-2   '>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={home} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={dashboard} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={wallet} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={list} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={hand} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                </div>

                <span className='text-[2.5rem] text-[#647995] px-4 mt-[-1rem]'>|</span>

                <div className=' flex items-center justify-between  w-[50%] px-4 p-2   '>
                    <Button variant='primary' size='small' onClick={handleClick}>
                        Subscribe
                    </Button>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={bell} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={baseket} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                    <div className='items-center flex flex-col  cursor-pointer'>
                        <img src={create} alt="" className=' h-[24px] w-[25px]  hover:text-black' />
                        <p className=' text-sm text-[#647995]  hover:text-black'>Home</p>
                    </div>
                    <div className='items-center flex  cursor-pointer'>
                        <img src={create} alt="" className=' h-[24px] w-[25px] cursor-pointer ' />
                        <img src={create} alt="" className=' h-[24px] w-[25px] cursor-pointer' />

                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
