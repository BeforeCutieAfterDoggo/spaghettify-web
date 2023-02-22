import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import { PropsWithChildren } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const PlausibleWrapper = ({ children }: PropsWithChildren<{}>) => {
    if (process.env.NODE_ENV === "production") {
      return (
        <PlausibleProvider domain="spaghettify.dev">
          {children}
        </PlausibleProvider>
      );
    }
    return <>{children}</>;
  };

  return (
    <PlausibleWrapper>
      <Component {...pageProps} />;
    </PlausibleWrapper>
  );
}
