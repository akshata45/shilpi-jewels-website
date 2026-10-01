import { useEffect, useState } from "react";

import twentyKTBanner from "../assets/images/20kt_banner.png";
import twentyKTGold from "../assets/images/collection-1.jpg";
import twentyKTJewellery from "../assets/images/Expression.png";
import twentyKTDesign from "../assets/images/banner20kt.png";
import twentyKTCraft from "../assets/images/gold_meets.png";

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
   20KT PAGE
========================================================= */

function TwentyKTPage() {
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
        ? "500px"
        : isTablet
          ? "570px"
          : "650px",

      position: "relative",

      display: "flex",

      alignItems: "center",

      backgroundImage: `url(${twentyKTBanner})`,

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
        "linear-gradient(90deg, rgba(18,18,18,0.76) 0%, rgba(18,18,18,0.48) 45%, rgba(18,18,18,0.16) 100%)",
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
          ? "680px"
          : "760px",

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
        ? "44px"
        : isTablet
          ? "60px"
          : "78px",

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

      maxWidth: "650px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "19px",

      lineHeight: 1.8,

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
       INTRODUCTION
    ===================================================== */

    introSection: {
      width: "100%",

      padding: isMobile
        ? "70px 22px"
        : isTablet
          ? "85px 40px"
          : "115px 60px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    introContainer: {
      width: "100%",

      maxWidth: "1100px",

      margin: "0 auto",

      textAlign: "center",
    },

    sectionLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "12px",

      letterSpacing: "3px",

      textTransform: "uppercase",

      fontWeight: 500,

      color: "#a18143",
    },

    goldLineCenter: {
      width: isMobile ? "42px" : "55px",

      height: "1px",

      margin: "17px auto 22px",

      background: "#b69659",
    },

    introTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "35px"
        : isTablet
          ? "45px"
          : "58px",

      lineHeight: 1.2,

      fontWeight: 400,

      color: "#27255a",
    },

    introItalic: {
      fontStyle: "italic",

      color: "#a18143",
    },

    introText: {
      margin: isMobile
        ? "24px auto 0"
        : "30px auto 0",

      maxWidth: "850px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "18px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#777777",
    },

    /* =====================================================
       20K PURITY FEATURE
    ===================================================== */

    puritySection: {
      width: "100%",

      padding: isMobile
        ? "0 20px 75px"
        : isTablet
          ? "0 35px 95px"
          : "0 60px 120px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    purityContainer: {
      width: "100%",

      maxWidth: "1380px",

      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "0.9fr 1.1fr",

      gap: isMobile
        ? "40px"
        : isTablet
          ? "55px"
          : "90px",

      alignItems: "center",
    },

    purityImageWrapper: {
      width: "100%",

      height: isMobile
        ? "390px"
        : isTablet
          ? "470px"
          : "580px",

      overflow: "hidden",

      background: "#f3f1ec",

      boxSizing: "border-box",
    },

    purityImage: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    purityContent: {
      padding: isMobile
        ? "0"
        : isTablet
          ? "0 10px"
          : "0 25px",

      boxSizing: "border-box",
    },

    purityTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "38px"
        : isTablet
          ? "48px"
          : "60px",

      lineHeight: 1.15,

      fontWeight: 400,

      color: "#27255a",
    },

    purityItalic: {
      fontStyle: "italic",

      color: "#a18143",
    },

    purityText: {
      margin: isMobile
        ? "23px 0 0"
        : "30px 0 0",

      maxWidth: "650px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "18px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#777777",
    },

    purityNumber: {
      marginTop: isMobile ? "30px" : "38px",

      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile ? "48px" : "62px",

      lineHeight: 1,

      color: "#b69659",

      fontWeight: 400,
    },

    purityCaption: {
      marginTop: "8px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "12px",

      letterSpacing: "2px",

      textTransform: "uppercase",

      color: "#8a8a8a",
    },

    /* =====================================================
       INFORMATION STRIP
    ===================================================== */

    informationSection: {
      width: "100%",

      padding: isMobile
        ? "65px 20px"
        : isTablet
          ? "80px 35px"
          : "100px 60px",

      background: "#f8f6f1",

      boxSizing: "border-box",
    },

    informationContainer: {
      width: "100%",

      maxWidth: "1280px",

      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "repeat(2, 1fr)"
          : "repeat(3, 1fr)",

      gap: isMobile ? "18px" : "25px",
    },

    informationCard: {
      minHeight: isMobile ? "220px" : "260px",

      padding: isMobile
        ? "30px 25px"
        : "40px 32px",

      background: "#ffffff",

      border: "1px solid rgba(154,122,59,0.22)",

      boxSizing: "border-box",

      display: "flex",

      flexDirection: "column",

      justifyContent: "center",

      textAlign: "center",

      transition:
        "transform 0.35s ease, box-shadow 0.35s ease",
    },

    informationNumber: {
      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile ? "18px" : "21px",

      fontStyle: "italic",

      color: "#b69659",

      marginBottom: "18px",
    },

    informationTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile ? "26px" : "30px",

      fontWeight: 400,

      lineHeight: 1.2,

      color: "#27255a",
    },

    informationLine: {
      width: "32px",

      height: "1px",

      margin: "15px auto",

      background: "#b69659",
    },

    informationText: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "13px" : "15px",

      lineHeight: 1.8,

      fontWeight: 300,

      color: "#777777",
    },

    /* =====================================================
       DESIGN SECTION
    ===================================================== */

    designSection: {
      width: "100%",

      padding: isMobile
        ? "75px 20px"
        : isTablet
          ? "90px 35px"
          : "120px 60px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    designContainer: {
      width: "100%",

      maxWidth: "1380px",

      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "1.1fr 0.9fr",

      gap: isMobile
        ? "40px"
        : isTablet
          ? "55px"
          : "90px",

      alignItems: "center",
    },

    designContent: {
      order: isMobile ? 1 : 0,

      boxSizing: "border-box",
    },

    designImageWrapper: {
      order: isMobile ? 0 : 1,

      width: "100%",

      height: isMobile
        ? "400px"
        : isTablet
          ? "480px"
          : "590px",

      overflow: "hidden",

      background: "#f3f1ec",

      boxSizing: "border-box",
    },

    designImage: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    designTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "38px"
        : isTablet
          ? "48px"
          : "60px",

      lineHeight: 1.15,

      fontWeight: 400,

      color: "#27255a",
    },

    designItalic: {
      fontStyle: "italic",

      color: "#a18143",
    },

    designText: {
      margin: isMobile
        ? "22px 0 0"
        : "28px 0 0",

      maxWidth: "620px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "18px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#777777",
    },

    designPoints: {
      margin: isMobile
        ? "28px 0 0"
        : "35px 0 0",

      padding: 0,

      listStyle: "none",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "13px" : "15px",

      lineHeight: 2,

      color: "#5f5f5f",
    },

    designPoint: {
      position: "relative",

      paddingLeft: "22px",

      marginBottom: "7px",
    },

    designBullet: {
      position: "absolute",

      left: 0,

      top: "11px",

      width: "6px",

      height: "6px",

      borderRadius: "50%",

      background: "#b69659",
    },

    /* =====================================================
       CRAFTSMANSHIP SECTION
    ===================================================== */

    craftsmanshipSection: {
      width: "100%",

      padding: isMobile
        ? "0 20px 75px"
        : isTablet
          ? "0 35px 95px"
          : "0 60px 120px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    craftsmanshipContainer: {
      width: "100%",

      maxWidth: "1380px",

      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "1fr 1fr",

      gap: isMobile
        ? "40px"
        : isTablet
          ? "55px"
          : "85px",

      alignItems: "center",
    },

    craftImageWrapper: {
      width: "100%",

      height: isMobile
        ? "380px"
        : isTablet
          ? "470px"
          : "570px",

      overflow: "hidden",

      background: "#f3f1ec",

      boxSizing: "border-box",
    },

    craftImage: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    craftContent: {
      boxSizing: "border-box",

      padding: isMobile
        ? "0"
        : isTablet
          ? "0 10px"
          : "0 20px",
    },

    craftTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "37px"
        : isTablet
          ? "47px"
          : "58px",

      lineHeight: 1.15,

      fontWeight: 400,

      color: "#27255a",
    },

    craftItalic: {
      fontStyle: "italic",

      color: "#a18143",
    },

    craftText: {
      margin: isMobile
        ? "22px 0 0"
        : "28px 0 0",

      maxWidth: "600px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "18px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#777777",
    },

    /* =====================================================
       HALLMARK SECTION
    ===================================================== */

    hallmarkSection: {
      width: "100%",

      padding: isMobile
        ? "70px 25px"
        : isTablet
          ? "85px 40px"
          : "105px 60px",

      background: "#29255d",

      boxSizing: "border-box",

      textAlign: "center",
    },

    hallmarkContainer: {
      width: "100%",

      maxWidth: "950px",

      margin: "0 auto",
    },

    hallmarkLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "12px",

      letterSpacing: "3px",

      textTransform: "uppercase",

      color: "#d3b575",

      fontWeight: 500,
    },

    hallmarkLine: {
      width: "50px",

      height: "1px",

      margin: "18px auto 23px",

      background: "#b69659",
    },

    hallmarkTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "34px"
        : isTablet
          ? "43px"
          : "54px",

      lineHeight: 1.2,

      fontWeight: 400,

      color: "#ffffff",
    },

    hallmarkItalic: {
      fontStyle: "italic",

      color: "#d3b575",
    },

    hallmarkText: {
      margin: isMobile
        ? "23px auto 0"
        : "30px auto 0",

      maxWidth: "760px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "14px" : "16px",

      lineHeight: 1.9,

      color: "rgba(255,255,255,0.74)",

      fontWeight: 300,
    },

    hallmarkBadge: {
      margin: isMobile
        ? "35px auto 0"
        : "45px auto 0",

      width: isMobile ? "115px" : "135px",

      height: isMobile ? "115px" : "135px",

      borderRadius: "50%",

      border: "1px solid rgba(211,181,117,0.65)",

      display: "flex",

      flexDirection: "column",

      alignItems: "center",

      justifyContent: "center",

      boxSizing: "border-box",
    },

    hallmarkBadgeMain: {
      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile ? "28px" : "34px",

      color: "#ffffff",

      lineHeight: 1,
    },

    hallmarkBadgeSmall: {
      marginTop: "8px",

      fontFamily: '"Jost", sans-serif',

      fontSize: "10px",

      letterSpacing: "2px",

      color: "#d3b575",
    },

    /* =====================================================
       FINAL STATEMENT
    ===================================================== */

    finalSection: {
      width: "100%",

      padding: isMobile
        ? "70px 25px 80px"
        : "95px 40px 110px",

      background: "#f8f6f1",

      textAlign: "center",

      boxSizing: "border-box",
    },

    finalInner: {
      maxWidth: "900px",

      margin: "0 auto",
    },

    finalTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "31px"
        : isTablet
          ? "40px"
          : "50px",

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

      maxWidth: "720px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "14px" : "17px",

      lineHeight: 1.85,

      fontWeight: 300,

      color: "#777777",
    },
  };

  /* =======================================================
     INFORMATION DATA
  ======================================================= */

  const informationCards = [
    {
      number: "01",
      title: "20K Gold",
      text:
        "20K gold contains approximately 83.3% pure gold by mass, with the remaining portion made up of alloying metals.",
    },
    {
      number: "02",
      title: "833 Fineness",
      text:
        "The recognised fineness associated with 20K gold is 833, representing approximately 833 parts of gold per 1,000 parts of the alloy.",
    },
    {
      number: "03",
      title: "A Distinct Balance",
      text:
        "With more alloy content than 22K gold, 20K can offer a different balance of gold content, colour, strength and design possibilities.",
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
        aria-label="Shilpi Jewels 20KT Gold"
      >

        <div style={styles.heroOverlay} />

        <div style={styles.heroInner}>

          <div style={styles.heroContent}>



            <div style={styles.heroGoldLine} />

            <h1 style={styles.heroHeading}>
              The Beauty of
              <br />

              <span style={styles.heroHeadingItalic}>
                20KT Gold
              </span>
            </h1>

            <p style={styles.heroText}>
              A distinctive gold standard for jewellery
              that brings together substantial gold purity,
              considered design and the versatility of
              contemporary craftsmanship.
            </p>

          </div>

        </div>

        <div style={styles.heroBottomLine} />

      </section>


      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section style={styles.introSection}>

        <div style={styles.introContainer}>

          <p style={styles.sectionLabel}>
            UNDERSTANDING 20KT GOLD
          </p>

          <div style={styles.goldLineCenter} />

          <h2 style={styles.introTitle}>
            Gold With{" "}
            <span style={styles.introItalic}>
              Substance
            </span>
          </h2>

          <p style={styles.introText}>
            20K gold represents a carefully balanced gold
            alloy containing approximately 83.3% gold.
            It sits between the higher gold content of 22K
            and the lower gold content of 18K, offering
            a distinct material character for jewellery
            design. In India, 20K corresponds to
            833 fineness under the BIS gold jewellery
            fineness standards.
          </p>

        </div>

      </section>


      {/* =================================================
          PURITY FEATURE
      ================================================= */}

      <section style={styles.puritySection}>

        <div style={styles.purityContainer}>

          <div
            style={styles.purityImageWrapper}
            onMouseEnter={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1.035)";
                }
              }
            }}
            onMouseLeave={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1)";
                }
              }
            }}
          >

            <img
              src={twentyKTGold}
              alt="20KT gold jewellery"
              style={styles.purityImage}
            />

          </div>


          <div style={styles.purityContent}>

            <p style={styles.sectionLabel}>
              GOLD FINENESS
            </p>

            <div
              style={{
                ...styles.goldLineCenter,
                marginLeft: 0,
                marginRight: 0,
              }}
            />

            <h2 style={styles.purityTitle}>
              83.3% Gold,
              <br />

              <span style={styles.purityItalic}>
                Beautifully Balanced
              </span>
            </h2>

            <p style={styles.purityText}>
              20K gold contains approximately 83.3% pure
              gold. The remaining portion consists of
              alloying metals that influence the physical
              characteristics of the finished jewellery.
              This composition gives designers another
              option when balancing gold content with
              structure, detailing and everyday wear
              requirements.
            </p>

            <div style={styles.purityNumber}>
              833
            </div>

            <p style={styles.purityCaption}>
              Fineness associated with 20K gold
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          KEY INFORMATION
      ================================================= */}

      <section style={styles.informationSection}>

        <div style={styles.informationContainer}>

          {informationCards.map((item) => (

            <article
              key={item.number}
              style={styles.informationCard}

              onMouseEnter={(event) => {
                if (!isMobile) {
                  event.currentTarget.style.transform =
                    "translateY(-7px)";

                  event.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(39,37,90,0.09)";
                }
              }}

              onMouseLeave={(event) => {
                if (!isMobile) {
                  event.currentTarget.style.transform =
                    "translateY(0)";

                  event.currentTarget.style.boxShadow =
                    "none";
                }
              }}
            >

              <div style={styles.informationNumber}>
                {item.number}
              </div>

              <h3 style={styles.informationTitle}>
                {item.title}
              </h3>

              <div style={styles.informationLine} />

              <p style={styles.informationText}>
                {item.text}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =================================================
          DESIGN SECTION
      ================================================= */}

      <section style={styles.designSection}>

        <div style={styles.designContainer}>

          <div style={styles.designContent}>

            <p style={styles.sectionLabel}>
              DESIGN POSSIBILITIES
            </p>

            <div
              style={{
                ...styles.goldLineCenter,
                marginLeft: 0,
                marginRight: 0,
              }}
            />

            <h2 style={styles.designTitle}>
              Crafted for
              <br />

              <span style={styles.designItalic}>
                Individual Expression
              </span>
            </h2>

            <p style={styles.designText}>
              Gold is not only defined by its purity.
              Its character also comes through in the
              way it is shaped, finished and designed.
              20K jewellery allows a distinctive approach
              to creating pieces with a rich gold presence
              and carefully considered detailing.
            </p>

            <ul style={styles.designPoints}>

              <li style={styles.designPoint}>
                <span style={styles.designBullet} />
                Refined traditional jewellery
              </li>

              <li style={styles.designPoint}>
                <span style={styles.designBullet} />
                Contemporary statement pieces
              </li>

              <li style={styles.designPoint}>
                <span style={styles.designBullet} />
                Detailed ornamental designs
              </li>

              <li style={styles.designPoint}>
                <span style={styles.designBullet} />
                Personal and occasion-led jewellery
              </li>

            </ul>

          </div>


          <div
            style={styles.designImageWrapper}
            onMouseEnter={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1.035)";
                }
              }
            }}
            onMouseLeave={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1)";
                }
              }
            }}
          >

            <img
              src={twentyKTJewellery}
              alt="20KT gold jewellery collection"
              style={styles.designImage}
            />

          </div>

        </div>

      </section>


      {/* =================================================
          CRAFTSMANSHIP SECTION
      ================================================= */}

      <section style={styles.craftsmanshipSection}>

        <div style={styles.craftsmanshipContainer}>

          <div
            style={styles.craftImageWrapper}
            onMouseEnter={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1.035)";
                }
              }
            }}
            onMouseLeave={(event) => {
              if (!isMobile) {
                const image =
                  event.currentTarget.querySelector("img");

                if (image) {
                  image.style.transform = "scale(1)";
                }
              }
            }}
          >

            <img
              src={twentyKTCraft}
              alt="20KT jewellery craftsmanship"
              style={styles.craftImage}
            />

          </div>


          <div style={styles.craftContent}>

            <p style={styles.sectionLabel}>
              THE CRAFT
            </p>

            <div
              style={{
                ...styles.goldLineCenter,
                marginLeft: 0,
                marginRight: 0,
              }}
            />

            <h2 style={styles.craftTitle}>
              Where Gold Meets
              <br />

              <span style={styles.craftItalic}>
                Craftsmanship
              </span>
            </h2>

            <p style={styles.craftText}>
              The character of fine jewellery comes from
              more than the metal itself. Proportion,
              finishing, detailing and the discipline of
              craftsmanship all contribute to the final
              expression.
            </p>

            <p style={styles.craftText}>
              At Shilpi Jewels, the focus remains on
              creating pieces that feel considered,
              elegant and meaningful, while respecting
              the enduring traditions of Indian jewellery.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          DESIGN IMAGE / PATTERN SHOWCASE
      ================================================= */}

      <section
        style={{
          width: "100%",
          padding: isMobile
            ? "0 20px 75px"
            : isTablet
              ? "0 35px 95px"
              : "0 60px 120px",
          background: "#ffffff",
          boxSizing: "border-box",
        }}
      >

        <div
          style={{
            width: "100%",
            maxWidth: "1380px",
            margin: "0 auto",
            height: isMobile
              ? "360px"
              : isTablet
                ? "430px"
                : "520px",
            overflow: "hidden",
            background: "#f3f1ec",
          }}
        >

          <img
            src={twentyKTDesign}
            alt="20KT gold jewellery design details"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

        </div>

      </section>


      {/* =================================================
          HALLMARK / PURITY SECTION
      ================================================= */}

      <section style={styles.hallmarkSection}>

        <div style={styles.hallmarkContainer}>

          <p style={styles.hallmarkLabel}>
            PURITY & ASSURANCE
          </p>

          <div style={styles.hallmarkLine} />

          <h2 style={styles.hallmarkTitle}>
            Know Your Gold.
            <br />

            <span style={styles.hallmarkItalic}>
              Choose With Confidence.
            </span>
          </h2>

          <p style={styles.hallmarkText}>
            For hallmarked gold jewellery, BIS identifies
            purity through the prescribed hallmarking
            system. 20K gold corresponds to 833 fineness.
            The current hallmark framework includes the
            BIS Standard Mark, purity/fineness and a
            six-digit HUID for hallmarked jewellery.
          </p>

          <div style={styles.hallmarkBadge}>

            <div style={styles.hallmarkBadgeMain}>
              20K
            </div>

            <div style={styles.hallmarkBadgeSmall}>
              833 FINENESS
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL BRAND STATEMENT
      ================================================= */}

      <section style={styles.finalSection}>

        <div style={styles.finalInner}>

          <h2 style={styles.finalTitle}>
            Gold with character.
            <br />

            <span style={styles.finalItalic}>
              Jewellery with meaning.
            </span>
          </h2>

          <p style={styles.finalText}>
            From refined everyday expressions to jewellery
            created for meaningful occasions, 20K gold offers
            another distinctive way to experience the warmth,
            richness and enduring beauty of gold.
          </p>

        </div>

      </section>

    </main>
  );
}

export default TwentyKTPage;