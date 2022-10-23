import NextLink from "next/link";

interface IHeaderNavLink {
  name: string;
  slug: string;
  checked?: boolean;
}

export function HeaderNavLink({name, slug, checked = false}: IHeaderNavLink) {
  return (
    <NextLink href={slug} as={slug} passHref>
      <a className={`text-sm font-semibold uppercase ${checked && 'text-[#11B5E4]'}`}>{name}</a>
    </NextLink>
  );
}
