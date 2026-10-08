import { useEffect, useState } from "react";

import eighteenBanner from "../assets/images/18kt-banner.jpg";
import eighteenRing from "../assets/images/18kt-ring.png";
import eighteenEarrings from "../assets/images/collection-2.jpg";
import eighteenPendant from "../assets/images/18kt-pendant.png";
import eighteenDiamond from "../assets/images/18kt-diamond.png";
import eighteenBangle from "../assets/images/eighteenBangle.png";
import eighteenMenBracelet from "../assets/images/eighteenMenBracelet.png";
import collection5 from "../assets/images/collection-5.jpg";

/* =========================================================
   RESPONSIVE HOOK
========================================================= */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const update = () => {
      setMatches(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, [query]);

  return matches;
}

/* =========================================================
   18KT PAGE
========================================================= */

function EighteenKTPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  /* =======================================================
     STYLES
  ======================================================= */

  const styles = {
    page: {
      width: "100%",
      overflow: "hidden",
      background: "#ffffff",
      color: "#27255a",
      boxSizing: "border-box",
    },

    /* =====================================================
       HERO
    ===================================================== */

    hero: {
      width: "100%",
      minHeight: isMobile
        ? "500px"
        : isTablet
          ? "590px"
          : "680px",

      position: "relative",
      display: "flex",
      alignItems: "center",

      backgroundImage: `url(${eighteenBanner})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",

      boxSizing: "border-box",
      marginTop: isMobile ? "0px" : "30px",
    },

    heroOverlay: {
      position: "absolute",
      inset: 0,

      background:
        "linear-gradient(90deg, rgba(22,20,18,0.78) 0%, rgba(22,20,18,0.55) 43%, rgba(22,20,18,0.12) 100%)",
    },

    heroInner: {
      position: "relative",
      zIndex: 2,

      width: isMobile
        ? "calc(100% - 40px)"
        : isTablet
          ? "calc(100% - 70px)"
          : "calc(100% - 188px)",

      maxWidth: "1510px",
      margin: "0 auto",
      boxSizing: "border-box",
    },

    heroContent: {
      maxWidth: isMobile
        ? "100%"
        : isTablet
          ? "650px"
          : "730px",
    },

    heroLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "10px" : "12px",

      letterSpacing: "4px",
      textTransform: "uppercase",

      color: "rgba(255,255,255,0.88)",
      fontWeight: 400,
    },

    heroLine: {
      width: isMobile ? "45px" : "65px",
      height: "1px",

      margin: "20px 0",

      background: "#d2b36c",
    },

    heroHeading: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "45px"
        : isTablet
          ? "60px"
          : "78px",

      lineHeight: 1.05,
      fontWeight: 400,
      letterSpacing: "-1px",

      color: "#ffffff",
    },

    heroItalic: {
      fontStyle: "italic",
      color: "#d8bd82",
    },

    heroText: {
      margin: isMobile
        ? "24px 0 0"
        : "30px 0 0",

      maxWidth: "630px",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "14px" : "18px",

      lineHeight: 1.8,
      fontWeight: 300,

      color: "rgba(255,255,255,0.88)",
    },

    heroBadge: {
      marginTop: isMobile ? "30px" : "38px",

      display: "inline-flex",
      alignItems: "center",

      padding: isMobile
        ? "10px 17px"
        : "12px 20px",

      border: "1px solid rgba(216,189,130,0.65)",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "10px" : "11px",

      letterSpacing: "2px",
      textTransform: "uppercase",

      color: "#e0c68c",

      boxSizing: "border-box",
    },

    /* =====================================================
       INTRODUCTION
    ===================================================== */

    introSection: {
      width: "100%",

      padding: isMobile
        ? "70px 25px"
        : isTablet
          ? "90px 45px"
          : "120px 60px",

      background: "#ffffff",
      boxSizing: "border-box",
    },

    introInner: {
      width: "100%",
      maxWidth: "1050px",
      margin: "0 auto",
      textAlign: "center",
    },

    sectionLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "10px" : "12px",

      letterSpacing: "3px",
      textTransform: "uppercase",

      color: "#a18143",
      fontWeight: 500,
    },

    introLine: {
      width: isMobile ? "42px" : "58px",
      height: "1px",

      margin: "17px auto 22px",

      background: "#b69659",
    },

    introTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "35px"
        : isTablet
          ? "46px"
          : "58px",

      lineHeight: 1.2,
      fontWeight: 400,

      color: "#27255a",
    },

    introItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    introText: {
      margin: isMobile
        ? "24px auto 0"
        : "30px auto 0",

      maxWidth: "880px",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "14px" : "17px",

      lineHeight: 1.9,
      fontWeight: 300,

      color: "#707070",
    },

    /* =====================================================
       PURITY FEATURE
    ===================================================== */

    puritySection: {
      width: "100%",

      padding: isMobile
        ? "20px 20px 75px"
        : isTablet
          ? "20px 35px 100px"
          : "20px 60px 125px",

      background: "#ffffff",
      boxSizing: "border-box",
    },

    purityInner: {
      width: "100%",
      maxWidth: "1320px",
      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "1fr"
          : "0.85fr 1.15fr",

      gap: isMobile
        ? "40px"
        : isTablet
          ? "55px"
          : "85px",

      alignItems: "stretch",
    },

    purityImageWrap: {
      width: "100%",

      minHeight: isMobile
        ? "370px"
        : isTablet
          ? "500px"
          : "600px",

      overflow: "hidden",

      background: "#f3f0e9",
      position: "relative",
    },

    purityImage: {
      width: "100%",
      height: "100%",

      minHeight: isMobile
        ? "370px"
        : isTablet
          ? "500px"
          : "600px",

      display: "block",

      objectFit: "cover",
      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    purityImageLabel: {
      position: "absolute",

      left: isMobile ? "15px" : "25px",
      bottom: isMobile ? "15px" : "25px",

      padding: "9px 14px",

      background: "rgba(39,37,90,0.92)",

      color: "#ffffff",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "9px" : "11px",

      letterSpacing: "1.5px",
      textTransform: "uppercase",
    },

    purityContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      padding: isMobile
        ? "0"
        : isTablet
          ? "10px 25px"
          : "20px 35px",
    },

    purityTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "36px"
        : isTablet
          ? "46px"
          : "58px",

      lineHeight: 1.15,
      fontWeight: 400,

      color: "#27255a",
    },

    purityItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    purityText: {
      margin: isMobile
        ? "22px 0 0"
        : "28px 0 0",

      maxWidth: "610px",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "14px" : "17px",

      lineHeight: 1.9,
      fontWeight: 300,

      color: "#707070",
    },

    purityFacts: {
      marginTop: isMobile ? "30px" : "40px",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr 1fr"
        : "repeat(2, 1fr)",

      gap: "12px",
    },

    purityFact: {
      padding: isMobile
        ? "18px 15px"
        : "22px 20px",

      border: "1px solid rgba(161,129,67,0.28)",

      background: "#fbfaf7",
      boxSizing: "border-box",
    },

    purityFactNumber: {
      margin: 0,

      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile ? "24px" : "30px",

      color: "#a18143",
      fontWeight: 400,
    },

    purityFactLabel: {
      margin: "5px 0 0",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "10px" : "11px",

      letterSpacing: "1.5px",
      textTransform: "uppercase",

      color: "#777777",
    },

    /* =====================================================
       JEWELLERY COLLECTION
    ===================================================== */

    collectionSection: {
      width: "100%",

      padding: isMobile
        ? "75px 20px 85px"
        : isTablet
          ? "90px 35px 105px"
          : "120px 60px 135px",

      background: "#f7f4ee",
      boxSizing: "border-box",
    },

    collectionInner: {
      width: "100%",
      maxWidth: "1350px",
      margin: "0 auto",
    },

    collectionHeader: {
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
    },

    collectionTitle: {
      margin: "18px 0 0",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "35px"
        : isTablet
          ? "45px"
          : "57px",

      lineHeight: 1.15,
      fontWeight: 400,

      color: "#27255a",
    },

    collectionItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    collectionIntro: {
      margin: "22px auto 0",

      maxWidth: "720px",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "14px" : "16px",

      lineHeight: 1.85,
      fontWeight: 300,

      color: "#737373",
    },

    collectionGrid: {
      marginTop: isMobile
        ? "45px"
        : "65px",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "repeat(2, 1fr)"
          : "repeat(4, 1fr)",

      gap: isMobile ? "18px" : "22px",
    },

    collectionCard: {
      background: "#ffffff",
      boxSizing: "border-box",

      transition:
        "transform 0.35s ease, box-shadow 0.35s ease",
    },

    collectionImageWrap: {
      width: "100%",

      height: isMobile
        ? "360px"
        : isTablet
          ? "400px"
          : "450px",

      overflow: "hidden",
      background: "#eeeae2",
    },

    collectionImage: {
      width: "100%",
      height: "100%",

      display: "block",

      objectFit: "cover",
      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    collectionContent: {
      padding: isMobile
        ? "24px 20px 27px"
        : "28px 25px 32px",

      textAlign: "center",
    },

    collectionCardTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile ? "24px" : "27px",

      lineHeight: 1.2,
      fontWeight: 400,

      color: "#27255a",
    },

    collectionCardText: {
      margin: "12px 0 0",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "12px" : "13px",

      lineHeight: 1.7,
      fontWeight: 300,

      color: "#777777",
    },

    /* =====================================================
       DESIGN PHILOSOPHY
    ===================================================== */

    philosophySection: {
      width: "100%",

      padding: isMobile
        ? "75px 25px"
        : isTablet
          ? "95px 40px"
          : "125px 60px",

      background: "#29255d",
      boxSizing: "border-box",
    },

    philosophyInner: {
      width: "100%",
      maxWidth: "1150px",
      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "1fr 1fr",

      gap: isMobile
        ? "45px"
        : "75px",

      alignItems: "center",
    },

    philosophyContent: {
      boxSizing: "border-box",
    },

    philosophyLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "10px" : "11px",

      letterSpacing: "3px",
      textTransform: "uppercase",

      color: "#d3b575",
      fontWeight: 500,
    },

    philosophyLine: {
      width: "55px",
      height: "1px",

      margin: "17px 0 22px",

      background: "#b69659",
    },

    philosophyTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "35px"
        : isTablet
          ? "43px"
          : "52px",

      lineHeight: 1.2,
      fontWeight: 400,

      color: "#ffffff",
    },

    philosophyItalic: {
      fontStyle: "italic",
      color: "#d3b575",
    },

    philosophyText: {
      margin: isMobile
        ? "22px 0 0"
        : "28px 0 0",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "14px" : "16px",

      lineHeight: 1.9,
      fontWeight: 300,

      color: "rgba(255,255,255,0.72)",
    },

    philosophyPoints: {
      marginTop: isMobile ? "30px" : "38px",

      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },

    philosophyPoint: {
      display: "flex",
      alignItems: "flex-start",
      gap: "15px",
    },

    philosophyNumber: {
      minWidth: "30px",
      height: "30px",

      border: "1px solid #b69659",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: "12px",
      color: "#d3b575",
    },

    philosophyPointText: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "13px" : "14px",

      lineHeight: 1.7,
      fontWeight: 300,

      color: "rgba(255,255,255,0.75)",
    },

    philosophyImageWrap: {
      width: "100%",

      height: isMobile
        ? "400px"
        : isTablet
          ? "480px"
          : "590px",

      overflow: "hidden",

      background: "#201e4a",
    },

    philosophyImage: {
      width: "100%",
      height: "100%",

      display: "block",

      objectFit: "cover",
      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    /* =====================================================
       HALLMARK SECTION
    ===================================================== */

    hallmarkSection: {
      width: "100%",

      padding: isMobile
        ? "75px 20px 85px"
        : isTablet
          ? "90px 35px 105px"
          : "115px 60px 130px",

      background: "#ffffff",
      boxSizing: "border-box",
    },

    hallmarkInner: {
      width: "100%",
      maxWidth: "1250px",
      margin: "0 auto",

      textAlign: "center",
    },

    hallmarkTitle: {
      margin: "18px 0 0",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "34px"
        : isTablet
          ? "44px"
          : "55px",

      lineHeight: 1.2,
      fontWeight: 400,

      color: "#27255a",
    },

    hallmarkItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    hallmarkIntro: {
      margin: "22px auto 0",

      maxWidth: "790px",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "13px" : "15px",

      lineHeight: 1.8,
      fontWeight: 300,

      color: "#707070",
    },

    hallmarkGrid: {
      marginTop: isMobile
        ? "40px"
        : "55px",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(3, 1fr)",

      gap: isMobile ? "15px" : "20px",
    },

    hallmarkCard: {
      padding: isMobile
        ? "30px 22px"
        : "38px 28px",

      border: "1px solid rgba(161,129,67,0.25)",

      background: "#fbfaf7",

      boxSizing: "border-box",
    },

    hallmarkCardNumber: {
      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: "28px",
      fontStyle: "italic",

      color: "#b69659",
    },

    hallmarkCardTitle: {
      margin: "10px 0 0",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile ? "23px" : "26px",

      fontWeight: 400,
      color: "#27255a",
    },

    hallmarkCardText: {
      margin: "12px 0 0",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "12px" : "13px",

      lineHeight: 1.75,
      fontWeight: 300,

      color: "#777777",
    },

    /* =====================================================
       FINAL STATEMENT
    ===================================================== */

    finalSection: {
      width: "100%",

      padding: isMobile
        ? "70px 25px 80px"
        : "100px 40px 115px",

      background: "#f7f4ee",
      textAlign: "center",

      boxSizing: "border-box",
    },

    finalInner: {
      width: "100%",
      maxWidth: "900px",
      margin: "0 auto",
    },

    finalTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "31px"
        : isTablet
          ? "40px"
          : "50px",

      lineHeight: 1.3,
      fontWeight: 400,

      color: "#27255a",
    },

    finalItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    finalText: {
      margin: "22px auto 0",

      maxWidth: "700px",

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "14px" : "16px",

      lineHeight: 1.8,
      fontWeight: 300,

      color: "#777777",
    },
  };

  /* =======================================================
     CONTENT
  ======================================================= */

  const jewelleryForms = [
    {
      title: "Rings",
      text:
        "18KT gold offers a refined foundation for rings where clean silhouettes, diamonds and detailed settings come together beautifully.",
      image: eighteenRing,
    },

    {
      title: "Earrings",
      text:
        "From understated studs to expressive silhouettes, 18KT gold allows fine detailing while retaining a sophisticated, contemporary character.",
      image: eighteenEarrings,
    },

{
  title: "Bangles",
  text:
    "18KT gold bangles bring together elegant forms, refined detailing and timeless designs made for effortless everyday styling.",
  image: eighteenBangle,
},

{
  title: "Men's Bracelets",
  text:
    "18KT gold men's bracelets bring together bold forms, refined detailing and a timeless character designed for confident everyday styling.",
  image: eighteenMenBracelet,
},
  ];

  const hallmarkPoints = [
    {
      number: "750",
      title: "75% Gold",
      text:
        "18KT represents 18 parts pure gold out of 24, equivalent to 75% gold content or 750 fineness.",
    },

    {
      number: "18K",
      title: "18 Karat",
      text:
        "The 18K designation identifies the gold purity by karat, while 750 expresses the same purity in parts per thousand.",
    },

    {
      number: "HUID",
      title: "Hallmark Identification",
      text:
        "For BIS-hallmarked jewellery, customers can look for the BIS mark, purity/fineness and the six-digit HUID identification.",
    },
  ];

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <main style={styles.page}>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        style={styles.hero}
        aria-label="Shilpi Jewels 18KT Gold"
      >

        <div style={styles.heroOverlay} />

        <div style={styles.heroInner}>

          <div style={styles.heroContent}>

            <p style={styles.heroLabel}>
              SHILPI JEWELS · 18KT GOLD
            </p>

            <div style={styles.heroLine} />

            <h1 style={styles.heroHeading}>
              The Art of
              <br />

              <span style={styles.heroItalic}>
                Modern Gold.
              </span>
            </h1>

            <p style={styles.heroText}>
              A refined expression of gold created for
              contemporary jewellery. 18KT brings together
              elegance, strength and design flexibility,
              making it beautifully suited to modern
              silhouettes and detailed craftsmanship.
            </p>

            <div style={styles.heroBadge}>
              18KT · 750 Fineness
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section style={styles.introSection}>

        <div style={styles.introInner}>

          <p style={styles.sectionLabel}>
            UNDERSTANDING 18KT
          </p>

          <div style={styles.introLine} />

          <h2 style={styles.introTitle}>
            Gold With{" "}
            <span style={styles.introItalic}>
              Contemporary Character
            </span>
          </h2>

          <p style={styles.introText}>
            18KT gold contains 18 parts pure gold out of
            24, giving it a fineness of 750, or 75% pure
            gold. The remaining alloy content allows
            jewellers greater flexibility when creating
            detailed forms and stone-set designs. It is
            particularly suited to jewellery where design,
            setting and everyday wearability come together.
          </p>

        </div>

      </section>


      {/* =================================================
          PURITY FEATURE
      ================================================= */}

      <section style={styles.puritySection}>

        <div style={styles.purityInner}>

          <div
            style={styles.purityImageWrap}

            onMouseEnter={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1.035)";
                }
              }
            }}

            onMouseLeave={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1)";
                }
              }
            }}
          >

            <img
              src={eighteenRing}
              alt="18KT gold jewellery"
              style={styles.purityImage}
            />

            <div style={styles.purityImageLabel}>
              18KT Gold
            </div>

          </div>


          <div style={styles.purityContent}>

            <p style={styles.sectionLabel}>
              THE 18KT BALANCE
            </p>

            <div
              style={{
                ...styles.introLine,
                marginLeft: "0",
              }}
            />

            <h2 style={styles.purityTitle}>
              Refined Gold,
              <br />

              <span style={styles.purityItalic}>
                Designed to Detail.
              </span>
            </h2>

            <p style={styles.purityText}>
              18KT gold occupies a distinctive place in
              contemporary jewellery. Its 75% gold content
              offers the richness associated with gold,
              while its alloy composition supports the
              structural demands of intricate jewellery
              design.
            </p>

            <p style={styles.purityText}>
              This balance makes 18KT particularly suitable
              for pieces featuring diamonds, gemstones,
              delicate detailing and modern silhouettes.
            </p>


            <div style={styles.purityFacts}>

              <div style={styles.purityFact}>
                <p style={styles.purityFactNumber}>
                  18
                </p>

                <p style={styles.purityFactLabel}>
                  Parts Gold
                </p>
              </div>

              <div style={styles.purityFact}>
                <p style={styles.purityFactNumber}>
                  750
                </p>

                <p style={styles.purityFactLabel}>
                  Fineness
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          JEWELLERY FORMS
      ================================================= */}

      <section style={styles.collectionSection}>

        <div style={styles.collectionInner}>

          <div style={styles.collectionHeader}>

            <p style={styles.sectionLabel}>
              JEWELLERY FORMS
            </p>

            <div style={styles.introLine} />

            <h2 style={styles.collectionTitle}>
              Designed for{" "}
              <span style={styles.collectionItalic}>
                Modern Expression
              </span>
            </h2>

            <p style={styles.collectionIntro}>
              18KT gold lends itself beautifully to
              jewellery where proportion, detail and
              contemporary design take centre stage.
            </p>

          </div>


          <div style={styles.collectionGrid}>

            {jewelleryForms.map((item) => (

              <article
                key={item.title}
                style={styles.collectionCard}

                onMouseEnter={(event) => {

                  if (!isMobile) {

                    event.currentTarget.style.transform =
                      "translateY(-7px)";

                    event.currentTarget.style.boxShadow =
                      "0 18px 40px rgba(39,37,90,0.10)";

                    const image =
                      event.currentTarget.querySelector("img");

                    if (image) {
                      image.style.transform =
                        "scale(1.04)";
                    }
                  }

                }}

                onMouseLeave={(event) => {

                  if (!isMobile) {

                    event.currentTarget.style.transform =
                      "translateY(0)";

                    event.currentTarget.style.boxShadow =
                      "none";

                    const image =
                      event.currentTarget.querySelector("img");

                    if (image) {
                      image.style.transform =
                        "scale(1)";
                    }
                  }

                }}
              >

                <div style={styles.collectionImageWrap}>

                  <img
                    src={item.image}
                    alt={`18KT ${item.title}`}
                    style={styles.collectionImage}
                  />

                </div>

                <div style={styles.collectionContent}>

                  <h3 style={styles.collectionCardTitle}>
                    {item.title}
                  </h3>

                  <p style={styles.collectionCardText}>
                    {item.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          DESIGN PHILOSOPHY
      ================================================= */}

      <section style={styles.philosophySection}>

        <div style={styles.philosophyInner}>

          <div style={styles.philosophyContent}>

            <p style={styles.philosophyLabel}>
              SHILPI DESIGN PHILOSOPHY
            </p>

            <div style={styles.philosophyLine} />

            <h2 style={styles.philosophyTitle}>
              Where Gold Meets
              <br />

              <span style={styles.philosophyItalic}>
                Fine Detail
              </span>
            </h2>

            <p style={styles.philosophyText}>
              18KT jewellery gives designers the freedom
              to explore refined proportions, intricate
              settings and contemporary forms while
              retaining the warmth and presence of gold.
            </p>


            <div style={styles.philosophyPoints}>

              <div style={styles.philosophyPoint}>

                <div style={styles.philosophyNumber}>
                  01
                </div>

                <p style={styles.philosophyPointText}>
                  A refined foundation for contemporary
                  jewellery silhouettes.
                </p>

              </div>


              <div style={styles.philosophyPoint}>

                <div style={styles.philosophyNumber}>
                  02
                </div>

                <p style={styles.philosophyPointText}>
                  Well suited to detailed diamond and
                  gemstone settings.
                </p>

              </div>


              <div style={styles.philosophyPoint}>

                <div style={styles.philosophyNumber}>
                  03
                </div>

                <p style={styles.philosophyPointText}>
                  Created for jewellery that balances
                  elegance with everyday expression.
                </p>

              </div>

            </div>

          </div>


          <div
            style={styles.philosophyImageWrap}

            onMouseEnter={(event) => {

              if (!isMobile) {

                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1.035)";
                }

              }

            }}

            onMouseLeave={(event) => {

              if (!isMobile) {

                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1)";
                }

              }

            }}
          >

            <img
              src={collection5}
              alt="18KT diamond jewellery"
              style={styles.philosophyImage}
            />

          </div>

        </div>

      </section>


      {/* =================================================
          HALLMARK / PURITY
      ================================================= */}

      <section style={styles.hallmarkSection}>

        <div style={styles.hallmarkInner}>

          <p style={styles.sectionLabel}>
            KNOW YOUR GOLD
          </p>

          <div style={styles.introLine} />

          <h2 style={styles.hallmarkTitle}>
            Understanding{" "}
            <span style={styles.hallmarkItalic}>
              18KT Purity
            </span>
          </h2>

          <p style={styles.hallmarkIntro}>
            When purchasing hallmarked gold jewellery,
            understanding the purity marking helps you
            make an informed choice. In India, BIS
            standards recognise 18K gold at 750 fineness.
          </p>


          <div style={styles.hallmarkGrid}>

            {hallmarkPoints.map((item) => (

              <article
                key={item.number}
                style={styles.hallmarkCard}
              >

                <div style={styles.hallmarkCardNumber}>
                  {item.number}
                </div>

                <h3 style={styles.hallmarkCardTitle}>
                  {item.title}
                </h3>

                <p style={styles.hallmarkCardText}>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL STATEMENT
      ================================================= */}

      <section style={styles.finalSection}>

        <div style={styles.finalInner}>

          <h2 style={styles.finalTitle}>
            Pure in character.
            <br />

            <span style={styles.finalItalic}>
              Refined in expression.
            </span>
          </h2>

          <p style={styles.finalText}>
            18KT gold brings together the warmth of
            precious gold and the versatility required
            for contemporary jewellery. At Shilpi Jewels,
            it becomes a canvas for design, craftsmanship
            and individuality.
          </p>

        </div>

      </section>

    </main>
  );
}

export default EighteenKTPage;