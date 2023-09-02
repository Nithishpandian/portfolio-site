import React from 'react'

const ServiceCard = ({title, img, content}) => {
  return (
    <div className='group hover:scale-[1.08] duration-500 border border-black group relative overflow-hidden'>
        <div className='duration-300 '>
            <img className='object-cover h-48 grayscale w-96' src={img} alt="" />
            <p className='absolute top-0 flex justify-center bg-[#111111] w-full font-bold text-white lg:text-base xl:text-lg text-lg py-1 px-1 group-hover:bg-[#2e2e2e] duration-300'>
              <span className=''>{title}</span>
            </p>
            <div className={` group-hover:visible invisible duration-500 absolute top-4/4 grayscale-0 mx-4 my-5 `}>
              <p className='group-hover:-translate-y-[9.5rem] lg:group-hover:-translate-y-[10.3rem] xl:group-hover:-translate-y-36 duration-500 bg-[#414141] rounded-lg text-white font-semibold px-2 py-1 xl:px-3 xl:py-2 leading-5'>{content}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ServiceCard