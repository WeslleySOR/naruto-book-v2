import Head from "next/head";
import { useContext } from "react";
import { CardComponent } from "../../components/CardComponent";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { BijuusContext } from "../../contexts/BijuusContext";

export default function Bijuus() {
  const { bijuus } = useContext(BijuusContext);
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Bijuus</title>
      </Head>
      <main className="flex flex-wrap justify-center items-center gap-6 py-12 px-6">
        {bijuus.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          bijuus.map((bijuu) => (
            <CardComponent
              key={bijuu.slug}
              slug={bijuu.slug}
              image={bijuu.images[0].url}
              name={bijuu.name}
            />
          ))
        )}
      </main>
    </>
  );
}
