import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(SplitText);

function Hero() {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const splittext = new SplitText(".title", { type: "chars, words" });
    const splitpara = new SplitText(".subtitle", { type: "lines" });
    splittext.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });
    gsap.from(splittext.chars, {
      duration: 1,
      yPercent: 40,
      ease: "expo.out",

      stagger: 0.05,
    });
    gsap.from(splitpara.lines, {
      yPercent: 80,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
      delay: 0.64,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: -200 }, 0)
      .to(".left-leaf", { y: 200 }, 0);
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        pin: true,
        scrub: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp Classic</p>
              <p className="subtitle">
                Sip the Spirit
                <br />
                of Summer.
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every part of our Ingredient is a blend of classic premium
                flares to delight your sensses
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src="/videos/input.mp4"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </>
  );
}

export default Hero;
