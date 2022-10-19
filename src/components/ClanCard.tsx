import NextLink from "next/link";
import { IClan } from "../types/clan";

interface IClanCard {
  clan: IClan;
}

export function ClanCard({ clan }: IClanCard) {
  return (
    <NextLink href={`/clans/${clan.name.toLocaleLowerCase()}`}>
      <a
        className="flex flex-col justify-center items-end rounded-md cursor-pointer bg-zinc-100 group"
      >
        <img
          className="h-36 w-36 rounded-t-md"
          src={clan.images[0].url}
          alt=""
        />
        <h1 className="w-full text-center text-xs bg-purple-800 text-[#fff] rounded-b-md">
          {clan.name}
        </h1>
      </a>
    </NextLink>
  );
}
