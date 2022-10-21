import NextLink from "next/link";
import { IBijuu } from "../types/bijuu";

interface IBijuuCard {
  bijuu: IBijuu;
}

export function BijuuCard({ bijuu }: IBijuuCard) {
  return (
    <NextLink href={`/bijuus/${bijuu.slug}`}>
      <a className="flex flex-col justify-center items-end rounded-md cursor-pointer border-2 border-solid border-[#11B5E4] group">
        <img
          className="w-48 h-48 rounded-t-md"
          src={bijuu.images[0].url}
          alt=""
        />
        <h1 className="w-full text-center text-base bg-[#11B5E4] text-[#121212]">
          {bijuu.name}
        </h1>
      </a>
    </NextLink>
  );
}
