import Head from "next/head";
import { useContext } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ClansContext } from "../../contexts/ClansContext";
import { GetStaticPaths, GetStaticProps } from "next";

interface IParams {
  params: {
    slug: string;
  };
}

export default function ClanPage(params: IParams) {
  const { clans } = useContext(ClansContext);
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
