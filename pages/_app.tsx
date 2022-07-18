import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider, UiProvider } from "../contexts";

import NextNProgress from "nextjs-progressbar";
import { T } from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <AuthProvider>
          <UiProvider>
            <NextNProgress color={T.darkPurple} height={5} />
            <Component {...pageProps} />
          </UiProvider>
        </AuthProvider>
      )}
    </>
  );
}

export default MyApp;
