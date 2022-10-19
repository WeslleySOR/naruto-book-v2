import Head from "next/head";
import { useContext } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { CharactersContext } from "../../contexts/CharactersContext";
import { GetStaticPaths, GetStaticProps } from "next";

interface IParams {
  params: {
    slug: string;
  };
}

export default function ClanPage(params: IParams) {
  const { characters } = useContext(CharactersContext);
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Character</title>
      </Head>
      <main className="flex items-center gap-4 p-12">
        {characters.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          characters.map((character) => {
            if (character.slug === params.params.slug) {
              return (
                <div className="flex gap-6" key={character.name}>
                  <div className="flex flex-col gap-2">
                    <div className="w-80 h-w-80 rounded-md">
                      <img
                        className="w-full h-w-full rounded-md"
                        src={character.images[0].url}
                        alt=""
                      />
                    </div>
                    <span className="text-lg">
                      Nome: <strong>{character.name}</strong>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-center text-2xl font-semibold mb-6">História</h2>
                    {character.about ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: character.about.html,
                        }}
                      />
                    ) : (
                      <span>Nada encontrado.</span>
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
