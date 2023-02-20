import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useFathom } from "@/hooks/useFathom";

export default function App({ Component, pageProps }: AppProps) {
  useFathom("MZGKSHWL", {
    url: "https://ruby-parrot.spaghettify.dev/script.js",
    includedDomains: ["spaghettify.dev"],
    spa: "auto",
  });

  return <Component {...pageProps} />;
}
