import Image from "next/image";
export default function GithubIcon(props: any) {
  return (
    <>
      <Image
        alt="Logo de github"
        src="/github.svg"
        width={26}
        height={26}
        {...props}
      ></Image>
    </>
  );
}
