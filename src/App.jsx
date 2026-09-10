import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollButtons from "./components/ScrollButtons";
import SEO from "./components/SEO";

import Header from "./components/Header";

import Hero from "./sections/Hero";
import Collections from "./sections/Collections";
import Legacy from "./sections/Legacy";
import Craftsmanship from "./sections/Craftsmanship";
import NewChapter from "./sections/NewChapter";
import DiscoverCraftsmanship from "./sections/DiscoverCraftsmanship";
import ArtOfGold from "./sections/ArtOfGold";
import Signature from "./sections/Signature";

import Footer from "./components/Footer";

import PrivacyPolicy from "./sections/PrivacyPolicy";
import TermsConditions from "./sections/TermsConditions";


/* =========================
   HOME PAGE
========================= */

function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Collections />

      <Legacy />

      <Craftsmanship />

      <NewChapter />

      <DiscoverCraftsmanship />

      <ArtOfGold />

      <Signature />

      <Footer />
      <ScrollButtons />
    </>
  );
}


/* =========================
   APP
========================= */

function App() {
  return (
    <>
    <SEO
        title="Jewellery Crafted Through Generations"
        description="Discover Shilpi Jewels, crafted with 43 years of craftsmanship, trust and timeless artistry in traditional and contemporary Indian jewellery."
        canonical="https://primeshilp.com/"
        keywords="Shilpi Jewels, Indian jewellery, gold jewellery, traditional jewellery, contemporary jewellery, 22KT gold jewellery"
      />

      <Header />

      <main>

        <Hero />

        <Collections />

        {/* Other sections */}

      </main>
    <BrowserRouter>

      <Routes>

        {/* =========================
            HOME PAGE
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            PRIVACY POLICY PAGE
        ========================= */}

        <Route
          path="/privacy-policy"
          element={
            <>
              <Header />

              <PrivacyPolicy />

              <Footer />
            </>
          }
        />


        {/* =========================
            TERMS & CONDITIONS PAGE
        ========================= */}

        <Route
          path="/terms-conditions"
          element={
            <>
              <Header />

              <TermsConditions />

              <Footer />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
    </>
  );
}


export default App;