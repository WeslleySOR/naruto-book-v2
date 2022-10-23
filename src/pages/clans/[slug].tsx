import Head from "next/head";
import { useContext, useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ClansContext } from "../../contexts/ClansContext";
import { GetStaticPaths, GetStaticProps } from "next";
import { ImageWrapper } from "../../components/ImageWrapper";

interface IParams {
  params: {
    slug: string;
  };
}

export default function ClanPage(params: IParams) {
  const { clans } = useContext(ClansContext);
  useEffect(() => {
    console.log(params, 'Teste')
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
                <div
                  className="flex flex-col items-center gap-6 lg:flex-row lg:items-start"
                  key={clan.name}
                >
                  <div className="flex flex-col gap-2 w-fit">
                  <div className="h-[calc(100vw-4rem)] max-h-[512px] rounded ring-2 ring-[#11B5E4] ring-offset-4 ring-offset-[#df8236] mx-8 lg:w-[512px] lg:h-[512px]">
                      <ImageWrapper
                        src={clan.images[0].url}
                        alt={`Imagem do(a): ${clan.name}`}
                      />
                    </div>
                    <strong className="text-lg text-center">
                      {clan.name}
                    </strong>
                  </div>
                  {clan.about ? (
                    <div className="flex flex-col gap-6 mt-2 mx-0 lg:mx-6 lg:mt-0">
                      <div
                        className="px-4 mt-8 lg:mt-0 lg:px-0"
                        dangerouslySetInnerHTML={{
                          __html: clan.about.html,
                        }}
                      />
                    </div>
                  ) : (
                    <span className="px-4 mt-8 lg:mt-0 lg:px-0">
                      Nada encontrado.
                    </span>
                  )}
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
