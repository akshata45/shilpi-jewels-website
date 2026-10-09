import { useEffect, useState } from "react";

import necklaceImage from "../assets/images/necklaces.jpg";
import longNecklaceImage from "../assets/images/long-necklaces.jpg";
import chokersImage from "../assets/images/chokers.jpg";
import banglesImage from "../assets/images/bangles.jpeg";
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
    if (typeof window === "undefined") return;

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

  /* =========================
     LIGHTBOX STATE
  ========================= */

  const [selectedImage, setSelectedImage] = useState(null);

  /* =========================
     CLOSE WITH ESCAPE
  ========================= */

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  /* =========================
     PREVENT PAGE SCROLL
  ========================= */

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  /* =========================
     STYLES
  ========================= */

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
        ? "25px"
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

    /* =========================
       LIGHTBOX
    ========================= */

    lightbox: {
      position: "fixed",

      inset: 0,

      zIndex: 9999,

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      padding: isMobile
        ? "25px"
        : "50px",

      boxSizing: "border-box",

      backgroundColor: "rgba(0, 0, 0, 0.82)",

      cursor: "zoom-out",

      animation:
        "shilpiLightboxFadeIn 0.3s ease forwards",
    },

    /* =========================
       LIGHTBOX IMAGE
    ========================= */

    lightboxImage: {
      maxWidth: isMobile
        ? "94vw"
        : "90vw",

      maxHeight: isMobile
        ? "82vh"
        : "88vh",

      width: "auto",

      height: "auto",

      objectFit: "contain",

      display: "block",

      cursor: "zoom-out",

      borderRadius: "2px",

      boxShadow:
        "0 25px 80px rgba(0,0,0,0.35)",

      animation:
        "shilpiLightboxImageIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes shilpiLightboxFadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes shilpiLightboxImageIn {
            from {
              opacity: 0;
              transform: scale(0.94);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

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
                onImageClick={() =>
                  setSelectedImage(item)
                }
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          IMAGE LIGHTBOX
      ========================= */}

      {selectedImage && (
        <div
          style={styles.lightbox}
          onClick={() => setSelectedImage(null)}
          role="button"
          tabIndex={0}
          aria-label="Close enlarged image"
        >
          <img
            src={selectedImage.image}
            alt={selectedImage.alt}
            style={styles.lightboxImage}
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
            }}
          />
        </div>
      )}
    </>
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
  onImageClick,
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
        onMouseEnter={() => {
          if (!isMobile) {
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsHovered(false);
          }
        }}
        onClick={onImageClick}
        role="button"
        tabIndex={0}
        aria-label={`View ${item.title} image`}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            onImageClick();
          }
        }}
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