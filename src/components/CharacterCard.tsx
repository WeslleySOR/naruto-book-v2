import NextLink from "next/link";
import { ICharacter } from "../types/character";

interface ICharacterCard {
  character: ICharacter;
}

export function CharacterCard({ character }: ICharacterCard) {
  return (
    <NextLink href={`/character/${character.name.toLocaleLowerCase()}`}>
      <a
        className="flex justify-center items-end relative w-48 h-48 rounded-md cursor-pointer group"
      >
        <img
          className="h-full w-full rounded-md"
          src={character.images[0].url}
          alt=""
        />
        <h1 className="absolute bottom-0 left-0 right-0 opacity-0 w-full text-center bg-[#00152b] text-[#fff] rounded-b-md transition-opacity duration-500 group-hover:opacity-100">
          {character.name}
        </h1>
      </a>
    </NextLink>
  );
}
