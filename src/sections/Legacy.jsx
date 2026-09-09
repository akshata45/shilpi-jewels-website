import { useEffect, useState } from "react";

import legacyImage from "../assets/images/legacy.jpg";

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
   LEGACY COMPONENT
========================= */

function Legacy() {
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

      marginTop: isMobile ? "30px" : "30px",

      padding: 0,

      boxSizing: "border-box",
    },

    /* =========================
       MAIN CONTAINER
    ========================= */

    container: {
      width: "100%",

      margin: 0,

      padding: 0,

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "45% 55%"
          : "44.8% 55.2%",

      alignItems: "stretch",

      background:
        "linear-gradient(90deg, #f8f7ff 0%, #f6f5ff 50%, #ffffff 100%)",

      overflow: "hidden",

      boxSizing: "border-box",
    },

    /* =========================
       LEFT IMAGE
    ========================= */

    imageWrapper: {
      width: "100%",

      height: isMobile
        ? "auto"
        : isTablet
          ? "410px"
          : "412px",

      minWidth: 0,

      overflow: "hidden",

      backgroundColor: "#eee8dc",

      boxSizing: "border-box",
    },

    image: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      aspectRatio: isMobile ? "1.29 / 1" : "auto",
    },

    /* =========================
       RIGHT CONTENT
    ========================= */

    content: {
      width: "100%",

      display: "flex",

      flexDirection: "column",

      justifyContent: "center",

      alignItems: "flex-start",

      padding: isMobile
        ? "38px 24px 42px"
        : isTablet
          ? "38px 38px 38px"
          : "35px 44px 34px",

      boxSizing: "border-box",

      minWidth: 0,
    },

    /* =========================
       MAIN HEADING
    ========================= */

    heading: {
      margin: 0,

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "39px"
        : isTablet
          ? "40px"
          : "45px",

      fontWeight: 400,

      lineHeight: 1.15,

      letterSpacing: "-0.8px",

      color: "#272361",

      textAlign: "left",
    },

    year: {
      fontWeight: 700,
    },

    /* =========================
       SUB HEADING
    ========================= */

    subHeading: {
      margin: isMobile
        ? "17px 0 0"
        : "13px 0 0",

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "21px"
        : isTablet
          ? "21px"
          : "26px",

      fontWeight: 400,

      lineHeight: 1.3,

      color: "#272361",

      textAlign: "left",
    },

    /* =========================
       DESCRIPTION
    ========================= */

    description: {
      width: "100%",

      maxWidth: "700px",

      margin: isMobile
        ? "18px 0 0"
        : "13px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : isTablet
          ? "18px"
          : "20px",

      fontWeight: 400,

      lineHeight: isMobile ? 1.7 : 1.7,

      color: "#272361",

      textAlign: "left",

      boxSizing: "border-box",
    },

    /* =========================
       CLOSING LINE
    ========================= */

    closing: {
      margin: isMobile
        ? "17px 0 0"
        : "13px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "18px",

      fontWeight: 400,

      lineHeight: 1.5,

      color: "#272361",

      textAlign: "left",
    },

    /* =========================
       STORY LINK
    ========================= */

    link: {
      display: "inline-flex",

      alignItems: "center",

      justifyContent: "flex-start",

      gap: isMobile ? "13px" : "15px",

      width: "fit-content",

      marginTop: isMobile ? "20px" : "15px",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "18px",

      fontWeight: 400,

      lineHeight: 1.2,

      color: "#272361",

      textDecoration: "none",

      cursor: "pointer",
    },

    /* =========================
       ARROW
    ========================= */

    arrow: {
      fontSize: isMobile ? "23px" : "25px",

      lineHeight: 1,

      fontWeight: 400,

      display: "inline-block",

      transform: "translateY(-1px)",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* =========================
            LEFT IMAGE
        ========================= */}

        <div style={styles.imageWrapper}>
          <img
            src={legacyImage}
            alt="Shilpi Jewels legacy and craftsmanship"
            style={styles.image}
          />
        </div>

        {/* =========================
            RIGHT CONTENT
        ========================= */}

        <div style={styles.content}>

          {/* MAIN HEADING */}

          <h2 style={styles.heading}>
            Our Legacy
            <br />
            Since <span style={styles.year}>1983</span>
          </h2>

          {/* SUB HEADING */}

          <h3 style={styles.subHeading}>
            Built on Legacy. Shaped for Tomorrow.
          </h3>

          {/* DESCRIPTION */}

          <p style={styles.description}>
            For over four decades, Shilpi Jewels has been on a journey
            defined by craftsmanship, trust and an enduring passion for
            jewellery. Founded in 1983 by Shri Padam Soni Ji, Shilpi began
            with a vision to create exceptional jewellery while building
            relationships that last beyond generations. His experience,
            dedication and deep understanding of the craft became the
            foundation on which Shilpi continues to grow. Today, that legacy
            is carried forward by the next generation — Shri Piyush Soni and
            Shri Yogesh Soni, who continue the journey as partners, bringing
            together the wisdom of experience with a fresh vision for the
            future.
          </p>

          {/* CLOSING LINE */}

          <p style={styles.closing}>
            Two generations. One legacy. A vision for tomorrow.
          </p>

          {/* STORY LINK */}

          <a
            href="#story"
            style={styles.link}
          >
            <span>Discover Our Story</span>

            <span style={styles.arrow}>
              ⟶
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Legacy;