import NextLink from "next/link";
import { ImageWrapper } from "./ImageWrapper";

interface ICardWrapper {
  url: string;
  image: string;
  name: string;
}

export function CardWrapper({url, image, name}: ICardWrapper) {
  return (
    <NextLink href={url}>
      <a className="relative h-36 w-36 flex flex-col justify-center rounded cursor-pointer ring-2 ring-[#11B5E4] ring-offset-2 ring-offset-[#121212] lg:h-48 lg:w-48">
        <ImageWrapper src={image} alt={`Imagem de um card do(a): ${name}`}/>
        <h1 className="absolute top-0 right-0 p-1 rounded w-fit text-sm font-semibold bg-[#11B5E4] text-[#121212] lg:text-base">
          {name}
        </h1>
      </a>
    </NextLink>
  )
}