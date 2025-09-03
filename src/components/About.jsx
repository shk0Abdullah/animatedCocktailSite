import { useGSAP } from "@gsap/react";
import React from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about, h2", {
      type: "words",
    });
    const scrolltl = gsap.timeline({
      trigger: "#about",
      start: "top center",
      // end: "bottom bottom",
    });
    scrolltl
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });
  return (
    <>
      <div id="about">
        <div className="mb-16 md:px-0 px-5">
          <div className="content">
            <div className="md:col-span-8">
              <p className="badge">Best Cocktails</p>
              <h2>
                Where every detail matters <span className="text-white">-</span>
                from muddle to garnish
              </h2>
            </div>
            <div className="sub-content">
              <p>
                Every cocktail we serve is a masterpiece, crafted with precision
                and passion. From the first muddle to the final garnish, we
                ensure that every detail matters. Our expert mixologists blend
                premium ingredients to create refreshing and unforgettable
                {/* flavors that delight your senses. Whether you're savoring a
                classic mojito or exploring our innovative concoctions, each sip
                is a testament to our commitment to quality and excellence. */}
              </p>
              <div>
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +12000 customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy">
              <img src="/images/abt1.png" alt="" />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="noisy">
              <img src="/images/abt2.png" alt="" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="noisy">
              <img src="/images/abt5.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy">
              <img src="/images/abt3.png" alt="" />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="noisy">
              <img src="/images/abt4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
