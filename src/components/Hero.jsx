import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Generating from "./Generating";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";
import { useRef } from "react";
import CompanyLogo from "./design/CompanyLogo";

function Hero() {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="container relative flex flex-col justify-between gap-6"
        ref={parallaxRef}
      >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Personalized Learning Through Teacher-AI{" "}
            <span className="inline-block relative">
              Symbiosis{" "}
              <img
                src={curve}
                alt="curve"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
        </div>
        <div className="text-center z-10">
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Ved AI combines human expertise with advanced AI to deliver dynamically tailored curriculum 
            that adapts to your unique learning style, with support for multiple languages including 
            regional Indian dialects.
          </p>
          <Button href="/features" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient w-full">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] w-full" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] w-full">
                <video
                  src={"demo.mp4"} // Path to your video file
                  alt="heroBackground"
                  width={1440}
                  height={1800}
                  className="w-full"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Dynamic Curriculum Tailoring"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[128%] lg:-top-[104%]"></div>
          <BackgroundCircles />
        </div>
        <CompanyLogo className="hidden relative z-10 mt-20 md:block" />
      </div>
      <BottomLine />
    </Section>
  );
}

export default Hero;
