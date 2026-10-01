import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButtons from "../components/ScrollButtons";

import collectionBanner from "../assets/images/collection-banner.jpg";

import collectionImage1 from "../assets/images/collection-1.jpg";
import collectionImage2 from "../assets/images/collection-2.jpg";
import collectionImage3 from "../assets/images/collection-3.jpg";
import collectionImage4 from "../assets/images/collection-4.jpg";
import collectionImage5 from "../assets/images/collection-5.jpg";
import collectionImage6 from "../assets/images/collection-6.jpg";
import collectionImage7 from "../assets/images/collection-7.jpg";
import collectionImage8 from "../assets/images/collection-8.jpg";
import collectionImage9 from "../assets/images/collection-9.jpg";

/* =========================
   SIGNATURE ICONS
========================= */

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

/* =========================
   COLLECTION PAGE
========================= */

function CollectionPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  /* =========================
     IMAGE ZOOM STATE
  ========================= */

  const [selectedImage, setSelectedImage] = useState(null);

  /* =========================
     COLLECTION DATA
  ========================= */

  const collectionImages = [
    {
      image: collectionImage1,
      alt: "Shilpi jewellery collection",
    },
    {
      image: collectionImage2,
      alt: "Shilpi gold earrings collection",
    },
    {
      image: collectionImage3,
      alt: "Shilpi gold bangles collection",
    },
    {
      image: collectionImage4,
      alt: "Shilpi gold bangles jewellery",
    },
    {
      image: collectionImage5,
      alt: "Shilpi traditional jewellery collection",
    },
    {
      image: collectionImage6,
      alt: "Shilpi bridal jewellery collection",
    },
    {
      image: collectionImage7,
      alt: "Shilpi traditional gold necklace",
    },
    {
      image: collectionImage8,
      alt: "Shilpi mangalsutra collection",
    },
    {
      image: collectionImage9,
      alt: "Shilpi gold necklace and earrings",
    },
  ];

  /* =========================
     CLOSE IMAGE MODAL
     ESCAPE KEY
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);

      /* Prevent background scrolling */
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  /* =========================
     STYLES
  ========================= */

  const styles = {
    /* =========================
       MAIN PAGE
    ========================= */

    page: {
      width: "100%",
      overflow: "hidden",
      background: "#ffffff",
    },

    /* =========================
       HERO
    ========================= */

    hero: {
      width: "100%",

      marginTop: isMobile
        ? "0px"
        : "25px",

      overflow: "hidden",

      background: "#ffffff",
    },

    heroImage: {
      width: "100%",

      height: isMobile
        ? "260px"
        : isTablet
          ? "380px"
          : "500px",

      display: "block",

      objectFit: "cover",

      objectPosition: "center center",
    },

    /* =========================
       INTRO SECTION
    ========================= */

    intro: {
      width: isMobile
        ? "calc(100% - 40px)"
        : isTablet
          ? "calc(100% - 100px)"
          : "900px",

      maxWidth: "100%",

      margin: "0 auto",

      paddingTop: isMobile
        ? "45px"
        : "55px",

      paddingBottom: isMobile
        ? "35px"
        : "50px",

      textAlign: "center",

      boxSizing: "border-box",
    },

    /* =========================
       INTRO HEADING
    ========================= */

    heading: {
      margin: 0,

      fontFamily:
        '"Playfair Display", serif',

      fontSize: isMobile
        ? "30px"
        : isTablet
          ? "38px"
          : "44px",

      fontWeight: 400,

      lineHeight: 1.2,

      color: "#272361",

      letterSpacing: "-0.5px",
    },

    /* =========================
       INTRO TEXT
    ========================= */

    description: {
      margin: isMobile
        ? "18px auto 0"
        : "20px auto 0",

      maxWidth: "850px",

      fontFamily:
        '"Jost", sans-serif',

      fontSize: isMobile
        ? "14px"
        : isTablet
          ? "16px"
          : "18px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.7
        : 1.55,

      color: "#777777",
    },

    /* =========================
       IMAGE GRID SECTION
    ========================= */

    gallery: {
      width: isMobile
        ? "calc(100% - 40px)"
        : isTablet
          ? "calc(100% - 100px)"
          : "1110px",

      maxWidth: "100%",

      margin: "0 auto",

      paddingBottom: isMobile
        ? "55px"
        : "80px",

      display: "grid",

      gridTemplateColumns:
        isMobile
          ? "1fr"
          : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(3, 1fr)",

      gap: isMobile
        ? "22px"
        : "32px",

      boxSizing: "border-box",
    },

    /* =========================
       GALLERY IMAGE WRAPPER
    ========================= */

    galleryImageWrapper: {
      width: "100%",

      aspectRatio: "1 / 1",

      overflow: "hidden",

      background: "#f4f2f7",

      cursor: "zoom-in",

      position: "relative",
    },

    /* =========================
       GALLERY IMAGE
    ========================= */

    galleryImage: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "cover",

      objectPosition: "center",

      transition:
        "transform 0.6s ease",
    },

    /* =========================
       SIGNATURE SECTION
    ========================= */

    signature: {
      width: "100%",

      background: "#272361",

      padding: isMobile
        ? "45px 25px"
        : "50px 60px",

      boxSizing: "border-box",
    },

    signatureInner: {
      width: "100%",

      maxWidth: "1300px",

      margin: "0 auto",

      display: "grid",

      gridTemplateColumns:
        isMobile
          ? "1fr"
          : "repeat(5, 1fr)",

      gap: isMobile
        ? "35px"
        : "25px",

      alignItems: "center",
    },

    /* =========================
       SIGNATURE INTRO
    ========================= */

    signatureIntro: {
      textAlign: isMobile
        ? "center"
        : "left",
    },

    signatureTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", serif',

      fontSize: isMobile
        ? "32px"
        : "38px",

      fontWeight: 400,

      lineHeight: 1.05,

      color: "#ffffff",
    },

    signatureSubtitle: {
      margin: "15px 0 0",

      fontFamily:
        '"Jost", sans-serif',

      fontSize: isMobile
        ? "14px"
        : "16px",

      fontWeight: 400,

      color: "#ffffff",
    },

    /* =========================
       SIGNATURE ITEMS
    ========================= */

    signatureItem: {
      textAlign: "center",

      color: "#ffffff",
    },

    /* =========================
       SIGNATURE IMAGE ICON
    ========================= */

    signatureIconImage: {
      width: isMobile
        ? "70px"
        : "78px",

      height: isMobile
        ? "70px"
        : "78px",

      display: "block",

      objectFit: "contain",

      margin: "0 auto 15px",
    },

    /* =========================
       SIGNATURE NUMBER
    ========================= */

    signatureNumber: {
      margin: 0,

      fontFamily:
        '"Jost", sans-serif',

      fontSize: isMobile
        ? "28px"
        : "32px",

      fontWeight: 400,

      lineHeight: 1,

      color: "#ffffff",
    },

