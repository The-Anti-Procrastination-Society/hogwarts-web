import "@fontsource/jockey-one";
import "@fontsource-variable/jetbrains-mono";

export default function Skills() {
  return (
    <footer
      id="footer"
      className="h-[112px] bg-light text-[16px] flex lg:justify-center items-center px-8"
      style={{ fontFamily: "JetBrains Mono Variable, monospace" }}
    >
      <p className="max-w-[250px] md:max-w-max text-dark">
        ©2024 Designed, created and maintained by{" "}
        <a href="#hero" className="text-primary">
          FREDDY
        </a>
      </p>
    </footer>
  );
}
