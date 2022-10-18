import { ReactNode } from "react";
import { CharactersContextProvider } from "./CharactersContext";

type Props = {
  children: ReactNode;
};

export default function GlobalContext({ children }: Props) {
  return <CharactersContextProvider>{children}</CharactersContextProvider>;
}
