import { useEffect, useState } from "react";
import bombayImage from "../assets/images/bombay.jpg";
import antiqueImage from "../assets/images/antique.jpg";
import kolkataImage from "../assets/images/kolkata.jpg";
import templeImage from "../assets/images/temple.jpg";
import fusionImage from "../assets/images/fusion.jpg";

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
   COLLECTION CARD
========================= */

function CollectionCard({
  image,
  label,
  style,
  titleStyle,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#collections"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",

        display: "block",

        width: "100%",
        height: "100%",

        minWidth: 0,
        minHeight: 0,

        overflow: "hidden",

        textDecoration: "none",

        backgroundColor: "#eee8dc",

        ...style,
      }}
    >
      <img
        src={image}
        alt={`${label} jewellery collection`}
        style={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "cover",
          objectPosition: "center",

          display: "block",

          transform: isHovered
            ? "scale(1.06)"
            : "scale(1)",

          transition:
            "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(to top, rgba(245,233,218,0.72) 0%, rgba(245,233,218,0.12) 25%, transparent 48%)",

          pointerEvents: "none",
        }}
      />

      {/* Collection name */}
      <h3
        style={{
          position: "absolute",

          bottom: "12px",
          left: "12px",
          right: "12px",

          margin: 0,

          fontFamily: '"Playfair Display", serif',

          fontSize: "clamp(24px, 2.2vw, 32px)",

          fontWeight: 500,

          lineHeight: 1.1,

          textAlign: "right",

          color: "#272361",

          ...titleStyle,
        }}
      >
        {label}
      </h3>
    </a>
  );
}

/* =========================
   COLLECTIONS COMPONENT
========================= */

function Collections() {
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
        ? "40px"
        : "50px",

      /*
        IMPORTANT:
        Same horizontal setup as Hero.

        Hero uses:
        maxWidth: 1510px
        padding: 0 15px

        Collections now follows exactly
        the same alignment.
      */
      padding: isMobile
        ? "0 20px"
        : isTablet
          ? "0 15px"
          : "0 15px",

      boxSizing: "border-box",
    },

    /* =========================
       MAIN CONTAINER
    ========================= */

    container: {
      width: "100%",

      /*
        SAME AS HERO
      */
      maxWidth: "1510px",

      height: "auto",

      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "0.85fr 1.15fr"
          : "0.85fr 1.15fr",

      alignItems: "stretch",

      background:
        "linear-gradient(90deg, #ffffff 0%, #faf9ff 45%, #f3f1ff 100%)",

      boxSizing: "border-box",
    },

    /* =========================
       LEFT CONTENT
    ========================= */

/* =========================
   LEFT CONTENT
========================= */

content: {
  display: "flex",

  flexDirection: "column",

  justifyContent: "center",

  padding: isMobile
    ? "45px 25px"
    : isTablet
      ? "50px 35px 50px 35px"
      : "70px 15px 70px 15px",

  boxSizing: "border-box",

  minWidth: 0,
},

    /* =========================
       HEADING
    ========================= */

    heading: {
      margin: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "44px"
        : isTablet
          ? "48px"
          : "58px",

      fontWeight: 400,

      lineHeight: 1.18,

      letterSpacing: "-1.5px",

      color: "#272361",
    },

    /* =========================
       DESCRIPTION
    ========================= */

    description: {
      margin: isMobile
        ? "20px 0 0"
        : "15px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "17px"
        : "20px",

      fontWeight: 400,

      lineHeight: 1.8,

      color: "#272361",
    },

    /* =========================
       LINK
    ========================= */

    link: {
      display: "inline-flex",

      alignItems: "center",

      gap: "18px",

      width: "fit-content",

      marginTop: isMobile
        ? "25px"
        : "25px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "17px"
        : "19px",

      fontWeight: 400,

      lineHeight: 1.2,

      color: "#272361",

      textDecoration: "none",
    },

    /* =========================
       ARROW
    ========================= */

    arrow: {
      fontSize: isMobile
        ? "26px"
        : "30px",

      lineHeight: 1,

      fontWeight: 400,
    },

    /* =========================
       RIGHT IMAGE GRID
    ========================= */

    imageGrid: {
      display: isMobile
        ? "flex"
        : "grid",

      flexDirection: "column",

      gridTemplateColumns: "1.35fr 1fr 1fr",

      gridTemplateRows: "1fr 1fr",

      gap: isMobile
        ? "10px"
        : "12px",

      width: "100%",

      height: isMobile
        ? "auto"
        : "610px",

      minWidth: 0,

      minHeight: 0,

      boxSizing: "border-box",
    },

    /* =========================
       DESKTOP CARD POSITIONS
    ========================= */

    bombay: {
      gridColumn: "1",

      gridRow: "1 / span 2",

      aspectRatio: isMobile
        ? "1 / 1"
        : "auto",
    },

    antique: {
      gridColumn: "2",

      gridRow: "1",

      aspectRatio: isMobile
        ? "1 / 1"
        : "auto",
    },

    kolkata: {
      gridColumn: "3",

      gridRow: "1",

      aspectRatio: isMobile
        ? "1 / 1"
        : "auto",
    },

    temple: {
      gridColumn: "2",

      gridRow: "2",

      aspectRatio: isMobile
        ? "1 / 1"
        : "auto",
    },

    fusion: {
      gridColumn: "3",

      gridRow: "2",

      aspectRatio: isMobile
        ? "1 / 1"
        : "auto",
    },
  };

  return (
    <section style={styles.section}>

      <div style={styles.container}>

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div style={styles.content}>

          <h2 style={styles.heading}>
            The
            <br />
            Collections
          </h2>

          <p style={styles.description}>
            A curated expression
            <br />
            of Indian jewellery,
            <br />
            crafted in yellow gold and
            <br />
            shaped by tradition, artistry
            <br />
            and contemporary design.
          </p>

          <a
            href="#collections"
            style={styles.link}
          >
            <span>
              Explore All Collections
            </span>

            <span style={styles.arrow}>
              ⟶
            </span>
          </a>

        </div>

        {/* =========================
            RIGHT IMAGE GRID
        ========================= */}

        <div style={styles.imageGrid}>

          {/* LARGE LEFT IMAGE */}

          <CollectionCard
            image={bombayImage}
            label="Bombay"
            style={styles.bombay}
          />

          {/* TOP MIDDLE */}

          <CollectionCard
            image={antiqueImage}
            label="Antique"
            style={styles.antique}
          />

          {/* TOP RIGHT */}

          <CollectionCard
            image={kolkataImage}
            label="Kolkata"
            style={styles.kolkata}
          />

          {/* BOTTOM MIDDLE */}

          <CollectionCard
            image={templeImage}
            label="Temple"
            style={styles.temple}
          />

          {/* BOTTOM RIGHT */}

          <CollectionCard
            image={fusionImage}
            label="Fusion"
            style={styles.fusion}
          />

        </div>

      </div>

    </section>
  );
}

export default Collections;