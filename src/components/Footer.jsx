import React, { useEffect, useState } from "react";

import logo from "../assets/images/shilpi-logo.png";

import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/youtube.png";
import linkedinIcon from "../assets/icons/linkedin.png";

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
   FOOTER COMPONENT
========================= */

function Footer() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1100px)"
  );

  const styles = {
    /* =========================
       MAIN FOOTER
    ========================= */

    section: {
      width: "100%",

      marginTop: isMobile
        ? "35px"
        : isTablet
          ? "45px"
          : "55px",

      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,

      padding: 0,

      boxSizing: "border-box",

      overflow: "hidden",
    },

    /* =========================
       FOOTER TOP
    ========================= */

    footerTop: {
      width: "100%",

      background:
        "linear-gradient(180deg, #f2f1ff 0%, #faf9ff 55%, #ffffff 100%)",

      boxSizing: "border-box",
    },

    /* =========================
       MAIN CONTAINER
    ========================= */

    container: {
      width: isMobile
        ? "100%"
        : isTablet
          ? "94%"
          : "84.5%",

      maxWidth: "1500px",

      margin: "0 auto",

      padding: isMobile
        ? "42px 24px 40px"
        : isTablet
          ? "45px 25px 40px"
          : "30px 0 22px",

      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "1.15fr 0.9fr 1.2fr 1.2fr"
          : "1.25fr 0.92fr 1.2fr 1.2fr",

      columnGap: isMobile
        ? "0"
        : isTablet
          ? "30px"
          : "42px",

      rowGap: isMobile
        ? "42px"
        : "0",

      alignItems: "start",

      boxSizing: "border-box",
    },

    /* =========================
       COMMON COLUMN
    ========================= */

    column: {
      minWidth: 0,
      boxSizing: "border-box",
    },

    /* =========================
       BRAND COLUMN
    ========================= */

    brandColumn: {
      minWidth: 0,

      display: "flex",

      flexDirection: "column",

      alignItems: "flex-start",

      boxSizing: "border-box",
    },

    /* =========================
       LOGO
    ========================= */

    logo: {
      width: isMobile
        ? "165px"
        : isTablet
          ? "170px"
          : "178px",

      height: "auto",

      display: "block",

      objectFit: "contain",

      margin: 0,
      padding: 0,
    },

    /* =========================
       BRAND DESCRIPTION
    ========================= */

    brandDescription: {
      width: "100%",

      maxWidth: isMobile
        ? "330px"
        : isTablet
          ? "270px"
          : "280px",

      margin: isMobile
        ? "27px 0 0"
        : "28px 0 0",

      padding: 0,

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "16px"
        : "16px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.72
        : 1.68,

      color: "#292566",

      textAlign: "left",

      boxSizing: "border-box",
    },

    /* =========================
       SOCIAL ROW
    ========================= */

    socialRow: {
      display: "flex",

      alignItems: "center",

      gap: isMobile
        ? "15px"
        : "18px",

      marginTop: isMobile
        ? "27px"
        : "28px",

      padding: 0,
    },

    /* =========================
       SOCIAL LINK
    ========================= */

    socialLink: {
      width: isMobile
        ? "34px"
        : "32px",

      height: isMobile
        ? "34px"
        : "32px",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      textDecoration: "none",

      cursor: "pointer",

      flexShrink: 0,
    },

    /* =========================
       SOCIAL ICON
    ========================= */

    socialIcon: {
      width: "100%",

      height: "100%",

      display: "block",

      objectFit: "contain",
    },

    /* =========================
       COLUMN HEADING
    ========================= */

    columnHeading: {
      margin: 0,

      padding: 0,

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "24px"
        : isTablet
          ? "23px"
          : "24px",

      fontWeight: 500,

      lineHeight: 1.25,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       QUICK LINKS
    ========================= */

    quickLinks: {
      marginTop: isMobile
        ? "22px"
        : "23px",

      padding: 0,

      display: "flex",

      flexDirection: "column",

      alignItems: "flex-start",

      gap: isMobile
        ? "17px"
        : "15px",
    },

    quickLink: {
      margin: 0,

      padding: 0,

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "16px"
        : "16px",

      fontWeight: 400,

      lineHeight: 1.3,

      color: "#292566",

      textDecoration: "none",

      cursor: "pointer",

      transition: "opacity 0.25s ease",
    },

    /* =========================
       CUSTOMER CARE
    ========================= */

    customerCareDescription: {
      width: "100%",

      maxWidth: isMobile
        ? "330px"
        : "260px",

      margin: isMobile
        ? "22px 0 0"
        : "24px 0 0",

      padding: 0,

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "16px"
        : "16px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.7
        : 1.72,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       CONTACT DETAILS
    ========================= */

    contactDetails: {
      width: "100%",

      marginTop: isMobile
        ? "32px"
        : "65px",

      display: "flex",

      flexDirection: "column",

      gap: isMobile
        ? "16px"
        : "13px",

      boxSizing: "border-box",
    },

    contactItem: {
      width: "100%",

      display: "flex",

      alignItems: "flex-start",

      gap: "10px",

      boxSizing: "border-box",
    },

    contactIconWrapper: {
      width: "18px",

      minWidth: "18px",

      height: "20px",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      flexShrink: 0,

      marginTop: "1px",
    },

    contactText: {
      margin: 0,

      padding: 0,

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "16px"
        : "16px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.65
        : 1.7,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       ENQUIRY HEADING
    ========================= */

    enquiryHeading: {
      margin: 0,

      padding: 0,

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "24px"
        : isTablet
          ? "23px"
          : "24px",

      fontWeight: 500,

      lineHeight: 1.25,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       FORM
    ========================= */

    form: {
      width: "100%",

      marginTop: isMobile
        ? "25px"
        : "28px",

      display: "flex",

      flexDirection: "column",

      gap: isMobile
        ? "14px"
        : "13px",
    },

    /* =========================
       INPUT
    ========================= */

    input: {
      width: "100%",

      height: isMobile
        ? "48px"
        : "45px",

      border: "1px solid #aaa9c5",

      borderRadius: 0,

      backgroundColor: "transparent",

      padding: isMobile
        ? "0 14px"
        : "0 13px",

      boxSizing: "border-box",

      outline: "none",

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "16px"
        : "15px",

      fontWeight: 400,

      color: "#292566",
    },

    /* =========================
       TEXTAREA
    ========================= */

    textarea: {
      width: "100%",

      height: isMobile
        ? "135px"
        : "130px",

      border: "1px solid #aaa9c5",

      borderRadius: 0,

      backgroundColor: "transparent",

      padding: isMobile
        ? "13px 14px"
        : "12px 13px",

      boxSizing: "border-box",

      outline: "none",

      resize: "none",

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "16px"
        : "15px",

      fontWeight: 400,

      color: "#292566",
    },

    /* =========================
       SEND BUTTON
    ========================= */

    button: {
      width: "100%",

      height: isMobile
        ? "47px"
        : "45px",

      margin: 0,

      padding: 0,

      border: "none",

      borderRadius: 0,

      backgroundColor: "#292566",

      color: "#ffffff",

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "16px"
        : "15px",

      fontWeight: 500,

      letterSpacing: "0.2px",

      cursor: "pointer",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      transition: "background-color 0.25s ease",
    },

    /* =========================
       COPYRIGHT BAR
    ========================= */

    copyright: {
      width: "100%",

      minHeight: isMobile
        ? "72px"
        : "76px",

      backgroundColor: "#292566",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      padding: isMobile
        ? "18px 20px"
        : "18px 25px",

      boxSizing: "border-box",
    },

    copyrightText: {
      margin: 0,

      padding: 0,

      fontFamily: "Arial, Helvetica, sans-serif",

      fontSize: isMobile
        ? "13px"
        : "15px",

      fontWeight: 400,

      lineHeight: 1.6,

      letterSpacing: "0.2px",

      color: "#ffffff",

      textAlign: "center",
    },

    divider: {
      display: "inline-block",

      margin: isMobile
        ? "0 8px"
        : "0 12px",

      opacity: 0.45,
    },

    viaVistasLink: {
      color: "#ffffff",

      textDecoration: "none",

      fontWeight: 500,

      letterSpacing: "0.4px",

      transition: "opacity 0.25s ease",
    },
  };

  return (
    <footer style={styles.section}>

      {/* =========================
          FOOTER TOP
      ========================= */}

      <div style={styles.footerTop}>

        <div style={styles.container}>

          {/* =========================
              BRAND
          ========================= */}

          <div
            style={{
              ...styles.column,
              ...styles.brandColumn,
            }}
          >

            <img
              src={logo}
              alt="Shilpi Jewels"
              style={styles.logo}
            />

            <p style={styles.brandDescription}>
              For over four decades, Shilpi Jewels
              <br />
              has combined traditional craftsmanship
              <br />
              with evolving design to create jewellery
              <br />
              that carries a legacy of trust, artistry
              <br />
              and excellence.
            </p>

            {/* SOCIAL ICONS */}

            <div style={styles.socialRow}>

              <a
                href="#facebook"
                aria-label="Facebook"
                style={styles.socialLink}
              >
                <img
                  src={facebookIcon}
                  alt=""
                  style={styles.socialIcon}
                />
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                style={styles.socialLink}
              >
                <img
                  src={instagramIcon}
                  alt=""
                  style={styles.socialIcon}
                />
              </a>

              <a
                href="#youtube"
                aria-label="YouTube"
                style={styles.socialLink}
              >
                <img
                  src={youtubeIcon}
                  alt=""
                  style={styles.socialIcon}
                />
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                style={styles.socialLink}
              >
                <img
                  src={linkedinIcon}
                  alt=""
                  style={styles.socialIcon}
                />
              </a>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================= */}

          <div style={styles.column}>

            <h3 style={styles.columnHeading}>
              Quick Links
            </h3>

            <nav style={styles.quickLinks}>

              <a
                href="#home"
                style={styles.quickLink}
              >
                Home
              </a>

              <a
                href="#collections"
                style={styles.quickLink}
              >
                Collections
              </a>

              <a
                href="#story"
                style={styles.quickLink}
              >
                Our Story
              </a>

              <a
                href="#craftsmanship"
                style={styles.quickLink}
              >
                Craftsmanship
              </a>

              <a
                href="#contact"
                style={styles.quickLink}
              >
                Contact
              </a>

            </nav>

          </div>


          {/* =========================
              CUSTOMER CARE
          ========================= */}

          <div style={styles.column}>

            <h3 style={styles.columnHeading}>
              Customer Care
            </h3>

            <nav style={styles.quickLinks}>

              <a
                href="/privacy-policy"
                style={styles.quickLink}
              >
                Privacy Policy
              </a>

              <a
                href="/terms-conditions"
                style={styles.quickLink}
              >
                Terms & Conditions
              </a>

            </nav>


            {/* =========================
                CONTACT DETAILS
            ========================= */}

            <div style={styles.contactDetails}>

              {/* LOCATION */}

              <div style={styles.contactItem}>

                <div style={styles.contactIconWrapper}>

                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path
                      d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
                      stroke="#292566"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="12"
                      cy="10"
                      r="2.8"
                      stroke="#292566"
                      strokeWidth="1.7"
                    />

                  </svg>

                </div>

                <p style={styles.contactText}>
                  29 | 31, 2<sup>nd</sup> Floor,
                  <br />
                  Meena Apartment, Dhanji Street,
                  <br />
                  Zaveri Bazar Mumbai - 400003
                </p>

              </div>


              {/* PHONE */}

              <div style={styles.contactItem}>

                <div style={styles.contactIconWrapper}>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path
                      d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.81 17.44 14.93C18.59 15.31 19.82 15.52 21.1 15.52C21.6 15.52 22 15.92 22 16.42V19.9C22 20.4 21.6 20.8 21.1 20.8C10.76 20.8 3.2 13.24 3.2 3.9C3.2 3.4 3.6 3 3.1 3H7.58C8.08 3 8.48 3.4 8.48 3.9C8.48 5.18 8.69 6.41 9.07 7.56C9.19 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                      stroke="#292566"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                  </svg>

                </div>

                <p style={styles.contactText}>
                  +91 22 4066 0700
                </p>

              </div>


              {/* EMAIL */}

              <div style={styles.contactItem}>

                <div style={styles.contactIconWrapper}>

                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path
                      d="M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5Z"
                      stroke="#292566"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#292566"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                  </svg>

                </div>

                <p style={styles.contactText}>
                  info@shilpijewels.com
                </p>

              </div>

            </div>

          </div>


          {/* =========================
              SEND ENQUIRY
          ========================= */}

          <div style={styles.column}>

            <h3 style={styles.enquiryHeading}>
              Send Enquiry
            </h3>

            <form style={styles.form}>

              <input
                type="text"
                placeholder="Your Name"
                style={styles.input}
              />

              <input
                type="email"
                placeholder="Your Email"
                style={styles.input}
              />

              <textarea
                placeholder="Your Message"
                style={styles.textarea}
              />

              <button
                type="submit"
                style={styles.button}
              >
                SEND MESSAGE
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* =========================
          COPYRIGHT BAR
      ========================= */}

      <div style={styles.copyright}>

        <p style={styles.copyrightText}>

          2026 Shilpi Jewels. All rights reserved.

          <span style={styles.divider}>
            |
          </span>

          Designed & Developed by{" "}

          <a
            href="https://www.viavistas.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.viaVistasLink}
          >
            ViaVistas
          </a>

        </p>

      </div>

    </footer>
  );
}

export default Footer;