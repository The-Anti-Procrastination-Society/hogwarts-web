import Image from "next/image";
import "@fontsource/jockey-one";
import "@fontsource-variable/jetbrains-mono";
import Skill from "@/ui/skill";

export default function Skills(props: any) {
  return (
    <section
      {...props}
      style={{ fontFamily: "JetBrains Mono Variable, monospace" }}
      className="h-fit z-10 overflow-hidden bg-white text-dark"
      id="about"
    >
      <div className="">
        <div className="min-h-screen py-[100px] px-[50px] md:px-[109px] font-extrabold text-[20px] flex justify-center items-center">
          <div className="h-fit">
            <div className="  h-[60px] w-[141px] border-b-2 border-solid border-dark flex justify-center items-center">
              <h4 className="z-50">About me</h4>
            </div>
            <div className="py-[40px] flex flex-wrap gap-[58px] text-[13px] xl:text-[20px] ">
              {/* SKILL */}

              <p>
                Since I was 14, I've been captivated by web development,
                starting with learning HTML, CSS, JavaScript, and crafting full
                PHP pages to building dynamic web applications. My journey was
                significantly enhanced by discovering JavaScript frameworks like
                Vue and React. These frameworks not only made development more
                beautiful and efficient but also introduced me to best practices
                in coding, design, and security. I've dedicated a lot of time to
                learning about how to be better with those frameworks and
                acquiring other programming abilities.
              </p>
              <p>
                High School studies as a programming contestant have always
                fascinated me with the world of coding and technology.
                Participating in competitions like the ICPC, OCI (Cuban Olympiad
                of Informatics), and USACO (Computing Olympiad USA) has not only
                honed my coding skills but also instilled in me a sense of
                teamwork and problem-solving. These experiences have prepared me
                for future challenges in the tech industry, where collaboration
                and innovation are key.
              </p>
              <p>
                When I reached my adult age, I had to commit one year of
                obligatory military service. Thankfully, that service was
                working in a military company dedicated to selling software,
                which was designed to have me making the front-end of some of
                their web apps. I learned to work with Vue.js, Vuetify, Git,
                team management, and others. After testing a lot of
                technologies, I realized that front-end development is what I
                love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
