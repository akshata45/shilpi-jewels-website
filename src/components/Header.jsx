import { useEffect, useState } from "react";
import logo from "../assets/images/shilpi-logo.png";

const navItems = [
  { label: "COLLECTION", href: "#collections" },
  { label: "MISSION", href: "#legacy" },
  { label: "CRAFTSMANSHIP", href: "#craftsmanship" },
  { label: "18KT", href: "#18kt" },
  { label: "20KT", href: "#20kt" },
  { label: "22KT", href: "#22kt" },
  { label: "CONTACT", href: "#contact" },
];

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

function Header() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1200px)"
  );

  const styles = {
    /* =========================
       FULL WIDTH HEADER
    ========================= */

header: {
  width: "100%",

  // White space above the gradient header
  marginTop: "50px",

  height: isMobile ? "80px" : "87px",

  // White on the left → soft lavender on the right
  background:
    "linear-gradient(90deg, #ffffff 0%, #ffffff 28%, #faf9ff 55%, #f3f1ff 100%)",

  position: "relative",
  zIndex: 50,
},

    /* =========================
       HEADER INNER
    ========================= */

    inner: {
      width: "100%",
      maxWidth: "1510px",
      height: "100%",
      margin: "0 auto",

      padding: isMobile
        ? "0 20px"
        : isTablet
          ? "0 60px"
          : "0 123px",

      display: "flex",
      alignItems: "center",

      background: "transparent",
    },

    /* =========================
       LOGO
    ========================= */

logoLink: {
  width: isMobile ? "130px" : "200px",
  flexShrink: 0,

  display: "flex",
  alignItems: "center",

  textDecoration: "none",
},

    logo: {
      width: "100%",
      height: "auto",

      display: "block",
      objectFit: "contain",
    },

    /* =========================
       NAVIGATION
    ========================= */

    nav: {
      display: isMobile || isTablet ? "none" : "flex",
      alignItems: "center",

      gap: "38px",
      marginLeft: "auto",
    },

    navLink: {
      whiteSpace: "nowrap",

      fontFamily: "Jost, sans-serif",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1,

      color: "#414141",
      textDecoration: "none",

      cursor: "pointer",
    },

    /* =========================
       ICONS
    ========================= */

    icons: {
      display: "flex",
      alignItems: "center",

      gap: isMobile ? "15px" : "20px",

      marginLeft:
        isMobile || isTablet
          ? "auto"
          : "38px",

      color: "#555555",
    },

    iconButton: {
      width: isMobile ? "22px" : "26px",
      height: isMobile ? "22px" : "26px",

      padding: 0,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      color: "#555555",
      background: "transparent",
      border: "none",

      cursor: "pointer",
    },

    svg: {
      width: isMobile ? "20px" : "22px",
      height: isMobile ? "20px" : "22px",

      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.inner}>

        {/* =========================
            LOGO
        ========================= */}

        <a href="/" style={styles.logoLink}>
          <img
            src={logo}
            alt="Shilpi Jewels"
            style={styles.logo}
          />
        </a>

        {/* =========================
            NAVIGATION
        ========================= */}

        <nav style={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* =========================
            ICONS
        ========================= */}

        <div style={styles.icons}>

          {/* Account */}
          <button
            aria-label="Account"
            style={styles.iconButton}
          >
            <svg viewBox="0 0 24 24" style={styles.svg}>
              <circle
                cx="12"
                cy="7.5"
                r="3.5"
              />

              <path
                d="M4.5 20C5.2 15.8 8 13.5 12 13.5C16 13.5 18.8 15.8 19.5 20"
              />
            </svg>
          </button>

          {/* Wishlist */}
          <button
            aria-label="Wishlist"
            style={styles.iconButton}
          >
            <svg viewBox="0 0 24 24" style={styles.svg}>
              <path
                d="M20.8 8.8C20.8 13.2 12 19.5 12 19.5C12 19.5 3.2 13.2 3.2 8.8C3.2 6.3 4.9 4.5 7.2 4.5C9.1 4.5 10.7 5.7 12 7.2C13.3 5.7 14.9 4.5 16.8 4.5C19.1 4.5 20.8 6.3 20.8 8.8Z"
              />
            </svg>
          </button>

          {/* Search */}
          <button
            aria-label="Search"
            style={styles.iconButton}
          >
            <svg viewBox="0 0 24 24" style={styles.svg}>
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
              />

              <path d="M16 16L21 21" />
            </svg>
          </button>

          {/* Shopping Bag */}
          <button
            aria-label="Shopping bag"
            style={styles.iconButton}
          >
            <svg viewBox="0 0 24 24" style={styles.svg}>
              <path d="M5 8.5H19L20 20H4L5 8.5Z" />

              <path
                d="M8.5 9V6.5C8.5 4.6 10 3 12 3C14 3 15.5 4.6 15.5 6.5V9"
              />
            </svg>
          </button>

          {/* Menu */}
          <button
            aria-label="Menu"
            style={styles.iconButton}
          >
            <svg viewBox="0 0 24 24" style={styles.svg}>
              <path d="M4 7H20M4 12H20M4 17H20" />
            </svg>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;