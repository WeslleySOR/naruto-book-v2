import NextLink from "next/link";
import { ICharacter } from "../types/character";

interface ICharacterCard {
  character: ICharacter;
}

export function CharacterCard({ character }: ICharacterCard) {
  return (
    <NextLink href={`/characters/${character.slug}`}>
      <a
        className="flex flex-col justify-center items-end rounded-md cursor-pointer border-2 border-solid border-[#11B5E4] group"
      >
        <img
          className="w-48 h-w-48 rounded-t-md"
          src={character.images[0].url}
          alt=""
        />
        <h1 className="w-full text-center text-base bg-[#11B5E4] text-[#121212]">
          {character.name}
        </h1>
      </a>
    </NextLink>
  );
}
