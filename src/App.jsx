import { ScrollTrigger, SplitText } from "gsap/all";
import "./index.css";
import gsap from "gsap";
import Nav from "./components/Nav";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Cocktails />
      </main>
    </>
  );
}

export default App;
