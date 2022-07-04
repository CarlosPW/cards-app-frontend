import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider, UiProvider } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </AuthProvider>
  );
}

export default MyApp;
