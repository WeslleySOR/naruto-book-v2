import Head from "next/head";
import { useContext } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { CharactersContext } from "../../contexts/CharactersContext";

export default function Bijuus() {
  const { characters } = useContext(CharactersContext);
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Beasts</title>
      </Head>
      <main className="flex justify-center items-center gap-4 py-12 px-6">
        <p>Beasts Page</p>
        {/* {characters.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.about?.html} character={character} />
          ))
        )} */}
      </main>
    </>
  );
}
