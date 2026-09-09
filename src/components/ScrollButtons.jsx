import React, { useEffect, useState } from "react";

function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);

  /* =========================
     SHOW TOP BUTTON
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 180);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     SCROLL TO TOP
  ========================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
     SCROLL DIRECTLY TO BOTTOM
  ========================= */

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  /* =========================
     STYLES
  ========================= */

  const styles = {
    container: {
      position: "fixed",

      right: "24px",
      bottom: "30px",

      zIndex: 9999,

      width: "52px",
      height: "52px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      pointerEvents: "none",
    },

    button: {
      width: "52px",
      height: "52px",

      border: "1px solid #292566",

      borderRadius: "50%",

      backgroundColor: "#ffffff",

      color: "#292566",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      fontFamily: '"Jost", sans-serif',

      fontSize: "25px",

      fontWeight: 400,

      cursor: "pointer",

      boxShadow: "0 5px 18px rgba(41, 37, 102, 0.18)",

      transition:
        "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",

      pointerEvents: "auto",

      padding: 0,

      lineHeight: 1,

      WebkitTapHighlightColor: "transparent",
    },
  };

  return (
    <div style={styles.container}>
      <button
        type="button"
        onClick={showTop ? scrollToTop : scrollToBottom}
        aria-label={
          showTop
            ? "Scroll to top"
            : "Scroll to bottom"
        }
        style={styles.button}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#292566";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ffffff";
          e.currentTarget.style.color = "#292566";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {showTop ? "↑" : "↓"}
      </button>
    </div>
  );
}

export default ScrollButtons;