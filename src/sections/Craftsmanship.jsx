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
   IMAGE LIGHTBOX
========================= */

function ImageLightbox({ image, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  /* =========================
     OPEN ANIMATION
  ========================= */

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  /* =========================
     ESC KEY
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  /* =========================
     PREVENT BACKGROUND SCROLL
  ========================= */

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  /* =========================
     CLOSE ANIMATION
  ========================= */

  const handleClose = () => {
    setIsVisible(false);

    setTimeout(() => {
      onClose();
    }, 350);
  };

  /* =========================
     OVERLAY STYLE
  ========================= */

  const overlayStyle = {
    position: "fixed",

    inset: 0,

    zIndex: 9999,

    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    padding: "30px",

    boxSizing: "border-box",

    backgroundColor: isVisible
      ? "rgba(20, 18, 30, 0.88)"
      : "rgba(20, 18, 30, 0)",

    backdropFilter: isVisible
      ? "blur(8px)"
      : "blur(0px)",

    WebkitBackdropFilter: isVisible
      ? "blur(8px)"
      : "blur(0px)",

    transition:
      "background-color 0.35s ease, backdrop-filter 0.35s ease, -webkit-backdrop-filter 0.35s ease",
  };

  /* =========================
     IMAGE WRAPPER
  ========================= */

  const imageWrapperStyle = {
    position: "relative",

    maxWidth: "95vw",

    maxHeight: "90vh",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    transform: isVisible
      ? "scale(1)"
      : "scale(0.88)",

    opacity: isVisible ? 1 : 0,

    transition:
      "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease",

    willChange: "transform, opacity",
  };

  /* =========================
     FULLSCREEN IMAGE
  ========================= */

  const imageStyle = {
    display: "block",

    maxWidth: "95vw",

    maxHeight: "90vh",

    width: "auto",

    height: "auto",

    objectFit: "contain",

    userSelect: "none",

    WebkitUserDrag: "none",

    boxShadow:
      "0 25px 80px rgba(0, 0, 0, 0.35)",
  };

  /* =========================
     CLOSE BUTTON
  ========================= */

  const closeButtonStyle = {
    position: "fixed",

    top: "22px",

    right: "25px",

    width: "46px",

    height: "46px",

    border: "none",

    borderRadius: "50%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: "rgba(255, 255, 255, 0.95)",

    color: "#272361",

    fontSize: "30px",

    fontWeight: 300,

    lineHeight: 1,

    cursor: "pointer",

    zIndex: 10001,

    boxShadow:
      "0 8px 25px rgba(0, 0, 0, 0.15)",

    transition:
      "transform 0.25s ease, background-color 0.25s ease",

    padding: 0,
  };

  return (
    <div
      style={overlayStyle}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Craftsmanship image preview"
    >

      {/* =========================
          CLOSE BUTTON
      ========================= */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleClose();
        }}
        aria-label="Close image"
        style={closeButtonStyle}
        onMouseEnter={(event) => {
          event.currentTarget.style.transform =
            "rotate(90deg) scale(1.05)";

          event.currentTarget.style.backgroundColor =
            "#ffffff";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.transform =
            "rotate(0deg) scale(1)";

          event.currentTarget.style.backgroundColor =
            "rgba(255, 255, 255, 0.95)";
        }}
      >
        ×
      </button>

      {/* =========================
          IMAGE
      ========================= */}

      <div
        style={imageWrapperStyle}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image}
          alt="Shilpi jewellery craftsmanship and skilled artisans enlarged"
          draggable="false"
          style={imageStyle}
        />
      </div>

    </div>
  );
}

/* =========================
   CRAFTSMANSHIP COMPONENT
========================= */

function Craftsmanship() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  /* =========================
     HOVER STATE
  ========================= */

  const [isImageHovered, setIsImageHovered] =
    useState(false);

  /* =========================
     LIGHTBOX STATE
  ========================= */

  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

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

      cursor: "zoom-in",
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

      transform: isImageHovered
        ? "scale(1.08)"
        : "scale(1)",

      transition:
        "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",

      willChange: "transform",
    },
  };

  return (
    <>
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
              The art of
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

            onMouseEnter={() =>
              setIsImageHovered(true)
            }

            onMouseLeave={() =>
              setIsImageHovered(false)
            }

            onClick={() =>
              setIsLightboxOpen(true)
            }

            role="button"

            tabIndex={0}

            aria-label="Open craftsmanship image"

            onKeyDown={(event) => {
              if (
                event.key === "Enter" ||
                event.key === " "
              ) {
                event.preventDefault();

                setIsLightboxOpen(true);
              }
            }}
          >
            <img
              src={craftsmanshipImage}
              alt="Shilpi jewellery craftsmanship and skilled artisans"
              style={styles.image}
              draggable="false"
            />
          </div>

        </div>

      </section>

      {/* =========================
          IMAGE LIGHTBOX
      ========================= */}

      {isLightboxOpen && (
        <ImageLightbox
          image={craftsmanshipImage}
          onClose={() =>
            setIsLightboxOpen(false)
          }
        />
      )}
    </>
  );
}

export default Craftsmanship;