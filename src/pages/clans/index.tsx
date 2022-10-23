import Head from "next/head";
import { useContext } from "react";
import { CardWrapper } from "../../components/CardWrapper";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ClansContext } from "../../contexts/ClansContext";

export default function Clans() {
  const { clans } = useContext(ClansContext);
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Clans</title>
      </Head>
      <main className="flex flex-wrap justify-center items-center gap-6 py-12">
        {clans.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          clans.map((clan) => (
            <CardWrapper
              key={clan.slug}
              url={`/clans/${clan.slug}`}
              image={clan.images[0].url}
              name={clan.name}
            />
          ))
        )}
      </main>
    </>
  );
}
