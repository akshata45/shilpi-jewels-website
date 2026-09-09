import { useEffect, useState } from "react";

import signatureImage from "../assets/images/signature.jpg";

import trustIcon from "../assets/icons/trust.png";
import citiesIcon from "../assets/icons/cities.png";
import artisansIcon from "../assets/icons/artisans.png";
import timelessIcon from "../assets/icons/timeless.png";

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

    return () => {
      media.removeEventListener("change", update);
    };
  }, [query]);

  return matches;
}

/* =========================
   SIGNATURE COMPONENT
========================= */

function Signature() {
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

      margin: 0,

      padding: 0,

      backgroundColor: "#ffffff",

      overflow: "hidden",

      boxSizing: "border-box",
    },

    /* =========================
       HERO IMAGE
    ========================= */

    imageWrapper: {
      width: "100%",

      height: isMobile
        ? "auto"
        : isTablet
          ? "330px"
          : "442px",

      overflow: "hidden",

      backgroundColor: "#eee8dc",

      boxSizing: "border-box",
    },

    /* =========================
       HERO IMAGE
    ========================= */

    image: {
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
       WHITE GAP
    ========================= */

    gap: {
      width: "100%",

      height: isMobile
        ? "25px"
        : isTablet
          ? "30px"
          : "35px",

      backgroundColor: "#ffffff",
    },

    /* =========================
       PURPLE CONTENT SECTION
    ========================= */

    signatureSection: {
      width: "100%",

      backgroundColor: "#292566",

      padding: isMobile
        ? "42px 24px 45px"
        : isTablet
          ? "34px 35px 38px"
          : "25px 0 31px",

      boxSizing: "border-box",
    },

    /* =========================
       CONTENT CONTAINER
    ========================= */

    contentContainer: {
      width: isMobile
        ? "100%"
        : isTablet
          ? "100%"
          : "84.5%",

      maxWidth: "1500px",

      margin: "0 auto",

      padding: 0,

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "1.05fr 1fr 1fr 1fr 1fr"
          : "1.12fr 1fr 1fr 1fr 1fr",

      columnGap: isMobile
        ? "0"
        : isTablet
          ? "20px"
          : "28px",

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
          ? "5px"
          : "12px",

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
        ? "42px"
        : isTablet
          ? "43px"
          : "47px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.08
        : 1.18,

      letterSpacing: "-1.2px",

      color: "#ffffff",

      textAlign: "left",
    },

    /* =========================
       INTRO SUBTITLE
    ========================= */

    introSubtitle: {
      margin: isMobile
        ? "18px 0 0"
        : "13px 0 0",

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "20px"
        : isTablet
          ? "19px"
          : "20px",

      fontWeight: 400,

      lineHeight: 1.3,

      letterSpacing: "-0.2px",

      color: "#ffffff",

      textAlign: "left",
    },

    /* =========================
       FEATURE ITEM
    ========================= */

    feature: {
      minWidth: 0,

      display: "flex",

      flexDirection: "column",

      alignItems: "center",

      textAlign: "center",

      boxSizing: "border-box",
    },

    /* =========================
       ICON WRAPPER
    ========================= */

    iconWrapper: {
      width: isMobile
        ? "82px"
        : isTablet
          ? "92px"
          : "100px",

      height: isMobile
        ? "82px"
        : isTablet
          ? "92px"
          : "100px",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      flexShrink: 0,

      boxSizing: "border-box",
    },

    /* =========================
       ICON
    ========================= */

    icon: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "contain",
    },

    /* =========================
       FEATURE NUMBER / TITLE
    ========================= */

    featureTitle: {
      margin: isMobile
        ? "15px 0 0"
        : "16px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "40px"
        : isTablet
          ? "40px"
          : "43px",

      fontWeight: 600,

      lineHeight: 1,

      letterSpacing: "-1px",

      color: "#ffffff",

      textAlign: "center",

      whiteSpace: "nowrap",
    },

    /* =========================
       FEATURE SUBTITLE
    ========================= */

    featureSubtitle: {
      margin: isMobile
        ? "10px 0 0"
        : "9px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "17px"
        : isTablet
          ? "16px"
          : "20px",

      fontWeight: 400,

      lineHeight: 1.25,

      color: "#ffffff",

      textAlign: "center",

      whiteSpace: "nowrap",
    },

    /* =========================
       FEATURE DESCRIPTION
    ========================= */

    featureDescription: {
      width: "100%",

      maxWidth: isMobile
        ? "300px"
        : isTablet
          ? "185px"
          : "205px",

      margin: isMobile
        ? "12px auto 0"
        : "11px auto 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "15px"
        : isTablet
          ? "14px"
          : "16px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.5
        : 1.45,

      color: "#ffffff",

      textAlign: "center",

      boxSizing: "border-box",
    },
  };

  /* =========================
     FEATURE DATA
  ========================= */

  const features = [
    {
      icon: trustIcon,
      title: "43",
      subtitle: "Years of trust",
      description:
        "A journey built on craftsmanship, relationships and an unwavering commitment to quality.",
    },

    {
      icon: citiesIcon,
      title: "1000+",
      subtitle: "Cities Worldwide",
      description:
        "A trusted jewellery partner with a growing presence across cities and markets.",
    },

    {
      icon: artisansIcon,
      title: "Artisans",
      subtitle: "Behind Every Creation",
      description:
        "Years of knowledge, skill and craftsmanship brought together in every piece.",
    },

    {
      icon: timelessIcon,
      title: "Timeless",
      subtitle: "Made for Generations",
      description:
        "Jewellery created to transcend seasons, trends and generations.",
    },
  ];

  return (
    <section style={styles.section}>

      {/* =========================
          TOP HERO IMAGE
      ========================= */}

      <div style={styles.imageWrapper}>
        <img
          src={signatureImage}
          alt="Shilpi jewellery craftsmanship"
          style={styles.image}
        />
      </div>

      {/* =========================
          WHITE SEPARATOR
      ========================= */}

      <div style={styles.gap} />

      {/* =========================
          SIGNATURE CONTENT
      ========================= */}

      <div style={styles.signatureSection}>

        <div style={styles.contentContainer}>

          {/* =========================
              INTRODUCTION
          ========================= */}

          <div style={styles.introColumn}>

            <h2 style={styles.mainHeading}>
              The
              <br />
              Shilpi
              <br />
              Signature
            </h2>

            <p style={styles.introSubtitle}>
              A Legacy You Can Trust
            </p>

          </div>

          {/* =========================
              FEATURES
          ========================= */}

          {features.map((feature) => (
            <div
              key={feature.title}
              style={styles.feature}
            >

              {/* ICON */}

              <div style={styles.iconWrapper}>
                <img
                  src={feature.icon}
                  alt=""
                  style={styles.icon}
                />
              </div>

              {/* TITLE / NUMBER */}

              <h3 style={styles.featureTitle}>
                {feature.title}
              </h3>

              {/* SUBTITLE */}

              <h4 style={styles.featureSubtitle}>
                {feature.subtitle}
              </h4>

              {/* DESCRIPTION */}

              <p style={styles.featureDescription}>
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Signature;