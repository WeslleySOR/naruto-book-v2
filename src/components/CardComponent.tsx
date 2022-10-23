import NextLink from "next/link";

interface ICardComponent {
  slug: string;
  image: string;
  name: string;
}

export function CardComponent({slug, image, name}: ICardComponent) {
  return (
    <NextLink href={`/characters/${slug}`}>
      <a className="relative h-36 w-36 flex flex-col justify-center rounded-md cursor-pointer border border-solid border-[#11B5E4]">
        <div className="box-border overflow-hidden max-w-full rounded-md">
          <img
            className="w-full pb-[75%] rounded-md"
            src={image}
            alt=""
          />
        </div>
        <h1 className="absolute top-0 right-0 p-1 rounded-md w-fit text-sm font-semibold bg-[#11B5E4] text-[#121212]">
          {name}
        </h1>
      </a>
    </NextLink>
  )
}