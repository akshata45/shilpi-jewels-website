import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollButtons from "./components/ScrollButtons";

import Collections from "./sections/Collections";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import TermsConditions from "./sections/TermsConditions";
import CollectionPage from "./pages/CollectionPage";
import MissionPage from "./pages/MissionPage";
import ContactPage from "./pages/ContactPage";
import TwentyKTPage from "./pages/TwentyKTPage";
import TwentyTwoKTPage from "./pages/TwentyTwoKTPage";
import EighteenKTPage from "./pages/EighteenKTPage";
import CraftsmanshipPage from "./pages/CraftsmanshipPage";


/* =========================
   APP
========================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            HOME PAGE
            URL: /
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            COLLECTION PAGE
            URL: /collection
        ========================= */}

        <Route
          path="/collection"
          element={
            <>


              <CollectionPage />
          

              <ScrollButtons />
            </>
          }
        />
        <Route path="/missionpage" element={
          <>
            <Header />

            <MissionPage />

            <Footer />

            <ScrollButtons />
          </>
        } />
        <Route path="/contactpage" element={
          <>
            <Header />

            <ContactPage />

            <Footer />

            <ScrollButtons />
          </>
        } />
        <Route path="/20ktpage" element={
          <>
            <Header />

            <TwentyKTPage />

            <Footer />

            <ScrollButtons />
          </>
        } />
        <Route path="/22ktpage" element={
          <>
            <Header />

            <TwentyTwoKTPage />

            <Footer />

            <ScrollButtons />
          </>
        } />
        <Route path="/18ktpage" element={
          <>
            <Header />

            <EighteenKTPage />

            <Footer />

            <ScrollButtons />
          </>
        } />
        <Route path="/craftsmanshippage" element={
          <>
            <Header />

            <CraftsmanshipPage />

            <Footer />

            <ScrollButtons />
          </>
        } />
        {/* =========================
            PRIVACY POLICY PAGE
            URL: /privacy-policy
        ========================= */}

        <Route
          path="/privacy-policy"
          element={
            <>
              <Header />

              <PrivacyPolicy />

              <Footer />

              <ScrollButtons />
            </>
          }
        />


        {/* =========================
            TERMS & CONDITIONS PAGE
            URL: /terms-conditions
        ========================= */}

        <Route
          path="/terms-conditions"
          element={
            <>
              <Header />

              <TermsConditions />

              <Footer />

              <ScrollButtons />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;