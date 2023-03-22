import { Add, TaskSquare } from 'iconsax-react';
import React from 'react'
import { UserAuth } from '../../Context/authContext'
import Header from '../Header/';
import { Link } from 'react-router-dom'
import gif from '../../Assets/Images/urban-842.gif'

function MainPage() {
  const { user } = UserAuth();

  return (
    <>
      <div className='relative top-0 w-full'>
        <Header />

        <div className='px-5 sm:px-8 py-8'>
          <div className='relative gap-y-4 sm:gap-y-0 flex sm:flex-row flex-col justify-between items-stretch sm:items-center'>
            <div className='flex flex-col gap-y-5'>
              {user?.displayName ? <h1 className='text-3xl sm:text-4xl font-thin text-[#fff] '>Welcome, {user.displayName}</h1> : <h1 className='text-4xl font-thin text-[#fff]'>Welcome, User</h1>}
              <div className='hidden sm:flex flex-col'>
                <div className='flex flex-col'>
                  <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] '>Let's do your best today, <TaskSquare size="23" color="#FDCA40" /> <h3>and get work effectiveness </h3> </h3>
                </div>
                <h3 className='text-md sm:text-xl text-[#B4B4B4]'>for all your team members in the company </h3>
              </div>

              <div className='flex sm:hidden flex-col'>
                <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] '>Let's do your best today, <TaskSquare size="23" color="#FDCA40" /> </h3>
                <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] ' >and get work effectiveness for all <br /> your team members in the company </h3>
              </div>
            </div>



            <Link to='/create-script' className='fixed bottom-6 sm:bottom-auto sm:relative z-40'><button className='mt-4 relative w-max px-[2px] py-[2px] pr-8 rounded-full bg-[#FDCA40]  flex justify-center items-center text-lg gap-x-4 font-medium'><div className='p-4 bg-[#1c1c1c] rounded-full'><Add size="26" color="#fff" /></div> Create Script </button></Link>
          </div>
        </div>


        <div className='flex place-self-end w-full h-max py-8 bg-[#fff]'>
          <img className='z-50' src={gif} alt="" />
        </div>
      </div>
    </>
  )
}

export default MainPage