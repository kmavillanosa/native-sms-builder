import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PWA from "@/shared/pwa/PWA";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PWA>
      <Component {...pageProps} />
    </PWA>
  );
}
