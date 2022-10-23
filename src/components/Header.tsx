import { useRouter } from "next/router";
import { HeaderNavLink } from "./HeaderNavLink";

export function Header() {
  const { asPath } = useRouter();
  return (
    <header className="z-50 sticky top-0 flex px-4 py-4 bg-[#121212] border-b border-solid border-[rgb(60,64,67)]">
      <nav className="py-6 flex flex-1 items-center justify-center gap-4">
        <HeaderNavLink name="Início" slug="/" checked={asPath === "/"}/>
        <HeaderNavLink name="Personagens" slug="/characters" checked={asPath !== "/" && asPath.includes("/characters")}/>
        <HeaderNavLink name="Clãs" slug="/clans" checked={asPath !== "/" && asPath.includes("/clans")}/>
        <HeaderNavLink name="Bijuus" slug="/bijuus" checked={asPath !== "/" && asPath.includes("/bijuus")}/>
      </nav>
    </header>
  );
}
