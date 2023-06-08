

function SkillCard({domain,image1, language1,margin1,image2, language2,image3, language3,percentageHtml, percentageCss, percentageJs,percentageNode,percentageExpress,percentageMongoDB,percentageReactjs, percentageTailwind,percentageGraphql,percentageNpm,percentageGithub,percentageWebSecurity, padding }) {
  
  return (  
    <div className={`flex justify-center `}>
        <div className=' shadow-lg shadow-gray-500 w-fit py-5 px-7 rounded-lg lg:w-98 duration-500 hover:scale-[1.03]'>
        <h1 className='my-2 text-lg font-bold'>{domain}</h1>
        <div>
          <div className={`grid grid-cols-skill-card gap-x-3 ${padding?"mt-2 mb-1.5":"my-2"}`}>
            <img className={` w-7 mt-1 ${margin1}`} src={image1} alt="" />
            <div>
              <p>{language1}</p>
              <div className=' bg-[#c0c0c0] rounded-xl'>
                <div className={` rounded-xl bg-black h-1.5 ${percentageHtml} ${percentageNode} ${percentageReactjs} ${percentageNpm}`}></div>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-skill-card gap-x-3 ${padding?"m-0":"my-2"}`}>
            <img className='mt-1  w-7' src={image2} alt="" />
            <div>
              <p>{language2}</p>
              <div className=' bg-[#c0c0c0] rounded-xl'>
                <div className={` rounded-xl bg-black h-1.5 ${percentageCss} ${percentageExpress} ${percentageTailwind} ${percentageGithub}`}></div>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-skill-card gap-x-3 ${padding?"mb-2 mt-1":"my-2"}`}>
            <img className='mt-1  w-7' src={image3} alt="" />
            <div>
              <p>{language3}</p>
              <div className=' bg-[#c0c0c0] rounded-xl'>
                <div className={` rounded-xl bg-black h-1.5 ${percentageJs} ${percentageMongoDB} ${percentageGraphql} ${percentageWebSecurity}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default SkillCard