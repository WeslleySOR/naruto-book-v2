import Head from "next/head";
import { useContext } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { CharactersContext } from "../contexts/CharactersContext";

export default function Home() {
  const { characters } = useContext(CharactersContext);
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Home</title>
      </Head>
      <main className="flex justify-center items-center">
        {characters.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          characters.map((character) => (
            <div key={character.about?.html}>
              <h1>{character.name}</h1>
            </div>
          ))
        )}
      </main>
    </>
  );
}
