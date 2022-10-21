import Head from "next/head";
import NextLink from 'next/link'
import { useContext } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { BijuusContext } from "../../contexts/BijuusContext";
import { GetStaticPaths, GetStaticProps } from "next";

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
                <div className="flex flex-col gap-6" key={bijuu.name}>
                  <div className="flex flex-col gap-1">
                    <div className="w-full">
                      <img
                        className="w-full"
                        src={bijuu.images[0].url}
                        alt=""
                      />
                    </div>
                    <strong className="text-lg text-center">{bijuu.name}</strong>
                  </div>
                  <div className="flex flex-col mt-12">
                    <h2 className="text-2xl font-semibold px-4 mb-6">História</h2>
                    {bijuu.about ? (
                      <div
                        className="px-4"
                        dangerouslySetInnerHTML={{
                          __html: bijuu.about.html,
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
