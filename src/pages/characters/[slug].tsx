import Head from "next/head";
import NextLink from 'next/link'
import { useContext } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { CharactersContext } from "../../contexts/CharactersContext";
import { GetStaticPaths, GetStaticProps } from "next";

interface IParams {
  params: {
    slug: string;
  };
}

export default function CharacterPage(params: IParams) {
  const { characters } = useContext(CharactersContext);
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Character</title>
      </Head>
      <main className="flex items-center gap-4 py-12">
        {characters.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          characters.map((character) => {
            if (character.slug === params.params.slug) {
              return (
                <div className="flex flex-col gap-6" key={character.name}>
                  <div className="flex flex-col gap-1">
                    <div className="w-full">
                      <img
                        className="w-full"
                        src={character.images[0].url}
                        alt=""
                      />
                    </div>
                    <strong className="text-lg text-center">{character.clan !== null ? character.clan.name + " " : ""}{character.name}</strong>
                  </div>
                  <div className="flex flex-col gap-2 p-4 mx-4 rounded-md bg-zinc-800">
                    <span>Clan: {character.clan !== null ? <NextLink href={`/clans/${character.clan.name?.toLowerCase()}`}><a className="underline underline-offset-2">{character.clan.name}</a></NextLink> : "Desconhecido"}</span>
                    <span>Patente Ninja: Nenhuma</span>
                    <span>Bijuu: {character.bijuu !== null ? <NextLink href={`/bijuus/${character.bijuu.name?.toLowerCase()}`}><a className="underline underline-offset-2">{character.bijuu.name}</a></NextLink> : "Não possui"}</span>
                  </div>
                  <div className="flex flex-col mt-12">
                    <h2 className="text-2xl font-semibold px-4 mb-6">História</h2>
                    {character.about ? (
                      <div
                        className="px-4"
                        dangerouslySetInnerHTML={{
                          __html: character.about.html,
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
