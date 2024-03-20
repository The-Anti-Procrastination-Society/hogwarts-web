import Image from "next/image";
export default function TecladoHero(props: any) {
  let className = "min-w-[695px] min-h-[763px] " + props.className;
  return (
    <>
      <Image
        alt="arte teclado"
        src="teclado-hero.svg"
        width={695}
        height={763}
        className={className}
      ></Image>
    </>
  );
}
