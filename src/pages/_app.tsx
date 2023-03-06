import type { AppProps } from "next/app";
import "../index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-raleway bg-main text-white">
      <Component {...pageProps} />
    </div>
  );
}
