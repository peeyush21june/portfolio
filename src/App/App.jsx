import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import SocialLinks from "../Components/SocialLinks";

function App() {
  return (
    <section className="w-full h-full flex flex-col gap-10">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-grayscale-950 flex justify-center pb-4 text-grayscale-50">
          <span>
            Made by <em>Peeyush Dwivedi</em>
          </span>
        </div>
      </div>
    </section>
  );
}

export default App;
