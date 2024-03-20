import Hero from "@/app/hero";
import Info from "@/app/info";
import Skills from "@/app/skills";
import Image from "next/image";
import Cables from "@/public/cables-skills.svg";
import Missions from "@/app/missions";
import Footer from "@/app/footer";
import About from "@/app/about";
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <main>
        <Info></Info>
        <div></div>
        <Cables className="absolute invisible lg:visible right-0  flex justify-end h-[2000px]  -translate-y-[100px]  z-0  "></Cables>{" "}
        <Skills></Skills>
        <About></About>
        <Missions></Missions>
        <Footer></Footer>
      </main>
    </>
  );
}
