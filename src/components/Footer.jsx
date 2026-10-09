
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

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
    if (typeof window === "undefined") return;

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

  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
     EMAILJS CONFIGURATION
  ========================= */

  const EMAILJS_SERVICE_ID = "service_ud31gdq";
  const EMAILJS_TEMPLATE_ID = "template_ygwf328";
  const EMAILJS_PUBLIC_KEY = "4JDtLsC5Jy4q5ITUc";

  const [isSending, setIsSending] = useState(false);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  /* =========================
     EMAILJS FORM SUBMISSION
  ========================= */

  const handleInquirySubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    // Save the form reference before the asynchronous request.
    const form = event.currentTarget;

    setIsSending(true);
    setFormStatus({
      type: "",
      message: "",
    });

    try {
      const response = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log(
        "EmailJS submission successful:",
        response.status,
        response.text
      );

      setFormStatus({
        type: "success",
        message: "Thank you! Your enquiry has been sent successfully.",
      });

      // Reset only after EmailJS confirms success.
      form.reset();
    } catch (error) {
      // Log the actual error for debugging.
      console.error("EmailJS footer inquiry error:", error);
      console.error("EmailJS error status:", error?.status);
      console.error("EmailJS error details:", error?.text);

      setFormStatus({
        type: "error",
        message: "We could not send your enquiry. Please try again shortly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  /* =========================
     LOGO → HOME FUNCTION
  ========================= */

  const handleLogoClick = (event) => {
    event.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");

    // Scroll to the top after navigation.
    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  /* =========================
     FOOTER STYLES
  ========================= */

  const styles = {
    section: {
      width: "100%",
      marginTop: isMobile ? "35px" : isTablet ? "45px" : "55px",
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      padding: 0,
      boxSizing: "border-box",
      overflow: "hidden",
    },

    footerTop: {
      width: "100%",
      background:
        "linear-gradient(180deg, #f2f1ff 0%, #faf9ff 55%, #ffffff 100%)",
      boxSizing: "border-box",
    },

    container: {
      width: isMobile ? "100%" : isTablet ? "94%" : "84.5%",
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

      columnGap: isMobile ? "0" : isTablet ? "30px" : "42px",
      rowGap: isMobile ? "42px" : "0",
      alignItems: "start",
      boxSizing: "border-box",
    },

    column: {
      minWidth: 0,
      boxSizing: "border-box",
    },

    brandColumn: {
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      boxSizing: "border-box",
    },

    logo: {
      width: isMobile ? "165px" : isTablet ? "170px" : "178px",
      height: "auto",
      display: "block",
      objectFit: "contain",
      margin: 0,
      padding: 0,
    },

    brandDescription: {
      width: "100%",
      maxWidth: isMobile ? "330px" : isTablet ? "270px" : "280px",
      margin: isMobile ? "27px 0 0" : "28px 0 0",
      padding: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: isMobile ? 1.72 : 1.68,
      color: "#292566",
      textAlign: "left",
      boxSizing: "border-box",
    },

    socialRow: {
      display: "flex",
      alignItems: "center",
      gap: isMobile ? "15px" : "18px",
      marginTop: isMobile ? "27px" : "28px",
      padding: 0,
    },

    socialLink: {
      width: isMobile ? "34px" : "32px",
      height: isMobile ? "34px" : "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      flexShrink: 0,
    },

    socialIcon: {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "contain",
    },

    columnHeading: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: isMobile ? "24px" : isTablet ? "23px" : "24px",
      fontWeight: 500,
      lineHeight: 1.25,
      color: "#292566",
      textAlign: "left",
    },

    quickLinks: {
      marginTop: isMobile ? "22px" : "23px",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: isMobile ? "17px" : "15px",
    },

    quickLink: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.3,
      color: "#292566",
      textDecoration: "none",
      cursor: "pointer",
      transition: "opacity 0.25s ease",
    },

    customerCareDescription: {
      width: "100%",
      maxWidth: isMobile ? "330px" : "260px",
      margin: isMobile ? "22px 0 0" : "24px 0 0",
      padding: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: isMobile ? 1.7 : 1.72,
      color: "#292566",
      textAlign: "left",
    },

    contactDetails: {
      width: "100%",
      marginTop: isMobile ? "32px" : "65px",
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "16px" : "13px",
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
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: isMobile ? 1.65 : 1.7,
      color: "#292566",
      textAlign: "left",
    },

    enquiryHeading: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: isMobile ? "24px" : isTablet ? "23px" : "24px",
      fontWeight: 500,
      lineHeight: 1.25,
      color: "#292566",
      textAlign: "left",
    },

    form: {
      width: "100%",
      marginTop: isMobile ? "25px" : "28px",
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "14px" : "13px",
    },

    input: {
      width: "100%",
      height: isMobile ? "48px" : "45px",
      border: "1px solid #aaa9c5",
      borderRadius: 0,
      backgroundColor: "transparent",
      padding: isMobile ? "0 14px" : "0 13px",
      boxSizing: "border-box",
      outline: "none",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: isMobile ? "16px" : "15px",
      fontWeight: 400,
      color: "#292566",
    },

    textarea: {
      width: "100%",
      height: isMobile ? "135px" : "130px",
      border: "1px solid #aaa9c5",
      borderRadius: 0,
      backgroundColor: "transparent",
      padding: isMobile ? "13px 14px" : "12px 13px",
      boxSizing: "border-box",
      outline: "none",
      resize: "none",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: isMobile ? "16px" : "15px",
      fontWeight: 400,
      color: "#292566",
    },

    button: {
      width: "100%",
      height: isMobile ? "47px" : "45px",
      margin: 0,
      padding: 0,
      border: "none",
      borderRadius: 0,
      backgroundColor: "#292566",
      color: "#ffffff",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: isMobile ? "16px" : "15px",
      fontWeight: 500,
      letterSpacing: "0.2px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.25s ease",
    },

    copyright: {
      width: "100%",
      minHeight: isMobile ? "72px" : "76px",
      backgroundColor: "#292566",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: isMobile ? "18px 20px" : "18px 25px",
      boxSizing: "border-box",
    },

    copyrightText: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: isMobile ? "13px" : "15px",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.2px",
      color: "#ffffff",
      textAlign: "center",
    },

    divider: {
      display: "inline-block",
      margin: isMobile ? "0 8px" : "0 12px",
      opacity: 0.45,
    },

    viaVistasLink: {
      color: "#C3D82D",
      textDecoration: "none",
      fontWeight: 500,
      letterSpacing: "0.4px",
      transition: "opacity 0.25s ease",
    },
  };

  return (
    <footer style={styles.section}>
      {/* FOOTER TOP */}

      <div style={styles.footerTop}>
        <div style={styles.container}>
          {/* BRAND COLUMN */}

          <div
            style={{
              ...styles.column,
              ...styles.brandColumn,
            }}
          >
            <a
              href="/"
              onClick={handleLogoClick}
              aria-label="Go to Shilpi Jewels Home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={logo}
                alt="Shilpi Jewels"
                style={styles.logo}
              />
            </a>

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
                href="https://www.facebook.com/ShilpiJewelsMumbai/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
              >
                <img
                  src={facebookIcon}
                  alt=""
                  style={styles.socialIcon}
                />
              </a>

              <a
                href="https://www.instagram.com/shilpi_jewels/?hl=en"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
              >
                <img
                  src={instagramIcon}
                  alt=""
                  style={styles.socialIcon}
                />
              </a>

              <a
                href="https://www.youtube.com/watch?v=IQMTWFrXzyA"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
              >
                <img
                  src={youtubeIcon}
                  alt=""
                  style={styles.socialIcon}
                />
              </a>

              <a
                href="https://in.linkedin.com/company/shilpi-jewels"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
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

          {/* QUICK LINKS */}

          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Quick Links</h3>

            <nav style={styles.quickLinks}>
              <a href="/" style={styles.quickLink}>
                Home
              </a>

              <a href="/collection" style={styles.quickLink}>
                Collections
              </a>

              <a href="/missionpage" style={styles.quickLink}>
                Our Story
              </a>

              <a href="/craftsmanshippage" style={styles.quickLink}>
                Craftsmanship
              </a>

              <a href="/contactpage" style={styles.quickLink}>
                Contact
              </a>
            </nav>
          </div>

          {/* CUSTOMER CARE */}

          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Customer Care</h3>

            <nav style={styles.quickLinks}>
              <a href="/privacy-policy" style={styles.quickLink}>
                Privacy Policy
              </a>

              <a href="/terms-conditions" style={styles.quickLink}>
                Terms & Conditions
              </a>
            </nav>

            {/* CONTACT DETAILS */}

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

          {/* SEND ENQUIRY */}

          <div style={styles.column}>
            <h3 style={styles.enquiryHeading}>Send Enquiry</h3>

            <form
              style={styles.form}
              onSubmit={handleInquirySubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={styles.input}
                autoComplete="name"
                required
                disabled={isSending}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                style={styles.input}
                autoComplete="email"
                required
                disabled={isSending}
              />

              <input
                type="hidden"
                name="phone"
                value="Not provided in footer form"
                readOnly
              />

              <input
                type="hidden"
                name="interest"
                value="Footer Website Inquiry"
                readOnly
              />

              <textarea
                name="message"
                placeholder="Your Message"
                style={styles.textarea}
                required
                disabled={isSending}
              />

              <button
                type="submit"
                style={{
                  ...styles.button,
                  opacity: isSending ? 0.7 : 1,
                  cursor: isSending ? "not-allowed" : "pointer",
                }}
                disabled={isSending}
              >
                {isSending ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {/* FORM STATUS */}

              {formStatus.message && (
                <p
                  role="status"
                  aria-live="polite"
                  style={{
                    margin: "2px 0 0",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: isMobile ? "14px" : "13px",
                    lineHeight: 1.6,
                    color:
                      formStatus.type === "success"
                        ? "#52743b"
                        : "#b42318",
                  }}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}

      <div style={styles.copyright}>
        <p style={styles.copyrightText}>
          2026 Shilpi Jewels. All rights reserved.

          <span style={styles.divider}>|</span>

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