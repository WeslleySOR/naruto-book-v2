import { createContext, ReactNode, useEffect, useState } from "react";

import { client } from "../lib/apollo";
import { GET_CHARACTERS_QUERY } from "../utils/ApolloQuery";

import { ICharacter } from "../types/character";

type CharactersContextProps = {
  children: ReactNode;
};

type CharactersContextType = {
  characters: ICharacter[];
};

export const CharactersContext = createContext<CharactersContextType>(
  {} as CharactersContextType
);

export const CharactersContextProvider = ({
  children,
}: CharactersContextProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const getCharactersFromHygraph = async () => {
    await client
      .query({
        query: GET_CHARACTERS_QUERY,
      })
      .then(({ data }) => {
        setCharacters(data.characters);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCharactersFromHygraph();
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
