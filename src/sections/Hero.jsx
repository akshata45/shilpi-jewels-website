import { useEffect, useState } from "react";
import heroImage from "../assets/images/hero-jewellery.jpg";

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
   FONT LOADER
========================= */

function useWebsiteFonts() {
  useEffect(() => {
    const fontId = "shilpi-website-fonts";

    if (document.getElementById(fontId)) return;

    const link = document.createElement("link");

    link.id = fontId;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Jost:wght@400&family=Playfair+Display:wght@400&display=swap";

    document.head.appendChild(link);
  }, []);
}

/* =========================
   HERO COMPONENT
========================= */

function Hero() {
  useWebsiteFonts();

  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  const styles = {
    /* =========================
       SECTION
    ========================= */

    section: {
      position: "relative",
      width: "100%",

      marginTop: isMobile ? "0px" : "44px",

      height: isMobile
        ? "620px"
        : isTablet
          ? "500px"
          : "565px",

      overflow: "hidden",

      backgroundColor: "#f5e9da",
    },

    /* =========================
       BACKGROUND IMAGE
    ========================= */

    image: {
      position: "absolute",
      inset: 0,

      width: "100%",
      height: "100%",

      objectFit: "cover",

      objectPosition: isMobile
        ? "68% center"
        : "center center",

      display: "block",
    },

    /* =========================
       LEFT OVERLAY
    ========================= */

    overlay: {
      position: "absolute",
      inset: 0,

      background: isMobile
        ? "linear-gradient(90deg, rgba(245,233,218,0.97) 0%, rgba(245,233,218,0.82) 42%, rgba(245,233,218,0.30) 75%, rgba(245,233,218,0) 100%)"
        : "linear-gradient(90deg, rgba(245,233,218,0.96) 0%, rgba(245,233,218,0.82) 22%, rgba(245,233,218,0.35) 40%, rgba(245,233,218,0) 58%)",
    },

    /* =========================
       CONTENT CONTAINER
    ========================= */

    inner: {
      position: "relative",
      zIndex: 2,

      width: "100%",
      maxWidth: "1510px",
      height: "100%",

      margin: "0 auto",

      /*
        Reduced horizontal padding so
        the hero content sits closer
        to the left edge.
      */
      padding: isMobile
        ? "0 24px"
        : isTablet
          ? "0 55px"
          : "0 90px",

      display: "flex",
      flexDirection: "column",

      justifyContent: isMobile
        ? "flex-start"
        : "center",

      paddingTop: isMobile
        ? "72px"
        : "0px",
    },

    /* =========================
       CONTENT WIDTH
    ========================= */

    content: {
      width: isMobile
        ? "100%"
        : "460px",

      maxWidth: isMobile
        ? "320px"
        : "460px",
    },

    /* =========================
       HEADING
       PLAYFAIR DISPLAY REGULAR
    ========================= */

    heading: {
      margin: 0,

      fontFamily: '"Playfair Display", serif',

      /*
        Increased from:
        Desktop 56px
        Tablet 48px
        Mobile 40px
      */
      fontSize: isMobile
        ? "42px"
        : isTablet
          ? "54px"
          : "64px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.18
        : 1.2,

      letterSpacing: isMobile
        ? "-0.8px"
        : "-1.5px",

      color: "#272361",
    },

    /* =========================
       DESCRIPTION
       JOST REGULAR
    ========================= */

    description: {
      margin: isMobile
        ? "24px 0 0"
        : "27px 0 0",

      fontFamily: '"Jost", sans-serif',

      /*
        Increased font size
      */
      fontSize: isMobile
        ? "17px"
        : isTablet
          ? "20px"
          : "20px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.65
        : 1.65,

      color: "#272361",
    },

    /* =========================
       CTA
       JOST REGULAR
    ========================= */

    link: {
      display: "inline-block",

      marginTop: isMobile
        ? "27px"
        : "31px",

      fontFamily: '"Jost", sans-serif',

      /*
        Increased from 14px
      */
      fontSize: isMobile
        ? "15px"
        : "16px",

      fontWeight: 400,

      color: "#272361",

      textDecoration: "underline",

      textUnderlineOffset: "5px",

      cursor: "pointer",
    },

    /* =========================
       COUNTER
       JOST REGULAR
    ========================= */

    counter: {
      display: "flex",
      alignItems: "center",

      gap: "8px",

      marginTop: isMobile
        ? "32px"
        : "39px",

      fontFamily: '"Jost", sans-serif',

      /*
        Increased from 14px
      */
      fontSize: isMobile
        ? "15px"
        : "16px",

      fontWeight: 400,

      color: "#272361",
    },
  };

  return (
    <section style={styles.section}>

      {/* =========================
          BACKGROUND IMAGE
      ========================= */}

      <img
        src={heroImage}
        alt="Shilpi jewellery collection"
        style={styles.image}
      />

      {/* =========================
          LEFT OVERLAY
      ========================= */}

      <div style={styles.overlay} />

      {/* =========================
          CONTENT
      ========================= */}

      <div style={styles.inner}>

        <div style={styles.content}>

          {/* HEADING */}

          <h1 style={styles.heading}>
            Crafted
            <br />
            Through
            <br />
            Generations
          </h1>

          {/* DESCRIPTION */}

          <p style={styles.description}>
            43 years of craftsmanship,
            <br />
            trust and timeless artistry.
          </p>

          {/* CTA */}

          <a
            href="#collections"
            style={styles.link}
          >
            Discover the Collection
          </a>

          {/* COUNTER */}

          <div style={styles.counter}>
            <span>01</span>
            <span>/</span>
            <span>05</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;