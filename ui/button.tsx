import Image from "next/image";
export default function Button(props: any) {
  const { className = "", ...otherProps } = props;
  return (
    <button
      className={
        " min-h-[50px] min-w-[113px] rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl px-3  text-center " +
        className
      }
      {...otherProps}
    ></button>
  );
}
