import React from 'react'
import ServiceCard from './ServiceCard'

import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref: lapMyRef, inView: lapMyElementIsVisible1 } = useInView({
    threshold:0.5,
  });

  const { ref: ref1, inView: visible1 } = useInView({
    threshold:0.5,
  });
  const { ref: ref2, inView: visible2 } = useInView({
    threshold:0.5,
  });
  const { ref: ref3, inView: visible3 } = useInView({
    threshold:0.5,
  });
  const { ref: ref4, inView: visible4 } = useInView({
    threshold:0.5,
  });
  return (
    <div className='px-12 my-5 sm:px-10 lg:px-8 xl:px-20' id='Services'>
        <h1 className='flex justify-center mb-5 text-5xl font-bold  pt-14'>Services <span><ion-icon name="reader"></ion-icon></span></h1>
        <div className={`duration-1000 ${lapMyElementIsVisible1?" sm:translate-x-0 sm:opacity-100 ":"sm:translate-x-10 sm:opacity-0"}`} ref={lapMyRef}>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <div className={`duration-700 ${visible1?" translate-x-0 opacity-100 ":" sm:translate-x-0 -translate-x-14 opacity-0"}`} ref={ref1}>
            <ServiceCard
              title={"Web Design"}
              img={"https://img.freepik.com/free-vector/designer-concept-illustration_114360-836.jpg?w=740&t=st=1673263784~exp=1673264384~hmac=2fc7b085856106fa4c0f5fd8f84f49eee3f2ab4c3fbe659b50354f2a7e827d09"}
              content={"I create visually appealing and user-friendly websites that reflect your brand and meet the needs of your target audience."}
            />
          </div>
          <div className={`duration-700 ${visible2?" translate-x-0 opacity-100 ":" sm:translate-x-0 -translate-x-14 opacity-0"}`} ref={ref2}>
            <ServiceCard
              title={"Web Development"}
              img={"https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg?w=740&t=st=1673493078~exp=1673493678~hmac=0145cefaed651e66be6507e80bdf72147b9282fedd5a1b40cfe7d996cddcbec1"}
              content={"I use a variety of technologies to build custom websites that are fast, scalable, and secure."}
            />
          </div>
          <div className={`duration-700 ${visible3?" translate-x-0 opacity-100 ":" sm:translate-x-0  -translate-x-14 opacity-0"}`} ref={ref3}>
            <ServiceCard
              title={"Web Maintenance"}
              img={"https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1859.jpg?t=st=1673249128~exp=1673249728~hmac=c5b628c3cb76bac38dcb12307ec4a9fd34f19adbd0132a2fbd5ef4323fa44bc4"}
              content={"I keep your website up-to-date and performing optimally through ongoing maintenance and troubleshooting."}
            />
          </div>
          <div className={`duration-700 ${visible4?" translate-x-0 opacity-100 ":" sm:translate-x-0  -translate-x-14 opacity-0"}`} ref={ref4}>
            <ServiceCard
              title={"Responsive Design"}
              img={"https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-1863.jpg?w=740&t=st=1673264551~exp=1673265151~hmac=aad02142a6d6b288cdf3888c2cbe65ab00b0469841358ebb153a4320d8fc1a7c"}
              content={"I ensure that your website looks and works great on all devices, including phones and tablets."}
            />
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default Services