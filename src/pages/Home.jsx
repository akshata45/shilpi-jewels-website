import Header from "../components/Header";
import ScrollButtons from "../components/ScrollButtons";

import Hero from "../sections/Hero";
import Collections from "../sections/Collections";
import Legacy from "../sections/Legacy";
import Craftsmanship from "../sections/Craftsmanship";
import NewChapter from "../sections/NewChapter";
import DiscoverCraftsmanship from "../sections/DiscoverCraftsmanship";
import ArtOfGold from "../sections/ArtOfGold";
import Signature from "../sections/Signature";

import Footer from "../components/Footer";

/* =========================
   HOME PAGE
========================= */

function Home() {
  return (
    <>
      {/* =========================
          HEADER
      ========================= */}

      <Header />

      {/* =========================
          HERO
      ========================= */}

      <Hero />

      {/* =========================
          COLLECTIONS
      ========================= */}

      <Collections />

      {/* =========================
          MISSION / LEGACY
      ========================= */}

      <Legacy />

      {/* =========================
          CRAFTSMANSHIP
      ========================= */}

      <Craftsmanship />

      {/* =========================
          NEW CHAPTER
      ========================= */}

      <NewChapter />

      {/* =========================
          DISCOVER CRAFTSMANSHIP
      ========================= */}

      <DiscoverCraftsmanship />

      {/* =========================
          ART OF GOLD
      ========================= */}

      <ArtOfGold />

      {/* =========================
          SIGNATURE
      ========================= */}

      <Signature />

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

      {/* =========================
          SCROLL BUTTONS
      ========================= */}

      <ScrollButtons />
    </>
  );
}

export default Home;