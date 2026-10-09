import { useEffect, useState } from "react";

import twentyTwoBanner from "../assets/images/22kt_banner.jpg";
import twentyTwoGold from "../assets/images/twentyTwoGold.jpeg";
import twentyTwoCraft from "../assets/images/22kt-craftsmanship.jpeg";
import twentyTwoBridal from "../assets/images/22kt-bridal.png";
import twentyTwoDaily from "../assets/images/promise-jewellery.png";
import twentyTwoDesign from "../assets/images/22kt-design.png";
import twentyTwoCare from "../assets/images/22kt-care.png";
import bangles from "../assets/images/bangles.jpeg";
import earrings from "../assets/images/earings.jpeg";
import chokers from "../assets/images/chokers.jpg";

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
   22KT PAGE
========================================================= */

function TwentyTwoKTPage() {
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
          ? "580px"
          : "690px",

      position: "relative",

      display: "flex",
      alignItems: "flex-end",

      backgroundImage: `url(${twentyTwoBanner})`,
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
        "linear-gradient(90deg, rgba(25,22,18,0.78) 0%, rgba(25,22,18,0.48) 45%, rgba(25,22,18,0.10) 100%)",
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

      paddingBottom: isMobile ? "65px" : "85px",

      boxSizing: "border-box",
    },

    heroContent: {
      maxWidth: isMobile
        ? "100%"
        : isTablet
          ? "650px"
          : "720px",
    },

    heroLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',
      fontSize: isMobile ? "10px" : "12px",

      letterSpacing: "4px",
      textTransform: "uppercase",

      color: "rgba(255,255,255,0.88)",
      fontWeight: 400,
    },

    heroLine: {
      width: isMobile ? "45px" : "65px",
      height: "1px",

      margin: "19px 0 23px",

      background: "#d3b16b",
    },

    heroHeading: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "46px"
        : isTablet
          ? "61px"
          : "80px",

      lineHeight: 1.02,
      fontWeight: 400,

      letterSpacing: "-1px",

      color: "#ffffff",
    },

    heroItalic: {
      fontStyle: "italic",
      color: "#d8bd82",
    },

    heroText: {
      margin: isMobile
        ? "22px 0 0"
        : "28px 0 0",

      maxWidth: "650px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "20px",

      lineHeight: 1.8,
      fontWeight: 300,

      color: "rgba(255,255,255,0.88)",
    },

    heroBadge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",

      marginTop: isMobile ? "28px" : "35px",

      padding: "9px 18px",

      border: "1px solid rgba(214,190,137,0.55)",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "9px" : "14px",

      letterSpacing: "2px",
      textTransform: "uppercase",

      color: "#e0c58b",
    },

    /* =====================================================
       INTRODUCTION
    ===================================================== */

    introSection: {
      width: "100%",

      padding: isMobile
        ? "70px 25px"
        : isTablet
          ? "90px 45px"
          : "125px 60px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    introInner: {
      maxWidth: "1120px",
      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "0.8fr 1.2fr",

      gap: isMobile ? "35px" : "80px",

      alignItems: "start",
    },

    introLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "14px",

      letterSpacing: "3px",

      textTransform: "uppercase",

      color: "#a18143",

      fontWeight: 500,
    },

    introHeading: {
      margin: isMobile
        ? "18px 0 0"
        : "25px 0 0",

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
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",

      lineHeight: 1.95,

      fontWeight: 300,

      color: "#707070",
    },

    introTextSecond: {
      margin: "20px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#888888",
    },

    /* =====================================================
       PURITY FEATURE
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
      maxWidth: "1380px",
      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "1.05fr 0.95fr",

      minHeight: isMobile ? "auto" : "590px",

      background: "#f7f4ed",
    },

    purityImageWrap: {
      width: "100%",

      minHeight: isMobile ? "390px" : "590px",

      overflow: "hidden",

      background: "#eeeae0",
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
        ? "55px 28px"
        : isTablet
          ? "65px 55px"
          : "85px 75px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      boxSizing: "border-box",
    },

    smallLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "14px",

      letterSpacing: "3px",

      textTransform: "uppercase",

      color: "#a18143",

      fontWeight: 500,
    },

    purityTitle: {
      margin: "18px 0 0",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "38px"
        : isTablet
          ? "47px"
          : "58px",

      lineHeight: 1.15,

      fontWeight: 400,

      color: "#27255a",
    },

    purityItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    purityLine: {
      width: "50px",
      height: "1px",

      margin: "23px 0",

      background: "#b69659",
    },

    purityText: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "14px" : "20px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#6f6f6f",
    },

    purityNote: {
      margin: "24px 0 0",

      paddingLeft: "18px",

      borderLeft: "1px solid #b69659",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile ? "16px" : "19px",

      lineHeight: 1.65,

      fontStyle: "italic",

      color: "#4f4d4d",
    },

    /* =====================================================
       GOLD CHARACTER
    ===================================================== */

    characterSection: {
      width: "100%",

      padding: isMobile
        ? "75px 20px"
        : isTablet
          ? "90px 35px"
          : "115px 60px",

      background: "#29255d",

      boxSizing: "border-box",
    },

    characterInner: {
      maxWidth: "1350px",
      margin: "0 auto",
    },

    characterHeader: {
      maxWidth: "800px",
      margin: "0 auto",

      textAlign: "center",
    },

    darkLabel: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "10px" : "14px",

      letterSpacing: "3px",

      textTransform: "uppercase",

      color: "#d3b575",

      fontWeight: 500,
    },

    characterHeading: {
      margin: "18px 0 0",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "34px"
        : isTablet
          ? "44px"
          : "57px",

      lineHeight: 1.2,

      fontWeight: 400,

      color: "#ffffff",
    },

    characterItalic: {
      fontStyle: "italic",
      color: "#d3b575",
    },

    characterText: {
      margin: "23px auto 0",

      maxWidth: "720px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "14px" : "20px",

      lineHeight: 1.85,

      fontWeight: 300,

      color: "rgba(255,255,255,0.7)",
    },

    characterGrid: {
      marginTop: isMobile ? "45px" : "70px",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "repeat(2, 1fr)"
          : "repeat(3, 1fr)",

      gap: isMobile ? "18px" : "24px",
    },

    characterCard: {
      minHeight: isMobile ? "255px" : "290px",

      padding: isMobile
        ? "30px 26px"
        : "38px 32px",

      border: "1px solid rgba(211,181,117,0.32)",

      boxSizing: "border-box",

      display: "flex",
      flexDirection: "column",

      justifyContent: "center",

      background:
        "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",

      transition:
        "transform 0.35s ease, background 0.35s ease",
    },

    characterNumber: {
      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: "20px",

      fontStyle: "italic",

      color: "#d3b575",

      marginBottom: "18px",
    },

    characterTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile ? "25px" : "29px",

      lineHeight: 1.2,

      fontWeight: 400,

      color: "#ffffff",
    },

    characterLine: {
      width: "32px",

      height: "1px",

      margin: "17px 0",

      background: "#b69659",
    },

    characterCardText: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "20px",

      lineHeight: 1.8,

      fontWeight: 300,

      color: "rgba(255,255,255,0.68)",
    },

    /* =====================================================
       JEWELLERY FORMS
    ===================================================== */

    formsSection: {
      width: "100%",

      padding: isMobile
        ? "75px 20px 85px"
        : isTablet
          ? "90px 35px 105px"
          : "120px 60px 135px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    formsInner: {
      maxWidth: "1380px",
      margin: "0 auto",
    },

    formsHeading: {
      textAlign: "center",

      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "34px"
        : isTablet
          ? "44px"
          : "56px",

      lineHeight: 1.2,

      fontWeight: 400,

      color: "#27255a",
    },

    formsItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    formsIntro: {
      maxWidth: "750px",

      margin: "22px auto 0",

      textAlign: "center",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "14px" : "20px",

      lineHeight: 1.85,

      fontWeight: 300,

      color: "#777777",
    },

    formsGrid: {
      marginTop: isMobile ? "45px" : "65px",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "repeat(2, 1fr)"
          : "repeat(4, 1fr)",

      gap: isMobile ? "20px" : "24px",
    },

    formCard: {
      background: "#f6f3ec",

      boxSizing: "border-box",

      overflow: "hidden",

      border: "1px solid rgba(154,122,59,0.16)",

      transition:
        "transform 0.35s ease, box-shadow 0.35s ease",
    },

    formImageWrap: {
      width: "100%",

      height: isMobile ? "310px" : "360px",

      overflow: "hidden",

      background: "#ebe7de",
    },

    formImage: {
      width: "100%",
      height: "100%",

      display: "block",

      objectFit: "cover",
      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    formContent: {
      padding: isMobile
        ? "24px 22px 28px"
        : "28px 25px 32px",

      textAlign: "center",
    },

    formTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile ? "25px" : "28px",

      fontWeight: 400,

      color: "#27255a",
    },

    formText: {
      margin: "11px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "20px",

      lineHeight: 1.75,

      fontWeight: 300,

      color: "#777777",
    },

    /* =====================================================
       CRAFTSMANSHIP IMAGE SECTION
    ===================================================== */

    craftSection: {
      width: "100%",

      padding: isMobile
        ? "0 20px 80px"
        : isTablet
          ? "0 35px 100px"
          : "0 60px 125px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    craftContainer: {
      maxWidth: "1380px",
      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "0.9fr 1.1fr",

      background: "#f8f5ee",
    },

    craftContent: {
      padding: isMobile
        ? "50px 28px"
        : isTablet
          ? "65px 50px"
          : "85px 75px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      boxSizing: "border-box",
    },

    craftTitle: {
      margin: "18px 0 0",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "36px"
        : isTablet
          ? "45px"
          : "55px",

      lineHeight: 1.18,

      fontWeight: 400,

      color: "#27255a",
    },

    craftItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    craftText: {
      margin: "25px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#707070",
    },

    craftTextSecond: {
      margin: "17px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",

      lineHeight: 1.85,

      fontWeight: 300,

      color: "#858585",
    },

    craftImageWrap: {
      width: "100%",

      minHeight: isMobile ? "390px" : "560px",

      overflow: "hidden",

      background: "#eae6dd",
    },

    craftImage: {
      width: "100%",
      height: "100%",

      display: "block",

      objectFit: "cover",
      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    /* =====================================================
       OCCASIONS
    ===================================================== */

    occasionSection: {
      width: "100%",

      padding: isMobile
        ? "75px 20px"
        : isTablet
          ? "90px 35px"
          : "115px 60px",

      background: "#f8f6f1",

      boxSizing: "border-box",
    },

    occasionInner: {
      maxWidth: "1320px",
      margin: "0 auto",
    },

    occasionHeading: {
      textAlign: "center",

      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "34px"
        : isTablet
          ? "44px"
          : "55px",

      lineHeight: 1.2,

      fontWeight: 400,

      color: "#27255a",
    },

    occasionItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    occasionText: {
      maxWidth: "760px",

      margin: "22px auto 0",

      textAlign: "center",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",

      lineHeight: 1.85,

      fontWeight: 300,

      color: "#747474",
    },

    occasionGrid: {
      marginTop: isMobile ? "45px" : "65px",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "repeat(2, 1fr)"
          : "repeat(3, 1fr)",

      gap: isMobile ? "18px" : "24px",
    },

    occasionCard: {
      position: "relative",

      minHeight: isMobile ? "330px" : "390px",

      overflow: "hidden",

      background: "#ddd",
    },

    occasionImage: {
      width: "100%",
      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    occasionOverlay: {
      position: "absolute",
      inset: 0,

      display: "flex",

      flexDirection: "column",

      justifyContent: "flex-end",

      padding: isMobile
        ? "25px"
        : "32px",

      boxSizing: "border-box",

      background:
        "linear-gradient(transparent 35%, rgba(25,22,18,0.78) 100%)",
    },

    occasionTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile ? "27px" : "31px",

      fontWeight: 400,

      color: "#ffffff",
    },

    occasionSmall: {
      margin: "8px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "12px" : "13px",

      lineHeight: 1.6,

      fontWeight: 300,

      color: "rgba(255,255,255,0.78)",
    },

    /* =====================================================
       CARE SECTION
    ===================================================== */

    careSection: {
      width: "100%",

      padding: isMobile
        ? "75px 20px"
        : isTablet
          ? "90px 35px"
          : "120px 60px",

      background: "#ffffff",

      boxSizing: "border-box",
    },

    careContainer: {
      maxWidth: "1320px",
      margin: "0 auto",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "1fr 1fr",

      gap: isMobile ? "40px" : "80px",

      alignItems: "center",
    },

    careImageWrap: {
      width: "100%",

      height: isMobile
        ? "390px"
        : isTablet
          ? "500px"
          : "570px",

      overflow: "hidden",

      background: "#f0ede6",
    },

    careImage: {
      width: "100%",
      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      transition: "transform 0.6s ease",
    },

    careContent: {
      boxSizing: "border-box",
    },

    careTitle: {
      margin: "18px 0 0",

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "37px"
        : isTablet
          ? "46px"
          : "56px",

      lineHeight: 1.18,

      fontWeight: 400,

      color: "#27255a",
    },

    careItalic: {
      fontStyle: "italic",
      color: "#a18143",
    },

    careText: {
      margin: "24px 0 0",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "16px" : "20px",

      lineHeight: 1.9,

      fontWeight: 300,

      color: "#707070",
    },

    careList: {
      margin: "27px 0 0",
      padding: 0,

      listStyle: "none",

      display: "flex",
      flexDirection: "column",

      gap: "14px",
    },

    careListItem: {
      position: "relative",

      paddingLeft: "22px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "15px" : "20px",

      lineHeight: 1.65,

      color: "#656565",

      fontWeight: 300,
    },

    careBullet: {
      position: "absolute",

      left: 0,
      top: "8px",

      width: "6px",
      height: "6px",

      borderRadius: "50%",

      background: "#b69659",
    },

    /* =====================================================
       FINAL STATEMENT
    ===================================================== */

    finalSection: {
      width: "100%",

      padding: isMobile
        ? "75px 25px 85px"
        : isTablet
          ? "90px 35px 105px"
          : "110px 40px 125px",

      background: "#29255d",

      textAlign: "center",

      boxSizing: "border-box",
    },

    finalInner: {
      maxWidth: "950px",
      margin: "0 auto",
    },

    finalMark: {
      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile ? "50px" : "65px",

      lineHeight: 0.7,

      color: "#b69659",

      marginBottom: "22px",
    },

    finalTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "29px"
        : isTablet
          ? "37px"
          : "48px",

      lineHeight: 1.4,

      fontWeight: 400,

      fontStyle: "italic",

      color: "#ffffff",
    },

    finalLine: {
      width: "55px",

      height: "1px",

      margin: "25px auto",

      background: "#b69659",
    },

    finalText: {
      margin: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile ? "12px" : "14px",

      letterSpacing: "2.5px",

      textTransform: "uppercase",

      color: "rgba(255,255,255,0.62)",
    },
  };

  /* =======================================================
     DATA
  ======================================================= */

  const characteristics = [
    {
      number: "01",
      title: "Rich Gold Tone",
      text:
        "22KT gold is known for its rich, warm colour, giving traditional jewellery its distinctive depth and presence.",
    },
    {
      number: "02",
      title: "Traditional Choice",
      text:
        "It remains a preferred gold purity for many Indian jewellery traditions, especially for ceremonial and occasion-led pieces.",
    },
    {
      number: "03",
      title: "Made for Craft",
      text:
        "Its relatively high gold content makes it especially suited to jewellery where traditional forms and detailed craftsmanship take centre stage.",
    },
    {
      number: "04",
      title: "Meaningful Purchase",
      text:
        "For many families, 22KT jewellery represents more than adornment, becoming part of celebrations, milestones and family traditions.",
    },
    {
      number: "05",
      title: "Classic Appeal",
      text:
        "The enduring appeal of 22KT gold comes from its connection with classic Indian jewellery and designs that remain relevant across generations.",
    },
    {
      number: "06",
      title: "A Timeless Standard",
      text:
        "22KT continues to occupy an important place in the Indian gold jewellery landscape, balancing purity, tradition and design.",
    },
  ];

  const jewelleryForms = [
    {
      title: "Necklaces",
      text:
        "Statement necklaces and traditional neckwear where the natural richness of gold becomes part of the design.",
      image: twentyTwoCraft,
    },
    {
      title: "Bangles",
      text:
        "Classic and contemporary bangles designed to bring the warmth of 22KT gold into everyday and ceremonial dressing.",
      image: bangles,
    },
    {
      title: "Earrings",
      text:
        "From understated forms to elaborate designs, 22KT gold lends a distinctive richness to earrings.",
      image: earrings,
    },
    {
      title: "Bridal Jewellery",
      text:
        "A timeless choice for bridal collections, celebrations and jewellery designed around important family occasions.",
      image: chokers,
    },
  ];

  const occasions = [
    {
      title: "Bridal Celebrations",
      text:
        "Traditional gold jewellery remains closely connected with weddings and important family ceremonies.",
      image: twentyTwoBridal,
    },
    {
      title: "Festive Moments",
      text:
        "22KT pieces bring warmth and presence to festive dressing and meaningful celebrations.",
      image: twentyTwoDaily,
    },
    {
      title: "Family Milestones",
      text:
        "Jewellery often becomes a way of marking birthdays, anniversaries and moments shared across generations.",
      image: twentyTwoGold,
    },
  ];

  const carePoints = [
    "Store each piece separately to help reduce scratches and friction.",
    "Keep jewellery away from perfumes, cosmetics and household chemicals.",
    "Remove jewellery before activities involving water, cleaning or physical work.",
    "For detailed pieces, professional cleaning and inspection can help maintain their finish.",
  ];

  /* =======================================================
     IMAGE HOVER
  ======================================================= */

  const handleImageEnter = (event) => {
    if (!isMobile) {
      const image = event.currentTarget.querySelector("img");

      if (image) {
        image.style.transform = "scale(1.035)";
      }
    }
  };

  const handleImageLeave = (event) => {
    if (!isMobile) {
      const image = event.currentTarget.querySelector("img");

      if (image) {
        image.style.transform = "scale(1)";
      }
    }
  };

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
        aria-label="22KT Gold Jewellery"
      >

        <div style={styles.heroOverlay} />

        <div style={styles.heroInner}>

          <div style={styles.heroContent}>

            <p style={styles.heroLabel}>
              SHILPI JEWELS • 22KT GOLD
            </p>

            <div style={styles.heroLine} />

            <h1 style={styles.heroHeading}>
              The Warmth of
              <br />

              <span style={styles.heroItalic}>
                Pure Tradition.
              </span>
            </h1>

            <p style={styles.heroText}>
              22KT gold carries a distinctive place in
              Indian jewellery. Rich in colour, rooted in
              tradition and shaped through craftsmanship,
              it continues to define jewellery made for
              moments that matter.
            </p>

            <div style={styles.heroBadge}>
              22 Carat Gold
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section style={styles.introSection}>

        <div style={styles.introInner}>

          <div>
            <p style={styles.introLabel}>
              THE 22KT STANDARD
            </p>

            <h2 style={styles.introHeading}>
              Gold With{" "}
              <span style={styles.introItalic}>
                Character
              </span>
            </h2>
          </div>

          <div>

            <p style={styles.introText}>
              22KT gold refers to gold with a purity of
              approximately 91.6%, with the remaining
              portion made up of other metals used to give
              the jewellery the required strength and
              workability.
            </p>

            <p style={styles.introTextSecond}>
              Its rich golden appearance and strong
              connection with Indian jewellery traditions
              have made 22KT a familiar and enduring
              choice for necklaces, bangles, earrings,
              bridal jewellery and other classic creations.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          PURITY FEATURE
      ================================================= */}

      <section style={styles.puritySection}>

        <div style={styles.purityContainer}>

          <div
            style={styles.purityImageWrap}
            onMouseEnter={handleImageEnter}
            onMouseLeave={handleImageLeave}
          >

            <img
              src={twentyTwoGold}
              alt="22KT gold jewellery"
              style={styles.purityImage}
            />

          </div>

          <div style={styles.purityContent}>

            <p style={styles.smallLabel}>
              UNDERSTANDING 22KT
            </p>

            <h2 style={styles.purityTitle}>
              A Purity That
              <br />
              <span style={styles.purityItalic}>
                Feels Timeless
              </span>
            </h2>

            <div style={styles.purityLine} />

            <p style={styles.purityText}>
              The term 22KT means that 22 out of 24
              parts are gold. This gives the metal its
              characteristic richness while allowing
              jewellery makers to work with an alloy that
              is more practical for detailed jewellery than
              very high-purity gold.
            </p>

            <p style={styles.purityNote}>
              “A traditional gold standard, shaped into
              jewellery for modern lives.”
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          CHARACTERISTICS
      ================================================= */}

      <section style={styles.characterSection}>

        <div style={styles.characterInner}>

          <div style={styles.characterHeader}>

            <p style={styles.darkLabel}>
              WHY 22KT
            </p>

            <h2 style={styles.characterHeading}>
              The Character of{" "}
              <span style={styles.characterItalic}>
                22KT Gold
              </span>
            </h2>

            <p style={styles.characterText}>
              A closer look at the qualities that have
              kept 22KT gold at the heart of Indian
              jewellery for generations.
            </p>

          </div>

          <div style={styles.characterGrid}>

            {characteristics.map((item) => (

              <article
                key={item.number}
                style={styles.characterCard}

                onMouseEnter={(event) => {
                  if (!isMobile) {
                    event.currentTarget.style.transform =
                      "translateY(-7px)";

                    event.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.025))";
                  }
                }}

                onMouseLeave={(event) => {
                  if (!isMobile) {
                    event.currentTarget.style.transform =
                      "translateY(0)";

                    event.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))";
                  }
                }}
              >

                <div style={styles.characterNumber}>
                  {item.number}
                </div>

                <h3 style={styles.characterTitle}>
                  {item.title}
                </h3>

                <div style={styles.characterLine} />

                <p style={styles.characterCardText}>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          JEWELLERY FORMS
      ================================================= */}

      <section style={styles.formsSection}>

        <div style={styles.formsInner}>

          <h2 style={styles.formsHeading}>
            Designed Around{" "}
            <span style={styles.formsItalic}>
              Tradition
            </span>
          </h2>

          <p style={styles.formsIntro}>
            22KT gold lends itself beautifully to jewellery
            that celebrates form, craftsmanship and the
            richness of Indian design.
          </p>

          <div style={styles.formsGrid}>

            {jewelleryForms.map((item) => (

              <article
                key={item.title}
                style={styles.formCard}

                onMouseEnter={(event) => {
                  if (!isMobile) {
                    event.currentTarget.style.transform =
                      "translateY(-7px)";

                    event.currentTarget.style.boxShadow =
                      "0 18px 40px rgba(39,37,90,0.10)";

                    const image =
                      event.currentTarget.querySelector("img");

                    if (image) {
                      image.style.transform = "scale(1.04)";
                    }
                  }
                }}

                onMouseLeave={(event) => {
                  if (!isMobile) {
                    event.currentTarget.style.transform =
                      "translateY(0)";

                    event.currentTarget.style.boxShadow =
                      "none";

                    const image =
                      event.currentTarget.querySelector("img");

                    if (image) {
                      image.style.transform = "scale(1)";
                    }
                  }
                }}
              >

                <div style={styles.formImageWrap}>

                  <img
                    src={item.image}
                    alt={`22KT ${item.title}`}
                    style={styles.formImage}
                  />

                </div>

                <div style={styles.formContent}>

                  <h3 style={styles.formTitle}>
                    {item.title}
                  </h3>

                  <p style={styles.formText}>
                    {item.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CARE
      ================================================= */}

      <section style={styles.careSection}>

        <div style={styles.careContainer}>

          <div
            style={styles.careImageWrap}
            onMouseEnter={handleImageEnter}
            onMouseLeave={handleImageLeave}
          >

            <img
              src={twentyTwoCare}
              alt="Caring for 22KT gold jewellery"
              style={styles.careImage}
            />

          </div>

          <div style={styles.careContent}>

            <p style={styles.smallLabel}>
              CARING FOR YOUR JEWELLERY
            </p>

            <h2 style={styles.careTitle}>
              Keep Its{" "}
              <span style={styles.careItalic}>
                Warmth
              </span>
              <br />
              Beautiful
            </h2>

            <p style={styles.careText}>
              Gold jewellery benefits from thoughtful
              everyday care. Simple habits can help
              preserve its finish and keep each piece
              looking beautiful over time.
            </p>

            <ul style={styles.careList}>

              {carePoints.map((point) => (

                <li
                  key={point}
                  style={styles.careListItem}
                >

                  <span style={styles.careBullet} />

                  {point}

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}

export default TwentyTwoKTPage;