import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { client } from "../lib/apollo";
import { BijuusContextProvider } from "./BijuusContext";
import { CharactersContextProvider } from "./CharactersContext";
import { ClansContextProvider } from "./ClansContext";

type Props = {
  children: ReactNode;
};

export default function GlobalContext({ children }: Props) {
  return (
    <ApolloProvider client={client}>
      <ClansContextProvider>
        <BijuusContextProvider>
          <CharactersContextProvider>{children}</CharactersContextProvider>
        </BijuusContextProvider>
      </ClansContextProvider>
    </ApolloProvider>
  );
}
