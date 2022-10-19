import { ReactNode } from "react";
import { CharactersContextProvider } from "./CharactersContext";
import { ClansContextProvider } from "./ClansContext";

type Props = {
  children: ReactNode;
};

export default function GlobalContext({ children }: Props) {
  return (
    <ClansContextProvider>
      <CharactersContextProvider>{children}</CharactersContextProvider>
    </ClansContextProvider>
  );
}
