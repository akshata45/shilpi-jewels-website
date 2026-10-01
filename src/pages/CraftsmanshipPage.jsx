import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButtons from "../components/ScrollButtons";

import craftsmanshipBanner from "../assets/images/craftsmanship-banner.jpg";
import craftsmanshipThought from "../assets/images/craftsmanship-thought.png";
import craftsmanshipArt from "../assets/images/craftsmanship-art.png";
import craftsmanshipPrecision from "../assets/images/craftsmanship-precision.png";
import craftsmanshipPromise from "../assets/images/craftsmanship-promise.png";

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
   CRAFTSMANSHIP PAGE
========================================================= */

function CraftsmanshipPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1100px)"
  );

  /* =======================================================
     STYLES
  ======================================================= */

  const styles = {
    /* =====================================================
       PAGE
    ===================================================== */

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

  height: isMobile
    ? "220px"
    : isTablet
      ? "420px"
      : "520px",

  minHeight: isMobile
    ? "220px"
    : isTablet
      ? "420px"
      : "520px",

  position: "relative",

  overflow: "hidden",

  background: "#ffffff",

  marginTop: isMobile ? "0px" : "25px",

  boxSizing: "border-box",
},

heroImage: {
  width: "100%",

  height: "100%",

  display: "block",

  objectFit: "cover",

  objectPosition: isMobile
    ? "58% center"
    : "center center",
},

/* =====================================================
   HERO TEXT
===================================================== */

heroText: {
  position: "absolute",

  zIndex: 2,

  left: isMobile
    ? "8%"
    : isTablet
      ? "7%"
      : "8.5%",

  top: isMobile
    ? "37%"
    : isTablet
      ? "35%"
      : "34%",

  transform: "translateY(-50%)",

  display: "flex",

  flexDirection: "column",

  alignItems: "flex-start",

  boxSizing: "border-box",

  pointerEvents: "none",
},

heroMainTitle: {
  margin: 0,

  padding: 0,

  fontFamily:
    '"Cinzel", "Times New Roman", Georgia, serif',

  fontSize: isMobile
    ? "36px"
    : isTablet
      ? "58px"
      : "122px",

  lineHeight: 0.95,

  fontWeight: 600,

  letterSpacing: isMobile
    ? "0px"
    : "1px",

  color: "#f4c75f",

  textTransform: "uppercase",

  whiteSpace: "nowrap",

  textShadow:
    "0 2px 5px rgba(0,0,0,0.35)",
    marginTop: isMobile ? "50px" : "90px",
},

