import About from "../components/About";
import Collection from "../components/Collection";
import Community from "../components/Community";
import Guide from "../components/Guide";
import Creator from "../components/Creator";
import TopItems from "../components/TopItems";
import Header from "../components/Header";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className={`relative ${toggle && "h-screen overflow-hidden"}`}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Header />
      <TopItems />
      <Creator />
      <Community />
      <About />
      <Collection />
      <Guide />
      <Join />
      <Footer />
    </main>
  );
}
