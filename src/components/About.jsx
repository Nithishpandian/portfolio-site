import React from 'react'
import Typed from "react-typed"
import Nithish from "./assets/myPhoto_landscape.jpeg"

import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({
    threshold:0.1,
  });
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    threshold:0.1,
  });
  return (
    <div id='About' className='px-10 sm:px-32 mt-10 md:mt-6 md:px-44 lg:px-16 xl:px-36 2xl:px-48 md:pt-16'>
        <h1 className='flex items-center justify-center pt-6 pb-1 text-5xl font-bold heading-about text-stone-800 md:pb-3 xl:pb-8'>About <span><ion-icon name="leaf-sharp"></ion-icon></span> </h1>
        <div className='grid items-center justify-center grid-rows-about-sm md:grid-rows-about-md lg:grid-rows-none lg:grid-cols-about xl:grid-cols-about gap-x-4 gap-y-3'>
          
          <div className={`duration-1000 ${myElementIsVisible1?" translate-x-0 opacity-100 ":"-translate-x-14 opacity-0"}`} ref={myRef1}>
                <img src={Nithish} className='rounded-md  lg:h-96 xl:h-88 2xl:h-88 grayscale' alt="" />
          </div>

          <div className={`duration-1000 ${myElementIsVisible2?" translate-x-0 opacity-100 ":"translate-x-14 opacity-0"}`} ref={myRef2}>
            <div className={`bg-[url('https://i.pinimg.com/originals/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg')] rounded-md p-2 sm:p-4 lg:h-96 xl:h-88 2xl:h-88 text-[12.7px] md:text-base`}>
              <div className='flex justify-end'>
                <p className='flex px-2 py-1 my-2 font-medium text-white rounded-md bg-emerald-900'>Tell me About Yourself 
                  <div className='flex items-end'>
                    <span className=' text-xs px-1 text-[#667781] font-semibold'>7:30</span>
                    <span className='flex  text-cyan-400'><ion-icon name="checkmark-done"></ion-icon></span>
                  </div>
                </p>
              </div>
              <div className='flex justify-between bg-[#1c242c] rounded-md text-white px-1.5 py-1 my-1 font-medium text-[12.7px] sm:text-base'>
                <Typed
                      className='text-white '
                      strings={[
                          "I'm a proficient MERN stack developer."
                      ]}
                      typeSpeed={180}
                      backSpeed={180}
                      loop
                  />
                  <div className='flex items-end'>
                    <span className=' text-xs px-1 text-[#667781] font-semibold'>7:30</span>
                  </div>
              </div>
              <div className='flex flex-col bg-[#1c242c] rounded-md text-white px-2 py-1 my-1 font-medium'>
                <p>I am well-versed in utilizing MongoDB, Express.js, React.js, and Node.js to craft visually appealing, functionally sound, and highly performant web applications. With a keen eye for detail and a predilection for solving complex problems, I am adept at translating business requirements into intuitive user experiences. I am highly efficient and possess a strong work ethic, and am committed to producing high-quality work in a timely manner.</p>
                <div className='flex justify-end'>
                  <span className=' text-xs px-1 text-[#667781] font-semibold'>7:30</span>
                </div>
              </div>
              <div className='grid gap-3 pt-3 grid-cols-msgInput'>
                <input className=' bg-[#202830e1] rounded-3xl px-4 outline-none text-white font-medium' type="text" placeholder='You are Hired!' />
                <button className='flex items-center justify-center px-3 py-3 text-xl text-white rounded-full  bg-emerald-900 hover:bg-emerald-950 w-fit'><ion-icon name="send"></ion-icon></button>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About
