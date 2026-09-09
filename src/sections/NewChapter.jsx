import { useEffect, useState } from "react";
import newChapterImage from "../assets/images/new-chapter.jpg";

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
   NEW CHAPTER COMPONENT
========================= */

function NewChapter() {
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

      marginTop: "30px",

      padding: 0,

      boxSizing: "border-box",

      overflow: "hidden",
    },

    /* =========================
       MAIN CONTAINER
    ========================= */

    container: {
      width: isMobile
        ? "100%"
        : isTablet
          ? "100%"
          : "84.5%",

      maxWidth: isMobile
        ? "100%"
        : "1500px",

      margin: "0 auto",

      padding: 0,

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "53% 47%"
          : "53.8% 46.2%",

      gridTemplateRows: isMobile
        ? "auto auto"
        : "1fr",

      alignItems: "stretch",

      backgroundColor: "#f7f6ff",

      overflow: "hidden",

      boxSizing: "border-box",
    },

    /* =========================
       SINGLE IMAGE
    ========================= */

    imageWrapper: {
      width: "100%",

      height: isMobile
        ? "auto"
        : isTablet
          ? "430px"
          : "497px",

      minWidth: 0,

      overflow: "hidden",

      backgroundColor: "#eee8dc",

      boxSizing: "border-box",

      /* 
         Desktop:
         Image stays on the LEFT

         Mobile:
         Image moves BELOW content
      */

      gridColumn: isMobile ? "1" : "1",

      gridRow: isMobile ? "2" : "1",
    },

    /* =========================
       IMAGE
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
        ? "1.35 / 1"
        : "auto",
    },

    /* =========================
       CONTENT
    ========================= */

    content: {
      width: "100%",

      minWidth: 0,

      display: "flex",

      flexDirection: "column",

      justifyContent: "center",

      alignItems: "flex-start",

      padding: isMobile
        ? "40px 24px 45px"
        : isTablet
          ? "38px 35px 40px"
          : "16px 43px 18px 48px",

      background:
        "linear-gradient(90deg, #f4f3ff 0%, #f8f7ff 100%)",

      boxSizing: "border-box",

      /* 
         Desktop:
         Content stays on the RIGHT

         Mobile:
         Content moves ABOVE image
      */

      gridColumn: isMobile ? "1" : "2",

      gridRow: isMobile ? "1" : "1",
    },

    /* =========================
       MAIN HEADING
    ========================= */

    heading: {
      margin: 0,

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "40px"
        : isTablet
          ? "40px"
          : "43px",

      fontWeight: 400,

      lineHeight: 1.08,

      letterSpacing: "-1px",

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       INTRODUCTION
    ========================= */

    introduction: {
      margin: isMobile
        ? "5px 0 0"
        : "2px 0 0",

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "30px"
        : isTablet
          ? "30px"
          : "31px",

      fontWeight: 400,

      lineHeight: 1.18,

      letterSpacing: "-0.7px",

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       18KT
    ========================= */

goldText: {
  fontFamily: '"Jost", sans-serif',
  fontWeight: 700,
},

    /* =========================
       SHORT DESCRIPTION
    ========================= */

    shortDescription: {
      width: "100%",

      maxWidth: isMobile
        ? "100%"
        : "500px",

      margin: isMobile
        ? "23px 0 0"
        : "20px 0 0",

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "22px"
        : isTablet
          ? "21px"
          : "24px",

      fontWeight: 400,

      lineHeight: 1.42,

      color: "#292566",

      textAlign: "left",

      boxSizing: "border-box",
    },

    /* =========================
       MAIN DESCRIPTION
    ========================= */

    description: {
      width: "100%",

      maxWidth: isMobile
        ? "100%"
        : "520px",

      margin: isMobile
        ? "30px 0 0"
        : "36px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : isTablet
          ? "16px"
          : "20px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.7
        : 1.68,

      color: "#292566",

      textAlign: "left",

      boxSizing: "border-box",
    },

    /* =========================
       CLOSING LINE
    ========================= */

    closing: {
      margin: "24px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "20px",

      fontWeight: 400,

      lineHeight: 1.4,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       EXPLORE LINK
    ========================= */

    link: {
      display: "inline-flex",

      alignItems: "center",

      justifyContent: "flex-start",

      gap: isMobile
        ? "16px"
        : "18px",

      width: "fit-content",

      marginTop: isMobile
        ? "23px"
        : "21px",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "20px",

      fontWeight: 400,

      lineHeight: 1.2,

      color: "#292566",

      textDecoration: "none",

      cursor: "pointer",
    },

    /* =========================
       ARROW
    ========================= */

    arrow: {
      display: "inline-block",

      fontFamily: "Arial, sans-serif",

      fontSize: isMobile
        ? "25px"
        : "27px",

      fontWeight: 400,

      lineHeight: 1,

      transform: "translateY(-1px)",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* =========================
            CONTENT
        ========================= */}

        <div style={styles.content}>

          {/* MAIN HEADING */}

          <h2 style={styles.heading}>
            A new chapter
          </h2>

          {/* INTRODUCTION */}

<h3 style={styles.introduction}>
  Introducing{" "}
  <span style={styles.goldText}>
    18KT
  </span>
</h3>

          {/* SHORT DESCRIPTION */}

          <p style={styles.shortDescription}>
            A contemporary expression of the
            <br />
            Shilpi legacy.
          </p>

          {/* MAIN DESCRIPTION */}

          <p style={styles.description}>
            Four decades of craftsmanship now take a new form with Shilpi’s
            18KT collection. Created for a new generation of jewellery
            connoisseurs, the collection brings together contemporary design,
            refined elegance and the craftsmanship that has defined Shilpi
            since 1983.
          </p>

          {/* CLOSING LINE */}

          <p style={styles.closing}>
            The legacy evolves. The craftsmanship remains.
          </p>

          {/* EXPLORE LINK */}

          <a
            href="#18kt"
            style={styles.link}
          >
            <span>
              Explore 18KT
            </span>

            <span style={styles.arrow}>
              ⟶
            </span>
          </a>

        </div>

        {/* =========================
            SINGLE IMAGE
        ========================= */}

        <div style={styles.imageWrapper}>
          <img
            src={newChapterImage}
            alt="Shilpi 18KT jewellery collection"
            style={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default NewChapter;