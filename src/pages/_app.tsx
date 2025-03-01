import type { AppProps } from "next/app";
import "../styles/globals.css"; // Ensure the global styles are applied

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
