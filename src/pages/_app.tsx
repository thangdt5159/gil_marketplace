import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-raleway bg-main text-white">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
