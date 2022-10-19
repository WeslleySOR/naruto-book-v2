import { createContext, ReactNode, useEffect, useState } from "react";

import { client } from "../lib/apollo";
import { GET_CLANS_QUERY } from "../utils/ApolloQuery";

import { IClan } from "../types/clan";

type ClansContextProps = {
  children: ReactNode;
};

type ClansContextType = {
  clans: IClan[];
};

export const ClansContext = createContext<ClansContextType>(
  {} as ClansContextType
);

export const ClansContextProvider = ({
  children,
}: ClansContextProps) => {
  const [clans, setClans] = useState<IClan[]>([]);

  const getClansFromHygraph = async () => {
    await client
      .query({
        query: GET_CLANS_QUERY,
      })
      .then(({ data }) => {
        setClans(data.clans);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getClansFromHygraph();
  }, []);

  return (
    <ClansContext.Provider
      value={{
        clans,
      }}
    >
      {children}
    </ClansContext.Provider>
  );
};
