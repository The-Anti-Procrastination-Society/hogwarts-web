import { useRef } from "react";
import Footer from "@/app/footer";
import Hero from "@/app/hero";
export default function Home() {
  return (
    <>
      <script src="sky.js"></script>
      <div className="min-h-screen z-auto">
        <Hero></Hero>

        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
