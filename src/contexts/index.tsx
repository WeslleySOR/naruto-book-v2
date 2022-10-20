import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { client } from "../lib/apollo";
import { CharactersContextProvider } from "./CharactersContext";
import { ClansContextProvider } from "./ClansContext";

type Props = {
  children: ReactNode;
};

export default function GlobalContext({ children }: Props) {
  return (
    <ApolloProvider client={client}>
      <ClansContextProvider>
        <CharactersContextProvider>{children}</CharactersContextProvider>
      </ClansContextProvider>
    </ApolloProvider>
  );
}
