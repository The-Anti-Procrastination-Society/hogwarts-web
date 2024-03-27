import "@fontsource/rock-salt";
import "@fontsource/rajdhani";
import Github from "@/public/github.svg";

import APS from "@/public/aps.svg";
import Contact from "@/public/contact.svg";
import Smoke from "@/public/smoke.jpg";
export default function Footer() {
  return (
    <div className="">
      <footer id="footer" className="bg-dark w-full h-[200px] md:h-[317px] ">
        <div className="flex flex-col justify-center items-center h-full gap-12 scale-[40%] md:scale-75">
          <p
            className="text-light text-[24px] text-center whitespace-nowrap"
            style={{ fontFamily: "Rock Salt" }}
          >
            Created with ❤️ by{" "}
            <span className="text-primary ">
              The Anti Procrastination Society
            </span>
          </p>

          <div
            style={{ fontFamily: "Rajdhani" }}
            className="text-light flex gap-14 text-[40px] font-bold"
          >
            <a href="https://github.com/The-Anti-Procrastination-Society/hogwarts-web">
              <button className="flex gap-[14px] items-center ">
                <p>Collaborate</p>
                <Github></Github>
              </button>
            </a>
            <button className="flex gap-[14px] items-center ">
              <p className="whitespace-nowrap">About Us</p>
              <APS></APS>
            </button>
            <button className="flex gap-[14px] items-center ">
              <p className="whitespace-nowrap">Contact Us</p>
              <Contact></Contact>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
