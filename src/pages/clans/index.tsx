import Head from "next/head";
import { useContext } from "react";
import { ClanCard } from "../../components/ClanCard";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ClansContext } from "../../contexts/ClansContext";

export default function Clans() {
  const { clans } = useContext(ClansContext)
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Clans</title>
      </Head>
      <main className="flex justify-center items-center gap-4 py-12 px-6">
        {clans.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          clans.map((clan) => (
            <ClanCard key={clan.about?.html} clan={clan} />
          ))
        )}
      </main>
    </>
  );
}