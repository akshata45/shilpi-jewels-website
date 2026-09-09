import { useEffect, useState } from "react";

import craftsmanshipImage from "../assets/images/craftsmanship.jpg";

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
   CRAFTSMANSHIP COMPONENT
========================= */

function Craftsmanship() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  // Hover state for image zoom
  const [isImageHovered, setIsImageHovered] = useState(false);

  const styles = {
    /* =========================
       SECTION
    ========================= */

    section: {
      width: "100%",

      marginTop: "30px",

      padding: 0,

      boxSizing: "border-box",

      overflow: "hidden",
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
          : "35.6% 64.4%",

      alignItems: "stretch",

      backgroundColor: "#ffffff",

      overflow: "hidden",

      boxSizing: "border-box",
    },

    /* =========================
       LEFT CONTENT
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
          : "35px 44px 34px 132px",

      background:
        "linear-gradient(90deg, #f8f7ff 0%, #f6f5ff 50%, #ffffff 100%)",

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
          : "46px",

      fontWeight: 400,

      lineHeight: 1.15,

      letterSpacing: "-0.8px",

      color: "#272361",

      textAlign: "left",
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
          : "25px",

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

      maxWidth: isMobile
        ? "100%"
        : isTablet
          ? "100%"
          : "430px",

      margin: isMobile
        ? "18px 0 0"
        : "13px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : isTablet
          ? "16px"
          : "20px",

      fontWeight: 400,

      lineHeight: isMobile ? 1.7 : 1.7,

      color: "#272361",

      textAlign: "left",

      boxSizing: "border-box",
    },

    /* =========================
       RIGHT COLLAGE IMAGE
    ========================= */

    imageWrapper: {
      width: "100%",

      height: isMobile
        ? "auto"
        : isTablet
          ? "410px"
          : "455px",

      minWidth: 0,

      overflow: "hidden",

      backgroundColor: "#eee8dc",

      boxSizing: "border-box",

      // Keeps the zoom smooth
      cursor: "pointer",
    },

    /* =========================
       COLLAGE IMAGE
    ========================= */

    image: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      aspectRatio: isMobile
        ? "3.2 / 1"
        : "auto",

      // Image zoom effect
      transform: isImageHovered
        ? "scale(1.08)"
        : "scale(1)",

      transition: "transform 0.6s ease",

      willChange: "transform",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div style={styles.content}>

          {/* =========================
              MAIN HEADING
          ========================= */}

          <h2 style={styles.heading}>
            The
            <br />
            Craftsmanship
          </h2>

          {/* =========================
              SUB HEADING
          ========================= */}

          <h3 style={styles.subHeading}>
            Where Tradition Meets Precision
          </h3>

          {/* =========================
              DESCRIPTION
          ========================= */}

          <p style={styles.description}>
            Every Shilpi creation begins with an idea and comes
            to life through the hands of skilled artisans.
            From the first design to the final polish, every stage
            demands precision, patience and an uncompromising
            eye for detail. It is this journey from raw gold to
            refined jewellery that gives every Shilpi creation its
            character.
          </p>

        </div>

        {/* =========================
            RIGHT SINGLE COLLAGE IMAGE
        ========================= */}

        <div
          style={styles.imageWrapper}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <img
            src={craftsmanshipImage}
            alt="Shilpi jewellery craftsmanship and skilled artisans"
            style={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default Craftsmanship;