import React from 'react'

const ProjectCard = ({title, img, liveDemo, githubCode}) => {
  return (
    <div className='group grid grid-rows-2 md:grid-rows-project-md bg-[#ffffff] shadow-lg shadow-[#bdbdbd] w-fit rounded-xl '>
        <div className='overflow-hidden  rounded-tl-xl'>
            <img className='group-hover:scale-[1.15] group-hover:grayscale duration-300 w-72 md:w-80 rounded-tl-xl rounded-tr-xl' src={img} alt="" />
        </div>
        <div className='pb-2  md:pt-3 lg:pb-4'>
            <h1 className='text-xl font-bold text-center'>{title}</h1>
            <div className=' px-7'>
                <hr />
            </div>
            <div className='flex flex-col items-center justify-center my-3 gap-y-2'>
                <a href={`${liveDemo}`} target='_blank' rel="noreferrer">
                    <button className='group/button overflow-hidden relative font-sourceCodePro font-semibold bg-[#363738] border border-[#ffffff] py-1.5 px-3 rounded-lg text-[#ffffff]' id='#Contact'>
                        <div className="duration-300 group-hover/button:-translate-y-8 ">Live Demo</div>
                        <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Live Demo</div>
                    </button>
                </a>
                <a href={`${githubCode}`} target='_blank' rel="noreferrer">
                    <button className='group/button overflow-hidden relative font-sourceCodePro font-semibold bg-[#161717] py-1.5 px-3 rounded-lg text-[#ffffff]' id='#Contact'>
                        <div className="duration-300 group-hover/button:-translate-y-8 ">Github Code</div>
                        <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Github Code</div>
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard