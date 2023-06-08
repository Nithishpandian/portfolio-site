import React from 'react'
import ProjectCard from './ProjectCard'
import diseasePrediction from "./assets/projects/disease_predictor.png"
import landingPage from "./assets/projects/landing_page.png"
import todo from "./assets/projects/todo_app.png"
import blog from "./assets/projects/Blog_website.png"

import { useInView } from 'react-intersection-observer';

const Projects = () => {
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
    <div className='px-12 sm:px-10 md:px-28 lg:px-10 xl:px-20' id='Project'>
        <h1 className='flex justify-center pt-20 mb-5 text-5xl font-bold '>Projects <span><ion-icon name="albums"></ion-icon></span></h1>
        <div className={`duration-1000 ${lapMyElementIsVisible1?" sm:translate-x-0 sm:opacity-100 ":"sm:-translate-x-14 sm:opacity-0"}`} ref={lapMyRef}>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-x-2 gap-y-5 md:gap-8 lg:gap-x-2 lg:gap-y-5'>
            <div className={`duration-1000 ${visible1?"translate-x-0 opacity-100 ":"translate-x-0 opacity-0"}`} ref={ref1}>
              <ProjectCard
                title = {"Disease Prediction"}
                img= {diseasePrediction}
                liveDemo={"/"}
                githubCode={"https://github.com/Nithishpandian"}
              />
            </div>
            <div className={`duration-1000 ${visible2?"translate-x-0 opacity-100 ":"translate-x-0 opacity-0"}`} ref={ref2}>
            <ProjectCard
              title = {"Blog Website"}
              img= {blog}
              liveDemo={"/"}
              githubCode={"https://github.com/Nithishpandian"}
            />
            </div>
            <div className={`duration-1000 ${visible3?"translate-x-0 opacity-100 ":"translate-x-0 opacity-0"}`} ref={ref3}>
            <ProjectCard
              title = {"Landing Page"}
              img= {landingPage}
              liveDemo={"/"}
              githubCode={"https://github.com/Nithishpandian/Landing-Page"}
            />
            </div>
            <div className={`duration-1000 ${visible4?"translate-x-0 opacity-100 ":"translate-x-0 opacity-0"}`} ref={ref4}>
            <ProjectCard
              title = {"TodoList App"}
              img= {todo}
              liveDemo={"/"}
              githubCode={"https://github.com/Nithishpandian/TodoList"}
            />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects