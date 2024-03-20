import Image from "next/image";
export default function TeclaConLaCruz(props: any) {
  let className = props.className ? props.className : "";
  return (
    <>
      <a href="#missions" id="tecla-con-la-cruz">
        <Image
          alt="tecla de teclado con la cruz"
          src="tecla-con-la-cruz.svg"
          width={113.76}
          height={127}
          className={className}
        ></Image>
      </a>
    </>
  );
}
