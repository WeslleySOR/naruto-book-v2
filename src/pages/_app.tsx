import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import GlobalContext from "../contexts";

import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Header />
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
