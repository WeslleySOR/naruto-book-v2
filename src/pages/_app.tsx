import type { AppProps } from "next/app";
import GlobalContext from "../contexts";

import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
