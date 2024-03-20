import Image from "next/image";

export default function Skill(props: any) {
  let name = props.name ? props.name : "Skill";
  let src = props.src ? props.src : "Skill";
  let href = props.src ? props.href : "Skill";
  return (
    <>
      <a
        className="transition-all hover:scale-105  z-50 "
        target="_blank"
        href={href}
      >
        <div className=" w-[150px] xl:w-[264px] xl:h-[264px] z-50 transition-all ">
          <Image
            src={src}
            alt={name}
            className="w-full h-full "
            width={264}
            height={226}
          ></Image>
          <p className="text-[24px] py-5 text-center">{name}</p>
        </div>
      </a>
    </>
  );
}
