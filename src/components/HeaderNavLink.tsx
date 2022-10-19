import NextLink from "next/link";

interface IHeaderNavLink {
  name: string;
  slug: string;
  checked?: boolean;
}

export function HeaderNavLink({name, slug, checked = false}: IHeaderNavLink) {
  return (
    <NextLink href={slug}>
      <a className={`text-sm font-semibold uppercase ${checked && 'text-purple-400'}`}>{name}</a>
    </NextLink>
  );
}
