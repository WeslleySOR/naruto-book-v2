import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Naruto Book v2 - Home</title>
      </Head>
      <main className="flex flex-col justify-center gap-8 py-12 px-6 lg:px-16">
        <h1 className="text-2xl font-bold text-center">Naruto Book v2</h1>
        <p className="w-full">
          Como o próprio nome ja diz é uma versão 2 de um outro Naruto Book,
          porém totalmente diferente, tanto o layout quanto as libs.
        </p>
        <article className="w-full">
          <h2 className="font-bold text-lg">Utilidade:</h2>
          <p className="font-normal text-base">
            Esse projeto foi feito somente como informativo, sobre o anime{" "}
            <a
              className="underline"
              href="https://naruto-official.com/en"
              target="__blank"
              aria-label="Site Oficial de Naruto"
            >
              Naruto
            </a>
            .
          </p>
          <p className="font-normal text-base">
            Todos os dados foram alimentados por mim no Hygraph com base no que
            encontrei pelas wikis de{" "}
            <a
              className="underline"
              href="https://naruto-official.com/en"
              target="__blank"
              aria-label="Site Oficial de Naruto"
            >
              Naruto
            </a>{" "}
            criada por fãs.
          </p>
        </article>
        <article className="w-full">
          <h2 className="font-bold text-lg">Novidades:</h2>
          <ol className="list-disc mt-2 px-5">
            <li>Estilização feita com tailwindcss.</li>
            <li>
              Agora ao invés de utilizar o json server como database, é
              utilizado o antigo GraphCMS agora chamado de Hygraph, utilizando o
              Apollo para requisição.
            </li>
          </ol>
          <div className="flex flex-col p-4 mt-4 gap-2 rounded-md max-w-fit bg-[#262626]">
            <p>
              <strong>Repo v1: </strong>
              <a
                className="underline"
                href="https://github.com/WeslleySOR/naruto-book"
                target="__blank"
              >
                https://github.com/WeslleySOR/naruto-book
              </a>
            </p>
            <p>
              <strong>Repo v2: </strong>
              <a
                className="underline"
                href="https://github.com/WeslleySOR/naruto-book-v2"
                target="__blank"
              >
                https://github.com/WeslleySOR/naruto-book-v2
              </a>
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
