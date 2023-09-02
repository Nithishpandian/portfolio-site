import htmlLogo from "../assets/logos/html_logo.png"
import cssLogo from "../assets/logos/css_logo.png"
import jsLogo from '../assets/logos/js_logo.png'
import nodejs from "../assets/logos/nodejs_logo.jpg"
import expressjs from "../assets/logos/expressjs_logo.png"
import mongodb from "../assets/logos/mongodb_logo.png"
import reactjs from "../assets/logos/reactjs_logo.png"
import tailwindcss from "../assets/logos/tailwindcss_logo.webp"
import restApi from "../assets/logos/rest_api.png"
import npm from "../assets/logos/npm_logo.png"
import github from "../assets/logos/github_logo.png"
import webSecurity from "../assets/logos/websecurity_logo.png"
import SkillCard from './SkillCard'

import { useInView } from 'react-intersection-observer';


const Skills = () => {
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({
    threshold:0.81,
  });
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    threshold:0.81,
  });
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView({
    threshold:0.81,
  });
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView({
    threshold:0.81,
  });

  return (
    <div className='px-12 sm:px-24 md:36 lg:px-16' id='Skill'>
        <div>
            <div className='flex justify-center pt-20 mb-5 text-5xl font-bold'>
                <h1>Skills</h1>
                <span className='mt-1 ml-2'><ion-icon name="code-slash"></ion-icon></span>
            </div>
            <div className='grid grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-none xl:grid-cols-4 lg:gap-x-0 xl:gap-6'>

              <div className={`duration-700 ${myElementIsVisible1?" translate-x-0 opacity-100 ":"md:-translate-x-12 translate-x-14 opacity-0"}`} ref={myRef1}>
                <SkillCard 
                  domain={"Frontend"}
                  image1={htmlLogo} 
                  language1={'HTML'} 
                  percentageHtml={'w-[98%]'}
                  image2={cssLogo} 
                  language2={'CSS'} 
                  percentageCss={'w-[95%]'}
                  image3={jsLogo} 
                  language3={'Javascript'} 
                  percentageJs={'w-[90%]'}
                  padding={true}
                />
              </div>
              
              <div className={` duration-700 xl:duration-1000 ${myElementIsVisible2?" translate-x-0 opacity-100 ":" md:translate-x-14 xl:translate-x-0 translate-x-14 opacity-0"}`} ref={myRef2}>
                <SkillCard 
                  domain={"Backend"}
                  image1={nodejs} 
                  language1={'NodeJS'} 
                  percentageNode={'w-[90%]'}
                  image2={expressjs} 
                  language2={'ExpressJS'} 
                  percentageExpress={'w-[87%]'}
                  image3={mongodb} 
                  language3={'MongoDB'} 
                  percentageMongoDB={'w-[89%]'}
                />
              </div>
              
              <div className={` duration-700 xl:duration-1000 ${myElementIsVisible3?" translate-x-0 opacity-100 ":" md:-translate-x-14 xl:translate-x-0 translate-x-14 opacity-0"}`} ref={myRef3}>
                <SkillCard 
                  domain={"Web Frameworks & API"}
                  image1={reactjs} 
                  language1={'ReactJS'} 
                  percentageReactjs={'w-[94%]'}
                  image2={tailwindcss} 
                  language2={'TailwindCSS'} 
                  percentageTailwind={'w-[95%]'}
                  image3={restApi} 
                  language3={'REST api'} 
                  percentageRest={'w-[87%]'}
                />
              </div>
              
              <div className={`duration-700 ${myElementIsVisible4?" translate-x-0 opacity-100 ":" xl:translate-x-14 md:translate-x-14 translate-x-14 opacity-0"}`} ref={myRef4}>
                <SkillCard 
                  domain={"Other Skills"}
                  image1={npm} 
                  language1={'NPM'} 
                  percentageNpm={'w-[90%]'}
                  margin1={'mt-3'}
                  image2={github} 
                  language2={'Github'} 
                  percentageGithub={'w-[95%]'}
                  image3={webSecurity} 
                  language3={'Web Security'} 
                  percentageWebSecurity={'w-[91%]'}
                />
              </div>
            </div>
        </div>

    </div>
  )
}

export default Skills