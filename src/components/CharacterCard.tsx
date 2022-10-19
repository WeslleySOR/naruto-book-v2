import NextLink from "next/link";
import { ICharacter } from "../types/character";

interface ICharacterCard {
  character: ICharacter;
}

export function CharacterCard({ character }: ICharacterCard) {
  return (
    <NextLink href={`/characters/${character.name.toLocaleLowerCase()}`}>
      <a
        className="flex flex-col justify-center items-end rounded-md cursor-pointer group"
      >
        <img
          className="w-36 h-36 rounded-t-md"
          src={character.images[0].url}
          alt=""
        />
        <h1 className="w-full text-center text-xs bg-purple-800 text-[#fff] rounded-b-md">
          {character.name}
        </h1>
      </a>
    </NextLink>
  );
}
