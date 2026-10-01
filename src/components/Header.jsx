import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/shilpi-logo.png";


/* =========================
   NAVIGATION ITEMS
========================= */

const navItems = [
  {
    label: "COLLECTION",
    href: "/collection",
  },

  {
    label: "MISSION",
    href: "/missionpage",
  },

  {
    label: "CRAFTSMANSHIP",
    href: "/craftsmanshippage",
  },

  {
    label: "18KT",
    href: "/18ktpage",
  },

  {
    label: "20KT",
    href: "/20ktpage",
  },

  {
    label: "22KT",
    href: "/22ktpage",
  },

  {
    label: "CONTACT",
    href: "/contactpage",
  },
];


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
   HEADER COMPONENT
========================= */

function Header() {
  const isMobile = useMediaQuery(
    "(max-width: 600px)"
  );

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);


  /* =========================
     CLOSE MENU ON ROUTE CHANGE
  ========================= */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);


  /* =========================
     CLOSE ON OUTSIDE CLICK
  ========================= */

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "touchstart",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "touchstart",
        handleOutsideClick
      );
    };
  }, [menuOpen]);


  /* =========================
     ESCAPE KEY
  ========================= */

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);


  /* =========================
     PREVENT PAGE SCROLL
  ========================= */

  useEffect(() => {
    if (menuOpen && (isMobile || isTablet)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile, isTablet]);


  /* =========================
     STYLES
  ========================= */

  const styles = {

    /* =========================
       HEADER
    ========================= */

    header: {
      width: "100%",

      marginTop: "30px",

      height: isMobile
        ? "80px"
        : "87px",

      background:
        "linear-gradient(90deg, #ffffff 0%, #ffffff 28%, #faf9ff 55%, #f3f1ff 100%)",

      position: "relative",

      zIndex: 1000,

      boxSizing: "border-box",
    },


    /* =========================
       INNER
    ========================= */

    inner: {
      width: isMobile
        ? "calc(100% - 40px)"
        : isTablet
          ? "calc(100% - 70px)"
          : "calc(100% - 188px)",

      maxWidth: "1510px",

      height: "100%",

      margin: "0 auto",

      padding: 0,

      display: "flex",

      alignItems: "center",

      background: "transparent",

      boxSizing: "border-box",
    },


    /* =========================
       LOGO LINK
    ========================= */

    logoLink: {
      width: isMobile
        ? "130px"
        : isTablet
          ? "170px"
          : "200px",

      flexShrink: 0,

      display: "flex",

      alignItems: "center",

      textDecoration: "none",

      cursor: "pointer",
    },


    /* =========================
       LOGO
    ========================= */

    logo: {
      width: "100%",

      height: "auto",

      display: "block",

      objectFit: "contain",
    },


    /* =========================
       RIGHT SIDE
    ========================= */

    rightSide: {
      marginLeft: "auto",

      display: "flex",

      alignItems: "center",

      flexShrink: 0,
    },


    /* =========================
       DESKTOP NAVIGATION
    ========================= */

    nav: {
      display:
        isMobile || isTablet
          ? "none"
          : "flex",

      alignItems: "center",

      gap: "38px",

      margin: 0,
    },


    /* =========================
       NAVIGATION LINK
    ========================= */

    navLink: {
      whiteSpace: "nowrap",

      fontFamily: '"Jost", sans-serif',

      fontSize: "18px",

      fontWeight: 400,

      lineHeight: 1,

      color: "#414141",

      textDecoration: "none",

      cursor: "pointer",

      transition:
        "color 0.25s ease, opacity 0.25s ease",
    },


    /* =========================
       MOBILE MENU BUTTON
    ========================= */

    menuButton: {
      width: isMobile
        ? "25px"
        : "28px",

      height: isMobile
        ? "25px"
        : "28px",

      padding: 0,

      display:
        isMobile || isTablet
          ? "flex"
          : "none",

      alignItems: "center",

      justifyContent: "center",

      color: "#555555",

      background: "transparent",

      border: "none",

      cursor: "pointer",

      position: "relative",

      zIndex: 1100,
    },


    /* =========================
       MENU SVG
    ========================= */

    menuSvg: {
      width: isMobile
        ? "22px"
        : "24px",

      height: isMobile
        ? "22px"
        : "24px",

      fill: "none",

      stroke: "currentColor",

      strokeWidth: 1.5,

      strokeLinecap: "round",

      strokeLinejoin: "round",
    },


    /* =========================
       MOBILE OVERLAY
    ========================= */

    mobileOverlay: {
      position: "fixed",

      inset: 0,

      background:
        "rgba(20, 18, 40, 0.38)",

      zIndex: 999,

      animation:
        "shilpiMenuOverlayIn 0.25s ease forwards",
    },


    /* =========================
       MOBILE MENU
    ========================= */

    mobileMenu: {
      position: "fixed",

      top: 0,

      right: 0,

      width: isMobile
        ? "82%"
        : "390px",

      maxWidth: "390px",

      height: "100vh",

      background: "#ffffff",

      zIndex: 1000,

      boxSizing: "border-box",

      padding:
        isMobile
          ? "95px 30px 35px"
          : "105px 40px 40px",

      boxShadow:
        "-12px 0 35px rgba(39,37,90,0.10)",

      overflowY: "auto",

      animation:
        "shilpiMenuSlideIn 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards",
    },


    /* =========================
       MOBILE MENU TITLE
    ========================= */

    mobileMenuTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", "Cormorant Garamond", Georgia, serif',

      fontSize: isMobile
        ? "28px"
        : "32px",

      lineHeight: 1.15,

      fontWeight: 400,

      color: "#292566",
    },


    /* =========================
       MOBILE GOLD LINE
    ========================= */

    mobileMenuLine: {
      width: "45px",

      height: "1px",

      background: "#b69659",

      margin:
        isMobile
          ? "17px 0 30px"
          : "18px 0 35px",
    },


    /* =========================
       MOBILE NAVIGATION
    ========================= */

    mobileNav: {
      display: "flex",

      flexDirection: "column",

      width: "100%",
    },


    /* =========================
       MOBILE NAV LINK
    ========================= */

    mobileNavLink: {
      width: "100%",

      padding:
        isMobile
          ? "17px 0"
          : "19px 0",

      display: "flex",

      alignItems: "center",

      justifyContent: "space-between",

      borderBottom:
        "1px solid rgba(39,37,90,0.10)",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "14px"
        : "15px",

      letterSpacing: "1.2px",

      fontWeight: 400,

      color: "#292566",

      textDecoration: "none",

      boxSizing: "border-box",

      transition:
        "color 0.2s ease, padding-left 0.2s ease",
    },


    /* =========================
       MOBILE ARROW
    ========================= */

    mobileArrow: {
      fontFamily: '"Jost", sans-serif',

      fontSize: "18px",

      color: "#a18143",

      lineHeight: 1,
    },


    /* =========================
       MOBILE CLOSE
    ========================= */

    mobileCloseButton: {
      position: "absolute",

      top: isMobile
        ? "28px"
        : "35px",

      right: isMobile
        ? "25px"
        : "30px",

      width: "30px",

      height: "30px",

      padding: 0,

      border: "none",

      background: "transparent",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      cursor: "pointer",

      color: "#555555",
    },


    /* =========================
       CLOSE SVG
    ========================= */

    closeSvg: {
      width: "21px",

      height: "21px",

      fill: "none",

      stroke: "currentColor",

      strokeWidth: 1.5,

      strokeLinecap: "round",

      strokeLinejoin: "round",
    },
  };


  /* =========================
     RETURN
  ========================= */

  return (
    <>
      <header style={styles.header}>

        <div style={styles.inner}>

          {/* =========================
              LOGO
          ========================= */}

          <Link
            to="/"
            style={styles.logoLink}
            aria-label="Shilpi Jewels Home"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Shilpi Jewels"
              style={styles.logo}
            />
          </Link>


          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div style={styles.rightSide}>

            {/* =========================
                DESKTOP NAVIGATION
            ========================= */}

            <nav style={styles.nav}>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  style={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}

            </nav>


            {/* =========================
                MOBILE / TABLET MENU
            ========================= */}

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              style={styles.menuButton}
              onClick={() =>
                setMenuOpen((previous) => !previous)
              }
            >

              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  style={styles.closeSvg}
                >
                  <path d="M5 5L19 19" />
                  <path d="M19 5L5 19" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  style={styles.menuSvg}
                >
                  <path d="M4 7H20" />
                  <path d="M4 12H20" />
                  <path d="M4 17H20" />
                </svg>
              )}

            </button>

          </div>

        </div>

      </header>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {menuOpen && (
        <>
          {/* =========================
              OUTSIDE OVERLAY
          ========================= */}

          <div
            style={styles.mobileOverlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />


          {/* =========================
              MENU PANEL
          ========================= */}

          <div
            ref={menuRef}
            style={styles.mobileMenu}
          >

            {/* =========================
                CLOSE BUTTON
            ========================= */}

            <button
              type="button"
              aria-label="Close navigation menu"
              style={styles.mobileCloseButton}
              onClick={() => setMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                style={styles.closeSvg}
              >
                <path d="M5 5L19 19" />
                <path d="M19 5L5 19" />
              </svg>
            </button>


            {/* =========================
                MENU TITLE
            ========================= */}

            <h2 style={styles.mobileMenuTitle}>
              Explore Shilpi
            </h2>

            <div style={styles.mobileMenuLine} />


            {/* =========================
                MOBILE NAVIGATION
            ========================= */}

            <nav style={styles.mobileNav}>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  style={styles.mobileNavLink}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >

                  <span>
                    {item.label}
                  </span>

                  <span style={styles.mobileArrow}>
                    →
                  </span>

                </Link>
              ))}

            </nav>

          </div>
        </>
      )}


      {/* =========================
          MENU ANIMATIONS
      ========================= */}

      <style>
        {`
          @keyframes shilpiMenuOverlayIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes shilpiMenuSlideIn {
            from {
              opacity: 0;
              transform: translateX(100%);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default Header;