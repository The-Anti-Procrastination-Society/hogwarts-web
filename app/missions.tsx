import "@fontsource/jockey-one";
import "@fontsource-variable/jetbrains-mono";
import MissionsSvg from "@/public/missions.svg";
import Conectores from "@/public/conectores-missions.svg";

export default function Skills() {
  return (
    <section
      className="relative min-h-[800px] h-screen bg-primary flex justify-center  items-center  -z-20 px-[25px]"
      id="missions"
    >
      <div className="flex flex-col justify-center  items-center ">
        <MissionsSvg className="max-w-[495px] max-h-[495px]"></MissionsSvg>
        <p
          className="text-light text-[16px] text-center max-w-[955px]"
          style={{ fontFamily: "JetBrains Mono Variable, monospace" }}
        >
          I am a Christian and I have a special interest in countries where
          Jesus is not known. By hiring me you will be helping to finance
          missionary trips, which are so expensive for any Latin person.
        </p>
      </div>

      <Conectores className="absolute bottom-0 left-[56px]"></Conectores>
    </section>
  );
}