/* =========================
   SIGNATURE ITEM TITLE
========================= */

signatureItemTitle: {
  margin: "7px 0 0",
  fontFamily: '"Jost", sans-serif',
  fontSize: isMobile
    ? "17px"
    : "20px",
  fontWeight: 500,
  color: "#ffffff",
},

/* =========================
   SIGNATURE ITEM TEXT
========================= */

signatureItemText: {
  margin: "7px auto 0",
  maxWidth: "190px",
  fontFamily: '"Jost", sans-serif',
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.45,
  color: "rgba(255,255,255,0.85)",
},

    /* ==================================================
       IMAGE ZOOM MODAL
    ================================================== */

    modalOverlay: {
      position: "fixed",

      inset: 0,

      zIndex: 9999,

      background:
        "rgba(0, 0, 0, 0.82)",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      padding: isMobile
        ? "20px"
        : "50px",

      boxSizing: "border-box",

      cursor: "zoom-out",
    },

    /* =========================
       MODAL IMAGE CONTAINER
    ========================= */

    modalImageContainer: {
      position: "relative",

      maxWidth: isMobile
        ? "100%"
        : "92vw",

      maxHeight: isMobile
        ? "85vh"
        : "90vh",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      cursor: "default",
    },

    /* =========================
       MODAL IMAGE
    ========================= */

    modalImage: {
      display: "block",

      maxWidth: "100%",

      maxHeight: isMobile
        ? "82vh"
        : "88vh",

      width: "auto",

      height: "auto",

      objectFit: "contain",

      boxShadow:
        "0 20px 60px rgba(0,0,0,0.35)",

      animation:
        "shilpiImageZoom 0.35s ease-out",
    },

    /* =========================
       CLOSE BUTTON
    ========================= */

    closeButton: {
      position: "fixed",

      top: isMobile
        ? "15px"
        : "25px",

      right: isMobile
        ? "15px"
        : "30px",

      width: isMobile
        ? "42px"
        : "48px",

      height: isMobile
        ? "42px"
        : "48px",

      border: "1px solid rgba(255,255,255,0.7)",

      borderRadius: "50%",

      background:
        "rgba(39,35,97,0.9)",

      color: "#ffffff",

      fontFamily:
        '"Jost", sans-serif',

      fontSize: isMobile
        ? "25px"
        : "28px",

      fontWeight: 300,

      lineHeight: 1,

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      cursor: "pointer",

      zIndex: 10000,

      padding: 0,
    },
  };

  /* =========================
     RETURN
  ========================= */

  return (
    <div style={styles.page}>

      {/* ==================================================
          HEADER
      ================================================== */}

      <Header />

      {/* ==================================================
          COLLECTION PAGE
      ================================================== */}

      <main>

        {/* ==================================================
            COLLECTION HERO
        ================================================== */}

        <section style={styles.hero}>

          <img
            src={collectionBanner}
            alt="Shilpi Jewels Collection"
            style={styles.heroImage}
          />

        </section>

        {/* ==================================================
            INTRODUCTION
        ================================================== */}

        <section style={styles.intro}>

          <h1 style={styles.heading}>
            SHILPI - EXCLUSIVE JEWELLERY
          </h1>

          <p style={styles.description}>
            Weddings are a deep-rooted element of
            our society, and Indian brides are known
            as symbols of beauty, pride and elegance.
            India is a vast country with different
            customs and traditions practiced even
            within the same state. Yet, there is
            something that unites us all - the "Shilpi"
            or the auspicious time for celebration.
            At Shilpi Jewels, we embrace the
            importance of every "Shilpi".
            Our wedding collections are for every
            bride, from every part of India.
          </p>

        </section>

        {/* ==================================================
            COLLECTION GALLERY
        ================================================== */}

        <section
          style={styles.gallery}
          aria-label="Shilpi jewellery collections"
        >

          {collectionImages.map(
            (item, index) => (

              <div
                key={index}
                style={styles.galleryImageWrapper}
                onClick={() => {
                  setSelectedImage(item);
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.alt}`}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();

                    setSelectedImage(item);
                  }
                }}
                onMouseEnter={(event) => {
                  event.currentTarget
                    .querySelector("img")
                    .style.transform =
                    "scale(1.04)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget
                    .querySelector("img")
                    .style.transform =
                    "scale(1)";
                }}
              >

                <img
                  src={item.image}
                  alt={item.alt}
                  style={styles.galleryImage}
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                />

              </div>

            )
          )}

        </section>

        {/* ==================================================
            SHILPI SIGNATURE
        ================================================== */}

        <section style={styles.signature}>

          <div style={styles.signatureInner}>

            {/* ==================================================
                INTRO
            ================================================== */}

            <div style={styles.signatureIntro}>

              <h2 style={styles.signatureTitle}>
                The
                <br />
                Shilpi
                <br />
                Signature
              </h2>

              <p style={styles.signatureSubtitle}>
                A Legacy You Can Trust
              </p>

            </div>

            {/* ==================================================
                43 YEARS
            ================================================== */}

            <div style={styles.signatureItem}>

              <img
                src={trustIcon}
                alt="43 Years of Trust"
                style={styles.signatureIconImage}
              />

              <p style={styles.signatureNumber}>
                43
              </p>

              <p style={styles.signatureItemTitle}>
                Years of Trust
              </p>

              <p style={styles.signatureItemText}>
                A journey built on craftsmanship,
                relationships and an unwavering
                commitment to quality.
              </p>

            </div>

            {/* ==================================================
                1000+
            ================================================== */}

            <div style={styles.signatureItem}>

              <img
                src={citiesIcon}
                alt="1000+ Cities Worldwide"
                style={styles.signatureIconImage}
              />

              <p style={styles.signatureNumber}>
                1000+
              </p>

              <p style={styles.signatureItemTitle}>
                Cities Worldwide
              </p>

              <p style={styles.signatureItemText}>
                A trusted jewellery partner
                with a growing presence
                across cities and markets.
              </p>

            </div>

            {/* ==================================================
                ARTISANS
            ================================================== */}

            <div style={styles.signatureItem}>

              <img
                src={artisansIcon}
                alt="Artisans Behind Every Creation"
                style={styles.signatureIconImage}
              />

              <p style={styles.signatureNumber}>
                Artisans
              </p>

              <p style={styles.signatureItemTitle}>
                Behind Every Creation
              </p>

              <p style={styles.signatureItemText}>
                Years of knowledge, skill
                and craftsmanship brought
                together in every piece.
              </p>

            </div>

            {/* ==================================================
                TIMELESS
            ================================================== */}

            <div style={styles.signatureItem}>

              <img
                src={timelessIcon}
                alt="Timeless Jewellery"
                style={styles.signatureIconImage}
              />

              <p style={styles.signatureNumber}>
                Timeless
              </p>

              <p style={styles.signatureItemTitle}>
                Made for Generations
              </p>

              <p style={styles.signatureItemText}>
                Jewellery created to
                transcend seasons, trends
                and generations.
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />

      {/* ==================================================
          SCROLL BUTTONS
      ================================================== */}

      <ScrollButtons />

      {/* ==================================================
          IMAGE ZOOM MODAL
      ================================================== */}

      {selectedImage && (

        <div
          style={styles.modalOverlay}
          onClick={() => {
            setSelectedImage(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded jewellery image"
        >

          {/* =========================
              CLOSE BUTTON
          ========================= */}

          <button
            type="button"
            style={styles.closeButton}
            onClick={() => {
              setSelectedImage(null);
            }}
            aria-label="Close image"
          >
            ×
          </button>

          {/* =========================
              IMAGE CONTAINER
          ========================= */}

          <div
            style={styles.modalImageContainer}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              style={styles.modalImage}
            />

          </div>

        </div>

      )}

      {/* ==================================================
          ZOOM ANIMATION
      ================================================== */}

      <style>
        {`
          @keyframes shilpiImageZoom {
            from {
              opacity: 0;
              transform: scale(0.92);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

    </div>
  );
}

export default CollectionPage;