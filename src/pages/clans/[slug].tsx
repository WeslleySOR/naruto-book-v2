import Head from "next/head";
import NextLink from 'next/link'
import { useContext, useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ClansContext } from "../../contexts/ClansContext";
import { GetStaticPaths, GetStaticProps } from "next";
import { CharactersContext } from "../../contexts/CharactersContext";
import { ICharacter } from "../../types/character";
import { IClan } from "../../types/clan";

interface IParams {
  params: {
    slug: string;
  };
}

export default function ClanPage(params: IParams) {
  const [membersClan, setMembersClan] = useState<ICharacter[]>([])
  const { characters } = useContext(CharactersContext);
  const { clans } = useContext(ClansContext);

  const ActualClanPage = clans.filter(clan => clan.slug === params.params.slug);
  console.log(ActualClanPage)

  const returnAllMembersByClan = (clanName: IClan) => {
    var AllMembersByClan: ICharacter[] = [];
    if(characters.length > 0) AllMembersByClan = characters.filter(character => character.clan !== null && character.clan.name === clanName.name);
    return setMembersClan(AllMembersByClan);
  }

  useEffect(() => {
    returnAllMembersByClan(ActualClanPage[0]);
  }, [])
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Clan</title>
      </Head>
      <main className="flex items-center gap-4 py-12">
        {clans.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          clans.map((clan) => {
            if (clan.slug === params.params.slug) {
              return (
                <div className="flex flex-col gap-6" key={clan.name}>
                  <div className="flex flex-col gap-4">
                    <div className="w-full">
                      <img
                        className="w-full"
                        src={clan.images[0].url}
                        alt=""
                      />
                    </div>
                    <strong className="text-lg text-center text-shadow-name-sm">Clã - {clan.name}</strong>
                  </div>
                  <div className="flex flex-col gap-2 p-4 mx-4 rounded-md bg-zinc-800">
                    <span>Membros: {membersClan.map((character, index) => <><NextLink href={`/characters/${character.slug}`}><a className="underline">{character.name}</a></NextLink>{index < membersClan.length - 1 && <span>, </span>}</>)}</span>
                  </div>
                  <div className="flex flex-col mt-12">
                    <h2 className="text-2xl font-semibold px-4 mb-6">História</h2>
                    {clan.about ? (
                      <div
                        className="px-4"
                        dangerouslySetInnerHTML={{
                          __html: clan.about.html,
                        }}
                      />
                    ) : (
                      <span className="px-4">Nada encontrado.</span>
                    )}
                  </div>
                </div>
              );
            }
          })
        )}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as unknown as IParams;
  return {
    props: {
      params,
    },
  };
};
