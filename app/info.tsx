import Image from "next/image";
import Button from "@/ui/button";
import GithubIcon from "@/ui/github-icon";
import CVIcon from "@/public/cv.svg";
import Whatsapp from "@/public/whatsapp.svg";

// Supports weights 100-800
import "@fontsource-variable/jetbrains-mono";
export default function Hero() {
  return (
    <section
      id="info"
      style={{
        fontFamily: "JetBrains Mono Variable, monospace",
      }}
      className="  relative min-h-[630px] flex flex-col  md:flex-row md:items-end z-10"
    >
      <div
        aria-hidden
        className="invisible md:visible bg-[#6221A3]  absolute  -z-0 h-20 w-full"
      ></div>
      <div className="z-50 flex  justify-center items-center  bg-white  h-[600px] md:rounded-br-3xl md:rounded-tr-3xl  md:h-[608px] md:w-[700px] lg:w-[800px]">
        <div className=" mt-1   flex  justify-center items-center flex-col z-50 ">
          <h1 className=" text-[24px] text-secondary">Front-end</h1>
          <h2 className="uppercase mb-3  text-[24px] font-extrabold tracking-widest text-secondary">
            Web developer
          </h2>
          <p className="max-w-[342px] text-[16px] text-center text-pretty mb-6 text-dark">
            I can design and create beautiful web components using a good stack
            of technologies
          </p>
          <div className="flex mb-5">
            <a href="https://wa.me/5350624351" target="_blank">
              <Button className="mr-5 bg-primary gap-4 w-[138px] px-[12px] text-light flex justify-center items-center  z-50">
                <p className="">Contact</p>
                <Whatsapp className="w-[18px] invert"></Whatsapp>
              </Button>
            </a>
            <a href="freddycv.pdf" target="_blank">
              <Button className="flex gap-3 bg-primary w-[138px] px-[12px]  text-light justify-center items-center z-50">
                <p className="">Download</p>
                <CVIcon className="w-[30px] text-light invert"></CVIcon>
              </Button>
            </a>
          </div>
          <div className="flex">
            <a href="https://github.com/freddysae0" target="_blank">
              <Button className="bg-black gap-4 w-[138px] px-[12px] flex justify-center items-center">
                <p className="text-light">Github</p>
                <GithubIcon className="w-[20px] text-light "></GithubIcon>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="  md:w-full">
        <div id="info-baners" className=" flex flex-col justify-between -z-10 ">
          <div
            id="banner-1"
            className="h-44 bg-[#9273D4] flex flex-col justify-center p-8"
          >
            <div>
              <p className=" text-light mb-3 w-full text-balance md:w-[300px] lg:w-[500px]">
                High School studies as a programming contestant
              </p>
              <a href="#about">
                <Button className=" -p-5 px-0 bg-light text-black">More</Button>
              </a>
            </div>
          </div>

          <div
            id="banner-2"
            className="h-44 bg-[#865FD9] flex flex-col justify-center p-8"
          >
            <div>
              <p className="text-light mb-3 w-full text-balance md:w-[300px] lg:w-[500px]">
                Photography and design enthusiast
              </p>
              <a href="#about">
                <Button className="-p-5 px-0 bg-light text-black">More</Button>
              </a>
            </div>
          </div>
          <div
            id="banner-3"
            className="h-44  bg-[#6221A3] flex flex-col justify-center p-8 z-0"
          >
            <div>
              <p className="text-light mb-3 w-full text-balance md:w-[300px] lg:w-[500px]">
                Interested in web developing since was a kid
              </p>
              <a href="#about">
                <Button className="-p-5 px-0 bg-light text-black">More</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