heroSubTitle: {
  margin: isMobile
    ? "5px 0 0 1px"
    : "7px 0 0 2px",

  padding: 0,

  fontFamily:
    '"Cinzel", "Times New Roman", Georgia, serif',

  fontSize: isMobile
    ? "12px"
    : isTablet
      ? "21px"
      : "30px",

  lineHeight: 1,

  fontWeight: 400,

  letterSpacing: isMobile
    ? "0.5px"
    : "1px",

  color: "#f4d88a",

  textTransform: "uppercase",

  whiteSpace: "nowrap",

  textShadow:
    "0 2px 4px rgba(0,0,0,0.35)",
    
},

    /* =====================================================
       INTRODUCTION
    ===================================================== */

    introduction: {
      width: "100%",

      padding: isMobile
        ? "55px 22px 50px"
        : isTablet
          ? "70px 35px 65px"
          : "85px 40px 75px",

      background: "#ffffff",

      textAlign: "center",

      boxSizing: "border-box",
    },

    introductionInner: {
      width: "100%",

      maxWidth: "900px",

      margin: "0 auto",
    },

    eyebrow: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "9px" : "11px",

      letterSpacing: "3px",

      textTransform: "uppercase",

      color: "#a18143",

      fontWeight: 500,
    },

    goldLineCenter: {
      width: isMobile ? "42px" : "55px",

      height: "1px",

      background: "#b69659",

      margin: "15px auto 20px",
    },

    introductionTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "29px"
        : isTablet
          ? "38px"
          : "48px",

      lineHeight: 1.2,

      fontWeight: 400,

      color: "#27255a",
    },

    introductionItalic: {
      color: "#a18143",

      fontStyle: "italic",
    },

    introductionText: {
      margin: isMobile
        ? "18px auto 0"
        : "23px auto 0",

      maxWidth: "820px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "13px" : "16px",

      lineHeight: 1.75,

      fontWeight: 300,

      color: "#777777",

      textAlign: "center",
    },

    /* =====================================================
       STORIES SECTION
    ===================================================== */

    storiesSection: {
      width: "100%",

      padding: isMobile
        ? "10px 20px 65px"
        : isTablet
          ? "15px 35px 80px"
          : "15px 55px 105px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    storiesContainer: {
      width: "100%",

      maxWidth: "1280px",

      margin: "0 auto",

      display: "flex",

      flexDirection: "column",

      gap: isMobile
        ? "60px"
        : isTablet
          ? "75px"
          : "95px",
    },

    /* =====================================================
       STORY ROW
    ===================================================== */

    storyRow: {
      width: "100%",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "0.95fr 1.05fr"
          : "0.92fr 1.08fr",

      alignItems: "center",

      gap: isMobile
        ? "28px"
        : isTablet
          ? "45px"
          : "75px",

      boxSizing: "border-box",
    },

    /* =====================================================
       REVERSE ROW
    ===================================================== */

    storyRowReverse: {
      direction: "rtl",
    },

    /* =====================================================
       IMAGE
    ===================================================== */

    storyImageWrapper: {
      width: "100%",

      height: isMobile
        ? "300px"
        : isTablet
          ? "390px"
          : "470px",

      overflow: "hidden",

      background: "#f4f1eb",

      position: "relative",

      direction: "ltr",

      boxSizing: "border-box",
    },

    storyImage: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center center",

      transition: "transform 0.6s ease",
    },

    /* =====================================================
       CONTENT
    ===================================================== */

    storyContent: {
      width: "100%",

      maxWidth: "600px",

      boxSizing: "border-box",

      direction: "ltr",

      textAlign: "left",
    },

    storyContentReverse: {
      marginLeft: "auto",
    },

    storyEyebrow: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "9px" : "11px",

      letterSpacing: "2.5px",

      textTransform: "uppercase",

      color: "#a18143",

      fontWeight: 500,
    },

    storyLine: {
      width: isMobile ? "40px" : "52px",

      height: "1px",

      margin: "15px 0 19px",

      background: "#b69659",
    },

    storyTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "30px"
        : isTablet
          ? "39px"
          : "48px",

      lineHeight: 1.15,

      fontWeight: 400,

      color: "#27255a",
    },

    storyTitleItalic: {
      fontStyle: "italic",

      color: "#a18143",
    },

    storyText: {
      margin: isMobile
        ? "18px 0 0"
        : "23px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "13px" : "16px",

      lineHeight: 1.8,

      fontWeight: 300,

      color: "#777777",

      textAlign: "justify",
    },

    storyExtraText: {
      margin: isMobile
        ? "12px 0 0"
        : "16px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "13px" : "16px",

      lineHeight: 1.8,

      fontWeight: 300,

      color: "#777777",

      textAlign: "justify",
    },

    storyNumber: {
      marginTop: isMobile ? "22px" : "28px",

      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile ? "13px" : "15px",

      fontStyle: "italic",

      color: "#b69659",
    },

    /* =====================================================
       FINAL PHILOSOPHY
    ===================================================== */

    philosophySection: {
      width: "100%",

      padding: isMobile
        ? "55px 22px 65px"
        : isTablet
          ? "70px 35px 80px"
          : "90px 40px 100px",

      background: "#f7f5fb",

      textAlign: "center",

      boxSizing: "border-box",
    },

    philosophyInner: {
      maxWidth: "900px",

      margin: "0 auto",
    },

    philosophyTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "28px"
        : isTablet
          ? "36px"
          : "46px",

      lineHeight: 1.25,

      fontWeight: 400,

      color: "#27255a",
    },

    philosophyItalic: {
      color: "#a18143",

      fontStyle: "italic",
    },

    philosophyText: {
      margin: isMobile
        ? "19px auto 0"
        : "25px auto 0",

      maxWidth: "780px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "13px" : "16px",

      lineHeight: 1.8,

      color: "#747474",

      fontWeight: 300,

      textAlign: "justify",
    },

    philosophyLine: {
      width: "50px",

      height: "1px",

      background: "#b69659",

      margin: "22px auto 0",
    },
  };

  /* =======================================================
     CONTENT
  ======================================================= */

  const stories = [
    {
      number: "01",

      eyebrow: "THE ART OF THOUGHT",

      title: (
        <>
          But did you see what{" "}
          <span style={styles.storyTitleItalic}>
            shaped it?
          </span>
        </>
      ),

      text:
        "Every piece begins with a thought. Before gold takes form, a design is carefully considered through proportion, detail and the character it is meant to carry.",

      extraText:
        "The beauty of Indian jewellery lies in its ability to bring together tradition, symbolism and individuality. This thought becomes the foundation of every creation.",

      image: craftsmanshipThought,
    },

    {
      number: "02",

      eyebrow: "THE ART OF CRAFT",

      title: (
        <>
          Where tradition becomes{" "}
          <span style={styles.storyTitleItalic}>
            artistry
          </span>
        </>
      ),

      text:
        "Craftsmanship is where an idea begins to take shape. Skilled hands bring together technique, patience and an understanding of the character of every design.",

      extraText:
        "At Shilpi Jewels, traditional knowledge continues to inspire the way jewellery is shaped, refined and finished for the modern wearer.",

      image: craftsmanshipArt,
    },

    {
      number: "03",

      eyebrow: "THE PRECISION",

      title: (
        <>
          The Precision.{" "}
          <span style={styles.storyTitleItalic}>
            The Standards.
          </span>
        </>
      ),

      text:
        "Fine jewellery demands precision at every stage. From the smallest detail to the final finish, consistency and attention to proportion help define the character of a creation.",

      extraText:
        "It is this balance of detail, discipline and refinement that allows traditional jewellery forms to retain their beauty while meeting contemporary expectations.",

      image: craftsmanshipPrecision,
    },

    {
      number: "04",

      eyebrow: "THE PROMISE",

      title: (
        <>
          Crafted with{" "}
          <span style={styles.storyTitleItalic}>
            responsibility
          </span>
        </>
      ),

      text:
        "Craftsmanship is ultimately a promise. A promise to respect the design, the material and the significance that jewellery can hold for the person who wears it.",

      extraText:
        "Every Shilpi creation is intended to become more than an ornament, a piece that carries meaning today and remains treasured through time.",

      image: craftsmanshipPromise,
    },
  ];

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <>

      <main style={styles.page}>

        {/* =================================================
            HERO
        ================================================= */}

