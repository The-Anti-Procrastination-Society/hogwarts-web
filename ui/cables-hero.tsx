import Image from "next/image";
export default function CablesHero(props: any) {
  let className = props.className ? props.className : "";
  return (
    <>
      <Image
        alt="Cables interconectores"
        src="/cables-hero.png"
        width={578.84}
        height={1336.44}
        className={className + " min-h-[1336px] full"}
      ></Image>
    </>
  );
}
