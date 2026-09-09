import { useEffect, useState } from "react";

import necklaceImage from "../assets/images/necklaces.jpg";
import longNecklaceImage from "../assets/images/long-necklaces.jpg";
import chokersImage from "../assets/images/chokers.jpg";
import banglesImage from "../assets/images/bangles.jpg";
import earringsImage from "../assets/images/earrings.jpg";

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
   DISCOVER CRAFTSMANSHIP
========================= */

function DiscoverCraftsmanship() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  /* =========================
     IMAGE DATA
  ========================= */

  const craftsmanshipItems = [
    {
      title: "Necklaces",
      image: necklaceImage,
      alt: "Shilpi necklaces",
    },
    {
      title: "Long Necklaces",
      image: longNecklaceImage,
      alt: "Shilpi long necklaces",
    },
    {
      title: "Chokers",
      image: chokersImage,
      alt: "Shilpi chokers",
    },
    {
      title: "Bangles",
      image: banglesImage,
      alt: "Shilpi bangles",
    },
    {
      title: "Earrings",
      image: earringsImage,
      alt: "Shilpi earrings",
    },
  ];

  const styles = {
    /* =========================
       SECTION
    ========================= */

    section: {
      width: "100%",

      marginTop: isMobile
        ? "30px"
        : "35px",

      padding: 0,

      boxSizing: "border-box",

      overflow: "hidden",

      backgroundColor: "#ffffff",
    },

    /* =========================
       MAIN CONTAINER
    ========================= */

    container: {
      width: isMobile
        ? "100%"
        : isTablet
          ? "92%"
          : "84.5%",

      maxWidth: "1500px",

      margin: "0 auto",

      padding: isMobile
        ? "0 20px"
        : "0",

      boxSizing: "border-box",
    },

    /* =========================
       HEADING
    ========================= */

    heading: {
      margin: 0,

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "30px"
        : isTablet
          ? "34px"
          : "48px",

      fontWeight: 400,

      lineHeight: 1.1,

      letterSpacing: "-1.2px",

      color: "#292566",

      textAlign: "left",

      whiteSpace: "nowrap",
    },

    /* =========================
       IMAGE GRID
    ========================= */

    imageGrid: {
      width: "100%",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "repeat(2, minmax(0, 1fr))"
        : isTablet
          ? "repeat(3, minmax(0, 1fr))"
          : "repeat(5, minmax(0, 1fr))",

      columnGap: isMobile
        ? "10px"
        : isTablet
          ? "12px"
          : "11px",

      rowGap: isMobile
        ? "22px"
        : "0",

      marginTop: isMobile
        ? "20px"
        : "25px",

      boxSizing: "border-box",
    },

    /* =========================
       CARD
    ========================= */

    card: {
      width: "100%",

      minWidth: 0,

      overflow: "hidden",

      boxSizing: "border-box",
    },

    /* =========================
       IMAGE WRAPPER
    ========================= */

    imageWrapper: {
      width: "100%",

      aspectRatio: isMobile
        ? "1 / 1"
        : isTablet
          ? "1 / 1.05"
          : "1 / 1.03",

      overflow: "hidden",

      position: "relative",

      backgroundColor: "#eee8dc",

      boxSizing: "border-box",

      cursor: "pointer",
    },

    /* =========================
       IMAGE
    ========================= */

    image: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      transition:
        "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",

      willChange: "transform",
    },

    /* =========================
       CATEGORY LABEL
    ========================= */

    category: {
      margin: isMobile
        ? "12px 0 0"
        : "17px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "22px"
        : isTablet
          ? "24px"
          : "26px",

      fontWeight: 400,

      lineHeight: 1.25,

      color: "#292566",

      textAlign: "center",

      whiteSpace: "nowrap",

      boxSizing: "border-box",
    },

    /* =========================
       SECOND ROW ON MOBILE
    ========================= */

    mobileCardLast: {
      gridColumn: "1 / -1",

      width: "50%",

      justifySelf: "center",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* =========================
            HEADING
        ========================= */}

        <h2 style={styles.heading}>
          Discover Our Craftsmanship
        </h2>

        {/* =========================
            IMAGE GRID
        ========================= */}

        <div style={styles.imageGrid}>
          {craftsmanshipItems.map((item, index) => (
            <CraftsmanshipCard
              key={item.title}
              item={item}
              index={index}
              isMobile={isMobile}
              styles={styles}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================
   CRAFTSMANSHIP CARD
========================= */

function CraftsmanshipCard({
  item,
  index,
  isMobile,
  styles,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isLastItem = index === 4;

  return (
    <div
      style={
        isMobile && isLastItem
          ? {
              ...styles.card,
              ...styles.mobileCardLast,
            }
          : styles.card
      }
    >
      {/* =========================
          IMAGE
      ========================= */}

      <div
        style={styles.imageWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={item.image}
          alt={item.alt}
          style={{
            ...styles.image,

            transform: isHovered
              ? "scale(1.08)"
              : "scale(1)",
          }}
        />
      </div>

      {/* =========================
          CATEGORY
      ========================= */}

      <p style={styles.category}>
        {item.title}
      </p>
    </div>
  );
}

export default DiscoverCraftsmanship;