{/* =================================================
    HERO
================================================= */}

<section
  style={styles.hero}
  aria-label="Shilpi Jewels Craftsmanship"
>

  <img
    src={craftsmanshipBanner}
    alt="Shilpi Jewels craftsmanship"
    style={styles.heroImage}
  />

  <div style={styles.heroText}>

    <h1 style={styles.heroMainTitle}>
      SHILPKAR
    </h1>

    <p style={styles.heroSubTitle}>
      KI SHILPKARI
    </p>

  </div>

</section>


        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <section style={styles.introduction}>

          <div style={styles.introductionInner}>

            <p style={styles.eyebrow}>
              SHILPKAR KI SHILPKARI
            </p>

            <div style={styles.goldLineCenter} />

            <h1 style={styles.introductionTitle}>
              The Story Behind{" "}
              <span style={styles.introductionItalic}>
                The Craft
              </span>
            </h1>

            <p style={styles.introductionText}>
              Jewellery is deeply woven into Indian culture,
              with every region carrying its own traditions,
              forms and techniques. At Shilpi Jewels, we
              celebrate this heritage through craftsmanship
              that brings together thoughtful design, skilled
              artistry and a contemporary sensibility.
            </p>

          </div>

        </section>


        {/* =================================================
            CRAFTSMANSHIP STORIES
        ================================================= */}

        <section style={styles.storiesSection}>

          <div style={styles.storiesContainer}>

            {stories.map((item, index) => {

              const isReverse = index % 2 !== 0;

              return (
                <article
                  key={item.number}
                  style={{
                    ...styles.storyRow,

                    ...(isReverse
                      ? styles.storyRowReverse
                      : {}),
                  }}
                >

                  {/* =======================================
                      IMAGE
                  ======================================= */}

                  <div
                    style={styles.storyImageWrapper}

                    onMouseEnter={(event) => {

                      if (!isMobile) {

                        const image =
                          event.currentTarget.querySelector(
                            "img"
                          );

                        if (image) {
                          image.style.transform =
                            "scale(1.045)";
                        }
                      }
                    }}

                    onMouseLeave={(event) => {

                      if (!isMobile) {

                        const image =
                          event.currentTarget.querySelector(
                            "img"
                          );

                        if (image) {
                          image.style.transform =
                            "scale(1)";
                        }
                      }
                    }}
                  >

                    <img
                      src={item.image}
                      alt={`Shilpi Jewels ${item.eyebrow}`}
                      style={styles.storyImage}
                    />

                  </div>


                  {/* =======================================
                      CONTENT
                  ======================================= */}

                  <div
                    style={{
                      ...styles.storyContent,

                      ...(isReverse
                        ? styles.storyContentReverse
                        : {}),
                    }}
                  >

                    <p style={styles.storyEyebrow}>
                      {item.eyebrow}
                    </p>

                    <div style={styles.storyLine} />

                    <h2 style={styles.storyTitle}>
                      {item.title}
                    </h2>

                    <p style={styles.storyText}>
                      {item.text}
                    </p>

                    <p style={styles.storyExtraText}>
                      {item.extraText}
                    </p>

                    <div style={styles.storyNumber}>
                      {item.number}
                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </section>


        {/* =================================================
            FINAL PHILOSOPHY
        ================================================= */}

        <section style={styles.philosophySection}>

          <div style={styles.philosophyInner}>

            <p style={styles.eyebrow}>
              THE SHILPI PHILOSOPHY
            </p>

            <div style={styles.goldLineCenter} />

            <h2 style={styles.philosophyTitle}>
              When craftsmanship becomes{" "}
              <span style={styles.philosophyItalic}>
                timeless.
              </span>
            </h2>

            <p style={styles.philosophyText}>
              The finest jewellery is not defined only by
              what is seen. It is shaped by the thought
              behind it, the hands that create it and the
              standards that guide every detail. This is the
              spirit of craftsmanship we carry forward at
              Shilpi Jewels.
            </p>

            <div style={styles.philosophyLine} />

          </div>

        </section>

      </main>


      <ScrollButtons />
    </>
  );
}

export default CraftsmanshipPage;