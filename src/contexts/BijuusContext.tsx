import { createContext, ReactNode, useEffect, useState } from "react";

import { client } from "../lib/apollo";
import { GET_BIJUUS_QUERY } from "../utils/ApolloQuery";

import { IBijuu } from "../types/bijuu";

type BijuusContextProps = {
  children: ReactNode;
};

type BijuusContextType = {
  bijuus: IBijuu[];
};

export const BijuusContext = createContext<BijuusContextType>(
  {} as BijuusContextType
);

export const BijuusContextProvider = ({
  children,
}: BijuusContextProps) => {
  const [bijuus, setBijuus] = useState<IBijuu[]>([]);

  const getBijuusFromHygraph = async () => {
    await client
      .query({
        query: GET_BIJUUS_QUERY,
      })
      .then(({ data }) => {        
        setBijuus(data.bijuus);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBijuusFromHygraph();
  }, []);

  return (
    <BijuusContext.Provider
      value={{
        bijuus,
      }}
    >
      {children}
    </BijuusContext.Provider>
  );
};
