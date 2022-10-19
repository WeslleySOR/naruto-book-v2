import NextLink from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 flex py-4 px-32 border-b border-solid border-[#262626]">
      <NextLink href="/">
        <a>
          <img className="h-32" src="/logo.svg" alt="" />
        </a>
      </NextLink>
    </header>
  );
}
