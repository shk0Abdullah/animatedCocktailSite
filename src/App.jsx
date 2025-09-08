import { ScrollTrigger, SplitText } from "gsap/all";
import "./index.css";
import gsap from "gsap";
import Nav from "./components/Nav";
import Art from "./components/Art";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
      </main>
    </>
  );
}

export default App;
