import { ScrollTrigger, SplitText } from "gsap/all";
import "./index.css";
import gsap from "gsap";
import Nav from "./Nav";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <main>
        <Nav />
      </main>
    </>
  );
}

export default App;
