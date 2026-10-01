import { useEffect, useState } from "react";

import missionBanner from "../assets/images/signature.jpg";
import missionImage from "../assets/images/mission-jewellery.png";
import visionImage from "../assets/images/vision-jewellery.png";
import promiseImage from "../assets/images/vision-jewellery (2).png";

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
   MISSION PAGE
========================================================= */

function MissionPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
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

      minHeight: isMobile
        ? "480px"
        : isTablet
          ? "560px"
          : "650px",

      position: "relative",

      display: "flex",

      alignItems: "center",

      backgroundImage: `url(${missionBanner})`,

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
        "linear-gradient(90deg, rgba(18,18,18,0.72) 0%, rgba(18,18,18,0.48) 42%, rgba(18,18,18,0.18) 100%)",
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
          : "720px",

      paddingTop: isMobile ? "25px" : "10px",
    },

    heroSmall: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "12px",

      letterSpacing: "4px",

      textTransform: "uppercase",

      color: "rgba(255,255,255,0.9)",

      fontWeight: 400,
      textAlign: "justify",
    },

    heroGoldLine: {
      width: isMobile ? "42px" : "60px",

      height: "1px",

      margin: "20px 0",

      background: "#d1b06a",
    },

    heroHeading: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "43px"
        : isTablet
          ? "58px"
          : "76px",

      lineHeight: 1.05,

      fontWeight: 400,

      letterSpacing: "-1px",

      color: "#ffffff",
    },

    heroHeadingItalic: {
      fontStyle: "italic",

      fontWeight: 400,

      color: "#d8bd82",
    },

    heroText: {
      margin: isMobile
        ? "22px 0 0"
        : "28px 0 0",

      maxWidth: "610px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "14px" : "20px",
      textAlign: "justify",

      lineHeight: 1.75,

      color: "rgba(255,255,255,0.9)",

      fontWeight: 300,
    },

    heroBottomLine: {
      position: "absolute",

      bottom: isMobile ? "25px" : "35px",

      left: isMobile ? "20px" : "60px",

      right: isMobile ? "20px" : "60px",

      height: "1px",

      background: "rgba(255,255,255,0.3)",

      zIndex: 2,
    },

    /* =====================================================
       BRAND STORY SECTION
    ===================================================== */

    storySection: {
      width: "100%",

      padding: isMobile
        ? "65px 20px"
        : isTablet
          ? "80px 35px"
          : "110px 60px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    storyContainer: {
      width: "100%",

      maxWidth: "1380px",

      margin: "0 auto",

      display: "flex",

      flexDirection: "column",

      gap: isMobile
        ? "70px"
        : isTablet
          ? "90px"
          : "120px",
    },

    /* =====================================================
       STORY ROW
    ===================================================== */

    storyRow: {
      width: "100%",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "1fr 1fr",

      alignItems: "center",

      gap: isMobile
        ? "35px"
        : isTablet
          ? "50px"
          : "85px",
    },

    storyRowReverse: {
      direction: "rtl",
    },

    storyContent: {
      direction: "ltr",

      boxSizing: "border-box",

      padding: isMobile
        ? "0"
        : isTablet
          ? "0 10px"
          : "0 20px",
    },

    storyImageWrapper: {
      width: "100%",

      height: isMobile
        ? "390px"
        : isTablet
          ? "480px"
          : "610px",

      overflow: "hidden",

      background: "#f3f1ec",

      boxSizing: "border-box",

      position: "relative",
    },

    storyImage: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center center",

      transition: "transform 0.6s ease",
    },

    sectionLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "14px",
      

      letterSpacing: "3px",

      textTransform: "uppercase",

      fontWeight: 500,

      color: "#a18143",
    },

    goldLine: {
      width: isMobile ? "42px" : "55px",

      height: "1px",

      margin: "17px 0 22px",

      background: "#b69659",
    },

    storyTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "38px"
        : isTablet
          ? "48px"
          : "58px",

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
        ? "22px 0 0"
        : "28px 0 0",

      maxWidth: "530px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",
      textAlign: "justify",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#858585",
    },

    storyExtraText: {
      margin: isMobile
        ? "15px 0 0"
        : "18px 0 0",

      maxWidth: "530px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",
      textAlign: "justify",

      lineHeight: 1.85,

      fontWeight: 300,

      color: "#858585",
    },

    storyNumber: {
      marginTop: isMobile ? "30px" : "40px",

      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile ? "15px" : "17px",

      fontStyle: "italic",

      color: "#b69659",
    },

    /* =====================================================
       IMAGE CAPTION
    ===================================================== */

    imageCaption: {
      position: "absolute",

      left: isMobile ? "15px" : "25px",

      bottom: isMobile ? "15px" : "25px",

      padding: "8px 13px",

      background: "rgba(209, 155, 6, 0.94)",

      color: "#ffffff",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "9px" : "12px",

      letterSpacing: "1.5px",

      textTransform: "uppercase",

      fontWeight: 400,

      boxSizing: "border-box",
    },

    /* =====================================================
       FINAL BRAND LINE
    ===================================================== */

    finalSection: {
      width: "100%",

      padding: isMobile
        ? "65px 25px 75px"
        : "90px 40px 105px",

      background: "#f8f6f1",

      textAlign: "center",

      boxSizing: "border-box",
    },

    finalInner: {
      maxWidth: "850px",

      margin: "0 auto",
    },

    finalTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "30px"
        : isTablet
          ? "38px"
          : "48px",

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

      maxWidth: "680px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",
      
      lineHeight: 1.8,

      fontWeight: 300,

      color: "#777777",
    },
  };

  /* =======================================================
     CONTENT
  ======================================================= */

  const stories = [
    {
      number: "01",
      label: "OUR MISSION",
      title: (
        <>
          Jewellery With{" "}
          <span style={styles.storyTitleItalic}>
            Meaning
          </span>
        </>
      ),
      text:
        "To create jewellery that celebrates individuality, meaningful moments and the stories that stay with us for a lifetime.",
      extraText:
        "We believe every creation should feel personal, considered and worthy of the occasion it becomes part of. From everyday elegance to life's most important celebrations, our purpose is to create jewellery that carries significance.",
      image: missionImage,
      imageCaption: "Meaningful Craftsmanship",
      reverse: false,
    },

    {
      number: "02",
      label: "OUR VISION",
      title: (
        <>
          Tradition Meets{" "}
          <span style={styles.storyTitleItalic}>
            Tomorrow
          </span>
        </>
      ),
      text:
        "To carry forward the richness of Indian jewellery while creating designs that feel relevant, refined and timeless.",
      extraText:
        "Our vision is rooted in respect for heritage while looking ahead. We bring together traditional inspiration, contemporary design and a refined sense of detail to create pieces that remain relevant across generations.",
      image: visionImage,
      imageCaption: "Tradition & Modern Design",
      reverse: true,
    },

    {
      number: "03",
      label: "OUR PROMISE",
      title: (
        <>
          Made With{" "}
          <span style={styles.storyTitleItalic}>
            Trust
          </span>
        </>
      ),
      text:
        "Every Shilpi creation reflects our commitment to thoughtful design, lasting quality and an experience built on trust.",
      extraText:
        "For us, jewellery is also a relationship. We remain committed to honest guidance, careful attention and a consistent experience that makes every Shilpi creation as reassuring to own as it is beautiful to wear.",
      image: promiseImage,
      imageCaption: "A Promise of Trust",
      reverse: false,
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
        aria-label="Shilpi Jewels Mission"
      >

        <div style={styles.heroOverlay} />

        <div style={styles.heroInner}>

          <div style={styles.heroContent}>

            <p style={styles.heroSmall}>
              SHILPI JEWELS
            </p>

            <div style={styles.heroGoldLine} />

            <h1 style={styles.heroHeading}>
              A Legacy of
              <br />

              <span style={styles.heroHeadingItalic}>
                Meaning,
              </span>

              <br />

              Craftsmanship
              <br />

              &amp; Trust.
            </h1>

            <p style={styles.heroText}>
              Jewellery is more than what we wear.
              It carries stories, celebrates milestones
              and becomes part of the generations that
              follow.
            </p>

          </div>

        </div>

        <div style={styles.heroBottomLine} />

      </section>


      {/* =================================================
          MISSION / VISION / PROMISE
      ================================================= */}

      <section style={styles.storySection}>

        <div style={styles.storyContainer}>

          {stories.map((item) => (

            <article
              key={item.number}
              style={{
                ...styles.storyRow,
                ...(item.reverse
                  ? styles.storyRowReverse
                  : {}),
              }}
            >

              {/* IMAGE */}

              <div
                style={{
                  ...styles.storyImageWrapper,
                  direction: "ltr",
                }}
                onMouseEnter={(event) => {
                  if (!isMobile) {
                    const image =
                      event.currentTarget.querySelector("img");

                    if (image) {
                      image.style.transform =
                        "scale(1.035)";
                    }
                  }
                }}
                onMouseLeave={(event) => {
                  if (!isMobile) {
                    const image =
                      event.currentTarget.querySelector("img");

                    if (image) {
                      image.style.transform =
                        "scale(1)";
                    }
                  }
                }}
              >

                <img
                  src={item.image}
                  alt={`Shilpi Jewels ${item.label.toLowerCase()}`}
                  style={styles.storyImage}
                />

                <div style={styles.imageCaption}>
                  {item.imageCaption}
                </div>

              </div>


              {/* CONTENT */}

              <div style={styles.storyContent}>

                <p style={styles.sectionLabel}>
                  {item.label}
                </p>

                <div style={styles.goldLine} />

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

          ))}

        </div>

      </section>


      {/* =================================================
          FINAL BRAND STATEMENT
      ================================================= */}

      <section style={styles.finalSection}>

        <div style={styles.finalInner}>

          <h2 style={styles.finalTitle}>
            Crafted for today.
            <br />

            <span style={styles.finalItalic}>
              Treasured for generations.
            </span>
          </h2>

          <p style={styles.finalText}>
            At Shilpi Jewels, every creation is guided by
            the belief that true luxury lies in the details,
            the meaning behind every piece and the trust
            that continues long after it is chosen.
          </p>

        </div>

      </section>

    </main>
  );
}

export default MissionPage;