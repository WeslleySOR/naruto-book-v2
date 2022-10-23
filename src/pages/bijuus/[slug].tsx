import Head from "next/head";
import { useContext } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { BijuusContext } from "../../contexts/BijuusContext";
import { GetStaticPaths, GetStaticProps } from "next";
import { ImageWrapper } from "../../components/ImageWrapper";

interface IParams {
  params: {
    slug: string;
  };
}

export default function BijuuPage(params: IParams) {
  const { bijuus } = useContext(BijuusContext);
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Bijuu</title>
      </Head>
      <main className="flex items-center gap-4 py-12">
        {bijuus.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          bijuus.map((bijuu) => {
            if (bijuu.slug === params.params.slug) {
              return (
                <div
                  className="flex flex-col items-center gap-6 lg:flex-row lg:items-start"
                  key={bijuu.name}
                >
                  <div className="flex flex-col gap-2 w-fit">
                    <div className="h-[calc(100vw-4rem)] max-h-[512px] rounded ring-2 ring-[#11B5E4] ring-offset-4 ring-offset-[#df8236] mx-8 lg:w-[512px] lg:h-[512px]">
                      <ImageWrapper
                        src={bijuu.images[0].url}
                        alt={`Imagem do(a): ${bijuu.name}`}
                      />
                    </div>
                    <strong className="text-lg text-center">
                      {bijuu.name}
                    </strong>
                  </div>
                  {bijuu.about ? (
                    <div className="flex flex-col gap-6 mt-2 mx-0 lg:mx-6 lg:mt-0">
                      <div
                        className="px-4 mt-8 lg:mt-0 lg:px-0"
                        dangerouslySetInnerHTML={{
                          __html: bijuu.about.html,
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
