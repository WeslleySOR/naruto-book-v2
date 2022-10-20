import NextLink from "next/link";
import { IClan } from "../types/clan";

interface IClanCard {
  clan: IClan;
}

export function ClanCard({ clan }: IClanCard) {
  return (
    <NextLink href={`/clans/${clan.name.toLocaleLowerCase()}`}>
      <a
        className="flex flex-col justify-center items-end rounded-md cursor-pointer border-2 border-solid border-[#11B5E4]"
      >
        <img
          className="h-36 w-36"
          src={clan.images[0].url}
          alt=""
        />
        <h1 className="w-full text-center text-xs bg-[#11B5E4] text-[#121212]">
          {clan.name}
        </h1>
      </a>
    </NextLink>
  );
}
