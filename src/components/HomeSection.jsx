import React from 'react'
import Typed from "react-typed"
import Nithish from "./assets/Nithish.jpg"
import whiteImg from "./assets/whiteImg.jpg"

import { useInView } from 'react-intersection-observer';

const HomeSection = () => {

    const { ref: myRef1, inView: myElementIsVisible1 } = useInView({
        threshold:0.3,
    });

  return (
    <div className={`duration-1000 ${myElementIsVisible1?" translate-x-0 opacity-100 ":"translate-x-0 opacity-0"}`} ref={myRef1}>
    <div id='Home' className="flex flex-col px-12 pt-20 text-center sm:px-20 md:flex md:flex-row sm:justify-between md:justify-around md:px-20 lg:px-40 xl:px-80 2xl:px-96 ">
        <div className=''>
            <div className='relative flex justify-center group'>
                <img
                    className="absolute z-10 border-8 border-white rounded shadow-lg  w-72 grayscale shadow-slate-500"
                    src={Nithish} alt="" 
                />
                <img
                    className="duration-500 border-8 border-white rounded shadow-lg  group-hover:-rotate-12 w-72 shadow-slate-800 rotate-12"
                    src={whiteImg}
                    alt=""
                />
                
            </div>
            <div className='flex justify-center text-2xl  mt-11 md:text-3xl'>
                <a className='mx-2' href="https://github.com/Nithishpandian" target="_blank" rel="noreferrer">
                    <button className='duration-300  hover:opacity-80'><ion-icon name="logo-github"></ion-icon></button>
                </a>
                <a className='mx-2' href="https://www.linkedin.com/in/nithish-p-ba2785200/" target='_blank' rel='noreferrer'>
                    <button className='duration-300  hover:opacity-80'><ion-icon name="logo-linkedin"></ion-icon></button>
                </a>
                <a className='mx-2' href="mailto:nithishpandiyan75@gmail.com" target='_blank' rel='noreferrer'>
                    <button className='duration-300  hover:opacity-80'><ion-icon name="mail"></ion-icon></button>
                </a>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
            <h1 className='mt-5 mb-3 text-5xl font-extrabold text-left  sm:text-6xl text-stone-600'><span>H</span><span className='font-londrina'>i !</span> </h1>
            <h1 className='mb-1 text-5xl font-extrabold text-center  sm:text-6xl text-stone-700'>
                <span className=' font-londrina' >I'</span>m Nith<span className=' font-londrina'>i</span>sh
            </h1>
            <h3 className='ml-1 text-2xl font-bold text-left ' >I can Cook {" "}
                <Typed
                    className=' text-[#bb7a4c]'
                    strings={[
                        "Websites",
                        "MongoDB",
                        "Express.js",
                        "React.js",
                        "Node.js"
                    ]}
                    typeSpeed={140}
                    backSpeed={100}
                    loop
                />
            </h3>
            <div className='mt-5 ml-1 text-center md:text-left '>
                <a href="#Contact">
                    <button className='group overflow-hidden relative font-sourceCodePro font-semibold bg-[#df8a4eb4] py-1.5 px-3 rounded text-[#ffffff]' id='#Contact'>
                        <div className="duration-300 group-hover:-translate-y-8 ">CONTACT</div>
                        <div className="absolute invisible duration-300  group-hover:-translate-y-6 group-hover:visible">CONTACT</div>
                    </button>
                </a>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeSection