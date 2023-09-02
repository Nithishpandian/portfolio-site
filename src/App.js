import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";


function App() {
  return (
    <div className=" bg-[#fcfcfc]">
      <Header/>
      <HomeSection />
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
