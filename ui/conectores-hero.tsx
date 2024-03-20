import Image from "next/image";
export default function Conectores(props: any) {
  let className = props.className ? props.className : "";
  return (
    <>
      <Image
        alt="Connection"
        src="conectores-hero.svg"
        width={113.25}
        height={127}
        className={className}
      ></Image>
    </>
  );
}
