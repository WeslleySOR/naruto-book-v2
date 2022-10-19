import Head from "next/head";
import { useContext } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { CharactersContext } from "../../contexts/CharactersContext";

export default function Characters() {
  const { characters } = useContext(CharactersContext)
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Characters</title>
      </Head>
      <main className="flex flex-wrap justify-center items-center gap-6 py-12 px-6">
        {characters.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.about?.html} character={character} />
          ))
        )}
      </main>
    </>
  );
}