import Image from "next/image";
import "@fontsource/jockey-one";
import "@fontsource-variable/jetbrains-mono";
import Skill from "@/ui/skill";

export default function Skills(props: any) {
  return (
    <section
      {...props}
      style={{
        background: "linear-gradient(#150042 , #000000 , #000000)",
        fontFamily: "Jockey One, sans-serif",
      }}
      className="h-fit -z-20 overflow-hidden pb-0 xl:pb-28"
      id="skills"
    >
      <div className="">
        <div
          id="header-text-skills  "
          className=" h-[232px] w-full flex justify-center items-center text-[45px] xl:text-[64px]"
        >
          <h2 className="text-light z-20 ">My Skills</h2>
        </div>

        <div className="h-fit pb-[50px] px-[50px] md:px-[109px] text-light font-extrabold text-[20px]">
          <div className="h-fit">
            <div className=" h-[60px]  w-full sm:w-[141px] border-b-2 border-solid border-light flex justify-center items-center">
              <h4
                style={{ fontFamily: "JetBrains Mono Variable, monospace" }}
                className="z-50"
              >
                Strengths
              </h4>
            </div>
            <div className="py-[80px] flex justify-center md:justify-normal flex-wrap gap-[58px]">
              {/* SKILL */}

              <Skill
                name="Vue.js"
                src="vuejs.svg"
                href="https://vuejs.org/"
              ></Skill>
              <Skill
                name="React"
                src="react.svg"
                href="https://react.dev/"
              ></Skill>
            </div>
          </div>

          <div className="h-fit">
            <div className="h-[60px] w-full sm:w-[194px] border-b-2 border-solid border-light flex justify-center items-center">
              <h4
                style={{ fontFamily: "JetBrains Mono Variable, monospace" }}
                className="z-50"
              >
                Others Skills
              </h4>
            </div>

            <div>
              <div className="py-[80px] flex justify-center md:justify-normal flex-wrap gap-[58px]">
                <Skill
                  name="Vuetify"
                  src="vuetify.svg"
                  href="https://vuetifyjs.com/"
                ></Skill>
                <Skill
                  name="Next.js"
                  src="nextjs.svg"
                  href="https://nextjs.org/"
                ></Skill>
              </div>

              <div className="pb-[80px] flex justify-center md:justify-normal flex-wrap gap-[58px]">
                <Skill
                  name="Tailwind CSS"
                  src="tailwind.svg"
                  href="https://tailwindcss.com/"
                ></Skill>
                <Skill
                  name="Nuxt.js"
                  src="nuxtjs.svg"
                  href="https://nuxt.com/"
                ></Skill>
                <Skill
                  name="Figma"
                  src="figma.svg"
                  href="https://www.figma.com/"
                ></Skill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
