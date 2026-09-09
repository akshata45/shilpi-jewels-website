import { useEffect, useState } from "react";

import artOfGoldImage from "../assets/images/art-of-gold.jpg";

/* =========================
   RESPONSIVE HOOK
========================= */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const update = () => setMatches(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/* =========================
   ART OF GOLD COMPONENT
========================= */

function ArtOfGold() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  const styles = {
    /* =========================
       SECTION
    ========================= */

    section: {
      width: "100%",

      marginTop: isMobile
        ? "30px"
        : "40px",

      padding: 0,

      boxSizing: "border-box",

      overflow: "hidden",

      backgroundColor: "#ffffff",
    },

    /* =========================
       TOP BANNER
    ========================= */

    bannerWrapper: {
      width: "100%",

      height: isMobile
        ? "auto"
        : isTablet
          ? "210px"
          : "242px",

      overflow: "hidden",

      boxSizing: "border-box",

      backgroundColor: "#171515",
    },

    /* =========================
       BANNER IMAGE
    ========================= */

    bannerImage: {
      width: "100%",

      height: isMobile
        ? "auto"
        : "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      aspectRatio: isMobile
        ? "2.55 / 1"
        : "auto",
    },

    /* =========================
       GAP BETWEEN IMAGE
       AND CONTENT
    ========================= */

    contentSection: {
      width: "100%",

      marginTop: isMobile
        ? "30px"
        : "41px",

      padding: isMobile
        ? "34px 24px 40px"
        : "28px 0 34px",

      background:
        "linear-gradient(180deg, #f3f2ff 0%, #f8f7ff 100%)",

      boxSizing: "border-box",
    },

    /* =========================
       CONTENT CONTAINER
    ========================= */

    contentContainer: {
      width: isMobile
        ? "100%"
        : isTablet
          ? "92%"
          : "84.5%",

      maxWidth: "1500px",

      margin: "0 auto",

      padding: 0,

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "1.25fr 1fr 1fr 1fr"
          : "1.38fr 1fr 1fr 1fr",

      columnGap: isMobile
        ? "0"
        : isTablet
          ? "28px"
          : "40px",

      rowGap: isMobile
        ? "42px"
        : "0",

      alignItems: "start",

      boxSizing: "border-box",
    },

    /* =========================
       INTRO COLUMN
    ========================= */

    introColumn: {
      minWidth: 0,

      paddingRight: isMobile
        ? "0"
        : isTablet
          ? "10px"
          : "5px",

      boxSizing: "border-box",
    },

    /* =========================
       MAIN HEADING
    ========================= */

    mainHeading: {
      margin: 0,

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "39px"
        : isTablet
          ? "42px"
          : "48px",

      fontWeight: 400,

      lineHeight: 1.08,

      letterSpacing: "-1.2px",

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       INTRO DESCRIPTION
    ========================= */

    introDescription: {
      margin: isMobile
        ? "18px 0 0"
        : "13px 0 0",

      padding: 0,

      width: "100%",

      maxWidth: isMobile
        ? "100%"
        : "410px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : isTablet
          ? "16px"
          : "20px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.7
        : 1.65,

      letterSpacing: "0",

      color: "#292566",

      textAlign: "left",

      boxSizing: "border-box",
    },

    /* =========================
       GOLD COLUMN
    ========================= */

    goldColumn: {
      minWidth: 0,

      boxSizing: "border-box",
    },

    /* =========================
       KARAT HEADING
    ========================= */

    karatHeading: {
      margin: 0,

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "58px"
        : isTablet
          ? "62px"
          : "72px",

      fontWeight: 500,

      lineHeight: 0.95,

      letterSpacing: "-2.5px",

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       KARAT SUB HEADING
    ========================= */

    karatSubHeading: {
      margin: isMobile
        ? "21px 0 0"
        : "25px 0 0",

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "23px"
        : isTablet
          ? "21px"
          : "23px",

      fontWeight: 400,

      lineHeight: 1.18,

      letterSpacing: "-0.4px",

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       KARAT DESCRIPTION
    ========================= */

    karatDescription: {
      margin: isMobile
        ? "14px 0 0"
        : "13px 0 0",

      padding: 0,

      width: "100%",

      maxWidth: isMobile
        ? "100%"
        : "250px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : isTablet
          ? "16px"
          : "18px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.7
        : 1.7,

      color: "#292566",

      textAlign: "left",

      boxSizing: "border-box",
    },
  };

  return (
    <section style={styles.section}>

      {/* =========================
          TOP BANNER IMAGE
      ========================= */}

      <div style={styles.bannerWrapper}>
        <img
          src={artOfGoldImage}
          alt="The Art of Gold - Shilpi craftsmanship"
          style={styles.bannerImage}
        />
      </div>

      {/* =========================
          CONTENT SECTION
      ========================= */}

      <div style={styles.contentSection}>

        <div style={styles.contentContainer}>

          {/* =========================
              COLUMN 1
          ========================= */}

          <div style={styles.introColumn}>

            <h2 style={styles.mainHeading}>
              The Art of Gold
            </h2>

            <p style={styles.introDescription}>
              From the richness of traditional gold to contemporary
              expressions of elegance, Shilpi jewels offers creations
              in 18KT, 20KT and 22KT gold — each crafted with the
              same commitment to quality and detail.
            </p>

          </div>

          {/* =========================
              COLUMN 2 — 18KT
          ========================= */}

          <div style={styles.goldColumn}>

            <h3 style={styles.karatHeading}>
              18KT
            </h3>

            <h4 style={styles.karatSubHeading}>
              Contemporary Elegance
            </h4>

            <p style={styles.karatDescription}>
              Modern, refined
              <br />
              and versatile
              <br />
              crafted for contemporary
              <br />
              expressions of luxury.
            </p>

          </div>

          {/* =========================
              COLUMN 3 — 20KT
          ========================= */}

          <div style={styles.goldColumn}>

            <h3 style={styles.karatHeading}>
              20KT
            </h3>

            <h4 style={styles.karatSubHeading}>
              Balanced Craftsmanship
            </h4>

            <p style={styles.karatDescription}>
              A distinctive balance of
              <br />
              purity and durability,
              <br />
              brought to life through
              <br />
              skilled craftsmanship.
            </p>

          </div>

          {/* =========================
              COLUMN 4 — 22KT
          ========================= */}

          <div style={styles.goldColumn}>

            <h3 style={styles.karatHeading}>
              22KT
            </h3>

            <h4 style={styles.karatSubHeading}>
              Contemporary Elegance
            </h4>

            <p style={styles.karatDescription}>
              The richness of
              <br />
              traditional Indian gold,
              <br />
              crafted into jewellery
              <br />
              designed to endure
              <br />
              through generations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ArtOfGold;