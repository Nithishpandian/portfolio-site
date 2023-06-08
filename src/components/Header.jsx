import React, { useState } from 'react'
import Nithish from "./assets/logo.png"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='md:flex justify-between align-middle bg-[#fcfcfc] md:py-3 md:px-6 z-50 relative '>

        <div className='flex justify-between z-0 bg-[#fcfcfc] px-5 py-2 md:px-0 md:py-0'>
          
          <img className='w-16 md:ml-10 md:mt-4 md:w-1/4' src={Nithish} alt="" />

          <div onClick={()=>setOpen(!open)} className={` z-20 cursor-pointer md:hidden text-3xl flex justify-center align-middle mt-2 ${open?' text-[#e4965fc0] duration-500':' text-black duration-500'}`}>
            <ion-icon name={open?"close":"menu"}></ion-icon>
          </div>
        </div>

        <ul id='menu-list' className={` -z-10 grid grid-cols-3 pt-8 text-lg gap-y-5 place-content-center md:p-3 md:flex md:flex-row md:items-center absolute left-0 w-full bg-[#fcfcfc] md:static md:w-auto pb-7 md:border-none rounded-b-xl md:pl-0 md:z-auto transition-all duration-500 ease-in ${open ? ' top-14 opacity-100 ':' -top-80'} opacity-0 md:opacity-100 md:font-thin md:text-xl `}>

          <li>
            <a href="#Home" className=' flex flex-col justify-center items-center duration-300 md:ml-8 hover:text-[#df8a4eb4] md:my-0'>
              <span className='flex justify-center mr-2 md:hidden'><ion-icon name="home"></ion-icon></span> Home
            </a>
          </li>
          <li>
            <a href="#About" className='flex flex-col justify-center items-center duration-300 md:ml-8 hover:text-[#df8a4eb4] md:my-0'>
              <span className='flex justify-center mr-2 md:hidden'><ion-icon name="information-circle"></ion-icon></span> About
            </a>
          </li>
          <li>
            <a href="#Skill" className='flex flex-col justify-center items-center duration-300 md:ml-8 hover:text-[#df8a4eb4] md:my-0'>
              <span className='flex justify-center mr-2 md:hidden'><ion-icon name="book"></ion-icon></span> Skill
            </a>
          </li>
          <li>
            <a href="#Project" className='flex flex-col justify-center items-center duration-300 md:ml-8 hover:text-[#df8a4eb4] md:my-0'>
              <span className='flex justify-center mr-2 md:hidden'><ion-icon name="browsers"></ion-icon></span> Project
            </a>
          </li>
          <li>
            <a href="#Services" className='flex flex-col justify-center items-center duration-300 md:ml-8 hover:text-[#df8a4eb4] md:my-0'>
              <span className='flex justify-center mr-2 md:hidden'><ion-icon name="mail"></ion-icon></span> Services
            </a>
          </li>
          <li>
            <a href="#Contact" className='flex flex-col justify-center items-center duration-300 md:ml-8 hover:text-[#df8a4eb4] md:my-0'>
              <span className='flex justify-center mr-2 md:hidden'><ion-icon name="chatbox-ellipses"></ion-icon></span> Contact
            </a>
          </li>
        </ul>

      </header>
    </>
  )
}

export default Header