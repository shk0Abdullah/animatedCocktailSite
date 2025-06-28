import { ScrollTrigger, SplitText } from "gsap/all";
import "./index.css";
import gsap from "gsap";
import Nav from "./Nav";
import Hero from "./Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <div className="h-dvh bg-black"></div>
      </main>
    </>
  );
}

export default App;
