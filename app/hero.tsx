import TecladoHero from "@/ui/teclado-hero";
import ConectoresoHero from "@/ui/conectores-hero";
import TeclaConLaCruz from "@/ui/tecla-con-la-cruz";
import CablesDeFondo from "@/ui/cables-hero";

export default function hero() {
  return (
    <section
      id="hero"
      className="overflow-hidden min-h-screen flex justify-center"
    >
      <CablesDeFondo className="absolute invisible lg:visible -left-0 bottom-0 translate-y-[40%] -z-50 "></CablesDeFondo>
      <ConectoresoHero className="absolute   z-0 left-20 top-0 md:left-auto md:right-[205px]"></ConectoresoHero>
      <TeclaConLaCruz className="w-[80px] md:w-[113px] transition-all  hover:scale-105  cursor-pointer  fixed z-50 right-6   bottom-[45px] md:right-[63px] "></TeclaConLaCruz>

      <TecladoHero className="scale-50 sm:scale-75  md:scale-100     z-0"></TecladoHero>
    </section>
  );
}
